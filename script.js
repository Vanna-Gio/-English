// script.js

// Game Data - Moved to separate object for better organization
const gameData = {
    vocab: [
        {
            word: "this",
            meaning: "Refers to the current object in context.",
            khmer: "តំណាងអ្វីដែលកំពុងត្រូវយោង",
            audio: "audio/this.mp3"
        },
        {
            word: "arrow function",
            meaning: "A shorter way to write functions using `=>` syntax.",
            khmer: "មុខងារមានសញ្ញាព្រិល (=>)",
            audio: "audio/arrow-function.mp3"
        },
        // Add more vocabulary words here
        { word: "closure", meaning: "A function bundled with its lexical environment.", khmer: "មុខងារដែលភ្ជាប់ជាមួយបរិស្ថានពាក្យរបស់វា", audio: "audio/closure.mp3" },
        { word: "hoisting", meaning: "JavaScript's default behavior of moving declarations to the top.", khmer: "អាកប្បកិរិយាលំនាំដើមរបស់ JavaScript ក្នុងការផ្លាស់ប្តូរការប្រកាសទៅខាងលើ", audio: "audio/hoisting.mp3" },
        { word: "asynchronous", meaning: "Operations that don't block the main thread.", khmer: "ប្រតិបត្តិការដែលមិនរាំងស្ទះខ្សែស្រឡាយសំខាន់", audio: "audio/asynchronous.mp3" }
    ],

    grammar: {
        tenses: {
            "Present Simple": {
                description: "Used for habits, routines, facts, and general truths.",
                structure: "Subject + Base Form of Verb (add -s/-es for he/she/it)",
                examples: [
                    { type: "correct", sentence: "She reads a book every night.", explanation: "Habit: 'reads' (she + verb-s)" },
                    { type: "correct", sentence: "They work in a factory.", explanation: "General truth: 'work' (they + base verb)" },
                    { type: "incorrect", sentence: "He go to school.", correct: "He goes to school.", explanation: "Incorrect: 'go' should be 'goes' for 'he'." }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which sentence uses the Present Simple correctly?",
                        options: [
                            { text: "They are playing soccer now.", correct: false },
                            { text: "She usually goes to bed early.", correct: true, explanation: "Correct: 'usually goes' shows a habit." },
                            { text: "I will visit my grandparents tomorrow.", correct: false }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "Every morning, the sun ______ (rise) in the east.",
                        correctAnswer: "rises",
                        explanation: "This is a general truth, so we use Present Simple. For 'the sun' (it), we add '-es' to 'rise'."
                    }
                ]
            },
            "Present Continuous": {
                description: "Used for actions happening now, temporary actions, or planned future actions.",
                structure: "Subject + am/is/are + Verb-ing",
                examples: [
                    { type: "correct", sentence: "I am studying English right now.", explanation: "Action happening now: 'am studying'." },
                    { type: "correct", sentence: "They are building a new hospital.", explanation: "Temporary action: 'are building'." }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which action is happening at the moment of speaking?",
                        options: [
                            { text: "She walks to work every day.", correct: false },
                            { text: "He is watching TV.", correct: true, explanation: "Correct: 'is watching' indicates an action happening now." }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "Look! The cat ______ (sleep) on the sofa.",
                        correctAnswer: "is sleeping",
                        explanation: "This describes an action happening now, so we use Present Continuous: 'is sleeping'."
                    }
                ]
            }
        },
        structureQuiz: {
            "No Sooner had": {
                description: "It means that as soon as one thing happened, another thing followed immediately.",
                structure: "No sooner had [subject] [past participle] than [past simple]",
                examples: [
                    { type: "correct", sentence: "Formal: No sooner had she left the house than it started to rain.", explanation: "🔹 Meaning: She left the house, and immediately after that, it started to rain." },
                    { type: "correct", sentence: "Casual: As soon as she left the house, it started to rain.", explanation: "" },
                    { type: "correct", sentence: "She had just left when it started to rain", explanation: "" }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which sentence uses the No sooner had correctly?",
                        options: [
                            { text: "No sooner I sat down to eat than the phone rang.", correct: false },
                            { text: "No sooner had I sat down to eat than the phone rang.", correct: true, explanation: "👉 I had just sat down when the phone started ringing." },
                            { text: "No sooner had I sat down to eat the phone rang.", correct: false }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "No sooner had they ______ (arrive) at the party than the lights went out.",
                        correctAnswer: "arrived",
                        explanation: "👉 As soon as they got to the party, the power went out. <br>No sooner had + [subject] + [past participle] + than + [past simple]"
                    },
                    {
                        type: "fill-in-blank",
                        question: "Hardly had I ______ (arrive) at the station when the train left.",
                        correctAnswer: "arrived",
                        explanation: "👉 I arrived, and immediately the train left. <br>Hardly had + subject + past participle + when + past simple"
                    }
                ]
            },
            "as soon as": {
                description: "It shows that one action happens immediately after another.",
                structure: "As soon as + subject + verb, subject + verb",
                examples: [
                    { type: "correct", sentence: "As soon as she left the house, it started to rain.", explanation: "👉 I did it right after getting home." },
                    { type: "correct", sentence: "I'll text you as soon as I arrive.", explanation: "👉 Here, it’s used with future meaning — “I'll do this right after arriving." }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which sentence uses 'as soon as' correctly?",
                        options: [
                            { text: "As soon as I finished my homework, I’ll call you.", correct: false },
                            { text: "As soon as I finish my homework, I’ll call you.", correct: true, explanation: "👉 Even though it’s about the future, the first part uses present tense." },
                            { text: "As soon as I finish my homework, I am call you.", correct: false }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "As soon as she ______ (finish) the call, she started typing",
                        correctAnswer: "finished",
                        explanation: "👉 As soon as they got to the party, the power went out."
                    }
                ]
            },
            "Not only... but also...": {
                description: "This structure emphasizes that two things are true or happen, adding emphasis to the second point.",
                structure: "Not only [auxiliary verb] [subject] [verb] but also [subject] [verb]",
                examples: [
                    { type: "correct", sentence: "Not only is he a great student but also he is an excellent athlete.", explanation: "👉 He is both a great student and an excellent athlete." },
                    { type: "correct", sentence: "She not only sings beautifully but also plays the piano expertly.", explanation: "👉 She sings beautifully and plays the piano expertly." }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which sentence correctly uses 'Not only... but also...'?",
                        options: [
                            { text: "Not only he works hard, but also he plays hard.", correct: false },
                            { text: "Not only does he work hard, but also he plays hard.", correct: true, explanation: "👉 When 'Not only' begins a sentence, an inversion (auxiliary verb before subject) is required." },
                            { text: "He not only works hard, but also plays hard.", correct: true, explanation: "👉 This is also correct with 'not only' in the middle of the sentence." }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "Not only ______ (she/speak) English, but also she writes French.",
                        correctAnswer: "does she speak",
                        explanation: "👉 Inversion is needed because 'Not only' starts the sentence. Auxiliary 'does' comes before 'she' and 'speak'."
                    }
                ]
            },
        },
    },

    shadowing: {
        "Beginner Sentences": [
            { sentence: "The &lt;section&gt; tag represents a standalone section of content, usually with its own heading, such as a chapter, tab, or part of a page. ", khmer: "What is the &lt;section&gt; tag used for in HTML?" },
            { sentence: "To define standalone blocks of content with a specific theme or purpose. ", khmer: "What is the &lt;section&gt; tag used for in HTML?" },
            { sentence: "What happens when you place two &lt;div&gt; elements next to each other in HTML?", khmer: "They stack vertically because &lt;div&gt; is a block-level element." },
        ],
        "Intermediate Sentences": [
            { sentence: "I love learning English. It's so rewarding!", khmer: "ខ្ញុំស្រលាញ់ការសិក្សាភាសាអង់គ្លេស។ វាពិតជាមានប្រយោជន៍ណាស់!" },
            { sentence: "Could you please repeat that?", khmer: "សូមអ្នកជួយនិយាយម្ដងទៀតបានទេ?" },
            { sentence: "The weather is beautiful today.", khmer: "អាកាសធាតុថ្ងៃនេះស្រស់ស្អាតណាស់។" }
        ],
        "Idioms": [
            { sentence: "It's raining cats and dogs.", khmer: "ភ្លៀងខ្លាំងណាស់។", explanation: "Meaning: Raining very heavily." },
            { sentence: "Break a leg!", khmer: "សូមសំណាងល្អ!", explanation: "Meaning: Good luck! (Used especially in theater)." }
        ]
    },

    // Added Q&A based on the original data structure
    "qna-html": [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High-level Text Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
            answer: "Hyper Text Markup Language",
            explanation: "HTML is the standard markup language for documents designed to be displayed in a web browser."
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            options: ["<style>", "<script>", "<css>", "<link>"],
            answer: "<style>",
            explanation: "The <style> tag is used to define style information (CSS) for a document."
        },
        {
            question: "Which attribute is used to provide an advisory text about an element or its contents?",
            options: ["tip", "hint", "title", "info"],
            answer: "title",
            explanation: "The 'title' attribute provides extra information about an element (tooltip)."
        }
    ],
    "qna-css": [
        {
            question: "What does CSS stand for?",
            options: ["Cascading Style Sheets", "Creative Style Solutions", "Computer Style Syntax", "Colorful Styling System"],
            answer: "Cascading Style Sheets",
            explanation: "CSS is used to describe the look and formatting of a document written in HTML."
        },
        {
            question: "Which CSS property is used to change the background color of an element?",
            options: ["color", "bgcolor", "background-color", "background"],
            answer: "background-color",
            explanation: "The 'background-color' property sets the background color of an element."
        },
        {
            question: "How do you select an element with id 'header' in CSS?",
            options: [".header", "#header", "header", "*header"],
            answer: "#header",
            explanation: "The '#' symbol is used to select elements by their ID."
        }
    ],
    "qna-js": [
        {
            question: "What does JavaScript primarily add to web pages?",
            options: ["Styling and layout", "Structure and content", "Interactivity and dynamic behavior", "Server-side logic"],
            answer: "Interactivity and dynamic behavior",
            explanation: "JavaScript is a programming language that enables interactive web pages."
        },
        {
            question: "Which of the following is a correct way to declare a JavaScript variable?",
            options: ["variable myVar;", "var myVar;", "v myVar;", "string myVar;"],
            answer: "var myVar;",
            explanation: "The 'var' keyword is used to declare a variable in JavaScript (though 'let' and 'const' are now preferred)."
        },
        {
            question: "What is the purpose of 'console.log()' in JavaScript?",
            options: ["To display a message in an alert box", "To write data to the document", "To print messages to the browser console for debugging", "To send data to a server"],
            answer: "To print messages to the browser console for debugging",
            explanation: "console.log() is a function in JavaScript used to output messages or values to the web console."
        }
    ]
};

