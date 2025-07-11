/**
 * @file script.js
 * @description This script powers an interactive English learning game with various modes
 * including Vocabulary, Grammar, Shadowing, Conversation, Listen & Type, and Q&A.
 * It manages game state, UI updates, audio playback, and speech recognition/synthesis.
 */

// Use an Immediately Invoked Function Expression (IIFE) to encapsulate the game logic
// and prevent global variable pollution.
(function() {
    'use strict'; // Enforce stricter parsing and error handling

    // --- DOM Elements Cache ---
    // Cache frequently accessed DOM elements for better performance and readability.
    const elements = {
        appContainer: document.getElementById('app'),
        mainHeading: document.getElementById('mainHeading'),
        modeSelection: document.getElementById('modeSelection'),
        gameArea: document.getElementById('gameArea'),
        homeButton: document.getElementById('homeBtn'),
        // Mode selection buttons
        vocabModeBtn: document.getElementById('vocabModeBtn'),
        grammarModeBtn: document.getElementById('grammarModeBtn'),
        shadowingModeBtn: document.getElementById('shadowingModeBtn'),
        conversationModeBtn: document.getElementById('conversationModeBtn'),
        listenTypeModeBtn: document.getElementById('listenTypeModeBtn'),
        allListenAndTypeModeBtn: document.getElementById('allListenAndTypeModeBtn'),
        qnaButtons: document.querySelectorAll('.qna-mode-btn') // Select all Q&A buttons
    };

    // --- Game State Management ---
    // Centralized object to manage the current state of the game.
    const gameState = {
        mode: null, // Current game mode (e.g., 'vocab', 'grammar', 'shadowing', 'qna-basic')
        currentIndex: 0, // Current question/item index in the pool
        score: 0, // Player's score
        currentPool: [], // Array of items for the current game session (e.g., vocabulary words, grammar sentences)
        currentRule: null, // Specific rule for grammar mode
        currentLevel: null, // Specific level for grammar/other modes
        currentListenAndTypeCategory: null, // Category for Listen & Type mode
        currentShadowingCategory: null, // Category for Shadowing mode
        currentConversationScenario: null, // Scenario for Conversation mode
        timerInterval: null, // Interval ID for the game timer
        timeLeft: 0, // Remaining time in seconds for timed challenges
        synth: window.speechSynthesis, // Web Speech API SpeechSynthesis object
        recognition: null, // Web Speech API SpeechRecognition object
        recognitionActive: false, // Flag to indicate if speech recognition is active
        audioRecorder: null, // MediaRecorder object for audio recording
        audioChunks: [], // Array to store recorded audio data chunks
        audioContext: null, // AudioContext for playback
        audioSource: null // AudioBufferSourceNode for playback
    };

    // --- Game Data ---
    // All game content (vocabulary, grammar rules, conversations, Q&A sets).
    // This structure allows for easy expansion and management of game content.
    const gameData = {
        vocab: [
           { word: "I'm tired.", meaning: "Used to express a need for rest.", khmer: "ខ្ញុំនឿយហត់។", audio: "audio/im_tired.mp3", options: ["I'm energetic.", "I need rest.", "I'm awake.", "I'm lively."], Answer: "I need rest." },
            { word: "I'm happy.", meaning: "Used to express a feeling of joy.", khmer: "ខ្ញុំសប្បាយចិត្ត។", audio: "audio/im_happy.mp3", options: ["I'm sad.", "I feel joyful.", "I'm miserable.", "I'm depressed."], Answer: "I feel joyful." },
            { word: "I'm sad.", meaning: "Used to express a feeling of sorrow.", khmer: "ខ្ញុំបាក់ទឹកចិត្ត។", audio: "audio/im_sad.mp3", options: ["I'm happy.", "I feel sorrowful.", "I'm joyful.", "I'm elated."], Answer: "I feel sorrowful." },
            { word: "I'm angry.", meaning: "Used to express a feeling of strong displeasure.", khmer: "ខ្ញុំខឹង។", audio: "audio/im_angry.mp3", options: ["I'm calm.", "I feel furious.", "I'm pleased.", "I'm happy."], Answer: "I feel furious." },
            { word: "I'm excited.", meaning: "Used to express a feeling of great enthusiasm and eagerness.", khmer: "ខ្ញុំរំភើប។", audio: "audio/im_excited.mp3", options: ["I'm bored.", "I feel thrilled.", "I'm calm.", "I'm indifferent."], Answer: "I feel thrilled." },
            { word: "I'm bored.", meaning: "Used to express a feeling of weariness and dissatisfaction.", khmer: "ខ្ញុំធុញទ្រាន់។", audio: "audio/im_bored.mp3", options: ["I'm excited.", "I feel uninterested.", "I'm entertained.", "I'm thrilled."], Answer: "I feel uninterested." },
            { word: "I'm nervous.", meaning: "Used to express a feeling of anxiety or apprehension.", khmer: "ខ្ញុំភ័យ។", audio: "audio/im_nervous.mp3", options: ["I'm calm.", "I feel anxious.", "I'm confident.", "I'm relaxed."], Answer: "I feel anxious." },
            { word: "I'm confident.", meaning: "Used to express a feeling of self-assurance.", khmer: "ខ្ញុំមានទំនុកចិត្ត។", audio: "audio/im_confident.mp3", options: ["I'm insecure.", "I feel self-assured.", "I'm doubtful.", "I'm uncertain."], Answer: "I feel self-assured." },
            { word: "I'm confused.", meaning: "Used to express a feeling of bewilderment or lack of clarity.", khmer: "ខ្ញុំច្របូកច្របល់។", audio: "audio/im_confused.mpmer", options: ["I'm clear.", "I feel perplexed.", "I understand.", "I'm certain."], Answer: "I feel perplexed." },
            { word: "I'm surprised.", meaning: "Used to express a feeling of astonishment or unexpectedness.", khmer: "ខ្ញុំភ្ញាក់ផ្អើល។", audio: "audio/im_surprised.mp3", options: ["I expected it.", "I feel astonished.", "I'm calm.", "I'm indifferent."], Answer: "I feel astonished." },
            { word: "I'm disappointed.", meaning: "Used to express a feeling of sadness or displeasure caused by the non-fulfillment of one's hopes or expectations.", khmer: "ខ្ញុំខកចិត្ត។", audio: "audio/im_disappointed.mp3", options: ["I'm pleased.", "I feel let down.", "I'm happy.", "I'm satisfied."], Answer: "I feel let down." },
            { word: "I'm frustrated.", meaning: "Used to express a feeling of being annoyed or upset because of inability to change or achieve something.", khmer: "ខ្ញុំតូចចិត្ត។", audio: "audio/im_frustrated.mp3", options: ["I'm calm.", "I feel exasperated.", "I'm pleased.", "I'm satisfied."], Answer: "I feel exasperated." },
            { word: "I'm grateful.", meaning: "Used to express a feeling of being thankful.", khmer: "ខ្ញុំដឹងគុណ។", audio: "audio/im_grateful.mp3", options: ["I'm ungrateful.", "I feel thankful.", "I'm displeased.", "I'm resentful."], Answer: "I feel thankful." }
        ],
        grammar: {
            // Grammar rules and examples
            "Too...to...": [
                { sentence: "The box is too heavy to lift alone.", khmer: "ប្រអប់នេះធ្ងន់ពេកមិនអាចលើកតែម្នាក់ឯងបានទេ។ <br> The box is too ... to .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.", Answer: "The box is too heavy to lift alone." },
                { sentence: "He spoke too quickly to be understood.", khmer: "គាត់និយាយលឿនពេកមិនអាចយល់បានទេ។ <br> He spoke too ... to be .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.", Answer: "He spoke too quickly to be understood." },
                { sentence: "It's too cold to go outside.", khmer: "វាត្រជាក់ពេកមិនអាចចេញទៅក្រៅបានទេ។ <br> It's too ... to .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.", Answer: "It's too cold to go outside." },
                { sentence: "She is too young to drive a car.", khmer: "នាងនៅក្មេងពេកមិនអាចបើកឡានបានទេ។ <br> She is too ... to .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.", Answer: "She is too young to drive a car." },
                { sentence: "The coffee is too hot to drink.", khmer: "កាហ្វេក្តៅពេកមិនអាចផឹកបានទេ។ <br> The coffee is too ... to .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.", Answer: "The coffee is too hot to drink." }
            ],
            "Enough...to...": [
                { sentence: "He is tall enough to reach the top shelf.", khmer: "គាត់ខ្ពស់គ្រប់គ្រាន់ដើម្បីទៅដល់ធ្នើខាងលើ។ <br> He is ... enough to .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + adjective/adverb + enough + to + base verb.", Answer: "He is tall enough to reach the top shelf." },
                { sentence: "She has enough money to buy a new car.", khmer: "នាងមានលុយគ្រប់គ្រាន់ដើម្បីទិញឡានថ្មី។ <br> She has enough ... to .... <br>រចនាសម្ព័ន្ធ៖ Subject + have + enough + noun + to + base verb.", Answer: "She has enough money to buy a new car." },
                { sentence: "Are you old enough to vote?", khmer: "តើអ្នកគ្រប់អាយុបោះឆ្នោតហើយឬនៅ? <br> Are you ... enough to .... <br>រចនាសម្ព័ន្ធ៖ Be + subject + adjective/adverb + enough + to + base verb?", Answer: "Are you old enough to vote?" },
                { sentence: "The room is big enough for all of us.", khmer: "បន្ទប់ធំល្មមសម្រាប់ពួកយើងទាំងអស់គ្នា។ <br> The room is ... enough for .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + adjective/adverb + enough + for + object.", Answer: "The room is big enough for all of us." },
                { sentence: "He runs fast enough to win the race.", khmer: "គាត់រត់លឿនល្មមដើម្បីឈ្នះការប្រណាំង។ <br> He runs ... enough to .... <br>រចនាសម្ព័ន្ធ៖ Subject + verb + adverb + enough + to + base verb.", Answer: "He runs fast enough to win the fast enough to win the race." }
            ],
            "So...that...": [
                { sentence: "She is so beautiful that everyone admires her.", khmer: "នាងស្អាតខ្លាំងណាស់ដែលអ្នកណាក៏សរសើរនាងដែរ។ <br> She is so ... that .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + that + result clause.", Answer: "She is so beautiful that everyone admires her." },
                { sentence: "He ran so fast that he broke the record.", khmer: "គាត់រត់លឿនខ្លាំងណាស់ដែលគាត់បំបែកកំណត់ត្រា។ <br> He ran so ... that .... <br>រចនាសម្ព័ន្ធ៖ Subject + verb + so + adverb + that + result clause.", Answer: "He runs so fast that he broke the record." },
                { sentence: "The food was so delicious that I ate it all.", khmer: "អាហារឆ្ងាញ់ខ្លាំងណាស់ដែលខ្ញុំញ៉ាំអស់។ <br> The food was so ... that .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective + that + result clause.", Answer: "The food was so delicious that I ate it all." },
                { sentence: "It was so dark that I couldn't see anything.", khmer: "វាងងឹតខ្លាំងណាស់ដែលខ្ញុំមើលមិនឃើញអ្វីសោះ។ <br> It was so ... that .... <br>រចនាសម្ព័ន្ធ៖ It + be + so + adjective + that + result clause.", Answer: "It was so dark that I couldn't see anything." },
                { sentence: "They spoke so quietly that I could barely hear them.", khmer: "ពួកគេនិយាយស្ងាត់ពេកដែលខ្ញុំស្ទើរតែមិនឮពួកគេ។ <br> They spoke so ... that .... <br>រចនាសម្ព័ន្ធ៖ Subject + verb + so + adverb + that + result clause.", Answer: "They spoke so quietly that I could barely hear them." }
            ],
            "Such...that...": [
                { sentence: "She has such a strong will that nothing can stop her.", khmer: "នាងមានឆន្ទៈដ៏រឹងមាំដែលគ្មានអ្វីអាចបញ្ឈប់នាងបានឡើយ។ <br> Such + (adjective) + noun + that + result <br> Or <br> Such + a/an + adjective + singular countable noun + that + result", Answer: "She has such a strong will that nothing can stop her." },
                { sentence: "It was such a beautiful day that we decided to go for a picnic.", khmer: "វាជាថ្ងៃដ៏ស្រស់ស្អាតដែលពួកយើងសម្រេចចិត្តទៅដើរលេង។ <br> It was such a ... that .... <br>រចនាសម្ព័ន្ធ៖ It + be + such + a/an + adjective + singular countable noun + that + result clause.", Answer: "It was such a beautiful day that we decided to go for a picnic." },
                { sentence: "They are such kind people that everyone loves them.", khmer: "ពួកគេជាមនុស្សចិត្តល្អដែលអ្នកណាក៏ស្រលាញ់ពួកគេដែរ។ <br> They are such ... that .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + such + (adjective) + plural countable noun/uncountable noun + that + result clause.", Answer: "They are such kind people that everyone loves them." },
                { sentence: "He made such rapid progress that his teacher was amazed.", khmer: "គាត់បានរីកចម្រើនយ៉ាងឆាប់រហ័សដែលគ្រូរបស់គាត់ភ្ញាក់ផ្អើល។ <br> He made such ... that .... <br>រចនាសម្ព័ន្ធ៖ Subject + make + such + (adjective) + noun + that + result clause.", Answer: "He made such rapid progress that his teacher was amazed." },
                { sentence: "It was such delicious food that I asked for the recipe.", khmer: "វាជាអាហារឆ្ងាញ់ខ្លាំងណាស់ដែលខ្ញុំសុំរូបមន្ត។ <br> It was such ... that .... <br>រចនាសម្ព័ន្ធ៖ It + be + such + (adjective) + uncountable noun + that + result clause.", Answer: "It was such delicious food that I asked for the recipe." }
            ],
            "Only if...": [
                { sentence: "Only if it stops raining, we will go outside.", khmer: "លុះត្រាតែឈប់ភ្លៀង ទើបពួកយើងចេញទៅខាងក្រៅ។ <br> Structure: Only if + subject + verb, result clause <br> Or <br> Only if + condition + auxiliary + subject + verb", Answer: "Only if it stops raining, we will go outside." },
                { sentence: "Only if you study hard, will you pass the test.", khmer: "លុះត្រាតែអ្នកខិតខំរៀន ទើបអ្នកប្រឡងជាប់។ <br> Only if + subject + verb, auxiliary + subject + verb.", Answer: "Only if you study hard, will you pass the test." },
                { sentence: "Only if you have a ticket, can you enter the concert.", khmer: "លុះត្រាតែអ្នកមានសំបុត្រ ទើបអ្នកអាចចូលប្រគុំតន្ត្រីបាន។ <br> Only if + subject + verb, auxiliary + subject + verb.", Answer: "Only if you have a ticket, can you enter the concert." },
                { sentence: "Only if I get a raise, will I buy a new car.", khmer: "លុះត្រាតែខ្ញុំបានឡើងប្រាក់ខែ ទើបខ្ញុំទិញឡានថ្មី។ <br> Only if + subject + verb, auxiliary + subject + verb.", Answer: "Only if I get a raise, will I buy a new car." },
                { sentence: "Only if she apologizes, will I forgive her.", khmer: "លុះត្រាតែនាងសុំទោស ទើបខ្ញុំអត់ទោសឱ្យនាង។ <br> Only if + subject + verb, auxiliary + subject + verb.", Answer: "Only if she apologizes, will I forgive her." }
            ],
            "Passive Voice (Present Simple)": [
                { sentence: "Active: She writes a letter.", khmer: "Active: <br>នាងសរសេរសំបុត្រ។ <br> She ..... a letter.", Answer: "She writes a letter." },
                { sentence: "Passive: A letter is written by her.", khmer: "Passive: <br>សំបុត្រត្រូវបានសរសេរដោយនាង។ <br> A letter is .... by her.", Answer: "A letter is written by her." },
                { sentence: "Active: They build houses.", khmer: "Active: <br>ពួកគេសង់ផ្ទះ។ <br> They ..... houses.", Answer: "They build houses." },
                { sentence: "Passive: Houses are built by them.", khmer: "Passive: <br>ផ្ទះត្រូវបានសង់ដោយពួកគេ។ <br> Houses are .... by them.", Answer: "Houses are built by them." }
            ],
            "Passive Voice (Past Simple)": [
                { sentence: "Active: He ate an apple.", khmer: "Active: <br>គាត់បានញ៉ាំផ្លែប៉ោមមួយ។ <br> He ..... an apple.", Answer: "He ate an apple." },
                { sentence: "Passive: An apple was eaten by him.", khmer: "Passive: <br>ផ្លែប៉ោមត្រូវបានគេញ៉ាំដោយគាត់។ <br> An apple was .... by him.", Answer: "An apple was eaten by him." },
                { sentence: "Active: She bought books.", khmer: "Active: <br>នាងបានទិញសៀវភៅ។ <br> She ..... books.", Answer: "She bought books." },
                { sentence: "Passive: Books were bought by her.", khmer: "Passive: <br>សៀវភៅត្រូវបានទិញដោយនាង។ <br> Books were .... by her.", Answer: "Books were bought by her." }
            ],
        },
        shadowing: {
            "Daily Routine": [
                { text: "Every morning, I wake up at 6 AM.", audio: "audio/shadowing/every_morning_i_wake_up_at_6_am.mp3" },
                { text: "Then, I brush my teeth and wash my face.", audio: "audio/shadowing/then_i_brush_my_teeth_and_wash_my_face.mp3" },
                { text: "After that, I make breakfast and drink coffee.", audio: "audio/shadowing/after_that_i_make_breakfast_and_drink_coffee.mp3" },
                { text: "I usually leave for work around 7:30 AM.", audio: "audio/shadowing/i_usually_leave_for_work_around_7_30_am.mp3" },
                { text: "In the evening, I cook dinner and relax.", audio: "audio/shadowing/in_the_evening_i_cook_dinner_and_relax.mp3" },
                { text: "Before bed, I read a book.", audio: "audio/shadowing/before_bed_i_read_a_book.mp3" }
            ],
            "Ordering Food": [
                { text: "Hello, I'd like to order a pizza.", audio: "audio/shadowing/hello_id_like_to_order_a_pizza.mp3" },
                { text: "What kind of toppings do you have?", audio: "audio/shadowing/what_kind_of_toppings_do_you_have.mp3" },
                { text: "I'll have pepperoni and mushrooms.", audio: "audio/shadowing/ill_have_pepperoni_and_mushrooms.mp3" },
                { text: "And a large soda, please.", audio: "audio/and_a_large_soda_please.mp3" },
                { text: "How much is that?", audio: "audio/how_much_is_that.mp3" },
                { text: "Thank you, goodbye.", audio: "audio/thank_you_goodbye.mp3" }
            ]
        },
        conversation: {
            "Routines": [
                { speaker: "A", text: "Hi! What time do you usually wake up in the morning?", khmer: "សួស្ដី! តើអ្នកជាធម្មតាភ្ញាក់ពីគេងនៅម៉ោងប៉ុន្មាន?" },
                { speaker: "B", text: "I usually wake up at 6 o’clock.", khmer: "ខ្ញុំជាធម្មតាភ្ញាក់ពីគេងនៅម៉ោង ៦" },
                { speaker: "A", text: "What do you do after you wake up?", khmer: "តើអ្នកធ្វើអ្វីបន្ទាប់ពីអ្នកភ្ញាក់ពីគេង?" },
                { speaker: "B", text: "First, I go to the bathroom. I wash my hands and face, brush my teeth, and take a shower.", khmer: "ដំបូង ខ្ញុំទៅបន្ទប់ទឹក។ ខ្ញុំលាងដៃនិងមុខ ដុសធ្មេញ និងងូតទឹក។" },
                { speaker: "A", text: "What do you eat for breakfast?", khmer: "តើអ្នកញ៉ាំអ្វីសម្រាប់អាហារពេលព្រឹក?" },
                { speaker: "B", text: "I eat a fried egg with pickles and rice.", khmer: "ខ្ញុំញ៉ាំស៊ុតចៀនជាមួយត្រសក់ជ្រក់ និងបាយ។" },
                { speaker: "A", text: "What time do you come home in the afternoon?", khmer: "តើអ្នកត្រឡប់មកផ្ទះវិញម៉ោងប៉ុន្មាននៅពេលរសៀល?" },
                { speaker: "B", text: "I usually come back at 2:30 p.m.", khmer: "ខ្ញុំជាធម្មតាត្រឡប់មកវិញនៅម៉ោង ២:៣០ រសៀល។" },
                { speaker: "A", text: "Do you make lunch yourself?", khmer: "តើអ្នកធ្វើអាហារថ្ងៃត្រង់ដោយខ្លួនឯងទេ?" },
                { speaker: "B", text: "Yes, I prepare lunch by myself and eat at 3:00 p.m.", khmer: "បាទ/ចាស ខ្ញុំរៀបចំអាហារថ្ងៃត្រង់ដោយខ្លួនឯង ហើយញ៉ាំនៅម៉ោង ៣:០០ រសៀល។" },
                { speaker: "A", text: "What do you do if you have free time?", khmer: "តើអ្នកធ្វើអ្វីប្រសិនបើអ្នកមានពេលទំនេរ?" },
                { speaker: "B", text: "I watch a movie or play with my friends.", khmer: "ខ្ញុំមើលកុន ឬលេងជាមួយមិត្តភក្តិរបស់ខ្ញុំ។" },
                { speaker: "A", text: "What’s your evening routine like?", khmer: "តើទម្លាប់ពេលល្ងាចរបស់អ្នកយ៉ាងដូចម្តេច?" },
                { speaker: "B", text: "In the evening, I take a shower around 5 o’clock. Then, I eat dinner and watch a movie while eating.", khmer: "នៅពេលល្ងាច ខ្ញុំងូតទឹកប្រហែលម៉ោង ៥។ បន្ទាប់មក ខ្ញុំញ៉ាំអាហារពេលល្ងាច និងមើលកុនពេលកំពុងញ៉ាំ។" },
                { speaker: "A", text: "What do you do after dinner?", khmer: "តើអ្នកធ្វើអ្វីបន្ទាប់ពីអាហារពេលល្ងាច?" },
                { speaker: "B", text: "I review my homework or read a book, then I relax by listening to music or watching YouTube.", khmer: "ខ្ញុំមើលកិច្ចការផ្ទះ ឬអានសៀវភៅឡើងវិញ បន្ទាប់មកខ្ញុំសម្រាកដោយស្តាប់តន្ត្រី ឬមើល YouTube។" },
                { speaker: "A", text: "What do you do before bed?", khmer: "តើអ្នកធ្វើអ្វីមុនពេលចូលគេង?" },
                { speaker: "B", text: "I brush my teeth and prepare my clothes for the next day.", khmer: "ខ្ញុំដុសធ្មេញ និងរៀបចំសម្លៀកបំពាក់សម្រាប់




                    // --- Utility Functions ---

    /**
     * Shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
     * @param {Array} array The array to shuffle.
     * @returns {Array} The shuffled array (same reference).
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }

    /**
     * Plays an audio file.
     * @param {string} audioPath The path to the audio file.
     */
    function playAudio(audioPath) {
        if (!audioPath) {
            console.error("Audio path is undefined or empty.");
            return;
        }
        const audio = new Audio(audioPath);
        audio.play().catch(e => console.error("Error playing audio:", e));
    }

    /**
     * Speaks a given text using Web Speech API.
     * @param {string} text The text to speak.
     * @param {string} lang The language code (e.g., 'en-US', 'km-KH').
     */
    function speakText(text, lang = 'en-US') {
        if (!gameState.synth) {
            console.warn("Speech Synthesis not supported in this browser.");
            return;
        }
        // Cancel any ongoing speech
        gameState.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 1; // Speed of speech
        utterance.pitch = 1; // Pitch of speech

        // Optional: Find a specific voice if needed
        // let voices = gameState.synth.getVoices();
        // utterance.voice = voices.find(voice => voice.lang === lang && voice.name.includes('Google US English'));

        gameState.synth.speak(utterance);
    }

    /**
     * Initializes Web Speech Recognition.
     * @returns {SpeechRecognition|null} The SpeechRecognition object or null if not supported.
     */
    function initSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn("Speech Recognition not supported in this browser.");
            return null;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false; // Stop after first result
        recognition.interimResults = false; // Only return final results
        recognition.lang = 'en-US'; // Set language for recognition

        recognition.onstart = () => {
            gameState.recognitionActive = true;
            console.log('Speech recognition started.');
            // Update UI to show recording status, e.g., change button text/icon
            const recordBtn = document.getElementById('recordBtn');
            if (recordBtn) {
                recordBtn.innerHTML = '<i class="fas fa-microphone-slash mr-2"></i> Stop Recording';
                recordBtn.classList.add('btn-danger');
                recordBtn.classList.remove('btn-success');
            }
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log('Recognized:', transcript);
            const inputField = document.getElementById('shadowingInput') || document.getElementById('listenTypeInput');
            if (inputField) {
                inputField.value = transcript;
            }
            // Automatically submit or process the result
            if (gameState.mode === 'shadowing') {
                checkShadowingAnswer(transcript);
            } else if (gameState.mode === 'listen-type') {
                // For listen-type, automatically submit the recognized text
                handleListenAndTypeAnswer(null, transcript); // Pass transcript directly
            }
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            const feedbackElement = document.getElementById('feedback');
            if (feedbackElement) {
                feedbackElement.innerHTML = `<p class="error-message">Speech recognition error: ${event.error}. Please try again.</p>`;
                feedbackElement.classList.add('show');
                setTimeout(() => feedbackElement.classList.remove('show'), 3000);
            }
            gameState.recognitionActive = false;
            const recordBtn = document.getElementById('recordBtn');
            if (recordBtn) {
                recordBtn.innerHTML = '<i class="fas fa-microphone mr-2"></i> Start Recording';
                recordBtn.classList.remove('btn-danger');
                recordBtn.classList.add('btn-success');
            }
        };

        recognition.onend = () => {
    gameState.recognitionActive = false;
            console.log('Speech recognition ended.');
            const recordBtn = document.getElementById('recordBtn');
            if (recordBtn) {
                recordBtn.innerHTML = '<i class="fas fa-microphone mr-2"></i> Start Recording';
                recordBtn.classList.remove('btn-danger');
                recordBtn.classList.add('btn-success');
            }
        };

        return recognition;
    }

    /**
     * Toggles speech recognition on/off.
     */
    function toggleSpeechRecognition() {
        if (!gameState.recognition) {
            gameState.recognition = initSpeechRecognition();
            if (!gameState.recognition) return; // If not supported, stop here
        }

        if (gameState.recognitionActive) {
            gameState.recognition.stop();
        } else {
            gameState.recognition.start();
        }
    }

    /**
     * Starts a countdown timer.
     * @param {number} duration The duration of the timer in seconds.
     * @param {function(number): void} onTick Callback function called every second with remaining time.
     * @param {function(): void} onComplete Callback function called when the timer finishes.
     */
    function startTimer(duration, onTick, onComplete) {
        // Clear any existing timer to prevent multiple timers running
        if (gameState.timerInterval) {
            clearInterval(gameState.timerInterval);
        }

        gameState.timeLeft = duration;
        onTick(gameState.timeLeft); // Initial call to display starting time

        gameState.timerInterval = setInterval(() => {
            gameState.timeLeft--;
            onTick(gameState.timeLeft);

            if (gameState.timeLeft <= 0) {
                clearInterval(gameState.timerInterval);
                onComplete();
            }
        }, 1000); // Update every 1 second
    }

    /**
     * Stops the currently running timer.
     */
    function stopTimer() {
        if (gameState.timerInterval) {
            clearInterval(gameState.timerInterval);
            gameState.timerInterval = null;
        }
    }

    // --- Core Game Functions ---

    /**
     * Resets the game state to its initial values.
     * Stops timers, recognition, and clears audio.
     */
    function resetGameState() {
        stopTimer();
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
        gameState.currentListenAndTypeCategory = null; // Reset new state variable
        gameState.synth.cancel(); // Stop any ongoing speech
    }

    /**
     * Navigates back to the home/mode selection screen.
     */
    function goHome() {
        resetGameState();
        elements.modeSelection.classList.remove('hidden'); // Show mode selection
        elements.gameArea.classList.add('hidden'); // Hide game area
        elements.gameArea.innerHTML = ""; // Clear game area content
        elements.mainHeading.textContent = "Master English: Your Interactive Learning Journey";
    }

    /**
     * Selects a game mode and initializes the game area.
     * @param {string} mode The selected game mode (e.g., 'vocab', 'grammar', 'shadowing').
     */
    function selectMode(mode) {
        resetGameState(); // Reset state when a new mode is selected
        gameState.mode = mode;
        elements.modeSelection.classList.add('hidden'); // Hide mode selection
        elements.gameArea.classList.remove('hidden'); // Show game area

        let headingText = '';
        switch (mode) {
            case 'vocab':
                headingText = '📚 Vocabulary Challenge';
                break;
            case 'grammar':
                headingText = '📝 Grammar Guru';
                break;
            case 'shadowing':
                headingText = '🗣️ Shadowing Practice';
                break;
            case 'conversation':
                headingText = '💬 Conversation Activity';
                break;
            case 'listen-type':
                headingText = '👂 Listen & Type Challenge';
                break;
            case 'allListenAndType':
                headingText = '🔗 All Listen And Type Sets';
                break;
            default:
                // Handle Q&A modes dynamically
                if (mode.startsWith('qna-')) {
                    const qnaCategory = mode.replace('qna-', '');
                    headingText = `❓ Q&A: ${qnaCategory.charAt(0).toUpperCase() + qnaCategory.slice(1)}`;
                } else {
                    headingText = 'Interactive Learning Journey';
                }
                break;
        }
        elements.mainHeading.textContent = `Master English: ${headingText}`; // Update H1

        elements.gameArea.innerHTML = `
            <div class="container">
                <h2 class="text-center">Loading ${headingText.replace('❓ ', '')}...</h2>
                <p class="info-text">Prepare for your challenge!</p>
            </div>
        `;

        // Small delay for visual transition before loading game content
        setTimeout(() => {
            if (mode === "vocab") {
                initVocabGame();
            } else if (mode === "grammar") {
                initGrammarGame();
            } else if (mode === "shadowing") {
                initShadowingGame();
            } else if (mode === "conversation") {
                initConversationGame();
            } else if (mode === "listen-type") {
                initListenAndTypeGame();
            } else if (mode === "allListenAndType") {
                initAllListenAndTypeSetsSelection();
            } else if (mode.startsWith("qna-")) {
                initQnAGame(mode);
            }
        }, 500);
        }

                     /**
     * Displays the end screen for a game mode, showing score and feedback.
     */
    function displayGameEndScreen() {
        stopTimer(); // Ensure the timer is stopped

        let message = '';
        let finalScore = gameState.score;
        const totalItems = gameState.currentPool.length;

        if (gameState.mode === 'vocab' || gameState.mode.startsWith('qna-') || gameState.mode === 'listen-type' || gameState.mode === 'allListenAndType') {
            message = `You completed the ${gameState.mode === 'listen-type' ? 'Listen & Type' : gameState.mode === 'allListenAndType' ? 'All Listen & Type' : gameState.mode.replace('qna-', '').toUpperCase()} Challenge!`;
            message += `<p>Your final score is: <span class="score-display">${finalScore} / ${totalItems}</span></p>`;

            if (totalItems > 0) {
                const percentage = (finalScore / totalItems) * 100;
                if (percentage === 100) {
                    message += '<p class="success-message">Excellent! Perfect score!</p>';
                } else if (percentage >= 70) {
                    message += '<p class="info-message">Great job! Keep practicing!</p>';
                } else {
                    message += '<p class="error-message">You can do better! Review and try again!</p>';
                }
            }
        } else if (gameState.mode === 'grammar') {
            message = `You completed the Grammar Challenge!`;
            message += `<p>Your final score is: <span class="score-display">${finalScore} / ${totalItems}</span></p>`;
            if (totalItems > 0) {
                const percentage = (finalScore / totalItems) * 100;
                if (percentage === 100) {
                    message += '<p class="success-message">Excellent! Perfect score!</p>';
                } else if (percentage >= 70) {
                    message += '<p class="info-message">Great job! Keep practicing!</p>';
                } else {
                    message += '<p class="error-message">You can do better! Review and try again!</p>';
                }
            }
        } else if (gameState.mode === 'shadowing') {
            message = `Shadowing Practice Completed!`;
            message += `<p class="info-message">Keep practicing to improve your pronunciation and fluency!</p>`;
        } else if (gameState.mode === 'conversation') {
            message = `Conversation Activity Completed!`;
            message += `<p class="info-message">Great job practicing your conversational English!</p>`;
        }

        let backToCategoryButtonHtml = '';
        if (gameState.mode === 'grammar') {
            backToCategoryButtonHtml = '<button id="backToGrammarRulesBtn" class="btn btn-secondary mt-6 mr-4">Back to Grammar Rules</button>';
        } else if (gameState.mode === 'conversation') {
            backToCategoryButtonHtml = '<button id="backToConversationScenariosBtn" class="btn btn-secondary mt-6 mr-4">Back to Conversation Scenarios</button>';
        } else if (gameState.mode === 'listen-type') {
            backToCategoryButtonHtml = '<button id="backToListenTypeCategoriesBtn" class="btn btn-secondary mt-6 mr-4">Back to Listen & Type Categories</button>';
        }


        elements.gameArea.innerHTML = `
            <div class="container text-center py-8">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Game Over!</h2>
                <div class="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                    ${message}
                    <button id="playAgainBtn" class="btn btn-primary mt-6 mr-4">Play Again</button>
                    ${backToCategoryButtonHtml}
                    <button id="homeBtnEndScreen" class="btn btn-secondary mt-6">Back to Home</button>
                </div>
            </div>
        `;

        document.getElementById('playAgainBtn').addEventListener('click', () => {
            // Re-initialize the current mode
            if (gameState.mode === 'vocab') {
                initVocabGame();
            } else if (gameState.mode === 'grammar') {
                initGrammarRuleGame(gameState.currentRule); // Play again for the *same* rule
            } else if (gameState.mode === 'shadowing') {
                initShadowingCategoryGame(gameState.currentShadowingCategory); // Re-init specific category
            } else if (gameState.mode === 'conversation') {
                initConversationScenarioGame(gameState.currentConversationScenario); // Re-init specific scenario
            } else if (gameState.mode === 'listen-type') {
                initListenAndTypeCategoryGame(gameState.currentListenAndTypeCategory); // Re-init specific category
            } else if (gameState.mode === 'allListenAndType') {
                initAllListenAndTypeSetsSelection(); // Go back to category selection for all listen & type
            } else if (gameState.mode.startsWith('qna-')) {
                initQnAGame(gameState.mode);
            }
        });
        document.getElementById('homeBtnEndScreen').addEventListener('click', goHome);

        // Add event listeners for the new back buttons
        if (gameState.mode === 'grammar') {
            document.getElementById('backToGrammarRulesBtn').addEventListener('click', initGrammarGame);
        } else if (gameState.mode === 'conversation') {
            document.getElementById('backToConversationScenariosBtn').addEventListener('click', initConversationGame);
        } else if (gameState.mode === 'listen-type') {
            document.getElementById('backToListenTypeCategoriesBtn').addEventListener('click', initListenAndTypeGame);
        }
    }

    // --- Vocabulary Game Functions ---

    /**
     * Initializes the Vocabulary game mode.
     */
    function initVocabGame() {
        gameState.currentPool = shuffleArray([...gameData.vocab]); // Create a shuffled copy
        gameState.currentIndex = 0;
        gameState.score = 0;
        displayVocabQuestion();
    }

    /**
     * Displays the current vocabulary question.
     */
    function displayVocabQuestion() {
        stopTimer(); // Ensure timer is reset for each question
        if (gameState.currentIndex >= gameState.currentPool.length) {
            displayGameEndScreen();
            return;
        }

        const currentWord = gameState.currentPool[gameState.currentIndex];
        // Shuffle options to ensure random order each time
        const shuffledOptions = shuffleArray(currentWord.options);

        elements.gameArea.innerHTML = `
            <div class="container vocab-game">
                <div class="score-timer-container">
                    <div class="score">Score: <span id="score" class="text-blue-600">${gameState.score}</span></div>
                    <div class="timer">Time Left: <span id="timeLeft">30s</span></div>
                </div>
                <div class="question-box text-left">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">What is the meaning of: <span class="text-blue-700">${currentWord.word}</span>?</h3>
                    <p class="khmer-meaning">(${currentWord.khmer})</p>
                    <div class="audio-controls mt-3">
                        <button class="btn btn-info btn-lg" id="playVocabPronounceBtn"><i class="fas fa-volume-up mr-2"></i>Pronounce (EN)</button>
                        ${currentWord.audio ? `<button class="btn btn-info btn-lg" id="playVocabAudioBtn"><i class="fas fa-headphones mr-2"></i>Listen Audio</button>` : ''}
                    </div>
                </div>
                <div class="options-grid mt-4">
                    ${shuffledOptions.map((option) => `
                        <button class="option-btn btn btn-outline-primary" data-option="${option}">${option}</button>
                    `).join('')}
                </div>
                <div id="feedback" class="feedback-message mt-4"></div>
            </div>
        `;

        document.getElementById('playVocabPronounceBtn').addEventListener('click', () => speakText(currentWord.word));
        if (currentWord.audio) {
            document.getElementById('playVocabAudioBtn').addEventListener('click', () => playAudio(currentWord.audio));
        }
        elements.gameArea.querySelectorAll('.option-btn').forEach(button => {
            button.addEventListener('click', handleVocabAnswer);
        });

        // Autoplay audio for vocabulary
        playAudio(currentWord.audio);

        startTimer(30, (timeLeft) => { // 30 seconds per vocabulary question
            document.getElementById('timeLeft').textContent = `${timeLeft}s`;
        }, () => {
            const feedbackElement = document.getElementById('feedback');
            feedbackElement.innerHTML = `<p class="error-message">Time's up! The correct answer was: <strong>${currentWord.Answer}</strong></p>`; // Corrected to .Answer
            // Disable all options
            elements.gameArea.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true); // Corrected class
            // Highlight the correct answer
            elements.gameArea.querySelectorAll('.option-btn').forEach(btn => { // Corrected class
                if (btn.dataset.option === currentWord.Answer) { // Corrected to .Answer
                    btn.classList.add('btn-success');
                }
            });
            feedbackElement.classList.add('show'); // Show feedback message
            setTimeout(() => {
                feedbackElement.classList.remove('show');
                gameState.currentIndex++;
                displayVocabQuestion();
            }, 2000);
        });
    }

    /**
     * Handles the user's answer for the Vocabulary game.
     * @param {Event} event The click event from the option button.
     */
    function handleVocabAnswer(event) {
        stopTimer(); // Stop the timer as soon as an answer is submitted
        const selectedOption = event.target.dataset.option;
        const currentWord = gameState.currentPool[gameState.currentIndex];
        const feedbackElement = document.getElementById('feedback');

        // Disable all buttons to prevent multiple clicks
        elements.gameArea.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

        if (selectedOption === currentWord.Answer) {
            gameState.score++;
            event.target.classList.add('btn-success');
            feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉</p>`;
        } else {
            event.target.classList.add('btn-danger');
            feedbackElement.innerHTML = `<p class="error-message">Incorrect. The correct answer was: <strong>${currentWord.Answer}</strong>.</p>`;
            // Highlight the correct answer
            elements.gameArea.querySelectorAll('.option-btn').forEach(btn => {
                if (btn.textContent === currentWord.Answer) {
                    btn.classList.add('btn-success');
                }
            });
        }
        document.getElementById('score').textContent = gameState.score;
        feedbackElement.classList.add('show');

        setTimeout(() => {
            feedbackElement.classList.remove('show');
            gameState.currentIndex++;
            displayVocabQuestion();
        }, 2000); // Wait 2 seconds before moving to next question
    }

    // --- Grammar Game Functions ---

    /**
     * Initializes the Grammar game mode, displaying rule selection.
     */
    function initGrammarGame() {
        elements.gameArea.innerHTML = `
            <div class="container text-center py-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Select a Grammar Rule</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    ${Object.keys(gameData.grammar).map(rule => `
                        <button class="btn btn-outline-primary grammar-rule-btn" data-rule="${rule}">${rule}</button>
                    `).join('')}
                </div>
            </div>
        `;
        elements.gameArea.querySelectorAll('.grammar-rule-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const rule = event.target.dataset.rule;
                gameState.currentRule = rule;
                initGrammarRuleGame(rule);
            });
        });
    }

    /**
     * Initializes the game for a specific grammar rule.
     * @param {string} rule The selected grammar rule.
     */
    function initGrammarRuleGame(rule) {
        gameState.currentPool = shuffleArray([...gameData.grammar[rule]]); // Create a shuffled copy
        gameState.currentIndex = 0;
        gameState.score = 0;
        displayGrammarQuestion();
    }

    /**
     * Displays the current grammar question (sentence completion).
     */
    function displayGrammarQuestion() {
        if (gameState.currentIndex >= gameState.currentPool.length) {
            displayGameEndScreen();
            return;
        }

        const currentSentence = gameState.currentPool[gameState.currentIndex];
        // For grammar, the user types the answer. The question is the sentence itself.
        // The `khmer` field often contains the structure and hint.
        elements.gameArea.innerHTML = `
            <div class="container grammar-game">
                <div class="score-timer-container">
                    <div class="score">Score: <span id="score" class="text-blue-600">${gameState.score}</span></div>
                </div>
                <div class="question-box text-left">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Complete the sentence:</h3>
                    <p class="text-xl font-bold text-blue-700 mb-3">${currentSentence.sentence}</p>
                    <p class="khmer-meaning text-gray-600 italic mb-4">${currentSentence.khmer}</p>
                    <div class="audio-controls mt-3">
                        <button class="btn btn-info btn-lg" id="playGrammarAudioBtn"><i class="fas fa-volume-up mr-2"></i> Listen</button>
                    </div>
                    <input type="text" id="grammarInput" class="form-input w-full p-3 border rounded-md" placeholder="Type your answer here...">
                    <button id="submitGrammarBtn" class="btn btn-primary mt-4">Submit Answer</button>
                </div>
                <div id="feedback" class="feedback-message mt-4"></div>
            </div>
        `;

        document.getElementById('submitGrammarBtn').addEventListener('click', handleGrammarAnswer);
        document.getElementById('grammarInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleGrammarAnswer();
            }
        });
        document.getElementById('grammarInput').focus(); // Focus on input for quick typing
        // Autoplay text for grammar sentences
        speakText(currentSentence.sentence, 'en-US');
                      // Add event listener for the new audio button
        document.getElementById('playGrammarAudioBtn').addEventListener('click', () => speakText(currentSentence.sentence, 'en-US'));
    }

    /**
     * Handles the user's answer for the Grammar game.
     */
    function handleGrammarAnswer() {
        const userInput = document.getElementById('grammarInput').value.trim();
        const currentSentence = gameState.currentPool[gameState.currentIndex];
        const feedbackElement = document.getElementById('feedback');
        const submitButton = document.getElementById('submitGrammarBtn');

        submitButton.disabled = true; // Disable button after submission

        // Simple case-insensitive comparison, remove extra spaces
        const normalizedUserInput = userInput.toLowerCase().replace(/\s+/g, ' ').trim();
        const normalizedCorrectAnswer = currentSentence.Answer.toLowerCase().replace(/\s+/g, ' ').trim();

        if (normalizedUserInput === normalizedCorrectAnswer) {
            gameState.score++;
            feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉</p>`;
        } else {
            feedbackElement.innerHTML = `<p class="error-message">Incorrect. The correct answer was: <strong>${currentSentence.Answer}</strong>.</p>`;
        }
        document.getElementById('score').textContent = gameState.score;
        feedbackElement.classList.add('show');

        setTimeout(() => {
            feedbackElement.classList.remove('show');
            gameState.currentIndex++;
            displayGrammarQuestion();
        }, 3000); // Wait 3 seconds
    }

    // --- Shadowing Game Functions ---

    /**
     * Initializes the Shadowing game mode, displaying category selection.
     */
    function initShadowingGame() {
        elements.gameArea.innerHTML = `
            <div class="container text-center py-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Select a Shadowing Category</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    ${Object.keys(gameData.shadowing).map(category => `
                        <button class="btn btn-outline-primary shadowing-category-btn" data-category="${category}">${category}</button>
                    `).join('')}
                </div>
            </div>
        `;
        elements.gameArea.querySelectorAll('.shadowing-category-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const category = event.target.dataset.category;
                initShadowingCategoryGame(category);
            });
        });
    }

    /**
     * Initializes the game for a specific shadowing category.
     * @param {string} category The selected shadowing category.
     */
    function initShadowingCategoryGame(category) {
        gameState.currentShadowingCategory = category; // Store selected category
        gameState.currentPool = [...gameData.shadowing[category]]; // No need to shuffle if sequential practice
        gameState.currentIndex = 0;
        displayShadowingPhrase();
    }

    /**
     * Displays the current shadowing phrase.
     */
    function displayShadowingPhrase() {
        if (gameState.currentIndex >= gameState.currentPool.length) {
            displayGameEndScreen();
            return;
        }

        const currentPhrase = gameState.currentPool[gameState.currentIndex];

        elements.gameArea.innerHTML = `
            <div class="container shadowing-game text-center py-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Shadow this phrase:</h3>
                <div class="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                    <p id="phraseToShadow" class="text-2xl font-semibold text-blue-700 mb-6">${currentPhrase.text}</p>
                    <div class="audio-controls mb-6">
                        <button class="btn btn-info btn-lg mr-4" id="playShadowAudioBtn"><i class="fas fa-volume-up mr-2"></i> Listen</button>
                        <button class="btn btn-success btn-lg" id="recordBtn"><i class="fas fa-microphone mr-2"></i> Start Recording</button>
                    </div>
                    <textarea id="shadowingInput" class="form-textarea w-full p-3 border rounded-md" rows="3" placeholder="Your recording transcript will appear here..." readonly></textarea>
                    <div id="feedback" class="feedback-message mt-4"></div>
                    <button id="nextShadowBtn" class="btn btn-primary mt-6 hidden">Next Phrase</button>
                </div>
            </div>
        `;

        document.getElementById('playShadowAudioBtn').addEventListener('click', () => playAudio(currentPhrase.audio));
        document.getElementById('recordBtn').addEventListener('click', toggleSpeechRecognition);
        document.getElementById('nextShadowBtn').addEventListener('click', () => {
            gameState.currentIndex++;
            displayShadowingPhrase();
        });

        // Initialize recognition if not already
        if (!gameState.recognition) {
            gameState.recognition = initSpeechRecognition();
        }

        // Autoplay audio for shadowing
        playAudio(currentPhrase.audio);
    }

    /**
     * Checks the recorded/transcribed answer for shadowing.
     * @param {string} transcript The transcribed text from speech recognition.
     */
    function checkShadowingAnswer(transcript) {
        const currentPhrase = gameState.currentPool[gameState.currentIndex];
        const feedbackElement = document.getElementById('feedback');
        const nextButton = document.getElementById('nextShadowBtn');

        // Simple comparison for shadowing. Could be enhanced with more advanced NLP for pronunciation.
        const originalText = currentPhrase.text.toLowerCase().replace(/[.,!?'"]/g, '').trim();
        const recognizedText = transcript.toLowerCase().replace(/[.,!?'"]/g, '').trim();

        if (recognizedText.includes(originalText) || originalText.includes(recognizedText)) {
            feedbackElement.innerHTML = `<p class="success-message">Good attempt! Keep practicing! 🎉</p>`;
        } else {
            feedbackElement.innerHTML = `<p class="error-message">Try again. The phrase was: <strong>"${currentPhrase.text}"</strong></p>`;
        }
        feedbackElement.classList.add('show');
        nextButton.classList.remove('hidden'); // Show next button after attempt
    }

    // --- Conversation Game Functions ---

    /**
     * Initializes the Conversation game mode, displaying scenario selection.
     */
    function initConversationGame() {
        elements.gameArea.innerHTML = `
            <div class="container text-center py-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Select a Conversation Scenario</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    ${Object.keys(gameData.conversation).map(scenario => `
                        <button class="btn btn-outline-primary conversation-scenario-btn" data-scenario="${scenario}">${scenario}</button>
                    `).join('')}
                </div>
            </div>
        `;
        elements.gameArea.querySelectorAll('.conversation-scenario-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const scenario = event.target.dataset.scenario;
                initConversationScenarioGame(scenario);
            });
        });
    }

    /**
     * Initializes the game for a specific conversation scenario.
     * @param {string} scenario The selected conversation scenario.
     */
    function initConversationScenarioGame(scenario) {
        gameState.currentConversationScenario = scenario; // Store selected scenario
        gameState.currentPool = [...gameData.conversation[scenario]];
        gameState.currentIndex = 0;
        displayConversationLine();
    }

    /**
     * Displays the current line of conversation.
     */
    function displayConversationLine() {
        if (gameState.currentIndex >= gameState.currentPool.length) {
            displayGameEndScreen();
            return;
        }

        const currentLine = gameState.currentPool[gameState.currentIndex];

        elements.gameArea.innerHTML = `
            <div class="container conversation-game text-center py-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Conversation Practice:</h3>
                <div class="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto text-left">
                    <p class="text-gray-600 mb-2"><strong>${currentLine.speaker || 'Narrator'}:</strong></p>
                    <p class="text-2xl font-semibold text-blue-700 mb-4">${currentLine.text}</p>
                    <p class="khmer-meaning text-gray-600 italic mb-4">(${currentLine.khmer})</p>
                    <div class="audio-controls mb-6">
                        <button class="btn btn-info btn-lg" id="playConversationAudioBtn"><i class="fas fa-volume-up mr-2"></i> Listen</button>
                    </div>
                    <button id="nextConversationBtn" class="btn btn-primary mt-6">Next Line</button>
                </div>
            </div>
        `;

        // Create an Audio object for the current line's text if an audio path is not provided
        // This leverages Web Speech Synthesis for dynamic conversation playback if no specific audio file exists.
        const utteranceText = currentLine.text;
        const audioPath = currentLine.audio; // Check if an explicit audio path exists in data

        document.getElementById('playConversationAudioBtn').addEventListener('click', () => {
            if (audioPath) {
                playAudio(audioPath);
            } else {
                speakText(utteranceText, 'en-US'); // Use speech synthesis if no audio file
            }
        });

        document.getElementById('nextConversationBtn').addEventListener('click', () => {
            gameState.currentIndex++;
            displayConversationLine();
        });

        // Autoplay audio for conversation
        if (audioPath) {
            playAudio(audioPath);
        } else {
            speakText(utteranceText, 'en-US');
        }
    }

    // --- Listen & Type Game Functions ---

    /**
     * Initializes the Listen & Type game mode.
     */
    function initListenAndTypeGame() {
        elements.gameArea.innerHTML = `
            <div class="container text-center py-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Select a Listen & Type Category</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    ${Object.keys(gameData.listenAndType).map(category => `
                        <button class="btn btn-outline-primary listen-type-category-btn" data-category="${category}">${category}</button>
                    `).join('')}
                </div>
            </div>
        `;
        elements.gameArea.querySelectorAll('.listen-type-category-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const category = event.target.dataset.category;
                gameState.currentListenAndTypeCategory = category; // Store selected category
                initListenAndTypeCategoryGame(category);
            });
        });
    }

    /**
     * Initializes the game for a specific Listen & Type category.
     * @param {string} category The selected Listen & Type category.
     */
    function initListenAndTypeCategoryGame(category) {
        gameState.currentPool = shuffleArray([...gameData.listenAndType[category]]);
        gameState.currentIndex = 0;
        gameState.score = 0;
        displayListenAndTypeQuestion();
    }

    /**
     * Displays the current Listen & Type question.
     */
    function displayListenAndTypeQuestion() {
        stopTimer(); // Ensure any previous timer is stopped

        if (gameState.currentIndex >= gameState.currentPool.length) {
            displayGameEndScreen();
            return;
        }

        const currentItem = gameState.currentPool[gameState.currentIndex];
        const timerDuration = 60; // Time for listening and typing (e.g., 60 seconds)

        elements.gameArea.innerHTML = `
            <div class="container listen-type-game">
                <div class="score-timer-container">
                    <div class="score">Score: <span id="score" class="text-blue-600">${gameState.score}</span></div>
                    <div class="timer">Time Left: <span id="timeLeft">${timerDuration}s</span></div>
                </div>
                <div class="question-box text-left">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Listen carefully and type what you hear:</h3>
                    <p class="khmer-meaning">(${currentItem.khmer})</p>
                    <div class="audio-controls mt-3">
                        <button class="btn btn-info btn-lg mr-2" id="listenBtn"><i class="fas fa-volume-up mr-2"></i> Listen</button>
                        <button class="btn btn-success btn-lg" id="recordBtn"><i class="fas fa-microphone mr-2"></i> Record (Speak)</button>
                    </div>
                    <input type="text" id="listenTypeInput" class="form-input w-full p-3 border rounded-md mt-4" placeholder="Type what you hear...">
                    <button id="submitListenAndTypeBtn" class="btn btn-primary mt-4">Submit Answer</button>
                </div>
                <div id="feedback" class="feedback-message mt-4"></div>
            </div>
        `;

        document.getElementById('listenBtn').addEventListener('click', () => {
            if (currentItem.audio) {
                playAudio(currentItem.audio);
            } else {
                speakText(currentItem.text, 'en-US');
            }
        });
        document.getElementById('recordBtn').addEventListener('click', toggleSpeechRecognition);
        document.getElementById('submitListenAndTypeBtn').addEventListener('click', () => handleListenAndTypeAnswer()); // No event object needed here
        document.getElementById('listenTypeInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleListenAndTypeAnswer();
            }
        });

        // Initialize recognition if not already
        if (!gameState.recognition) {
            gameState.recognition = initSpeechRecognition();
        }

        // Autoplay audio for Listen & Type
        if (currentItem.audio) {
            playAudio(currentItem.audio);
        } else {
            speakText(currentItem.text, 'en-US');
        }

        // Start the timer for this question
        startTimer(timerDuration,
            (timeLeft) => {
                document.getElementById('timeLeft').textContent = `${timeLeft}s`;
            },
            () => {
                // Timer ran out
                const feedbackElement = document.getElementById('feedback');
                feedbackElement.innerHTML = `<p class="error-message">Time's up! The correct answer was: <strong>${currentItem.text}</strong>.</p>`;
                feedbackElement.classList.add('show');
                document.getElementById('listenTypeInput').disabled = true;
                document.getElementById('submitListenAndTypeBtn').disabled = true;
                document.getElementById('recordBtn').disabled = true;
                setTimeout(() => {
                    feedbackElement.classList.remove('show');
                    gameState.currentIndex++;
                    displayListenAndTypeQuestion();
                }, 3000);
            }
        );
        document.getElementById('listenTypeInput').focus();
    }

    /**
     * Handles the user's answer for the Listen & Type game.
     * @param {Event} [event] The click event (optional, for Enter key).
     * @param {string} [transcript] Optional: The transcript from speech recognition.
     */
    function handleListenAndTypeAnswer(event, transcript = null) {
        stopTimer(); // Stop the timer as soon as an answer is submitted

        const userInput = transcript || document.getElementById('listenTypeInput').value.trim();
        const currentItem = gameState.currentPool[gameState.currentIndex];
        const feedbackElement = document.getElementById('feedback');
        const submitButton = document.getElementById('submitListenAndTypeBtn');
        const recordButton = document.getElementById('recordBtn');

        submitButton.disabled = true; // Disable button after submission
        recordButton.disabled = true; // Disable record button too
        document.getElementById('listenTypeInput').disabled = true; // Disable input

        // Normalize both strings for comparison (lowercase, remove punctuation, collapse spaces)
        const normalizeString = (str) => str.toLowerCase().replace(/[.,!?'"‘’“”]/g, '').replace(/\s+/g, ' ').trim();

        const normalizedUserInput = normalizeString(userInput);
        const normalizedCorrectAnswer = normalizeString(currentItem.text); // Corrected: Use currentItem.text

        if (normalizedUserInput === normalizedCorrectAnswer) {
            gameState.score++;
            feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉</p>`;
        } else {
            feedbackElement.innerHTML = `<p class="error-message">Incorrect. The correct answer was: <strong>"${currentItem.text}"</strong>.</p>`; // Corrected: Use currentItem.text
        }
        document.getElementById('score').textContent = gameState.score;
        feedbackElement.classList.add('show');

        setTimeout(() => {
            feedbackElement.classList.remove('show');
            gameState.currentIndex++;
            displayListenAndTypeQuestion();
        }, 3000); // Wait 3 seconds
    }

    /**
     * Initializes the selection screen for "All Listen and Type Sets".
     */
    function initAllListenAndTypeSetsSelection() {
        elements.gameArea.innerHTML = `
            <div class="container text-center py-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Select a Listen & Type Set</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    ${Object.keys(gameData.listenAndType).map(category => `
                        <button class="btn btn-outline-primary all-listen-type-set-btn" data-category="${category}">${category}</button>
                    `).join('')}
                </div>
            </div>
        `;
        elements.gameArea.querySelectorAll('.all-listen-type-set-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const category = event.target.dataset.category;
                gameState.currentListenAndTypeCategory = category;
                initListenAndTypeCategoryGame(category); // Reuse the existing init function
            });
        });
                    }

             // --- Q&A Game Functions ---

    /**
     * Initializes the Q&A game mode for a specific category.
     * @param {string} mode The Q&A mode string (e.g., 'qna-basic', 'qna-advanced').
     */
    function initQnAGame(mode) {
        const category = mode.replace('qna-', '');
        // Add a check to ensure the category exists in gameData.qna
        if (!gameData.qna[category]) {
            console.error(`Q&A category "${category}" not found in gameData.`);
            elements.gameArea.innerHTML = `
                <div class="container text-center py-8">
                    <h2 class="text-3xl font-bold text-red-600 mb-4">Error: Game Data Missing!</h2>
                    <p class="text-gray-700 mb-6">The selected Q&A category could not be loaded. Please try another mode.</p>
                    <button id="homeBtnError" class="btn btn-primary mt-6">Back to Home</button>
                </div>
            `;
            document.getElementById('homeBtnError').addEventListener('click', goHome);
            return; // Stop execution if data is missing
        }

        gameState.currentPool = shuffleArray([...gameData.qna[category]]);
        gameState.currentIndex = 0;
        gameState.score = 0;
        displayQnAGameQuestion();
    }

    /**
     * Displays the current Q&A game question.
     */
    function displayQnAGameQuestion() {
        if (gameState.currentIndex >= gameState.currentPool.length) {
            displayGameEndScreen();
            return;
        }

        const currentQuestion = gameState.currentPool[gameState.currentIndex];
        const shuffledOptions = shuffleArray([...currentQuestion.options]);

        elements.gameArea.innerHTML = `
            <div class="container qna-game">
                <div class="score-timer-container">
                    <div class="score">Score: <span id="score" class="text-blue-600">${gameState.score}</span></div>
                </div>
                <div class="question-box text-left">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Question ${gameState.currentIndex + 1}:</h3>
                    <p class="text-xl font-bold text-blue-700 mb-4">${currentQuestion.question}</p>
                </div>
                <div class="options-grid mt-4">
                    ${shuffledOptions.map(option => `
                        <button class="option-btn btn btn-outline-primary" data-option="${option}">${option}</button>
                    `).join('')}
                </div>
                <div id="feedback" class="feedback-message mt-4"></div>
            </div>
        `;

        elements.gameArea.querySelectorAll('.option-btn').forEach(button => {
            button.addEventListener('click', handleQnAGameAnswer);
        });

        // Autoplay text for Q&A questions
        speakText(currentQuestion.question, 'en-US');
    }

    /**
     * Handles the user's answer for the Q&A game.
     * @param {Event} event The click event from the option button.
     */
    function handleQnAGameAnswer(event) {
        const selectedOption = event.target.dataset.option;
        const currentQuestion = gameState.currentPool[gameState.currentIndex];
        const feedbackElement = document.getElementById('feedback');

        // Disable all buttons to prevent multiple clicks
        elements.gameArea.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

        if (selectedOption === currentQuestion.answer) { // Note: Q&A uses 'answer' key
            gameState.score++;
            event.target.classList.add('btn-success');
            feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉 ${currentQuestion.explanation}</p>`;
        } else {
            event.target.classList.add('btn-danger');
            feedbackElement.innerHTML = `<p class="error-message">Incorrect. The correct answer was: <strong>${currentQuestion.answer}</strong>. ${currentQuestion.explanation}</p>`;
            // Highlight correct answer
            elements.gameArea.querySelectorAll('.option-btn').forEach(btn => {
                if (btn.textContent === currentQuestion.answer) {
                    btn.classList.add('btn-success');
                }
            });
        }
        document.getElementById('score').textContent = gameState.score;

        feedbackElement.classList.add('show');

        setTimeout(() => {
            feedbackElement.classList.remove('show');
            gameState.currentIndex++;
            displayQnAGameQuestion();
        }, 3000); // Wait 3 seconds to show explanation
    }

    // --- Event Listeners ---

    // Initial setup when the DOM is fully loaded.
    document.addEventListener("DOMContentLoaded", () => {
        // Attach event listeners to mode selection buttons
        elements.vocabModeBtn.addEventListener('click', () => selectMode('vocab'));
        elements.grammarModeBtn.addEventListener('click', () => selectMode('grammar'));
        elements.shadowingModeBtn.addEventListener('click', () => selectMode('shadowing'));
        elements.conversationModeBtn.addEventListener('click', () => selectMode('conversation'));
        elements.listenTypeModeBtn.addEventListener('click', () => selectMode('listen-type'));
        elements.allListenAndTypeModeBtn.addEventListener('click', () => selectMode('allListenAndType'));

        // Attach event listeners for Q&A buttons using a loop
        elements.qnaButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const mode = event.target.dataset.mode; // e.g., 'qna-basic'
                selectMode(mode);
            });
        });

        // Attach event listener for the global home button
        elements.homeButton.addEventListener('click', goHome);

        // Start by going to the home screen
        goHome();
    });

})(); // End of IIFE
                    
