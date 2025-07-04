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
            release: "2026",
            platforms: ["PC"],
            page: ["https://store.steampowered.com/app/2444530/Wreckage/"],
            feature: ["car shooter"],
            feature1: ["third person"],
            feature2: ["multi player"],
        },
        2: {
            title: "TRELLIS",
            description: "TRELLIS is a puzzle/adventure game featuring Fig, a robot caretaker tending to its plant. Shine the Spotlight to guide Fig and solve dozens of unique puzzles, uncovering the mysteries of an ancient alien temple long forgotten… but not abandoned.",
            tags: ["PUZZLE", "ADVENTURE"],
            screenshots: [
                "images/trellis11.jpg",
                "images/trellis12.jpg",
                "images/trellis10.jpg"

            ],
            release: "TBA",
            platforms: ["PC"],
            page: ["https://store.steampowered.com/app/3140710/Trellis/"],
            feature: ["car shooter"],
            feature1: ["third person"],
            feature2: ["multi player"],
        },
        3: {
            title: "PROTOTYPE MANSION-Used No Cover",
            description: "A classic 32-bit Survival-Horror found in a bargain bin. Disc no scratches, good condition.",
            tags: ["RPG"],
            screenshots: [
                "images/PROTOMAN.JPG",
                "images/PROTOMAN2.JPG",
                "images/PROTOMAN1.JPG"
            ],
            release: "2017",
            platforms: ["PC"],

            pages: ["https://store.steampowered.com/app/868570/Prototype_Mansion__Used_No_Cover/"],
            pagetwo: ["https://jupiterlighthousestudio.itch.io/prototype-mansion"],
            feature: ["car shooter"],
            feature1: ["third person"],
            feature2: ["multi player"],
        },
        4: {
            title: "HOW NOW,SEA COW?",
            description: "Solve puzzles, feed your beastie, and enjoy the slow coastal vibe. Five levels in total.Made in a little over a week for an in-house game-jam. We wanted to focus on simple mechanics, clarity, and setting a clear and definitive tone.The idea was to make a version of Flipper that featured a painfully slow manatee instead of a dolphin. While we were going for slow torment.. it ended up a bit endearing, somehow.",
            tags: ["PUZZLE"],
            screenshots: [
                "images/seehowcow1.jpg",
                "images/seehowcow2.jpg",
                "images/seehowcow3.jpg"
            ],
            release: "2015",
            platforms: ["PC"],
            feature: ["car shooter"],
            feature1: ["third person"],
            feature2: ["multi player"],
        },
        5: {
            title: "Garden Variety Body Horror - Rare Import",
            description: " GARDEN VARIETY BODY HORROR is the bloody disgusting, unsanctioned followup to last years sleeper non-hit PROTOTYPE MANSION. In this all new survival/adventure you play as HANK, the idiot B-story partner who must SOLVE, PUNCH and HEAL his way through an unimaginable garden-themed existential nightmare. Investigate a fog filled estate, solve puzzles, fight horrific monsters, and enjoy the relaxing sounds of bad Japanese dub. (English subtitles included)Back of CD case reads:HANK MAKER is separated from his partner and hopelessly alone while on call to a foggy island. He must now shovel his way through an existential crisis of guts, gore, and gardening. What other nightmares await our idiot cop from disc 1?Find out! In...GARDEN VARIETY BODY HORROR!",
            tags: ["RPG", "PUZZLE"],
            screenshots: [
                "images/ss_811ccffee751fd98585d12c7abd3181843f9ad62.600x338.jpg",
                "images/ss_0c1bd54d09cf8b7e745839fafef003812d7a47ac.600x338.jpg",
                "images/ss_4b372b007e0e384979aa065f1390507a862f9ca7.600x338.jpg"
            ],
            release: "2018",
            platforms: ["PC", "Mobile"],
            feature: ["Japanese dubs and English subs"],
            feature1: ["Classic style survival-horror gameplay => tank controls optional"],
            feature2: ["Puzzles of the cryptic kind"],
        },
        6: {
            title: "Paranormal Precinct - Last Copy of '99",
            description: "An epic time-traveling adventure where your choices shape the future. Explore different eras, meet historical figures, and unravel the mysteries of time itself in this pixel-perfect RPG.",
            tags: ["RPG", "ADVENTURE"],
            screenshots: [
                "images/paranormal1.jpg",
                "images/paranormal2.jpg",
                "images/paranormal3.jpg"
            ],
            release: "TBA",
            platforms: ["PC"],
            feature: ["car shooter"],
            feature1: ["third person"],
            feature2: ["multi player"],
        }
    };

    function renderGameButtons(game) {
        let html = '';

        // If `pages` exists and is an array
        if (Array.isArray(game.pages) && game.pages.length > 0) {
            html += `
      <button onclick="window.location.href='${game.pages[0]}'" 
              class="btn-pixel bg-blue-600 retro-font mx-2 my-2">
        STEAM <i class="fas fa-shopping-cart ml-2"></i>
      </button>
    `;
        }

        // If `page` exists and is an array
        if (Array.isArray(game.page) && game.page.length > 0) {
            html += `
      <button onclick="window.location.href='${game.page[0]}'" 
              class="btn-pixel bg-purple-600 retro-font mx-2 my-2">
        WISH LIST ON STEAM <i class="fas fa-star ml-2"></i>
      </button>
    `;
        }



        // If `page` exists and is an array
        if (Array.isArray(game.pagetwo) && game.pagetwo.length > 0) {
            html += `
      <button onclick="window.location.href='${game.pagetwo[0]}'" 
              class="btn-pixel bg-red-600 retro-font mx-2 my-2">
        ITCHI.IO <i class="fas fa-shopping-cart ml-2"></i>
      </button>
    `;
        }

        return html;
    }



    //helper 

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
                                    <li>${game.feature}</li>
                                    <li>${game.feature1}</li>
                                    <li>${game.feature2}</li>
                                   
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
                        

<div class="text-center flex flex-wrap justify-center">
  ${renderGameButtons(game)}
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