// Game State Management
const gameState = {
    mode: null,
    currentIndex: 0,
    score: 0,
    currentPool: [],
    currentRule: null, // For grammar rules
    currentLevel: null, // For shadowing levels
    recognition: null, // Web Speech API SpeechRecognition object
    audioRecorder: null, // MediaRecorder object
    audioChunks: [],
    synth: window.speechSynthesis, // SpeechSynthesisUtterance for text-to-speech
    voices: [],
    timerInterval: null, // To hold the timer interval
    timeLeft: 30, // Initial time for vocabulary questions (increased for more comfort)
    recognitionActive: false // Track if speech recognition is active
};

// DOM Elements
const elements = {
    modeSelection: document.getElementById("modeSelection"),
    gameArea: document.getElementById("gameArea"),
    homeLink: document.getElementById("homeLink"),
    aboutLink: document.getElementById("aboutLink"),
    contactLink: document.getElementById("contactLink"),
    resourcesLink: document.getElementById("resourcesLink"),
    navContainer: document.querySelector(".nav-container") // Added for profile image insertion
};

// Initialize SpeechSynthesis voices
window.speechSynthesis.onvoiceschanged = () => {
    gameState.voices = gameState.synth.getVoices();
};

// Event Listeners (using delegated events for mode selection for efficiency)
elements.homeLink.addEventListener("click", goHome);
elements.aboutLink.addEventListener("click", () => showInfoModal("About Us", "This is an interactive English learning game designed to help you improve your language skills through various challenges: Vocabulary, Grammar, Shadowing, and Q&A."));

