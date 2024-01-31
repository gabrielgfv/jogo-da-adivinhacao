let minNumber, maxNumber;
let randomNumber, attempts;

function changeDifficulty() {
    const difficultySelect = document.getElementById('difficulty');
    const selectedDifficulty = difficultySelect.value;

    // Defina as faixas de números com base na dificuldade
    switch (selectedDifficulty) {
        case 'easy':
            minNumber = 1;
            maxNumber = 5;
            break;
        case 'medium':
            minNumber = 1;
            maxNumber = 10;
            break;
        case 'hard':
            minNumber = 1;
            maxNumber = 20;
            break;
        default:
            minNumber = 1;
            maxNumber = 10;
    }

    // Reinicie o jogo com a nova dificuldade
    startGame();
}

function startGame() {
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    attempts = 0;

    document.getElementById('attempts').textContent = attempts;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('score').style.display = 'block';
    document.getElementById('guessInput').disabled = false;
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsSpan = document.getElementById('attempts');
    const score = document.getElementById('score');

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
        message.textContent = `Por favor, digite um número válido entre ${minNumber} e ${maxNumber}.`;
    } else {
        attempts++;

        if (userGuess === randomNumber) {
            message.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
            message.style.color = 'green';
            guessInput.disabled = true;
            score.style.display = 'none';
        } else {
            const hint = userGuess < randomNumber ? 'Muito baixo.' : 'Muito alto.';
            message.textContent = `Tente novamente. ${hint}`;
            message.style.color = 'red';
        }

        attemptsSpan.textContent = attempts;
    }
}

function resetGame() {
    startGame();
}
