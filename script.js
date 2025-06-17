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
        BasicSentencePatterns: {
            "1. Subject + Verb (S + V)": {
                description: "This is the simplest type of sentence. It has a subject doing an action, but the action doesn't transfer to an object.",
                structure: "Subject + Verb (S + V)",
                examples: [
                    { type: "correct", "sentence": "She sings." },
                    { type: "correct", "sentence": "The baby cried." },
                    { type: "correct", "sentence": "I agree." }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which of the following is a correct 'Subject + Verb' sentence?",
                        options: [
                            { text: "He is happy.", "correct": false },
                            { text: "They swim.", "correct": true, explanation: "👉 'They' is the subject and 'swim' is the verb. There is no object." },
                            { text: "She reads a book.", "correct": false }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "The dog ______.",
                        correctAnswer: "barks",
                        explanation: "👉 'barks' is a verb that completes the S+V pattern. Other answers like 'runs' or 'sleeps' are also correct."
                    }
                ]
            },
            "2. Subject + Verb + Object (S + V + O)": {
                description: "This is the most common sentence pattern in English. The action of the verb is passed on to an object.",
                structure: "Subject + Verb + Object (S + V + O)",
                examples: [
                    { type: "correct", "sentence": "I like coffee. (What do I like? Coffee.)" },
                    { type: "correct", "sentence": "He reads books. (What does he read? Books.)" },
                    { type: "correct", "sentence": "My brother fixed the car. (What did my brother fix? The car.)" }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which sentence follows the 'Subject + Verb + Object' pattern?",
                        options: [
                            { text: "The sun shines.", "correct": false },
                            { text: "We ate pizza.", "correct": true, explanation: "👉 'We' (S) 'ate' (V) 'pizza' (O). The action of eating is done to the pizza." },
                            { text: "She seems tired.", "correct": false }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "The student answered ______.",
                        correctAnswer: "the question",
                        explanation: "👉 'the question' is the object that receives the action of the verb 'answered'."
                    }
                ]
            },
            "3. Subject + Verb + Adjective (S + V + Adjective)": {
                description: "This pattern uses an adjective to describe the subject. The verb is often a 'linking verb' like is, am, are, feels, seems, looks, tastes.",
                structure: "Subject + Verb + Adjective (S + V + Adjective)",
                examples: [
                    { type: "correct", "sentence": "He is tall. (Tall describes him.)" },
                    { type: "correct", "sentence": "I feel happy. (Happy describes me.)" },
                    { type: "correct", "sentence": "The food tastes delicious. (Delicious describes the food.)" }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which sentence correctly uses a 'Subject + Verb + Adjective' structure?",
                        options: [
                            { text: "She runs quickly.", "correct": false },
                            { text: "This soup is hot.", "correct": true, explanation: "👉 'Hot' is an adjective that describes the subject 'soup'." },
                            { text: "He is a lawyer.", "correct": false }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "The children seem ______.",
                        correctAnswer: "excited",
                        explanation: "👉 'Excited' is an adjective describing the children's state."
                    }
                ]
            },
            "4. Subject + Verb + Adverb (S + V + Adverb)": {
                description: "This pattern uses an adverb to describe how, when, or where the action is done.",
                structure: "Subject + Verb + Adverb (S + V + Adverb)",
                examples: [
                    { type: "correct", "sentence": "She speaks fluently. (How does she speak? Fluently.)" },
                    { type: "correct", "sentence": "They arrived yesterday. (When did they arrive? Yesterday.)" },
                    { type: "correct", "sentence": "The cat is sleeping there. (Where is the cat sleeping? There.)" }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which sentence contains an adverb describing *how* an action is done?",
                        options: [
                            { text: "He will be here.", "correct": false },
                            { text: "The man shouted loudly.", "correct": true, explanation: "👉 'Loudly' is an adverb that describes how the man shouted." },
                            { type: "correct", "sentence": "The movie was interesting.", "correct": false }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "Please walk ______.",
                        correctAnswer: "carefully",
                        explanation: "👉 'Carefully' is an adverb that modifies the verb 'walk', telling how the action should be done."
                    }
                ]
            },
            "5. Subject + Verb + Noun (S + V + Noun)": {
                description: "This pattern uses a second noun to rename or identify the subject. The verb is usually a form of 'to be' (is, am, are, was, were).",
                structure: "Subject + Verb + Noun (S + V + Noun)",
                examples: [
                    { type: "correct", "sentence": "She is a doctor. ('A doctor' identifies her.)" },
                    { type: "correct", "sentence": "My father was a great teacher. ('A great teacher' renames my father.)" },
                    { type: "correct", "sentence": "They are my friends. ('My friends' identifies them.)" }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which sentence uses a noun to rename the subject?",
                        options: [
                            { text: "That building is tall.", "correct": false },
                            { text: "Mr. Smith is our teacher.", "correct": true, explanation: "👉 'Our teacher' is a noun that renames the subject 'Mr. Smith'." },
                            { text: "I want a new car.", "correct": false }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "Her brother became ______.",
                        correctAnswer: "an engineer",
                        explanation: "👉 'an engineer' is a noun that identifies what her brother became."
                    }
                ]
            },
            "How to Practice": {
                description: "How to Practice<br>Listen and Identify: When you listen to English speakers, try to identify the S, V, and O in their sentences.<br>Start Simple: Create your own simple sentences using each of the five patterns above. Say them out loud.<br>Expand Your Sentences: Once you are comfortable, add more details using prepositions (in, on, at, for) and conjunctions (and, but, so, because).<br>S+V+O: I bought a shirt.<br>Expanded: I bought a new shirt at the mall yesterday because I needed it for the party.<br>By focusing on these core structures, your speaking will become more logical, clear, and correct.",
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "In the sentence 'The little girl happily chased the butterfly,' what is the Object?",
                        options: [
                            { text: "The little girl", "correct": false },
                            { text: "the butterfly", "correct": true, explanation: "👉 'The butterfly' is the object that receives the action of being chased." },
                            { text: "happily", "correct": false }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "Expand this S+V sentence by adding more details (like an object, adverb, or place): 'He painted ______.'",
                        correctAnswer: "a beautiful picture in his studio",
                        explanation: "👉 This is one example. Any answer that adds details like an object, place, or time is correct (e.g., 'the fence yesterday')."
                    }
                ]
            }
        }
    },

    shadowing: {
        "Beginner Sentences": [
            { sentence: "The <section> tag represents a standalone section of content, usually with its own heading, such as a chapter, tab, or part of a page. ", khmer: "What is the <section> tag used for in HTML?" },
            { sentence: "To define standalone blocks of content with a specific theme or purpose. ", khmer: "What is the <section> tag used for in HTML?" },
            { sentence: "What happens when you place two <div> elements next to each other in HTML?", khmer: "They stack vertically because <div> is a block-level element." },
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


// Game State Management - Centralized and clear
const gameState = {
    mode: null,
    currentIndex: 0,
    score: 0,
    currentPool: [],
    currentRule: null,
    currentLevel: null,
    recognition: null,
    audioRecorder: null,
    audioChunks: [],
    synth: window.speechSynthesis,
    voices: [],
    timerInterval: null,
    timeLeft: 30,
    recognitionActive: false,
    mediaStream: null // To hold the audio stream
};

// DOM Elements - Using a consistent naming convention
const DOMElements = {
    modeSelection: document.getElementById("modeSelection"),
    gameArea: document.getElementById("gameArea"),
    homeLink: document.getElementById("homeLink"),
    aboutLink: document.getElementById("aboutLink"),
    contactLink: document.getElementById("contactLink"),
    resourcesLink: document.getElementById("resourcesLink"),
    navContainer: document.querySelector(".nav-container"),
    mainHeading: document.querySelector('h1') // Directly select the h1
};

// --- Initialization ---
function init() {
    // Initialize SpeechSynthesis voices
    if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = () => {
            gameState.voices = gameState.synth.getVoices();
        };
    } else {
        console.warn("SpeechSynthesis not supported.");
    }

    // Set up global event listeners
    setupEventListeners();

    // Add profile image dynamically
    addProfileImage();

    // Display home screen on load
    goHome();
}

// --- Event Listener Setup ---
function setupEventListeners() {
    DOMElements.homeLink.addEventListener("click", goHome);
    DOMElements.aboutLink.addEventListener("click", () =>
        showInfoModal("About Us", "This is an interactive English learning game designed to help you improve your language skills through various challenges: Vocabulary, Grammar, Shadowing, and Q&A.")
    );
    DOMElements.contactLink.addEventListener("click", () =>
        showInfoModal("Contact", "For support or feedback, please email us at: <a href='mailto:rasovanna785@gmail.com'>rasovanna785@gmail.com</a>")
    );
    DOMElements.resourcesLink.addEventListener("click", () =>
        showInfoModal("Resources", "Check out these helpful resources:<br><ul><li><a href='https://dictionary.cambridge.org/' target='_blank'>Cambridge Dictionary</a></li><li><a href='https://www.bbc.co.uk/learningenglish/' target='_blank'>BBC Learning English</a></li><li><a href='https://www.duolingo.com/' target='_blank'>Duolingo</a></li></ul>")
    );

    // Use event delegation for mode selection buttons
    DOMElements.modeSelection.addEventListener('click', (event) => {
        if (event.target.classList.contains('sub-menu-btn')) {
            const mode = event.target.dataset.mode;
            if (mode) {
                selectMode(mode);
            }
        }
    });
}

function addProfileImage() {
    const profileImage = document.createElement("img");
    profileImage.src = "image/AnnaRa.png"; // Replace with the actual path to your image
    profileImage.alt = "Profile Image";
    profileImage.className = "profile-image"; // Apply defined styles
    profileImage.addEventListener("click", () => {
        showInfoModal("Profile", "Sovanna!, Are you ready to improve yourself step by step! Let's start now! <br> Tomorrow you will see progress!");
    });
    DOMElements.navContainer.prepend(profileImage); // Use prepend to place it before other nav items
}

// --- Utility Functions ---
function showInfoModal(title, content) {
    stopTimer(); // Stop any active timer
    resetSpeechAndAudio(); // Stop any active recognition/recording
    DOMElements.gameArea.innerHTML = `
        <div class="container">
            <h2>${title}</h2>
            <div class="question-box" style="text-align: left;">
                <p>${content}</p>
            </div>
            <button class="btn btn-primary" onclick="goHome()">Back to Home</button>
        </div>
    `;
    DOMElements.modeSelection.style.display = "none";
}

function shuffleArray(array) {
    return [...array].sort(() => 0.5 - Math.random());
}

function speakText(text, lang = 'en-US') {
    if (!gameState.synth || gameState.voices.length === 0) {
        console.warn("SpeechSynthesis not supported or voices not loaded.");
        return;
    }
    gameState.synth.cancel(); // Cancel any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    const englishVoices = gameState.voices.filter(voice => voice.lang.startsWith('en'));
    if (englishVoices.length > 0) {
        utterance.voice = englishVoices[0];
    } else {
        console.warn("No English voices available, using default.");
    }
    gameState.synth.speak(utterance);
}

function playAudio(path) {
    const audio = new Audio(path);
    audio.play().catch(e => console.error("Error playing audio:", e));
}

function startTimer(duration, onTick, onComplete) {
    stopTimer(); // Clear any existing timer
    gameState.timeLeft = duration;
    onTick(gameState.timeLeft); // Initial call

    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        onTick(gameState.timeLeft);
        if (gameState.timeLeft <= 0) {
            stopTimer();
            onComplete();
        }
    }, 1000);
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