// Add profile image dynamically
const profileImage = document.createElement("img");
profileImage.src = "image/AnnaRa.png"; // Replace with the actual path to your image
profileImage.alt = "Profile Image";
profileImage.className = "profile-image"; // Apply defined styles
profileImage.addEventListener("click", () => {
    showInfoModal("Profile", "Sovanna!, Are you ready to improve yourself step by step! Let's start now! <br> Tomorrow you will see progress!");
});
elements.navContainer.prepend(profileImage); // Use prepend to place it before other nav items

elements.contactLink.addEventListener("click", () => showInfoModal("Contact", "For support or feedback, please email us at: <a href='mailto:rasovanna785@gmail.com'>rasovanna785@gmail.com</a>"));
elements.resourcesLink.addEventListener("click", () => showInfoModal("Resources", "Check out these helpful resources:<br><ul><li><a href='https://dictionary.cambridge.org/' target='_blank'>Cambridge Dictionary</a></li><li><a href='https://www.bbc.co.uk/learningenglish/' target='_blank'>BBC Learning English</a></li><li><a href='https://www.duolingo.com/' target='_blank'>Duolingo</a></li></ul>"));

// Use event delegation for mode selection buttons
elements.modeSelection.addEventListener('click', (event) => {
    if (event.target.classList.contains('sub-menu-btn')) {
        const mode = event.target.dataset.mode;
        if (mode) {
            selectMode(mode);
        }
    }
});

// Utility Functions
function showInfoModal(title, content) {
    clearInterval(gameState.timerInterval); // Stop any active timer
    elements.gameArea.innerHTML = `
        <div class="container">
            <h2>${title}</h2>
            <div class="question-box" style="text-align: left;">
                <p>${content}</p>
            </div>
            <button class="btn btn-primary" onclick="goHome()">Back to Home</button>
        </div>
    `;
    elements.modeSelection.style.display = "none";
}

