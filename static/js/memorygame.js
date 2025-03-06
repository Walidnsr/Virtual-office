document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("✅ DOM chargé !");
        
        const restartButton = document.getElementById("restartButton");
        console.log("🎯 Bouton Rejouer trouvé :", restartButton);
    
        if (restartButton) {
            restartButton.addEventListener("click", () => {
                console.log("🔥 Bouton cliqué !");
            });
        } else {
            console.error("❌ Erreur : Bouton 'Rejouer' introuvable !");
        }
    });
    
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let moves = 0;
  

    let emojis = ['🍏', '🍏', '🍇', '🍇', '🍍', '🍍', '🍓', '🍓', '🍌', '🍌', '🍒', '🍒', '🍎', '🍎', '🥥', '🥥'];

    function shuffleEmojis() {
        emojis.sort(() => Math.random() - 0.5);
    }

    function generateGrid() {
        shuffleEmojis(); // Remélanger les cartes à chaque partie
        emojis.forEach(emoji => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.emoji = emoji;
            card.addEventListener("click", flipCard);
            gameGrid.appendChild(card);
        });
    }

    function flipCard() {
        if (lockBoard) return;  // Bloque le clic tant que les animations ne sont pas finies
        if (this === firstCard) return;  // Empêche de cliquer deux fois sur la même carte

        this.textContent = this.dataset.emoji;
        this.classList.add("flipped");

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true; // Empêche de retourner une 3ème carte
        moves++;
        if (movesDisplay) movesDisplay.textContent = moves;

        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;

        if (isMatch) {
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
            resetBoard();
        } else {
            setTimeout(() => {
                firstCard.textContent = "";
                secondCard.textContent = "";
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                resetBoard();
            }, 1000);
        }
    }

    function resetBoard() {
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }
    const gameGrid = document.getElementById("gameGrid");
    const movesDisplay = document.getElementById("moves");
    
    function restartGame() {
        console.log("🔄 Redémarrage du jeu...");
        
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        moves = 0;
        movesDisplay.textContent = moves;
    
        gameGrid.innerHTML = "";  // Efface toutes les cartes
        emojis.sort(() => Math.random() - 0.5);  // Mélange les cartes
        generateGrid();
    
        console.log("✅ Nouveau jeu généré !");
    }
    

    generateGrid();
});