function updateTimerBar(timeLeft) {
    const timerBar = document.getElementById("timerBar");
    if (timerBar) {
        const percentage = (timeLeft / 30) * 100; // Use fixed 30 for max duration, or gameState.initialTime if it varies
        timerBar.style.width = `${percentage}%`;
        if (percentage < 25) {
            timerBar.style.backgroundColor = 'var(--danger-color)';
        } else if (percentage < 50) {
            timerBar.style.backgroundColor = 'var(--warning-color)';
        } else {
            timerBar.style.backgroundColor = 'var(--success-color)';
        }
    }
}

function displayFeedback(message, isCorrect) {
    const feedbackDiv = document.createElement("div");
    feedbackDiv.className = `feedback ${isCorrect ? 'feedback-success' : 'feedback-error'}`;
    feedbackDiv.textContent = message;
    const gameAreaContainer = DOMElements.gameArea.querySelector('.container');
    if (gameAreaContainer) {
        gameAreaContainer.appendChild(feedbackDiv);
    }
    setTimeout(() => {
        if (feedbackDiv.parentNode) {
            feedbackDiv.parentNode.removeChild(feedbackDiv);
        }
    }, 1500);
}

// --- Core Game Flow Functions ---
function goHome() {
    resetGameState();
    DOMElements.modeSelection.style.display = "block";
    DOMElements.gameArea.innerHTML = "";
    DOMElements.mainHeading.textContent = "Master English: Your Interactive Learning Journey";
}