function shuffleArray(array) {
    return [...array].sort(() => 0.5 - Math.random());
}

function createButton(text, onClick, className = "btn btn-primary") {
    const button = document.createElement("button");
    button.className = className;
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
}

function speakText(text, lang = 'en-US') {
    if (!gameState.synth) {
        console.warn("SpeechSynthesis not supported or not ready.");
        return;
    }
    // Cancel any ongoing speech
    gameState.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    const englishVoices = gameState.voices.filter(voice => voice.lang.startsWith('en')); // Filter for English voices
    if (englishVoices.length > 0) {
        utterance.voice = englishVoices[0]; // Pick the first English voice
    }
    gameState.synth.speak(utterance);
}

function playAudio(path) {
    const audio = new Audio(path);
    audio.play().catch(e => console.error("Error playing audio:", e));
}

function startTimer(duration, onTick, onComplete) {
    clearInterval(gameState.timerInterval); // Clear any existing timer
    gameState.timeLeft = duration;
    onTick(gameState.timeLeft); // Initial call

    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        onTick(gameState.timeLeft);
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            onComplete();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
}

// Core Game Functions
function goHome() {
    resetGameState();
    elements.modeSelection.style.display = "block";
    elements.gameArea.innerHTML = "";
    document.querySelector('h1').textContent = "Master English: Your Interactive Learning Journey";
}

function resetGameState() {
    stopTimer(); // Ensure timer is stopped
    if (gameState.recognition && gameState.recognitionActive) {
        gameState.recognition.stop();
        gameState.recognitionActive = false;
    }
    if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
        gameState.audioRecorder.stop();
    }
    gameState.audioChunks = []; // Clear recorded audio
    gameState.mode = null;
    gameState.currentIndex = 0;
    gameState.score = 0;
    gameState.currentPool = [];
    gameState.currentRule = null;
    gameState.currentLevel = null;
    gameState.synth.cancel(); // Stop any ongoing speech
}

function selectMode(mode) {
    resetGameState(); // Reset state when a new mode is selected
    gameState.mode = mode;
    elements.modeSelection.style.display = "none";
    let headingText = '';
    switch(mode) {
        case 'vocab': headingText = '📚 Vocabulary Challenge'; break;
        case 'grammar': headingText = '📝 Grammar Guru'; break;
        case 'shadowing': headingText = '🗣️ Shadowing Practice'; break;
        case 'qna-html': headingText = '❓ HTML Q&A'; break;
        case 'qna-css': headingText = '❓ CSS Q&A'; break;
        case 'qna-js': headingText = '❓ JavaScript Q&A'; break;
        default: headingText = 'Interactive Learning Journey';
    }
    document.querySelector('h1').textContent = `Master English: ${headingText}`; // Update H1
    elements.gameArea.innerHTML = `
        <div class="container">
            <h2 class="text-center">Loading ${headingText.replace('❓ ', '')}...</h2>
            <p class="info-text">Prepare for your challenge!</p>
        </div>
    `;
    setTimeout(() => { // Small delay for visual transition
        if (mode === "vocab") {
            initVocabGame();
        } else if (mode === "grammar") {
            initGrammarGame();
        } else if (mode === "shadowing") {
            initShadowingGame();
        } else if (mode.startsWith("qna-")) {
            initQnAGame(mode);
        }
    }, 500);
}

function displayGameEndScreen() {
    stopTimer(); // Ensure timer is stopped
    elements.gameArea.innerHTML = `
        <div class="container text-center">
            <h2>Game Over!</h2>
            <p class="feedback feedback-info">You completed all questions in this section!</p>
            <p class="score-display">Your final score: ${gameState.score}</p>
            <button class="btn btn-primary" onclick="goHome()">Back to Main Menu</button>
            <button class="btn btn-secondary" onclick="restartCurrentMode()">Play Again</button>
        </div>
    `;
}

function restartCurrentMode() {
    const mode = gameState.mode; // Get the current mode before resetting
    resetGameState(); // Reset game state
    selectMode(mode); // Re-initialize the game mode
}

function renderScoreAndButtons() {
    return `
        <div class="score-display">Score: ${gameState.score}</div>
        <div class="text-center" style="margin-top: 1.5rem;">
            <button class="btn btn-secondary" onclick="goHome()">Back to Menu</button>
        </div>
    `;
}

// --- Vocabulary Game ---
function initVocabGame() {
    gameState.currentPool = shuffleArray(gameData.vocab);
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderVocabQuestion();
}

