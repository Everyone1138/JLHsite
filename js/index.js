            // Initialize floating pixels background
            function createFloatingPixels() {
                const container = document.getElementById('floatingPixels');
                const colors = ['#ff3366', '#00ff99', '#3399ff', '#ffcc00', '#9966ff'];

                for (let i = 0; i < 50; i++) {
                    const pixel = document.createElement('div');
                    pixel.className = 'floating-pixel';
                    pixel.style.left = Math.random() * 100 + '%';
                    pixel.style.top = Math.random() * 100 + '%';
                    pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    pixel.style.animationDuration = (Math.random() * 10 + 5) + 's';
                    pixel.style.animationDelay = (Math.random() * 5) + 's';
                    pixel.style.opacity = Math.random() * 0.7 + 0.3;
                    pixel.style.width = (Math.random() * 8 + 4) + 'px';
                    pixel.style.height = pixel.style.width;
                    container.appendChild(pixel);
                }
            }

            // Sound effects
            function playSound(type) {
                let sound;
                switch (type) {
                    case 'hover':
                        sound = document.getElementById('hoverSound');
                        break;
                    case 'select':
                        sound = document.getElementById('selectSound');
                        break;
                    case 'confirm':
                        sound = document.getElementById('confirmSound');
                        break;
                }

                sound.currentTime = 0;
                sound.play();
            }

            // FAQ toggle functionality
            function setupFaqToggles() {
                const toggles = document.querySelectorAll('.faq-toggle');

                toggles.forEach(toggle => {
                    toggle.addEventListener('click', function() {
                        playSound('select');
                        const content = this.nextElementSibling;
                        const icon = this.querySelector('i');

                        content.classList.toggle('hidden');
                        icon.classList.toggle('rotate-180');
                    });
                });
            }

            // Form submission
            /*  Attach fetch-based handler AFTER the DOM is ready  */
            window.addEventListener('DOMContentLoaded', () => {
                const form = document.getElementById('contactForm');
                const status = document.getElementById('statusMessage');

                form.addEventListener('submit', async(e) => {
                    e.preventDefault();

                    const data = {
                        name: form.name.value.trim(),
                        email: form.email.value.trim(),
                        subject: form.subject.value.trim(),
                        message: form.message.value.trim(),
                        newsletter: form.newsletter.checked
                    };

                    try {
                        const res = await fetch('/api/contact', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(data)
                        });
                        if (!res.ok) throw new Error(await res.text());

                        status.textContent = 'Message sent successfully! We’ll be in touch soon.';
                        status.classList.remove('text-red-400');
                        status.classList.add('text-green-400');
                        status.classList.add('show');
                        form.reset();
                        document.getElementById('successPopup').classList.remove('hidden');

                    } catch (err) {
                        console.error(err);
                        status.textContent = 'Sorry, something went wrong. Please try again.';
                        status.classList.remove('text-green-400');
                        status.classList.add('text-red-400');
                        status.classList.add('show');
                    }
                    setTimeout(() => status.classList.remove('show'), 6000);


                });
            });
            // pop-up closer
            function closePopup() {
                document.getElementById('successPopup').classList.add('hidden');
            }










            // Initialize on load
            window.addEventListener('load', function() {
                createFloatingPixels();
                setupFaqToggles();
                setupContactForm();

                // Add hover effects to buttons and cards
                const buttons = document.querySelectorAll('button');
                buttons.forEach(button => {
                    button.addEventListener('mouseenter', () => playSound('hover'));
                });

                const cards = document.querySelectorAll('.contact-card');
                cards.forEach(card => {
                    card.addEventListener('mouseenter', () => playSound('hover'));
                });
            });





            // Toggle function
            function toggleRightMenu() {
                const menu = document.getElementById('right-menu');
                const isOpen = menu.classList.contains('translate-x-0');

                if (isOpen) {
                    menu.classList.remove('translate-x-0');
                    menu.classList.add('translate-x-full');
                } else {
                    menu.classList.remove('translate-x-full');
                    menu.classList.add('translate-x-0');
                }
                playSound('select');
            }


            // Close right menu when clicking outside
            document.addEventListener('click', function(event) {
                const menu = document.getElementById('right-menu');
                const toggleButton = document.querySelector('button[onclick="toggleRightMenu()"]');

                const isMenuOpen = menu.classList.contains('translate-x-0');
                const clickedInsideMenu = menu.contains(event.target);
                const clickedToggleButton = toggleButton.contains(event.target);

                if (isMenuOpen && !clickedInsideMenu && !clickedToggleButton) {
                    toggleRightMenu();
                }
            });




            // Loading screen
            window.addEventListener('load', function() {
                createFloatingPixels();

                setTimeout(function() {
                    document.getElementById('loading-screen').style.opacity = '0';
                    setTimeout(function() {
                        document.getElementById('loading-screen').style.display = 'none';
                        document.getElementById('mainHeader').classList.remove('hidden');
                        showNotification();
                    }, 500);
                }, 2000);
            });

            // Create floating pixels background
            function createFloatingPixels() {
                const container = document.getElementById('floatingPixels');
                const colors = ['#ff3366', '#00ff99', '#3399ff', '#ffcc00', '#9966ff'];

                for (let i = 0; i < 50; i++) {
                    const pixel = document.createElement('div');
                    pixel.className = 'floating-pixel';
                    pixel.style.left = Math.random() * 100 + '%';
                    pixel.style.top = Math.random() * 100 + '%';
                    pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    pixel.style.animationDuration = (Math.random() * 10 + 5) + 's';
                    pixel.style.animationDelay = (Math.random() * 5) + 's';
                    pixel.style.opacity = Math.random() * 0.7 + 0.3;
                    pixel.style.width = (Math.random() * 8 + 4) + 'px';
                    pixel.style.height = pixel.style.width;
                    container.appendChild(pixel);
                }
            }

            // Show notification
            function showNotification() {
                const notification = document.getElementById('notification');
                notification.style.bottom = '20px';

                setTimeout(function() {
                    notification.style.bottom = '-100px';
                }, 3000);
            }

            // Sound effects
            function playSound(type) {
                let sound;
                switch (type) {
                    case 'hover':
                        sound = document.getElementById('hoverSound');
                        break;
                    case 'select':
                        sound = document.getElementById('selectSound');
                        break;
                    case 'confirm':
                        sound = document.getElementById('confirmSound');
                        break;
                    case 'coin':
                        sound = document.getElementById('coinSound');
                        break;
                    case 'gameover':
                        sound = document.getElementById('gameOverSound');
                        break;
                    case 'jump':
                        sound = document.getElementById('jumpSound');
                        break;
                    case 'glitch':
                        sound = document.getElementById('glitchSound');
                        break;
                    case 'explosion':
                        sound = document.getElementById('explosionSound');
                        break;
                }

                sound.currentTime = 0;
                sound.play();
            }

            // Carousel functionality
            let currentSlide = 0;
            const slides = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.carousel-indicator');

            function showSlide(index) {
                // Hide all slides
                slides.forEach(slide => {
                    slide.style.opacity = '0';
                });

                // Reset all indicators
                indicators.forEach(indicator => {
                    indicator.classList.remove('bg-purple-400');
                    indicator.classList.add('bg-gray-600');
                });

                // Show selected slide
                slides[index].style.opacity = '1';

                // Highlight selected indicator
                indicators[index].classList.remove('bg-gray-600');
                indicators[index].classList.add('bg-purple-400');

                currentSlide = index;
            }

            // Auto-advance carousel
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            // Initialize carousel
            showSlide(0);

            // Auto-advance every 5 seconds
            setInterval(nextSlide, 5000);

            // Mobile menu toggle
            function toggleMobileMenu() {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
                playSound('select');
            }

            // Easter egg - coin collection
            let coins = 0;
            const coinCounter = document.getElementById('coin-counter');

            function collectCoin() {
                coins++;
                document.getElementById('coin-count').textContent = coins;
                coinCounter.classList.remove('hidden');
                playSound('coin');

                // Move the character to a new random position
                const egg = document.getElementById('easter-egg');
                egg.style.left = Math.random() * 80 + 5 + '%';
                egg.style.bottom = Math.random() * 60 + 5 + '%';

                // Show confetti if collected 5 coins
                if (coins % 5 === 0) {
                    showConfetti();
                }
            }

            // Confetti effect
            function showConfetti() {
                const confetti = document.createElement('div');
                confetti.className = 'fixed inset-0 z-50 pointer-events-none';
                confetti.innerHTML = `
                <canvas id="confetti-canvas" class="w-full h-full"></canvas>
            `;
                document.body.appendChild(confetti);

                const canvas = document.getElementById('confetti-canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                const pieces = [];
                const colors = ['#ff3366', '#00ff99', '#3399ff', '#ffcc00', '#9966ff'];

                for (let i = 0; i < 100; i++) {
                    pieces.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height - canvas.height,
                        size: Math.random() * 10 + 5,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        speed: Math.random() * 3 + 2,
                        rotation: Math.random() * 360,
                        rotationSpeed: Math.random() * 5 - 2.5
                    });
                }

                function animate() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    let stillActive = false;

                    pieces.forEach(piece => {
                        piece.y += piece.speed;
                        piece.rotation += piece.rotationSpeed;

                        if (piece.y < canvas.height) {
                            stillActive = true;
                        }

                        ctx.save();
                        ctx.translate(piece.x, piece.y);
                        ctx.rotate(piece.rotation * Math.PI / 180);
                        ctx.fillStyle = piece.color;
                        ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
                        ctx.restore();
                    });

                    if (stillActive) {
                        requestAnimationFrame(animate);
                    } else {
                        confetti.remove();
                    }
                }

                animate();
            }

            // Pixel rain effect
            function startPixelRain() {
                const rain = document.getElementById('pixelRain');
                rain.style.display = 'block';

                // Create pixels
                for (let i = 0; i < 200; i++) {
                    const pixel = document.createElement('div');
                    pixel.className = 'pixel';
                    pixel.style.left = Math.random() * 100 + '%';
                    pixel.style.top = Math.random() * -100 + '%';
                    pixel.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    pixel.style.animation = `fall ${Math.random() * 2 + 1}s linear infinite`;
                    pixel.style.animationDelay = Math.random() * 5 + 's';
                    rain.appendChild(pixel);
                }

                // Add animation
                const style = document.createElement('style');
                style.innerHTML = `
                @keyframes fall {
                    to {
                        transform: translateY(100vh);
                    }
                }
            `;
                document.head.appendChild(style);

                setTimeout(() => {
                    rain.style.display = 'none';
                    while (rain.firstChild) {
                        rain.removeChild(rain.firstChild);
                    }
                }, 3000);
            }

            // Glitch effect
            function showGlitchEffect() {
                playSound('glitch');

                // Add glitch class to body
                document.body.classList.add('glitch-effect');

                // Create glitch elements
                const glitch1 = document.createElement('div');
                glitch1.className = 'glitch-layer';
                glitch1.style.background = 'url(https://placehold.co/600x400/blue/white?text=GLITCH)';
                glitch1.style.animation = 'glitch-anim-1 2s infinite linear';

                const glitch2 = document.createElement('div');
                glitch2.className = 'glitch-layer';
                glitch2.style.background = 'url(https://placehold.co/600x400/red/white?text=GLITCH)';
                glitch2.style.animation = 'glitch-anim-2 2s infinite linear';

                const glitchContainer = document.createElement('div');
                glitchContainer.className = 'glitch-container';
                glitchContainer.style.position = 'fixed';
                glitchContainer.style.top = '0';
                glitchContainer.style.left = '0';
                glitchContainer.style.width = '100%';
                glitchContainer.style.height = '100%';
                glitchContainer.style.zIndex = '9999';
                glitchContainer.style.pointerEvents = 'none';

                glitchContainer.appendChild(glitch1);
                glitchContainer.appendChild(glitch2);
                document.body.appendChild(glitchContainer);

                // Add glitch animation styles
                const style = document.createElement('style');
                style.innerHTML = `
                .glitch-container {
                    overflow: hidden;
                }
                
                .glitch-layer {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    opacity: 0.7;
                }
                
                @keyframes glitch-anim-1 {
                    0% { transform: translateX(0) translateY(0); opacity: 1; }
                    20% { transform: translateX(-10px) translateY(10px); opacity: 0.8; }
                    40% { transform: translateX(10px) translateY(-10px); opacity: 0.6; }
                    60% { transform: translateX(-10px) translateY(10px); opacity: 0.8; }
                    80% { transform: translateX(10px) translateY(-10px); opacity: 0.6; }
                    100% { transform: translateX(0) translateY(0); opacity: 1; }
                }
                
                @keyframes glitch-anim-2 {
                    0% { transform: translateX(0) translateY(0); opacity: 0.6; }
                    20% { transform: translateX(10px) translateY(-10px); opacity: 0.8; }
                    40% { transform: translateX(-10px) translateY(10px); opacity: 1; }
                    60% { transform: translateX(10px) translateY(-10px); opacity: 0.8; }
                    80% { transform: translateX(-10px) translateY(10px); opacity: 1; }
                    100% { transform: translateX(0) translateY(0); opacity: 0.6; }
                }
            `;
                document.head.appendChild(style);

                setTimeout(() => {
                    document.body.removeChild(glitchContainer);
                    document.body.classList.remove('glitch-effect');
                }, 1000);
            }

            // Pixel explosion effect
            function showExplosion(button) {
                playSound('explosion');

                const rect = button.getBoundingClientRect();
                const explosion = document.createElement('div');
                explosion.className = 'pixel-explosion';
                explosion.style.position = 'absolute';
                explosion.style.left = rect.left + 'px';
                explosion.style.top = rect.top + 'px';
                explosion.style.width = rect.width + 'px';
                explosion.style.height = rect.height + 'px';
                document.body.appendChild(explosion);

                // Create particles
                const colors = ['#ff3366', '#00ff99', '#3399ff', '#ffcc00', '#9966ff'];

                for (let i = 0; i < 30; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'explosion-particle';
                    particle.style.left = '50%';
                    particle.style.top = '50%';
                    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

                    // Random direction
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * 100 + 50;

                    explosion.appendChild(particle);

                    // Animate particle
                    setTimeout(() => {
                        particle.style.transition = `all ${Math.random() * 0.5 + 0.5}s ease-out`;
                        particle.style.opacity = '1';
                        particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
                        particle.style.opacity = '0';

                        setTimeout(() => {
                            particle.remove();
                        }, 1000);
                    }, 0);
                }

                setTimeout(() => {
                    explosion.remove();
                }, 1500);
            }

            // Progress bar for game purchase
            function showProgressBar(button) {
                const card = button.closest('.game-card');
                const progressBar = card.querySelector('.retro-progress');
                const progressFill = card.querySelector('.retro-progress-fill');

                progressBar.classList.remove('hidden');

                let progress = 0;
                const interval = setInterval(() => {
                    progress += 5;
                    progressFill.style.width = progress + '%';

                    if (progress >= 100) {
                        clearInterval(interval);
                        setTimeout(() => {
                            progressBar.classList.add('hidden');
                            showNotification();
                            document.getElementById('notification').textContent = 'Purchase complete! Thank you!';
                        }, 500);
                    }
                }, 100);
            }

            // TV noise effect toggle
            function toggleTVNoise() {
                const noise = document.getElementById('tvNoise');
                if (noise.style.display === 'none') {
                    noise.style.display = 'block';
                    setTimeout(() => {
                        noise.style.display = 'none';
                    }, 2000);
                } else {
                    noise.style.display = 'block';
                    setTimeout(() => {
                        noise.style.display = 'none';
                    }, 2000);
                }
            }

            // Form submission
            function submitForm(e) {
                e.preventDefault();
                playSound('confirm');

                // Show success message
                const notification = document.getElementById('notification');
                notification.textContent = 'Message sent successfully!';
                notification.style.bottom = '20px';

                setTimeout(function() {
                    notification.style.bottom = '-100px';
                }, 3000);

                // Reset form
                document.getElementById('contactForm').reset();
            }

            // Mini game
            const canvas = document.getElementById('gameCanvas');
            const ctx = canvas.getContext('2d');
            const startBtn = document.getElementById('startBtn');
            const jumpBtn = document.getElementById('jumpBtn');

            let gameRunning = false;
            let player = {
                x: 50,
                y: canvas.height - 60,
                width: 30,
                height: 30,
                speed: 0,
                gravity: 0.5,
                jumpPower: -10,
                grounded: false
            };

            let obstacles = [];
            let score = 0;
            let gameSpeed = 3;
            let animationId;

            function startGame() {
                if (gameRunning) return;

                gameRunning = true;
                player = {
                    x: 50,
                    y: canvas.height - 60,
                    width: 30,
                    height: 30,
                    speed: 0,
                    gravity: 0.5,
                    jumpPower: -10,
                    grounded: false
                };

                obstacles = [];
                score = 0;
                gameSpeed = 3;

                startBtn.classList.add('hidden');
                jumpBtn.classList.remove('hidden');

                // Touch controls for mobile
                if ('ontouchstart' in window) {
                    document.addEventListener('touchstart', jump);
                }

                // Keyboard controls
                document.addEventListener('keydown', function(e) {
                    if (e.code === 'Space' || e.key === 'ArrowUp') {
                        jump();
                    }
                });

                gameLoop();
            }

            function jump() {
                if (player.grounded) {
                    player.speed = player.jumpPower;
                    player.grounded = false;
                    playSound('jump');
                }
            }

            function gameLoop() {
                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Update player
                player.speed += player.gravity;
                player.y += player.speed;

                // Ground collision
                if (player.y > canvas.height - player.height) {
                    player.y = canvas.height - player.height;
                    player.speed = 0;
                    player.grounded = true;
                }

                // Draw player
                ctx.fillStyle = '#ff3366';
                ctx.fillRect(player.x, player.y, player.width, player.height);

                // Generate obstacles
                if (Math.random() < 0.02) {
                    obstacles.push({
                        x: canvas.width,
                        width: 20,
                        height: Math.random() * 30 + 30,
                        speed: gameSpeed
                    });
                }

                // Update and draw obstacles
                for (let i = obstacles.length - 1; i >= 0; i--) {
                    obstacles[i].x -= obstacles[i].speed;

                    ctx.fillStyle = '#3399ff';
                    ctx.fillRect(obstacles[i].x, canvas.height - obstacles[i].height, obstacles[i].width, obstacles[i].height);

                    // Collision detection
                    if (
                        player.x < obstacles[i].x + obstacles[i].width &&
                        player.x + player.width > obstacles[i].x &&
                        player.y < canvas.height &&
                        player.y + player.height > canvas.height - obstacles[i].height
                    ) {
                        gameOver();
                        return;
                    }

                    // Remove off-screen obstacles
                    if (obstacles[i].x + obstacles[i].width < 0) {
                        obstacles.splice(i, 1);
                        score++;

                        // Increase difficulty
                        if (score % 5 === 0) {
                            gameSpeed += 0.5;
                        }
                    }
                }

                // Draw score
                ctx.fillStyle = '#ffffff';
                ctx.font = '20px "Press Start 2P"';
                ctx.fillText('SCORE: ' + score, 20, 30);

                animationId = requestAnimationFrame(gameLoop);
            }

            function gameOver() {
                cancelAnimationFrame(animationId);
                gameRunning = false;

                playSound('gameover');

                // Draw game over screen
                ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = '#ff3366';
                ctx.font = '30px "Press Start 2P"';
                ctx.textAlign = 'center';
                ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 20);

                ctx.fillStyle = '#ffffff';
                ctx.font = '20px "Press Start 2P"';
                ctx.fillText('FINAL SCORE: ' + score, canvas.width / 2, canvas.height / 2 + 20);

                startBtn.textContent = 'PLAY AGAIN';
                startBtn.classList.remove('hidden');
                jumpBtn.classList.add('hidden');

                // Remove event listeners
                document.removeEventListener('keydown', jump);
                document.removeEventListener('touchstart', jump);
            }