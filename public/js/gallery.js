// Filter games
function setupGameFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const gameCards = document.querySelectorAll('.game-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            playSound('select');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            // Filter games
            gameCards.forEach(card => {
                if (filter === 'all' || card.dataset.category.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Game details modal
function setupGameModals() {
    const modal = document.getElementById('gameModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close-modal');
    const gameBtns = document.querySelectorAll('.game-details');

    // Game data
    const games = {
        1: {
            title: "WRECKAGE",
            description: "'Florida's a wasteland. A testament to the world's collapse. You've been condemned - sentenced to die in a spectacle of car combat. You might not remember better times, but prisoner, I see potential...'A throwback from the classic car combat era, set in a post-apocalyptic sunny south Florida! Wreckage exists in an alternate timeline where Lead-based gasoline was not banned, and crime waves decimated the sunshine state. From the opening crawl you are a prisoner, condemned to die by car combat. You escape the stadium and into the crowds. And from there, who knows...",
            tags: ["ACTION", "PLATFORMER", "NEW"],
            screenshots: [
                "images/ss_38ab89bf9645f851f7aef18b6400b42e2f7309f0.600x338.jpg",
                "images/ss_481423be16736fc3bd29b52597eaa50b2e7e2745.600x338.jpg",
                "images/ss_476f0e0861133246d994adca30bf4323014e3d11.600x338.jpg",
            ],
            release: "June 2023",
            platforms: ["PC", "Switch", "PlayStation", "Xbox"],
            page: ["https://store.steampowered.com/app/2444530/Wreckage/"]
        },
        2: {
            title: "CHRONO PIXELS",
            description: "An epic time-traveling adventure where your choices shape the future. Explore different eras, meet historical figures, and unravel the mysteries of time itself in this pixel-perfect RPG.",
            tags: ["RPG", "ADVENTURE"],
            screenshots: [
                "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1511512578047-dba367496ab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                "https://images.unsplash.com/photo-1585238342024-78d80f7c1b8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            ],
            release: "March 2023",
            platforms: ["PC", "Switch"]
        },
        3: {
            title: "BLOCK MATRIX",
            description: "Match colors and solve the mystery in this mind-bending puzzle game. With over 100 levels of increasing difficulty, Block Matrix will challenge your pattern recognition and problem-solving skills.",
            tags: ["PUZZLE"],
            screenshots: [
                "https://images.unsplash.com/photo-1585238342024-78d80f7c1b8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            ],
            release: "January 2023",
            platforms: ["PC", "Mobile"]
        },
        4: {
            title: "BLOCK MATRIX",
            description: "Match colors and solve the mystery in this mind-bending puzzle game. With over 100 levels of increasing difficulty, Block Matrix will challenge your pattern recognition and problem-solving skills.",
            tags: ["PUZZLE"],
            screenshots: [
                "https://images.unsplash.com/photo-1585238342024-78d80f7c1b8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            ],
            release: "January 2023",
            platforms: ["PC", "Mobile"]
        },
        5: {
            title: "BLOCK MATRIX",
            description: "Match colors and solve the mystery in this mind-bending puzzle game. With over 100 levels of increasing difficulty, Block Matrix will challenge your pattern recognition and problem-solving skills.",
            tags: ["PUZZLE"],
            screenshots: [
                "https://images.unsplash.com/photo-1585238342024-78d80f7c1b8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            ],
            release: "January 2023",
            platforms: ["PC", "Mobile"]
        },
        6: {
            title: "CHRONO PIXELS",
            description: "An epic time-traveling adventure where your choices shape the future. Explore different eras, meet historical figures, and unravel the mysteries of time itself in this pixel-perfect RPG.",
            tags: ["RPG", "ADVENTURE"],
            screenshots: [
                "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1511512578047-dba367496ab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                "https://images.unsplash.com/photo-1585238342024-78d80f7c1b8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            ],
            release: "March 2023",
            platforms: ["PC", "Switch"]
        }
    };

    // Open modal
    gameBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                            playSound('confirm');
                            const gameId = this.dataset.game;
                            const game = games[gameId];

                            // Build modal content
                            let content = `
                        <div class="pixel-font text-3xl mb-6 text-purple-400">${game.title}</div>
                        <div class="mb-6">
                            ${game.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
                        </div>
                        <p class="text-lg mb-6">${game.description}</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 class="pixel-font text-xl mb-4">DETAILS</h3>
                                <p><strong>Release Date:</strong> ${game.release}</p>
                                <p><strong>Platforms:</strong> ${game.platforms.join(', ')}</p>
                            </div>
                            <div>
                                <h3 class="pixel-font text-xl mb-4">FEATURES</h3>
                                <ul class="list-disc pl-5">
                                    <li>Beautiful pixel art graphics</li>
                                    <li>Engaging storyline</li>
                                    <li>Multiple difficulty levels</li>
                                    <li>Original chiptune soundtrack</li>
                                </ul>
                            </div>
                        </div>
                        
                        <h3 class="pixel-font text-xl mb-4">SCREENSHOTS</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            ${game.screenshots.map(img => `
                                <div class="screenshot pixel-border">
                                    <img src="${img}" alt="${game.title} screenshot" class="w-full h-auto">
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="text-center">
                            <button onclick="window.location.href='${game.page}'" class="btn-pixel bg-purple-600 retro-font">
                            WISH LIST ON STEAM <i class="fas fa-shopping-cart ml-2"></i>
                            </button>
                        </div>
                        
                    `;
                    
                    modalContent.innerHTML = content;
                    modal.style.display = "block";
                    
                    // Add click event to screenshots
                    document.querySelectorAll('.screenshot').forEach(screenshot => {
                        screenshot.addEventListener('click', function() {
                            // You could implement a lightbox here
                            playSound('select');
                        });
                    });
                });
            });
            
            // Close modal
            closeBtn.addEventListener('click', function() {
                playSound('select');
                modal.style.display = "none";
            });
            
            // Close when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            });
        }

        // Initialize on load
        window.addEventListener('load', function() {
            createFloatingPixels();
            setupGameFilters();
            setupGameModals();
            
            // Add hover effects to buttons and cards
            const buttons = document.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => playSound('hover'));
            });
            
            const cards = document.querySelectorAll('.game-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => playSound('hover'));
            });
        });