function renderVocabQuestion() {
    if (gameState.currentIndex >= gameState.currentPool.length) {
        displayGameEndScreen();
        return;
    }
    const currentWord = gameState.currentPool[gameState.currentIndex];
    const incorrectOptions = shuffleArray(gameData.vocab.filter(w => w.word !== currentWord.word))
        .slice(0, 3)
        .map(w => w.meaning);
    const options = shuffleArray([currentWord.meaning, ...incorrectOptions]);

    let timerBarHtml = '';
    // Always show timer for vocab game
    timerBarHtml = `<div class="timer-bar-container"><div id="timerBar" class="timer-bar"></div></div>`;

    elements.gameArea.innerHTML = `
        <div class="container">
            ${timerBarHtml}
            <div class="question-box">
                <p>What does "<span style="color: var(--primary-color);">${currentWord.word}</span>" mean?</p>
                <button class="btn btn-primary" onclick="speakText('${currentWord.word}')">🔊 Listen</button>
            </div>
            <div id="optionsContainer" class="sub-menu-buttons">
                ${options.map(option => `<button class="btn btn-block" data-answer="${option}">${option}</button>`).join('')}
            </div>
            <div id="feedback" class="feedback"></div>
            <div id="explanation" class="explanation-box" style="display: none;"></div>
            ${renderScoreAndButtons()}
        </div>
    `;

    document.getElementById('optionsContainer').addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-block')) {
            checkVocabAnswer(event.target.dataset.answer, currentWord.meaning, currentWord.word);
        }
    });

    startTimer(gameState.timeLeft, updateTimerBar, () => {
        document.getElementById('feedback').className = 'feedback feedback-error';
        document.getElementById('feedback').textContent = "Time's up! The correct meaning was: " + currentWord.meaning;
        showExplanation(currentWord.explanation || `The word "${currentWord.word}" means "${currentWord.meaning}" (${currentWord.khmer}).`);
        disableOptions();
        setTimeout(nextVocabQuestion, 3000);
    });
    speakText(`What does "${currentWord.word}" mean?`); // Speak the question
}

function updateTimerBar(timeLeft) {
    const timerBar = document.getElementById('timerBar');
    if (timerBar) {
        const percentage = (timeLeft / gameState.timeLeft) * 100;
        timerBar.style.width = `${percentage}%`;
        timerBar.style.backgroundColor = percentage > 50 ? varCSSValue('--success-color') : (percentage > 20 ? varCSSValue('--accent-color') : varCSSValue('--error-color'));
    }
}

function varCSSValue(variableName) {
    // This function assumes style.css has these CSS variables defined
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

function checkVocabAnswer(selectedAnswer, correctAnswer, word) {
    stopTimer(); // Stop timer immediately on answer
    const feedbackElement = document.getElementById('feedback');
    const options = document.querySelectorAll('#optionsContainer .btn-block');

    disableOptions(); // Disable all options after selection

    if (selectedAnswer === correctAnswer) {
        feedbackElement.className = 'feedback feedback-success';
        feedbackElement.textContent = "🥳 Correct! Well done!";
        gameState.score++;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-correct');
            }
        });
        speakText("Correct! Well done!");
    } else {
        feedbackElement.className = 'feedback feedback-error';
        feedbackElement.textContent = `❌ Incorrect. The correct meaning of "${word}" is: "${correctAnswer}"`;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-incorrect');
            }
            if (btn.dataset.answer === correctAnswer) {
                btn.classList.add('btn-correct'); // Highlight correct answer
            }
        });
        speakText("Incorrect. Try again next time.");
    }
    showExplanation(gameState.currentPool[gameState.currentIndex].explanation || `The word "${word}" means "${correctAnswer}" (${gameState.currentPool[gameState.currentIndex].khmer}).`);
    updateScoreDisplay();
    setTimeout(nextVocabQuestion, 5000); // Wait 5 seconds before next question
}

function disableOptions() {
    document.querySelectorAll('#optionsContainer .btn-block').forEach(btn => {
        btn.disabled = true;
    });
}

function nextVocabQuestion() {
    gameState.currentIndex++;
    renderVocabQuestion();
}

function updateScoreDisplay() {
    const scoreElement = document.querySelector('.score-display');
    if (scoreElement) {
        scoreElement.textContent = `Score: ${gameState.score}`;
    }
}

function showExplanation(explanationText) {
    const explanationElement = document.getElementById('explanation');
    if (explanationElement) {
        explanationElement.innerHTML = `<strong>Explanation:</strong> ${explanationText}`;
        explanationElement.style.display = 'block';
    }
}

// --- Grammar Game ---
function initGrammarGame() {
    gameState.currentRule = null;
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderGrammarMenu();
}

