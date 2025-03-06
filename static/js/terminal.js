document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('input-terminal');
    const outputDiv = document.getElementById('output-terminal');

    // Fonction pour ajouter du texte dans la sortie du terminal
    function appendOutput(text) {
        const preElement = document.createElement('pre');
        preElement.textContent = text;
        outputDiv.appendChild(preElement);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    // Fonction pour envoyer la commande au serveur et traiter la réponse
    function processCommand(commandInput) {
        fetch('/terminal/execute/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ command: commandInput })
        })
        .then(response => response.json())
        .then(data => {
            // Affiche la commande saisie
            appendOutput("user@virtualoffice:~$ " + data.command);
            // Si la réponse est __clear__, vide la sortie
            if(data.output === "__clear__") {
                outputDiv.innerHTML = "";
            } else {
                appendOutput(data.output);
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            appendOutput("Erreur lors de l'exécution de la commande.");
        });
    }

    // Détecte la touche Entrée dans le champ de saisie
    inputField.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            const commandInput = inputField.value;
            processCommand(commandInput);
            inputField.value = "";
        }
    });
});
