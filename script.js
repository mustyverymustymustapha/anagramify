document.addEventListener('DOMContentLoaded', function() {
    const aboutButton = document.getElementById('aboutButton');
    const instructionsButton = document.getElementById('instructionsButton');
    const exploreButton = document.getElementById('exploreButton');
    const aboutModal = document.getElementById('aboutModal');
    const instructionsModal = document.getElementById('instructionsModal');
    const closeAboutModal = document.getElementById('closeAboutModal');
    const closeInstructionsModal = document.getElementById('closeInstructionsModal')
    const sentenceDisplay = document.getElementById('sentence');
    const userInput = document.getElementById('userInput');
    const submitButton = document.getElementById('submit');
    const hintButton = document.getElementById('hint');
    const resultDisplay = document.getElementById('result');
    const playAgainButton = document.getElementById('playAgain');

    const sentences = [
        'The quick brown fox jumps over the lazy dog.',
        'Learning to code is fun and challenging.',
        'This project was made with no love despite what the footer says.', // just kidding!
        'I think Python is bad.',
        'The sun sets slowly over the ocean.',
        'His dog wagged its tail excitedly.',
        'The baby laughed at the silly clown.',
        'The snake slithered silently through the dark forest.',
        'My team worked together to solve the problem.',
        'The cat purred calmly, resting its head on his lap.',
        'He scored two times at the football game.',
        'The flowers bloomed in the warm sunlight.',
        'She cooked a delicious meal for her family.',
        'The sun rises in the east and sets in the west.',
        'Music can evoke emotions and bring people together.',
        'The sound of laughter filled the room.',
        'The snowflakes fall gently from the sky.',
        'The sun scorched the land.',
        'The fire crackled in the fireplace.'
    ];

    let currentSentence = '';
    let scrambledWords = [];

    function scrambleSentence(sentence) {
        return sentence.split('').map(word => {
            const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
            return scrambled;
        })
    }

    function startNewGame() {
        currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
        scrambledWords = scrambleSentence(currentSentence);
        sentenceDisplay.textContent = scrambledWords.join('');
        resultDisplay.textContent = '';

        playAgainButton.classList.add('hidden');
    }

    submitButton.addEventListener('click', function() {
        if (userInput.value.trim() === currentSentence) {
            resultDisplay.textContent = 'Correct! 🥳';

            playAgainButton.classList.remove('hidden');
        } else {
            resultDisplay.textContent = 'Incorrect. Try again! 🧠'
        }
    });

    hintButton.addEventListener('click', function() {
        const hint = scrambledWords.slice(0, 1).join('');
        resultDisplay.textContent = `Hint: ${hint}`;
    });

    playAgainButton.addEventListener('click', function() {
        startNewGame();
        userInput.value = '';
    });

    aboutButton.addEventListener('click', () => {
        aboutModal.classList.remove('hidden');
    });

    instructionsButton.addEventListener('click', () => {
        instructionsModal.classList.remove('hidden');
    });

    exploreButton.addEventListener('click', () => {
        window.open('https://github.com/mustyverymustymustapha', '_blank');
    });

    closeAboutModal.addEventListener('click', () => {
        aboutModal.classList.add('hidden');
    });

    closeInstructionsModal.addEventListener('click', () => {
        instructionsModal.classList.add('hidden');
    });

    startNewGame();

});