function renderGrammarMenu() {
    const tenses = Object.keys(gameData.grammar.tenses);
    const structures = Object.keys(gameData.grammar.structureQuiz);

    elements.gameArea.innerHTML = `
        <div class="container">
            <h2 class="text-center">Grammar Guru: Choose a Topic</h2>
            <h3>Tenses</h3>
            <div class="sub-menu-buttons">
                ${tenses.map(tense => `<button class="btn btn-primary sub-menu-btn" data-type="tense" data-rule="${tense}">${tense}</button>`).join('')}
            </div>
            <h3>Structures</h3>
            <div class="sub-menu-buttons" style="margin-top: 1rem;">
                ${structures.map(structure => `<button class="btn btn-primary sub-menu-btn" data-type="structure" data-rule="${structure}">${structure}</button>`).join('')}
            </div>
            <button class="btn btn-secondary" onclick="goHome()" style="margin-top: 1.5rem;">Back to Main Menu</button>
        </div>
    `;
    document.querySelectorAll('.sub-menu-buttons .btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const ruleType = event.target.dataset.type;
            gameState.currentRule = event.target.dataset.rule;
            gameState.currentIndex = 0;
            if (ruleType === "tense") {
                gameState.currentPool = shuffleArray(gameData.grammar.tenses[gameState.currentRule].quizQuestions);
                renderGrammarConcept(gameData.grammar.tenses[gameState.currentRule]);
            } else if (ruleType === "structure") {
                gameState.currentPool = shuffleArray(gameData.grammar.structureQuiz[gameState.currentRule].quizQuestions);
                renderGrammarConcept(gameData.grammar.structureQuiz[gameState.currentRule]);
            }
        });
    });
}

function renderGrammarConcept(ruleData) {
    elements.gameArea.innerHTML = `
        <div class="container">
            <h2>${gameState.currentRule}</h2>
            <p class="info-text">${ruleData.description}</p>
            <p class="info-text"><strong>Structure:</strong> <span class="example-sentence">${ruleData.structure}</span></p>
            <h3>Examples:</h3>
            ${ruleData.examples.map(ex => `
                <div class="explanation-box" style="margin-bottom: 0.5rem; ${ex.type === 'incorrect' ? 'border-color: var(--error-color);' : ''}">
                    <p>${ex.type === 'incorrect' ? '❌ Incorrect:' : '✅ Correct:'} <span class="example-sentence">${ex.sentence}</span></p>
                    <p><strong>Explanation:</strong> ${ex.explanation}</p>
                    ${ex.correct ? `<p><strong>Correct Form:</strong> <span class="example-sentence">${ex.correct}</span></p>` : ''}
                </div>
            `).join('')}
            <div class="text-center" style="margin-top: 1.5rem;">
                <button class="btn btn-success" onclick="startGrammarQuiz()">Start Quiz</button>
                <button class="btn btn-secondary" onclick="initGrammarGame()">Back to Grammar Topics</button>
            </div>
        </div>
    `;
    speakText(`${gameState.currentRule}. ${ruleData.description}`);
}

function startGrammarQuiz() {
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderGrammarQuestion();
}

function renderGrammarQuestion() {
    if (gameState.currentIndex >= gameState.currentPool.length) {
        displayGameEndScreen();
        return;
    }
    const questionData = gameState.currentPool[gameState.currentIndex];
    let questionHtml = '';

    if (questionData.type === "multiple-choice") {
        questionHtml = `
            <div class="question-box">${questionData.question}</div>
            <div id="optionsContainer" class="sub-menu-buttons">
                ${questionData.options.map(opt => `<button class="btn btn-block" data-answer="${opt.text}">${opt.text}</button>`).join('')}
            </div>
            <div id="feedback" class="feedback"></div>
            <div id="explanation" class="explanation-box" style="display: none;"></div>
        `;
    } else if (questionData.type === "fill-in-blank") {
        const parts = questionData.question.split('______');
        questionHtml = `
            <div class="question-box">
                <p>${parts[0]} <input type="text" id="fillInBlankInput" class="fill-in-blank-input" placeholder="Type answer here"/> ${parts[1] || ''}</p>
            </div>
            <div class="text-center">
                <button class="btn btn-primary" onclick="checkFillInBlankAnswer('${questionData.correctAnswer.replace(/'/g, "\\'")}', '${questionData.explanation.replace(/'/g, "\\'")}')">Check Answer</button>
            </div>
            <div id="feedback" class="feedback"></div>
            <div id="explanation" class="explanation-box" style="display: none;"></div>
        `;
    }

    elements.gameArea.innerHTML = `
        <div class="container">
            <h2>Grammar Quiz</h2>
            ${questionHtml}
            ${renderScoreAndButtons()}
        </div>
    `;

    if (questionData.type === "multiple-choice") {
        document.getElementById('optionsContainer').addEventListener('click', (event) => {
            if (event.target.classList.contains('btn-block')) {
                checkGrammarMultipleChoice(event.target.dataset.answer, questionData);
            }
        });
    }
    speakText(questionData.question);
}

