let randomNumber, attempts;

function startGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
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

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        message.textContent = 'Por favor, digite um número válido entre 1 e 10.';
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