function resetGameState() {
    stopTimer();
    resetSpeechAndAudio(); // Consolidated speech and audio cleanup
    gameState.currentIndex = 0;
    gameState.score = 0;
    gameState.currentPool = [];
    gameState.currentRule = null;
    gameState.currentLevel = null;
    gameState.mode = null; // Clear the mode
    gameState.synth.cancel(); // Stop any ongoing speech
}

function resetSpeechAndAudio() {
    if (gameState.recognition && gameState.recognitionActive) {
        gameState.recognition.stop();
        gameState.recognitionActive = false;
    }
    if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
        gameState.audioRecorder.stop();
    }
    if (gameState.mediaStream) {
        gameState.mediaStream.getTracks().forEach(track => track.stop()); // Stop microphone access
        gameState.mediaStream = null;
    }
    gameState.audioChunks = [];
}

function selectMode(mode) {
    resetGameState(); // Reset state when a new mode is selected
    gameState.mode = mode;
    DOMElements.modeSelection.style.display = "none";
    let headingText = '';
    switch (mode) {
        case 'vocab': headingText = '📚 Vocabulary Challenge'; break;
        case 'grammar': headingText = '📝 Grammar Guru'; break;
        case 'shadowing': headingText = '🗣️ Shadowing Practice'; break;
        case 'qna-html': headingText = '❓ HTML Q&A'; break;
        case 'qna-css': headingText = '❓ CSS Q&A'; break;
        case 'qna-js': headingText = '❓ JavaScript Q&A'; break;
        default: headingText = 'Interactive Learning Journey';
    }
    DOMElements.mainHeading.textContent = `Master English: ${headingText}`; // Update H1
    DOMElements.gameArea.innerHTML = `
        <div class="container">
            <h2 class="text-center">Loading ${headingText.replace('❓ ', '')}...</h2>
            <p class="info-text">Prepare for your challenge!</p>
        </div>
    `;
    setTimeout(() => { // Small delay for visual transition
        switch (mode) {
            case "vocab": initVocabGame(); break;
            case "grammar": initGrammarGame(); break;
            case "shadowing": initShadowingGame(); break;
            case "qna-html":
            case "qna-css":
            case "qna-js": initQnAGame(mode); break;
        }
    }, 500);
}