function checkGrammarMultipleChoice(selectedAnswer, questionData) {
    const feedbackElement = document.getElementById('feedback');
    const options = document.querySelectorAll('#optionsContainer .btn-block');
    const correctOption = questionData.options.find(opt => opt.correct);

    disableOptions();

    if (selectedAnswer === correctOption.text) {
        feedbackElement.className = 'feedback feedback-success';
        feedbackElement.textContent = "🥳 Correct! Great job!";
        gameState.score++;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-correct');
            }
        });
        speakText("Correct! Great job!");
    } else {
        feedbackElement.className = 'feedback feedback-error';
        feedbackElement.textContent = `❌ Incorrect. The correct answer was: "${correctOption.text}"`;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-incorrect');
            }
            if (btn.dataset.answer === correctOption.text) {
                btn.classList.add('btn-correct');
            }
        });
        speakText("Incorrect. Let's learn from this.");
    }
    showExplanation(correctOption.explanation);
    updateScoreDisplay();
    setTimeout(nextGrammarQuestion, 2000);
}

function checkFillInBlankAnswer(correctAnswer, explanation) {
    const inputElement = document.getElementById('fillInBlankInput');
    const userAnswer = inputElement.value.trim();
    const feedbackElement = document.getElementById('feedback');

    inputElement.disabled = true; // Disable input after submission

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackElement.className = 'feedback feedback-success';
        feedbackElement.textContent = "🥳 Correct! Well done!";
        gameState.score++;
        inputElement.style.borderColor = varCSSValue('--success-color');
        speakText("Correct! Well done!");
    } else {
        feedbackElement.className = 'feedback feedback-error';
        feedbackElement.textContent = `❌ Incorrect. The correct answer was: "${correctAnswer}"`;
        inputElement.style.borderColor = varCSSValue('--error-color');
        speakText("Incorrect. Let's learn from this.");
    }
    showExplanation(explanation);
    updateScoreDisplay();
    setTimeout(nextGrammarQuestion, 2000);
}

function nextGrammarQuestion() {
    gameState.currentIndex++;
    renderGrammarQuestion();
}

// --- Shadowing Game ---
function initShadowingGame() {
    gameState.currentLevel = null;
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderShadowingMenu();
}

function renderShadowingMenu() {
    const levels = Object.keys(gameData.shadowing);
    elements.gameArea.innerHTML = `
        <div class="container">
            <h2 class="text-center">Shadowing Practice: Choose a Level</h2>
            <div class="sub-menu-buttons">
                ${levels.map(level => `<button class="btn btn-primary sub-menu-btn" data-level="${level}">${level}</button>`).join('')}
            </div>
            <button class="btn btn-secondary" onclick="goHome()" style="margin-top: 1.5rem;">Back to Main Menu</button>
        </div>
    `;
    document.querySelectorAll('.sub-menu-buttons .btn').forEach(button => {
        button.addEventListener('click', (event) => {
            gameState.currentLevel = event.target.dataset.level;
            gameState.currentIndex = 0;
            gameState.currentPool = shuffleArray(gameData.shadowing[gameState.currentLevel]);
            startShadowingPractice();
        });
    });
}

