/* Jupiter Lighthouse – tiny contact-form backend
   Run with:  node server.js
---------------------------------------------------*/
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

/* ---------- middleware ---------- */
app.use(cors());
app.use(express.json());
app.use(express.static('index.html')); // serves your HTML/CSS/JS

/* ---------- nodemailer ---------- */
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

/* ---------- POST /api/contact ---------- */
app.post('/api/contact', async(req, res) => {
    try {
        const { name, email, subject, message, newsletter } = req.body;

        if (![name, email, subject, message].every(Boolean)) {
            return res.status(400).json({ ok: false, error: 'Missing required fields' });
        }

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.MAIL_TO,
            subject: `[JLH Contact] ${subject}`,
            html: `
        <h2>New Contact-Us submission</h2>
        <ul>
          <li><b>Name:</b> ${name}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Newsletter opt-in:</b> ${newsletter ? 'Yes' : 'No'}</li>
        </ul>
        <pre style="font-family:inherit;white-space:pre-wrap">${message}</pre>`
        });

        res.json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, error: 'Email failed to send' });
    }
});

/* ---------- start server ---------- */
app.listen(PORT, () =>
    console.log(`🚀  Jupiter Lighthouse backend running at http://localhost:${PORT}`)
);