function displayGameEndScreen() {
    stopTimer();
    resetSpeechAndAudio();
    DOMElements.gameArea.innerHTML = `
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
    const mode = gameState.mode;
    resetGameState();
    selectMode(mode);
}

function renderScoreAndButtons() {
    return `
        <div class="score-display">Score: ${gameState.score}</div>
        <div class="text-center" style="margin-top: 1.5rem;">
            <button class="btn btn-secondary" onclick="goHome()">Back to Menu</button>
        </div>
    `;
}

function nextQuestion() {
    gameState.currentIndex++;
    // Use a switch statement for clarity
    switch (gameState.mode) {
        case 'vocab': renderVocabQuestion(); break;
        case 'qna-html':
        case 'qna-css':
        case 'qna-js': renderQnAGameQuestion(); break;
        case 'grammar': renderGrammarQuizQuestion(); break; // This will handle progressing through grammar quizzes
        case 'shadowing': renderShadowingQuestion(); break;
        default: console.error("Unknown game mode for nextQuestion:", gameState.mode);
    }
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
    // Ensure unique incorrect options and prevent duplicates of the correct answer
    const incorrectOptions = shuffleArray(gameData.vocab.filter(w => w.word !== currentWord.word))
        .slice(0, 3)
        .map(w => w.meaning);
    const options = shuffleArray([currentWord.meaning, ...incorrectOptions]);

    DOMElements.gameArea.innerHTML = `
        <div class="container">
            <div class="timer-bar-container"><div id="timerBar" class="timer-bar"></div></div>
            <div class="question-box">
                <p>What does "<span style="color: var(--primary-color);">${escapeHTML(currentWord.word)}</span>" mean?</p>
                <button class="btn btn-primary" onclick="speakText('${escapeHTML(currentWord.word)}')">🔊 Listen</button>
            </div>
            <div id="optionsContainer" class="sub-menu-buttons">
                ${options.map(option => `<button class="btn btn-block" data-answer="${escapeHTML(option)}">${escapeHTML(option)}</button>`).join('')}
            </div>
            ${renderScoreAndButtons()}
        </div>
    `;

    document.getElementById("optionsContainer").addEventListener('click', handleVocabAnswer);
    startTimer(gameState.timeLeft, updateTimerBar, () => {
        displayFeedback("Time's up! The correct answer was: " + currentWord.meaning, false);
        setTimeout(nextQuestion, 2000);
    });
}

function handleVocabAnswer(event) {
    if (event.target.tagName === 'BUTTON') {
        stopTimer();
        const selectedAnswer = event.target.dataset.answer;
        const currentWord = gameState.currentPool[gameState.currentIndex];
        const isCorrect = selectedAnswer === currentWord.meaning;

        if (isCorrect) {
            gameState.score++;
            displayFeedback("Correct!", true);
        } else {
            displayFeedback(`Wrong! The correct answer was: ${currentWord.meaning}`, false);
        }

        Array.from(event.currentTarget.children).forEach(button => button.disabled = true);
        setTimeout(nextQuestion, 2000);
    }
}


// --- Grammar Game ---
function initGrammarGame() {
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderGrammarRuleSelection();
}

// **MODIFIED:** renderGrammarRuleSelection to match the image
function renderGrammarRuleSelection() {
    let tensesButtonsHtml = '';
    for (const ruleName in gameData.grammar.tenses) {
        tensesButtonsHtml += `<button class="sub-menu-btn" data-rule="${escapeHTML(ruleName)}">${escapeHTML(ruleName)}</button>`;
    }

    let structuresButtonsHtml = '';
    for (const ruleName in gameData.grammar.structureQuiz) {
        structuresButtonsHtml += `<button class="sub-menu-btn" data-rule="${escapeHTML(ruleName)}">${escapeHTML(ruleName)}</button>`;
    }

    let basicPatternsButtonsHtml = '';
    for (const ruleName in gameData.grammar.BasicSentencePatterns) {
        basicPatternsButtonsHtml += `<button class="sub-menu-btn" data-rule="${escapeHTML(ruleName)}">${escapeHTML(ruleName)}</button>`;
    }


    DOMElements.gameArea.innerHTML = `
        <div class="container text-center">
            <h2>Select a Grammar Rule to Practice</h2>
            <div class="grammar-categories">
                <div class="grammar-category">
                    <h3>Tenses</h3>
                    <div class="sub-menu-buttons">
                        ${tensesButtonsHtml}
                    </div>
                </div>
                <div class="grammar-category">
                    <h3>Structures</h3>
                    <div class="sub-menu-buttons">
                        ${structuresButtonsHtml}
                    </div>
                </div>
                <div class="grammar-category full-width">
                    <h3>The 5 Basic Sentence Patterns</h3>
                    <div class="sub-menu-buttons">
                        ${basicPatternsButtonsHtml}
                    </div>
                </div>
            </div>
            ${renderScoreAndButtons()}
        </div>
    `;

    document.querySelectorAll('.sub-menu-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            gameState.currentRule = event.target.dataset.rule;
            displayGrammarRuleDetails();
        });
    });
}


function displayGrammarRuleDetails() {
    const rules = {
        ...gameData.grammar.tenses,
        ...gameData.grammar.structureQuiz,
        ...gameData.grammar.BasicSentencePatterns
    };
    const rule = rules[gameState.currentRule];

    if (!rule) {
        DOMElements.gameArea.innerHTML = `<p>Error: Rule not found.</p>`;
        return;
    }

    let examplesHtml = '';
    if (rule.examples) { // Check if examples exist
        examplesHtml = rule.examples.map(ex => `
            <p class="${ex.type === 'correct' ? 'text-success' : 'text-danger'}">
                ${ex.type === 'incorrect' ? `<strong>Incorrect:</strong> <s>${escapeHTML(ex.sentence)}</s><br><strong>Correct:</strong> ${escapeHTML(ex.correct)}` : escapeHTML(ex.sentence)}
                ${ex.explanation ? `<br><small>${escapeHTML(ex.explanation)}</small>` : ''}
            </p>
        `).join('');
    }


    DOMElements.gameArea.innerHTML = `
        <div class="container text-center">
            <h2>${escapeHTML(gameState.currentRule)}</h2>
            <div class="question-box" style="text-align: left;">
                <p><strong>Description:</strong> ${rule.description}</p>
                ${rule.structure ? `<p><strong>Structure:</strong> ${escapeHTML(rule.structure)}</p>` : ''}
                ${examplesHtml ? `<h3>Examples:</h3>${examplesHtml}` : ''}
            </div>
            <button class="btn btn-primary" onclick="startGrammarQuiz()">Start Quiz</button>
            <button class="btn btn-secondary" onclick="initGrammarGame()">Back to Rule Selection</button>
        </div>
    `;
}

function startGrammarQuiz() {
    const rules = {
        ...gameData.grammar.tenses,
        ...gameData.grammar.structureQuiz,
        ...gameData.grammar.BasicSentencePatterns
    };
    const rule = rules[gameState.currentRule];
    if (rule && rule.quizQuestions) {
        gameState.currentPool = shuffleArray(rule.quizQuestions);
        gameState.currentIndex = 0;
        gameState.score = 0;
        renderGrammarQuizQuestion();
    } else {
        DOMElements.gameArea.innerHTML = `<div class="container text-center"><p>No quiz questions available for this rule.</p><button class="btn btn-primary" onclick="initGrammarGame()">Back to Rule Selection</button></div>`;
    }
}

function renderGrammarQuizQuestion() {
    if (gameState.currentIndex >= gameState.currentPool.length) {
        displayGameEndScreen();
        return;
    }

    const currentQuiz = gameState.currentPool[gameState.currentIndex];
    let questionHtml = `<p>${escapeHTML(currentQuiz.question)}</p>`;
    let optionsHtml = '';

    if (currentQuiz.type === "multiple-choice") {
        optionsHtml = currentQuiz.options.map(option => `
            <button class="btn btn-block" data-answer="${escapeHTML(option.text)}">${escapeHTML(option.text)}</button>
        `).join('');
    } else if (currentQuiz.type === "fill-in-blank") {
        // Ensure fill-in-blank input is rendered correctly
        questionHtml = `<p>${escapeHTML(currentQuiz.question).replace('______', `<input type="text" id="fillInBlankAnswer" class="fill-in-blank-input" placeholder="Your answer">`)}</p>`;
        optionsHtml = `<button class="btn btn-primary" id="submitFillInBlank">Submit</button>`;
    }

    DOMElements.gameArea.innerHTML = `
        <div class="container">
            <div class="question-box">
                ${questionHtml}
            </div>
            <div id="quizOptionsContainer" class="sub-menu-buttons">
                ${optionsHtml}
            </div>
            ${renderScoreAndButtons()}
        </div>
    `;

    if (currentQuiz.type === "multiple-choice") {
        document.getElementById("quizOptionsContainer").addEventListener('click', handleGrammarMultipleChoiceAnswer);
    } else if (currentQuiz.type === "fill-in-blank") {
        document.getElementById("submitFillInBlank").addEventListener('click', handleGrammarFillInBlankAnswer);
    }
}

function handleGrammarMultipleChoiceAnswer(event) {
    if (event.target.tagName === 'BUTTON') {
        const selectedAnswer = event.target.dataset.answer;
        const currentQuiz = gameState.currentPool[gameState.currentIndex];
        const correctOption = currentQuiz.options.find(opt => opt.correct);
        const isCorrect = selectedAnswer === correctOption.text;

        if (isCorrect) {
            gameState.score++;
            displayFeedback("Correct! " + (correctOption.explanation || ''), true);
        } else {
            displayFeedback(`Wrong! The correct answer was: ${correctOption.text}. ${correctOption.explanation || ''}`, false);
        }
        Array.from(event.currentTarget.children).forEach(button => button.disabled = true);
        setTimeout(nextQuestion, 2000);
    }
}

function handleGrammarFillInBlankAnswer() {
    const userAnswerInput = document.getElementById("fillInBlankAnswer");
    const userAnswer = userAnswerInput.value.trim();
    const currentQuiz = gameState.currentPool[gameState.currentIndex];
    const isCorrect = userAnswer.toLowerCase() === currentQuiz.correctAnswer.toLowerCase();

    if (isCorrect) {
        gameState.score++;
        displayFeedback("Correct! " + (currentQuiz.explanation || ''), true);
    } else {
        displayFeedback(`Wrong! The correct answer was: ${currentQuiz.correctAnswer}. ${currentQuiz.explanation || ''}`, false);
    }
    userAnswerInput.disabled = true;
    document.getElementById("submitFillInBlank").disabled = true;
    setTimeout(nextQuestion, 2000);
}


// --- Shadowing Game ---
function initShadowingGame() {
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderShadowingLevelSelection();
}

function renderShadowingLevelSelection() {
    let levelButtonsHtml = '';
    for (const levelName in gameData.shadowing) {
        levelButtonsHtml += `<button class="sub-menu-btn" data-level="${escapeHTML(levelName)}">${escapeHTML(levelName)}</button>`;
    }

    DOMElements.gameArea.innerHTML = `
        <div class="container text-center">
            <h2>Select a Shadowing Level</h2>
            <div class="sub-menu-buttons">
                ${levelButtonsHtml}
            </div>
            ${renderScoreAndButtons()}
        </div>
    `;

    document.querySelectorAll('.sub-menu-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            gameState.currentLevel = event.target.dataset.level;
            gameState.currentPool = shuffleArray(gameData.shadowing[gameState.currentLevel]);
            gameState.currentIndex = 0;
            renderShadowingQuestion();
        });
    });
}

function renderShadowingQuestion() {
    if (gameState.currentIndex >= gameState.currentPool.length) {
        displayGameEndScreen();
        return;
    }
    resetSpeechAndAudio(); // Reset for a new question

    const currentSentence = gameState.currentPool[gameState.currentIndex];

    DOMElements.gameArea.innerHTML = `
        <div class="container">
            <div class="question-box shadowing-box">
                <p><strong>Listen and Repeat:</strong></p>
                <p class="shadowing-sentence" id="sentenceToShadow">${currentSentence.sentence}</p>
                ${currentSentence.khmer ? `<p class="khmer-translation">${currentSentence.khmer}</p>` : ''}
                ${currentSentence.explanation ? `<p class="explanation"><small>Meaning: ${escapeHTML(currentSentence.explanation)}</small></p>` : ''}
                <button class="btn btn-primary" id="listenBtn">🔊 Play Sentence</button>
                <button class="btn btn-success" id="startRecordingBtn">🎤 Start Recording</button>
                <button class="btn btn-danger" id="stopRecordingBtn" disabled>⏹️ Stop Recording</button>
                <button class="btn btn-info" id="playbackRecordingBtn" disabled>▶️ Play My Recording</button>
                <div id="recordingStatus" class="info-text" style="margin-top: 10px;"></div>
                <div id="speechRecognitionResult" class="feedback"></div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-3">
                <button class="btn btn-secondary" onclick="skipShadowingQuestion()">Skip</button>
                <button class="btn btn-primary" onclick="nextShadowingQuestion()">Next</button>
            </div>
            ${renderScoreAndButtons()}
        </div>
    `;

    document.getElementById('listenBtn').addEventListener('click', () => speakText(currentSentence.sentence));
    document.getElementById('startRecordingBtn').addEventListener('click', startRecording);
    document.getElementById('stopRecordingBtn').addEventListener('click', stopRecording);
    document.getElementById('playbackRecordingBtn').addEventListener('click', playbackRecording);

    initSpeechRecognitionAndMediaRecorder(); // Consolidated initialization
}

function skipShadowingQuestion() {
    displayFeedback("Skipped.", false);
    resetSpeechAndAudio(); // Clean up current recording/recognition
    setTimeout(nextQuestion, 1000);
}

function nextShadowingQuestion() {
    resetSpeechAndAudio(); // Clean up current recording/recognition
    nextQuestion();
}

function initSpeechRecognitionAndMediaRecorder() {
    // Check for Speech Recognition API support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        document.getElementById('recordingStatus').textContent = "Speech Recognition not supported in this browser.";
        document.getElementById('startRecordingBtn').disabled = true;
        return;
    }

    gameState.recognition = new SpeechRecognition();
    gameState.recognition.continuous = false;
    gameState.recognition.interimResults = false;
    gameState.recognition.lang = 'en-US';

    gameState.recognition.onstart = () => {
        gameState.recognitionActive = true;
        document.getElementById('recordingStatus').textContent = "Listening...";
        document.getElementById('startRecordingBtn').disabled = true;
        document.getElementById('stopRecordingBtn').disabled = false;
        document.getElementById('playbackRecordingBtn').disabled = true;
        document.getElementById('speechRecognitionResult').textContent = ''; // Clear previous result
    };

    gameState.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('speechRecognitionResult').textContent = `You said: "${escapeHTML(transcript)}"`;
        const currentSentence = gameState.currentPool[gameState.currentIndex].sentence;
        const similarity = calculateSimilarity(transcript, currentSentence);

        if (similarity > 0.7) {
            displayFeedback("Great job! Your pronunciation is good!", true);
            gameState.score++;
        } else {
            displayFeedback("Keep practicing! Try to match the original sentence more closely.", false);
        }
        setTimeout(nextQuestion, 3000);
    };

    gameState.recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        document.getElementById('recordingStatus').textContent = `Error: ${event.error}`;
        gameState.recognitionActive = false;
        document.getElementById('startRecordingBtn').disabled = false;
        document.getElementById('stopRecordingBtn').disabled = true;
    };

    gameState.recognition.onend = () => {
        gameState.recognitionActive = false;
        document.getElementById('recordingStatus').textContent = "Stopped.";
        document.getElementById('startRecordingBtn').disabled = false;
        document.getElementById('stopRecordingBtn').disabled = true;
        if (gameState.audioChunks.length > 0) {
            document.getElementById('playbackRecordingBtn').disabled = false;
        }
    };

    // Initialize MediaRecorder for audio playback
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                gameState.mediaStream = stream; // Store stream to stop tracks later
                gameState.audioRecorder = new MediaRecorder(stream);

                gameState.audioRecorder.ondataavailable = event => {
                    gameState.audioChunks.push(event.data);
                };

                gameState.audioRecorder.onstop = () => {
                    // Audio recording stopped, can process if needed
                };
            })
            .catch(e => {
                console.error("Microphone access denied or error:", e);
                document.getElementById('recordingStatus').textContent = "Microphone access denied. Cannot record audio.";
                document.getElementById('startRecordingBtn').disabled = true;
            });
    } else {
        document.getElementById('recordingStatus').textContent = "MediaRecorder not supported in this browser.";
        document.getElementById('startRecordingBtn').disabled = true;
    }
}

function startRecording() {
    // Stop any previous recording/recognition before starting a new one
    resetSpeechAndAudio();
    document.getElementById('speechRecognitionResult').textContent = ''; // Clear previous result

    if (gameState.recognition) {
        gameState.recognition.start();
    }
    if (gameState.audioRecorder) {
        gameState.audioChunks = [];
        gameState.audioRecorder.start();
    }
}

function stopRecording() {
    if (gameState.recognition && gameState.recognitionActive) {
        gameState.recognition.stop();
    }
    if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
        gameState.audioRecorder.stop();
    }
    document.getElementById('recordingStatus').textContent = "Processing recording...";
}

function playbackRecording() {
    if (gameState.audioChunks.length > 0) {
        const blob = new Blob(gameState.audioChunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        audio.play().catch(e => console.error("Error playing back recording:", e));
    } else {
        document.getElementById('recordingStatus').textContent = "No recording to play.";
    }
}

// Simple similarity calculation (Jaccard Index for words)
function calculateSimilarity(text1, text2) {
    const words1 = text1.toLowerCase().split(/\s+/).filter(Boolean);
    const words2 = text2.toLowerCase().split(/\s+/).filter(Boolean);

    if (words1.length === 0 || words2.length === 0) {
        return 0;
    }

    const set1 = new Set(words1);
    const set2 = new Set(words2);

    let intersectionCount = 0;
    for (const word of set1) {
        if (set2.has(word)) {
            intersectionCount++;
        }
    }

    const unionCount = set1.size + set2.size - intersectionCount;
    return intersectionCount / unionCount;
}


// --- Q&A Game (HTML, CSS, JS) ---
function initQnAGame(mode) {
    gameState.currentPool = shuffleArray(gameData[mode]);
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderQnAGameQuestion();
}

function renderQnAGameQuestion() {
    if (gameState.currentIndex >= gameState.currentPool.length) {
        displayGameEndScreen();
        return;
    }

    const currentQuestion = gameState.currentPool[gameState.currentIndex];
    const optionsHtml = currentQuestion.options.map(option => `
        <button class="btn btn-block" data-answer="${escapeHTML(option)}">${escapeHTML(option)}</button>
    `).join('');

    DOMElements.gameArea.innerHTML = `
        <div class="container">
            <div class="question-box">
                <p>${escapeHTML(currentQuestion.question)}</p>
            </div>
            <div id="qnaOptionsContainer" class="sub-menu-buttons">
                ${optionsHtml}
            </div>
            ${renderScoreAndButtons()}
        </div>
    `;

    document.getElementById("qnaOptionsContainer").addEventListener('click', handleQnAGameAnswer);
}

function handleQnAGameAnswer(event) {
    if (event.target.tagName === 'BUTTON') {
        const selectedAnswer = event.target.dataset.answer;
        const currentQuestion = gameState.currentPool[gameState.currentIndex];
        const isCorrect = selectedAnswer === currentQuestion.answer;

        if (isCorrect) {
            gameState.score++;
            displayFeedback("Correct! " + escapeHTML(currentQuestion.explanation), true);
        } else {
            displayFeedback(`Wrong! The correct answer was: ${escapeHTML(currentQuestion.answer)}. ${escapeHTML(currentQuestion.explanation)}`, false);
        }

        Array.from(event.currentTarget.children).forEach(button => button.disabled = true);
        setTimeout(nextQuestion, 2000);
    }
}

// Helper function to escape HTML for safer injection
function escapeHTML(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// Initial setup to display mode selection on load
document.addEventListener("DOMContentLoaded", init);