function startShadowingPractice() {
    if (gameState.currentIndex >= gameState.currentPool.length) {
        displayGameEndScreen();
        return;
    }
    const currentSentence = gameState.currentPool[gameState.currentIndex];

    elements.gameArea.innerHTML = `
        <div class="container">
            <h2>Shadowing Practice</h2>
            <div class="question-box">
                <p>Listen and repeat:</p>
                <p class="example-sentence">${currentSentence.sentence}</p>
                <p class="khmer-translation" style="font-style: italic; color: #666;">(${currentSentence.khmer})</p>
                ${currentSentence.explanation ? `<p class="info-text"><strong>Note:</strong> ${currentSentence.explanation}</p>` : ''}
            </div>
            <div class="text-center button-group">
                <button class="btn btn-primary" id="listenBtn">🔊 Listen</button>
                <button class="btn btn-success" id="recordBtn">🎤 Record Your Voice</button>
                <button class="btn btn-info" id="playRecordingBtn" style="display: none;">▶️ Play Your Recording</button>
                <button class="btn btn-primary" id="nextSentenceBtn" style="display: none;">Next Sentence</button>
            </div>
            <div id="feedback" class="feedback" style="margin-top: 1rem;"></div>
            ${renderScoreAndButtons()}
        </div>
    `;

    const listenBtn = document.getElementById('listenBtn');
    const recordBtn = document.getElementById('recordBtn');
    const playRecordingBtn = document.getElementById('playRecordingBtn');
    const nextSentenceBtn = document.getElementById('nextSentenceBtn');
    const feedbackElement = document.getElementById('feedback');

    listenBtn.addEventListener('click', () => speakText(currentSentence.sentence));

    recordBtn.addEventListener('click', async () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            feedbackElement.className = 'feedback feedback-error';
            feedbackElement.textContent = 'Microphone not supported in this browser.';
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            gameState.audioRecorder = new MediaRecorder(stream);
            gameState.audioChunks = [];

            gameState.audioRecorder.ondataavailable = event => {
                gameState.audioChunks.push(event.data);
            };

            gameState.audioRecorder.onstop = () => {
                const audioBlob = new Blob(gameState.audioChunks, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);
                playRecordingBtn.onclick = () => {
                    const audio = new Audio(audioUrl);
                    audio.play();
                };
                playRecordingBtn.style.display = 'inline-block';
                nextSentenceBtn.style.display = 'inline-block'; // Allow user to proceed after recording
                recordBtn.textContent = '🎤 Re-Record'; // Change button text
                feedbackElement.className = 'feedback feedback-info';
                feedbackElement.textContent = 'Recording finished! You can play it back or move to the next sentence.';
                // Optional: You could add a "check pronunciation" feature here using a backend API
            };

            gameState.audioRecorder.start();
            recordBtn.textContent = '⏹️ Stop Recording';
            feedbackElement.className = 'feedback feedback-info';
            feedbackElement.textContent = 'Recording... Speak clearly into your microphone.';
            // Disable listen and play until recording stops
            listenBtn.disabled = true;
            playRecordingBtn.style.display = 'none';
            nextSentenceBtn.style.display = 'none';

            // Stop recording after a certain duration (e.g., 5 seconds)
            setTimeout(() => {
                if (gameState.audioRecorder.state === 'recording') {
                    gameState.audioRecorder.stop();
                    listenBtn.disabled = false;
                }
            }, 5000); // Record for 5 seconds

        } catch (err) {
            console.error('Error accessing microphone:', err);
            feedbackElement.className = 'feedback feedback-error';
            feedbackElement.textContent = 'Error accessing microphone. Please ensure it is connected and permissions are granted.';
        }
    });

    nextSentenceBtn.addEventListener('click', nextShadowingSentence);
}

function nextShadowingSentence() {
    gameState.currentIndex++;
    startShadowingPractice();
}


// --- Q&A Game (for HTML, CSS, JS) ---
function initQnAGame(mode) {
    const qnaDataKey = mode; // e.g., 'qna-html', 'qna-css', 'qna-js'
    if (!gameData[qnaDataKey]) {
        showInfoModal("Error", "Q&A topic not found. Please go back to the main menu.");
        return;
    }
    gameState.currentPool = shuffleArray(gameData[qnaDataKey]);
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderQnaQuestion();
}

function renderQnaQuestion() {
    if (gameState.currentIndex >= gameState.currentPool.length) {
        displayGameEndScreen();
        return;
    }
    const currentQuestion = gameState.currentPool[gameState.currentIndex];

    elements.gameArea.innerHTML = `
        <div class="container">
            <h2>Q&A Challenge</h2>
            <div class="question-box">
                <p>${currentQuestion.question}</p>
            </div>
            <div id="optionsContainer" class="sub-menu-buttons">
                ${currentQuestion.options.map(option => `<button class="btn btn-block" data-answer="${option}">${option}</button>`).join('')}
            </div>
            <div id="feedback" class="feedback"></div>
            <div id="explanation" class="explanation-box" style="display: none;"></div>
            ${renderScoreAndButtons()}
        </div>
    `;

    document.getElementById('optionsContainer').addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-block')) {
            checkQnaAnswer(event.target.dataset.answer, currentQuestion);
        }
    });

    speakText(currentQuestion.question);
}

function checkQnaAnswer(selectedAnswer, questionData) {
    stopTimer(); // Ensure timer is stopped for Q&A as well if you add one later
    const feedbackElement = document.getElementById('feedback');
    const options = document.querySelectorAll('#optionsContainer .btn-block');

    disableOptions(); // Disable all options after selection

    if (selectedAnswer === questionData.answer) {
        feedbackElement.className = 'feedback feedback-success';
        feedbackElement.textContent = "🥳 Correct! Well done!";
        gameState.score++;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-correct');
            }
        });
        speakText("Correct! Well done!");
    } else {
        feedbackElement.className = 'feedback feedback-error';
        feedbackElement.textContent = `❌ Incorrect. The correct answer was: "${questionData.answer}"`;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-incorrect');
            }
            if (btn.dataset.answer === questionData.answer) {
                btn.classList.add('btn-correct'); // Highlight correct answer
            }
        });
        speakText("Incorrect. Let's review.");
    }
    showExplanation(questionData.explanation);
    updateScoreDisplay();
    setTimeout(nextQnaQuestion, 5000); // Wait 5 seconds before next question
}

function nextQnaQuestion() {
    gameState.currentIndex++;
    renderQnaQuestion();
}