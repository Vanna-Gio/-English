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
            { word: "surprising", meaning: "causing surprise; unexpected.", khmer: "គួរឱ្យភ្ញាក់ផ្អើល", audio: "audio/surprising.mp3", options: ["expected", "shocking", "normal", "boring"], Answer: "shocking" },
            { word: "expected", meaning: "regarded as likely to happen or arrive.", khmer: "បានរំពឹងទុក", audio: "audio/expected.mp3", options: ["anticipated", "unforeseen", "unlikely", "random"], Answer: "anticipated" },
            { word: "elegant", meaning: "stylish and graceful in appearance or manner.", khmer: "ប្រណិត", audio: "audio/elegant.mp3", options: ["clumsy", "graceful", "plain", "rough"], Answer: "graceful" },
            { word: "in spite of", meaning: "without being affected by the particular fact mentioned.", khmer: "ទោះបីជា", audio: "audio/in_spite_of.mp3", options: ["because of", "despite", "due to", "in addition to"], Answer: "despite" },
            { word: "despite (preposition)", meaning: "without being affected by; in spite of.", khmer: "ទោះបីជា", audio: "audio/despite.mp3", options: ["because of", "even though", "in spite of", "due to"], Answer: "in spite of" },
            { word: "Although", meaning: "in spite of the fact that; even though.", khmer: "ទោះបីជា", audio: "audio/although.mp3", options: ["because", "however", "even if", "in order that"], Answer: "even if" },
            { word: "a bit more formal", meaning: "slightly more serious or official in style or manner.", khmer: "ផ្លូវការជាងបន្តិច", audio: "audio/a_bit_more_formal.mp3", options: ["very casual", "slightly informal", "more official", "completely relaxed"], Answer: "more official" },
            { word: "followed", meaning: "went or came after (someone or something) so as to catch up with them.", khmer: "បានតាមដាន / បានបន្តបន្ទាប់", audio: "audio/followed.mp3", options: ["preceded", "led", "pursued", "ignored"], Answer: "pursued" },
            { word: "fear", meaning: "an unpleasant emotion caused by the threat of danger, pain, or harm.", khmer: "ការភ័យខ្លាច", audio: "audio/fear.mp3", options: ["bravery", "courage", "terror", "confidence"], Answer: "terror" },
            { word: "being tired (gerund phrase)", meaning: "the state of feeling sleepy or needing rest.", khmer: "ការនឿយហត់ / ក្នុងស្ថានភាពនឿយហត់", audio: "audio/being_tired.mp3", options: ["feeling energetic", "being exhausted", "having strength", "being awake"], Answer: "being exhausted" },
            { word: "he kept working (past tense + continuous action)", meaning: "he continued to work without stopping.", khmer: "គាត់បន្តធ្វើការ", audio: "audio/he_kept_working.mp3", options: ["he stopped working", "he started working", "he paused his work", "he continued to labor"], Answer: "he continued to labor" },
            { word: "It looks as if...", meaning: "used to express appearance or assumption", khmer: "វាមើលទៅដូចជា...", audio: "audio/it_looks_as_if.mp3", options: ["It seems that...", "It's certainly...", "It's impossible that...", "It appears unlikely that..."], Answer: "It seems that..." },
            { word: "assumption", meaning: "a thing that is accepted as true or as certain to happen, without proof.", khmer: "ការសន្មត់", audio: "audio/assumption.mp3", options: ["fact", "proof", "presumption", "certainty"], Answer: "presumption" },
            { word: "appearance", meaning: "the way that someone or something looks.", khmer: "រូបរាង", audio: "audio/appearance.mp3", options: ["disguise", "reality", "looks", "disappearance"], Answer: "looks" },
            { word: "they've had a shock", meaning: "present perfect tense: have had)", khmer: "ពួកគេទើបទទួលរងការភ្ញាក់ផ្អើល", audio: "audio/theyve_had_a_shock.mp3", options: ["They are calm.", "They experienced a sudden disturbing emotion.", "They were expecting it.", "They were happy."], Answer: "They experienced a sudden disturbing emotion." },
            { word: "as if", meaning: "used to describe an appearance or gesture", khmer: "ដូចជា / ដូចបំណង", audio: "audio/as_if.mp3", options: ["in reality", "as though", "actually", "definitely"], Answer: "as though" },
            { word: "gesture", meaning: "a movement of part of the body, especially a hand or the head, to express an idea or meaning.", khmer: "កាយវិការ", audio: "audio/gesture.mp3", options: ["stillness", "motion", "speech", "inaction"], Answer: "motion" },
            { word: "They were shouting", meaning: "They were speaking very loudly or crying out.", khmer: "ពួកគេកំពុងក្ដែងសម្លេង (past continuous tense)", audio: "audio/they_were_shouting.mp3", options: ["They were whispering.", "They were singing.", "They were yelling.", "They were silent."], Answer: "They were yelling." },
            { word: "as though", meaning: "as if.", khmer: "ដូចជា / ដូចជាបាន (similar in meaning to 'as if')", audio: "audio/as_though.mp3", options: ["actually", "in reality", "as if", "certainly"], Answer: "as if" },
            { word: "in panic", meaning: "in a state of sudden uncontrollable fear or anxiety.", khmer: "ក្នុងស្ថានភាពភ័យខ្លាច", audio: "audio/in_panic.mp3", options: ["calmly", "fearfully", "confidently", "peacefully"], Answer: "fearfully" },
            { word: "interchangeably", meaning: "in a way that can be exchanged without making any difference.", khmer: "អាចផ្លាស់ប្តូរគ្នាបាន", audio: "audio/interchangeably.mp3", options: ["separately", "alternatively", "fixedly", "uniquely"], Answer: "alternatively" },
            { word: "reactions", meaning: "responses to something.", khmer: "ប្រតិកម្ម", audio: "audio/reactions.mp3", options: ["actions", "responses", "initiatives", "causes"], Answer: "responses" },
            { word: "imagined", meaning: "formed a mental image or concept of.", khmer: "បានស្រមៃ", audio: "audio/imagined.mp3", options: ["realized", "conceived", "disregarded", "confirmed"], Answer: "conceived" },
            { word: "situation", meaning: "a set of circumstances in which one finds oneself; a state of affairs.", khmer: "ស្ថានភាព", audio: "audio/situation.mp3", options: ["solution", "condition", "event", "plan"], Answer: "condition" },
            { word: "furious", meaning: "very angry", khmer: "ខឹងខ្លាំងណាស់", audio: "audio/furious.mp3", options: ["calm", "enraged", "happy", "sad"], Answer: "enraged" },
            { word: "gorgeous", meaning: "very beautiful", khmer: "ស្រស់ស្អាតខ្លាំងណាស់", audio: "audio/gorgeous.mp3", options: ["ugly", "stunning", "plain", "unattractive"], Answer: "stunning" },
            { word: "hideous", meaning: "very ugly", khmer: "អាក្រក់ខ្លាំងណាស់", audio: "audio/hideous.mp3", options: ["beautiful", "dreadful", "attractive", "pleasing"], Answer: "dreadful" },
            { word: "exhausted", meaning: "very tired", khmer: "នឿយហត់ខ្លាំងណាស់", audio: "audio/exhausted.mp3", options: ["energetic", "fatigued", "rested", "lively"], Answer: "fatigued" },
            { word: "spotless", meaning: "very clean", khmer: "ស្អាតណាស់", audio: "audio/spotless.mp3", options: ["dirty", "immaculate", "stained", "grimy"], Answer: "immaculate" },
            { word: "filthy", meaning: "very dirty", khmer: "កខ្វក់ខ្លាំងណាស់", audio: "audio/filthy.mp3", options: ["clean", "squalid", "pure", "hygienic"], Answer: "squalid" },
            { word: "enormous", meaning: "very big", khmer: "ធំសម្បើម", audio: "audio/enormous.mp3", options: ["tiny", "immense", "small", "minute"], Answer: "immense" },
            { word: "deafening", meaning: "very noisy", khmer: "ថ្លង់ណាស់", audio: "audio/deafening.mp3", options: ["quiet", "ear-splitting", "silent", "soft"], Answer: "ear-splitting" },
            { word: "starving", meaning: "very hungry", khmer: "ឃ្លានខ្លាំងណាស់", audio: "audio/starving.mp3", options: ["full", "famished", "satiated", "fed"], Answer: "famished" },
            { word: "parched", meaning: "very thirsty", khmer: "ស្រេកទឹកខ្លាំងណាស់", audio: "audio/parched.mp3", options: ["hydrated", "desiccated", "moist", "wet"], Answer: "desiccated" },
            { word: "destitute", meaning: "very poor", khmer: "ក្រីក្រខ្លាំងណាស់", audio: "audio/destitute.mp3", options: ["wealthy", "impoverished", "rich", "affluent"], Answer: "impoverished" },
            { word: "wealthy", meaning: "very rich", khmer: "អ្នកមាន", audio: "audio/wealthy.mp3", options: ["poor", "affluent", "destitute", "needy"], Answer: "affluent" },
            { word: "brilliant", meaning: "very smart", khmer: "ឆ្លាតវៃ", audio: "audio/brilliant.mp3", options: ["dull", "intelligent", "stupid", "unintelligent"], Answer: "intelligent" },
            { word: "ancient", meaning: "very old", khmer: "បុរាណ", audio: "audio/ancient.mp3", options: ["new", "old", "modern", "current"], Answer: "old" },
            { word: "infantile", meaning: "very young", khmer: "ក្មេងណាស់", audio: "audio/infantile.mp3", options: ["adult", "childish", "mature", "aged"], Answer: "childish" },
            { word: "indolent", meaning: "very lazy", khmer: "ខ្ជិលណាស់", audio: "audio/indolent.mp3", options: ["active", "slothful", "energetic", "diligent"], Answer: "slothful" },
            { word: "swamped", meaning: "very busy", khmer: "រវល់ខ្លាំងណាស់", audio: "audio/swamped.mp3", options: ["idle", "overwhelmed", "free", "unoccupied"], Answer: "overwhelmed" },
            { word: "elated", meaning: "very happy", khmer: "រីករាយខ្លាំងណាស់", audio: "audio/elated.mp3", options: ["sad", "joyful", "depressed", "miserable"], Answer: "joyful" },
            { word: "excruciating", meaning: "very painful", khmer: "ឈឺចាប់ខ្លាំងណាស់", audio: "audio/excruciating.mp3", options: ["mild", "agonizing", "bearable", "painless"], Answer: "agonizing" },
            { word: "I have no idea", meaning: "A phrase used to express that you don’t know the answer to something.", khmer: "ខ្ញុំគ្មានគំនិតទេ / ខ្ញុំមិនដឹងទេ", audio: "audio/i_have_no_idea.mp3", options: ["I know the answer.", "I'm certain.", "I don't know.", "I have a clear idea."], Answer: "I don't know." },
            { word: "Let’s keep in touch", meaning: "A phrase used to express a desire to maintain contact with someone.", khmer: "តោះបន្តទាក់ទងគ្នា", audio: "audio/lets_keep_in_touch.mp3", options: ["Let's lose contact.", "Let's stay connected.", "Let's never speak again.", "Let's forget each other."], Answer: "Let's stay connected." },
            { word: "Can you give me a hand?", meaning: "A way to ask someone for help.", khmer: "អ្នកអាចជួយខ្ញុំបានទេ?", audio: "audio/can_you_give_me_a_hand.mpter", options: ["Can you ignore me?", "Can you assist me?", "Can you leave me alone?", "Can you complicate things?"], Answer: "Can you assist me?" },
            { word: "I’ll think about it.", meaning: "A phrase used to indicate that you need time to consider an option or decision.", khmer: "ខ្ញុំនឹងគិតអំពីវា។", audio: "audio/ill_think_about_it.mp3", options: ["I've decided.", "I'll consider it.", "I refuse immediately.", "I agree without thought."], Answer: "I'll consider it." },
            { word: "Sounds like a plan!", meaning: "A phrase used to express agreement or approval of a suggestion or idea.", khmer: "ស្តាប់ទៅដូចជាផែនការល្អ!", audio: "audio/sounds_like_a_plan.mp3", options: ["That's a terrible idea.", "I disagree.", "That sounds good!", "I'm not sure."], Answer: "That sounds good!" },
            { word: "It's not a big deal.", meaning: "A phrase used to indicate that something is not very important or serious.", khmer: "វាមិនមែនជារឿងធំដុំទេ។", audio: "audio/its_not_a_big_deal.mp3", options: ["It's very serious.", "It's insignificant.", "It's a huge problem.", "It's crucial."], Answer: "It's insignificant." },
            { word: "No worries.", meaning: "A casual phrase used to say 'no problem' or 'it's okay'.", khmer: "មិនអីទេ។", audio: "audio/no_worries.mp3", options: ["Plenty of worries.", "Don't worry.", "Be concerned.", "It's a big concern."], Answer: "Don't worry." },
            { word: "Break a leg!", meaning: "An idiom used to wish someone good luck, especially before a performance.", khmer: "សូមសំណាងល្អ!", audio: "audio/break_a_leg.mp3", options: ["Good luck!", "Bad luck!", "Break your leg!", "Fail!"], Answer: "Good luck!" },
            { word: "It’s up to you.", meaning: "A phrase used to indicate that someone can make their own decision.", khmer: "វាអាស្រ័យលើអ្នក។", audio: "audio/its_up_to_you.mp3", options: ["I'll decide for you.", "You must do this.", "It's your choice.", "I forbid it."], Answer: "It's your choice." },
            { word: "I’m on my way.", meaning: "A phrase used to indicate that you have left and are traveling to a destination.", khmer: "ខ្ញុំកំពុងទៅ។", audio: "audio/im_on_my_way.mp3", options: ["I'm staying here.", "I'm arriving.", "I'm leaving now.", "I'm lost."], Answer: "I'm leaving now." },
            { word: "Can’t complain.", meaning: "A casual phrase used to say that things are going well enough.", khmer: "មិនអាចត្អូញត្អែរបានទេ។", audio: "audio/cant_complain.mp3", options: ["Everything is terrible.", "Things are satisfactory.", "I have many complaints.", "I'm very unhappy."], Answer: "Things are satisfactory." },
            { word: "How’s it going?", meaning: "A casual greeting used to ask how someone is or how things are progressing.", khmer: "សុខសប្បាយជាទេ?", audio: "audio/hows_it_going.mp3", options: ["It's going badly.", "What's up?", "I'm not well.", "Everything is perfect."], Answer: "What's up?" },
            { word: "Long time no see.", meaning: "A phrase used when you meet someone you haven't seen for a long time.", khmer: "យូរហើយមិនបានជួប។", audio: "audio/long_time_no_see.mp3", options: ["See you soon.", "It's been a while.", "We just met.", "Goodbye."], Answer: "It's been a while." },
            { word: "What’s up?", meaning: "A very casual greeting, similar to 'hello' or 'how are you?'.", khmer: "មានអី?", audio: "audio/whats_up.mp3", options: ["What's down?", "How are you?", "What happened?", "Nothing."], Answer: "How are you?" },
            { word: "Take care.", meaning: "A phrase used to say goodbye and wish someone well.", khmer: "ប្រយ័ត្ន/ថែរក្សាខ្លួន។", audio: "audio/take_care.mp3", options: ["Be careless.", "Be well.", "Don't bother.", "Ignore it."], Answer: "Be well." },
            { word: "Never mind.", meaning: "A phrase used to say that something is not important or to withdraw a statement.", khmer: "មិនអីទេ។", audio: "audio/never_mind.mp3", options: ["It's very important.", "Forget about it.", "Pay attention.", "Remember this."], Answer: "Forget about it." },
            { word: "That’s interesting!", meaning: "A phrase used to express that you find something engaging or thought-provoking.", khmer: "គួរឱ្យចាប់អារម្មណ៍ណាស់!", audio: "audio/thats_interesting.mp3", options: ["That's boring.", "That's captivating.", "I don't care.", "That's unexciting."], Answer: "That's captivating." },
            { word: "I appreciate it.", meaning: "A phrase used to express gratitude for something someone has done for you.", khmer: "ខ្ញុំពេញចិត្តវា។", audio: "audio/i_appreciate_it.mp3", options: ["I'm ungrateful.", "Thank you.", "I dislike it.", "I don't care."], Answer: "Thank you." },
            { word: "I’m clueless.", meaning: "A phrase used to express that you have no idea or knowledge about something.", khmer: "ខ្ញុំគ្មានគំនិតទេ។", audio: "audio/im_clueless.mp3", options: ["I have the answer.", "I'm clueless.", "I'm certain.", "I know everything."], Answer: "I'm clueless." },
            { word: "How can I help you?", meaning: "A polite phrase used to offer assistance, commonly used in customer service or by someone offering help.", khmer: "តើខ្ញុំអាចជួយអ្នកបានយ៉ាងដូចម្តេច?", audio: "audio/how_can_i_help_you.mp3", options: ["I don't need help.", "What assistance do you require?", "I'm busy.", "Don't bother me."], Answer: "What assistance do you require?" },
            { word: "What time is it?", meaning: "A question used to ask for the current time.", khmer: "ម៉ោងប៉ុន្មានហើយ?", audio: "audio/what_time_is_it.mp3", options: ["I don't know.", "Could you tell me the time?", "It's late.", "It's early."], Answer: "Could you tell me the time?" },
            { word: "What do you mean?", meaning: "A question used to ask for clarification when something is unclear.", khmer: "តើអ្នកចង់មានន័យយ៉ាងណា?", audio: "audio/what_do_you_mean.mp3", options: ["I understand perfectly.", "Could you explain?", "I agree.", "I disagree."], Answer: "Could you explain?" },
            { word: "Can you repeat that?", meaning: "A polite request for someone to say something again.", khmer: "អ្នកអាចនិយាយម្តងទៀតបានទេ?", audio: "audio/can_you_repeat_that.mp3", options: ["I heard you clearly.", "Please say it again.", "Don't repeat.", "I understand."], Answer: "Please say it again." },
            { word: "I'm sorry.", meaning: "An expression of apology or regret.", khmer: "ខ្ញុំសុំទោស។", audio: "audio/im_sorry.mp3", options: ["I'm happy.", "My apologies.", "I don't care.", "It's fine."], Answer: "My apologies." },
            { word: "Excuse me.", meaning: "A polite phrase used to get attention, apologize, or pass by someone.", khmer: "សុំទោស។", audio: "audio/excuse_me.mp3", options: ["Don't bother me.", "Pardon me.", "Move away.", "Stay there."], Answer: "Pardon me." },
            { word: "Thank you.", meaning: "An expression of gratitude.", khmer: "អរគុណ។", audio: "audio/thank_you.mp3", options: ["You're unwelcome.", "Much obliged.", "No thanks.", "I hate it."], Answer: "Much obliged." },
            { word: "You're welcome.", meaning: "A polite response when someone thanks you.", khmer: "មិនអីទេ។", audio: "audio/youre_welcome.mp3", options: ["You're not welcome.", "My pleasure.", "I don't care.", "It was a burden."], Answer: "My pleasure." },
            { word: "No problem.", meaning: "A casual response meaning 'you're welcome' or 'it's okay'.", khmer: "គ្មានបញ្ហាទេ។", audio: "audio/no_problem.mp3", options: ["It's a big problem.", "It's not an issue.", "It's problematic.", "It's difficult."], Answer: "It's not an issue." },
            { word: "Of course.", meaning: "Used to express that something is obvious or to grant permission.", khmer: "ពិតណាស់។", audio: "audio/of_course.mp3", options: ["Certainly not.", "Absolutely.", "Maybe.", "Unlikely."], Answer: "Absolutely." },
            { word: "That's right.", meaning: "Used to confirm something is correct.", khmer: "ត្រូវហើយ។", audio: "audio/thats_right.mp3", options: ["That's wrong.", "Correct.", "Incorrect.", "False."], Answer: "Correct." },
            { word: "I agree.", meaning: "Used to express agreement.", khmer: "ខ្ញុំយល់ព្រម។", audio: "audio/i_agree.mp3", options: ["I disagree.", "I concur.", "I refuse.", "I object."], Answer: "I concur." },
            { word: "I disagree.", meaning: "Used to express disagreement.", khmer: "ខ្ញុំមិនយល់ព្រមទេ។", audio: "audio/i_disagree.mp3", options: ["I agree.", "I object.", "I concur.", "I approve."], Answer: "I object." },
            { word: "I don't understand.", meaning: "Used to express a lack of comprehension.", khmer: "ខ្ញុំមិនយល់ទេ។", audio: "audio/i_dont_understand.mp3", options: ["I understand.", "I'm confused.", "I comprehend.", "I grasp it."], Answer: "I'm confused." },
            { word: "I understand.", meaning: "Used to express comprehension.", khmer: "ខ្ញុំយល់ហើយ។", audio: "audio/i_understand.mp3", options: ["I don't understand.", "I comprehend.", "I'm confused.", "I'm clueless."], Answer: "I comprehend." },
            { word: "I'm hungry.", meaning: "Used to express a need for food.", khmer: "ខ្ញុំឃ្លាន។", audio: "audio/im_hungry.mp3", options: ["I'm full.", "I need food.", "I'm thirsty.", "I'm satisfied."], Answer: "I need food." },
            { word: "I'm thirsty.", meaning: "Used to express a need for drink.", khmer: "ខ្ញុំស្រេកទឹក។", audio: "audio/im_thirsty.mp3", options: ["I'm hydrated.", "I need a drink.", "I'm hungry.", "I'm satisfied."], Answer: "I need a drink." },
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
                { sentence: "He runs fast enough to win the race.", khmer: "គាត់រត់លឿនល្មមដើម្បីឈ្នះការប្រណាំង។ <br> He runs ... enough to .... <br>រចនាសម្ព័ន្ធ៖ Subject + verb + adverb + enough + to + base verb.", Answer: "He runs fast enough to win the race." }
            ],
            "So...that...": [
                { sentence: "She is so beautiful that everyone admires her.", khmer: "នាងស្អាតខ្លាំងណាស់ដែលអ្នកណាក៏សរសើរនាងដែរ។ <br> She is so ... that .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + that + result clause.", Answer: "She is so beautiful that everyone admires her." },
                { sentence: "He ran so fast that he broke the record.", khmer: "គាត់រត់លឿនខ្លាំងណាស់ដែលគាត់បំបែកកំណត់ត្រា។ <br> He ran so ... that .... <br>រចនាសម្ព័ន្ធ៖ Subject + verb + so + adverb + that + result clause.", Answer: "He runs so fast that he broke the record." },
                { sentence: "The food was so delicious that I ate it all.", khmer: "អាហារឆ្ងាញ់ខ្លាំងណាស់ដែលខ្ញុំញ៉ាំអស់។ <br> The food was so ... that .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective + that + result clause.", Answer: "The food was so delicious that I ate it all." },
                { sentence: "It was so dark that I couldn't see anything.", khmer: "វា​ងងឹត​ខ្លាំង​ណាស់​ដែល​ខ្ញុំ​មើល​មិន​ឃើញ​អ្វី​សោះ។ <br> It was so ... that .... <br>រចនាសម្ព័ន្ធ៖ It + be + so + adjective + that + result clause.", Answer: "It was so dark that I couldn't see anything." },
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
            "Passive Voice (Future Simple)": [
                { sentence: "Active: I will clean the room.", khmer: "Active: <br>ខ្ញុំនឹងសម្អាតបន្ទប់។ <br> I will ..... the room.", Answer: "I will clean the room." },
                { sentence: "Passive: The room will be cleaned by me.", khmer: "Passive: <br>បន្ទប់នឹងត្រូវបានសម្អាតដោយខ្ញុំ។ <br> The room will be .... by me.", Answer: "The room will be cleaned by me." },
                { sentence: "Active: They will finish the work.", khmer: "Active: <br>ពួកគេនឹងបញ្ចប់ការងារ។ <br> They will ..... the work.", Answer: "They will finish the work." },
                { sentence: "Passive: The work will be finished by them.", khmer: "Passive: <br>ការងារនឹងត្រូវបានបញ្ចប់ដោយពួកគេ។ <br> The work will be .... by them.", Answer: "The work will be finished by them." }
            ],
            "Passive Voice (Present Perfect)": [
                { sentence: "Active: He has written a book.", khmer: "Active: <br>គាត់បានសរសេរសៀវភៅមួយក្បាល។ <br> He has ..... a book.", Answer: "He has written a book." },
                { sentence: "Passive: A book has been written by him.", khmer: "Passive: <br>សៀវភៅមួយក្បាលត្រូវបានសរសេរដោយគាត់។ <br> A book has been .... by him.", Answer: "A book has been written by him." },
                { sentence: "Active: They have completed the task.", khmer: "Active: <br>ពួកគេបានបញ្ចប់ភារកិច្ច។ <br> They have ..... the task.", Answer: "They have completed the task." },
                { sentence: "Passive: The task has been completed by them.", khmer: "Passive: <br>ភារកិច្ចត្រូវបានបញ្ចប់ដោយពួកគេ។ <br> The task has been .... by them.", Answer: "The task has been completed by them." }
            ],
            "Passive Voice (Past Perfect)": [
                { sentence: "Active: She had cooked dinner.", khmer: "Active: <br>នាងបានចម្អិនអាហារពេលល្ងាច។ <br> She had ..... dinner.", Answer: "She had cooked dinner." },
                { sentence: "Passive: Dinner had been cooked by her.", khmer: "Passive: <br>អាហារពេលល្ងាចត្រូវបានចម្អិនដោយនាង។ <br> Dinner had been .... by her.", Answer: "Dinner had been cooked by her." },
                { sentence: "Active: They had seen the movie.", khmer: "Active: <br>ពួកគេបានមើលកុន។ <br> They had ..... the movie.", Answer: "They had seen the movie." },
                { sentence: "Passive: The movie had been seen by them.", khmer: "Passive: <br>កុនត្រូវបានមើលដោយពួកគេ។ <br> The movie had been .... by them.", Answer: "The movie had been seen by them." }
            ],
            "Passive Voice (Future Perfect)": [
                { sentence: "Active: They will have completed the task.", khmer: "Active: <br>ពួកគេនឹងបានបញ្ចប់ភារកិច្ច។ <br> They will have ..... the task.", Answer: "They will have completed the task." },
                { sentence: "Passive: The task will have been completed by them.", khmer: "Passive: <br>ភារកិច្ចនឹងត្រូវបានបញ្ចប់ដោយពួកគេ។ <br> The task will have been .... by them.", Answer: "The task will be finished by them." }
            ],
            "Conditional Sentences (Type 0)": [
                { sentence: "If you heat water to 100 degrees Celsius, it boils.", khmer: "ប្រសិនបើអ្នកកំដៅទឹកដល់ 100 អង្សាសេ វានឹងពុះ។ <br> If + Present Simple, Present Simple.", Answer: "If you heat water to 100 degrees Celsius, it boils." },
                { sentence: "If it rains, the ground gets wet.", khmer: "ប្រសិនបើវាភ្លៀង ដីនឹងសើម។ <br> If + Present Simple, Present Simple.", Answer: "If it rains, the ground gets wet." }
            ],
            "Conditional Sentences (Type 1)": [
                { sentence: "If it rains, I will stay home.", khmer: "ប្រសិនបើវាភ្លៀង ខ្ញុំនឹងនៅផ្ទះ។ <br> If + Present Simple, Future Simple.", Answer: "If it rains, I will stay home." },
                { sentence: "If I study hard, I will pass the exam.", khmer: "ប្រសិនបើខ្ញុំខិតខំរៀន ខ្ញុំនឹងប្រឡងជាប់។ <br> If + Present Simple, Future Simple.", Answer: "If I study hard, I will pass the exam." }
            ],
            "Conditional Sentences (Type 2)": [
                { sentence: "If I had a million dollars, I would buy a big house.", khmer: "ប្រសិនបើខ្ញុំមានលុយមួយលានដុល្លារ ខ្ញុំនឹងទិញផ្ទះធំមួយ។ <br> If + Past Simple, would + base verb.", Answer: "If I had a million dollars, I would buy a big house." },
                { sentence: "If she were here, she would help us.", khmer: "ប្រសិនបើនាងនៅទីនេះ នាងនឹងជួយពួកយើង។ <br> If + Past Simple, would + base verb.", Answer: "If she were here, she would help us." }
            ],
            "Conditional Sentences (Type 3)": [
                { sentence: "If I had studied harder, I would have passed the exam.", khmer: "ប្រសិនបើខ្ញុំបានរៀនខ្លាំងជាងនេះ ខ្ញុំនឹងប្រឡងជាប់។ <br> If + Past Perfect, would have + past participle.", Answer: "If I had studied harder, I would have passed the exam." },
                { sentence: "If she had known, she would have told you.", khmer: "ប្រសិនបើនាងបានដឹង នាងនឹងបានប្រាប់អ្នក។ <br> If + Past Perfect, would have + past participle.", Answer: "If she had known, she would have told you." }
            ],
            "Omitted Conditional (Type 1 with inversion)": [
                { sentence: "Should you need any help, please let me know.", khmer: "ប្រសិនបើអ្នកត្រូវការជំនួយ សូមប្រាប់ខ្ញុំ។ <br> Should + Subject + base verb, result clause.", Answer: "Should you need any help, please let me know." }
            ],
            "Omitted Conditional (Type 2 with inversion)": [
                { sentence: "Were I rich, I would travel the world.", khmer: "បើខ្ញុំជាអ្នកមាន ខ្ញុំនឹងធ្វើដំណើរជុំវិញពិភពលោក។ <br> Were + Subject + (to + base verb), result clause.", Answer: "Were I rich, I would travel the world." },
                { sentence: "Were the offer to be accepted by me, I would be helped.", khmer: "Were the offer to be accepted by me, I would be helped.", Answer: "Were the offer to be accepted by me, I would be helped." }
            ],
            "Omitted Conditional (Type 3 with inversion)": [
                { sentence: "Had I known, I would have told you.", khmer: "បើខ្ញុំបានដឹង ខ្ញុំនឹងបានប្រាប់អ្នក។ <br> Had I known, I would have told you.", Answer: "Had I known, I would have told you." }
            ],
            "Used to": [
                { sentence: "I used to play football when I was young.", khmer: "ខ្ញុំធ្លាប់លេងបាល់ទាត់កាលពីក្មេង។ <br> Subject + used to + base verb.", Answer: "I used to play football when I was young." },
                { sentence: "She used to live in London.", khmer: "នាងធ្លាប់រស់នៅទីក្រុងឡុងដ៍។ <br> Subject + used to + base verb.", Answer: "She used to live in London." }
            ],
            "Be used to": [
                { sentence: "I am used to waking up early.", khmer: "ខ្ញុំធ្លាប់ភ្ញាក់ពីព្រលឹម។ <br> Subject + be + used to + V-ing/noun.", Answer: "I am used to waking up early." },
                { sentence: "She is used to the cold weather.", khmer: "នាងធ្លាប់នឹងអាកាសធាតុត្រជាក់។ <br> Subject + be + used to + V-ing/noun.", Answer: "She is used to the cold weather." }
            ],
            "Get used to": [
                { sentence: "I'm getting used to the new system.", khmer: "ខ្ញុំកំពុងធ្លាប់នឹងប្រព័ន្ធថ្មី។ <br> Subject + get + used to + V-ing/noun.", Answer: "I'm getting used to the new system." },
            ],
            "Wish (Present)": [
                { sentence: "I wish I were taller.", khmer: "ខ្ញុំប្រាថ្នាថាខ្ញុំខ្ពស់ជាងនេះ។ <br> Subject + wish + Subject + Past Simple (for unreal present).", Answer: "I wish I were taller." },
                { sentence: "She wishes she had more free time.", khmer: "នាងប្រាថ្នាថានាងមានពេលទំនេរច្រើនជាងនេះ។ <br> Subject + wish + Subject + Past Simple (for unreal present).", Answer: "She wishes she had more free time." }
            ],
            "Wish (Past)": [
                { sentence: "I wish I had studied harder for the exam.", khmer: "ខ្ញុំប្រាថ្នាថាខ្ញុំបានរៀនខ្លាំងជាងនេះសម្រាប់ការប្រឡង។ <br> Subject + wish + Subject + Past Perfect (for regret about past).", Answer: "I wish I had studied harder for the exam." },
                { sentence: "He wishes he hadn't said that.", khmer: "គាត់ប្រាថ្នាថាគាត់មិនបាននិយាយដូច្នោះទេ។ <br> Subject + wish + Subject + Past Perfect (for regret about past).", Answer: "He wishes he hadn't said that." }
            ],
            "Wish (Future)": [
                { sentence: "I wish you would stop making so much noise.", khmer: "ខ្ញុំប្រាថ្នាថាអ្នកនឹងឈប់ធ្វើសំឡេងរំខានខ្លាំងពេក។ <br> Subject + wish + Subject + would + base verb (for future desire/annoyance).", Answer: "I wish you would stop making so much noise." },
                { sentence: "She wishes it would rain tomorrow.", khmer: "នាងប្រាថ្នាថាវានឹងភ្លៀងនៅថ្ងៃស្អែក។ <br> Subject + wish + Subject + would + base verb (for future desire/annoyance).", Answer: "She wishes it would rain tomorrow." }
            ],
            "If only": [
                { sentence: "If only I knew the answer!", khmer: "បើសិនជាខ្ញុំដឹងចម្លើយ! <br> If only + Past Simple (for strong wish about present).", Answer: "If only I knew the answer!" },
                { sentence: "If only I had listened to her advice.", khmer: "បើសិនជាខ្ញុំបានស្តាប់ដំបូន្មានរបស់នាង។ <br> If only + Past Perfect (for strong regret about past).", Answer: "If only I had listened to her advice." }
            ],
            "By the time": [
                { sentence: "By the time I arrived, the movie had already started.", khmer: "ត្រឹមពេលខ្ញុំទៅដល់ កុនបានចាប់ផ្តើមរួចទៅហើយ។ <br> By the time + Past Simple, Past Perfect.", Answer: "By the time I arrived, the movie had already started." },
                { sentence: "By the end of the day, all tasks should be assigned.", khmer: "ត្រឹមចុងថ្ងៃនេះ កិច្ចការទាំងអស់គួរតែត្រូវបានចាត់តាំងរួចរាល់។ <br> By the end of the ..., all tasks should be .... <br>រចនាសម្ព័ន្ធ៖ By the end of [time], object + should be + past participle.", Answer: "By the end of the day, all tasks should be assigned." }
            ],
            "Communicating Delays or Setbacks Politely": [
                { sentence: "There has been a slight delay due to unforeseen circumstances.", khmer: "មានការពន្យារពេលបន្តិចបន្តួចដោយសារកាលៈទេសៈដែលមិនបានមើលឃើញទុកជាមុន។ <br> There has been a slight delay due to ....", Answer: "There has been a slight delay due to unforeseen circumstances." },
                { sentence: "We’ve encountered a minor issue with the software update, but we’re addressing it.", khmer: "ពួកយើងបានជួបបញ្ហាតូចមួយជាមួយនឹងការធ្វើបច្ចុប្បន្នភាពកម្មវិធី ប៉ុន្តែពួកយើងកំពុងដោះស្រាយវា។ <br> We’ve encountered a minor ..., but we’re working on ....", Answer: "We’ve encountered a minor issue with the software update, but we’re addressing it." },
                { sentence: "We anticipate a short delay in delivery due to a supply chain disruption.", khmer: "ពួកយើងរំពឹងថាការដឹកជញ្ជូននឹងពន្យារពេលបន្តិចបន្តួចដោយសារតែការរំខានខ្សែសង្វាក់ផ្គត់ផ្គង់។ <br> We anticipate a short delay in ... due to ....", Answer: "We anticipate a short delay in delivery due to a supply chain disruption." },
                { sentence: "Unfortunately, we’ve hit a small snag with the integration process.", khmer: "ជាអកុសល ពួកយើងបានជួបឧបសគ្គបន្តិចបន្តួចជាមួយនឹងដំណើរការនៃការរួមបញ្ចូល។ <br> Unfortunately, we’ve hit a small snag with ....", Answer: "Unfortunately, we’ve hit a small snag with the integration process." },
                { sentence: "We’re working to resolve a minor technical glitch that’s affecting the system.", khmer: "ពួកយើងកំពុងព្យាយាមដោះស្រាយបញ្ហាបច្ចេកទេសតូចមួយដែលកំពុងប៉ះពាល់ដល់ប្រព័ន្ធ។ <br> We’re working to resolve a minor ... that’s affecting ....", Answer: "We’re working to resolve a minor technical glitch that’s affecting the system." }
            ],
            "🧩A1. Would you mind...?": [
                            {
                                sentence: "Would you mind sending me the report by noon?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​ផ្ញើ​របាយការណ៍​មក​ខ្ញុំ​នៅ​ពេល​ថ្ងៃត្រង់​ទេ? <br> Sentence: Would you mind ... me the ... by noon? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                Answer: "Would you mind sending me the report by noon?"
                            },
                            {
                                sentence: "Would you mind reviewing this document?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​ពិនិត្យ​មើល​ឯកសារ​នេះ​ទេ? <br> Sentence: Would you mind ... this ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                Answer: "Would you mind reviewing this document?"
                            },
                            {
                                sentence: "Would you mind if I used the conference room at 3?",
                                khmer: "Khmer: តើ​អ្នក​នឹង​គិត​យ៉ាង​ណា​បើ​ខ្ញុំ​ប្រើ​បន្ទប់​ប្រជុំ​នៅ​ម៉ោង 3? <br> Sentence: Would you mind if I ... the ... at 3? <br>រចនាសម្ព័ន្ធ៖ Would you mind if I + past verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                Answer: "Would you mind if I used the conference room at 3?"
                            },
                            {
                                sentence: "Would you mind helping me with this task?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​ជួយ​ខ្ញុំ​ក្នុង​កិច្ចការ​នេះ​ទេ? <br> Sentence: Would you mind ... me with this ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                Answer: "Would you mind helping me with this task?"
                            },
                            {
                                sentence: "Would you mind closing the window?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​បិទ​បង្អួច​ទេ? <br> Sentence: Would you mind ... the ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                Answer: "Would you mind closing the window?"
                            },
                            {
                                sentence: "Would you mind if I sat here?",
                                khmer: "Khmer: តើ​អ្នក​នឹង​គិត​យ៉ាង​ណា​បើ​ខ្ញុំ​អង្គុយ​ទីនេះ? <br> Sentence: Would you mind if I ... here? <br>រចនាសម្ព័ន្ធ៖ Would you mind if I + past verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                Answer: "Would you mind if I sat here?"
                            },
                            {
                                sentence: "Would you mind explaining that again?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​ពន្យល់​រឿង​នោះ​ម្តង​ទៀត​ទេ? <br> Sentence: Would you mind ... that again? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                Answer: "Would you mind explaining that again?"
                            },
                            {
                                sentence: "Would you mind if I borrowed your pen?",
                                khmer: "Khmer: តើ​អ្នក​នឹង​គិត​យ៉ាង​ណា​បើ​ខ្ញុំ​ខ្ចី​ប៊ិច​របស់​អ្នក? <br> Sentence: Would you mind if I ... your ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind if I + past verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                Answer: "Would you mind if I borrowed your pen?"
                            },
                            {
                                sentence: "Would you mind holding this for a moment?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​កាន់​របស់​នេះ​មួយ​ភ្លែត​ទេ? <br> Sentence: Would you mind ... this for a ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                Answer: "Would you mind holding this for a moment?"
                            },
                            {
                                sentence: "Would you mind if I left early today?",
                                khmer: "Khmer: តើ​អ្នក​នឹង​គិត​យ៉ាង​ណា​បើ​ខ្ញុំ​ចេញ​ទៅ​មុន​ថ្ងៃ​នេះ? <br> Sentence: Would you mind if I ... early ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind if I + past verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                Answer: "Would you mind if I left early today?"
                            }
                        ],
                    "🧩A2. Polite Requests / Appreciations": [
                            {
                                sentence: "I’d appreciate it if you could send me the final draft by Friday.",
                                Answer: "I’d appreciate it if you could send me the final draft by Friday.",
                                khmer: "Khmer: ខ្ញុំសូមអរគុណប្រសិនបើអ្នកអាចផ្ញើឯកសារចុងក្រោយមកខ្ញុំត្រឹមថ្ងៃសុក្រ។ <br> Sentence: I’d appreciate it if you could ... me the final draft by .... <br>រចនាសម្ព័ន្ធ៖ I'd appreciate it if you could + base verb + object + time phrase. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            {
                                sentence: "I’d appreciate it if you could confirm your attendance.",
                                Answer: "I’d appreciate it if you could confirm your attendance.",
                                khmer: "Khmer: ខ្ញុំសូមអរគុណប្រសិនបើអ្នកអាចបញ្ជាក់ការចូលរួមរបស់អ្នក។ <br> Sentence: I’d appreciate it if you could ... your .... <br>រចនាសម្ព័ន្ធ៖ I'd appreciate it if you could + base verb + object. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            {
                                sentence: "I’d appreciate it if you could review the attached file.",
                                Answer: "I’d appreciate it if you could review the attached file.",
                                khmer: "Khmer: ខ្ញុំសូមអរគុណប្រសិនបើអ្នកអាចពិនិត្យមើលឯកសារភ្ជាប់។ <br> Sentence: I’d appreciate it if you could ... the attached .... <br>រចនាសម្ព័ន្ធ៖ I'd appreciate it if you could + base verb + object. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            {
                                sentence: "I’d appreciate it if you could keep me updated on the progress.",
                                Answer: "I’d appreciate it if you could keep me updated on the progress.",
                                khmer: "Khmer: ខ្ញុំសូមអរគុណប្រសិនបើអ្នកអាចបន្តផ្តល់ព័ត៌មានថ្មីៗអំពីវឌ្ឍនភាពដល់ខ្ញុំ។ <br> Sentence: I’d appreciate it if you could ... me updated on the .... <br>រចនាសម្ព័ន្ធ៖ I'd appreciate it if you could + keep + object + updated on + noun. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            // New sentences added below
                            {
                                sentence: "I would be grateful if you could provide more details.",
                                Answer: "I would be grateful if you could provide more details.",
                                khmer: "Khmer: ខ្ញុំនឹងដឹងគុណប្រសិនបើអ្នកអាចផ្តល់ព័ត៌មានលម្អិតបន្ថែម។ <br> Sentence: I would be grateful if you could ... more .... <br>រចនាសម្ព័ន្ធ៖ I would be grateful if you could + base verb + object. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            {
                                sentence: "I would be grateful if you could assist us with this task.",
                                Answer: "I would be grateful if you could assist us with this task.",
                                khmer: "Khmer: ខ្ញុំនឹងដឹងគុណប្រសិនបើអ្នកអាចជួយពួកយើងក្នុងការងារនេះ។ <br> Sentence: I would be grateful if you could ... us with this .... <br>រចនាសម្ព័ន្ធ៖ I would be grateful if you could + base verb + object + with + noun. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            {
                                sentence: "Please let me know if you’re available to discuss this further.",
                                Answer: "Please let me know if you’re available to discuss this further.",
                                khmer: "Khmer: សូមប្រាប់ខ្ញុំផងប្រសិនបើអ្នកទំនេរដើម្បីពិភាក្សារឿងនេះបន្ត។ <br> Sentence: Please let me know if you’re available to ... this .... <br>រចនាសម្ព័ន្ធ៖ Please let me know if you're available to + base verb + object + adverb. <br> Meaning: (= a polite way to ask about availability or to request information)"
                            },
                            {
                                sentence: "Please let me know if you’re available to join the meeting.",
                                Answer: "Please let me know if you’re available to join the meeting.",
                                khmer: "Khmer: សូមប្រាប់ខ្ញុំផងប្រសិនបើអ្នកទំនេរដើម្បីចូលរួមការប្រជុំ។ <br> Sentence: Please let me know if you’re available to ... the .... <br>រចនាសម្ព័ន្ធ៖ Please let me know if you're available to + base verb + object. <br> Meaning: (= a polite way to ask about availability or to request information)"
                            }
                        ],
                    "🧩A3. Have/get something done":[
                                
                                  {
                                    sentence: "They are having a new fence built around their house.",
                                    khmer: "Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ពួកគេកំពុងឲ្យគេសង់របងថ្មីជុំវិញផ្ទះរបស់ពួកគេ។ <br> They are having a new fence ...... around their house.",
                                    Answer: "They are having a new fence built around their house."
                                  },
                                  {
                                    sentence: "I had the printer repaired.",
                                    khmer: "Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ខ្ញុំបានជួសជុលម៉ាស៊ីនបោះពុម្ព។ <br> I had the printer ...... . <br>(Someone else repaired it for me.)",
                                    Answer: "I had the printer repaired."
                                  },
                                  {
                                    sentence: "We got the office painted.",
                                    khmer: "Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ពួកយើងបានឲ្យគេលាបពណ៌ការិយាល័យ។ <br> We got the office ...... .<br> (We hired someone to paint it.)",
                                    Answer: "We got the office painted."
                                  },
                                  {
                                    sentence: "We need to get the contracts signed before 5 PM.",
                                    khmer: "Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ពួកយើងត្រូវឲ្យគេចុះហត្ថលេខាលើកិច្ចសន្យាមុនម៉ោង 5 ល្ងាច។ <br> We need to get the contracts ...... before 5 PM.",
                                    Answer: "We need to get the contracts signed before 5 PM."
                                  },
                                  {
                                    sentence: "I had the team photos updated on the website.",
                                    khmer: "Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ខ្ញុំបានឲ្យគេធ្វើបច្ចុប្បន្នភាពរូបថតក្រុមនៅលើគេហទំព័រ។ <br> I had the team photos ...... on the website.",
                                    Answer: "I had the team photos updated on the website."
                                  },
                                  {
                                    sentence: "She got the meeting notes emailed to all participants.",
                                    khmer: "Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: នាងបានឲ្យគេផ្ញើកំណត់ហេតុកិច្ចប្រជុំទៅអ្នកចូលរួមទាំងអស់តាមអ៊ីមែល។ <br> She got the meeting notes ...... to all participants.",
                                    Answer: "She got the meeting notes emailed to all participants."
                                  },
                                  {
                                    sentence: "They’re having the room cleaned before the event.",
                                    khmer: "Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ពួកគេកំពុងឲ្យគេសម្អាតបន្ទប់មុនពេលព្រឹត្តិការណ៍។ <br> They’re having the room ...... before the event.",
                                    Answer: "They’re having the room cleaned before the event."
                                  },
                                  {
                                    sentence: "I’ll get the logo redesigned by our freelancer.",
                                    khmer: "Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ខ្ញុំនឹងឲ្យអ្នកឯករាជ្យរបស់យើងរចនាឡូហ្គោឡើងវិញ។ <br> I’ll get the logo ...... by our freelancer.",
                                    Answer: "I’ll get the logo redesigned by our freelancer."
                                  },
                                                          {
                                    sentence: "I had my computer fixed yesterday.",
                                    khmer: "<br>🧠 Quick Tips:<br>Due to' is often used after a form of “be”<br>👉 The cancellation was due to bad weather.<br>Owing to' is more flexible and works great at the start of a sentence<br>👉 Owing to budget cuts, hiring was frozen.Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ខ្ញុំបានជួសជុលកុំព្យូទ័ររបស់ខ្ញុំកាលពីម្សិលមិញ។ <br> I had my computer ...... yesterday.",
                                    Answer: "I had my computer fixed yesterday."
                                  },
                                  {
                                    sentence: "She’s getting her hair done this afternoon.",
                                    khmer: "Structure: <br>🧠 Quick Tips:<br>Due to' is often used after a form of “be”<br>👉 The cancellation was due to bad weather.<br>Owing to' is more flexible and works great at the start of a sentence<br>👉 Owing to budget cuts, hiring was frozen.Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: នាងនឹងធ្វើសក់របស់នាងនៅរសៀលនេះ។ <br> She’s getting her hair ...... this afternoon.",
                                    Answer: "She’s getting her hair done this afternoon."
                                  },
                                  {
                                    sentence: "We had the office cleaned before the meeting.",
                                    khmer: "<br>🧠 Quick Tips:<br>Due to' is often used after a form of “be”<br>👉 The cancellation was due to bad weather.<br>Owing to' is more flexible and works great at the start of a sentence<br>👉 Owing to budget cuts, hiring was frozen.Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ពួកយើងបានសម្អាតការិយាល័យមុនពេលប្រជុំ។ <br> We had the office ...... before the meeting.",
                                    Answer: "We had the office cleaned before the meeting."
                                  },
                                  {
                                    sentence: "They got the report printed at the last minute.",
                                    khmer: "<br>🧠 Quick Tips:<br>Due to' is often used after a form of “be”<br>👉 The cancellation was due to bad weather.<br>Owing to' is more flexible and works great at the start of a sentence<br>👉 Owing to budget cuts, hiring was frozen.Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ពួកគេបានបោះពុម្ពរបាយការណ៍នៅនាទីចុងក្រោយ។ <br> They got the report ...... at the last minute.",
                                    Answer: "They got the report printed at the last minute."
                                  },
                                  {
                                    sentence: "We had the website redesigned.",
                                    khmer: "<br>🧠 Quick Tips:<br>Due to' is often used after a form of “be”<br>👉 The cancellation was due to bad weather.<br>Owing to' is more flexible and works great at the start of a sentence<br>👉 Owing to budget cuts, hiring was frozen.Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ពួកយើងបានរចនាគេហទំព័រឡើងវិញ។ <br> We had the website ...... .",
                                    Answer: "We had the website redesigned."
                                  },
                                  {
                                    sentence: "The manager got the proposal reviewed by legal.",
                                    khmer: "<br>🧠 Quick Tips:<br>Due to' is often used after a form of “be”<br>👉 The cancellation was due to bad weather.<br>Owing to' is more flexible and works great at the start of a sentence<br>👉 Owing to budget cuts, hiring was frozen.Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: អ្នកគ្រប់គ្រងបានឲ្យផ្នែកច្បាប់ពិនិត្យមើលសំណើនេះ។ <br> The manager got the proposal ...... by legal.",
                                    Answer: "The manager got the proposal reviewed by legal."
                                  },
                                  {
                                    sentence: "Let’s have the documents signed before noon.",
                                    khmer: "<br>🧠 Quick Tips:<br>Due to' is often used after a form of “be”<br>👉 The cancellation was due to bad weather.<br>Owing to' is more flexible and works great at the start of a sentence<br>👉 Owing to budget cuts, hiring was frozen.Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: តោះឲ្យឯកសារចុះហត្ថលេខាមុនពេលថ្ងៃត្រង់។ <br> Let’s have the documents ...... before noon.",
                                    Answer: "Let’s have the documents signed before noon."
                                  },
                                  {
                                    sentence: "I need to get my car serviced next week.",
                                    khmer: "Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ខ្ញុំត្រូវឲ្យគេជួសជុលឡានរបស់ខ្ញុំនៅសប្តាហ៍ក្រោយ។ <br> I need to get my car ...... next week.",
                                    Answer: "I need to get my car serviced next week."
                                  },
                                  {
                                    sentence: "She had her portrait painted by a famous artist.",
                                    khmer: "<br>🧠 Quick Tips:<br>Due to' is often used after a form of “be”<br>👉 The cancellation was due to bad weather.<br>Owing to' is more flexible and works great at the start of a sentence<br>👉 Owing to budget cuts, hiring was frozen.Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: នាងបានឲ្យវិចិត្រករល្បីម្នាក់គូររូបនាង។ <br> She had her portrait ...... by a famous artist.",
                                    Answer: "She had her portrait painted by a famous artist."
                                  },
                                  {
                                    sentence: "They are having a new fence built around their house.",
                                    khmer: "<br>🧠 Quick Tips:<br>Due to' is often used after a form of “be”<br>👉 The cancellation was due to bad weather.<br>Owing to' is more flexible and works great at the start of a sentence<br>👉 Owing to budget cuts, hiring was frozen.Structure: Subject + have/get + object + past participle <br> Meaning: Use this to talk about a service or action you asked for or arranged — you don’t do it yourself, but it gets done for you.<br> Khmer: ពួកគេកំពុងឲ្យគេសង់របងថ្មីជុំវិញផ្ទះរបស់ពួកគេ។ <br> They are having a new fence ...... around their house.",
                                    Answer: "They are having a new fence built around their house."
                                  }
                                ],
                    "🧩A4. Due to / Owing to…":[
                                {
                                    sentence: "Owing to increased demand, we’re extending the deadline.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ដោយសារតម្រូវការកើនឡើង ពួកយើងកំពុងពង្រីកកាលកំណត់។ <br> Owing to ...... demand, we’re ...... the deadline.",
                                    Answer: "Owing to increased demand, we’re extending the deadline."
                                  },
                                  {
                                    sentence: "The meeting was postponed due to scheduling conflicts.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ការប្រជុំត្រូវបានពន្យារពេលដោយសារជម្លោះកាលវិភាគ។ <br> The meeting was ...... due to ...... conflicts.",
                                    Answer: "The meeting was postponed due to scheduling conflicts."
                                  },
                                  {
                                    sentence: "The system went down due to a server issue.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ប្រព័ន្ធបានធ្លាក់ចុះដោយសារបញ្ហាម៉ាស៊ីនមេ។ <br> The system went ...... due to a ...... issue.",
                                    Answer: "The system went down due to a server issue."
                                  },
                                  {
                                    sentence: "The low attendance was due to short notice.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ការចូលរួមតិចតួចគឺដោយសារការជូនដំណឹងខ្លី។ <br> The low attendance was ...... to ...... notice.",
                                    Answer: "The low attendance was due to short notice."
                                  },
                                  {
                                    sentence: "Owing to bad weather, we had to reschedule the event.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ដោយសារអាកាសធាតុអាក្រក់ ពួកយើងត្រូវរៀបចំកាលវិភាគព្រឹត្តិការណ៍ឡើងវិញ។ <br> Owing to ...... weather, we had to ...... the event.",
                                    Answer: "Owing to bad weather, we had to reschedule the event."
                                  },
                                  {
                                    sentence: "Owing to a last-minute change, the agenda has been updated.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ដោយសារការផ្លាស់ប្តូរនាទីចុងក្រោយ របៀបវារៈត្រូវបានធ្វើបច្ចុប្បន្នភាព។ <br> Owing to a ......-minute change, the agenda has been ...... .",
                                    Answer: "Owing to a last-minute change, the agenda has been updated."
                                  },
                                  {
                                    sentence: "Owing to increased demand, we’re extending the deadline.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ដោយសារតម្រូវការកើនឡើង ពួកយើងកំពុងពង្រីកកាលកំណត់។ <br> Owing to ...... demand, we’re ...... the deadline.",
                                    Answer: "Owing to increased demand, we’re extending the deadline."
                                  },
                                  {
                                    sentence: "Due to heavy traffic, the meeting started late.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ដោយសារ​ការ​កកស្ទះ​ចរាចរណ៍​ខ្លាំង ការ​ប្រជុំ​បាន​ចាប់​ផ្តើម​យឺត។ <br> Due to ...... traffic, the meeting ...... late.",
                                    Answer: "Due to heavy traffic, the meeting started late."
                                  },
                                  {
                                    sentence: "Owing to technical issues, we had to postpone the call.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ដោយសារបញ្ហាបច្ចេកទេស ពួកយើងត្រូវពន្យារពេលការហៅទូរស័ព្ទ។ <br> Owing to ...... issues, we had to ...... the call.",
                                    Answer: "Owing to technical issues, we had to postpone the call."
                                  },
                                  {
                                    sentence: "The project was delayed due to a lack of resources.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: គម្រោងត្រូវបានពន្យារពេលដោយសារកង្វះធនធាន។ <br> The project was ...... due to a ...... of resources.",
                                    Answer: "The project was delayed due to a lack of resources."
                                  },
                                  {
                                    sentence: "They lost the data owing to a server failure.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ពួកគេបានបាត់បង់ទិន្នន័យដោយសារការបរាជ័យម៉ាស៊ីនមេ។ <br> They lost the data ...... to a ...... failure.",
                                    Answer: "They lost the data owing to a server failure."
                                  },
                                  {
                                    sentence: "Due to unforeseen circumstances, the event was cancelled.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ដោយសារ​កាលៈទេសៈ​ដែល​មិន​បាន​មើល​ឃើញ​ទុក​មុន ព្រឹត្តិការណ៍​ត្រូវ​បាន​លុប​ចោល។ <br> Due to ...... circumstances, the event was ...... .",
                                    Answer: "Due to unforeseen circumstances, the event was cancelled."
                                  },
                                  {
                                    sentence: "Owing to her illness, she couldn't attend the conference.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ដោយសារជំងឺរបស់នាង នាងមិនអាចចូលរួមសន្និសីទបានទេ។ <br> Owing to her ......, she couldn't ...... the conference.",
                                    Answer: "Owing to her illness, she couldn't attend the conference."
                                  },
                                  {
                                    sentence: "The flight was delayed due to bad weather.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ជើងហោះហើរត្រូវបានពន្យារពេលដោយសារអាកាសធាតុអាក្រក់។ <br> The flight was ...... due to ...... weather.",
                                    Answer: "The flight was delayed due to bad weather."
                                  },
                                  {
                                    sentence: "He resigned owing to personal reasons.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: គាត់បានលាលែងពីតំណែងដោយសារហេតុផលផ្ទាល់ខ្លួន។ <br> He resigned ...... to ...... reasons.",
                                    Answer: "He resigned owing to personal reasons."
                                  },
                                  {
                                    sentence: "Due to high demand, the product is currently out of stock.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ដោយសារតម្រូវការខ្ពស់ ផលិតផលបច្ចុប្បន្នអស់ពីស្តុកហើយ។ <br> Due to ...... demand, the product is currently ...... of stock.",
                                    Answer: "Due to high demand, the product is currently out of stock."
                                  },
                                  {
                                    sentence: "The concert was cancelled owing to a lack of ticket sales.",
                                    khmer: "Structure: Due to / Owing to + noun/noun phrase, + main clause <br> Or <br> Main clause + due to / owing to + noun/noun phrase <br> Meaning: These are used to explain why something happened — more formal than “because of.” <br> Khmer: ការប្រគុំតន្ត្រីត្រូវបានលុបចោលដោយសារកង្វះការលក់សំបុត្រ។ <br> The concert was ...... owing to a ...... of ticket sales.",
                                    Answer: "The concert was cancelled owing to a lack of ticket sales."
                                  }
                                ],
                    "🧩A5. Workplace Uses of Should you…":[
                                {
                                    sentence: "Should you have any questions, feel free to contact me.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអ្នកមានសំណួរណាមួយ សូមទាក់ទងមកខ្ញុំ។ <br> Should you ...... any questions, feel free to ...... me.",
                                    Answer: "Should you have any questions, feel free to contact me."
                                  },
                                  {
                                    sentence: "Should you require further assistance, I’d be happy to help.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអ្នកត្រូវការជំនួយបន្ថែម ខ្ញុំរីករាយនឹងជួយ។ <br> Should you ...... further assistance, I’d be ...... to help.",
                                    Answer: "Should you require further assistance, I’d be happy to help."
                                  },
                                  {
                                    sentence: "Should you need more time, let us know by Friday.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអ្នកត្រូវការពេលបន្ថែម សូមប្រាប់ពួកយើងត្រឹមថ្ងៃសុក្រ។ <br> Should you ...... more time, ...... us know by Friday.",
                                    Answer: "Should you need more time, let us know by Friday."
                                  },
                                  {
                                    sentence: "Should you decide to join the meeting, here's the link.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអ្នកសម្រេចចិត្តចូលរួមប្រជុំ នេះជាតំណភ្ជាប់។ <br> Should you ...... to ...... the meeting, here's the ...... .",
                                    Answer: "Should you decide to join the meeting, here's the link."
                                  },
                                  {
                                    sentence: "Should you have any questions, feel free to contact me.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអ្នកមានសំណួរណាមួយ សូមទាក់ទងមកខ្ញុំ។ <br> Should you ...... any questions, feel free to ...... me.",
                                    Answer: "Should you have any questions, feel free to contact me."
                                  },
                                  {
                                    sentence: "Should you need further assistance, let me know.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអ្នកត្រូវការជំនួយបន្ថែម សូមប្រាប់ខ្ញុំ។ <br> Should you ...... further assistance, ...... me know.",
                                    Answer: "Should you need further assistance, let me know."
                                  },
                                  {
                                    sentence: "Should the situation change, we will inform you immediately.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើស្ថានភាពផ្លាស់ប្តូរ ពួកយើងនឹងជូនដំណឹងអ្នកភ្លាមៗ។ <br> Should the situation ......, we will ...... you immediately.",
                                    Answer: "Should the situation change, we will inform you immediately."
                                  },
                                  {
                                    sentence: "Should you decide to accept the offer, please sign below.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអ្នកសម្រេចចិត្តទទួលយកការផ្តល់ជូន សូមចុះហត្ថលេខាខាងក្រោម។ <br> Should you ...... to ...... the offer, please ...... below.",
                                    Answer: "Should you decide to accept the offer, please sign below."
                                  },
                                  {
                                    sentence: "Should you require more details, I can provide them.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអ្នកត្រូវការព័ត៌មានលម្អិតបន្ថែម ខ្ញុំអាចផ្តល់ជូនបាន។ <br> Should you ...... more details, I can ...... them.",
                                    Answer: "Should you require more details, I can provide them."
                                  },
                                  {
                                    sentence: "Should there be any issues, please report them to me.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើមានបញ្ហាណាមួយ សូមរាយការណ៍មកខ្ញុំ។ <br> Should there ...... any issues, please ...... them to me.",
                                    Answer: "Should there be any issues, please report them to me."
                                  },
                                  {
                                    sentence: "Should you wish to proceed, let us know by end of day.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអ្នកចង់បន្ត សូមប្រាប់ពួកយើងត្រឹមចុងថ្ងៃ។ <br> Should you ...... to proceed, ...... us know by end of day.",
                                    Answer: "Should you wish to proceed, let us know by end of day."
                                  },
                                  {
                                    sentence: "Should the client approve, we can start immediately.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអតិថិជនយល់ព្រម ពួកយើងអាចចាប់ផ្តើមភ្លាមៗ។ <br> Should the client ......, we can ...... immediately.",
                                    Answer: "Should the client approve, we can start immediately."
                                  },
                                  {
                                    sentence: "Should you encounter any problems, our support team is available.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអ្នកជួបបញ្ហាណាមួយ ក្រុមជំនួយរបស់យើងគឺអាចរកបាន។ <br> Should you ...... any problems, our support team ...... available.",
                                    Answer: "Should you encounter any problems, our support team is available."
                                  },
                                  {
                                    sentence: "Should you change your mind, the offer is still valid.",
                                    khmer: "Structure: Should + subject + base verb, + result clause <br> Meaning: This is an inverted conditional used to sound more formal and polite — especially useful in business communication.<br> Khmer: បើអ្នកប្តូរចិត្ត ការផ្តល់ជូននៅតែមានសុពលភាព។ <br> Should you ...... your mind, the offer ...... still valid.",
                                    Answer: "Should you change your mind, the offer is still valid."
                                  }
                                ],

                    "🧩A6. in order to..":[
                                  {
                                    sentence: "In order to meet the deadline, we worked overtime.",
                                    khmer: "Structure: In order to + base verb, + result or Subject + verb + in order to + base verb <br> Meaning: Use “in order to” to say why you're doing something — it sounds more formal than just 'to'.<br> Khmer: ដើម្បីបំពេញតាមកាលកំណត់ យើងធ្វើការថែមម៉ោង។ <br> In order to ....the deadline, we ..... overtime.",
                                    Answer: "In order to meet the deadline, we worked overtime."
                                  },
                                  {
                                    sentence: "She studies hard in order to pass her exams.",
                                    khmer: "Structure: In order to + base verb, + result or Subject + verb + in order to + base verb <br> Meaning: Use “in order to” to say why you're doing something — it sounds more formal than just 'to'.<br> Khmer: នាងរៀនពូកែដើម្បីប្រឡងជាប់។ <br> She studies hard in order to .... her exams.",
                                    Answer: "She studies hard in order to pass her exams."
                                  },
                                  {
                                    sentence: "He saved money in order to buy a new car.",
                                    khmer: "Structure: In order to + base verb, + result or Subject + verb + in order to + base verb <br> Meaning: Use “in order to” to say why you're doing something — it sounds more formal than just 'to'.<br> Khmer: គាត់សន្សំលុយដើម្បីទិញឡានថ្មី។ <br> He saved money in order to .... a new ....",
                                    Answer: "He saved money in order to buy a new car."
                                  },
                                  {
                                    sentence: "In order to improve his English, he practices daily.",
                                    khmer: "Structure: In order to + base verb, + result or Subject + verb + in order to + base verb <br> Meaning: Use “in order to” to say why you're doing something — it sounds more formal than just 'to'.<br> Khmer: ដើម្បីបង្កើនភាសាអង់គ្លេសរបស់គាត់ គាត់ហាត់រៀនជារៀងរាល់ថ្ងៃ។ <br> In order to .... his English, he ..... daily.",
                                    Answer: "In order to improve his English, he practices daily."
                                  },
                                  {
                                    sentence: "They left early in order to avoid the traffic.",
                                    khmer: "Structure: In order to + base verb, + result or Subject + verb + in order to + base verb <br> Meaning: Use “in order to” to say why you're doing something — it sounds more formal than just 'to'.<br> Khmer: ពួកគេចេញទៅមុនដើម្បីជៀសវាងការកកស្ទះចរាចរណ៍។ <br> They left early in order to .... the ....",
                                    Answer: "They left early in order to avoid the traffic."
                                  },
                                  {
                                    sentence: "In order to stay healthy, you should exercise regularly.",
                                    khmer: "Structure: In order to + base verb, + result or Subject + verb + in order to + base verb <br> Meaning: Use “in order to” to say why you're doing something — it sounds more formal than just 'to'.<br> Khmer: ដើម្បីរក្សាបាននូវសុខភាពល្អ អ្នកគួរតែហាត់ប្រាណទៀងទាត់។ <br> In order to .... healthy, you .... regularly.",
                                    Answer: "In order to stay healthy, you should exercise regularly."
                                  },
                                  {
                                    sentence: "We held a meeting in order to discuss the new proposal.",
                                    khmer: "Structure: In order to + base verb, + result or Subject + verb + in order to + base verb <br> Meaning: Use “in order to” to say why you're doing something — it sounds more formal than just 'to'.<br> Khmer: ពួកយើងបានរៀបចំកិច្ចប្រជុំដើម្បីពិភាក្សាអំពីសំណើថ្មី។ <br> We held a meeting in order to .... the new ....",
                                    Answer: "We held a meeting in order to discuss the new proposal."
                                  },
                                  {
                                    sentence: "In order to get a good seat, we arrived an hour early.",
                                    khmer: "Structure: In order to + base verb, + result or Subject + verb + in order to + base verb <br> Meaning: Use “in order to” to say why you're doing something — it sounds more formal than just 'to'.<br> Khmer: ដើម្បីទទួលបានកៅអីល្អ ពួកយើងបានមកដល់មួយម៉ោងមុន។ <br> In order to .... a good ...., we .... an hour early.",
                                    Answer: "In order to get a good seat, we arrived an hour early."
                                  },
                                  {
                                    sentence: "He works hard in order to support his family.",
                                    khmer: "Structure: In order to + base verb, + result or Subject + verb + in order to + base verb <br> Meaning: Use “in order to” to say why you're doing something — it sounds more formal than just 'to'.<br> Khmer: គាត់ធ្វើការយ៉ាងលំបាកដើម្បីចិញ្ចឹមគ្រួសាររបស់គាត់។ <br> He works hard in order to .... his ....",
                                    Answer: "He works hard in order to support his family."
                                  },
                                  {
                                    sentence: "In order to understand the concept, you need to read the chapter carefully.",
                                    khmer: "Structure: In order to + base verb, + result or Subject + verb + in order to + base verb <br> Meaning: Use “in order to” to say why you're doing something — it sounds more formal than just 'to'.<br> Khmer: ដើម្បីយល់ពីគំនិតនេះ អ្នកត្រូវអានជំពូកនេះដោយប្រុងប្រយ័ត្ន។ <br> In order to .... the ...., you .... to read the chapter carefully.",
                                    Answer: "In order to understand the concept, you need to read the chapter carefully."
                                  }
                                ],

                        //"✅ “Much as"
                    "✅ Much as (with 'as')": [
                            {
                                sentence: "Much as I like spicy food, I can't eat it every day.",
                                khmer: "Khmer: ថ្វីត្បិតតែខ្ញុំចូលចិត្តម្ហូបហឹរខ្លាំងក៏ដោយ ខ្ញុំមិនអាចញ៉ាំវាជារៀងរាល់ថ្ងៃបានទេ។ <br> Sentence: Much as I ... spicy food, I can't eat it every day. <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, result clause. <br> Meaning: (= although, even though, to acknowledge a strong feeling or fact before presenting a contrasting one)",
                                Answer: "Much as I like spicy food, I can't eat it every day."
                            },
                            {
                                sentence: "Much as she admires her boss, she disagrees with his decision.",
                                khmer: "Khmer: ថ្វីត្បិតតែនាងគោរពថ្នាក់លើក៏ដោយ នាងមិនយល់ព្រមនឹងសេចក្តីសម្រេចរបស់គាត់ទេ។ <br> Sentence: Much as she ... her boss, she disagrees with his .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, result clause. <br> Meaning: (= although, even though, to acknowledge a strong feeling or fact before presenting a contrasting one)",
                                Answer: "Much as she admires her boss, she disagrees with his decision."
                            },
                            {
                                sentence: "Much as we want to help, we simply don't have the resources.",
                                khmer: "Khmer: ថ្វីត្បិតតែពួកយើងចង់ជួយក៏ដោយ ពួកយើងគ្រាន់តែគ្មានធនធានទេ។ <br> Sentence: Much as we ... to help, we simply don't have the .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, result clause. <br> Meaning: (= although, even though, to acknowledge a strong feeling or fact before presenting a contrasting one)",
                                Answer: "Much as we want to help, we simply don't have the resources."
                            }
                        ],
                    "✅ Much as (with 'though')": [
                        {
                            sentence: "Much as I tried, though, I couldn't solve the puzzle.",
                            khmer: "Khmer: ថ្វីត្បិតតែខ្ញុំបានព្យាយាមក៏ដោយ ខ្ញុំមិនអាចដោះស្រាយបញ្ហានោះបានទេ។ <br> Sentence: Much as I ..., though, I couldn't solve the .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, though, result clause. <br> Meaning: (= despite the fact that; used for contrast, often with emphasis)",
                            Answer: "Much as I tried, though, I couldn't solve the puzzle."
                        },
                        {
                            sentence: "Much as he wanted to join, though, he was too busy.",
                            khmer: "Khmer: ថ្វីត្បិតតែគាត់ចង់ចូលរួមក៏ដោយ គាត់រវល់ពេក។ <br> Sentence: Much as he ... to join, though, he was too .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, though, result clause. <br> Meaning: (= despite the fact that; used for contrast, often with emphasis)",
                            Answer: "Much as he wanted to join, though, he was too busy."
                        },
                        {
                            sentence: "Much as they planned, though, the event was canceled.",
                            khmer: "Khmer: ថ្វីត្បិតតែពួកគេបានរៀបចំផែនការក៏ដោយ ព្រឹត្តិការណ៍ត្រូវបានលុបចោល។ <br> Sentence: Much as they ..., though, the event was .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, though, result clause. <br> Meaning: (= despite the fact that; used for contrast, often with emphasis)",
                            Answer: "Much as they planned, though, the event was canceled."
                        }
                    ],
                    "✅ Much as (with 'although')": [
                        {
                            sentence: "Much as I love traveling, although I rarely have time for it.",
                            khmer: "Khmer: ថ្វីត្បិតតែខ្ញុំស្រឡាញ់ធ្វើដំណើរក៏ដោយ ខ្ញុំក៏មិនសូវមានពេលវេលាទេ។ <br> Sentence: Much as I ... traveling, although I rarely have time for .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, although + subject + verb. <br> Meaning: (= despite the fact that; similar to 'as', but 'although' can introduce a full clause)",
                            Answer: "Much as I love traveling, although I rarely have time for it."
                        },
                        {
                            sentence: "Much as she enjoys singing, although she is shy on stage.",
                            khmer: "Khmer: ថ្វីត្បិតតែនាងចូលចិត្តច្រៀងក៏ដោយ នាងខ្មាស់អៀននៅលើឆាក។ <br> Sentence: Much as she ... singing, although she is shy on .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, although + subject + verb. <br> Meaning: (= despite the fact that; similar to 'as', but 'although' can introduce a full clause)",
                            Answer: "Much as she enjoys singing, although she is shy on stage."
                        },
                        {
                            sentence: "Much as we appreciate your offer, although we must decline.",
                            khmer: "Khmer: ថ្វីត្បិតតែពួកយើងកោតសរសើរការផ្តល់ជូនរបស់អ្នកក៏ដោយ ពួកយើងត្រូវបដិសេធ។ <br> Sentence: Much as we ... your offer, although we must .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, although + subject + verb. <br> Meaning: (= despite the fact that; similar to 'as', but 'although' can introduce a full clause)",
                            Answer: "Much as we appreciate your offer, although we must decline."
                        }
                    ],
                    "✅ Much as (with 'even though')": [
                        {
                            sentence: "Much as I wanted to stay, even though I had to leave early.",
                            khmer: "Khmer: ថ្វីត្បិតតែខ្ញុំចង់នៅក៏ដោយ ខ្ញុំត្រូវចេញទៅមុន។ <br> Sentence: Much as I ... to stay, even though I had to leave .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, even though + subject + verb. <br> Meaning: (= despite the strong desire/fact; emphasizes the contrast more strongly than 'although')",
                            Answer: "Much as I wanted to stay, even though I had to leave early."
                        },
                        {
                            sentence: "Much as he tried to explain, even though no one understood.",
                            khmer: "Khmer: ថ្វីត្បិតតែគាត់ព្យាយាមពន្យល់ក៏ដោយ គ្មាននរណាយល់ទេ។ <br> Sentence: Much as he ... to explain, even though no one .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, even though + subject + verb. <br> Meaning: (= despite the strong desire/fact; emphasizes the contrast more strongly than 'although')",
                            Answer: "Much as he tried to explain, even though no one understood."
                        },
                        {
                            sentence: "Much as they prepared, even though the results were disappointing.",
                            khmer: "Khmer: ថ្វីត្បិតតែពួកគេរៀបចំខ្លួនក៏ដោយ លទ្ធផលគួរឱ្យខកចិត្ត។ <br> Sentence: Much as they ..., even though the results were .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, even though + subject + verb. <br> Meaning: (= despite the strong desire/fact; emphasizes the contrast more strongly than 'although')",
                            Answer: "Much as they prepared, even though the results were disappointing."
                        }
                    ],
                    "✅ Much as (with 'while')": [
                        {
                            sentence: "Much as I enjoy reading, while I rarely have free time.",
                            khmer: "Khmer: ថ្វីត្បិតតែខ្ញុំចូលចិត្តអានសៀវភៅក៏ដោយ ខ្ញុំមិនសូវមានពេលទំនេរទេ។ <br> Sentence: Much as I ... reading, while I rarely have free .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, while + subject + verb. <br> Meaning: (= introduces a contrasting idea, often a simultaneous one)",
                            Answer: "Much as I enjoy reading, while I rarely have free time."
                        },
                        {
                            sentence: "Much as she likes sports, while she doesn't play often.",
                            khmer: "Khmer: ថ្វីត្បិតតែនាងចូលចិត្តកីឡាក៏ដោយ នាងមិនសូវលេងជាញឹកញាប់ទេ។ <br> Sentence: Much as she ... sports, while she doesn't play .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, while + subject + verb. <br> Meaning: (= introduces a contrasting idea, often a simultaneous one)",
                            Answer: "Much as she likes sports, while she doesn't play often."
                        },
                        {
                            sentence: "Much as we respect the rules, while we sometimes disagree.",
                            khmer: "Khmer: ថ្វីត្បិតតែពួកយើងគោរពច្បាប់ក៏ដោយ ពួកយើងពេលខ្លះមិនយល់ព្រម។ <br> Sentence: Much as we ... the rules, while we sometimes .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, while + subject + verb. <br> Meaning: (= introduces a contrasting idea, often a simultaneous one)",
                            Answer: "Much as we respect the rules, while we sometimes disagree."
                        }
                    ],
                    "✅ Much as (with 'whereas')": [
                        {
                            sentence: "Much as I prefer tea, whereas my friend prefers coffee.",
                            khmer: "Khmer: ថ្វីត្បិតតែខ្ញុំចូលចិត្តតែក៏ដោយ មិត្តរបស់ខ្ញុំចូលចិត្តកាហ្វេ។ <br> Sentence: Much as I ... tea, whereas my friend prefers .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, whereas + subject + verb. <br> Meaning: (= used to compare or contrast two facts or ideas)",
                            Answer: "Much as I prefer tea, whereas my friend prefers coffee."
                        },
                        {
                            sentence: "Much as she enjoys city life, whereas her family likes the countryside.",
                            khmer: "Khmer: ថ្វីត្បិតតែនាងចូលចិត្តជីវិតក្នុងទីក្រុងក៏ដោយ គ្រួសាររបស់នាងចូលចិត្តជីវិតជនបទ។ <br> Sentence: Much as she ... city life, whereas her family likes the .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, whereas + subject + verb. <br> Meaning: (= used to compare or contrast two facts or ideas)",
                            Answer: "Much as she enjoys city life, whereas her family likes the countryside."
                        },
                        {
                            sentence: "Much as we want to relax, whereas work keeps us busy.",
                            khmer: "Khmer: ថ្វីត្បិតតែពួកយើងចង់សម្រាកក៏ដោយ ការងារធ្វើឲ្យពួកយើងរវល់។ <br> Sentence: Much as we ... to relax, whereas work keeps us .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, whereas + subject + verb. <br> Meaning: (= used to compare or contrast two facts or ideas)",
                            Answer: "Much as we want to relax, whereas work keeps us busy."
                        }
                    ],
                    "✅ Much as (with 'despite')": [
                        {
                            sentence: "Much as I tried to finish early, despite many interruptions.",
                            khmer: "Khmer: ថ្វីត្បិតតែខ្ញុំព្យាយាមបញ្ចប់ឲ្យបានលឿនក៏ដោយ ទោះបីមានការរំខានច្រើនក៏ដោយ។ <br> Sentence: Much as I ... to finish early, despite many .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, despite + noun/gerund. <br> Meaning: (= in spite of; used to show a contrast that is surprising)",
                            Answer: "Much as I tried to finish early, despite many interruptions."
                        },
                        {
                            sentence: "Much as she wanted to win, despite her best efforts she lost.",
                            khmer: "Khmer: ថ្វីត្បិតតែនាងចង់ឈ្នះក៏ដោយ ទោះបីនាងខិតខំប្រឹងប្រែងក៏ដោយ នាងនៅតែចាញ់។ <br> Sentence: Much as she ... to win, despite her best efforts she .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, despite + noun/gerund. <br> Meaning: (= in spite of; used to show a contrast that is surprising)",
                            Answer: "Much as she wanted to win, despite her best efforts she lost."
                        },
                        {
                            sentence: "Much as we hoped for sunshine, despite the forecast it rained.",
                            khmer: "Khmer: ថ្វីត្បិតតែពួកយើងសង្ឃឹមថានឹងមានថ្ងៃភ្លឺក៏ដោយ ទោះបីការព្យាករណ៍អាកាសធាតុបង្ហាញថាមានភ្លៀងក៏ដោយ។ <br> Sentence: Much as we ... for sunshine, despite the forecast it .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, despite + noun/gerund. <br> Meaning: (= in spite of; used to show a contrast that is surprising)",
                            Answer: "Much as we hoped for sunshine, despite the forecast it rained."
                        }
                    ],
                    "✅ Much as (with 'in spite of')": [
                        {
                            sentence: "Much as I wanted to go, in spite of my illness I stayed home.",
                            khmer: "Khmer: ថ្វីត្បិតតែខ្ញុំចង់ទៅក៏ដោយ ទោះបីខ្ញុំឈឺក៏ដោយ ខ្ញុំនៅផ្ទះ។ <br> Sentence: Much as I ... to go, in spite of my illness I stayed .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, in spite of + noun/gerund. <br> Meaning: (= despite; emphasizes a contrasting situation or obstacle)",
                            Answer: "Much as I wanted to go, in spite of my illness I stayed home."
                        },
                        {
                            sentence: "Much as he tried to help, in spite of his efforts nothing changed.",
                            khmer: "Khmer: ថ្វីត្បិតតែគាត់ព្យាយាមជួយក៏ដោយ ទោះបីគាត់ខិតខំក៏ដោយ មិនមានអ្វីផ្លាស់ប្តូរឡើយ។ <br> Sentence: Much as he ... to help, in spite of his efforts nothing .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, in spite of + noun/gerund. <br> Meaning: (= despite; emphasizes a contrasting situation or obstacle)",
                            Answer: "Much as he tried to help, in spite of his efforts nothing changed."
                        },
                        {
                            sentence: "Much as they planned carefully, in spite of this, problems arose.",
                            khmer: "Khmer: ថ្វីត្បិតតែពួកគេរៀបចំផែនការយ៉ាងប្រុងប្រយ័ត្នក៏ដោយ ទោះបីជាយ៉ាងណាក៏ដោយ បញ្ហានៅតែមាន។ <br> Sentence: Much as they ... carefully, in spite of this, problems .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, in spite of + noun/pronoun. <br> Meaning: (= despite; emphasizes a contrasting situation or obstacle)",
                            Answer: "Much as they planned carefully, in spite of this, problems arose."
                        }
                    ],
                    "✅ Much as (with 'regardless of')": [
                        {
                            sentence: "Much as I wanted to succeed, regardless of the obstacles I faced.",
                            khmer: "Khmer: ថ្វីត្បិតតែខ្ញុំចង់ជោគជ័យក៏ដោយ មិនថាមានឧបសគ្គប៉ុនណាក៏ដោយ។ <br> Sentence: Much as I ... to succeed, regardless of the obstacles I .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, regardless of + noun/noun phrase. <br> Meaning: (= without being affected by; emphasizes that something happens despite a factor)",
                            Answer: "Much as I wanted to succeed, regardless of the obstacles I faced."
                        },
                        {
                            sentence: "Much as she tried to be friendly, regardless of others' reactions.",
                            khmer: "Khmer: ថ្វីត្បិតតែនាងព្យាយាមជាអ្នករួសរាយរាក់ទាក់ក៏ដោយ មិនថាប្រតិកម្មរបស់អ្នកដទៃយ៉ាងណាក៏ដោយ។ <br> Sentence: Much as she ... to be friendly, regardless of others' .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, regardless of + noun/noun phrase. <br> Meaning: (= without being affected by; emphasizes that something happens despite a factor)",
                            Answer: "Much as she tried to be friendly, regardless of others' reactions."
                        },
                        {
                            sentence: "Much as we prepared, regardless of our efforts, the plan failed.",
                            khmer: "Khmer: ថ្វីត្បិតតែពួកយើងរៀបចំខ្លួនក៏ដោយ មិនថាពួកយើងខិតខំយ៉ាងណាក៏ដោយ ផែនការនោះបរាជ័យ។ <br> Sentence: Much as we ..., regardless of our efforts, the plan .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, regardless of + noun/noun phrase. <br> Meaning: (= without being affected by; emphasizes that something happens despite a factor)",
                            Answer: "Much as we prepared, regardless of our efforts, the plan failed."
                        }
                    ],
                    "✅ Much as (with 'notwithstanding')": [
                        {
                            sentence: "Much as I respect his opinion, notwithstanding our differences.",
                            khmer: "Khmer: ថ្វីត្បិតតែខ្ញុំគោរពមតិយោបល់របស់គាត់ក៏ដោយ ទោះបីមានភាពខុសគ្នារវាងយើងក៏ដោយ។ <br> Sentence: Much as I ... his opinion, notwithstanding our .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, notwithstanding + noun/noun phrase. <br> Meaning: (= despite; a more formal way to express concession)",
                            Answer: "Much as I respect his opinion, notwithstanding our differences."
                        },
                        {
                            sentence: "Much as she wanted to stay, notwithstanding her desire, she left.",
                            khmer: "Khmer: ថ្វីត្បិតតែនាងចង់នៅក៏ដោយ ទោះបីនាងចង់យ៉ាងណាក៏ដោយ នាងនៅតែចេញទៅ។ <br> Sentence: Much as she ... to stay, notwithstanding her ..., she .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, notwithstanding + noun/noun phrase. <br> Meaning: (= despite; a more formal way to express concession)",
                            Answer: "Much as she wanted to stay, notwithstanding her desire, she left."
                        },
                        {
                            sentence: "Much as we tried to finish on time, notwithstanding delays, we were late.",
                            khmer: "Khmer: ថ្វីត្បិតតែពួកយើងព្យាយាមបញ្ចប់ឲ្យទាន់ពេលក៏ដោយ ទោះបីមានការពន្យារពេលក៏ដោយ ពួកយើងនៅតែមកយឺត។ <br> Sentence: Much as we ... to finish on time, notwithstanding ..., we were .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, notwithstanding + noun/noun phrase. <br> Meaning: (= despite; a more formal way to express concession)",
                            Answer: "Much as we tried to finish on time, notwithstanding delays, we were late."
                        }
                    ],
                    "✅ Much as (with 'even if')": [
                        {
                            sentence: "Much as I want to help, even if I could, I don't have time.",
                            khmer: "Khmer: ថ្វីត្បិតតែខ្ញុំចង់ជួយក៏ដោយ ទោះបីខ្ញុំអាចជួយក៏ដោយ ខ្ញុំមិនមានពេលវេលាទេ។ <br> Sentence: Much as I ... to help, even if I ..., I don't have .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, even if + subject + verb. <br> Meaning: (= introduces a hypothetical condition that doesn't change the main point)",
                            Answer: "Much as I want to help, even if I could, I don't have time."
                        },
                        {
                            sentence: "Much as she loves music, even if she practices, she can't play well.",
                            khmer: "Khmer: ថ្វីត្បិតតែនាងស្រឡាញ់តន្ត្រីក៏ដោយ ទោះបីនាងហាត់ប្រាណក៏ដោយ នាងមិនអាចលេងបានល្អទេ។ <br> Sentence: Much as she ... music, even if she ..., she can't play .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, even if + subject + verb. <br> Meaning: (= introduces a hypothetical condition that doesn't change the main point)",
                            Answer: "Much as she loves music, even if she practices, she can't play well."
                        },
                        {
                            sentence: "Much as we want to travel, even if we save money, it's not enough.",
                            khmer: "Khmer: ថ្វីត្បិតតែពួកយើងចង់ធ្វើដំណើរក៏ដោយ ទោះបីពួកយើងសន្សំលុយក៏ដោយ វានៅតែមិនគ្រប់គ្រាន់។ <br> Sentence: Much as we ... to travel, even if we ... money, it's not .... <br>រចនាសម្ព័ន្ធ៖ Much as + subject + verb, even if + subject + verb. <br> Meaning: (= introduces a hypothetical condition that doesn't change the main point)",
                            Answer: "Much as we want to travel, even if we save money, it's not enough."
                        }
                        ],
                    "✅ “Much as": [
                        {
                            sentence: "Much as",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>Much as I love ...., I can't eat it .....<br>ថ្វីត្បិតតែខ្ញុំស្រឡាញ់សូកូឡាខ្លាំងណាស់ក៏ដោយ ក៏ខ្ញុំមិនអាចញ៉ាំវាជារៀងរាល់ថ្ងៃបានដែរ។",
                            Answer: "Much as I love chocolate, I can't eat it every day."
                        },
                        {
                            sentence: "Much as ",
                            Answer: "Much as he tries to be a good person, his true feelings often show.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>...he tries to be ..., his true ... often show.<br>ថ្វីត្បិតតែគាត់ព្យាយាមធ្វើជាមនុស្សសុភាពរាបសារក៏ដោយ ក៏អារម្មណ៍ពិតរបស់គាត់តែងតែបង្ហាញចេញមក។"
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>....they ... to help, they were ... to.<br>ថ្វីត្បិតតែពួកគេចង់ជួយខ្លាំងណាស់ក៏ដោយ ក៏ពួកគេមិនអាចជួយបានដែរ។",
                            Answer: "Much as they wanted to help, they were unable to."
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>...I ... her work, I don't ... with all her ....<br>ថ្វីត្បិតតែខ្ញុំគោរពការងាររបស់នាងក៏ដោយ ខ្ញុំមិនយល់ព្រមជាមួយគំនិតទាំងអស់របស់នាងទេ។",
                            Answer: "Much as I admire her work, I don't agree with all her opinions."
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>....it ... me to say it, you are ....<br>ថ្វីត្បិតតែវាធ្វើឲ្យខ្ញុំឈឺចាប់ក្នុងការនិយាយក៏ដោយ ក៏អ្នកខុសដែរ។",
                            Answer: "Much as it pains me to say it, you are wrong."
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>...she ... public speaking, she has to do it for her ...<br>ថ្វីត្បិតតែនាងមិនចូលចិត្តការនិយាយជាសាធារណៈក៏ដោយ ក៏នាងត្រូវធ្វើវាសម្រាប់ការងាររបស់នាងដែរ។"
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>...he ... to hide it, his ... was ...<br>ថ្វីត្បិតតែគាត់ព្យាយាមលាក់បាំងក៏ដោយ ក៏ភាពភ័យខ្លាចរបស់គាត់គឺច្បាស់ណាស់។",
                            Answer: "Much as he tried to hide it, his fear was evident."
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>...we ... your ..., we have to ....<br>ថ្វីត្បិតតែពួកយើងកោតសរសើរការផ្តល់ជូនរបស់អ្នកក៏ដោយ ក៏ពួកយើងត្រូវបដិសេធដែរ។",
                            Answer: "Much as we appreciate your offer, we have to decline."
                        },
                        {
                            sentence: "Much as",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>.. I ...to stay, I had to ... early.<br>ថ្វីត្បិតតែខ្ញុំចង់នៅក៏ដោយ ក៏ខ្ញុំត្រូវចេញទៅមុនដែរ។",
                            Answer: "Much as I wanted to stay, I had to leave early."
                        },
                        {
                            sentence: "Much as",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>.. the children ..., they still ... their ....<br>ថ្វីត្បិតតែក្មេងៗត្អូញត្អែរក៏ដោយ ក៏ពួកគេនៅតែញ៉ាំបន្លែរបស់ពួកគេដែរ។",
                            Answer: "Much as the children complained, they still ate their vegetables."
                        },
                        {
                            sentence: "Much as",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>.. I ... the idea, I had to ... it.<br>ថ្វីត្បិតតែខ្ញុំមិនចូលចិត្តគំនិតនេះក៏ដោយ ក៏ខ្ញុំត្រូវទទួលយកវា។",
                            Answer: "Much as I disliked the idea, I had to accept it."
                        },
                        {
                            sentence: "Much as",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>.. the weather ..., we still ... our ....<br>ថ្វីត្បិតតែអាកាសធាតុអាក្រក់ក៏ដោយ ក៏យើងនៅតែរីករាយនឹងការធ្វើដំណើររបស់យើង។",
                            Answer: "Much as the weather was bad, we still enjoyed our trip."
                        }
                    ],
                    "✅ By the time…": [
                        {
                            sentence: "By the time ",
                            khmer: "ពេលខ្ញុំទៅដល់ ពួកគេបានញ៉ាំអាហារពេលល្ងាចរួចហើយ។ <br> By the time I ..., they had already finished .... <br>រចនាសម្ព័ន្ធ៖ By the time + past simple, past perfect.",
                            Answer: "By the time I arrived, they had already finished dinner."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលនាងបញ្ចប់ការសិក្សា នាងនឹងបានបញ្ចប់ការបណ្តុះបណ្តាលការងារហើយ។ <br> By the time she ..., she will have completed an .... <br>រចនាសម្ព័ន្ធ៖ By the time + present simple, future perfect.",
                            Answer: "By the time she graduates, she will have completed an internship."
                        },
                        {
                            sentence: "By the time",
                            khmer: "ពេលគាត់ភ្ញាក់ពីគេង ព្រះអាទិត្យបានរះហើយ។ <br> By the time he ... up, the sun had already .... <br>រចនាសម្ព័ន្ធ៖ By the time + past simple, past perfect.",
                            Answer: "By the time he woke up, the sun had already risen."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលអ្នកអាននេះ ខ្ញុំនឹងបានចេញទៅវិស្សមកាលហើយ។ <br> By the time you ... this, I will have left for .... <br>រចនាសម្ព័ន្ធ៖ By the time + present simple, future perfect.",
                            Answer: "By the time you read this, I will have left for vacation."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលពួកគេទៅដល់ស្ថានីយ៍ រថភ្លើងបានចេញដំណើរហើយ។ <br> By the time they ... the station, the train had .... <br>រចនាសម្ព័ន្ធ៖ By the time + past simple, past perfect.",
                            Answer: "By the time they reached the station, the train had departed."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលពួកយើងបញ្ចប់គម្រោងនេះ វានឹងចំណាយពេលមួយខែហើយ។ <br> By the time we ... this project, it will have been a .... <br>រចនាសម្ព័ន្ធ៖ By the time + present simple, future perfect.",
                            Answer: "By the time we finish this project, it will have been a month."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលប៉ូលីសទៅដល់ ចោរបានបាត់ខ្លួនបាត់ហើយ។ <br> By the time the police ..., the thieves had .... <br>រចនាសម្ព័ន្ធ៖ By the time + past simple, past perfect.",
                            Answer: "By the time the police arrived, the thieves had vanished."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលនាងអាយុសាមសិបឆ្នាំ នាងនឹងបានធ្វើដំណើរទៅប្រទេសជាច្រើនហើយ។ <br> By the time she ... thirty, she will have traveled to many .... <br>រចនាសម្ព័ន្ធ៖ By the time + present simple, future perfect.",
                            Answer: "By the time she turns thirty, she will have traveled to many countries."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលពួកគេចាប់ផ្តើមចម្អិន ខ្ញុំបានញ៉ាំរួចហើយ។ <br> By the time they ... cooking, I had already .... <br>រចនាសម្ព័ន្ធ៖ By the time + past simple, past perfect.",
                            Answer: "By the time they started cooking, I had already eaten."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលអ្នកទៅដល់ផ្ទះ ខ្ញុំនឹងបានរៀបចំអាហារពេលល្ងាចហើយ។ <br> By the time you ... home, I will have prepared .... <br>រចនាសម្ព័ន្ធ៖ By the time + present simple, future perfect.",
                            Answer: "By the time you get home, I will have prepared dinner."
                        }
                    ],
                    "✅ So…as to…": [
                        {
                            sentence: "So…as to…",
                            khmer: "គាត់ចិត្តល្អណាស់ រហូតដល់បានជូនខ្ញុំទៅ។ <br> He was so ... as to offer me a .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            Answer: "He was so kind as to offer me a ride."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "បញ្ហាគឺស្មុគស្មាញណាស់ រហូតដល់ត្រូវការដំបូន្មានពីអ្នកជំនាញ។ <br> The problem was so ... as to require expert .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            Answer: "The problem was so complex as to require expert advice."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "នាងនិយាយតិចៗ រហូតស្ទើរតែស្តាប់មិនឮ។ <br> She spoke so ... as to be almost .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            Answer: "She spoke so softly as to be almost inaudible."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "គាត់រត់លឿនណាស់ រហូតដល់បំបែកកំណត់ត្រាសាលា។ <br> He ran so ... as to break the school .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            Answer: "He ran so fast as to break the school record."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "ព័ត៌មាននេះគួរឲ្យភ្ញាក់ផ្អើលណាស់ រហូតដល់ធ្វើឲ្យអ្នករាល់គ្នាស្ងាត់មាត់។ <br> The news was so ... as to leave everyone .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            Answer: "The news was so shocking as to leave everyone speechless."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "ពួកគេរំភើបណាស់ រហូតដល់ចាប់ផ្តើមធ្វើការភ្លាមៗ។ <br> They were so ... as to start working .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            Answer: "They were so eager as to start working immediately."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "បន្ទប់ងងឹតណាស់ រហូតដល់មិនអាចអានបាន។ <br> The room was so ... as to make it impossible to .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            Answer: "The room was so dark as to make it impossible to read."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "គាត់សុភាពរាបសារណាស់ រហូតដល់បានកាន់ទ្វារបើកឲ្យអ្នករាល់គ្នា។ <br> He was so ... as to hold the door open for .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            Answer: "He was so polite as to hold the door open for everyone."
                        },
                        {
                            sentence: "So…as to….",
                            khmer: "ទឹកត្រជាក់ណាស់ រហូតដល់ធ្វើឲ្យម្រាមដៃខ្ញុំស្ពឹក។ <br> The water was so ... as to numb my .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            Answer: "The water was so cold as to numb my fingers."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "នាងក្លាហានណាស់ រហូតដល់ហ៊ានប្រឈមមុខនឹងអ្នកវាយប្រហារ។ <br> She was so ... as to confront the .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            Answer: "She was so brave as to confront the attacker."
                        }
                    ],
                    "✅ Too…to": [
                        {
                            sentence: "Too…to",
                            khmer: "គាត់ក្មេងពេកមិនអាចបើកបររថយន្តបានទេ។ <br> He is too ... to drive a .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            Answer: "He is too young to drive a car."
                        },
                        {
                            sentence: "The coffee was too hot to drink immediately.",
                            khmer: "កាហ្វេក្តៅពេកមិនអាចផឹកភ្លាមៗបានទេ។ <br> The coffee was too ... to drink .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            Answer: "The coffee was too hot to drink immediately."
                        },
                        {
                            sentence: "She was too tired to continue working.",
                            khmer: "នាងហត់ពេកមិនអាចបន្តធ្វើការបានទេ។ <br> She was too ... to continue .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            Answer: "She was too tired to continue working."
                        },
                        {
                            sentence: "The box is too heavy to lift alone.",
                            khmer: "ប្រអប់នេះធ្ងន់ពេកមិនអាចលើកម្នាក់ឯងបានទេ។ <br> The box is too ... to lift .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            Answer: "The box is too heavy to lift alone."
                        },
                        {
                            sentence: "He spoke too quickly to be understood.",
                            khmer: "គាត់និយាយលឿនពេកមិនអាចយល់បានទេ។ <br> He spoke too ... to be .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            Answer: "He spoke too quickly to be understood."
                        },
                        {
                            sentence: "The dress was too expensive to buy.",
                            khmer: "រ៉ូបនេះថ្លៃពេកមិនអាចទិញបានទេ។ <br> The dress was too ... to .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            Answer: "The dress was too expensive to buy."
                        },
                        {
                            sentence: "It's too late to change our plans now.",
                            khmer: "វាយឺតពេលពេកមិនអាចប្តូរផែនការឥឡូវនេះបានទេ។ <br> It's too ... to change our ... now.",
                            Answer: "It's too late to change our plans now."
                        },
                        {
                            sentence: "The music was too loud to have a conversation.",
                            khmer: "តន្ត្រីលឺខ្លាំងពេកមិនអាចនិយាយគ្នាបានទេ។ <br> The music was too ... to have a .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            Answer: "The music was too loud to have a conversation."
                        },
                        {
                            sentence: "They are too busy to help us right now.",
                            khmer: "ពួកគេរវល់ពេកមិនអាចជួយពួកយើងបាននៅពេលនេះទេ។ <br> They are too ... to help us right .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            Answer: "They are too busy to help us right now."
                        },
                        {
                            sentence: "The problem is too difficult to solve without assistance.",
                            khmer: "បញ្ហាគឺពិបាកពេកមិនអាចដោះស្រាយដោយគ្មានជំនួយបានទេ។ <br> The problem is too ... to solve without .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            Answer: "The problem is too difficult to solve without assistance."
                        }
                    ],
                    "✅ If it hadn’t been for…": [
                        {
                            sentence: "If it hadn’t been for your help, I would have failed the exam.",
                            khmer: "បើមិនមែនដោយសារជំនួយរបស់អ្នកទេ ខ្ញុំប្រាកដជាធ្លាក់ប្រឡងហើយ។ <br> If it hadn’t been for ... help, I would have failed the .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            Answer: "If it hadn’t been for your help, I would have failed the exam."
                        },
                        {
                            sentence: "If it hadn’t been for the warning, they would have entered the dangerous area.",
                            khmer: "បើមិនមែនដោយសារការព្រមានទេ ពួកគេប្រាកដជាបានចូលទៅក្នុងតំបន់គ្រោះថ្នាក់ហើយ។ <br> If it hadn’t been for the ..., they would have entered the dangerous .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            Answer: "If it hadn’t been for the warning, they would have entered the dangerous area."
                        },
                        {
                            sentence: "If it hadn’t been for the rain, we would have gone for a walk.",
                            khmer: "បើមិនមែនដោយសារភ្លៀងទេ ពួកយើងប្រាកដជាបានទៅដើរលេងហើយ។ <br> If it hadn’t been for the ..., we would have gone for a .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            Answer: "If it hadn’t been for the rain, we would have gone for a walk."
                        },
                        {
                            sentence: "If it hadn’t been for the traffic, we would have arrived on time.",
                            khmer: "បើមិនមែនដោយសារការកកស្ទះចរាចរណ៍ទេ ពួកយើងប្រាកដជាបានទៅដល់ទាន់ពេលហើយ។ <br> If it hadn’t been for the ..., we would have arrived on .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            Answer: "If it hadn’t been for the traffic, we would have arrived on time."
                        },
                        {
                            sentence: "If it hadn’t been for her quick thinking, the accident would have been worse.",
                            khmer: "បើមិនមែនដោយសារគំនិតរហ័សរបស់នាងទេ គ្រោះថ្នាក់នឹងកាន់តែអាក្រក់ជាងនេះ។ <br> If it hadn’t been for her quick ..., the accident would have been .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            Answer: "If it hadn’t been for her quick thinking, the accident would have been worse."
                        },
                        {
                            sentence: "If it hadn’t been for the strong wind, the fire would have spread faster.",
                            khmer: "បើមិនមែនដោយសារខ្យល់ខ្លាំងទេ ភ្លើងនឹងរាលដាលលឿនជាងនេះ។ <br> If it hadn’t been for the strong ..., the fire would have spread .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            Answer: "If it hadn’t been for the strong wind, the fire would have spread faster."
                        },
                        {
                            sentence: "If it hadn’t been for his dedication, the project would not have been completed.",
                            khmer: "បើមិនមែនដោយសារការលះបង់របស់គាត់ទេ គម្រោងនេះនឹងមិនត្រូវបានបញ្ចប់ឡើយ។ <br> If it hadn’t been for his ..., the project would not have been .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            Answer: "If it hadn’t been for his dedication, the project would not have been completed."
                        },
                        {
                            sentence: "If it hadn’t been for the alarm, we wouldn't have woken up.",
                            khmer: "បើមិនមែនដោយសារសំឡេងរោទិ៍ទេ ពួកយើងនឹងមិនភ្ញាក់ពីគេងទេ។ <br> If it hadn’t been for the ..., we wouldn't have woken .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            Answer: "If it hadn’t been for the alarm, we wouldn't have woken up."
                        },
                        {
                            sentence: "If it hadn’t been for the generous donation, the charity couldn't have continued its work.",
                            khmer: "បើមិនមែនដោយសារការបរិច្ចាគដ៏សប្បុរសទេ អង្គការសប្បុរសធម៌នឹងមិនអាចបន្តការងាររបស់ខ្លួនបានទេ។ <br> If it hadn’t been for the generous ..., the charity couldn't have continued its .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            Answer: "If it hadn’t been for the generous donation, the charity couldn't have continued its work."
                        },
                        {
                            sentence: "If it hadn’t been for the doctor's advice, his condition would have worsened.",
                            khmer: "បើមិនមែនដោយសារដំបូន្មានរបស់វេជ្ជបណ្ឌិតទេ ស្ថានភាពរបស់គាត់នឹងកាន់តែអាក្រក់ទៅៗ។ <br> If it hadn’t been for the doctor's ..., his condition would have .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            Answer: "If it hadn’t been for the doctor's advice, his condition would have worsened."
                        }
                    ],
                    //🧪A-F Basic Progress Updates
                    "🧪 A. Basic Progress Updates": [
                        {
                            sentence: "We have completed the first phase of the project.",
                            answer: "We have completed the first phase of the project.",
                            khmer: "<br>Used to report something finished.<br>ពួកយើងបានបញ្ចប់ដំណាក់កាលទីមួយនៃគម្រោងហើយ។ <br> We have ... the first phase of the .... <br>រចនាសម្ព័ន្ធ៖ We have + past participle + object."
                        },
                        {
                            sentence: "We are currently working on the data analysis.",
                            answer: "We are currently working on the data analysis.",
                            khmer: "<br>Used to talk about what your team is doing now.<br>ពួកយើងកំពុងដំណើរការការវិភាគទិន្នន័យ។ <br> We are currently ... on the data .... <br>រចនាសម្ព័ន្ធ៖ We are currently working on + noun/gerund."
                        },
                        {
                            sentence: "We are still in the process of gathering feedback.",
                            answer: "We are still in the process of gathering feedback.",
                            khmer: "<br>Shows work is in progress but not done yet.<br>ពួកយើងនៅតែស្ថិតក្នុងដំណើរការប្រមូលមតិកែលម្អ។ <br> We are still in the process of ... feedback. <br>រចនាសម្ព័ន្ធ៖ We are still in the process of + gerund + object."
                        },
                        {
                            sentence: "We’ve already finished preparing the report.",
                            answer: "We’ve already finished preparing the report.",
                            khmer: "<br>Emphasizes that something is done, maybe even early.<br>ពួកយើងបានបញ្ចប់ការរៀបចំរបាយការណ៍រួចហើយ។ <br> We’ve already ... preparing the .... <br>រចនាសម្ព័ន្ធ៖ We've already finished + gerund + object."
                        },
                        {
                            sentence: "We haven’t started yet, but we’re planning to begin next week.",
                            answer: "We haven’t started yet, but we’re planning to begin next week.",
                            khmer: "<br>Shows honesty with a forward plan.<br>ពួកយើងមិនទាន់បានចាប់ផ្តើមនៅឡើយទេ ប៉ុន្តែពួកយើងកំពុងរៀបចំផែនការចាប់ផ្តើមនៅសប្តាហ៍ក្រោយ។ <br> We haven’t started yet, but we’re planning to ... next .... <br>រចនាសម្ព័ន្ធ៖ We haven't started yet, but we're planning to + base verb + time."
                        }
                    ],
                    "🧪 B. Ongoing / In Progress": [
                        {
                            sentence: "So far, we’ve managed to solve most of the technical issues.",
                            answer: "So far, we’ve managed to solve most of the technical issues.",
                            khmer: "<br>📌 Pro Tip: “Managed to” = Successfully done something (especially if it was difficult).<br>👉 Use this when you're giving a progress update that shows what has been achieved up to now.<br>រហូតមកដល់ពេលនេះ ពួកយើងបានដោះស្រាយបញ្ហាបច្ចេកទេសភាគច្រើន។ <br> So far, we’ve managed to ... most of the technical .... <br>រចនាសម្ព័ន្ធ៖ So far, we've managed to + base verb + object."
                        },
                        {
                            sentence: "So far, we’ve managed to complete 80% of the project.",
                            answer: "So far, we’ve managed to complete 80% of the project.",
                            khmer: "<br>📌 Pro Tip: “Managed to” = Successfully done something (especially if it was difficult).<br>👉 Use this when you're giving a progress update that shows what has been achieved up to now.<br>រហូតមកដល់ពេលនេះ ពួកយើងបានបញ្ចប់ 80% នៃគម្រោង។ <br> So far, we’ve managed to ... 80% of the .... <br>រចនាសម្ព័ន្ធ៖ So far, we've managed to + base verb + percentage + object."

                        },
                        {
                            sentence: "We are currently testing the new features.",
                            answer: "We are currently testing the new features.",
                            khmer: "ពួកយើងកំពុងសាកល្បងមុខងារថ្មីៗ។ <br> We are currently ... the new .... <br>រចនាសម្ព័ន្ធ៖ We are currently + gerund + object."
                        },
                        {
                            sentence: "So far, we’ve managed to gather all the customer feedback.",
                            answer:" So far, we’ve managed to gather all the customer feedback.",
                            khmer: "<br>📌 Pro Tip: “Managed to” = Successfully done something (especially if it was difficult).<br>👉 Use this when you're giving a progress update that shows what has been achieved up to now.<br>រហូតមកដល់ពេលនេះ ពួកយើងបានប្រមូលមតិគ្រប់គ្រងអតិថិជន។ <br> So far, we’ve managed to ... all the customer .... <br>រចនាសម្ព័ន្ធ៖ So far, we've managed to + base verb + object."
                        },
                        {
                            sentence: "At the moment, we’re focusing on user interface improvements.",
                            answer: "At the moment, we’re focusing on user interface improvements.",
                            khmer: "<br>📌 Pro Tip: You can also use this to explain why you're not working on something else yet.<br>👉 Use this to explain your current task or priority.<br>បច្ចុប្បន្ន ពួកយើងកំពុងផ្តោតលើការកែលម្អចំណុចប្រទាក់អ្នកប្រើប្រាស់។ <br> At the moment, we’re focusing on user interface .... <br>រចនាសម្ព័ន្ធ៖ At the moment, we're focusing on + noun/gerund."
                        },
                        {
                            sentence: "At the moment, we’re focusing on improving the mobile version.",
                            answer: "At the moment, we’re focusing on improving the mobile version.",
                            khmer: "<br>📌 Pro Tip: You can also use this to explain why you're not working on something else yet.<br>👉 Use this to explain your current task or priority.<br>បច្ចុប្បន្ន ពួកយើងកំពុងផ្តោតលើការកែលម្អកំណែទូរស័ព្ទ។ <br> At the moment, we’re focusing on ... the mobile .... <br>រចនាសម្ព័ន្ធ៖ At the moment, we're focusing on + gerund + object."
                        },
                        {
                            sentence:"At the moment, we’re focusing on fixing the bugs from the last update.",
                            answer: "At the moment, we’re focusing on fixing the bugs from the last update.",
                            khmer: "<br>📌 Pro Tip: You can also use this to explain why you're not working on something else yet.<br>👉 Use this to explain your current task or priority.<br>បច្ចុប្បន្ន ពួកយើងកំពុងផ្តោតលើការជួសជុលកំហុសពីការអាប់ដេតចុងក្រោយ។ <br> At the moment, we’re focusing on ... the bugs from the last .... <br>រចនាសម្ព័ន្ធ៖ At the moment, we're focusing on + gerund + object + time phrase."
                        },
                        {
                            sentence: "As of today, we have completed 70% of the testing phase.",
                            answer: "As of today, we have completed 70% of the testing phase.",
                            khmer: "<br>📌 You can change “today” to any time:<br>As of this morning<br>As of this week<br>As of June 28th<br>👉Use this to give a status or milestone achieved by a specific date/time.<br>គិតត្រឹមថ្ងៃនេះ ពួកយើងបានបញ្ចប់ 70% នៃដំណាក់កាលសាកល្បង។ <br> As of today, we have ... 70% of the testing .... <br>រចនាសម្ព័ន្ធ៖ As of today, we have + past participle + percentage + object."
                        },
                        {
                            sentence: "As of today, we have completed the backend integration.",
                            answer: "As of today, we have completed the backend integration.",
                            khmer: "<br>📌 You can change “today” to any time:<br>As of this morning<br>As of this week<br>As of June 28th<br>👉Use this to give a status or milestone achieved by a specific date/time.<br>គិតត្រឹមថ្ងៃនេះ ពួកយើងបានបញ្ចប់ការរួមបញ្ចូលផ្នែកខាងក្រោយ។ <br> As of today, we have ... the backend .... <br>រចនាសម្ព័ន្ធ៖ As of today, we have + past participle + object."
                        },
                        {
                            sentence: "As of today, we have contacted all the vendors.",
                            answer: "As of today, we have contacted all the vendors.",
                            khmer: "<br>📌 You can change “today” to any time:<br>As of this morning<br>As of this week<br>As of June 28th<br>👉Use this to give a status or milestone achieved by a specific date/time.<br>គិតត្រឹមថ្ងៃនេះ ពួកយើងបានទំនាក់ទំនងជាមួយអ្នកផ្គត់ផ្គង់ទាំងអស់។ <br> As of today, we have ... all the .... <br>រចនាសម្ព័ន្ធ៖ As of today, we have + past participle + object."
                        }

                    ],
                    " 🧪 C. Future Plans / Next Steps": [
                        {
                            sentence: "✅ By the end of the week, we expect to...",
                            answer: "By the end of the week, we expect to finish testing the app.",
                            khmer: "<br>👉 Use this to show your short-term deadline or goal.<br>នៅចុងសប្តាហ៍នេះ ពួកយើងរំពឹងថានឹងបញ្ចប់ការសាកល្បងកម្មវិធី។ <br> By the end of the week, we expect to ... testing the .... <br>រចនាសម្ព័ន្ធ៖ By the end of + time phrase, subject + expect to + base verb + object."
                        },
                        {
                            sentence: "By the end of the week, we expect to ...",
                            answer: "By the end of the week, we expect to deliver the first draft.",
                            khmer: "<br>👉 Use this to show your short-term deadline or goal.<br>នៅចុងសប្តាហ៍នេះ ពួកយើងរំពឹងថានឹងដឹកជញ្ជូនការសរសេរដំបូង។ <br> By the end of the week, we expect to ... the first .... <br>រចនាសម្ព័ន្ធ៖ By the end of + time phrase, subject + expect to + base verb + object."
                        },
                        {
                            sentence: "✅ We’re planning to.",
                            answer: "We’re planning to meet with the client on Monday.",
                            khmer: "<br>👉 Use this to talk about your future intention or next step.<br>ពួកយើងគ្រោងនឹងជួបជាមួយអតិថិជននៅថ្ងៃច័ន្ទ។ <br> We’re planning to ... with the client on .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + planning to + base verb + object + time phrase."
                        },
                        {
                            sentence: "✅ We’re planning to.",
                            answer: "We’re planning to start the new campaign next month.",
                            khmer: "<br>👉 Use this to talk about your future intention or next step.<br>ពួកយើងគ្រោងនឹងចាប់ផ្តើមយុទ្ធនាការថ្មីនៅខែក្រោយ។ <br> We’re planning to ... the new campaign next .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + planning to + base verb + object + time phrase."
                        },
                        {
                            sentence: "✅ Our next step is to...",
                            answer: "Our next step is to review the customer feedback.",
                            khmer: "<br>👉 Use this to show what your team will focus on after the current task.<br>ជំហានបន្ទាប់របស់យើងគឺពិនិត្យមតិអតិថិជន។ <br> Our next step is to ... the customer .... <br>រចនាសម្ព័ន្ធ៖ Our next step is to + base verb + object."
                        },
                        {
                            sentence: "Our next step is to...",
                            answer: "Our next step is to finalize the design.",
                            khmer: "<br>👉 Use this to show what your team will focus on after the current task.<br>ជំហានបន្ទាប់របស់យើងគឺបញ្ចប់ការរចនា។ <br> Our next step is to ... the .... <br>រចនាសម្ព័ន្ធ៖ Our next step is to + base verb + object."
                        },
                        {
                            sentence: "✅ Once we finish…, we’ll move on to...",
                            answer: "Once we finish the testing phase, we’ll move on to deployment.",
                            khmer: "<br>👉 This helps you explain what comes next in your process.<br>ពេលដែលពួកយើងបញ្ចប់ដំណាក់កាលសាកល្បង យើងនឹងបន្តទៅការដាក់ឱ្យដំណើរការ។ <br> Once we finish ... the testing phase, we’ll move on to ... <br>រចនាសម្ព័ន្ធ៖ Once we finish + gerund + object, subject + will move on to + base verb + object."
                        },
                        {
                            sentence: "Once we finish…, we’ll move on to...",
                            answer: "Once we finish the design review, we’ll move on to development.",
                            khmer: "<br>👉 This helps you explain what comes next in your process.<br>ពេលដែលពួកយើងបញ្ចប់ការពិនិត្យរចនា យើងនឹងបន្តទៅការអភិវឌ្ឍ។ <br> Once we finish ... the design review, we’ll move on to ... <br>រចនាសម្ព័ន្ធ៖ Once we finish + gerund + object, subject + will move on to + base verb + object."
                        },
                        {
                            sentence: "✅ Once we finish…, we’ll move on to...",
                            answer: "Once we complete the report, we’ll move on to presenting the results.",
                            khmer: "<br>👉 This helps you explain what comes next in your process.<br>ពេលដែលពួកយើងបញ្ចប់របាយការណ៍ យើងនឹងបន្តទៅការបង្ហាញលទ្ធផល។ <br> Once we complete the report, we’ll move on to ... the results. <br>រចនាសម្ព័ន្ធ៖ Once we complete + object, subject + will move on to + gerund + object."
                        },
                        {
                            sentence: "✅ Moving forward, we will...",
                            answer: "Moving forward, we will meet twice a week to stay on track.",
                            khmer: "<br>👉 A formal way to show direction for the future.<br>នៅពេលអនាគត ពួកយើងនឹងជួបគ្នា២ដងក្នុងមួយសប្តាហ៍ដើម្បីរក្សាទំនាក់ទំនង។ <br> Moving forward, we will meet twice a week to ... on track. <br>រចនាសម្ព័ន្ធ៖ Moving forward, subject + will + base verb + time phrase + to + base verb."
                        },
                        {
                            sentence:"Moving forward, we’ll focus more on customer engagement.",
                            answer: "Moving forward, we’ll focus more on customer engagement.",
                            khmer: "<br>👉 A formal way to show direction for the future.<br>នៅពេលអនាគត ពួកយើងនឹងផ្តោតលើការចូលរួមរបស់អតិថិជន។ <br> Moving forward, we’ll focus more on ... engagement. <br>រចនាសម្ព័ន្ធ៖ Moving forward, subject + will + base verb + object."
                        },
                        {
                            sentence: "We plan to complete the project by next month.",
                            answer: "We plan to complete the project by next month.",
                            khmer: "<br>👉 Use this to show your future goal or deadline.<br>ពួកយើងគ្រោងនឹងបញ្ចប់គម្រោងនៅខែក្រោយ។ <br> We plan to ... the project by next .... <br>រចនាសម្ព័ន្ធ៖ We plan to + base verb + object + time phrase."
                        },
                        {
                            sentence: "We plan to complete the project by next month.",
                            answer: "We plan to complete the project by next month.",
                            khmer: "ពួកយើងគ្រោងនឹងបញ្ចប់គម្រោងនៅខែក្រោយ។ <br> We plan to ... the project by next .... <br>រចនាសម្ព័ន្ធ៖ We plan to + base verb + object + time phrase."
                        },
                        {
                            sentence: "Next, we will focus on improving user experience.",
                            answer: "Next, we will focus on improving user experience.",
                            khmer: "បន្ទាប់ ពួកយើងនឹងផ្តោតលើការកែលម្អបទពិសោធន៍អ្នកប្រើប្រាស់។ <br> Next, we will focus on ... user .... <br>រចនាសម្ព័ន្ធ៖ Next, we will focus on + gerund + object."
                        },
                        {
                            sentence: "Next, we plan to implement the new features.",
                            answer: "Next, we plan to implement the new features.",
                            khmer: "បន្ទាប់ ពួកយើងគ្រោងនឹងអនុវត្តមុខងារថ្មីៗ។ <br> Next, we plan to ... the new .... <br>រចនាសម្ព័ន្ធ៖ Next, we plan to + base verb + object."
                        },
                        {
                            sentence: "Our next step is to conduct a user acceptance test.",
                            answer: "Our next step is to conduct a user acceptance test.",
                            khmer: "ជំហានបន្ទាប់របស់យើងគឺធ្វើការសាកល្បងទទួលយកដោយអ្នកប្រើប្រាស់។ <br> Our next step is to ... a user acceptance .... <br>រចនាសម្ព័ន្ធ៖ Our next step is to + base verb + object."
                        },
                        {
                            sentence: "We are aiming to launch the product by the end of the quarter.",
                            answer: "We are aiming to launch the product by the end of the quarter.",
                            khmer: "ពួកយើងមានគោលបំណងដាក់ឱ្យដំណើរការផលិតផលនៅចុងត្រីមាសនេះ។ <br> We are aiming to ... the product by the end of the .... <br>រចនាសម្ព័ន្ធ៖ We are aiming to + base verb + object + time phrase."
                        },
                        {
                            sentence: "The team will start developing the mobile application next month.",
                            answer: "The team will start developing the mobile application next month.",
                            khmer: "ក្រុមការងារនឹងចាប់ផ្តើមបង្កើតកម្មវិធីទូរស័ព្ទនៅខែក្រោយ។ <br> The team will start ... the mobile application next .... <br>រចនាសម្ព័ន្ធ៖ The team will start + gerund + object + time."
                        },
                        {
                            sentence: "Our priority for the upcoming weeks is to optimize performance.",
                            answer: "Our priority for the upcoming weeks is to optimize performance.",
                            khmer: "អាទិភាពរបស់យើងសម្រាប់សប្តាហ៍ខាងមុខគឺបង្កើនប្រសិទ្ធភាពនៃការអនុវត្ត។ <br> Our priority for the upcoming weeks is to ... performance. <br>រចនាសម្ព័ន្ធ៖ Our priority for + time phrase + is to + base verb + object."
                        }
                    ],
                    " 🧪 D. Time-based Reports": [
                        {
                            sentence: "As of this morning, we’ve completed about 60% of the work.",
                            answer: "As of this morning, we’ve completed about 60% of the work.",
                            khmer: "គិតត្រឹមព្រឹកនេះ ពួកយើងបានបញ្ចប់ប្រហែល 60% នៃការងារហើយ។ <br> As of ... morning, we’ve completed about 60% of the .... <br>រចនាសម្ព័ន្ធ៖ As of [date/time], subject + have/has + past participle + percentage + object."
                        },
                        {
                            sentence: "By the end of the week, we expect to finalize the report.",
                            answer: "By the end of the week, we expect to finalize the report.",
                            khmer: "ត្រឹមចុងសប្តាហ៍នេះ ពួកយើងរំពឹងថានឹងបញ្ចប់របាយការណ៍។ <br> By the end of the ..., we expect to ... the .... <br>រចនាសម្ព័ន្ធ៖ By the end of [time], subject + expect to + base verb + object."
                        },
                        {
                            sentence: "We’re on track to finish the project by next Friday.",
                            answer: "We’re on track to finish the project by next Friday.",
                            khmer: "ពួកយើងកំពុងដំណើរការទៅមុខដើម្បីបញ្ចប់គម្រោងត្រឹមថ្ងៃសុក្រសប្តាហ៍ក្រោយ។ <br> We’re on track to ... the project by next .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + on track to + base verb + object + by [date/time]."
                        },
                        {
                            sentence: "As of yesterday, we haven't received all the necessary documents.",
                            answer: "As of yesterday, we haven't received all the necessary documents.",
                            khmer: "គិតត្រឹមម្សិលមិញ ពួកយើងមិនទាន់ទទួលបានឯកសារចាំបាច់ទាំងអស់នៅឡើយទេ។ <br> As of ..., we haven't received all the necessary .... <br>រចនាសម្ព័ន្ធ៖ As of [date/time], subject + have/has + not + past participle + object."
                        },
                        {
                            sentence: "By the end of the day, all tasks should be assigned.",
                            answer: "By the end of the day, all tasks should be assigned.",
                            khmer: "ត្រឹមចុងថ្ងៃនេះ កិច្ចការទាំងអស់គួរតែត្រូវបានចាត់តាំងរួចរាល់។ <br> By the end of the ..., all tasks should be .... <br>រចនាសម្ព័ន្ធ៖ By the end of [time], object + should be + past participle."
                        }
                    ],
                    " 🧪 E. Communicating Delays or Setbacks Politely": [
                        {
                            sentence: "There has been a slight delay due to unforeseen circumstances.",
                            answer: "There has been a slight delay due to unforeseen circumstances.",
                            khmer: "មានការពន្យារពេលបន្តិចបន្តួចដោយសារកាលៈទេសៈដែលមិនបានមើលឃើញទុកជាមុន។ <br> There has been a slight ... due to unforeseen .... <br>រចនាសម្ព័ន្ធ៖ There has been a slight delay due to + noun phrase."
                        },
                        {
                            sentence: "We’re running slightly behind schedule because of a technical issue.",
                            answer: "We’re running slightly behind schedule because of a technical issue.",
                            khmer: "ពួកយើងកំពុងយឺតយ៉ាវបន្តិចបន្តួចដោយសារបញ្ហាបច្ចេកទេស។ <br> We’re running slightly behind ... because of a technical .... <br>រចនាសម្ព័ន្ធ៖ We are running slightly behind schedule because of + noun phrase."
                        },
                        {
                            sentence: "We’ve encountered a minor issue, but we’re working on it.",
                            answer: "We’ve encountered a minor issue, but we’re working on it.",
                            khmer: "ពួកយើងបានជួបបញ្ហាតូចមួយ ប៉ុន្តែពួកយើងកំពុងដោះស្រាយវា។ <br> We’ve encountered a minor ..., but we’re working on .... <br>រចនាសម្ព័ន្ធ៖ We've encountered a minor issue, but we're working on it."
                        },
                        {
                            sentence: "Unfortunately, we’ve experienced a small setback with the server migration.",
                            answer: "Unfortunately, we’ve experienced a small setback with the server migration.",
                            khmer: "ជាអកុសល ពួកយើងបានជួបប្រទះការរអាក់រអួលបន្តិចបន្តួចជាមួយនឹងការផ្លាស់ប្តូរម៉ាស៊ីនមេ។ <br> Unfortunately, we’ve experienced a small ... with the server .... <br>រចនាសម្ព័ន្ធ៖ Unfortunately, subject + have/has + experienced a small setback with + noun phrase."
                        },
                        {
                            sentence: "The delivery of materials has been postponed, which will affect the timeline.",
                            answer: "The delivery of materials has been postponed, which will affect the timeline.",
                            khmer: "ការដឹកជញ្ជូនសម្ភារៈត្រូវបានពន្យារពេល ដែលនឹងប៉ះពាល់ដល់កាលកំណត់។ <br> The delivery of materials has been ..., which will affect the .... <br>រចនាសម្ព័ន្ធ៖ The delivery of [noun] has been postponed, which will affect the timeline."
                        },
                        {
                            sentence: "✅ There has been a slight delay due to..",
                            answer: "There has been a slight delay due to a technical issue.",
                            khmer: "📌 Tip: 'slight' makes it sound less serious.<br>👉 Use this to explain a delay clearly and politely.<br>មានការពន្យារពេលបន្តិចបន្តួចដោយសារបញ្ហាបច្ចេកទេស។ <br> There has been a slight ... due to a technical .... <br>រចនាសម្ព័ន្ធ៖ There has been a slight delay due to + noun phrase."
                        },
                        {
                            sentence: "There has been a slight delay due to..",
                            answer: "There has been a slight delay due to unexpected weather conditions.",
                            khmer: "📌 Tip: 'slight' makes it sound less serious.<br>មានការពន្យារពេលបន្តិចបន្តួចដោយសារប្រភេទអាកាសធាតុដែលមិនបានរំពឹងទុក។ <br> There has been a slight ... due to unexpected weather .... <br>រចនាសម្ព័ន្ធ៖ There has been a slight delay due to + noun phrase."
                        },
                        {
                            sentence: "✅ We’re running slightly behind schedule because...",
                            answer: "We’re running slightly behind schedule because of a delay in material delivery.",
                            khmer: "📌 Tip: 'slight' makes it sound less serious.<br>👉 Use this if the project isn’t on time — but not very late.<br>ពួកយើងកំពុងយឺតយ៉ាវបន្តិចបន្តួចដោយសារការពន្យារពេលក្នុងការដឹកជញ្ជូនសម្ភារៈ។ <br> We’re running slightly behind ... because of a delay in material .... <br>រចនាសម្ព័ន្ធ៖ We are running slightly behind schedule because of + noun phrase."
                        },
                        {
                            sentence: "✅ We’re running slightly behind schedule because...",
                            answer: "We’re running slightly behind schedule because of unexpected feedback.",
                            khmer: "📌 Tip: 'slight' makes it sound less serious.<br>👉 Use this if the project isn’t on time — but not very late.<br>ពួកយើងកំពុងយឺតយ៉ាវបន្តិចបន្តួចដោយសារមតិយោបល់ដែលមិនបានរំពឹងទុក។ <br> We’re running slightly behind ... because of unexpected .... <br>រចនាសម្ព័ន្ធ៖ We are running slightly behind schedule because of + noun phrase."
                        },
                        {
                            sentence:"✅ We’re running slightly behind schedule because...",
                            answer: "We’re running slightly behind schedule because a key team member is sick.",
                            khmer: "📌 Tip: 'slight' makes it sound less serious.<br>👉 Use this if the project isn’t on time — but not very late.<br>ពួកយើងកំពុងយឺតយ៉ាវបន្តិចបន្តួចដោយសារជាសមាជិកសំខាន់ម្នាក់ក្នុងក្រុមជំងឺ។ <br> We’re running slightly behind ... because a key team member is .... <br>រចនាសម្ព័ន្ធ៖ We are running slightly behind schedule because + noun phrase."
                        },
                        {
                            sentence: "✅ There has been a slight delay due to..",
                            answer: "There has been a slight delay due to a delay in the supply chain.",
                            khmer: " 📌 Tip: 'slight' makes it sound less serious.<br>👉 Use this to explain a delay clearly and politely.<br>មានការពន្យារពេលបន្តិចបន្តួចដោយសារការពន្យារពេលក្នុងខ្សែសង្វាក់ផ្គត់ផ្គង់។ <br> There has been a slight ... due to a delay in the supply .... <br>រចនាសម្ព័ន្ធ៖ There has been a slight delay due to + noun phrase."
                        },
                        {
                            sentence: "✅ We’ve encountered a minor issue with...",
                            answer: "We’ve encountered a minor issue, but we’re working on it.",
                            khmer: "📌 Tip: Saying “minor issue” shows you’re handling it.<br>👉 A polite and positive way to say there's a problem.<br>ពួកយើងបានជួបបញ្ហាតូចមួយ ប៉ុន្តែពួកយើងកំពុងដោះស្រាយវា។ <br> We’ve encountered a minor ..., but we’re working on .... <br>រចនាសម្ព័ន្ធ៖ We've encountered a minor issue, but we're working on it."
                        },
                        {
                            sentence: "We’ve encountered a minor issue with the software update, but we’re addressing it.",
                            answer: "We’ve encountered a minor issue with the software update, but we’re addressing it.",
                            khmer: "📌 Tip: Saying “minor issue” shows you’re handling it.<br>👉 A polite and positive way to say there's a problem.<br>ពួកយើងបានជួបបញ្ហាតូចមួយជាមួយនឹងការធ្វើបច្ចុប្បន្នភាពកម្មវិធី ប៉ុន្តែពួកយើងកំពុងដោះស្រាយវា។ <br> We’ve encountered a minor ... with the software ..., but we’re addressing it. <br>រចនាសម្ព័ន្ធ៖ We've encountered a minor issue with + noun phrase, but we're addressing it."
                        },
                        {
                            sentence: "✅ We’ve encountered a minor issue with...",
                            answer: "We’ve encountered a minor issue with the payment system.",
                            khmer: "📌 Tip: Saying “minor issue” shows you’re handling it.<br>👉 A polite and positive way to say there's a problem.<br>ពួកយើងបានជួបបញ្ហាតូចមួយជាមួយនឹងប្រព័ន្ធបង់ប្រាក់ ប៉ុន្តែពួកយើងកំពុងដោះស្រាយវា។ <br> We’ve encountered a minor ... with the payment .... <br>រចនាសម្ព័ន្ធ៖ We've encountered a minor issue with + noun phrase."
                        },
                        
                        {
                            sentence: "Unfortunately, we’ve experienced a small setback with..",
                            answer: "Unfortunately, we’ve experienced a small setback with the project timeline.",
                            khmer: "ជាអកុសល ពួកយើងបានជួបប្រទះការរអាក់រអួលបន្តិចបន្តួចជាមួយនឹងកាលវិភាគគម្រោង។ <br> Unfortunately, we’ve experienced a small ... with the project .... <br>រចនាសម្ព័ន្ធ៖ Unfortunately, subject + have/has + experienced a small setback with + noun phrase."
                        },
                        {
                            sentence: "Unfortunately, we’ve experienced a small setback with..",
                            answer: "Unfortunately, we’ve experienced a small setback with the budget approval process.",
                            khmer: "ជាអកុសល ពួកយើងបានជួបប្រទះការរអាក់រអួលបន្តិចបន្តួចជាមួយនឹងដំណើរការអនុម័តថវិកា។ <br> Unfortunately, we’ve experienced a small ... with the budget approval .... <br>រចនាសម្ព័ន្ធ៖ Unfortunately, subject + have/has + experienced a small setback with + noun phrase."
                        },
                        {
                            sentence: "✅ There has been a slight delay due to..",
                            answer: "There has been a slight delay due to a supplier error.",
                            khmer: "📌 Tip: 'slight' makes it sound less serious.<br>👉 Use this to explain a delay clearly and politely.<br>មានការពន្យារពេលបន្តិចបន្តួចដោយសារកំហុសរបស់អ្នកផ្គត់ផ្គង់។ <br> There has been a slight ... due to a supplier .... <br>រចនាសម្ព័ន្ធ៖ There has been a slight delay due to + noun phrase."
                        },
                        {
                           sentence: "✅ We're working to resolve this as quickly as possible.",
                           answer: "We're working to resolve this as quickly as possible and will keep you updated.",
                            khmer: "👉 Use this to reassure your client or team.<br>ពួកយើងកំពុងដោះស្រាយបញ្ហានេះឲ្យបានលឿនបំផុត ហើយនឹងរក្សាទំនាក់ទំនងជាមួយអ្នក។ <br> We're working to resolve this as quickly as possible and will keep you updated. <br>រចនាសម្ព័ន្ធ៖ Subject + be + working to resolve this as quickly as possible and will keep you updated."
                        },
                        {
                            sentence: "✅ We're working to resolve this as quickly as possible.",
                            answer: "We're working to resolve this as quickly as possible and will provide a new timeline soon.",
                            khmer: "👉 Use this to reassure your client or team.<br>ពួកយើងកំពុងដោះស្រាយបញ្ហានេះឲ្យបានលឿនបំផុត ហើយនឹងផ្តល់កាលវិភាគថ្មីឲ្យអ្នកឆាប់ៗនេះ។ <br> We're working to resolve this as quickly as possible and will provide a new timeline soon. <br>រចនាសម្ព័ន្ធ៖ Subject + be + working to resolve this as quickly as possible and will provide a new timeline soon."
                        },
                        {
                            sentence: "✅ We’ll keep you posted / updated.",
                            answer: "We’ll keep you posted once it’s fixed.",
                            khmer: "👉 A polite way to end your message and promise follow-up.<br>ពួកយើងនឹងរក្សាទំនាក់ទំនងជាមួយអ្នកនៅពេលវាត្រូវបានជួសជុល។ <br> We’ll keep you posted once it’s fixed. <br>រចនាសម្ព័ន្ធ៖ Subject + will keep you posted once it’s fixed."
                        },
                        {
                            sentence: "✅ We’ll keep you posted / updated.",
                            answer: "We’ll keep you updated on any progress.",
                            khmer: "👉 A polite way to end your message and promise follow-up.<br>ពួកយើងនឹងរក្សាទំនាក់ទំនងជាមួយអ្នកអំពីការរីកចម្រើនណាមួយ។ <br> We’ll keep you updated on any progress. <br>រចនាសម្ព័ន្ធ៖ Subject + will keep you updated on any progress."
                        },

                    ],
                    "🧪 F. Offering Help / Polite Closings": [
                        {
                            sentence: "✅ Let me know if you need anything else.",
                            answer: "Let me know if you need anything else before the deadline.",
                            khmer: "🧠 These phrases are great for:<br>Ending emails politely<br>Closing phone or video calls<br>Wrapping up meetings or support conversations<br>ប្រាប់ខ្ញុំផងបើអ្នកត្រូវការអ្វីផ្សេងទៀតមុនពេលកំណត់។ <br> Let me know if you ... anything else before the .... <br>រចនាសម្ព័ន្ធ៖ Let me know if + subject + need + object + time phrase."
                        },
                        {
                            sentence: "✅ Let me know if you need anything else.",
                            answer: "Let me know if I can clarify anything.",
                            khmer: "🧠 These phrases are great for:<br>Ending emails politely<br>Closing phone or video calls<br>Wrapping up meetings or support conversations<br>ប្រាប់ខ្ញុំផងបើខ្ញុំអាចបំភ្លឺអ្វីបាន។ <br> Let me know if I can ... .... <br>រចនាសម្ព័ន្ធ៖ Let me know if + subject + can + base verb + object."
                        },
                        {
                            sentence: "✅ Please feel free to reach out anytime..",
                            answer: "Please feel free to reach out anytime if you have questions.",
                            khmer: "🧠 These phrases are great for:<br>Ending emails politely<br>Closing phone or video calls<br>Wrapping up meetings or support conversations<br>សូមកុំស្ទាក់ស្ទើរក្នុងការទាក់ទងមកខ្ញុំគ្រប់ពេល ប្រសិនបើអ្នកមានសំណួរ។ <br> Please feel free to ... out anytime if you ... questions. <br>រចនាសម្ព័ន្ធ៖ Please feel free to + base verb + anytime if + subject + have + object."
                        },
                        {
                            sentence: "✅ Please feel free to reach out anytime.",
                            answer: "Feel free to contact me if anything changes.",
                            khmer: "🧠 These phrases are great for:<br>Ending emails politely<br>Closing phone or video calls<br>Wrapping up meetings or support conversations<br>កុំស្ទាក់ស្ទើរក្នុងការទាក់ទងមកខ្ញុំប្រសិនបើមានអ្វីផ្លាស់ប្តូរ។ <br> Feel free to ... me if anything .... <br>រចនាសម្ព័ន្ធ៖ Feel free to + base verb + object + if + subject + changes."
                        },
                        {
                            sentence: "✅ I’d be happy to assist you.",
                            answer: "I’d be happy to assist you with the installation process.",
                            khmer: "🧠 These phrases are great for:<br>Ending emails politely<br>Closing phone or video calls<br>Wrapping up meetings or support conversations<br>ខ្ញុំរីករាយនឹងជួយអ្នកក្នុងការដំឡើង។ <br> I’d be happy to ... you with the installation .... <br>រចនាសម្ព័ន្ធ៖ I'd be happy to + base verb + object + with + noun phrase."
                        },
                        {
                            sentence: "✅ I’d be happy to assist you.",
                            answer: "I’d be happy to help you review the documents.",
                            khmer: "🧠 These phrases are great for:<br>Ending emails politely<br>Closing phone or video calls<br>Wrapping up meetings or support conversations<br>ខ្ញុំរីករាយនឹងជួយអ្នកពិនិត្យឯកសារ។ <br> I’d be happy to ... you review the .... <br>រចនាសម្ព័ន្ធ៖ I'd be happy to + help + object + base verb + object."
                        },
                        {
                            sentence: "✅ I’ll be here if you have any questions.",
                            answer: "I’ll be here if you have any questions during the demo.",
                            khmer: "🧠 These phrases are great for:<br>Ending emails politely<br>Closing phone or video calls<br>Wrapping up meetings or support conversations<br>ខ្ញុំនឹងនៅទីនេះប្រសិនបើអ្នកមានសំណួរណាមួយក្នុងអំឡុងពេលបង្ហាញ។ <br> I’ll be here if you ... any questions during the .... <br>រចនាសម្ព័ន្ធ៖ I'll be here if + subject + have + any questions + during + noun."
                        },
                        {
                            sentence: "✅ I’ll be here if you have any questions.",
                            answer: "I’ll be available this afternoon in case anything comes up.",
                            khmer: "🧠 These phrases are great for:<br>Ending emails politely<br>Closing phone or video calls<br>Wrapping up meetings or support conversations<br>ខ្ញុំនឹងទំនេររសៀលនេះក្នុងករណីមានអ្វីកើតឡើង។ <br> I’ll be available this ... in case anything ... up. <br>រចនាសម្ព័ន្ធ៖ I'll be available + time phrase + in case + subject + comes up."
                        },
                        {
                            sentence: "✅ Don’t hesitate to get in touch.",
                            answer: "Don’t hesitate to get in touch if you experience any issues.",
                            khmer: "🧠 These phrases are great for:<br>Ending emails politely<br>Closing phone or video calls<br>Wrapping up meetings or support conversations<br>កុំស្ទាក់ស្ទើរក្នុងការទាក់ទងមកប្រសិនបើអ្នកជួបបញ្ហាណាមួយ។ <br> Don’t hesitate to ... in touch if you ... any .... <br>រចនាសម្ព័ន្ធ៖ Don't hesitate to + base verb + if + subject + experience + any issues."
                        },
                        {
                            sentence: "✅ Don’t hesitate to get in touch.",
                            answer: "Don’t hesitate to call me if you need support.",
                            khmer: "🧠 These phrases are great for:<br>Ending emails politely<br>Closing phone or video calls<br>Wrapping up meetings or support conversations<br>កុំស្ទាក់ស្ទើរក្នុងការទូរស័ព្ទមកខ្ញុំប្រសិនបើអ្នកត្រូវការជំនួយ។ <br> Don’t hesitate to ... me if you ... support. <br>រចនាសម្ព័ន្ធ៖ Don't hesitate to + base verb + object + if + subject + need + object."
                        }
                    ],
                   
                    
                    "🔁 Ways to say 'I understand'":[
                        {sentence: "I see what you mean.",
                            khmer: "ខ្ញុំយល់ថាអ្នកមានអ្វីក្នុងចិត្ត។ <br> For Example: <br> Structure: I see what you mean about [Topic].<br> I see what you mean about the weather.", 
                            answer: "I see what you mean about the weather."},
                        {sentence: "I get it.",
                            khmer: "ខ្ញុំយល់ហើយ។ <br> For Example: <br> Structure: I get it, [Name].<br> I get it, John.", 
                            answer: "I get it, John."},
                        {sentence: "I understand.",
                            khmer: "ខ្ញុំយល់។ <br> For Example: <br> Structure: I understand your point about [Topic].<br> I understand your point about the project.",
                             answer: "I understand your point about the project."},
                        {sentence: "That makes sense.",
                            khmer: "វាមានអត្ថន័យ។ <br> For Example: <br> Structure: That makes sense, [Name].<br> That makes sense, Sarah.",
                            answer: "That makes sense, Sarah."},
                        {sentence: "I follow you.",
                            khmer: "ខ្ញុំតាមអ្នក។ <br> For Example: <br> Structure: I follow you on that, [Name].<br> I follow you on that, Mike.",
                            answer: "I follow you on that, Mike."},
                        {sentence: "I catch your drift.",
                            khmer: "ខ្ញុំចាប់យកការប្រាប់របស់អ្នក។ <br> For Example: <br> Structure: I catch your drift about [Topic].<br> I catch your drift about the new policy.",
                            answer: "I catch your drift about the new policy."},
                        {sentence: "I comprehend.",
                            khmer: "ខ្ញុំយល់។ <br> For Example: <br> Structure: I comprehend your explanation about [Topic].<br> I comprehend your explanation about the rules.",
                            answer: "I comprehend your explanation about the rules."},
                        {sentence: "I grasp it.",
                            khmer: "ខ្ញុំចាប់យកវា។ <br> For Example: <br> Structure: I grasp it, [Name].<br> I grasp it, Lisa.",
                            answer: "I grasp it, Lisa."},
                        {sentence: "I acknowledge.",
                            khmer: "ខ្ញុំទទួលស្គាល់។ <br> For Example: <br> Structure: I acknowledge your concerns about [Topic].<br> I acknowledge your concerns about the budget.",
                            answer: "I acknowledge your concerns about the budget."},
                        {sentence: "I recognize.",
                            khmer: "ខ្ញុំស្គាល់។ <br> For Example: <br> Structure: I recognize the importance of [Topic].<br> I recognize the importance of teamwork.",
                            answer: "I recognize the importance of teamwork."},
                        { sentence:"I got it! I'll do it now.",
                            khmer: "ខ្ញុំបានវា។ <br> For Example: <br> Structure: I got it, [Name].<br> I got it, Tom.",
                            answer: "I got it! I'll do it now."},
                        { sentence:"I understand what you’re saying, ",
                            khmer: "ខ្ញុំយល់ថាអ្នកកំពុងនិយាយអំពីអ្វី។ <br> For Example: <br> Structure: I understand what you’re saying about [Topic].<br> I understand what you’re saying about the project.",
                            answer: "I understand what you’re saying about the project."},
                        { sentence:"I see your point, ",
                            khmer: "ខ្ញុំមើលឃើញចំណុចរបស់អ្នក។ <br> For Example: <br> Structure: I see your point about [Topic].<br> I see your point about the new rules.",
                            answer: "I see your point about the new rules."},
                        {sentence:"I understand your perspective, ",
                            khmer: "ខ្ញុំយល់ពីទស្សនៈរបស់អ្នក។ <br> For Example: <br> Structure: I understand your perspective on [Topic].<br> I understand your perspective on the situation.",
                            answer: "I understand your perspective on the situation."},
                        {sentence:"I’m with you on this, ",
                            khmer: "ខ្ញុំជាមួយអ្នកលើនេះ។ <br> For Example: <br> Structure: I’m with you on this, [Name].<br> I’m with you on this, Alex.",
                            answer: "I’m with you on this, Alex."},
                        {sentence:"I’m on the same page, ",
                            khmer: "ខ្ញុំស្ថិតនៅលើទំព័រដូចគ្នា។ <br> For Example: <br> Structure: I’m on the same page about [Topic].<br> I’m on the same page about the plan.",
                            answer: "I’m on the same page about the plan."},
                        {sentence:"I’m in agreement, ",
                            khmer: "ខ្ញុំយល់ព្រម។ <br> For Example: <br> Structure: I’m in agreement with you on [Topic].<br> I’m in agreement with you on the decision.",
                            answer: "I’m in agreement with you on the decision."},
                        {sentence:"I’m aligned with you, ",
                            khmer: "ខ្ញុំសម្របសម្រួលជាមួយអ្នក។ <br> For Example: <br> Structure: I’m aligned with you on [Topic].<br> I’m aligned with you on the strategy.",
                            answer: "I’m aligned with you on the strategy."},
                        {sentence:"I’m on board, ",
                            khmer: "ខ្ញុំស្ថិតនៅលើកប៉ាល់។ <br> For Example: <br> Structure: I’m on board with your idea about [Topic].<br> I’m on board with your idea about the project.",
                            answer: "I’m on board with your idea about the project."},
                        {sentence:"I’m in sync with you, ",
                            khmer: "ខ្ញុំស្ថិតនៅក្នុងការសម្របសម្រួលជាមួយអ្នក។ <br> For Example: <br> Structure: I’m in sync with you on [Topic].<br> I’m in sync with you on the timeline.",
                            answer: "I’m in sync with you on the timeline."},
                        {sentence:"I’m on the same wavelength, ",
                            khmer: "ខ្ញុំស្ថិតនៅលើវ៉ែលវេនដូចគ្នា។ <br> For Example: <br> Structure: I’m on the same wavelength about [Topic].<br> I’m on the same wavelength about the project.",
                            answer: "I’m on the same wavelength about the project."},
                        {sentence:"I’m in tune with you, ",
                            khmer: "ខ្ញុំស្ថិតនៅក្នុងតន្ត្រីជាមួយអ្នក។ <br> For Example: <br> Structure: I’m in tune with you on [Topic].<br> I’m in tune with you on the plan.",
                            answer: "I’m in tune with you on the plan."},
                        {sentence:"I’m on the same track, ",
                            khmer: "ខ្ញុំស្ថិតនៅលើផ្លូវដូចគ្នា។ <br> For Example: <br> Structure: I’m on the same track about [Topic].<br> I’m on the same track about the project.",
                            answer: "I’m on the same track about the project."},


                    ],
                   //Common English phrases
                    "Words": [
                        { sentence: "apple", khmer: "ផ្លែប៉ោម (noun) <br> For Example: <br> Structure: This is a/an [Noun].<br> This is an apple.", answer: "This is an apple." },
                        { sentence: "banana", khmer: "ចេក (noun) <br> For Example: <br> Structure: I like [Noun]s.<br> I like bananas.", answer: "I like bananas." },
                        { sentence: "cat", khmer: "ឆ្មា (noun) <br> For Example: <br> Structure: A [Noun] is [Adjective].<br> A cat is cute.", answer: "A cat is cute." },
                        { sentence: "dog", khmer: "ឆ្កែ (noun) <br> For Example: <br> Structure: I have a [Noun].<br> I have a dog.", answer: "I have a dog." },
                        { sentence: "house", khmer: "ផ្ទះ (noun) <br> For Example: <br> Structure: My [Noun] is [Adjective].<br> My house is big.", answer: "My house is big." },
                        { sentence: "flower", khmer: "ផ្កា (noun) <br> For Example: <br> Structure: This [Noun] smells [Adjective].<br> This flower smells good.", answer: "This flower smells good." },
                        { sentence: "water", khmer: "ទឹក (noun) <br> For Example: <br> Structure: I drink [Noun].<br> I drink water.", answer: "I drink water." },
                        { sentence: "friend", khmer: "មិត្តភ័ក្តិ (noun) <br> For Example: <br> Structure: He is my [Noun].<br> He is my friend.", answer: "He is my friend." },
                        { sentence: "book", khmer: "សៀវភៅ (noun) <br> For Example: <br> Structure: I read a [Noun].<br> I read a book.", answer: "I read a book." },
                        { sentence: "school", khmer: "សាលារៀន (noun) <br> For Example: <br> Structure: I go to [Noun].<br> I go to school.", answer: "I go to school." },
                        { sentence: "surprising", khmer: "គួរឱ្យភ្ញាក់ផ្អើល (adjective) <br> For Example: <br> Structure: It is [Adjective].<br> It is surprising.", answer: "It is surprising." },
                        { sentence: "expected", khmer: "បានរំពឹងទុក (adjective) <br> For Example: <br> Structure: It was [Adjective].<br> It was expected.", answer: "It was expected." },
                        { sentence: "elegant", khmer: "ប្រណិត ឯកស្សល្បី / សង្ហា / មានស្មារតីសិចស៊ី បែបឆ្លាតវៃ <br>រចនាបថសាមញ្ញ តែទាក់ទាញ និងមានភាពទាន់សម័យ (adjective)<br>🔹 English Meaning:<br>1. Graceful and stylish in appearance or manner<br>2. Simple but clever and effective (often in ideas or design) <br> For Example: <br> Structure: She looks [Adjective].<br> She looks elegant.<br>1. She looked elegant in that black dress.<br>→ នាងមើលទៅស្រស់ស្អាត និងឯកស្សល្បីក្នុងឈុតខ្មៅនោះ។<br>2. The solution was elegant in its simplicity.<br>→ ដំណោះស្រាយនោះមានភាពឆ្លាតវៃដោយសារតែវាសាមញ្ញបែបស្អាត។", answer: "She looks elegant." },
                        { sentence: "graceful", khmer: "ស្រស់ស្អាត / មានសម្រស់ (adjective) <br> For Example: <br> Structure: She is [Adjective].<br> She is graceful.", answer: "She is graceful." },
                        { sentence: "refined", khmer: "មានភាពប្រណិត / ឆ្លាតវៃ (adjective) <br> For Example: <br> Structure: His manners are [Adjective].<br> His manners are refined.", answer: "His manners are refined." },
                        { sentence: "distinguished", khmer: "លេចធ្លោ / មានសក្តានុពល (adjective) <br> For Example: <br> Structure: He is a [Adjective] gentleman.<br> He is a distinguished gentleman.", answer: "He is a distinguished gentleman." },
                        { sentence: "dignified", khmer: "មានសេចក្តីថ្លៃថ្នូរ (adjective) <br> For Example: <br> Structure: She has a [Adjective] presence.<br> She has a dignified presence.", answer: "She has a dignified presence." },
                        { sentence: "debonair", khmer: "សង្ហា / មានសម្រស់ (adjective) <br> For Example: <br> Structure: He looks [Adjective].<br> He looks debonair.", answer: "He looks debonair." },
                        { sentence: "surprisingly", khmer: "គួរឱ្យភ្ញាក់ផ្អើល (adverb) <br> For Example: <br> Structure: [Adverb] [Verb].<br> Surprisingly, he won the game.", answer: "Surprisingly, he won the game." },
                        { sentence: "expectedly", khmer: "បានរំពឹងទុក (adverb) <br> For Example: <br> Structure: [Adverb] [Verb].<br> Expectedly, she passed the exam.", answer: "Expectedly, she passed the exam." },
                        { sentence: "elegantly", khmer: "យ៉ាងឯកស្សល្បី (adverb) <br> For Example: <br> Structure: She danced [Adverb].<br> She danced elegantly.", answer: "She danced elegantly." },
                        { sentence: "in spite of", khmer: "ទោះបីជា (prepositional phrase) <br> For Example: <br> Structure: In spite of [Noun/Gerund Phrase], [Sentence].<br> In spite of her fear, she gave the speech.", answer: "In spite of her fear, she gave the speech." },
                        { sentence: "despite", khmer: "ទោះបីជា (preposition) <br> For Example: <br> Structure: Despite [Noun/Gerund Phrase], [Sentence].<br> Despite being tired, he kept working.", answer: "Despite being tired, he kept working." },
                        { sentence: "in spite of", khmer: "ទោះបីជា (prepositional phrase) <br> For Example: <br> Structure: In spite of [Noun/Gerund Phrase], [Sentence].<br> In spite of the rain, we went out.", answer: "In spite of the rain, we went out." },
                        { sentence: "despite", khmer: "ទោះបីជា (preposition) <br> For Example: <br> Structure: Despite [Noun/Gerund Phrase], [Sentence].<br> Despite feeling tired, he kept working.", answer: "Despite feeling tired, he kept working." },
                        { sentence: "Although", khmer: "ទោះបីជា (conjunction) <br> For Example: <br> Structure: Although [Sentence 1], [Sentence 2].<br> Although it was cold, we went for a walk.", answer: "Although it was cold, we went for a walk." },
                        { sentence: "followed", khmer: "បានតាមដាន / បានបន្តបន្ទាប់ (verb - past tense) <br> For Example: <br> Structure: Subject + [Verb] + Object.<br> He followed her home.", answer: "He followed her home." },
                        { sentence: "fear", khmer: "ការភ័យខ្លាច (noun) <br> For Example: <br> Structure: [Noun] of [Noun].<br> He felt a sense of fear.", answer: "He felt a sense of fear." },
                        { sentence: "assumption", khmer: "ការសន្មត់ (noun) <br> For Example: <br> Structure: My [Noun] is that [Sentence].<br> My assumption is that he will come.", answer: "My assumption is that he will come." },
                        { sentence: "appearance", khmer: "រូបរាង (noun) <br> For Example: <br> Structure: Her [Noun] was [Adjective].<br> Her appearance was stunning.", answer: "Her appearance was stunning." },
                        { sentence: "as if", khmer: "ដូចជា / ដូចបំណង (conjunction) <br> For Example: <br> Structure: It looks/seems as if [Sentence].<br> It looks as if it's going to rain.", answer: "It looks as if it's going to rain." },
                        { sentence: "gesture", khmer: "កាយវិការ (noun) <br> For Example: <br> Structure: He made a [Adjective] [Noun].<br> He made a welcoming gesture.", answer: "He made a welcoming gesture." },
                        { sentence: "as though", khmer: "ដូចជា / ដូចជាបាន (conjunction) <br> For Example: <br> Structure: He acted as though [Sentence].<br> He acted as though he knew everything.", answer: "He acted as though he knew everything." },
                        { sentence: "in panic", khmer: "ក្នុងស្ថានភាពភ័យខ្លាច (prepositional phrase) <br> For Example: <br> Structure: Someone is in [Noun].<br> They ran in panic.", answer: "They ran in panic." },
                        { sentence: "interchangeably", khmer: "អាចផ្លាស់ប្តូរគ្នាបាន (adverb) <br> For Example: <br> Structure: Can be used [Adverb].<br> These words can be used interchangeably.", answer: "These words can be used interchangeably." },
                        { sentence: "reactions", khmer: "ប្រតិកម្ម (noun - plural) <br> For Example: <br> Structure: People's [Noun] to [Noun].<br> People's reactions to the news were mixed.", answer: "People's reactions to the news were mixed." },
                        { sentence: "imagined", khmer: "បានស្រមៃ (verb - past tense) <br> For Example: <br> Structure: Subject + [Verb] + Object.<br> She imagined a perfect world.", answer: "She imagined a perfect world." },
                        { sentence: "situation", khmer: "ស្ថានភាព (noun) <br> For Example: <br> Structure: The [Adjective] [Noun].<br> The difficult situation.", answer: "The difficult situation." },
                        { sentence: "furious", khmer: "ខឹងខ្លាំងណាស់ (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> He was furious.", answer: "He was furious." },
                        { sentence: "gorgeous", khmer: "ស្រស់ស្អាតខ្លាំងណាស់ (adjective) <br> For Example: <br> Structure: She is [Adjective].<br> She is gorgeous.", answer: "She is gorgeous." },
                        { sentence: "hideous", khmer: "អាក្រក់ខ្លាំងណាស់ (adjective) <br> For Example: <br> Structure: That looks [Adjective].<br> That looks hideous.", answer: "That looks hideous." },
                        { sentence: "exhausted", khmer: "នឿយហត់ខ្លាំងណាស់ (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel exhausted.", answer: "I feel exhausted." },
                        { sentence: "spotless", khmer: "ស្អាតណាស់ (adjective) <br> For Example: <br> Structure: The room is [Adjective].<br> The room is spotless.", answer: "The room is spotless." },
                        { sentence: "filthy", khmer: "កខ្វក់ខ្លាំងណាស់ (adjective) <br> For Example: <br> Structure: My hands are [Adjective].<br> My hands are filthy.", answer: "My hands are filthy." },
                        { sentence: "enormous", khmer: "ធំសម្បើម (adjective) <br> For Example: <br> Structure: An [Adjective] [Noun].<br> An enormous elephant.", answer: "An enormous elephant." },
                        { sentence: "deafening", khmer: "ថ្លង់ណាស់ (adjective) <br> For Example: <br> Structure: A [Adjective] sound.<br> A deafening sound.", answer: "A deafening sound." },
                        { sentence: "starving", khmer: "ឃ្លានខ្លាំងណាស់ (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> I'm starving!", answer: "I'm starving!" },
                        { sentence: "parched", khmer: "ស្រេកទឹកខ្លាំងណាស់ (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel parched.", answer: "I feel parched." },
                        { sentence: "destitute", khmer: "ក្រីក្រខ្លាំងណាស់ (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> They were left destitute.", answer: "They were left destitute." },
                        { sentence: "wealthy", khmer: "អ្នកមាន (adjective) <br> For Example: <br> Structure: A [Adjective] person.<br> A wealthy person.", answer: "A wealthy person." },
                        { sentence: "brilliant", khmer: "ឆ្លាតវៃ (adjective) <br> For Example: <br> Structure: A [Adjective] idea.<br> A brilliant idea.", answer: "A brilliant idea." },
                        { sentence: "ancient", khmer: "បុរាណ (adjective) <br> For Example: <br> Structure: [Adjective] ruins.<br> Ancient ruins.", answer: "Ancient ruins." },
                        { sentence: "infantile", khmer: "ក្មេងណាស់ (adjective) <br> For Example: <br> Structure: [Adjective] behavior.<br> Infantile behavior.", answer: "Infantile behavior." },
                        { sentence: "indolent", khmer: "ខ្ជិលណាស់ (adjective) <br> For Example: <br> Structure: An [Adjective] person.<br> An indolent person.", answer: "An indolent person." },
                        { sentence: "swamped", khmer: "រវល់ខ្លាំងណាស់ (adjective) <br> For Example: <br> Structure: To be [Adjective] with [Noun].<br> I'm swamped with work.", answer: "I'm swamped with work." },
                        { sentence: "elated*", khmer: "រីករាយខ្លាំងណាស់ (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> She felt elated.", answer: "She felt elated." },
                        { sentence: "excruciating", khmer: "ឈឺចាប់ខ្លាំងណាស់ (adjective) <br> For Example: <br> Structure: [Adjective] pain.<br> Excruciating pain.", answer: "Excruciating pain." },
                        { sentence: "strong", khmer: "ខ្លាំង (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> He is strong.", answer: "He is strong." },
                        { sentence: "turn off", khmer: "បិទ (phrasal verb) <br> For Example: <br> Structure: [Verb Phrase] + Object.<br> Please turn off the light.", answer: "Please turn off the light." },
                        { sentence: "honest", khmer: "ស្មោះត្រង់ (adjective) <br> For Example: <br> Structure: An [Adjective] person.<br> An honest person.", answer: "An honest person." },
                        { sentence: "truthfully", khmer: "ដោយស្មោះត្រង់ (adverb) <br> For Example: <br> Structure: To speak [Adverb].<br> Speak truthfully.", answer: "Speak truthfully." },
                        { sentence: "polite", khmer: "សុភាពរាបសារ (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> Be polite.", answer: "Be polite." },
                        { sentence: "cost", khmer: "តម្លៃ (noun) <br> For Example: <br> Structure: The [Noun] of [Object].<br> The cost of the book.", answer: "The cost of the book." },
                        { sentence: "beautiful", khmer: "ស្អាត (adjective) <br> For Example: <br> Structure: A [Adjective] flower.<br> A beautiful flower.", answer: "A beautiful flower." },
                        { sentence: "interesting", khmer: "គួរឱ្យចាប់អារម្មណ៍ (adjective) <br> For Example: <br> Structure: An [Adjective] story.<br> An interesting story.", answer: "An interesting story." },
                        { sentence: "difficult", khmer: "ពិបាក (adjective) <br> For Example: <br> Structure: A [Adjective] task.<br> A difficult task.", answer: "A difficult task." },
                        { sentence: "quick", khmer: "លឿន (adjective) <br> For Example: <br> Structure: A [Adjective] answer.<br> A quick answer.", answer: "A quick answer." },
                        { sentence: "happy", khmer: "សប្បាយចិត្ត (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel happy.", answer: "I feel happy." },
                        { sentence: "sad", khmer: "សោកស្តាយ (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> She is sad.", answer: "She is sad." },
                        { sentence: "angry", khmer: "ខឹង (adjective) <br> For Example: <br> Structure: To get [Adjective].<br> Don't get angry.", answer: "Don't get angry." },
                        { sentence: "tired", khmer: "នឿយហត់ (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel tired.", answer: "I feel tired." },
                        { sentence: "hungry", khmer: "ឃ្លាន (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> I am hungry.", answer: "I am hungry." },
                        { sentence: "thirsty", khmer: "ស្រេកទឹក (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> I am thirsty.", answer: "I am thirsty." },
                        { sentence: "bored", khmer: "គ្មានអារម្មណ៍ចាប់អារម្មណ៍ (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel bored.", answer: "I feel bored." },
                        { sentence: "excited", khmer: "រំភើប (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> They are excited.", answer: "They are excited." },
                        { sentence: "scared", khmer: "ភ័យខ្លាច (adjective) <br> For Example: <br> Structure: To be [Adjective] of [Noun].<br> She is scared of spiders.", answer: "She is scared of spiders." },
                        { sentence: "confused", khmer: "ច្របូកច្របល់ (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel confused.", answer: "I feel confused." },
                        { sentence: "relaxed", khmer: "ស្ងប់ស្ងាត់ (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> He feels relaxed.", answer: "He feels relaxed." },
                        { sentence: "surprised", khmer: "ភ្ញាក់ផ្អើល (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> I was surprised.", answer: "I was surprised." },
                        { sentence: "disappointed", khmer: "ខកចិត្ត (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel disappointed.", answer: "I feel disappointed." },
                        { sentence: "frustrated", khmer: "អស់សំណើច (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel frustrated.", answer: "I feel frustrated." },
                        { sentence: "nervous", khmer: "ក្រួសរាយ (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> She is nervous.", answer: "She is nervous." },
                        { sentence: "proud", khmer: "មានមោទនភាព (adjective) <br> For Example: <br> Structure: To be [Adjective] of [Noun].<br> I am proud of you.", answer: "I am proud of you." },
                        { sentence: "relieved", khmer: "មានអារម្មណ៍ស្ងប់ស្ងាត់ (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel relieved.", answer: "I feel relieved." },
                        { sentence: "embarrassed", khmer: "អៀន (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel embarrassed.", answer: "I feel embarrassed." },
                        { sentence: "grateful", khmer: "អរគុណ (adjective) <br> For Example: <br> Structure: To be [Adjective] for [Noun].<br> I am grateful for your help.", answer: "I am grateful for your help." },
                        { sentence: "hopeful", khmer: "មានសង្ឃឹម (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> We are hopeful.", answer: "We are hopeful." },
                        { sentence: "curious", khmer: "ចង់ដឹង (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> I am curious.", answer: "I am curious." },
                        { sentence: "optimistic", khmer: "មានទស្សនៈវិជ្ជមាន (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> She is optimistic.", answer: "She is optimistic." },
                        { sentence: "pessimistic", khmer: "មានទស្សនៈអវិជ្ជមាន (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> He is pessimistic.", answer: "He is pessimistic." },
                        { sentence: "satisfied", khmer: "ពេញចិត្ត (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> I am satisfied.", answer: "I am satisfied." },
                        { sentence: "disgusted", khmer: "អាក្រក់ចិត្ត (adjective) <br> For Example: <br> Structure: To be [Adjective] with [Noun].<br> I am disgusted with the mess.", answer: "I am disgusted with the mess." },
                        { sentence: "anxious", khmer: "ក្រួសរាយ (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel anxious.", answer: "I feel anxious." },
                        { sentence: "content", khmer: "រីករាយ (adjective) <br> For Example: <br> Structure: To be [Adjective].<br> She is content.", answer: "She is content." },
                        { sentence: "overwhelmed", khmer: "មានអារម្មណ៍ថាអស់សំណើច (adjective) <br> For Example: <br> Structure: To feel [Adjective].<br> I feel overwhelmed.", answer: "I feel overwhelmed." }
                    ],

                    "Common English phrases": [
                        { sentence: "I would rather stay home tonight.", khmer: "ខ្ញុំចង់នៅផ្ទះយប់នេះជាង។ <br> (Expression) <br> Structure: Subject + would rather + base verb <br> Example: I would rather stay home tonight.", answer: "I would rather stay home tonight." },
                        { sentence: "She’d rather eat noodles than rice.", khmer: "នាងចង់ញ៉ាំមីជាងបាយ។ <br> (Expression) <br> Structure: Subject + would rather + base verb + than + noun <br> Example: She’d rather eat noodles than rice.", answer: "She’d rather eat noodles than rice." },
                        { sentence: "I’d rather you stayed home tonight.", khmer: "ខ្ញុំចង់ឱ្យអ្នកនៅផ្ទះយប់នេះ។ <br> (Expression) <br> Structure: Subject + would rather + other subject + past simple <br> Example: I’d rather you stayed home tonight.", answer: "I’d rather you stayed home tonight." },
                        { sentence: "She would rather he didn’t come.", khmer: "នាងចង់ឱ្យគាត់មិនមក។ <br> (Expression) <br> Structure: Subject + would rather + other subject + did not + base verb <br> Example: She would rather he didn’t come.", answer: "She would rather he didn’t come." },
                        { sentence: "She prefers that he doesn't come.", khmer: "នាងចូលចិត្តឱ្យគាត់មិនមក។ <br> (Expression) <br> Structure: Subject + prefers that + subject + does not + base verb <br> Example: She prefers that he doesn't come.", answer: "She prefers that he doesn't come." },
                        { sentence: "We’d rather they arrived earlier", khmer: "ពួកយើងចង់ឱ្យពួកគេមកដល់មុន។ <br> (Expression) <br> Structure: Subject + would rather + other subject + past simple <br> Example: We’d rather they arrived earlier.", answer: "We’d rather they arrived earlier" },
                        { sentence: "In spite of her fear, she gave the speech.", khmer: "ទោះបីជាគាត់ភ័យក៏ដោយ គាត់នៅតែថ្លែងសុន្ទរកថា។ <br> (Conjunction/Prepositional Phrase) <br> Structure: In spite of + noun/gerund + clause <br> Example: In spite of her fear, she gave the speech.", answer: "In spite of her fear, she gave the speech." },
                        { sentence: "Despite being tired, he kept working.", khmer: "ទោះបីជាគាត់នឿយហត់ក៏ដោយ គាត់នៅតែបន្តធ្វើការ។ <br> (Conjunction/Preposition) <br> Structure: Despite + gerund + clause <br> Example: Despite being tired, he kept working.", answer: "Despite being tired, he kept working." },
                        { sentence: "In spite of the rain, we went outside.", khmer: "ទោះបីជាមានភ្លៀងក៏ដោយ ពួកយើងនៅតែចេញទៅខាងក្រៅ។ <br> (Conjunction/Prepositional Phrase) <br> Structure: In spite of + noun + clause <br> Example: In spite of the rain, we went outside.", answer: "In spite of the rain, we went outside." },
                        { sentence: "Despite the noise, I fell asleep quickly.", khmer: "ទោះបីមានសំឡេងរំខានក៏ដោយ ខ្ញុំនៅតែដេកលក់បានលឿន។ <br> (Conjunction/Preposition) <br> Structure: Despite + noun + clause <br> Example: Despite the noise, I fell asleep quickly.", answer: "Despite the noise, I fell asleep quickly." },
                        { sentence: "He talks as if he knows the answer.", khmer: "គាត់និយាយដូចជាគាត់ដឹងចម្លើយ។ <br> (Conjunction) <br> Structure: Clause 1 + as if + clause 2 (present simple) <br> Example: He talks as if he knows the answer.", answer: "He talks as if he knows the answer." },
                        { sentence: "He talks as if he knew the answer. (but he probably doesn’t)", khmer: "គាត់និយាយដូចជាគាត់ដឹងចម្លើយ (ប៉ុន្តែប្រហែលជាគាត់មិនដឹងទេ។) <br> (Conjunction) <br> Structure: Clause 1 + as if + clause 2 (past simple - hypothetical) <br> Example: He talks as if he knew the answer. (but he probably doesn’t)", answer: "He talks as if he knew the answer. (but he probably doesn’t)" },
                        { sentence: "It looks as if they’ve had a shock.", khmer: "វាមើលទៅដូចជាពួកគេទើបទទួលរងការភ្ញាក់ផ្អើល។ <br> (Expression) <br> Structure: It looks as if + clause <br> Example: It looks as if they’ve had a shock.", answer: "It looks as if they’ve had a shock." },
                        { sentence: "It looks as though you’ve not met before.", khmer: "វាមើលទៅដូចជាអ្នកមិនបានជួបគ្នាមុន។ <br> (Expression) <br> Structure: It looks as though + clause <br> Example: It looks as though you’ve not met before.", answer: "It looks as though you’ve not met before." },
                        { sentence: "She moved her lips as if to smile.", khmer: "នាងផ្លាស់ទីបបូរមាត់របស់នាងដូចជាចង់ញញឹម។ <br> (Expression) <br> Structure: Clause + as if + to + base verb <br> Example: She moved her lips as if to smile.", answer: "She moved her lips as if to smile." },
                        { sentence: "They were shouting as though in panic.", khmer: "ពួកគេកំពុងស្រែកដូចជាកំពុងភ័យខ្លាច។ <br> (Conjunction) <br> Structure: Clause 1 + as though + prepositional phrase <br> Example: They were shouting as though in panic.", answer: "They were shouting as though in panic." },
                        { sentence: "She felt as if all her worries had gone.", khmer: "នាងមានអារម្មណ៍ដូចជាការព្រួយបារម្ភទាំងអស់របស់នាងបានបាត់ទៅ។ <br> (Conjunction) <br> Structure: Subject + felt as if + clause (past perfect) <br> Example: She felt as if all her worries had gone.", answer: "She felt as if all her worries had gone." },
                        { sentence: "I’ve got so much work it looks as if I’ll have to stay at home this evening.", khmer: "ខ្ញុំមានការងារច្រើនណាស់ វាមើលទៅដូចជាខ្ញុំត្រូវនៅផ្ទះយប់នេះ។ <br> (Expression) <br> Structure: It looks as if + clause <br> Example: I’ve got so much work it looks as if I’ll have to stay at home this evening.", answer: "I’ve got so much work it looks as if I’ll have to stay at home this evening." },
                        { sentence: "They felt as though they had been given the wrong information.", khmer: "ពួកគេមានអារម្មណ៍ដូចជាពួកគេបានទទួលព័ត៌មានខុស។ <br> (Conjunction) <br> Structure: Subject + felt as though + clause (past perfect passive) <br> Example: They felt as though they had been given the wrong information.", answer: "They felt as though they had been given the wrong information." },
                        { sentence: "You sound as though you're sick.", khmer: "សំឡេងអ្នកដូចជាអ្នកកំពុងជំងឺ។ <br> (Conjunction) <br> Structure: Subject + sound as though + clause <br> Example: You sound as though you're sick.", answer: "You sound as though you're sick." },
                        { sentence: "They acted as if they were rich.", khmer: "ពួកគេធ្វើដូចជាពួកគេមានសម្បត្តិ។ <br> (Conjunction) <br> Structure: Subject + acted as if + clause <br> Example: They acted as if they were rich.", answer: "They acted as if they were rich." },
                        { sentence: "Not only did he lie, but he also blamed me!", khmer: "មិនត្រឹមតែគាត់កុហកទេ គាត់នៅតែបន្ទោសខ្ញុំ។ <br> (Correlative Conjunction) <br> Structure: Not only + auxiliary verb + subject + base verb, but + subject + also + verb <br> Example: Not only did he lie, but he also blamed me!", answer: "Not only did he lie, but he also blamed me!" },
                        { sentence: "Not only is she smart, but she’s also kind.", khmer: "មិនត្រឹមតែនាងឆ្លាតទេ នាងនៅតែចិត្តល្អ។ <br> (Correlative Conjunction) <br> Structure: Not only + verb to be + adjective, but + subject + also + adjective <br> Example: Not only is she smart, but she’s also kind.", answer: "Not only is she smart, but she’s also kind." },
                        { sentence: "He not only speaks English, but also French.", khmer: "គាត់មិនត្រឹមតែនិយាយភាសាអង់គ្លេសទេ គាត់នៅតែនិយាយភាសាបារាំង។ <br> (Correlative Conjunction) <br> Structure: Subject + not only + verb, but also + noun/verb <br> Example: He not only speaks English, but also French.", answer: "He not only speaks English, but also French." },
                        { sentence: "Neither my brother nor my sister likes pizza.", khmer: "ទាំងបងប្រុសរបស់ខ្ញុំ និងបងស្រីរបស់ខ្ញុំមិនចូលចិត្តភីហ្សាទេ។ <br> (Correlative Conjunction) <br> Structure: Neither + noun + nor + noun + verb <br> Example: Neither my brother nor my sister likes pizza.", answer: "Neither my brother nor my sister likes pizza." },
                        { sentence: "She neither called me nor sent a message.", khmer: "នាងមិនបានហៅខ្ញុំ និងមិនបានផ្ញើសារទេ។ <br> (Correlative Conjunction) <br> Structure: Subject + neither + verb + object + nor + verb + object <br> Example: She neither called me nor sent a message.", answer: "She neither called me nor sent a message." },
                        { sentence: "I study hard so that I can pass the exam.", khmer: "ខ្ញុំសិក្សាខ្លាំងដើម្បីឱ្យខ្ញុំអាចជាប់ការប្រឡង។ <br> (Conjunction) <br> Structure: Clause 1 + so that + subject + can/could + base verb <br> Example: I study hard so that I can pass the exam.", answer: "I study hard so that I can pass the exam." },
                        { sentence: "I woke up early so that I could see the sunrise.", khmer: "ខ្ញុំបានភ្ញាក់ពីដំណេកដើម ដើម្បីឱ្យខ្ញុំអាចមើលថ្ងៃរះ។ <br> (Conjunction) <br> Structure: Clause 1 + so that + subject + could + base verb <br> Example: I woke up early so that I could see the sunrise.", answer: "I woke up early so that I could see the sunrise." },
                        { sentence: "She left early so that she could catch the bus.", khmer: "នាងចេញដើម ដើម្បីឱ្យនាងអាចចាប់ឡានក្រុង។ <br> (Conjunction) <br> Structure: Clause 1 + so that + subject + could + base verb <br> Example: She left early so that she could catch the bus.", answer: "She left early so that she could catch the bus." },
                        { sentence: "I won’t go unless it stops raining.", khmer: "ខ្ញុំមិនទៅទេ លុះត្រាតែភ្លៀងឈប់។ <br> (Conjunction) <br> Structure: Clause 1 + unless + clause 2 <br> Example: I won’t go unless it stops raining.", answer: "I won’t go unless it stops raining." },
                        { sentence: "You can’t enter the club unless you’re a member.", khmer: "អ្នកមិនអាចចូលក្លឹបបានទេ លុះត្រាតែអ្នកជាសមាជិក។ <br> (Conjunction) <br> Structure: Clause 1 + unless + clause 2 <br> Example: You can’t enter the club unless you’re a member.", answer: "You can’t enter the club unless you’re a member." },
                        { sentence: "Whether you like it or not, we have to go.", khmer: "មិនថាអ្នកចូលចិត្តវាឬមិនចូលចិត្តទេ ពួកយើងត្រូវទៅ។ <br> (Conjunction) <br> Structure: Whether + clause + or not, + clause <br> Example: Whether you like it or not, we have to go.", answer: "Whether you like it or not, we have to go." },
                        { sentence: "It’s time you went to bed.", khmer: "វាជាពេលដែលអ្នកគួរទៅដេក។ <br> (Expression) <br> Structure: It's time + subject + past simple <br> Example: It’s time you went to bed.", answer: "It’s time you went to bed." },
                        { sentence: "It’s high time we left.", khmer: "វាជាពេលដែលពួកយើងគួរចេញទៅ។ <br> (Expression) <br> Structure: It's high time + subject + past simple <br> Example: It’s high time we left.", answer: "It’s high time we left." },
                        { sentence: "She was so tired that she fell asleep at her desk.", khmer: "នាងនឿយហត់ណាស់ ដល់ថ្នាក់ដែលនាងដេកលក់នៅតុរបស់នាង។ <br> (Conjunction) <br> Structure: Subject + verb + so + adjective/adverb + that + clause <br> Example: She was so tired that she fell asleep at her desk.", answer: "She was so tired that she fell asleep at her desk." },
                        { sentence: "He ran so fast that nobody could catch him.", khmer: "គាត់រត់លឿនណាស់ ដល់ថ្នាក់ដែលគ្មាននរណាអាចចាប់គាត់បាន។ <br> (Conjunction) <br> Structure: Subject + verb + so + adjective/adverb + that + clause <br> Example: He ran so fast that nobody could catch him.", answer: "He ran so fast that nobody could catch him." },
                        { sentence: "It was so hot that we stayed inside all day.", khmer: "វាក្តៅណាស់ ដល់ថ្នាក់ដែលពួកយើងនៅក្នុងផ្ទះពេញមួយថ្ងៃ។ <br> (Conjunction) <br> Structure: It was so + adjective + that + clause <br> Example: It was so hot that we stayed inside all day.", answer: "It was so hot that we stayed inside all day." },
                        { sentence: "As soon as she left the house, it started to rain.", khmer: "ទាំងនាងទើបចេញពីផ្ទះភ្លៀងបានចាប់ផ្តើមធ្លាក់។ <br> (Conjunction) <br> Structure: As soon as + clause 1 (past simple), + clause 2 (past simple) <br> Example: As soon as she left the house, it started to rain.", answer: "As soon as she left the house, it started to rain." },
                        { sentence: "No sooner had she left the house than it started to rain.", khmer: "ទាំងនាងទើបចេញពីផ្ទះភ្លៀងបានចាប់ផ្តើមធ្លាក់។ <br> (Conjunction) <br> Structure: No sooner + had + subject + past participle + than + clause (past simple) <br> Example: No sooner had she left the house than it started to rain.", answer: "No sooner had she left the house than it started to rain." },
                        { sentence: "Hello, how are you today?", khmer: "សួស្ដី! តើអ្នកសុខសប្បាយជាទេថ្ងៃនេះ? <br> (Greeting) <br> Structure: Greeting phrase <br> Example: Hello, how are you today?", answer: "Hello, how are you today?" },
                        { sentence: "The weather is beautiful.", khmer: "អាកាសធាតុស្រស់ស្អាត។ <br> (Statement) <br> Structure: The weather is + adjective <br> Example: The weather is beautiful.", answer: "The weather is beautiful." },
                        { sentence: "Can you please repeat that?", khmer: "តើអ្នកអាចនិយាយម្ដងទៀតបានទេ? <br> (Question) <br> Structure: Can you please + base verb + that? <br> Example: Can you please repeat that?", answer: "Can you please repeat that?" },
                        { sentence: "I am learning English.", khmer: "ខ្ញុំកំពុងរៀនភាសាអង់គ្លេស។ <br> (Statement) <br> Structure: Subject + am/is/are + verb-ing + object <br> Example: I am learning English.", answer: "I am learning English." },
                        { sentence: "What time is it?", khmer: "ម៉ោងប៉ុន្មានហើយ? <br> (Question) <br> Structure: What time is it? <br> Example: What time is it?", answer: "What time is it?" },
                        { sentence: "Please speak slowly.", khmer: "សូមនិយាយយឺតៗ។ <br> (Command) <br> Structure: Please + base verb + adverb <br> Example: Please speak slowly.", answer: "Please speak slowly." },
                        { sentence: "Thank you very much.", khmer: "អរគុណច្រើន។ <br> (Expression) <br> Structure: Thank you + adverbial phrase <br> Example: Thank you very much.", answer: "Thank you very much." },
                        { sentence: "Where is the library?", khmer: "បណ្ណាល័យនៅឯណា? <br> (Question) <br> Structure: Where is + noun? <br> Example: Where is the library?", answer: "Where is the library?" },
                        { sentence: "I don't understand.", khmer: "ខ្ញុំមិនយល់ទេ។ <br> (Statement) <br> Structure: Subject + do not + base verb <br> Example: I don't understand.", answer: "I don't understand." },
                        { sentence: "See you later.", khmer: "ជួបគ្នាពេលក្រោយ។ <br> (Greeting/Farewell) <br> Structure: See you + adverb of time <br> Example: See you later.", answer: "See you later." },
                        { sentence: "a bit more formal", khmer: "ផ្លូវការជាងបន្តិច (Adjective Phrase) <br> For Example: <br> Structure: Adjective + more + adjective <br> Example: This style is a bit more formal.", answer: "This style is a bit more formal." },
                        { sentence: "being tired", khmer: "ការនឿយហត់ / ក្នុងស្ថានភាពនឿយហត់ (gerund phrase) <br> For Example: <br> Structure: Being + adjective <br> Example: Being tired, he went to bed.", answer: "Being tired, he went to bed." },
                        { sentence: "he kept working.", khmer: "គាត់បន្តធ្វើការ (past tense + continuous action) <br> For Example: <br> Structure: Subject + kept + verb-ing <br> Example: He kept working despite the challenges.", answer: "He kept working despite the challenges." },
                        { sentence: "It looks as if...", khmer: "វាមើលទៅដូចជា... (Expression) <br> For Example: <br> Structure: It looks as if + clause <br> Example: It looks as if it's going to rain.", answer: "It looks as if it's going to rain." },
                        { sentence: "they've had a shock.", khmer: "ពួកគេទើបទទួលរងការភ្ញាក់ផ្អើល (Expression) <br> For Example: <br> Structure: Subject + have/has had a shock <br> Example: They've had a shock after the news.", answer: "They've had a shock after the news." },
                        { sentence: "They were shouting", khmer: "ពួកគេកំពុងក្ដែងសម្លេង (past continuous tense) <br> For Example: <br> Structure: Subject + was/were + verb-ing <br> Example: They were shouting loudly.", answer: "They were shouting loudly." },
                        { sentence: "I have no idea", khmer: "ខ្ញុំគ្មានគំនិតទេ / ខ្ញុំមិនដឹងទេ (Expression) <br> For Example: <br> Structure: I have no idea <br> Example: I have no idea what to do next.", answer: "I have no idea what to do next." },
                        { sentence: "Let’s keep in touch", khmer: "តោះបន្តទាក់ទងគ្នា (Expression) <br> For Example: <br> Structure: Let's keep in touch <br> Example: Let's keep in touch after the trip.", answer: "Let’s keep in touch after the trip." },
                        { sentence: "Can you give me a hand?", khmer: "អ្នកអាចជួយខ្ញុំបានទេ? (Idiom/Question) <br> For Example: <br> Structure: Can you give me a hand? <br> Example: Can you give me a hand with this box?", answer: "Can you give me a hand with this box?" },
                        { sentence: "I’ll think about it.", khmer: "ខ្ញុំនឹងគិតអំពីវា។ (Expression) <br> For Example: <br> Structure: I'll think about it <br> Example: I'll think about it and let you know.", answer: "I’ll think about it and let you know." },
                        { sentence: "Sounds like a plan!", khmer: "ស្តាប់ទៅដូចជាផែនការល្អ! (Expression) <br> For Example: <br> Structure: Sounds like a plan! <br> Example: Sounds like a plan! Let's meet at 7.", answer: "Sounds like a plan! Let's meet at 7." },
                        { sentence: "What do you mean?", khmer: "តើអ្នកចង់មានន័យអ្វី? (Question) <br> For Example: <br> Structure: What do you mean? <br> Example: What do you mean by that statement?", answer: "What do you mean by that statement?" },
                        { sentence: "That’s interesting!", khmer: "គួរឱ្យចាប់អារម្មណ៍ណាស់! (Expression) <br> For Example: <br> Structure: That's interesting! <br> Example: Oh, that's interesting! Tell me more.", answer: "Oh, that’s interesting! Tell me more." },
                        { sentence: "I appreciate it.", khmer: "ខ្ញុំពេញចិត្តវា។ (Expression) <br> For Example: <br> Structure: I appreciate it <br> Example: Thank you for your help, I appreciate it.", answer: "Thank you for your help, I appreciate it." },
                        { sentence: "Let me think.", khmer: "ទុកឱ្យខ្ញុំគិតសិន។ (Expression) <br> For Example: <br> Structure: Let me think <br> Example: Let me think about that for a moment.", answer: "Let me think about that for a moment." },
                        { sentence: "What’s the matter?", khmer: "មានការអី? (Question) <br> For Example: <br> Structure: What's the matter? <br> Example: You look sad. What's the matter?", answer: "What's the matter?" },
                        { sentence: "Can I help you with anything?", khmer: "តើខ្ញុំអាចជួយអ្វីបានទេ? (Question) <br> For Example: <br> Structure: Can I help you with anything? <br> Example: Can I help you with anything today?", answer: "Can I help you with anything today?" },
                        { sentence: "I don’t mind.", khmer: "ខ្ញុំមិនប្រកាន់ទេ។ (Expression) <br> For Example: <br> Structure: I don't mind <br> Example: I don't mind if we leave early.", answer: "I don’t mind if we leave early." },
                        { sentence: "That sounds good.", khmer: "ស្តាប់ទៅល្អ។ (Expression) <br> For Example: <br> Structure: That sounds good. <br> Example: A picnic? That sounds good.", answer: "A picnic? That sounds good." },
                        { sentence: "Take care", khmer: "ប្រយ័ត្ន/ថែរក្សាខ្លួន (Farewell) <br> For Example: <br> Structure: Take care <br> Example: Bye, take care!", answer: "Bye, take care!" },
                        { sentence: "I’ll be right back.", khmer: "ខ្ញុំនឹងត្រលប់មកវិញភ្លាម។ (Expression) <br> For Example: <br> Structure: I'll be right back <br> Example: I just need to grab something, I'll be right back.", answer: "I’ll be right back." },
                        { sentence: "Let’s get started", khmer: "តោះចាប់ផ្តើម (Expression) <br> For Example: <br> Structure: Let's get started <br> Example: We have a lot to do, so let's get started.", answer: "Let’s get started." },
                        { sentence: "It’s up to you.", khmer: "វាអាស្រ័យលើអ្នក។ (Expression) <br> For Example: <br> Structure: It's up to you <br> Example: Where do you want to eat? It's up to you.", answer: "It’s up to you." },
                        { sentence: "What do you think?", khmer: "តើអ្នកគិតយ៉ាងណា? (Question) <br> For Example: <br> Structure: What do you think? <br> Example: I'm considering a new job. What do you think?", answer: "What do you think?" },
                        { sentence: "I’m not sure.", khmer: "ខ្ញុំមិនច្បាស់ទេ។ (Expression) <br> For Example: <br> Structure: I'm not sure <br> Example: I'm not sure if I can come.", answer: "I’m not sure if I can come." },
                        { sentence: "Can I ask you a question?", khmer: "ខ្ញុំអាចសួរអ្នកសំណួរបានទេ? (Question) <br> For Example: <br> Structure: Can I ask you a question? <br> Example: Before we continue, can I ask you a question?", answer: "Can I ask you a question?" },
                        { sentence: "I’m looking for [something].", khmer: "ខ្ញុំកំពុងរក [អ្វីមួយ]។ (Expression) <br> For Example: <br> Structure: I'm looking for + noun <br> Example: I'm looking for my keys.", answer: "I’m looking for my keys." },
                        { sentence: "How much is this?", khmer: "នេះតម្លៃប៉ុន្មាន? (Question) <br> For Example: <br> Structure: How much is this? <br> Example: I like this shirt, how much is this?", answer: "How much is this?" },
                        { sentence: "I don’t know.", khmer: "ខ្ញុំមិនដឹងទេ។ (Expression) <br> For Example: <br> Structure: I don't know <br> Example: I don't know the answer.", answer: "I don’t know the answer." },
                        { sentence: "How can I help you?", khmer: "តើខ្ញុំអាចជួយអ្នកបានយ៉ាងដូចម្តេច? (Question) <br> For Example: <br> Structure: How can I help you? <br> Example: Hello, how can I help you?", answer: "Hello, how can I help you?" },
                        { sentence: "What time is it?", khmer: "ម៉ោងប៉ុន្មានហើយ? (Question) <br> For Example: <br> Structure: What time is it? <br> Example: Excuse me, what time is it?", answer: "Excuse me, what time is it?" },
                        { sentence: "Where are you from?", khmer: "អ្នកមកពីណា? (Question) <br> For Example: <br> Structure: Where are you from? <br> Example: Nice to meet you, where are you from?", answer: "Nice to meet you, where are you from?" },
                        { sentence: "I don’t understand.", khmer: "ខ្ញុំមិនយល់ទេ។ (Expression) <br> For Example: <br> Structure: I don't understand <br> Example: Please explain, I don't understand.", answer: "Please explain, I don't understand." },
                        { sentence: "Have a nice day!", khmer: "សូមឱ្យមានថ្ងៃល្អ! (Farewell) <br> For Example: <br> Structure: Have a nice day! <br> Example: Goodbye! Have a nice day!", answer: "Goodbye! Have a nice day!" },
                        { sentence: "Can I help you?", khmer: "ខ្ញុំអាចជួយអ្នកបានទេ? (Question) <br> For Example: <br> Structure: Can I help you? <br> Example: Can I help you find something?", answer: "Can I help you find something?" },
                        { sentence: "What do you do?", khmer: "តើអ្នកធ្វើការអ្វី? (Question) <br> For Example: <br> Structure: What do you do? <br> Example: So, what do you do for a living?", answer: "So, what do you do for a living?" },
                        { sentence: "Could you repeat that, please?", khmer: "សូមជួយនិយាយម្តងទៀតបានទេ? (Question) <br> For Example: <br> Structure: Could you repeat that, please? <br> Example: I didn't hear you, could you repeat that, please?", answer: "I didn't hear you, could you repeat that, please." },
                        { sentence: "I’m sorry", khmer: "ខ្ញុំសុំទោស (Expression) <br> For Example: <br> Structure: I'm sorry <br> Example: I'm sorry for the delay.", answer: "I’m sorry for the delay." },
                        { sentence: "See you later!", khmer: "ជួបគ្នាពេលក្រោយ! (Farewell) <br> For Example: <br> Structure: See you later! <br> Example: I have to go now, see you later!", answer: "I have to go now, see you later!" },
                        { sentence: "How much does this cost?", khmer: "នេះតម្លៃប៉ុន្មាន? (Question) <br> For Example: <br> Structure: How much does this cost? <br> Example: How much does this cost?", answer: "How much does this cost?" },
                        { sentence: "You’re welcome.", khmer: "មិនអីទេ / រីករាយ (Response to Thank You) <br> For Example: <br> Structure: You're welcome. <br> Example: Thank you for your help! You're welcome.", answer: "You’re welcome." },
                        { sentence: "How are you?", khmer: "សុខសប្បាយជាទេ? (Greeting) <br> For Example: <br> Structure: How are you? <br> Example: Hi, how are you?", answer: "Hi, how are you?" },
                        { sentence: "Thank you", khmer: "អរគុណ (Expression of Gratitude) <br> For Example: <br> Structure: Thank you <br> Example: Thank you for the gift.", answer: "Thank you for the gift." },
                        { sentence: "Excuse me.", khmer: "សុំទោស (polite interjection) <br> For Example: <br> Structure: Excuse me <br> Example: Excuse me, can I get past?", answer: "Excuse me, can I get past?" },
                        { sentence: "I’d like to [do something].", khmer: "ខ្ញុំចង់ [ធ្វើអ្វីមួយ]។ (Expression) <br> For Example: <br> Structure: I'd like to + base verb <br> Example: I'd like to travel next year.", answer: "I’d like to travel next year." },
                        { sentence: "Could you please help me?", khmer: "សូមជួយខ្ញុំបានទេ? (Question) <br> For Example: <br> Structure: Could you please + base verb + object? <br> Example: Could you please help me carry this box?", answer: "Could you please help me carry this box?" },
                        { sentence: "I’m on my way.", khmer: "ខ្ញុំកំពុងទៅ។ (Expression) <br> For Example: <br> Structure: I'm on my way <br> Example: I'll be there in 5 minutes, I'm on my way.", answer: "I'll be there in 5 minutes, I'm on my way." },
                        { sentence: "Don’t worry.", khmer: "កុំបារម្ភ។ (Command/Reassurance) <br> For Example: <br> Structure: Don't worry <br> Example: Don't worry, everything will be fine.", answer: "Don’t worry, everything will be fine." }
                    ],

                    //daily conversation
                    "General Confidence Statements": [
                        { sentence: "You know, I'm really starting to believe in myself more these days.", khmer: "អ្នកដឹងទេ, ខ្ញុំចាប់ផ្តើមជឿជាក់លើខ្លួនឯងកាន់តែច្រើនក្នុងពេលនេះ។ <br> You ..., I'm really ... to ... in myself more these days.", answer: "You know, I'm really starting to believe in myself more these days." },
                        { sentence: "It's a good feeling!", khmer: "វាជាអារម្មណ៍ល្អ!", answer: "It's a good feeling!" },
                        { sentence: "Actually, when I'm practicing, I can genuinely say, 'I feel confident when I speak English.'", khmer: "តាមពិត ពេលខ្ញុំអនុវត្ត ខ្ញុំអាចនិយាយដោយស្មោះត្រង់ថា 'ខ្ញុំមានអារម្មណ៍ជឿជាក់នៅពេលខ្ញុំនិយាយភាសាអង់គ្លេស'។<br> ..., when I'm ..., I can ... say, 'I feel ... when I speak English.", answer: "Actually, when I'm practicing, I can genuinely say, 'I feel confident when I speak English.'" },
                        { sentence: "It's getting easier.", khmer: "វាកាន់តែងាយស្រួល។", answer: "It's getting easier." },
                        { sentence: "And it's not just about English; I feel like I'm learning new things every day, no matter what.", khmer: "ហើយវាមិនមែនគ្រាន់តែអំពីភាសាអង់គ្លេសនោះទេ ខ្ញុំមានអារម្មណ៍ថាខ្ញុំកំពុងរៀនរឿងថ្មីៗរៀងរាល់ថ្ងៃ មិនថាមានអ្វីកើតឡើងនោះទេ។ <br> And ... ... just about English; I ... like I'm ... new ...s every day, no ... what.", answer: "And it's not just about English; I feel like I'm learning new things every day, no matter what." },
                        { sentence: "Honestly, I think I'm becoming more confident over time.", khmer: "និយាយតាមត្រង់ ខ្ញុំគិតថាខ្ញុំកំពុងក្លាយជាមនុស្សដែលមានទំនុកចិត្តកាន់តែខ្លាំងឡើងតាមពេលវេលា។", answer: "Honestly, I think I'm becoming more confident over time." },
                        { sentence: "It's a gradual process, but I can feel it.", khmer: "វាជាដំណើរការបន្តិចម្តងៗ (gradual) ប៉ុន្តែខ្ញុំអាចមានអារម្មណ៍វាបាន។", answer: "It's a gradual process, but I can feel it." },
                        { sentence: "And with that confidence, I really do feel like I can achieve my goals, big or small.", khmer: "... ... that ..., I really do ... like I can ... my ...s, ... or ....<br>ហើយជាមួយនឹងទំនុកចិត្តនោះ ខ្ញុំពិតជាមានអារម្មណ៍ថាខ្ញុំអាចសម្រេចគោលដៅរបស់ខ្ញុំបាន មិនថាធំឬតូចនោះទេ។", answer: "And with that confidence, I really do feel like I can achieve my goals, big or small." },
                        { sentence: "I've noticed I feel confident sharing my ideas now, even if they're not perfect.", khmer: "ខ្ញុំបានកត់សម្គាល់ឃើញថាខ្ញុំមានអារម្មណ៍ជឿជាក់ក្នុងការចែករំលែកគំនិតរបស់ខ្ញុំឥឡូវនេះ ទោះបីជាវាមិនល្អឥតខ្ចោះក៏ដោយ។<br> I've ... I feel ... sharing my ideas now, ... ... they're ... ...", answer: "I've noticed I feel confident sharing my ideas now, even if they're not perfect." },
                        { sentence: "That's a big step for me.", khmer: "នោះជាជំហានដ៏ធំមួយសម្រាប់ខ្ញុំ។", answer: "That's a big step for me." },
                        { sentence: "And the best part?", khmer: "ហើយអ្វីដែលល្អបំផុតនោះគឺ?", answer: "And the best part?" },
                        { sentence: "I am not afraid to make mistakes.", khmer: "ខ្ញុំមិនខ្លាចក្នុងការធ្វើខុសទេ។", answer: "I am not afraid to make mistakes." },
                        { sentence: "I mean, mistakes are how you learn, right?", khmer: "ខ្ញុំមានន័យថា, កំហុសគឺជាវិធីដែលអ្នករៀន,មែនទេ?", answer: "I mean, mistakes are how you learn, right?" },
                        { sentence: "I'm really confident in my ability to learn anything I put my mind to.", khmer: "ខ្ញុំពិតជាជឿជាក់លើសមត្ថភាពរបស់ខ្ញុំក្នុងការរៀនអ្វីក៏ដោយដែលខ្ញុំតាំងចិត្ត។<br>I'm really ... in my ... to learn ... I put my mind to.", answer: "I'm really confident in my ability to learn anything I put my mind to." },
                        { sentence: "And when new things come up, I think, 'Yeah, I can handle new challenges.'", khmer: "ហើយនៅពេលមានរឿងថ្មីៗកើតឡើង ខ្ញុំគិតថា 'បាទ ខ្ញុំអាចដោះស្រាយបញ្ហាប្រឈមថ្មីៗបាន'។<br>And when new ... come up, I think, '... I can ... new ....'", answer: "And when new things come up, I think, 'Yeah, I can handle new challenges.'" },
                        { sentence: "I'm getting better at just trusting my own judgment.", khmer: "ខ្ញុំកំពុងកាន់តែល្អប្រសើរក្នុងការជឿជាក់លើការវិនិច្ឆ័យរបស់ខ្លួនឯង។<br>I'm ... better at just ... my own ...", answer: "I'm getting better at just trusting my own judgment." },
                        { sentence: "That's important.", khmer: "នោះជារឿងសំខាន់។", answer: "That's important." },
                        { sentence: "What really helps is that practicing helps me feel more confident.", khmer: "អ្វីដែលពិតជាជួយគឺការអនុវត្តជួយឱ្យខ្ញុំមានអារម្មណ៍ជឿជាក់កាន់តែខ្លាំង។<br>What really helps is that ... helps me feel more ....", answer: "What really helps is that practicing helps me feel more confident." },
                        { sentence: "Every little bit makes a difference.", khmer: "រាល់បន្តិចបន្តួចធ្វើឱ្យមានភាពខុសគ្នា។", answer: "Every little bit makes a difference." },
                        { sentence: "And I'm trying to remember to celebrate my small successes – like when I understand something new or speak clearly.", khmer: "ហើយខ្ញុំកំពុងព្យាយាមចងចាំដើម្បីអបអរសាទរជោគជ័យតូចៗរបស់ខ្ញុំ – ដូចជាពេលខ្ញុំយល់អ្វីថ្មី ឬនិយាយបានច្បាស់។<br>And I'm trying to ... to ... my small .... – like when I ... something ... or speak ....", answer: "And I'm trying to remember to celebrate my small successes – like when I understand something new or speak clearly." },
                        { sentence: "I'm trying to really learn from my experiences, good or bad.", khmer: "ខ្ញុំកំពុងព្យាយាមរៀនពីបទពិសោធន៍របស់ខ្ញុំ ពុកល្អឬអាក្រក់។<br>I'm ... to really ... from my ..., good or....", answer: "I'm trying to really learn from my experiences, good or bad." },
                        { sentence: "And instead of dwelling on what's hard, I'm focusing on my strengths.", khmer: "ហើយជំនួសឱ្យការគិតច្រើនលើអ្វីដែលពិបាក ខ្ញុំកំពុងផ្តោតលើចំណុចខ្លាំងរបស់ខ្ញុំ។<br>And ... .of ... on what's ..., I'm ... on my ....", answer: "And instead of dwelling on what's hard, I'm focusing on my strengths." },
                        { sentence: "That makes me feel powerful.", khmer: "នោះធ្វើឱ្យខ្ញុំមានអារម្មណ៍មានអំណាច។", answer: "That makes me feel powerful." },
                        { sentence: "Most importantly, I keep trying to encourage myself to try new things.", khmer: "សំខាន់បំផុត ខ្ញុំបន្តព្យាយាមលើកទឹកចិត្តខ្លួនឯងឱ្យសាកល្បងរឿងថ្មីៗ។<br>Most ..., I keep ... to ... myself to try new ....", answer: "Most importantly, I keep trying to encourage myself to try new things." },
                        { sentence: "You just never know what you can do until you try!", khmer: "អ្នកមិនអាចដឹងថាអ្នកអាចធ្វើអ្វីបានទេ រហូតដល់អ្នកបានសាកល្បង!", answer: "You just never know what you can do until you try!" }
                   
                    ],
                    "Morning Routine": [
                        { sentence: "So, if you're curious about my typical day, here's how it usually goes:", khmer: "ដូច្នេះ បើអ្នកចង់ដឹងអំពីទម្លាប់ប្រចាំថ្ងៃរបស់ខ្ញុំ នេះជាអ្វីដែលវាជាធម្មតាកើតឡើង៖ <br>So, if you're ... about my typical ..., here's how it usually ....", answer: "So, if you're curious about my typical day, here's how it usually goes:" },
                        { sentence: "First, in the morning, I'm usually up pretty early, around 6 o'clock.", khmer: "ដំបូងបង្អស់ នៅពេលព្រឹក ខ្ញុំជាធម្មតាភ្ញាក់ពីគេងលឿនណាស់ ប្រហែលម៉ោង ៦។ <br>First, in the ..., I'm usually up ... early, around ... o'clock.", answer: "First, in the morning, I'm usually up pretty early, around 6 o'clock." },
                        { sentence: "The very first thing I do is head straight to the bathroom.", khmer: "រឿងដំបូងបំផុតដែលខ្ញុំធ្វើគឺទៅបន្ទប់ទឹកភ្លាម។ <br>The very ... thing I ... is head straight ... the ....", answer: "The very first thing I do is head straight to the bathroom." },
                        { sentence: "You know, just to wash my hands and face, brush my teeth, and then I jump in the shower.", khmer: "អ្នកដឹងហើយ គ្រាន់តែលាងដៃនិងមុខ ដុសធ្មេញ រួចខ្ញុំក៏ងូតទឹក។ <br>You know, just to ... my hands ... face, brush my ..., and then I ... in the ....", answer: "You know, just to wash my hands and face, brush my teeth, and then I jump in the shower." },
                        { sentence: "After my shower, I'll dry off my body and hair with a towel.", khmer: "ក្រោយងូតទឹករួច ខ្ញុំនឹងជូតខ្លួននិងសក់របស់ខ្ញុំដោយកន្សែង។ <br>After my ..., I'll dry off my ... and ... with a ....", answer: "After my shower, I'll dry off my body and hair with a towel." },
                        { sentence: "Then I'll quickly comb my hair, get dressed, and just make sure my bed is made and my room is tidy.", khmer: "រួចខ្ញុំនឹងសិតសក់យ៉ាងលឿន ស្លៀកពាក់ ហើយគ្រាន់តែធ្វើឱ្យប្រាកដថាគ្រែរបស់ខ្ញុំត្រូវបានរៀបចំហើយបន្ទប់របស់ខ្ញុំស្អាត។ <br>Then I'll ... comb my ..., get dressed, and just make sure my ... is made and my room is ....", answer: "Then I'll quickly comb my hair, get dressed, and just make sure my bed is made and my room is tidy." },
                        { sentence: "Then, it's usually time for breakfast.", khmer: "បន្ទាប់មក ជាធម្មតាដល់ពេលអាហារពេលព្រឹក។ <br>Then, it's usually ... for ....", answer: "Then, it's usually time for breakfast." },
                        { sentence: "I really like a simple meal – typically a fried egg with some pickles and rice.", khmer: "ខ្ញុំពិតជាចូលចិត្តអាហារសាមញ្ញមួយ – ជាធម្មតាពងទាប្រៃជាមួយត្រសក់ជ្រក់និងបាយ។ <br>I really ... a simple ... – typically a ... egg with some ... and ....", answer: "I really like a simple meal – typically a fried egg with some pickles and rice." },
                        { sentence: "It's quick and tasty.", khmer: "វាលឿនហើយឆ្ងាញ់។ <br>It's ... and ....", answer: "It's quick and tasty." },
                        { sentence: "Moving into the afternoon, I usually get back home around 2:30 p.m.", khmer: "ចូលដល់ពេលរសៀល ខ្ញុំជាធម្មតាត្រឡប់មកផ្ទះវិញប្រហែលម៉ោង ២:៣០ រសៀល។ <br>Moving into the ..., I usually ... back home around ... p.m.", answer: "Moving into the afternoon, I usually get back home around 2:30 p.m." },
                        { sentence: "The first thing when I get in is to wash my hands, and then I'll make lunch for myself.", khmer: "រឿងដំបូងនៅពេលខ្ញុំចូលមកគឺលាងដៃ រួចខ្ញុំនឹងធ្វើអាហារថ្ងៃត្រង់សម្រាប់ខ្លួនឯង។ <br>The first ... when I ... in is to ... my hands, and then I'll ... lunch for ....", answer: "The first thing when I get in is to wash my hands, and then I'll make lunch for myself." },
                        { sentence: "I usually sit down to eat lunch around 3:00 p.m.", khmer: "ខ្ញុំជាធម្មតានឹងអង្គុយញ៉ាំអាហារថ្ងៃត្រង់ប្រហែលម៉ោង ៣:០០ រសៀល។ <br>I usually sit ... to eat ... around ... p.m.", answer: "I usually sit down to eat lunch around 3:00 p.m." },
                        { sentence: "After lunch, I often take a short rest or a quick nap.", khmer: "ក្រោយអាហារថ្ងៃត្រង់ ខ្ញុំជាញឹកញាប់សម្រាកបន្តិចបន្តួច ឬដេកមួយភ្លែត។ <br>After ..., I often take a ... rest or a ... nap.", answer: "After lunch, I often take a short rest or a quick nap." },
                        { sentence: "Sometimes, if I have energy, I'll do some housework or study my lessons.", khmer: "ជួនកាល បើខ្ញុំមានកម្លាំង ខ្ញុំនឹងធ្វើកិច្ចការផ្ទះខ្លះ ឬសិក្សាមេរៀនរបស់ខ្ញុំ។ <br>Sometimes, if I have ..., I'll do some ... or study my ....", answer: "Sometimes, if I have energy, I'll do some housework or study my lessons." },
                        { sentence: "And if I happen to have some free time, I love to watch a movie or maybe hang out and play with my friends for a bit.", khmer: "ហើយបើខ្ញុំមានពេលទំនេរ ខ្ញុំចូលចិត្តមើលកុន ឬអាចដើរលេង និងលេងជាមួយមិត្តភក្តិរបស់ខ្ញុំបន្តិចបន្តួច។ <br>And if I happen to have some ... time, I love to ... a movie or maybe ... out and ... with my ... for a ....", answer: "And if I happen to have some free time, I love to watch a movie or maybe hang out and play with my friends for a bit." },
                        { sentence: "Finally, in the evening, I usually take another shower around 5 o'clock.", khmer: "ចុងក្រោយ នៅពេលល្ងាច ខ្ញុំជាធម្មតានឹងងូតទឹកម្តងទៀតប្រហែលម៉ោង ៥។ <br>Finally, in the ..., I usually ... another ... around ... o'clock.", answer: "Finally, in the evening, I usually take another shower around 5 o'clock." },
                        { sentence: "After that, it's dinner time.", khmer: "ក្រោយពីនោះ ដល់ពេលអាហារពេលល្ងាច។ <br>After ..., it's ... time.", answer: "After that, it's dinner time." },
                        { sentence: "I often like to watch a movie while I'm eating – it's a nice way to relax.", khmer: "ខ្ញុំជាញឹកញាប់ចូលចិត្តមើលកុនពេលកំពុងញ៉ាំ – វាជាវិធីល្អក្នុងការសម្រាក។ <br>I often ... to watch a ... while I'm ... – it's a ... way to ....", answer: "I often like to watch a movie while I'm eating – it's a nice way to relax." },
                        { sentence: "Once dinner's done, I sometimes review my homework or read a book.", khmer: "នៅពេលញ៉ាំអាហារល្ងាចរួច ខ្ញុំជួនកាលពិនិត្យមើលកិច្ចការផ្ទះរបស់ខ្ញុំ ឬអានសៀវភៅ។ <br>Once dinner's ..., I sometimes ... my ... or read a ....", answer: "Once dinner's done, I sometimes review my homework or read a book." },
                        { sentence: "I also really enjoy listening to music or watching YouTube to just chill out.", khmer: "ខ្ញុំក៏ពិតជាចូលចិត្តស្តាប់តន្ត្រី ឬមើល YouTube ដើម្បីសម្រាកដែរ។ <br>I also really ... listening to ... or watching ... to just ... out.", answer: "I also really enjoy listening to music or watching YouTube to just chill out." },
                        { sentence: "Then, before I finally go to bed, I always make sure to brush my teeth one last time and get my clothes ready for the next day.", khmer: "បន្ទាប់មក មុនពេលខ្ញុំចូលគេង ខ្ញុំតែងតែធ្វើឱ្យប្រាកដថាបានដុសធ្មេញម្តងចុងក្រោយ និងរៀបចំសម្លៀកបំពាក់របស់ខ្ញុំសម្រាប់ថ្ងៃបន្ទាប់។ <br>Then, before I finally ... to ..., I always ... sure to ... my ... one last ... and get my ... ready for the next ....", answer: "Then, before I finally go to bed, I always make sure to brush my teeth one last time and get my clothes ready for the next day." },
                        { sentence: "That way, the morning is a little bit smoother!", khmer: "តាមវិធីនោះ ពេលព្រឹកនឹងកាន់តែងាយស្រួលបន្តិច! <br>That way, the ... is a ... bit ...!", answer: "That way, the morning is a little bit smoother!" }
                    ],
                    "How can I improve my English speaking?": [
                        
                            { sentence: "That's a really important question for me right now, actually.", khmer: "នោះជាសំណួរដ៏សំខាន់មួយសម្រាប់ខ្ញុំនៅពេលនេះ តាមពិត។ <br>That's a really ... question ... for me ... now, ....", answer: "That's a really important question for me right now, actually." },
                            { sentence: "I'm always thinking about how I can improve my English speaking.", khmer: "ខ្ញុំតែងតែគិតអំពីរបៀបដែលខ្ញុំអាចកែលម្អការនិយាយភាសាអង់គ្លេសរបស់ខ្ញុំ។ <br>I'm always ... about how I can ... my English ....", answer: "I'm always thinking about how I can improve my English speaking." },
                            { sentence: "Since I'm at an A2 level and want to reach B1, I know I need to be strategic.", khmer: "ដោយសារខ្ញុំនៅកម្រិត A2 ហើយចង់ឡើងដល់ B1 ខ្ញុំដឹងថាខ្ញុំត្រូវមានយុទ្ធសាស្ត្រ។ <br>Since I'm at an ... level and want to ... B1, I know I need to be ....", answer: "Since I'm at an A2 level and want to reach B1, I know I need to be strategic." },
                        
                            { sentence: "One of the main things I focus on is speaking as much as possible.", khmer: "រឿងមួយក្នុងចំណោមរឿងសំខាន់ៗដែលខ្ញុំផ្តោតលើគឺការនិយាយឱ្យបានច្រើនតាមដែលអាចធ្វើទៅបាន។ <br>One of the main things I ... on is speaking ... much as ....", answer: "One of the main things I focus on is speaking as much as possible." },
                            { sentence: "Even if it's just to myself, or repeating sentences like we're doing now, any speaking practice helps.", khmer: "ទោះបីជាគ្រាន់តែនិយាយទៅកាន់ខ្លួនឯង ឬនិយាយឡើងវិញនូវប្រយោគដូចយើងកំពុងធ្វើឥឡូវនេះក៏ដោយ ការអនុវត្តការនិយាយណាមួយក៏ជួយដែរ។ <br>Even if it's just to ..., or repeating sentences like we're ... now, any speaking practice ....", answer: "Even if it's just to myself, or repeating sentences like we're doing now, any speaking practice helps." },
                            { sentence: "I try not to be afraid of making mistakes, because that's how you learn, right?", khmer: "ខ្ញុំព្យាយាមមិនខ្លាចក្នុងការធ្វើខុស ព្រោះនោះជាវិធីដែលអ្នករៀនមែនទេ? <br>I try not to be afraid of ... mistakes, because that's how you ..., right?", answer: "I try not to be afraid of making mistakes, because that's how you learn, right?" },
                        
                            { sentence: "Another big one for me is listening a lot.", khmer: "មួយទៀតដែលសំខាន់សម្រាប់ខ្ញុំគឺការស្តាប់ឱ្យបានច្រើន។ <br>Another big one ... me is listening ... lot.", answer: "Another big one for me is listening a lot." },
                            { sentence: "I try to listen to English podcasts, watch TV shows, and even listen to music.", khmer: "ខ្ញុំព្យាយាមស្តាប់ផតខាសភាសាអង់គ្លេស មើលកម្មវិធីទូរទស្សន៍ និងសូម្បីតែស្តាប់តន្ត្រី។ <br>I try to listen to English ..., watch TV shows, and even ... to ....", answer: "I try to listen to English podcasts, watch TV shows, and even listen to music." },
                            { sentence: "The more I hear native speakers, the better I understand the rhythm and pronunciation.", khmer: "កាន់តែស្តាប់អ្នកនិយាយដើម កាន់តែយល់ពីចង្វាក់ និងការបញ្ចេញសំឡេង។ <br>The more I hear native ..., the better I understand the ... and ....", answer: "The more I hear native speakers, the better I understand the rhythm and pronunciation." },
                            { sentence: "I try to mimic their pronunciation when I hear new words or phrases.", khmer: "ខ្ញុំព្យាយាមត្រាប់តាមការបញ្ចេញសំឡេងរបស់ពួកគេនៅពេលខ្ញុំឮពាក្យ ឬឃ្លាថ្មីៗ។ <br>I try to ... their pronunciation when I hear new ... or ....", answer: "I try to mimic their pronunciation when I hear new words or phrases." },
                       
                            { sentence: "I also think learning new vocabulary in context is really useful.", khmer: "ខ្ញុំក៏គិតថាការរៀនវាក្យសព្ទថ្មីក្នុងបរិបទក៏មានប្រយោជន៍ខ្លាំងណាស់ដែរ។ <br>I also think learning new ... in context is really ....", answer: "I also think learning new vocabulary in context is really useful." },
                            { sentence: "Instead of just memorizing single words, I try to learn phrases or sentences.", khmer: "ជំនួសឱ្យការទន្ទេញពាក្យតែមួយមុខ ខ្ញុំព្យាយាមរៀនឃ្លា ឬប្រយោគ។ <br>Instead of just memorizing ... words, I try to learn ... or ....", answer: "Instead of just memorizing single words, I try to learn phrases or sentences." },
                            { sentence: "That way, I know how to use them naturally in a conversation.", khmer: "វិធីនោះ ខ្ញុំដឹងពីរបៀបប្រើប្រាស់វាដោយធម្មជាតិក្នុងការសន្ទនា។ <br>That way, I know how to use them ... in a ....", answer: "That way, I know how to use them naturally in a conversation." },
                            { sentence: "And, of course, shadowing is a technique I use a lot.", khmer: "ហើយជាការពិតណាស់ ការត្រាប់តាមគឺជាបច្ចេកទេសដែលខ្ញុំប្រើច្រើន។ <br>And, of course, ... is a technique I ... a lot.", answer: "And, of course, shadowing is a technique I use a lot." },
                            { sentence: "It's really helping me to get the intonation and speed right.", khmer: "វាពិតជាជួយខ្ញុំឱ្យចាប់បានសំនៀងនិងល្បឿនបានត្រឹមត្រូវ។ <br>It's really helping me to get the ... and ... right.", answer: "It's really helping me to get the intonation and speed right." },
                            { sentence: "I try to record myself sometimes, too, which helps me hear what I need to improve.", khmer: "ខ្ញុំក៏ព្យាយាមថតខ្លួនឯងជួនកាលដែរ ដែលជួយឱ្យខ្ញុំឮនូវអ្វីដែលខ្ញុំត្រូវកែលម្អ។ <br>I try to record myself ..., too, which helps me hear what I ... to ....", answer: "I try to record myself sometimes, too, which helps me hear what I need to improve." },
                        
                            { sentence: "Finally, I believe consistency is key.", khmer: "ចុងក្រោយ ខ្ញុំជឿថាភាពទៀងទាត់គឺជាគន្លឹះ។ <br>Finally, I believe ... is ....", answer: "Finally, I believe consistency is key." },
                            { sentence: "Even if it's just a little bit every day, showing up and practicing regularly makes a huge difference.", khmer: "ទោះបីជាគ្រាន់តែបន្តិចបន្តួចជារៀងរាល់ថ្ងៃក៏ដោយ ការបង្ហាញខ្លួននិងអនុវត្តជាប្រចាំធ្វើឱ្យមានភាពខុសគ្នាខ្លាំងណាស់។ <br>Even if it's just a little bit ... day, showing up and practicing ... makes a huge ....", answer: "Even if it's just a little bit every day, showing up and practicing regularly makes a huge difference." },
                            { sentence: "I try to make English a part of my daily routine.", khmer: "ខ្ញុំព្យាយាមធ្វើឱ្យភាសាអង់គ្លេសក្លាយជាផ្នែកមួយនៃទម្លាប់ប្រចាំថ្ងៃរបស់ខ្ញុំ។ <br>I try to make English a part of my ... ....", answer: "I try to make English a part of my daily routine." },
                            { sentence: "So, to sum it up, it's about speaking, listening, learning vocabulary in phrases, using techniques like shadowing, and being consistent every single day.", khmer: "ដូច្នេះ សរុបមក វាគឺអំពីការនិយាយ ការស្តាប់ ការរៀនវាក្យសព្ទជាឃ្លា ការប្រើប្រាស់បច្ចេកទេសដូចជាការត្រាប់តាម និងការមានភាពទៀងទាត់ជារៀងរាល់ថ្ងៃ។ <br>So, to sum it ..., it's about speaking, listening, learning ... in phrases, using techniques like ..., and being ... every single ....", answer: "So, to sum it up, it's about speaking, listening, learning vocabulary in phrases, using techniques like shadowing, and being consistent every single day." }
                        
                   ],
                    //All Structure
                   "Subject Should (auxiliary) + main verb base": [
                        {sentence:"He should be more careful.", khmer:"គាត់គួរតែប្រុងប្រយ័ត្នជាងនេះ។ <br>He should be more ...", answer:"He should be more careful."},
                        {sentence:"You should try to understand the rules.", khmer:"អ្នកគួរតែព្យាយាមយល់ពីច្បាប់។ <br>You should try to ... the ...", answer:"You should try to understand the rules."},
                        {sentence:"They should not be late for the meeting.", khmer:"ពួកគេគួរតែមិនយឺតសម្រាប់ការប្រជុំទេ។ <br>They should not be ... for the ...", answer:"They should not be late for the meeting."},
                        {sentence:"We should help each other more often.", khmer:"យើងគួរតែជួយគ្នាជាញឹកញាប់ជាងនេះ។ <br>We should help each ... more ...", answer:"We should help each other more often."},
                        {sentence:"She should practice speaking English every day.", khmer:"នាងគួរតែអនុវត្តន៍ការនិយាយភាសាអង់គ្លេសរៀងរាល់ថ្ងៃ។ <br>She should practice ... English every ....", answer:"She should practice speaking English every day."},
                        {sentence:"I should finish my homework before going out.", khmer:"ខ្ញុំគួរតែបញ្ចប់ការងារផ្ទះរបស់ខ្ញុំមុនពេលចេញទៅក្រៅ។ <br>I should finish my ... before going ...", answer:"I should finish my homework before going out."},
                        {sentence:"You should not forget to bring your ID.", khmer:"អ្នកគួរតែមិនភ្លេចយកអត្តសញ្ញាណប័ណ្ណរបស់អ្នកទេ។ <br>You should not ... to bring your ...", answer:"You should not forget to bring your ID."},
                        {sentence:"He should always be on time for work.", khmer:"គាត់គួរតែតែងតែមកដល់ពេលសម្រាប់ការងារ។ <br>He should always be on ... for ...", answer:"He should always be on time for work."},
                        {sentence:"They should listen carefully during the lecture.", khmer:"ពួកគេគួរតែស្តាប់យ៉ាងប្រុងប្រយ័ត្ននៅពេលបង្រៀន។ <br>They should listen ... during the ...", answer:"They should listen carefully during the lecture."},
                        {sentence:"We should respect each other's opinions.", khmer:"យើងគួរតែគោរពគំនិតរបស់គ្នា។ <br>We should respect each ... opinions.", answer:"We should respect each other's opinions."},
                        {sentence:"She should not worry too much about the exam.", khmer:"នាងគួរតែមិនបារម្ភច្រើនអំពីការប្រលងទេ។ <br>She should not ... too much about the ...", answer:"She should not worry too much about the exam."},
                        {sentence:"I should ask for help if I don't understand something.", khmer:"ខ្ញុំគួរតែសួរអ្នកដទៃជំនួយប្រសិនបើខ្ញុំមិនយល់អ្វីទេ។ <br>I should ask for ... if I don't ... something.", answer:"I should ask for help if I don't understand something."},
                        {sentence:"You should always be honest with your friends.", khmer:"អ្នកគួរតែតែងតែមានសុចរិតជាមួយមិត្តភក្តិរបស់អ្នក។ <br>You should always be ... with your ...", answer:"You should always be honest with your friends."},
                        {sentence:"He should take breaks while studying to stay focused.", khmer:"គាត់គួរតែឈប់សម្រាកពេលសិក្សាដើម្បីរក្សាភាពផ្តោតអារម្មណ៍។ <br>He should take ... while studying to stay ....", answer:"He should take breaks while studying to stay focused."},
                        {sentence:"They should not ignore the instructions given by the teacher.", khmer:"ពួកគេគួរតែមិនលើកលែងការណែនាំដែលបានផ្តល់ដោយគ្រូ។ <br>They should not ... the ... given by the ...", answer:"They should not ignore the instructions given by the teacher."},
                        {sentence:"We should always be kind to others.", khmer:"យើងគួរតែតែងតែមានមេត្តាដល់អ្នកដទៃ។ <br>We should always be ... to ...", answer:"We should always be kind to others."},
                        {sentence:"She should practice her presentation before the meeting.", khmer:"នាងគួរតែអនុវត្តន៍ការបង្ហាញរបស់នាងមុនពេលប្រជុំ។ <br>She should practice her ... before the ...", answer:"She should practice her presentation before the meeting."},
                        {sentence:"I should not procrastinate and start my project early.", khmer:"ខ្ញុំគួរតែមិនពន្យារពេលនិងចាប់ផ្តើមគម្រោងរបស់ខ្ញុំឲ្យឆាប់។ <br>I should not ... and start my ... early.", answer:"I should not procrastinate and start my project early."},
                        {sentence:"You should always be prepared for unexpected situations.", khmer:"អ្នកគួរតែតែងតែមានការរៀបចំសម្រាប់ស្ថានភាពដែលមិនបានរំពឹងទុក។ <br>You should always be ... for unexpected ...", answer:"You should always be prepared for unexpected situations."},
                        {sentence:"He should not rush through his work to avoid mistakes.", khmer:"គាត់គួរតែមិនរត់ឆាប់ពេលធ្វើការដើម្បីជៀសវាងកំហុស។ <br>He should not ... through his ... to avoid ...", answer:"He should not rush through his work to avoid mistakes."},
                        {sentence:"They should always be respectful to their elders.", khmer:"ពួកគេគួរតែតែងតែមានការគោរពចំពោះអ្នកចាស់ជាង។ <br>They should always be ... to their ...", answer:"They should always be respectful to their elders."},


                    ],
                    
                   "passiveActiveSentences":[
                        // Conditional Type 1
                        {
                            sentence: " If you help me, I will finish quickly.",
                            khmer: "Active (Conditional Type 1): <br>បើអ្នកជួយខ្ញុំ ខ្ញុំនឹងបញ្ចប់លឿន។ <br> If you ..... me, I ..... quickly.<br>Structure: If + S + V1 + O, S + will + V1 + O.",
                            answer: "If you help me, I will finish quickly."
                        },
                        {
                            sentence: " If I am helped by you, the work will be finished quickly.",
                            khmer: "Passive (Conditional Type 1):<br>បើខ្ញុំត្រូវបានជួយដោយអ្នក ការងារនឹងត្រូវបានបញ្ចប់លឿន។ <br> If I ..... by you, the work ..... quickly.<br>Structure: If + O + is/am/are + V3 + by + S, O + will + be + V3 + by + S (optional).",
                            answer: "If I am helped by you, the work will be finished quickly."
                        },
                        // Conditional Type 2
                        {
                            sentence: " If I had money, I would buy a car.",
                            khmer: "Active (Conditional Type 2):<br>បើខ្ញុំមានលុយ ខ្ញុំនឹងទិញឡាន។ <br> If I ..... money, I ..... a car.<br>Structure: If + S + V2 + O, S + would + V1 + O.",
                            answer: "If I had money, I would buy a car."
                        },
                        {
                            sentence: " If money were had by me, a car would be bought.",
                            khmer: "Passive (Conditional Type 2): <br>បើលុយត្រូវបានមានដោយខ្ញុំ ឡានមួយនឹងត្រូវបានទិញ។ <br> If money ..... by me, a car ..... bought.<br>Structure: If + O + were + V3 + by + S, O + would + be + V3 + by + S (optional).",
                            answer: "If money were had by me, a car would be bought."
                        },
                        // Conditional Type 3
                        {
                            sentence: " If he had studied, he would have passed the exam.",
                            khmer: "Active (Conditional Type 3): <br>បើគាត់បានរៀន គាត់នឹងបានប្រឡងជាប់។ <br> If he ....., he ..... the exam.<br>Structure: If + S + had + V3 + O, S + would have + V3 + O.",
                            answer: "If he had studied, he would have passed the exam."
                        },
                        {
                            sentence: "If the exam had been studied for by him, it would have been passed.",
                            khmer: "Passive (Conditional Type 3): <br>បើការប្រឡងត្រូវបានរៀនដោយគាត់ វានឹងត្រូវបានប្រឡងជាប់។ <br> If the exam ..... for by him, it ..... passed.<br>Structure: If + O + had been + V3 + by + S, O + would have been + V3 + by + S (optional).",
                            answer: "If the exam had been studied for by him, it would have been passed."
                        },
                        // Simple Present
                        {
                            sentence: " The student writes an essay.",
                            khmer: "Active: <br>សិស្សសរសេរអត្ថបទមួយ។ <br> The student ..... an essay.<br>Structure: S + V1/Vs/Ves + O.",
                            answer: "The student writes an essay."
                        },
                        {
                            sentence: "An essay is written by the student.",
                            khmer: "Passive: <br>អត្ថបទមួយត្រូវបានសរសេរដោយសិស្ស។ <br> An essay ..... by the student.<br>Structure: O + is/am/are + V3 + by + S.",
                            answer: "An essay is written by the student."
                        },
                        // Simple Past
                        {
                            sentence: "She bought a new car.",
                            khmer: "Active: <br>នាងបានទិញឡានថ្មីមួយ។ <br> She ..... a new car.<br>Structure: S + V2 + O.",
                            answer: "She bought a new car."
                        },
                        {
                            sentence: "A new car was bought by her.",
                            khmer: "Passive: <br>ឡានថ្មីមួយត្រូវបានទិញដោយនាង។ <br> A new car ..... by her.<br>Structure: O + was/were + V3 + by + S.",
                            answer: "A new car was bought by her."
                        },
                        // Simple Future
                        {
                            sentence: " He will read the book.",
                            khmer: "Active: <br>គាត់នឹងអានសៀវភៅ។ <br> He ..... the book.<br>Structure: S + will + V1 + O.",
                            answer: "He will read the book."
                        },
                        {
                            sentence: "The book will be read by him.",
                            khmer: "Passive: <br>សៀវភៅនឹងត្រូវបានអានដោយគាត់។ <br> The book ..... by him.<br>Structure: O + will + be + V3 + by + S.",
                            answer: "The book will be read by him."
                        },
                        // Present Continuous
                        {
                            sentence: " They are building a bridge.",
                            khmer: "Active: <br>ពួកគេកំពុងសាងសង់ស្ពាន។ <br> They ..... a bridge.<br>Structure: S + is/am/are + Ving + O.",
                            answer: "They are building a bridge."
                        },
                        {
                            sentence: " A bridge is being built by them.",
                            khmer: "Passive: <br>ស្ពានមួយកំពុងត្រូវបានសាងសង់ដោយពួកគេ។ <br> A bridge ..... by them.<br>Structure: O + is/am/are + being + V3 + by + S.",
                            answer: "A bridge is being built by them."
                        },
                        // Past Continuous
                        {
                            sentence: " We were watching a movie.",
                            khmer: "Active: <br>ពួកយើងកំពុងមើលកុន។ <br> We ..... a movie.<br>Structure: S + was/were + Ving + O.",
                            answer: "We were watching a movie."
                        },
                        {
                            sentence: " A movie was being watched by us.",
                            khmer: "Passive: <br>កុនមួយកំពុងត្រូវបានមើលដោយពួកយើង។ <br> A movie ..... by us.<br>Structure: O + was/were + being + V3 + by + S.",
                            answer: "A movie was being watched by us."
                        },
                        // Present Perfect
                        {
                            sentence: "The police have arrested the thief.",
                            khmer: "Active: <br>ប៉ូលិសបានចាប់ចោរ។ <br> The police ..... the thief.<br>Structure: S + have/has + V3 + O.",
                            answer: "The police have arrested the thief."
                        },
                        {
                            sentence: "The thief has been arrested by the police.",
                            khmer: "Passive: <br>ចោរត្រូវបានចាប់ខ្លួនដោយប៉ូលិស។ <br> The thief ..... by the police.<br>Structure: O + have/has + been + V3 + by + S.",
                            answer: "The thief has been arrested by the police."
                        },
                        // Past Perfect
                        {
                            sentence: " She had finished her homework.",
                            khmer: "Active: <br>នាងបានបញ្ចប់កិច្ចការផ្ទះរបស់នាង។ <br> She ..... her homework.<br>Structure: S + had + V3 + O.",
                            answer: "She had finished her homework."
                        },
                        {
                            sentence: " Her homework had been finished by her.",
                            khmer: "Passive: <br>កិច្ចការផ្ទះរបស់នាងត្រូវបានបញ្ចប់ដោយនាង។ <br> Her homework ..... by her.<br>Structure: O + had + been + V3 + by + S.",
                            answer: "Her homework had been finished by her."
                        },
                        // Future Perfect
                        {
                            sentence: " They will have completed the task.",
                            khmer: "Active: <br>ពួកគេនឹងបានបញ្ចប់ភារកិច្ច។ <br> They ..... the task.<br>Structure: S + will + have + V3 + O.",
                            answer: "They will have completed the task."
                        },
                        {
                            sentence: " The task will have been completed by them.",
                            khmer: "Passive: <br>ភារកិច្ចនឹងត្រូវបានបញ្ចប់ដោយពួកគេ។ <br> The task ..... by them.<br>Structure: Object + will + have + been + V3 + by + subject.",
                            answer: "The task will have been completed by them."
                        }
                    ],
                    "passiveActiveConditional":[
                        // Conditional Type 0
                        {
                            sentence: "Active (Conditional Type 0): If you heat water to 100 degrees Celsius, it boils.",
                            khmer: "Active: <br>បើអ្នកកម្ដៅទឹកដល់ ១០០ អង្សាសេ វានឹងពុះ។ <br> If you ..... water to 100 degrees Celsius, it .....<br>Structure: If + S + V1 + O, S + V1/Vs/Ves + O.",
                            answer: "If you heat water to 100 degrees Celsius, it boils."
                        },
                        {
                            sentence: "Passive (Conditional Type 0): If water is heated to 100 degrees Celsius, it is boiled.",
                            khmer: "Passive: <br>បើទឹកត្រូវបានកម្ដៅដល់ ១០០ អង្សាសេ វានឹងត្រូវបានពុះ។ <br> If water ..... to 100 degrees Celsius, it .....<br>Structure: If + O + is/am/are + V3 + by + S (optional), O + is/am/are + V3 + by + S (optional).",
                            answer: "If water is heated to 100 degrees Celsius, it is boiled."
                        },
                        // Conditional Type 1
                        {
                            sentence: "Active (Conditional Type 1): If you help me, I will finish quickly.",
                            khmer: "Active: <br>បើអ្នកជួយខ្ញុំ ខ្ញុំនឹងបញ្ចប់លឿន។ <br> If you ..... me, I ..... quickly.<br>Structure: If + S + V1 + O, S + will + V1 + O.",
                            answer: "If you help me, I will finish quickly."
                        },
                        {
                            sentence: "Passive (Conditional Type 1): If I am helped by you, the work will be finished quickly.",
                            khmer: "Passive: <br>បើខ្ញុំត្រូវបានជួយដោយអ្នក ការងារនឹងត្រូវបានបញ្ចប់លឿន។ <br> If I ..... by you, the work ..... quickly.<br>Structure: If + O + is/am/are + V3 + by + S, O + will + be + V3 + by + S (optional).",
                            answer: "If I am helped by you, the work will be finished quickly."
                        },
                        // Conditional Type 2
                        {
                            sentence: "Active (Conditional Type 2): If I had money, I would buy a car.",
                            khmer: "Active: <br>បើខ្ញុំមានលុយ ខ្ញុំនឹងទិញឡាន។ <br> If I ..... money, I ..... a car.<br>Structure: If + S + V2 + O, S + would + V1 + O.",
                            answer: "If I had money, I would buy a car."
                        },
                        {
                            sentence: "Passive (Conditional Type 2): If money were had by me, a car would be bought.",
                            khmer: "Passive: <br>បើលុយត្រូវបានមានដោយខ្ញុំ ឡានមួយនឹងត្រូវបានទិញ។ <br> If money ..... by me, a car ..... bought.<br>Structure: If + O + were + V3 + by + S, O + would + be + V3 + by + S (optional).",
                            answer: "If money were had by me, a car would be bought."
                        },
                        // Conditional Type 3
                        {
                            sentence: "Active (Conditional Type 3): If he had studied, he would have passed the exam.",
                            khmer: "Active: <br>បើគាត់បានរៀន គាត់នឹងបានប្រឡងជាប់។ <br> If he ....., he ..... the exam.<br>Structure: If + S + had + V3 + O, S + would have + V3 + O.",
                            answer: "If he had studied, he would have passed the exam."
                        },
                        {
                            sentence: "Passive (Conditional Type 3): If the exam had been studied for by him, it would have been passed.",
                            khmer: "Passive: <br>បើការប្រឡងត្រូវបានរៀនដោយគាត់ វានឹងត្រូវបានប្រឡងជាប់។ <br> If the exam ..... for by him, it ..... passed.<br>Structure: If + O + had been + V3 + by + S, O + would have been + V3 + by + S (optional).",
                            answer: "If the exam had been studied for by him, it would have been passed."
                        },
                        // Mixed Conditional (Past action affecting Present result)
                        {
                            sentence: "Active (Mixed Conditional): If I had studied harder, I would be a doctor now.",
                            khmer: "Active: <br>បើខ្ញុំបានរៀនខ្លាំងជាងនេះ ខ្ញុំនឹងក្លាយជាគ្រូពេទ្យឥឡូវនេះ។ <br> If I ..... harder, I ..... a doctor now.<br>Structure: If + S + had + V3, S + would + V1 + (now).",
                            answer: "If I had studied harder, I would be a doctor now."
                        },
                        {
                            sentence: "Passive (Mixed Conditional): If I had been taught by a better teacher, I would be a doctor now.",
                            khmer: "Passive: <br>បើខ្ញុំត្រូវបានបង្រៀនដោយគ្រូល្អជាងនេះ ខ្ញុំនឹងក្លាយជាគ្រូពេទ្យឥឡូវនេះ។ <br> If I ..... by a better teacher, I ..... a doctor now.<br>Structure: If + O + had been + V3 + by + S (optional), O + would + be + V3 + (now).",
                            answer: "If I had been taught by a better teacher, I would be a doctor now."
                        },
                        // Mixed Conditional (Present action affecting Past result - less common but possible)
                        {
                            sentence: "Active (Mixed Conditional): If I were rich, I would have bought that house yesterday.",
                            khmer: "Active: <br>បើខ្ញុំមានលុយ ខ្ញុំនឹងបានទិញផ្ទះនោះកាលពីម្សិលមិញ។ <br> If I ..... rich, I ..... that house yesterday.<br>Structure: If + S + V2 (were for all subjects) + ..., S + would have + V3 + (yesterday/past time).",
                            answer: "If I were rich, I would have bought that house yesterday."
                        },
                        {
                            sentence: "Passive (Mixed Conditional): If I were rich, that house would have been bought by me yesterday.",
                            khmer: "Passive: <br>បើខ្ញុំមានលុយ ផ្ទះនោះនឹងត្រូវបានទិញដោយខ្ញុំកាលពីម្សិលមិញ។ <br> If I ..... rich, that house ..... by me yesterday.<br>Structure: If + S + V2 (were for all subjects) + ..., O + would have been + V3 + by + S (optional) + (yesterday/past time).",
                            answer: "If I were rich, that house would have been bought by me yesterday."
                        },
                        // Omitted Conditional (Type 1 with inversion)
                        {
                            sentence: "Active (Omitted Conditional Type 1): Should you need help, please call me.",
                            khmer: "Active: <br>បើអ្នកត្រូវការជំនួយ សូមទូរស័ព្ទមកខ្ញុំ។ <br> Should you ..... help, please ..... me.<br>Structure: Should + S + V1 + ..., Imperative.",
                            answer: "Should you need help, please call me."
                        },
                        {
                            sentence: "Passive (Omitted Conditional Type 1): Should help be needed by you, please call me.",
                            khmer: "Passive: <br>បើជំនួយត្រូវបានត្រូវការដោយអ្នក សូមទូរស័ពpមកខ្ញុំ។ <br> Should help ..... by you, please ..... me.<br>Structure: Should + O + be + V3 + by + S (optional), Imperative.",
                            answer: "Should help be needed by you, please call me."
                        },
                        // Omitted Conditional (Type 2 with inversion)
                        {
                            sentence: "Active (Omitted Conditional Type 2): Were I you, I would accept the offer.",
                            khmer: "Active: <br>បើខ្ញុំជាអ្នក ខ្ញុំនឹងទទួលយកការផ្តល់ជូននោះ។ <br> Were I ....., I ..... the offer.<br>Structure: Were + S + ..., S + would + V1 + O.",
                            answer: "Were I you, I would accept the offer."
                        },
                        {
                            sentence: "Passive (Omitted Conditional Type 2): Were the offer to be accepted by me, I would be helped.",
                            khmer: "Passive: <br>បើការផ្តល់ជូននោះត្រូវបានទទួលយកដោយខ្ញុំ ខ្ញុំនឹងត្រូវបានជួយ។ <br> Were the offer ..... by me, I ..... helped.<br>Structure: Were + O + to be + V3 + by + S (optional), S + would + be + V3.",
                            answer: "Were the offer to be accepted by me, I would be helped."
                        },
                        // Omitted Conditional (Type 3 with inversion)
                        {
                            sentence: "Active (Omitted Conditional Type 3): Had I known, I would have told you.",
                            khmer: "Active: <br>បើខ្ញុំបានដឹង ខ្ញុំនឹងបានប្រាប់អ្នក។ <br> Had I ....., I ..... you.<br>Structure: Had + S + V3 + ..., S + would have + V3 + O.",
                            answer: "Had I known, I would have told you."
                        },
                        {
                            sentence: "Passive (Omitted Conditional Type 3): Had I been told, I would have known.",
                            khmer: "Passive: <br>បើខ្ញុំត្រូវបានប្រាប់ ខ្ញុំនឹងបានដឹង។ <br> Had I ....., I ..... known.<br>Structure: Had + S + been + V3 + ..., S + would have + V3.",
                            answer: "Had I been told, I would have known."
                        }
                    ],
                    "No matter how / what / where / who / when / why..": [
                            {
                                sentence: "No matter how hard it is, I will try my best.",
                                khmer: "ទោះលំបាកយ៉ាងណាក៏ដោយ ខ្ញុំនឹងព្យាយាមអស់ពីលទ្ធភាព។ <br> No matter how ... it is, I will try my .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter how hard it is, I will try my best."
                            },
                            {
                                sentence: "No matter what happens, we will stay together.",
                                khmer: "ទោះមានរឿងអ្វីកើតឡើង ក៏យើងនៅជាមួយគ្នាដែរ។ <br> No matter what ... , we will stay .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter what happens, we will stay together."
                            },
                            {
                                sentence: "No matter where you go, I will follow you.",
                                khmer: "ទោះអ្នកទៅណា ក៏ខ្ញុំនឹងតាមអ្នកដែរ។ <br> No matter where ... go, I will follow .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter where you go, I will follow you."
                            },
                            {
                                sentence: "No matter who calls, please answer the phone.",
                                khmer: "ទោះអ្នកណាទូរស័ព្ទមក សូមលើកទូរស័ព្ទផង។ <br> No matter who ... , please answer the .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter who calls, please answer the phone."
                            },
                            {
                                sentence: "No matter when it starts, I will be there on time.",
                                khmer: "ទោះចាប់ផ្តើមនៅពេលណា ក៏ខ្ញុំនឹងទៅទាន់ពេលដែរ។ <br> No matter when ... starts, I will be there on .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter when it starts, I will be there on time."
                            },
                            {
                                sentence: "No matter why they left early, we should respect their decision.",
                                khmer: "ទោះពួកគេចាកចេញលឿនដោយសារអ្វី ក៏យើងគួរគោរពការសម្រេចចិត្តរបស់ពួកគេដែរ។ <br> No matter why ... left early, we should respect their .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter why they left early, we should respect their decision."
                            },
                            {
                                sentence: "No matter how tired I am, I will finish this project.",
                                khmer: "ទោះខ្ញុំនឿយហត់យ៉ាងណាក៏ដោយ ខ្ញុំនឹងបញ្ចប់គម្រោងនេះ។ <br> No matter how ... I am, I will finish this .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter how tired I am, I will finish this project."
                            },
                            {
                                sentence: "No matter what you say, I will support you.",
                                khmer: "ទោះអ្នកនិយាយអ្វី ក៏ខ្ញុំនឹងគាំទ្រអ្នកដែរ។ <br> No matter what ... say, I will support .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter what you say, I will support you."
                            },
                            {
                                sentence: "No matter where they go, they always find their way back home.",
                                khmer: "ទោះពួកគេទៅណា ក៏ពួកគេតែងតែរកផ្លូវត្រឡប់មកផ្ទះវិញដែរ។ <br> No matter where ... go, they always find their way back .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter where they go, they always find their way back home."
                            },
                            {
                                sentence: "No matter who wins the game, we will celebrate together.",
                                khmer: "ទោះអ្នកណាឈ្នះការប្រកួត ក៏យើងនឹងអបអរជាមួយគ្នាដែរ។ <br> No matter who ... the game, we will celebrate .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter who wins the game, we will celebrate together."
                            },
                            {
                                sentence: "No matter when it rains, we will still go for a walk.",
                                khmer: "ទោះភ្លៀងនៅពេលណា ក៏យើងនៅតែទៅដើរលេងដែរ។ <br> No matter when ... rains, we will still go for a .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter when it rains, we will still go for a walk."
                            },
                            {
                                sentence: "No matter why she is upset, I will be here to listen.",
                                khmer: "ទោះនាងខឹងដោយសារអ្វី ក៏ខ្ញុំនឹងនៅទីនេះដើម្បីស្តាប់ដែរ។ <br> No matter why ... is upset, I will be here to .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter why she is upset, I will be here to listen."
                            },
                            {
                                sentence: "No matter how difficult the task is, we will complete it together.",
                                khmer: "ទោះកិច្ចការលំបាកយ៉ាងណាក៏ដោយ យើងនឹងបញ្ចប់វាជាមួយគ្នា។ <br> No matter how ... the task is, we will complete it .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter how difficult the task is, we will complete it together."
                            },
                            {
                                sentence: "No matter what challenges we face, we will overcome them.",
                                khmer: "ទោះយើងប្រឈមមុខនឹងបញ្ហាអ្វីក៏ដោយ យើងនឹងជំនះវា។ <br> No matter what ... we face, we will overcome .... <br>រចនាសម្ព័ន្ធ៖ No matter + question word + subject + verb, main result.",
                                answer: "No matter what challenges we face, we will overcome them."
                            },
                        ],
                    "Inverted Conditionals with 'Had I...'": [
                            {
                                sentence: "Had I known about the event, I would have participated.",
                                khmer: "បើសិនខ្ញុំបានដឹងអំពីព្រឹត្តិការណ៍នេះ ខ្ញុំនឹងបានចូលរួម។ <br> Had I ... about the event, I would have .... <br>រចនាសម្ព័ន្ធ៖ Had + subject + past participle, subject + would have + past participle.",
                                answer: "Had I known about the event, I would have participated."
                            },
                            {
                                sentence: "Had she arrived on time, she would have seen the presentation.",
                                khmer: "បើសិននាងមកទាន់ពេល នាងនឹងបានឃើញបទបង្ហាញ។ <br> Had she ... on time, she would have seen the .... <br>រចនាសម្ព័ន្ធ៖ Had + subject + past participle, subject + would have + past participle.",
                                answer: "Had she arrived on time, she would have seen the presentation."
                            },
                            {
                                sentence: "Had they known about the party, they would have come.",
                                khmer: "បើសិនពួកគេបានដឹងអំពីពិធីជប់លៀង ពួកគេនឹងបានមក។ <br> Had they ... about the party, they would have .... <br>រចនាសម្ព័ន្ធ៖ Had + subject + past participle, subject + would have + past participle.",
                                answer: "Had they known about the party, they would have come."
                            },
                            {
                                sentence: "Had we studied harder, we would have passed the test.",
                                khmer: "បើសិនពួកយើងបានរៀន hardworking ពួកយើងនឹងបានប្រឡងជាប់។ <br> Had we ... harder, we would have passed the .... <br>រចនាសម្ព័ន្ធ៖ Had + subject + past participle, subject + would have + past participle.",
                                answer: "Had we studied harder, we would have passed the test."
                            },
                            {
                                sentence: "Had I known about the meeting, I would have attended.",
                                khmer: "បើសិនខ្ញុំបានដឹងអំពីការប្រជុំ ខ្ញុំនឹងបានចូលរួម។ <br> Had I ... about the meeting, I would have .... <br>រចនាសម្ព័ន្ធ៖ Had + subject + past participle, subject + would have + past participle.",
                                answer: "Had I known about the meeting, I would have attended."
                            },
                            {
                                sentence: "Had she studied harder, she would have passed the exam.",
                                khmer: "បើសិននាងបានរៀន hardworking នាងនឹងបានប្រឡងជាប់។ <br> Had she ... harder, she would have passed the .... <br>រចនាសម្ព័ន្ធ៖ Had + subject + past participle, subject + would have + past participle.",
                                answer: "Had she studied harder, she would have passed the exam."
                            },
                            {
                                sentence: "Had they arrived earlier, they would have caught the train.",
                                khmer: "បើសិនពួកគេមកដល់លឿនជាងនេះ ពួកគេនឹងបានទាន់រថភ្លើង។ <br> Had they ... earlier, they would have caught the .... <br>រចនាសម្ព័ន្ធ៖ Had + subject + past participle, subject + would have + past participle.",
                                answer: "Had they arrived earlier, they would have caught the train."
                            },
                            {
                                sentence: "Had we prepared better, we would have won the game.",
                                khmer: "បើសិនពួកយើងបានត្រៀមខ្លួនល្អជាងនេះ ពួកយើងនឹងបានឈ្នះការប្រកួត។ <br> Had we ... better, we would have won the .... <br>រចនាសម្ព័ន្ធ៖ Had + subject + past participle, subject + would have + past participle.",
                                answer: "Had we prepared better, we would have won the game."
                            },
                            {
                                sentence: "Had he listened to my advice, he would not have made that mistake.",
                                khmer: "បើសិនគាត់បានស្តាប់ដំបូន្មានខ្ញុំ គាត់នឹងមិនបានធ្វើខុសនោះទេ។ <br> Had he ... to my advice, he would not have made that .... <br>រចនាសម្ព័ន្ធ៖ Had + subject + past participle, subject + would not have + past participle.",
                                answer: "Had he listened to my advice, he would not have made that mistake."
                            },
                            {
                                sentence: "Had you told me earlier, I could have helped you.",
                                khmer: "បើសិនអ្នកបានប្រាប់ខ្ញុំមុននេះ ខ្ញុំអាចជួយអ្នកបាន។ <br> Had you ... me earlier, I could have helped .... <br>រចនាសម្ព័ន្ធ៖ Had + subject + past participle, subject + could have + past participle.",
                                answer: "Had you told me earlier, I could have helped you."
                            },

                        ],
                    "Such...that (Strong Cause-Effect)": [
                            {
                                sentence: "Such a beautiful day that we decided to go for a picnic.",
                                khmer: "ជាថ្ងៃដ៏ស្រស់ស្អាតដែលយើងសម្រេចចិត្តទៅពិសាអាហារក្រៅផ្ទះ។ <br> Such a beautiful ... that we decided to go for a .... <br>រចនាសម្ព័ន្ធ៖ Such + a/an + adjective + singular countable noun + that + result.",
                                answer: "Such a beautiful day that we decided to go for a picnic."
                            },
                            {
                                sentence: "Such interesting books that I couldn't put them down.",
                                khmer: "ជាសៀវភៅដែលគួរឱ្យចាប់អារម្មណ៍ខ្លាំងណាស់ ដែលខ្ញុំមិនអាចដាក់ចុះបាន។ <br> Such interesting ... that I couldn't put them .... <br>រចនាសម្ព័ន្ធ៖ Such + plural noun + that + result.",
                                answer: "Such interesting books that I couldn't put them down."
                            },
                            {
                                sentence: "Such an amazing performance that the audience gave a standing ovation.",
                                khmer: "ជាការសម្តែងដ៏អស្ចារ្យដែលទស្សនិកជនបានក្រោកឈរទះដៃ។ <br> Such an amazing ... that the audience gave a standing .... <br>រចនាសម្ព័ន្ធ៖ Such + an + adjective + singular countable noun + that + result.",
                                answer: "Such an amazing performance that the audience gave a standing ovation."
                            },
                            {
                                sentence: "Such delicious food that we ordered more.",
                                khmer: "ជាអាហារឆ្ងាញ់ណាស់ដែលយើងបានកុម្ម៉ង់បន្ថែម។ <br> Such delicious ... that we ordered .... <br>រចនាសម្ព័ន្ធ៖ Such + uncountable noun + that + result.",
                                answer: "Such delicious food that we ordered more."
                            },
                            {
                                sentence: "Such kind people that they helped us without hesitation.",
                                khmer: "ជាមនុស្សចិត្តល្អដែលពួកគេបានជួយយើងដោយមិនស្ទាក់ស្ទើរ។ <br> Such kind ... that they helped us without .... <br>រចនាសម្ព័ន្ធ៖ Such + plural noun + that + result.",
                                answer: "Such kind people that they helped us without hesitation."
                            },
                            {
                                sentence: "Such a challenging task that it took us all day to complete.",
                                khmer: "ជាកិច្ចការដ៏លំបាកដែលវាបានចំណាយពេលពេញមួយថ្ងៃដើម្បីបញ្ចប់។ <br> Such a challenging ... that it took us all day to .... <br>រចនាសម្ព័ន្ធ៖ Such + a/an + adjective + singular countable noun + that +result.",
                                answer: "Such a challenging task that it took us all day to complete."
                            },
                        ],
                    "Used to / Would (Past Habits)":[
                        {
                            sentence: "I used to play football every weekend.",
                            khmer: "ខ្ញុំធ្លាប់លេងបាល់ទាត់រៀងរាល់ចុងសប្តាហ៍។ <br> I ... play football every .... <br>រចនាសម្ព័ន្ធ៖ Subject + used to + Verb (base form) + ...",
                            answer: "I used to play football every weekend."
                        },
                        {
                            sentence: "He would go fishing with his grandfather every summer.",
                            khmer: "គាត់នឹងទៅត្រីជាមួយតាខ្លួនរៀងរាល់រដូវក្តៅ។ <br> He ... go fishing with his grandfather every .... <br>រចនាសម្ព័ន្ធ៖ Subject + would + Verb (base form) + ... (for repeated actions only).",
                            answer: "He would go fishing with his grandfather every summer."
                        },
                        {
                            sentence: "They used to live in that house before moving here.",
                            khmer: "ពួកគេធ្លាប់រស់នៅក្នុងផ្ទះនោះមុនពេលមកទីនេះ។ <br> They ... live in that house before moving .... <br>រចនាសម្ព័ន្ធ៖ Subject + used to + Verb (base form) + ...",
                            answer: "They used to live in that house before moving here."
                        },
                        {
                            sentence: "She would always help her friends with their homework.",
                            khmer: "នាងតែងតែជួយមិត្តភក្តិរបស់នាងក្នុងការងារផ្ទះ។ <br> She ... always help her friends with their homework.<br>រចនាសម្ព័ន្ធ៖ Subject + would + Verb (base form) + ... (for repeated actions only).",
                            answer: "She would always help her friends with their homework."
                        },
                        {
                            sentence: "We used to visit our grandparents every Sunday.",
                            khmer: "ពួកយើងធ្លាប់ទៅទស្សនាតាថាយាយរៀងរាល់ថ្ងៃអាទិត្យ។ <br> We ... visit our grandparents every .... <br>រចនាសម្ព័ន្ធ៖ Subject + used to + Verb (base form) + ...",
                            answer: "We used to visit our grandparents every Sunday."
                        },
                        
                    ],
                    "Expressing Likes & Dislikes":[
                        {
                            sentence: "I like playing basketball.",
                            khmer: "ខ្ញុំចូលចិត្តលេងបាល់បោះ។ <br> I ... playing basketball.<br>រចនាសម្ព័ន្ធ៖ Subject + like/love/enjoy/don't like/hate + Verb-ing.",
                            answer: "I like playing basketball."
                        },
                        {
                            sentence: "She loves reading books.",
                            khmer: "នាងស្រលាញ់ការអានសៀវភៅ។ <br> She ... reading books.<br>រចនាសម្ព័ន្ធ៖ Subject + like/love/enjoy/don't like/hate + Verb-ing.",
                            answer: "She loves reading books."
                        },
                        {
                            sentence: "They enjoy swimming in the pool.",
                            khmer: "ពួកគេចូលចិត្តហែលទឹកនៅក្នុងអាង។ <br> They ... swimming in the pool.<br>រចនាសម្ព័ន្ធ៖ Subject + like/love/enjoy/don't like/hate + Verb-ing.",
                            answer: "They enjoy swimming in the pool."
                        },
                        {
                            sentence: "He doesn't like eating vegetables.",
                            khmer: "គាត់មិនចូលចិត្តបរិច្ឆេទបន្លែទេ។ <br> He ... eating vegetables.<br>រចនាសម្ព័ន្ធ៖ Subject + don't like + Verb-ing.",
                            answer: "He doesn't like eating vegetables."
                        },
                        {
                            sentence: "We hate doing homework.",
                            khmer: "ពួកយើងស្អប់ធ្វើការងារផ្ទះ។ <br> We ... doing homework.<br>រចនាសម្ព័ន្ធ៖ Subject + hate + Verb-ing.",
                            answer: "We hate doing homework."
                        }
                    ],
                    "Present Perfect (Experiences & Unfinished Actions)":[
                        {
                            sentence: "I have finished my homework.",
                            khmer: "ខ្ញុំបានបញ្ចប់ការងារផ្ទះរបស់ខ្ញុំ។ <br> I ... finished my homework.<br>រចនាសម្ព័ន្ធ៖ Subject + have/has + Verb (past participle) + Object/Complement.",
                            answer: "I have finished my homework."
                        },
                        {
                            sentence: "She has visited Paris twice.",
                            khmer: "នាងបានទៅទស្សនាប៉ារីសពីរដង។ <br> She ... visited Paris twice.<br>រចនាសម្ព័ន្ធ៖ Subject + have/has + Verb (past participle) + Object/Complement.",
                            answer: "She has visited Paris twice."
                        },
                        {
                            sentence: "They have seen that movie before.",
                            khmer: "ពួកគេបានឃើញភាពយន្តនោះមុននេះ។ <br> They ... seen that movie before.<br>រចនាសម្ព័ន្ធ៖ Subject + have/has + Verb (past participle) + Object/Complement.",
                            answer: "They have seen that movie before."
                        },
                        {
                            sentence: "He has lost his keys.",
                            khmer: "គាត់បានបាត់សោររបស់គាត់។ <br> He ... lost his keys.<br>រចនាសម្ព័ន្ធ៖ Subject + have/has + Verb (past participle) + Object/Complement.",
                            answer: "He has lost his keys."
                        },
                        {
                            sentence: "We have completed the project on time.",
                            khmer: "ពួកយើងបានបញ្ចប់គម្រោងតាមពេលវេលា។ <br> We ... completed the project on time.<br>រចនាសម្ព័ន្ធ៖ Subject + have/has + Verb (past participle) + Object/Complement.",
                            answer: "We have completed the project on time."
                        }
                    ],
                    "Reporting Verbs (Direct & Indirect Speech)": [
                        {
                            sentence: "Direct: 'I am happy,' she said. Indirect: She said that she was happy.",
                            khmer: "ដោយផ្ទាល់: 'ខ្ញុំសប្បាយចិត្ត,' នាងនិយាយ។ ដោយប្រយោល: នាងនិយាយថា នាងសប្បាយចិត្ត។ <br> Direct: 'I ... happy,' she said. Indirect: She said that she ... happy. <br>រចនាសម្ព័ន្ធ៖ Direct: '...' + reporting verb. Indirect: Reporting verb + (that) + changed sentence (tense, pronoun, time/place).",
                            answer: "Direct: 'I am happy,' she said. Indirect: She said that she was happy."
                        },
                        {
                            sentence: "Direct: 'I bought a new phone yesterday,' he told me. Indirect: He told me that he had bought a new phone the day before.",
                            khmer: "ដោយផ្ទាល់: 'ខ្ញុំបានទិញទូរស័ព្ទថ្មីកាលពីម្សិលមិញ,' គាត់ប្រាប់ខ្ញុំ។ ដោយប្រយោល: គាត់ប្រាប់ខ្ញុំថា គាត់បានទិញទូរស័ព្ទថ្មីកាលពីថ្ងៃមុន។ <br> Direct: 'I ... a new phone yesterday,' he told me. Indirect: He told me that he ... bought a new phone the day before. <br>រចនាសម្ព័ន្ធ៖ Direct: '...' + reporting verb. Indirect: Reporting verb + (that) + changed sentence (tense, pronoun, time/place).",
                            answer: "Direct: 'I bought a new phone yesterday,' he told me. Indirect: He told me that he had bought a new phone the day before."
                        },
                        {
                            sentence: "Direct: 'I will call you tomorrow,' she promised. Indirect: She promised that she would call me the next day.",
                            khmer: "ដោយផ្ទាល់: 'ខ្ញុំនឹងទូរស័ព្ទទៅអ្នកនៅថ្ងៃស្អែក,' នាងសន្យា។ ដោយប្រយោល: នាងសន្យាថា នាងនឹងទូរស័ព្ទទៅខ្ញុំនៅថ្ងៃបន្ទាប់។ <br> Direct: 'I ... call you tomorrow,' she promised. Indirect: She promised that she ... call me the next day. <br>រចនាសម្ព័ន្ធ៖ Direct: '...' + reporting verb. Indirect: Reporting verb + (that) + changed sentence (tense, pronoun, time/place).",
                            answer: "Direct: 'I will call you tomorrow,' she promised. Indirect: She promised that she would call me the next day."
                        },
                        {
                            sentence: "Direct: 'Are you coming?' he asked. Indirect: He asked if I was coming.",
                            khmer: "ដោយផ្ទាល់: 'តើអ្នកកំពុងមកទេ?' គាត់សួរ។ ដោយប្រយោល: គាត់សួរថា តើខ្ញុំកំពុងមកទេ? <br> Direct: 'Are you ...?' he asked. Indirect: He asked if I ... coming. <br>រចនាសម្ព័ន្ធ៖ Direct: '...' + reporting verb. Indirect: Reporting verb + (that) + changed sentence (tense, pronoun, time/place).",
                            answer: "Direct: 'Are you coming?' he asked. Indirect: He asked if I was coming."
                        },
                        {
                            sentence: "Direct: 'Where do you live?' she inquired. Indirect: She inquired where I lived.",
                            khmer: "ដោយផ្ទាល់: 'តើអ្នករស់នៅឯណា?' នាងសួរ។ ដោយប្រយោល: នាងសួរថា តើខ្ញុំរស់នៅឯណា។ <br> Direct: 'Where do you ...?' she inquired. Indirect: She inquired where I .... <br>រចនាសម្ព័ន្ធ៖ Direct: '...' + reporting verb. Indirect: Reporting verb + (that) + changed sentence (tense, pronoun, time/place).",
                            answer: "Direct: 'Where do you live?' she inquired. Indirect: She inquired where I lived."
                        }
                    ],
                    "✅Object + be (is/am/are/was/were) + Verb (past participle) + (by agent).":[
                        {
                            sentence: "The book was written by J.K. Rowling.",
                            khmer: "សៀវភៅនេះត្រូវបានសរសេរដោយ J.K. Rowling។ <br> The book ... written by J.K. Rowling. <br>រចនាសម្ព័ន្ធ៖ Object + be (is/am/are/was/were) + Verb (past participle) + (by agent).",
                            answer: "The book was written by J.K. Rowling."
                        },
                        {
                            sentence: "The cake is being made by my mother.",
                            khmer: "នំកំពុងត្រូវបានធ្វើឡើងដោយម្តាយរបស់ខ្ញុំ។ <br> The cake ... being made by my mother. <br>រចនាសម្ព័ន្ធ៖ Object + be (is/am/are/was/were) + Verb (past participle) + (by agent).",
                            answer: "The cake is being made by my mother."
                        },
                        {
                            sentence: "The song was sung by the choir.",
                            khmer: "បទចម្រៀងត្រូវបានច្រៀងដោយក្រុមចម្រៀង។ <br> The song ... sung by the choir. <br>រចនាសម្ព័ន្ធ៖ Object + be (is/am/are/was/were) + Verb (past participle) + (by agent).",
                            answer: "The song was sung by the choir."
                        },
                        {
                            sentence: "The homework is done by the students.",
                            khmer: "ការងារផ្ទះត្រូវបានធ្វើដោយសិស្សានុសិស្ស។ <br> The homework ... done by the students. <br>រចនាសម្ព័ន្ធ៖ Object + be (is/am/are/was/were) + Verb (past participle) + (by agent).",
                            answer: "The homework is done by the students."
                        },
                        {
                            sentence: "The project was completed on time by the team.",
                            khmer: "គម្រោងត្រូវបានបញ្ចប់តាមពេលវេលាដោយក្រុម។ <br> The project ... completed on time by the team. <br>រចនាសម្ព័ន្ធ៖ Object + be (is/am/are/was/were) + Verb (past participle) + (by agent).",
                            answer: "The project was completed on time by the team."
                        },
                        {
                            sentence: "The letter is being written by John.",
                            khmer: "លិខិតកំពុងត្រូវបានសរសេរដោយ John។ <br> The letter ... being written by John. <br>រចនាសម្ព័ន្ធ៖ Object + be (is/am/are/was/were) + Verb (past participle) + (by agent).",
                            answer: "The letter is being written by John."
                        }
                    ],
                    "✅Connectors & Discourse Markers": [
                        {
                            sentence: "He was tired. Therefore, he went to bed early.",
                            khmer: "គាត់ហត់។ ហេតុដូច្នេះហើយ គាត់ក៏ចូលគេងលឿន។ <br> He was tired. ... , he went to bed .... <br>រចនាសម្ព័ន្ធ៖ Sentence 1 + Connector/Marker + Sentence 2; Discourse Marker at beginning of sentence/paragraph.",
                            answer: "He was tired. Therefore, he went to bed early."
                        },
                        {
                            sentence: "She likes apples. However, she prefers oranges.",
                            khmer: "នាងចូលចិត្តផ្លែប៉ោម។ ទោះជាយ៉ាងណាក៏ដោយ នាងចូលចិត្តក្រូចច្រើនជាង។ <br> She likes apples. ... , she prefers .... <br>រចនាសម្ព័ន្ធ៖ Sentence 1 + Connector/Marker + Sentence 2; Discourse Marker at beginning of sentence/paragraph.",
                            answer: "She likes apples. However, she prefers oranges."
                        },
                        {
                            sentence: "First, prepare the ingredients. Then, mix them well.",
                            khmer: "ដំបូង រៀបចំគ្រឿងផ្សំ។ បន្ទាប់មក លាយវាឱ្យសព្វ។ <br> ... , prepare the ingredients. ... , mix them .... <br>រចនាសម្ព័ន្ធ៖ Sentence 1 + Connector/Marker + Sentence 2; Discourse Marker at beginning of sentence/paragraph.",
                            answer: "First, prepare the ingredients. Then, mix them well."
                        },
                        {
                            sentence: "Moreover, the weather was bad. So, we stayed home.",
                            khmer: "លើសពីនេះ អាកាសធាតុក៏អាក្រក់។ ដូច្នេះ យើងក៏នៅផ្ទះ។ <br> ... , the weather was bad. ... , we stayed .... <br>រចនាសម្ព័ន្ធ៖ Sentence 1 + Connector/Marker + Sentence 2; Discourse Marker at beginning of sentence/paragraph.",
                            answer: "Moreover, the weather was bad. So, we stayed home."
                        },
                        {
                            sentence: "In conclusion, we had a wonderful time.",
                            khmer: "សរុបមក យើងមានពេលវេលាដ៏អស្ចារ្យ។ <br> In ... , we had a wonderful .... <br>រចនាសម្ព័ន្ធ៖ Sentence 1 + Connector/Marker + Sentence 2; Discourse Marker at beginning of sentence/paragraph.",
                            answer: "In conclusion, we had a wonderful time."
                        },
                        {
                            sentence: "For example, you can use this. Additionally, you can use that.",
                            khmer: "ជាឧទាហរណ៍ អ្នកអាចប្រើនេះបាន។ លើសពីនេះ អ្នកក៏អាចប្រើនោះបានដែរ។ <br> For ... , you can use this. ... , you can use that. <br>រចនាសម្ព័ន្ធ៖ Sentence 1 + Connector/Marker + Sentence 2; Discourse Marker at beginning of sentence/paragraph.",
                            answer: "For example, you can use this. Additionally, you can use that."
                        }
                    ],
                     " 🛠️So long as... (Condition)": [
                        {
                            sentence: "So long as you work hard, you will succeed.",
                            khmer: "ដរាបណាអ្នកខិតខំ អ្នកនឹងជោគជ័យ។ <br> So long as you ... hard, you will .... <br>រចនាសម្ព័ន្ធ៖ So long as + subject + verb, result clause.",
                            answer: "So long as you work hard, you will succeed."
                        },
                        {
                            sentence: "So long as it doesn't rain, we can go for a picnic.",
                            khmer: "ដរាបណាវាអត់ភ្លៀង យើងអាចទៅពិសាអាហារក្រៅផ្ទះបាន។ <br> So long as it ... rain, we can go for a .... <br>រចនាសម្ព័ន្ធ៖ So long as + subject + verb, result clause.",
                            answer: "So long as it doesn't rain, we can go for a picnic."
                        },
                        {
                            sentence: "You can borrow my car, so long as you fill up the tank.",
                            khmer: "អ្នកអាចខ្ចីឡានខ្ញុំបាន ដរាបណាអ្នកចាក់សាំងឱ្យពេញ។ <br> You can borrow my car, so long as you ... up the .... <br>រចនាសម្ព័ន្ធ៖ So long as + subject + verb, result clause.",
                            answer: "You can borrow my car, so long as you fill up the tank."
                        },
                        {
                            sentence: "So long as she's happy, I'm happy.",
                            khmer: "ដរាបណានាងសប្បាយចិត្ត ខ្ញុំក៏សប្បាយចិត្តដែរ។ <br> So long as she's ..., I'm .... <br>រចនាសម្ព័ន្ធ៖ So long as + subject + verb, result clause.",
                            answer: "So long as she's happy, I'm happy."
                        },
                        {
                            sentence: "They will support you, so long as you tell the truth.",
                            khmer: "ពួកគេនឹងគាំទ្រអ្នក ដរាបណាអ្នកនិយាយការពិត។ <br> They will support you, so long as you ... the .... <br>រចចនាសម្ព័ន្ធ៖ So long as + subject + verb, result clause.",
                            answer: "They will support you, so long as you tell the truth."
                        }
                    ],   
                    " 🧠 Suppose / Supposing that... (Hypothetical Scenarios)": [
                        {
                            sentence: "Suppose you win the lottery, what would you do?",
                            khmer: "ឧបមាថាអ្នកឈ្នះឆ្នោត តើអ្នកនឹងធ្វើអ្វី? <br> Suppose ... win the lottery, what would you ...?",
                            answer: "Suppose you win the lottery, what would you do?"
                        },
                        {
                            sentence: "Supposing that she calls, tell her I'll be late.",
                            khmer: "ឧបមាថានាងទូរស័ព្ទមក ប្រាប់នាងថាខ្ញុំនឹងមកយឺត។ <br> Supposing that she ... , tell her I'll be ....",
                            answer: "Supposing that she calls, tell her I'll be late."
                        },
                        {
                            sentence: "Suppose it rains tomorrow, should we cancel the picnic?",
                            khmer: "ឧបមាថាស្អែកភ្លៀង តើយើងគួរលុបការពិសាអាហារក្រៅផ្ទះដែរឬទេ? <br> Suppose it ... tomorrow, should we cancel the ...?",
                            answer: "Suppose it rains tomorrow, should we cancel the picnic?"
                        },
                        {
                            sentence: "Supposing that they agree, we can proceed with the plan.",
                            khmer: "ឧបមាថាពួកគេយល់ព្រម យើងអាចបន្តផែនការបាន។ <br> Supposing that they ... , we can proceed with the ....",
                            answer: "Supposing that they agree, we can proceed with the plan."
                        },
                        {
                            sentence: "Suppose he doesn't arrive on time, what then?",
                            khmer: "ឧបមាថាគាត់មិនមកទាន់ពេល តើមានអ្វីកើតឡើង? <br> Suppose he ... arrive on time, what ...?",
                            answer: "Suppose he doesn't arrive on time, what then?"
                        },
                        {
                            sentence: "Supposing that you had a million dollars, how would you spend it?",
                            khmer: "ឧបមាថាអ្នកមានប្រាក់មួយលាន ដូច្នេះអ្នកនឹងចំណាយវាដូចម្តេច? <br> Supposing that you ... a million dollars, how would you ...?",
                            answer: "Supposing that you had a million dollars, how would you spend it?"
                        },
                    ],
                         "Lest = so that...not, or to avoid":[
                        {
                            sentence: "She left early lest she miss the train.",
                            khmer: "នាងចេញលឿនខ្លាចក្រែងនាងខកឡានភ្លើង។ <br> Structure: [Main clause] + lest + [subject] + [base verb]. <br> (to avoid missing the train)",
                            answer: "She left early lest she miss the train."
                        },
                        {
                            sentence: "Take an umbrella lest it rain.",
                            khmer: "យកឆ័ត្រទៅ ក្រែងលោវាភ្លៀង។ <br> Structure: [Main clause] + lest + [subject] + [base verb]. <br> (in case it rains)",
                            answer: "Take an umbrella lest it rain."
                        },
                        {
                            sentence: "He spoke quietly lest anyone hear him.",
                            khmer: "គាត់និយាយដោយស្ងៀមស្ងាត់ ក្រែងលោអ្នកណាម្នាក់បានលឺគាត់។ <br> Structure: [Main clause] + lest + [subject] + [base verb].",
                            answer: "He spoke quietly lest anyone hear him."
                        },
                        {
                            sentence: "I write notes lest I forget what I study.",
                            khmer: "ខ្ញុំសរសេរកំណត់ចំណាំ ក្រែងលោខ្ញុំភ្លេចអ្វីដែលខ្ញុំរៀន។ <br> Structure: [Main clause] + lest + [subject] + [base verb].",
                            answer: "I write notes lest I forget what I study."
                        },
                            {
                                sentence: "They sealed the windows lest the cold air enter.",
                                khmer: "ពួកគេបិទបង្អួចយ៉ាងជិត ក្រែងលោខ្យល់ត្រជាក់ចូល។ <br> Structure: [Main clause] + lest + [subject] + [base verb].",
                                answer: "They sealed the windows lest the cold air enter."
                            },
                            {
                                sentence: "He wore a mask lest he spread the virus.",
                                khmer: "គាត់ពាក់ម៉ាស់ ក្រែងលោគាត់ឆ្លងមេរោគ។ <br> Structure: [Main clause] + lest + [subject] + [base verb].",
                                answer: "He wore a mask lest he spread the virus."
                            },
                            {
                                sentence: "She studied diligently lest she fail the exam.",
                                khmer: "នាងរៀនយ៉ាងឧស្សាហ៍ព្យាយាម ក្រែងលោនាងធ្លាក់ប្រឡង។ <br> Structure: [Main clause] + lest + [subject] + [base verb].",
                                answer: "She studied diligently lest she fail the exam."
                            },
                            {
                                sentence: "They whispered lest they wake the baby.",
                                khmer: "ពួកគេខ្សឹបខ្សៀវ ក្រែងលោពួកគេដាស់ទារក។ <br> Structure: [Main clause] + lest + [subject] + [base verb].",
                                answer: "They whispered lest they wake the baby."
                            },
                            {
                                sentence: "Be careful lest you slip on the ice.",
                                khmer: "ប្រយ័ត្ន ក្រែងលោអ្នករអិលលើទឹកកក។ <br> Structure: [Main clause] + lest + [subject] + [base verb].",
                                answer: "Be careful lest you slip on the ice."
                            },
                            {
                                sentence: "He carried a flashlight lest the power go out.",
                                khmer: "គាត់កាន់ពិល ក្រែងលោភ្លើងដាច់។ <br> Structure: [Main clause] + lest + [subject] + [base verb].",
                                answer: "He carried a flashlight lest the power go out."
                            }
                    ],
                    "⏰It's (high/about) time + subject + past simple":[
                        {
                            sentence: "It's time we went home.",
                            khmer: "Structure: It’s time + subject + past tense <br> It’s high time / about time + subject + past tense <br> ដល់ពេលពួកយើងទៅផ្ទះហើយ។", // Placeholder for Khmer translation
                            answer: "It's time we went home."
                        },
                        {
                            sentence: "It's high time you started looking for a job.",
                            khmer: "Structure: It’s time + subject + past tense <br> It’s high time / about time + subject + past tense <br> ដល់ពេលដែលអ្នកគួរតែចាប់ផ្តើមរកការងារធ្វើហើយ។", // Placeholder for Khmer translation
                            answer: "It's high time you started looking for a job."
                        },
                        {
                            sentence: "It's about time they apologized.",
                            khmer: "Structure: It’s time + subject + past tense <br> It’s high time / about time + subject + past tense <br> ដល់ពេលដែលពួកគេគួរតែសុំទោសហើយ។", // Placeholder for Khmer translation
                            answer: "It's about time they apologized."
                        },
                        {
                            sentence: "It's time she learned to drive.",
                            khmer: "Structure: It’s time + subject + past tense <br> It’s high time / about time + subject + past tense <br> ដល់ពេលដែលនាងគួរតែរៀនបើកបរហើយ។", // Placeholder for Khmer translation
                            answer: "It's time she learned to drive."
                        },
                        {
                            sentence: "It's high time the government took action.",
                            khmer: "Structure: It’s time + subject + past tense <br> It’s high time / about time + subject + past tense <br> ដល់ពេលដែលរដ្ឋាភិបាលគួរតែចាត់វិធានការហើយ។", // Placeholder for Khmer translation
                            answer: "It's high time the government took action."
                        },
                        {
                            sentence: "It's time we had a serious talk.",
                            khmer: "Structure: It’s time + subject + past tense <br> It’s high time / about time + subject + past tense <br> ដល់ពេលដែលពួកយើងគួរតែនិយាយគ្នាឲ្យបានច្បាស់លាស់ហើយ។", // Placeholder for Khmer translation
                            answer: "It's time we had a serious talk."
                        },
                        {
                            sentence: "It's high time he paid back the money he owes.",
                            khmer: "Structure: It’s time + subject + past tense <br> It’s high time / about time + subject + past tense <br> ដល់ពេលដែលគាត់គួរតែសងលុយដែលគាត់ជំពាក់ហើយ។", // Placeholder for Khmer translation
                            answer: "It's high time he paid back the money he owes."
                        },
                        {
                            sentence: "It's about time you cleaned your room.",
                            khmer: "Structure: It’s time + subject + past tense <br> It’s high time / about time + subject + past tense <br> ដល់ពេលដែលអ្នកគួរតែសម្អាតបន្ទប់របស់អ្នកហើយ។", // Placeholder for Khmer translation
                            answer: "It's about time you cleaned your room."
                        },
                        {
                            sentence: "It's time they understood the consequences.",
                            khmer: "Structure: It’s time + subject + past tense <br> It’s high time / about time + subject + past tense <br> ដល់ពេលដែលពួកគេគួរតែយល់ពីផលវិបាកហើយ។", // Placeholder for Khmer translation
                            answer: "It's time they understood the consequences."
                        },
                        {
                            sentence: "It's high time we left for the airport.",
                            khmer: "Structure: It’s time + subject + past tense <br> It’s high time / about time + subject + past tense <br> ដល់ពេលដែលពួកយើងគួរតែចេញទៅព្រលានយន្តហោះហើយ។", // Placeholder for Khmer translation
                            answer: "It's high time we left for the airport."
                        },
                        {
                            sentence: "It's about time I got a new phone.",
                            khmer: "Structure: It’s time + subject + past tense <br> It’s high time / about time + subject + past tense <br> ដល់ពេលដែលខ្ញុំគួរតែទូរស័ព្ទថ្មីហើយ។", // Placeholder for Khmer translation
                            answer: "It's about time I got a new phone."
                        }
                    ],
                    "🔁 Inverted Conditionals with 'Had I...'" :[
                        {
                            sentence: "Had I known you were coming, I would have baked a cake.",
                            khmer: "Structure: Had + subject + past participle, + subject + would have + past participle <br> Same meaning as: If + subject + had + past participle, ... <br> បើខ្ញុំដឹងថាអ្នកមក ខ្ញុំច្បាស់ជាដុតនំខេកហើយ។", // Placeholder for Khmer translation
                            answer: "Had I known you were coming, I would have baked a cake."
                        },
                        {
                            sentence: "Had she studied harder, she would have passed the exam.",
                            khmer: "Structure: Had + subject + past participle, + subject + would have + past participle <br> Same meaning as: If + subject + had + past participle, ... <br> បើនាងរៀនពូកែជាងនេះ នាងប្រាកដជាប្រឡងជាប់ហើយ។", // Placeholder for Khmer translation
                            answer: "Had she studied harder, she would have passed the exam."
                        },
                        {
                            sentence: "Had they left earlier, they would have caught the train.",
                            khmer: "Structure: Had + subject + past participle, + subject + would have + past participle <br> Same meaning as: If + subject + had + past participle, ... <br> បើពួកគេចេញលឿនជាងនេះ ពួកគេប្រាកដជាទាន់រថភ្លើងហើយ។", // Placeholder for Khmer translation
                            answer: "Had they left earlier, they would have caught the train."
                        },
                        {
                            sentence: "Had he listened to my advice, he wouldn't have made that mistake.",
                            khmer: "Structure: Had + subject + past participle, + subject + would have + past participle <br> Same meaning as: If + subject + had + past participle, ... <br> បើគាត់ស្តាប់ដំបូន្មានខ្ញុំ គាត់នឹងមិនធ្វើខុសនោះទេ។", // Placeholder for Khmer translation
                            answer: "Had he listened to my advice, he wouldn't have made that mistake."
                        },
                        {
                            sentence: "Had we arrived on time, we would have seen the beginning of the show.",
                            khmer: "Structure: Had + subject + past participle, + subject + would have + past participle <br> Same meaning as: If + subject + had + past participle, ... <br> បើពួកយើងមកទាន់ពេល ពួកយើងប្រាកដជាបានមើលការសម្តែងតាំងពីដើមហើយ។", // Placeholder for Khmer translation
                            answer: "Had we arrived on time, we would have seen the beginning of the show."
                        },
                        {
                            sentence: "Had you told me the truth, I would have helped you.",
                            khmer: "Structure: Had + subject + past participle, + subject + would have + past participle <br> Same meaning as: If + subject + had + past participle, ... <br> បើអ្នកប្រាប់ការពិត ខ្ញុំប្រាកដជាជួយអ្នកហើយ។", // Placeholder for Khmer translation
                            answer: "Had you told me the truth, I would have helped you."
                        },
                        {
                            sentence: "Had it rained, the plants would have grown faster.",
                            khmer: "Structure: Had + subject + past participle, + subject + would have + past participle <br> Same meaning as: If + subject + had + past participle, ... <br> បើភ្លៀង ដំណាំប្រាកដជាលូតលាស់លឿនជាងនេះ។", // Placeholder for Khmer translation
                            answer: "Had it rained, the plants would have grown faster."
                        },
                        {
                            sentence: "Had she accepted the offer, she would have moved to another city.",
                            khmer: "Structure: Had + subject + past participle, + subject + would have + past participle <br> Same meaning as: If + subject + had + past participle, ... <br> បើនាងទទួលយកការផ្តល់ជូន នាងប្រាកដជាផ្លាស់ទៅទីក្រុងផ្សេងហើយ។", // Placeholder for Khmer translation
                            answer: "Had she accepted the offer, she would have moved to another city."
                        },
                        {
                            sentence: "Had they invested wisely, they would have become rich.",
                            khmer: "Structure: Had + subject + past participle, + subject + would have + past participle <br> Same meaning as: If + subject + had + past participle, ... <br> បើពួកគេវិនិយោគដោយឆ្លាតវៃ ពួកគេប្រាកដជាក្លាយជាអ្នកមានហើយ។", // Placeholder for Khmer translation
                            answer: "Had they invested wisely, they would have become rich."
                        },
                        {
                            sentence: "Had I brought my camera, I would have taken some amazing photos.",
                            khmer: "Structure: Had + subject + past participle, + subject + would have + past participle <br> Same meaning as: If + subject + had + past participle, ... <br> បើខ្ញុំយកកាមេរ៉ាមក ខ្ញុំប្រាកដជាបានថតរូបស្អាតៗមួយចំនួនហើយ។", // Placeholder for Khmer translation
                            answer: "Had I brought my camera, I would have taken some amazing photos."
                        }
                    ],
                    "🌟Such...that" :[
                        {
                            sentence: "It was such a beautiful day that we decided to go for a picnic.",
                            khmer: "Structure: Such + (adjective) + noun + that + result <br> Or <br> Such + a/an + adjective + singular countable noun + that + result <br> វាជាថ្ងៃដ៏ស្រស់ស្អាតដែលពួកយើងសម្រេចចិត្តទៅដើរលេង។", // Placeholder for Khmer translation
                            answer: "It was such a beautiful day that we decided to go for a picnic."
                        },
                        {
                            sentence: "He has such great talent that everyone admires him.",
                            khmer: "Structure: Such + (adjective) + noun + that + result <br> Or <br> Such + a/an + adjective + singular countable noun + that + result <br> គាត់មានទេពកោសល្យដ៏អស្ចារ្យដែលអ្នករាល់គ្នា admires គាត់។", // Placeholder for Khmer translation
                            answer: "He has such great talent that everyone admires him."
                        },
                        {
                            sentence: "The movie was such a tragedy that it made everyone cry.",
                            khmer: "Structure: Such + (adjective) + noun + that + result <br> Or <br> Such + a/an + adjective + singular countable noun + that + result <br> កុននោះជាសោកនាដកម្មដែលធ្វើឲ្យអ្នករាល់គ្នាស្រក់ទឹកភ្នែក។", // Placeholder for Khmer translation
                            answer: "The movie was such a tragedy that it made everyone cry."
                        },
                        {
                            sentence: "She spoke with such clarity that everyone understood her message.",
                            khmer: "Structure: Such + (adjective) + noun + that + result <br> Or <br> Such + a/an + adjective + singular countable noun + that + result <br> នាងនិយាយយ៉ាងច្បាស់លាស់ដែលអ្នករាល់គ្នាបានយល់សាររបស់នាង។", // Placeholder for Khmer translation
                            answer: "She spoke with such clarity that everyone understood her message."
                        },
                        {
                            sentence: "They faced such severe challenges that they almost gave up.",
                            khmer: "Structure: Such + (adjective) + noun + that + result <br> Or <br> Such + a/an + adjective + singular countable noun + that + result <br> ពួកគេប្រឈមនឹងបញ្ហាធ្ងន់ធ្ងរដែលពួកគេស្ទើរតែបោះបង់ចោល។", // Placeholder for Khmer translation
                            answer: "They faced such severe challenges that they almost gave up."
                        },
                        {
                            sentence: "It was such an interesting book that I couldn't put it down.",
                            khmer: "Structure: Such + (adjective) + noun + that + result <br> Or <br> Such + a/an + adjective + singular countable noun + that + result <br> វាជាសៀវភៅដ៏គួរឲ្យចាប់អារម្មណ៍ដែលខ្ញុំមិនអាចដាក់ចុះបាន។", // Placeholder for Khmer translation
                            answer: "It was such an interesting book that I couldn't put it down."
                        },
                        {
                            sentence: "He showed such bravery that he became a local hero.",
                            khmer: "Structure: Such + (adjective) + noun + that + result <br> Or <br> Such + a/an + adjective + singular countable noun + that + result <br> គាត់បានបង្ហាញភាពក្លាហានដែលគាត់បានក្លាយជាវីរបុរសក្នុងស្រុក។", // Placeholder for Khmer translation
                            answer: "He showed such bravery that he became a local hero."
                        },
                        {
                            sentence: "They had such little time that they had to rush.",
                            khmer: "Structure: Such + (adjective) + noun + that + result <br> Or <br> Such + a/an + adjective + singular countable noun + that + result <br> ពួកគេមានពេលតិចណាស់ដែលពួកគេត្រូវប្រញាប់។", // Placeholder for Khmer translation
                            answer: "They had such little time that they had to rush."
                        },
                        {
                            sentence: "It was such a loud noise that it woke everyone up.",
                            khmer: "Structure: Such + (adjective) + noun + that + result <br> Or <br> Such + a/an + adjective + singular countable noun + that + result <br> វាជាសំឡេងដ៏ខ្លាំងដែលធ្វើឲ្យអ្នករាល់គ្នាភ្ញាក់។", // Placeholder for Khmer translation
                            answer: "It was such a loud noise that it woke everyone up."
                        },
                        {
                            sentence: "She has such a strong will that nothing can stop her.",
                            khmer: "Structure: Such + (adjective) + noun + that + result <br> Or <br> Such + a/an + adjective + singular countable noun + that + result <br> នាងមានឆន្ទៈដ៏រឹងមាំដែលគ្មានអ្វីអាចបញ្ឈប់នាងបានឡើយ។", // Placeholder for Khmer translation
                            answer: "She has such a strong will that nothing can stop her."
                        }
                    ],
                    "✅ Only if..." :[
                        {
                            sentence: "Only if it stops raining, we will go outside.",
                            khmer: "Structure: Only if + subject + verb, result clause <br> Or <br> Only if + condition + auxiliary + subject + verb <br> លុះត្រាតែឈប់ភ្លៀង ទើបពួកយើងចេញទៅខាងក្រៅ។", // Placeholder for Khmer translation
                            answer: "Only if it stops raining, we will go outside."
                        },
                        {
                            sentence: "Only if you study hard, will you pass the test.",
                            khmer: "Structure: Only if + subject + verb, result clause <br> Or <br> Only if + condition + auxiliary + subject + verb <br> លុះត្រាតែអ្នករៀនពូកែ ទើបអ្នកប្រឡងជាប់។", // Placeholder for Khmer translation
                            answer: "Only if you study hard, will you pass the test."
                        },
                        {
                            sentence: "Only if he apologizes, will she forgive him.",
                            khmer: "Structure: Only if + subject + verb, result clause <br> Or <br> Only if + condition + auxiliary + subject + verb <br> លុះត្រាតែគាត់សុំទោស ទើបនាងអត់ទោសឲ្យគាត់។", // Placeholder for Khmer translation
                            answer: "Only if he apologizes, will she forgive him."
                        },
                        {
                            sentence: "Only if I finish my work, can I go out.",
                            khmer: "Structure: Only if + subject + verb, result clause <br> Or <br> Only if + condition + auxiliary + subject + verb <br> លុះត្រាតែខ្ញុំបញ្ចប់ការងារ ទើបខ្ញុំអាចចេញទៅក្រៅបាន។", // Placeholder for Khmer translation
                            answer: "Only if I finish my work, can I go out."
                        },
                        {
                            sentence: "Only if you have a valid ticket, will you be allowed to enter.",
                            khmer: "Structure: Only if + subject + verb, result clause <br> Or <br> Only if + condition + auxiliary + subject + verb <br> លុះត្រាតែអ្នកមានសំបុត្រត្រឹមត្រូវ ទើបអ្នកត្រូវបានអនុញ្ញាតឲ្យចូល។", // Placeholder for Khmer translation
                            answer: "Only if you have a valid ticket, will you be allowed to enter."
                        },
                        {
                            sentence: "Only if we work together, can we achieve this goal.",
                            khmer: "Structure: Only if + subject + verb, result clause <br> Or <br> Only if + condition + auxiliary + subject + verb <br> លុះត្រាតែពួកយើងធ្វើការជាមួយគ្នា ទើបពួកយើងអាចសម្រេចគោលដៅនេះបាន។", // Placeholder for Khmer translation
                            answer: "Only if we work together, can we achieve this goal."
                        },
                        {
                            sentence: "Only if the weather improves, will the flight depart.",
                            khmer: "Structure: Only if + subject + verb, result clause <br> Or <br> Only if + condition + auxiliary + subject + verb <br> លុះត្រាតែអាកាសធាតុប្រសើរឡើង ទើបជើងហោះហើរចេញដំណើរ។", // Placeholder for Khmer translation
                            answer: "Only if the weather improves, will the flight depart."
                        },
                        {
                            sentence: "Only if she asks for help, should we intervene.",
                            khmer: "Structure: Only if + subject + verb, result clause <br> Or <br> Only if + condition + auxiliary + subject + verb <br> លុះត្រាតែនាងសុំជំនួយ ទើបពួកយើងគួរតែអន្តរាគមន៍។", // Placeholder for Khmer translation
                            answer: "Only if she asks for help, should we intervene."
                        },
                        {
                            sentence: "Only if all conditions are met, will the contract be signed.",
                            khmer: "Structure: Only if + subject + verb, result clause <br> Or <br> Only if + condition + auxiliary + subject + verb <br> លុះត្រាតែលក្ខខណ្ឌទាំងអស់ត្រូវបានបំពេញ ទើបកិច្ចសន្យាត្រូវបានចុះហត្ថលេខា។", // Placeholder for Khmer translation
                            answer: "Only if all conditions are met, will the contract be signed."
                        },
                        {
                            sentence: "Only if you promise to be careful, can you borrow my car.",
                            khmer: "Structure: Only if + subject + verb, result clause <br> Or <br> Only if + condition + auxiliary + subject + verb <br> លុះត្រាតែអ្នកសន្យាថានឹងប្រយ័ត្ន ទើបអ្នកអាចខ្ចីឡានខ្ញុំបាន។", // Placeholder for Khmer translation
                            answer: "Only if you promise to be careful, can you borrow my car."
                        }
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
                { text: "And a large soda, please.", audio: "audio/shadowing/and_a_large_soda_please.mp3" },
                { text: "How much is that?", audio: "audio/how_much_is_that.mp3" },
                { text: "Thank you, goodbye.", audio: "audio/thank_you_goodbye.mp3" }
            ]
        },
        conversation: {
             "🗂️ Example Workplace Conversation Using Should you…": [
                            { "speaker": "👨‍💼 You", "text": "Welcome aboard, Nina! Let me know if you need anything.", "khmer": "សូមស្វាគមន៍ នីណា! ប្រាប់ខ្ញុំផងបើអ្នកត្រូវការអ្វី។" },
                            { "speaker": "👩‍💼 Nina", "text": "Thanks so much! I’m still getting used to the system.", "khmer": "អរគុណច្រើន! ខ្ញុំនៅតែរៀនប្រើប្រព័ន្ធនេះនៅឡើយ។" },
                            { "speaker": "👨‍💼 You", "text": "No worries. Should you have any trouble logging in, just reach out to IT support.", "khmer": "កុំបារម្ភ។ ប្រសិនបើអ្នកមានបញ្ហាក្នុងការចូលគណនី សូមទាក់ទងផ្នែកជំនួយបច្ចេកទេស។" },
                            { "speaker": "👩‍💼 Nina", "text": "Okay, will do.", "khmer": "យល់ព្រម! ខ្ញុំនឹងធ្វើតាម។" },
                            { "speaker": "👨‍💼 You", "text": "Also, should you need access to any files, let me know and I’ll grant permission.", "khmer": "ម្យ៉ាងទៀត ប្រសិនបើអ្នកត្រូវការចូលប្រើឯកសារណាមួយ សូមប្រាប់ខ្ញុំ ហើយខ្ញុំនឹងផ្តល់សិទ្ធិ។" },
                            { "speaker": "👩‍💼 Nina", "text": "Thanks, I really appreciate it!", "khmer": "អរគុណ! ខ្ញុំពិតជាពេញចិត្តណាស់!" }
                          ],
                        "🗂️ Team Meeting Preparation: <b>Would you mind...?<b>": [
                                    { "speaker": "Scenario:", "text": "You're preparing for a team meeting tomorrow. You need help from a colleague named Sarah. ", "khmer": "" },
                                    
                                    { "speaker": "🧑‍💼 You", "text": "Hi Sarah, would you mind helping me prepare the slides for tomorrow's meeting?", "khmer": "សួស្ដីសារ៉ា! តើអ្នកជួយខ្ញុំរៀបចំស្លាយសម្រាប់កិច្ចប្រជុំថ្ងៃស្អែកបានទេ?" },
                                    { "speaker": "👩‍💼 Sarah", "text": "Sure, I can help. What exactly do you need?", "khmer": "បាន! ខ្ញុំអាចជួយបាន។ តើអ្នកត្រូវការអ្វីឲ្យប្រាកដ?" },
                                    { "speaker": "🧑‍💼 You", "text": "Would you mind reviewing the financial data section? I want to make sure everything is accurate.", "khmer": "តើអ្នកជួយពិនិត្យមើលផ្នែកទិន្នន័យហិរញ្ញវត្ថុបានទេ? ខ្ញុំចង់ប្រាកដថាអ្វីៗទាំងអស់ត្រឹមត្រូវ។" },
                                    { "speaker": "👩‍💼 Sarah", "text": "No problem. Do you want me to add any comments?", "khmer": "គ្មានបញ្ហាទេ។ តើអ្នកចង់ឲ្យខ្ញុំបន្ថែមមតិយោបល់ទេ?" },
                                    { "speaker": "🧑‍💼 You", "text": "Yes, please. And would you mind sending it back to me before 4 PM?", "khmer": "បាទ/ចាស! សូមមេត្តា។ ហើយតើអ្នកជួយផ្ញើវាត្រឡប់មកខ្ញុំវិញមុនម៉ោង ៤ ល្ងាចបានទេ?" },
                                    { "speaker": "👩‍💼 Sarah", "text": "Of course! I’ll get started right away.", "khmer": "ពិតណាស់! ខ្ញុំនឹងចាប់ផ្ដើមភ្លាមៗ។" }
                                  ],
                        "🗂️ Scenario: A team member is explaining a project delay during a meeting.<b>Due to / Owing to<b>": [
                                    { "speaker": "👨‍💼 You", "text": "Hi everyone, just a quick update on the project timeline.", "khmer": "ជំរាបសួរអ្នកទាំងអស់គ្នា! គ្រាន់តែធ្វើបច្ចុប្បន្នភាពខ្លីៗអំពីកាលវិភាគគម្រោង។" },
                                    { "speaker": "👩‍💼 Sarah", "text": "Sure, go ahead.", "khmer": "បាទ/ចាស! សូមបន្តទៅមុខ។" },
                                    { "speaker": "👨‍💼 You", "text": "The final report will be submitted by Friday due to a delay in receiving the client feedback.", "khmer": "របាយការណ៍ចុងក្រោយនឹងត្រូវដាក់ជូននៅត្រឹមថ្ងៃសុក្រ ដោយសារតែការពន្យារពេលក្នុងការទទួលមតិកែលម្អពីអតិថិជន។" },
                                    { "speaker": "👩‍💼 Sarah", "text": "Got it. Was the feedback expected earlier?", "khmer": "យល់ហើយ។ តើគេរំពឹងថានឹងទទួលបានមតិកែលម្អមុននេះទេ?" },
                                    { "speaker": "👨‍💼 You", "text": "Yes, but owing to a system outage on their end, they couldn’t send it on time.", "khmer": "បាទ/ចាស! ប៉ុន្តែដោយសារតែប្រព័ន្ធរបស់ពួកគេមានបញ្ហា ពួកគេមិនអាចផ្ញើវាបានទាន់ពេលទេ។" },
                                    { "speaker": "👩‍💼 Sarah", "text": "Understood. Will this affect the launch?", "khmer": "យល់ហើយ។ តើនេះនឹងប៉ះពាល់ដល់ការដាក់ឱ្យដំណើរការដែរឬទេ?" },
                                    { "speaker": "👨‍💼 You", "text": "No, we’ve adjusted our schedule slightly, so the launch will stay on track.", "khmer": "ទេ! យើងបានកែសម្រួលកាលវិភាគរបស់យើងបន្តិចបន្តួច ដូច្នេះការដាក់ឱ្យដំណើរការនឹងនៅតែដំណើរការតាមផែនការ។" }
                                  ],
                        "💼 Work setting: In order to…": [
                            { "speaker": "A", "text": "Hey, are you updating the project timeline?", "khmer": "ហេ៎! អ្នកកំពុងកែសម្រួលកាលវិភាគគម្រោងមែនទេ?" },
                            { "speaker": "B", "text": " Yeah, just adjusting it in order to stay on track for the deadline.", "khmer": "បាទ/ចាស! កំពុងកែសម្រួលវាដើម្បីឲ្យទាន់ពេលវេលាកំណត់។" }
                          ],
                          "👩‍🎓 School or group project: In order to…": [
                            { "speaker": "A", "text": "Why did you move that slide to the beginning?", "khmer": "ហេតុអ្វីអ្នកផ្លាស់ប្ដូរស្លាយនោះទៅខាងមុខ?" },
                            { "speaker": "B", "text": "I did that in order to give more context before we present the details.", "khmer": "ខ្ញុំធ្វើដូច្នេះដើម្បីផ្ដល់បរិបទបន្ថែម មុនពេលយើងបង្ហាញព័ត៌មានលម្អិត។" }
                          ],
                          "☕ Breakroom chat: In order to…": [
                            { "speaker": "You", "text": "You’re here early today!", "khmer": "អ្នកមកដល់លឿនម្ល៉េះថ្ងៃនេះ!" },
                            { "speaker": "Them", "text": "Yep! I came in early in order to finish some emails before the meetings start.", "khmer": "បាទ/ចាស! ខ្ញុំមកលឿនដើម្បីបញ្ចប់ការងារអ៊ីមែលខ្លះ មុនពេលកិច្ចប្រជុំចាប់ផ្ដើម។" }
                          ],
                          "💻 Tech help: In order to…": [
                            { "speaker": "You", "text": "My app isn’t syncing properly.", "khmer": "កម្មវិធីរបស់ខ្ញុំមិនធ្វើសមកាលកម្មត្រឹមត្រូវទេ។" },
                            { "speaker": "Them", "text": "You might need to log out and back in in order to reset the connection.", "khmer": "អ្នកប្រហែលជាត្រូវចេញពីគណនី ហើយចូលម្ដងទៀត ដើម្បីកំណត់ការតភ្ជាប់ឡើងវិញ។" }
                          ],
                          "🧳 Travel or planning: In order to…": [
                            { "speaker": "You", "text": "You’re packing already? The trip is next week!", "khmer": "អ្នកវេចខ្ចប់ហើយមែនទេ? ការធ្វើដំណើរនៅសប្ដាហ៍ក្រោយឯណោះ!" },
                            { "speaker": "Them", "text": "Yeah, I’m starting now in order to avoid last-minute stress.", "khmer": "បាទ/ចាស! ខ្ញុំចាប់ផ្ដើមឥឡូវនេះ ដើម្បីជៀសវាងភាពតានតឹងនៅនាទីចុងក្រោយ។" }
                          ],
                          "💼 Work setting (email or meeting): Should you…": [
                            { "speaker": "You", "text": "I’ve shared the draft with the team.", "khmer": "ខ្ញុំបានចែករំលែកសេចក្តីព្រាងជាមួយក្រុមហើយ។" },
                            { "speaker": "Them", "text": "Great! Should you have any feedback, feel free to drop it in the doc.", "khmer": "ល្អណាស់! ប្រសិនបើអ្នកមានមតិកែលម្អណាមួយ សូមដាក់វានៅក្នុងឯកសារ។" }
                          ],
                          "💬 Polite offering: Should you…": [
                            { "speaker": "You", "text": "I might need help with the charts later.", "khmer": "ខ្ញុំប្រហែលជាត្រូវការជំនួយជាមួយគំនូសតាងនៅពេលក្រោយ។" },
                            { "speaker": "Them", "text": "Of course! Should you need anything, just let me know — happy to help.", "khmer": "ពិតណាស់! ប្រសិនបើអ្នកត្រូវការអ្វី សូមប្រាប់ខ្ញុំ – រីករាយនឹងជួយ។" }
                          ],
                          "📁 Project handoff: Should you…": [
                            { "speaker": "You", "text": "Thanks for handing over those files.", "khmer": "អរគុណសម្រាប់ការប្រគល់ឯកសារទាំងនោះ។" },
                            { "speaker": "Them", "text": "No problem. Should you run into any issues, I’m around this week.", "khmer": "គ្មានបញ្ហាទេ។ ប្រសិនបើអ្នកជួបបញ្ហាណាមួយ ខ្ញុំនៅទីនេះសប្ដាហ៍នេះ។" }
                          ],
                          "🧑‍🏫 Teacher or mentor style: Should you…": [
                            { "speaker": "You", "text": "I’m not sure I’ll remember everything for the test.", "khmer": "ខ្ញុំមិនប្រាកដថាខ្ញុំនឹងចាំអ្វីៗទាំងអស់សម្រាប់កិច្ចការប្រឡងនោះទេ។" },
                            { "speaker": "Them", "text": "Should you have questions while studying, don’t hesitate to email me.", "khmer": "ប្រសិនបើអ្នកមានសំណួរពេលកំពុងសិក្សា សូមកុំស្ទាក់ស្ទើរក្នុងការផ្ញើអ៊ីមែលមកខ្ញុំ។" }
                          ],
                          "📞 Phone or client chat: Should you…": [
                            { "speaker": "You", "text": "Thanks for explaining the contract terms.", "khmer": "អរគុណសម្រាប់ការបកស្រាយលក្ខខណ្ឌកិច្ចសន្យា។" },
                            { "speaker": "Them", "text": "Absolutely. Should you decide to move forward, just give me a call.", "khmer": "ពិតណាស់។ ប្រសិនបើអ្នកសម្រេចចិត្តបន្តទៅមុខ សូមទូរស័ព្ទមកខ្ញុំ។" }
                          ],
                          "🌼 Friendly Work Setting: I’d appreciate it if you could...": [
                            { "speaker": "You", "text": "Hey! I’m wrapping up the report.", "khmer": "ហេ៎! ខ្ញុំកំពុងបញ្ចប់របាយការណ៍។" },
                            { "speaker": "Them", "text": "Nice! Let me know if you need anything.", "khmer": "ល្អណាស់! ប្រាប់ខ្ញុំផងបើអ្នកត្រូវការអ្វី។" },
                            { "speaker": "You", "text": "Thanks! I’d appreciate it if you could give it a quick read before tomorrow, just to catch any typos.", "khmer": "អរគុណ! ខ្ញុំនឹងពេញចិត្តណាស់ ប្រសិនបើអ្នកអាចអានវាបន្តិចមុនថ្ងៃស្អែក ដើម្បីចាប់កំហុសអក្ខរាវិរុទ្ធណាមួយ។" }
                          ],
                          "📧 Email or Chat Message: I’d appreciate it if you could...": [
                            { "speaker": "Hi [Name],", "text": "I hope your day’s going well!", "khmer": "សួស្ដី [ឈ្មោះ]!" },
                            { "speaker": "", "text": "I hope your day’s going well!", "khmer": "ខ្ញុំសង្ឃឹមថាថ្ងៃរបស់អ្នកដំណើរការល្អ!" },
                            { "speaker": "", "text": "I’d appreciate it if you could take a quick look at the budget section when you have a moment. Thanks so much!", "khmer": "ខ្ញុំនឹងពេញចិត្តណាស់ ប្រសិនបើអ្នកអាចមើលផ្នែកថវិកាបន្តិចបន្តួចនៅពេលអ្នកមានពេល។ អរគុណច្រើន!" }
                          ],
                          "👩‍💻 Group Project: I’d appreciate it if you could...": [
                            { "speaker": "You", "text": "Hey, I’m finalizing the slides.", "khmer": "ហេ៎! ខ្ញុំកំពុងបញ្ចប់ស្លាយ។" },
                            { "speaker": "Them", "text": "Cool — how’s it going?", "khmer": "ល្អណាស់ – យ៉ាងម៉េចហើយ?" },
                            { "speaker": "You", "text": "Pretty good! I’d appreciate it if you could double-check the conclusion slide to make sure we didn’t miss anything.", "khmer": "ល្អណាស់! ខ្ញុំនឹងពេញចិត្តណាស់ ប្រសិនបើអ្នកអាចពិនិត្យមើលស្លាយសេចក្តីសន្និដ្ឋានឡើងវិញ ដើម្បីប្រាកដថាយើងមិនបានខកខានអ្វីនោះទេ។" }
                          ],
                          "🧊 Slightly More Casual: I’d appreciate it if you could...": [
                            { "speaker": "You", "text": "I’d really appreciate it if you could save me a seat in the meeting room — I might be a couple of minutes late!", "khmer": "ខ្ញុំនឹងពេញចិត្តណាស់ ប្រសិនបើអ្នកអាចទុកកៅអីមួយឱ្យខ្ញុំនៅក្នុងបន្ទប់ប្រជុំ – ខ្ញុំប្រហែលជាយឺតបន្តិច!" }
                          ],
                          "💇 Casual / personal life: have/get something done": [
                            { "speaker": "You", "text": "Your hair looks great!", "khmer": "សក់របស់អ្នកមើលទៅស្អាតណាស់!" },
                            { "speaker": "Them", "text": "Thanks! I had it done yesterday at a new salon downtown.", "khmer": "អរគុណ! ខ្ញុំបានធ្វើវាកាលពីម្សិលមិញនៅហាងសាឡនថ្មីមួយនៅកណ្តាលក្រុង។" }
                          ],
                          "🚗 Car repair: have/get something done": [
                            { "speaker": "You", "text": "Your car’s back! What was the issue?", "khmer": "ឡានរបស់អ្នកមកវិញហើយ! តើមានបញ្ហាអ្វី?" },
                            { "speaker": "Them", "text": "Just needed an oil change. I got it done this morning.", "khmer": "គ្រាន់តែត្រូវការប្តូរប្រេងម៉ាស៊ីន។ ខ្ញុំបានធ្វើវាពេលព្រឹកនេះ។" }
                          ],
                          "🏠 Home repair: have/get something done": [
                            { "speaker": "You", "text": "Your kitchen looks different!", "khmer": "ផ្ទះបាយរបស់អ្នកមើលទៅប្លែក!" },
                            { "speaker": "Them", "text": "Yeah, we had the cabinets painted last week — totally freshened up the space.", "khmer": "បាទ/ចាស! យើងបានលាបពណ៌ទូដាក់ចានកាលពីសប្តាហ៍មុន – វាធ្វើឱ្យកន្លែងនេះស្រស់ថ្លាឡើងវិញ។" }
                          ],
                          "💼 Office setting: have/get something done": [
                            { "speaker": "You", "text": "Is the presentation ready?", "khmer": "បទបង្ហាញរួចរាល់ហើយឬនៅ?" },
                            { "speaker": "Them", "text": "Not yet, but I’ll get it done by lunch — just need to tweak a few slides.", "khmer": "មិនទាន់ទេ ប៉ុន្តែខ្ញុំនឹងធ្វើវាឱ្យរួចរាល់ត្រឹមពេលបាយថ្ងៃត្រង់ – គ្រាន់តែត្រូវការកែសម្រួលស្លាយមួយចំនួន។" }
                          ],
                          "👩‍🎓 Study / student life: have/get something done": [
                            { "speaker": "You", "text": "Did you finish the assignment?", "khmer": "តើអ្នកបានបញ្ចប់កិច្ចការដែលបានផ្ដល់ឱ្យហើយឬនៅ?" },
                            { "speaker": "Them", "text": "I’m trying to get it done tonight so I can relax tomorrow.", "khmer": "ខ្ញុំកំពុងព្យាយាមធ្វើវាឱ្យរួចរាល់យប់នេះ ដើម្បីខ្ញុំអាចសម្រាកនៅថ្ងៃស្អែក។" }
                          ],
                          "💻 Tech help: have/get something done": [
                            { "speaker": "You", "text": "My laptop’s acting up again.", "khmer": "កុំព្យូទ័រយួរដៃរបស់ខ្ញុំមានបញ្ហាទៀតហើយ។" },
                            { "speaker": "Them", "text": "Same here. I’m going to have IT look at it tomorrow.", "khmer": "ដូចគ្នាដែរ។ ខ្ញុំនឹងឱ្យផ្នែក IT ពិនិត្យមើលវាថ្ងៃស្អែក។" }
                          ],
                        "☕ Casual work chat: Due to…": [
    { "speaker": "You", "text": "Hey, where’s Sarah today?", "khmer": "ហេ៎! សារ៉ានៅឯណាថ្ងៃនេះ?" },
    { "speaker": "Them", "text": "She’s working from home due to a dentist appointment.", "khmer": "នាងធ្វើការពីផ្ទះដោយសារមានណាត់ជួបពេទ្យធ្មេញ។" }
  ],
  "💼 Office situation: Due to…": [
    { "speaker": "You", "text": "Are we still having the team meeting?", "khmer": "តើយើងនៅតែមានកិច្ចប្រជុំក្រុមដែរឬទេ?" },
    { "speaker": "Them", "text": "Nope, it was cancelled due to a scheduling conflict.", "khmer": "អត់ទេ វាត្រូវបានលុបចោលដោយសារតែមានបញ្ហាការកំណត់ពេល។" }
  ],
  "🌧 Weather-related: Due to…": [
    { "speaker": "You", "text": "The roads are so quiet today.", "khmer": "ផ្លូវស្ងាត់ណាស់ថ្ងៃនេះ។" },
    { "speaker": "Them", "text": "Yeah, probably owing to the heavy rain this morning.", "khmer": "បាទ/ចាស! ប្រហែលជាដោយសារតែភ្លៀងធ្លាក់ខ្លាំងកាលពីព្រឹកមិញ។" }
  ],
  "📉 Project update: Due to…": [
    { "speaker": "You", "text": "The timeline got pushed back, right?", "khmer": "កាលវិភាគត្រូវបានរុញទៅក្រោយមែនទេ?" },
    { "speaker": "Them", "text": "Yes — due to some unexpected delays with the vendor.", "khmer": "បាទ/ចាស! ដោយសារតែការពន្យារពេលដែលមិនបានរំពឹងទុកជាមួយអ្នកផ្គត់ផ្គង់។" }
  ],
  "🧑‍🎓 School or studying: Due to…": [
    { "speaker": "You", "text": "Did they extend the deadline?", "khmer": "តើពួកគេបានពន្យារពេលកំណត់ទេ?" },
    { "speaker": "Them", "text": "Yep, owing to some technical issues with the submission portal.", "khmer": "បាទ/ចាស! ដោយសារតែបញ្ហាបច្ចេកទេសមួយចំនួនជាមួយវិបផតថលដាក់ស្នើ។" }
  ],
  "💬 Friendly explanation: Due to…": [
    { "speaker": "You", "text": "Sorry I missed the call!", "khmer": "សុំទោសដែលខ្ញុំខកខានការហៅទូរស័ព្ទ!" },
    { "speaker": "Them", "text": "No worries — I figured it was due to your Wi-Fi issues earlier.", "khmer": "មិនអីទេ – ខ្ញុំគិតថាវាដោយសារតែបញ្ហា Wi-Fi របស់អ្នកកាលពីមុន។" }
  ],
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
                        { speaker: "B", text: "I brush my teeth and prepare my clothes for the next day.", khmer: "ខ្ញុំដុសធ្មេញ និងរៀបចំសម្លៀកបំពាក់សម្រាប់ថ្ងៃបន្ទាប់។" }
                            ],
                    "How are you? (with Present Continuous) ": [
                        { speaker: "A", text: "Hey! How are you?", khmer: "សួស្ដី! តើអ្នកសុខសប្បាយជាទេ?" },
                        { speaker: "B", text: "I’m doing well, thanks. How about you?", khmer: "ខ្ញុំសុខសប្បាយ អរគុណ។ តើអ្នកយ៉ាងម៉េច?" },
                        { speaker: "A", text: "I’m okay. I’m a little tired today.", khmer: "ខ្ញុំស្រួល។ ថ្ងៃនេះខ្ញុំឆាប់នឿយហត់បន្តិច។" },
                        { speaker: "B", text: "Oh, why? Are you studying a lot?", khmer: "អូហ៍ ហេតុអ្វី? តើអ្នកកំពុងសិក្សាខ្លាំងទេ?" },
                        { speaker: "A", text: "Yes, I’m studying for my English test.", khmer: "បាទ/ចាស ខ្ញុំកំពុងសិក្សាសម្រាប់ការប្រឡងភាសាអង់គ្លេស។" },
                        { speaker: "B", text: "I see. I’m also doing some homework now.", khmer: "ខ្ញុំយល់។ ខ្ញុំក៏កំពុងធ្វើកិច្ចការផ្ទះខ្លះឥឡូវនេះ។" },
                        { speaker: "A", text: "What subject?", khmer: "មុខវិជ្ជាអ្វី?" },
                        { speaker: "B", text: "Math. It’s a bit difficult.", khmer: "គណិតវិទ្យា។ វាពិបាកបន្តិច។" },
                        { speaker: "A", text: "Yeah, math can be hard.", khmer: "បាទ/ចាស គណិតវិទ្យាអាចពិបាក។" },
                        { speaker: "B", text: "Anyway, good luck with your test!", khmer: "យ៉ាងណាក៏ដោយ សូមសំណាងល្អសម្រាប់ការប្រឡងរបស់អ្នក!" },
                        { speaker: "A", text: "Thanks! Talk to you soon.", khmer: "អរគុណ! និយាយជាមួយអ្នកឆាប់ៗនេះ។" },
                        { speaker: "B", text: "See you!", khmer: "ជួបគ្នាឆាប់ៗ!" }
                    ],
                   
                    " Simple Conversation: How are you?": [
                        { speaker: "A", text: "Hi! How are you today?", khmer: "សួស្ដី! តើអ្នកសុខសប្បាយជាទេថ្ងៃនេះ?" },
                        { speaker: "B", text: "I’m good, thanks. And you?", khmer: "ខ្ញុំសុខសប្បាយ អរគុណ។ តើអ្នកយ៉ាងម៉េច?" },
                        { speaker: "A", text: "I’m fine too, thanks. What are you doing now?", khmer: "ខ្ញុំស្រួលដែរ អរគុណ។ តើអ្នកកំពុងធ្វើអ្វីឥឡូវនេះ?" },
                        { speaker: "B", text: "I’m just relaxing. I finished my homework.", khmer: "ខ្ញុំកំពុងសម្រាក។ ខ្ញុំបានធ្វើកិច្ចការផ្ទះរួចហើយ។" },
                        { speaker: "A", text: "That’s great! I just finished cooking dinner.", khmer: "ល្អណាស់! ខ្ញុំទើបធ្វើអាហារពេលល្ងាចរួច។" },
                        { speaker: "B", text: "Sounds good! Let’s talk later.", khmer: "ស្តាប់ទៅល្អ! តោះនិយាយគ្នាឆាប់ៗនេះ។" },
                        { speaker: "A", text: "Sure! Bye!", khmer: "បានហើយ! លាហើយ!" },
                        { speaker: "B", text: "Bye!", khmer: "លាហើយ!" }
                    ],
                    "🗣️Excuse Me": [
                        { speaker: "A", text: "Excuse me, can you help me?", khmer: "សុំទោស តើអ្នកអាចជួយខ្ញុំបានទេ?" },
                        { speaker: "B", text: "Sure! What do you need?", khmer: "បានហើយ! តើអ្នកត្រូវការអ្វី?" },
                        { speaker: "A", text: "I’m looking for the nearest bus stop.", khmer: "ខ្ញុំកំពុងស្វែងរកស្ថានីយឡានក្រុងដែលនៅជិតបំផុត។" },
                        { speaker: "B", text: "It’s just around the corner.", khmer: "វានៅជិតច្រកផ្លូវ។" },
                        { speaker: "A", text: "Thank you! And how often do the buses come?", khmer: "អរគុណ! ហើយតើឡានក្រុងមកជាញឹកញាប់ប៉ុន្មាន?" },
                        { speaker: "B", text: "They come every 15 minutes.", khmer: "វាមករៀងរាល់ 15 នាទី។" },
                        { speaker: "A", text: "Great! Thanks for your help!", khmer: "ល្អណាស់! អរគុណសម្រាប់ការជួយ!" },
                        { speaker: "B", text: "You’re welcome! Have a nice day!", khmer: "មិនអីទេ! សូមឱ្យមានថ្ងៃល្អ!" }
                    ],
                   
                    "🗣️ Conversation 1 – Excuse Me (Getting Attention)": [
                        { speaker: "Tourist", text: "Excuse me, could you help me for a moment?", khmer: "សុំទោស តើអ្នកអាចជួយខ្ញុំបានទេ?" },
                        { speaker: "Local", text: "Sure! What do you need?", khmer: "បានហើយ! តើអ្នកត្រូវការអ្វី?" },
                        { speaker: "Tourist", text: "I'm looking for the nearest train station. Could you tell me how to get there?", khmer: "ខ្ញុំកំពុងស្វែងរកស្ថានីយរថភ្លើងដែលនៅជិតបំផុត។ តើអ្នកអាចប្រាប់ខ្ញុំពីវិធីទៅដល់ទីនោះបានទេ?" },
                        { speaker: "Local", text: "Of course! It's just a few blocks away. Walk straight down this street and turn left at the traffic light.", khmer: "ច្បាស់ហើយ! វានៅតែប៉ុន្មានប្លុកទេ។ ដើរត្រង់តាមផ្លូវនេះ ហើយបត់ឆ្វេងនៅចំណុចភ្លើងសញ្ញាចរាចរណ៍។" },
                        { speaker: "Tourist", text: "Thank you! How long will it take to get there?", khmer: "អរគុណ! តើវាចំណាយពេលប៉ុន្មានដើម្បីទៅដល់ទីនោះ?" },
                        { speaker: "Local", text: "It should take about 10 minutes on foot.", khmer: "វាគួរតែចំណាយប្រហែល 10 នាទីដោយដើរជើង។" },
                        { speaker: "Tourist", text: "Great! Is there anything I should look out for?", khmer: "ល្អណាស់! តើមានអ្វីដែលខ្ញុំគួរប្រុងប្រយ័ត្នទេ?" },
                        { speaker: "Local", text: "Yes, you'll see a big park on your right before you reach the station. It's hard to miss.", khmer: "មាន! អ្នកនឹងឃើញសួនច្បារធំមួយនៅខាងស្តាំមុនពេលអ្នកទៅដល់ស្ថានីយ។ វាពិបាកខកខាន។" },
                        { speaker: "Tourist", text: "Thank you so much for your help!", khmer: "អរគុណច្រើនសម្រាប់ការជួយ!" },
                        { speaker: "Local", text: "You're welcome! Have a safe trip!", khmer: "មិនអីទេ! សូមធ្វើដំណើរដោយសុវត្ថិភាព!" }
                    ],
                    "🗣️ Conversation 2 – Excuse Me (Asking for Directions)": [
                        { speaker: "Student", text: "Excuse me, can you tell me where the library is?", khmer: "សុំទោស តើអ្នកអាចប្រាប់ខ្ញុំបានទេថាបណ្ណាល័យនៅឯណា?" },
                        { speaker: "Teacher", text: "Sure! It's on the second floor of this building.", khmer: "បានហើយ! វានៅជាន់ទីពីរនៃអគារនេះ។" },
                        { speaker: "Student", text: "Thank you! Is there an elevator?", khmer: "អរគុណ! តើមានជណ្តើរយន្តទេ?" },
                        { speaker: "Teacher", text: "Yes, there is one at the end of the hallway.", khmer: "មាន! វានៅចុងផ្លូវដើរនេះ។" },
                        { speaker: "Student", text: "Great! How long does it take to get there?", khmer: "ល្អណាស់! តើវាចំណាយពេលប៉ុន្មានដើម្បីទៅដល់ទីនោះ?" },
                        { speaker: "Teacher", text: "About 5 minutes if you take the elevator.", khmer: "ប្រហែល 5 នាទី ប្រសិនបើអ្នកប្រើជណ្តើរយន្ត។" },
                        { speaker: "Student", text: "Thanks for your help!", khmer: "អរគុណសម្រាប់ការជួយ!" },
                        { speaker: "Teacher", text: "You're welcome! Enjoy your time at the library!", khmer: "មិនអីទេ! សូមរីករាយពេលនៅបណ្ណាល័យ!" }
                    ],
                    "🗣️ Conversation 3 – Excuse Me (Making a Request)": [
                        { speaker: "Customer", text: "Excuse me, could I get a glass of water, please?", khmer: "សុំទោស តើខ្ញុំអាចស្នើសុំទឹកមួយកែវបានទេ?" },
                        { speaker: "Waiter", text: "Of course! Would you like ice with that?", khmer: "ច្បាស់ហើយ! តើអ្នកចង់បានទឹកកកជាមួយទឹកនោះទេ?" },
                        { speaker: "Customer", text: "Yes, please. And could I also have the menu?", khmer: "បាទ/ចាស សូម។ ហើយតើខ្ញុំអាចស្នើសុំម៉ឺនុយបានទេ?" },
                        { speaker: "Waiter", text: "Sure! Here you go.", khmer: "បានហើយ! នេះម៉ឺនុយ។" },
                        { speaker: "Customer", text: "Thank you! Can I order the special today?", khmer: "អរគុណ! តើខ្ញុំអាចបញ្ជាទិញម្ហូបពិសេសថ្ងៃនេះបានទេ?" },
                        { speaker: "Waiter", text: "Absolutely! Would you like anything else?", khmer: "ច្បាស់ហើយ! តើអ្នកចង់បានអ្វីផ្សេងទៀតទេ?" },
                        { speaker: "Customer", text: "No, that's all for now. Thank you!", khmer: "ទេ នោះគ្រប់គ្រាន់សម្រាប់ឥឡូវនេះ។ អរគុណ!" },
                        { speaker: "Waiter", text: "You're welcome! I'll bring your order shortly.", khmer: "មិនអីទេ! ខ្ញុំនឹងយកការបញ្ជាទិញរបស់អ្នកមកឆាប់ៗនេះ។" }
                    ],
                    "🗣️ Conversation 4 – Excuse Me (Asking for Help)": [
                        { speaker: "Shopper", text: "Excuse me, can you help me find the dairy section?", khmer: "សុំទោស តើអ្នកអាចជួយខ្ញុំរកផ្នែកទំនិញទឹកដោះគោបានទេ?" },
                        { speaker: "Store Employee", text: "Sure! It's in aisle 5, on your right.", khmer: "បានហើយ! វានៅជាន់ទី 5 ខាងស្តាំរបស់អ្នក។" },
                        { speaker: "Shopper", text: "Thank you! Do you have any recommendations for yogurt?", khmer: "អរគុណ! តើអ្នកមានការប្រាប់ផ្តល់យោបល់អំពីយូហ្គតទេ?" },
                        { speaker: "Store Employee", text: "Yes, our Greek yogurt is very popular. Would you like to try it?", khmer: "មាន! យូហ្គតក្រិករបស់យើងពេញនិយមណាស់។ តើអ្នកចង់សាកមើលទេ?" },
                        { speaker: "Shopper", text: "Yes, please! I'll take a few.", khmer: "បាទ/ចាស សូម! ខ្ញុំនឹងយកបន្តិច។" },
                        { speaker: "Store Employee", text: "Great choice! Let me know if you need anything else.", khmer: "ជម្រើសល្អណាស់! សូមប្រាប់ខ្ញុំប្រសិនបើអ្នកត្រូវការអ្វីផ្សេងទៀត។" },
                        { speaker: "Shopper", text: "I will. Thanks for your help!", khmer: "ខ្ញុំនឹងប្រាប់។ អរគុណសម្រាប់ការជួយ!" },
                        { speaker: "Store Employee", text: "You're welcome! Enjoy your shopping!", khmer: "មិនអីទេ! សូមរីករាយការទិញទំនិញ!" }
                    ],
                    "🗣️ Conversation 5 – Excuse Me (Asking for Information)": [
                        { speaker: "Visitor", text: "Excuse me, can you tell me where the nearest restroom is?", khmer: "សុំទោស តើអ្នកអាចប្រាប់ខ្ញុំបានទេថាបន្ទប់ទឹកដែលនៅជិតបំផុតនៅឯណា?" },
                        { speaker: "Receptionist", text: "Yes, it's down the hall to your left.", khmer: "មាន! វានៅចុងផ្លូវដើរនេះ ខាងឆ្វេងរបស់អ្នក។" },
                        { speaker: "Visitor", text: "Thank you! Is it clean?", khmer: "អរគុណ! តើវាស្អាតទេ?" },
                        { speaker: "Receptionist", text: "Yes, we clean it every hour.", khmer: "មាន! យើងសម្អាតវារៀងរាល់ម៉ោង។" },
                        { speaker: "Visitor", text: "Great! I appreciate your help.", khmer: "ល្អណាស់! ខ្ញុំសូមអរគុណសម្រាប់ការជួយរបស់អ្នក។" },
                        { speaker: "Receptionist", text: "You're welcome! Let me know if you need anything else.", khmer: "មិនអីទេ! សូមប្រាប់ខ្ញុំប្រសិនបើអ្នកត្រូវការអ្វីផ្សេងទៀត។" }
                    ],
                    "🗣️ Conversation 6 – Excuse Me (Asking for Assistance)": [
                        { speaker: "Hiker", text: "Excuse me, can you help me find the trailhead?", khmer: "សុំទោស តើអ្នកអាចជួយខ្ញុំរកចំណុចចាប់ផ្តើមផ្លូវដើរបានទេ?" },
                        { speaker: "Park Ranger", text: "Sure! It's about a mile down this road.", khmer: "បានហើយ! វាប្រហែលមួយម៉ាយនៅចុងផ្លូវនេះ។" },
                        { speaker: "Hiker", text: "Thank you! Is it a difficult hike?", khmer: "អរគុណ! តើវាជាផ្លូវដើរដ៏ពិបាកទេ?" },
                        { speaker: "Park Ranger", text: "It's moderate, but be prepared for some steep sections.", khmer: "វាមានកម្រិតមធ្យម ប៉ុន្តែត្រូវរៀបចំខ្លួនសម្រាប់ផ្នែកដែលមានជម្រាលខ្លាំង។" },
                        { speaker: "Hiker", text: "Got it! Do I need a permit to hike there?", khmer: "យល់ហើយ! តើខ្ញុំត្រូវការប័ណ្ណអនុញ្ញាតដើម្បីដើរនៅទីនោះទេ?" },
                        { speaker: "Park Ranger", text: "No permit is needed for day hikes.", khmer: "មិនចាំបាច់មានប័ណ្ណអនុញ្ញាតសម្រាប់ការដើរប្រចាំថ្ងៃទេ។" },
                        { speaker: "Hiker", text: "Thanks for the information!", khmer: "អរគុណសម្រាប់ព័ត៌មាន!" },
                        { speaker: "Park Ranger", text: "You're welcome! Enjoy your hike!", khmer: "មិនអីទេ! សូមរីករាយការដើររបស់អ្នក!" }
                    ],
                    "🗣️ Conversation 7 – Excuse Me (Asking for Help with a Problem)": [
                        { speaker: "Driver", text: "Excuse me, my car broke down. Can you help me?", khmer: "សុំទោស រថយន្តរបស់ខ្ញុំខូច។ តើអ្នកអាចជួយខ្ញុំបានទេ?" },
                        { speaker: "Bystander", text: "Of course! What seems to be the problem?", khmer: "ច្បាស់ហើយ! តើមានបញ្ហាអ្វី?" },
                        { speaker: "Driver", text: "I think I ran out of gas.", khmer: "ខ្ញុំគិតថាខ្ញុំអស់ប្រេង។" },
                        { speaker: "Bystander", text: "No problem. There's a gas station just down the road.", khmer: "មិនមានបញ្ហាទេ។ មានស្ថានីយប្រេងនៅចុងផ្លូវ។" },
                        { speaker: "Driver", text: "Thank you! Can you give me directions?", khmer: "អរគុណ! តើអ្នកអាចផ្តល់ទិសដៅឱ្យខ្ញុំបានទេ?" },
                        { speaker: "Bystander", text: "Sure! Just go straight and take the first right.", khmer: "បានហើយ! ដើរត្រង់ហើយបត់ស្តាំទីមួយ។" },
                        { speaker: "Driver", text: "Thanks a lot! I really appreciate your help.", khmer: "អរគុណច្រើន! ខ្ញុំពិតជាសូមអរគុណសម្រាប់ការជួយរបស់អ្នក។" },
                        { speaker: "Bystander", text: "You're welcome! Drive safely!", khmer: "មិនអីទេ! សូមបើកបរដោយសុវត្ថិភាព!" }
                    ],
                    "🗣️ Conversation8 – Excuse Me (Apologizing)": [
                        { speaker: "Person A", text: "Excuse me, I'm so sorry! I didn't mean to bump into you.", khmer: "សុំទោស ខ្ញុំសុំទោសណាស់! ខ្ញុំមិនមានបំណងប៉ះអ្នកទេ។" },
                        { speaker: "Person B", text: "Oh, it's okay. No harm done.", khmer: "អូហ៍ មិនអីទេ។ មិនមានការខូចខាតទេ។" },
                        { speaker: "Person A", text: "Are you sure? I hope I didn't hurt you.", khmer: "តើអ្នកប្រាកដទេ? ខ្ញុំសង្ឃឹមថាខ្ញុំមិនបានធ្វើឱ្យអ្នកឈឺទេ។" },
                        { speaker: "Person B", text: "No, I'm fine. Thank you for checking.", khmer: "ទេ ខ្ញុំស្រួល។ អរគុណសម្រាប់ការត្រួតពិនិត្យ។" },
                        { speaker: "Person A", text: "Alright, I'm really sorry again.", khmer: "បានហើយ ខ្ញុំសុំទោសម្តងទៀត។" },
                        { speaker: "Person B", text: "No problem at all. Have a good day!", khmer: "មិនមានបញ្ហាទេ។ សូមឱ្យមានថ្ងៃល្អ!" },
                        { speaker: "Person A", text: "You too! Take care.", khmer: "អ្នកដែរ! សូមថែរក្សាខ្លួន។" }
                    ],
                    "🗣️ Conversation 9 – Excuse Me (Asking for Clarification)": [
                        { speaker: "Student", text: "Excuse me, could you explain that last point again?", khmer: "សុំទោស តើអ្នកអាចពន្យល់ចំណុចចុងក្រោយនោះម្ដងទៀតបានទេ?" },
                        { speaker: "Teacher", text: "Sure! I was saying that photosynthesis is how plants make their food.", khmer: "បានហើយ! ខ្ញុំបាននិយាយថាដំណើរការបំលែងពន្លឺព្រះអាទិត្យគឺជាវិធីដែលរុក្ខជាតិផលិតអាហាររបស់ពួកវា។" },
                        { speaker: "Student", text: "Oh, I see. So they use sunlight to do that?", khmer: "អូ ខ្ញុំយល់ហើយ។ ដូច្នេះពួកវាប្រើពន្លឺព្រះអាទិត្យដើម្បីធ្វើវាដែរប៉ុន្មាន?" },
                        { speaker: "Teacher", text: "Exactly! They convert sunlight into energy.", khmer: "ច្បាស់ហើយ! ពួកវាបំលែងពន្លឺព្រះអាទិត្យទៅជាថាមពល។" },
                        { speaker: "Student", text: "Thank you for clarifying!", khmer: "អរគុណសម្រាប់ការពន្យល់ច្បាស់!" },
                        { speaker: "Teacher", text: "You're welcome! Let me know if you have any more questions.", khmer: "មិនអីទេ! សូមប្រាប់ខ្ញុំប្រសិនបើអ្នកមានសំណួរបន្ថែម។" }
                    ],
                    "🗣️ Conversation 10 – Excuse Me (Making a Suggestion)": [
                        { speaker: "Friend A", text: "Excuse me, I think we should try that new restaurant downtown.", khmer: "សុំទោស ខ្ញុំគិតថាយើងគួរតែសាកល្បងភោជនីយដ្ឋានថ្មីនោះនៅកណ្តាលទីក្រុង។" },
                        { speaker: "Friend B", text: "Oh, I've heard good things about it! What do you suggest we order?", khmer: "អូ ខ្ញុំបានឮអំពីវាហើយ! តើអ្នកផ្តល់យោបល់អ្វីខ្លះដែលយើងគួរបញ្ជាទិញ?" },
                        { speaker: "Friend A", text: "I heard their pasta is amazing. We should definitely try it.", khmer: "ខ្ញុំបានឮថាម៉ាការីរបស់ពួកវាអស្ចារ្យណាស់។ យើងគួរតែសាកល្បងវា។" },
                        { speaker: "Friend B", text: "Sounds great! Let's go there tonight.", khmer: "មានសំឡេងល្អណាស់! ចូរយើងទៅទីនោះនៅពេលយប់នេះ។" },
                        { speaker: "Friend A", text: "Perfect! I'll make a reservation.", khmer: "ល្អណាស់! ខ្ញុំនឹងធ្វើការកក់កន្លែង។" }
                    ],
                    "🗣️ Conversation 11 – Excuse Me (Offering Help)": [
                        { speaker: "Bystander", text: "Excuse me, do you need help with those bags?", khmer: "សុំទោស តើអ្នកត្រូវការជំនួយជាមួយកាបូបនោះទេ?" },
                        { speaker: "Person", text: "Oh, yes please! They're quite heavy.", khmer: "អូ បាទ/ចាស សូម! វាមានទំងន់គួរឱ្យភ្ញាក់ផ្អើល។" },
                        { speaker: "Bystander", text: "No problem! Where would you like me to take them?", khmer: "មិនមានបញ្ហាទេ! តើអ្នកចង់ឲ្យខ្ញុំយកវាទៅឯណា?" },
                        { speaker: "Person", text: "Just to my car, parked over there.", khmer: "គ្រាន់តែទៅរថយន្តរបស់ខ្ញុំ ដែលចតនៅទីនោះ។" },
                        { speaker: "Bystander", text: "Got it! Let's go.", khmer: "យល់ហើយ! ចូរយើងទៅ។" }
                    ],
                    "🗣️ Conversation 12 – Excuse Me (Asking for Directions)": [
                        { speaker: "Tourist", text: "Excuse me, can you tell me how to get to the museum?", khmer: "សុំទោស តើអ្នកអាចប្រាប់ខ្ញុំបានទេថាតើធ្វើដូចម្តេចដើម្បីទៅឈានដល់សារមន្ទីរនោះ?" },
                        { speaker: "Local", text: "Sure! Just go straight and take a left at the traffic light.", khmer: "បានហើយ! គ្រាន់តែដើរត្រង់ហើយបត់ឆ្វេងនៅច្រកចរាចរណ៍។" },
                        { speaker: "Tourist", text: "Thank you! How far is it from here?", khmer: "អរគុណ! វាម៉ោងប៉ុន្មានពីទីនេះ?" },
                        { speaker: "Local", text: "It's about a 10-minute walk.", khmer: "វាប្រហែលជាការដើរប្រហែល 10 នាទី។" },
                        { speaker: "Tourist", text: "Great! I appreciate your help.", khmer: "ល្អណាស់! ខ្ញុំសូមអរគុណសម្រាប់ការជួយរបស់អ្នក។" },
                        { speaker: "Local", text: "You're welcome! Enjoy your visit!", khmer: "មិនអីទេ! សូមរីករាយនឹងការអញ្ជើញរបស់អ្នក!" }
                    ],
                    "🗣️ Conversation 13 – Excuse Me (Making a Request)": [
                        { speaker: "Customer", text: "Excuse me, could I get a glass of water, please?", khmer: "សុំទោស តើខ្ញុំអាចទទួលបានកែវទឹកមួយបានទេ?" },
                        { speaker: "Waiter", text: "Of course! Would you like ice with that?", khmer: "ច្បាស់ហើយ! តើអ្នកចង់បានទឹកកកជាមួយវាទេ?" },
                        { speaker: "Customer", text: "Yes, please. That would be great.", khmer: "បាទ/ចាស សូម។ នោះនឹងល្អណាស់។" },
                        { speaker: "Waiter", text: "Coming right up!", khmer: "នឹងមកឆាប់ៗនេះ!" }
                    ],
                    "🗣️ Conversation 14 – Excuse Me (Interrupting Politely)": [
                        { speaker: "Speaker A", text: "Excuse me, may I add something to the discussion?", khmer: "សុំទោស តើខ្ញុំអាចបន្ថែមអ្វីមួយទៅក្នុងការពិភាក្សាបានទេ?" },
                        { speaker: "Speaker B", text: "Sure! What would you like to say?", khmer: "បានហើយ! តើអ្នកចង់និយាយអ្វី?" },
                        { speaker: "Speaker A", text: "I think we should consider another option.", khmer: "ខ្ញុំគិតថាយើងគួរតែពិចារណាជម្រើសផ្សេងទៀត។" },
                        { speaker: "Speaker B", text: "That's a good point. Let's hear it.", khmer: "នោះជាចំណុចល្អ។ ចូរយើងស្តាប់វា។" }
                    ],
                    "🗣️ Conversation 15 – Excuse Me (Seeking Permission)": [
                        { speaker: "Student", text: "Excuse me, may I leave the class early today?", khmer: "សុំទោស តើខ្ញុំអាចចាកចេញពីថ្នាក់មុនពេលវេលាថ្ងៃនេះបានទេ?" },
                        { speaker: "Teacher", text: "Yes, but please make sure to catch up on what you missed.", khmer: "មាន ប៉ុន្តែសូមប្រាកដថាអ្នកបានតាមដានអ្វីដែលអ្នកបានខកខាន។" },
                        { speaker: "Student", text: "Thank you! I will.", khmer: "អរគុណ! ខ្ញុំនឹងធ្វើ។" }
                    ],
                    "🗣️ Conversation 16 – Excuse Me (Expressing Gratitude)": [
                        { speaker: "Customer", text: "Excuse me, I just wanted to say thank you for your help today.", khmer: "សុំទោស ខ្ញុំគ្រាន់តែចង់និយាយថាអរគុណសម្រាប់ការជួយរបស់អ្នកថ្ងៃនេះ។" },
                        { speaker: "Store Employee", text: "You're very welcome! I'm glad I could assist you.", khmer: "មិនអីទេ! ខ្ញុំរីករាយដែលខ្ញុំអាចជួយអ្នកបាន។" },
                        { speaker: "Customer", text: "I really appreciate it. Have a great day!", khmer: "ខ្ញុំពិតជាសូមអរគុណ។ សូមឱ្យមានថ្ងៃល្អ!" },
                        { speaker: "Store Employee", text: "You too! Take care.", khmer: "អ្នកដែរ! សូមថែរក្សាខ្លួន។" }
                    ],
                    "🗣️ Conversation 17 – Excuse Me (Making a Complaint)": [
                        { speaker: "Customer", text: "Excuse me, I have a complaint about my order.", khmer: "សុំទោស ខ្ញុំមានការតវ៉ាអំពីការបញ្ជាទិញរបស់ខ្ញុំ។" },
                        { speaker: "Manager", text: "I'm sorry to hear that. What seems to be the problem?", khmer: "ខ្ញុំសូមទោសដែលបានឮអំពីវា។ តើមានបញ្ហាអ្វី?" },
                        { speaker: "Customer", text: "My food was cold when it arrived.", khmer: "ម្ហូបរបស់ខ្ញុំត្រជាក់ពេលវាមកដល់។" },
                        { speaker: "Manager", text: "I apologize for that. Let me fix it for you.", khmer: "ខ្ញុំសូមអភ័យទោសចំពោះវា។ ចូរឲ្យខ្ញុំជួសជុលវាសម្រាប់អ្នក។" }
                    ],
                    "🗣️ Conversation 18 – Excuse Me (Offering an Opinion)": [
                        { speaker: "Colleague A", text: "Excuse me, I think we should consider a different approach for this project.", khmer: "សុំទោស ខ្ញុំគិតថាយើងគួរតែពិចារណាវិធីផ្សេងសម្រាប់គម្រោងនេះ។" },
                        { speaker: "Colleague B", text: "That's an interesting idea. What do you suggest?", khmer: "នោះជាគំនិតគួរឱ្យចាប់អារម្មណ៍។ តើអ្នកផ្តល់យោបល់អ្វី?" },
                        { speaker: "Colleague A", text: "Maybe we could try a more collaborative method.", khmer: "ប្រហែលជាយើងអាចសាកល្បងវិធីសាស្ត្រសហការល្អប្រសើរឡើង។" },
                        { speaker: "Colleague B", text: "I like that! Let's discuss it further.", khmer: "ខ្ញុំចូលចិត្តវា! ចូរយើងពិភាក្សាអំពីវាបន្ថែមទៀត។" }
                    ],
                    "🗣️ Conversation 19 – Excuse Me (Requesting Assistance)": [
                        { speaker: "Shopper", text: "Excuse me, could you help me find the dairy section?", khmer: "សុំទោស តើអ្នកអាចជួយខ្ញុំរកផ្នែកទឹកដោះគោបានទេ?" },
                        { speaker: "Store Employee", text: "Of course! It's in aisle 5, right next to the bakery.", khmer: "ច្បាស់ហើយ! វានៅក្នុងផ្លូវ 5 នៅជាប់នឹងហាងនំ។" },
                        { speaker: "Shopper", text: "Thank you so much!", khmer: "អរគុណច្រើន!" },
                        { speaker: "Store Employee", text: "You're welcome! Let me know if you need anything else.", khmer: "មិនអីទេ! សូមប្រាប់ខ្ញុំប្រសិនបើអ្នកត្រូវការអ្វីផ្សេងទៀត។" }
                    ],
                    "🗣️ Conversation 20 – Excuse Me (Seeking Advice)": [
                        { speaker: "Friend A", text: "Excuse me, do you think I should take that job offer?", khmer: "សុំទោស តើអ្នកគិតថាខ្ញុំគួរតែទទួលការផ្តល់ជូនការងារនោះទេ?" },
                        { speaker: "Friend B", text: "I think you should consider it. It sounds like a great opportunity.", khmer: "ខ្ញុំគិតថាអ្នកគួរតែពិចារណាវា។ វាស្តាប់ទៅដូចជាឱកាសល្អ។" },
                        { speaker: "Friend A", text: "You're right. I will think about it.", khmer: "អ្នកត្រឹមត្រូវ។ ខ្ញុំនឹងពិចារណាអំពីវា។" }
                    ],
                    "🛍️ Conversation 1 – Basic Shopping": [
                        { speaker: "Customer", text: "Excuse me, how much does this shirt cost?", khmer: "សុំទោស តើអាវនេះថ្លៃប៉ុន្មាន?" },
                        { speaker: "Shopkeeper", text: "It’s $25.", khmer: "តម្លៃ ២៥ ដុល្លារ។" },
                        { speaker: "Customer", text: "Do you have it in another color?", khmer: "តើអ្នកមានពណ៌ផ្សេងទៀតទេ?" },
                        { speaker: "Shopkeeper", text: "Yes, we have it in blue and black.", khmer: "បាទ/ចាស យើងមានពណ៌ខៀវ និងខ្មៅ។" },
                        { speaker: "Customer", text: "I’ll take the black one, please.", khmer: "ខ្ញុំសូមយកពណ៌ខ្មៅ។" },
                        { speaker: "Shopkeeper", text: "Sure! Would you like to try it on?", khmer: "ប្រាកដហើយ! តើអ្នកចង់សាកវាទេ?" },
                        { speaker: "Customer", text: "Yes, please.", khmer: "បាទ/ចាស សូម។" }
                    ],
                    "🛍️ Conversation 2 – Grocery Shopping": [
                        { speaker: "Customer", text: "Excuse me, where can I find the fruits?", khmer: "សុំទោស តើខ្ញុំអាចរកផ្លែឈើនៅឯណា?" },
                        { speaker: "Store Employee", text: "The fruits are in aisle 3.", khmer: "ផ្លែឈើនៅក្នុងផ្លូវ ៣។" },
                        { speaker: "Customer", text: "Thank you! Do you have any organic apples?", khmer: "អរគុណ! តើអ្នកមានផ្លែប៉ោមសត្វធម្មជាតិក្នុងចំណោមផ្លែឈើទេ?" },
                        { speaker: "Store Employee", text: "Yes, we do. They are on sale today.", khmer: "បាទ/ចាស យើងមាន។ វាបញ្ចុះតម្លៃថ្ងៃនេះ។" },
                        { speaker: "Customer", text: "Great! I’ll take a bag.", khmer: "ល្អណាស់! ខ្ញុំនឹងយកកាបូបមួយ។" }
                    ],
                    "🛍️ Conversation 3 – Clothing Store": [
                        { speaker: "Customer", text: "Excuse me, can you help me find a dress for a party?", khmer: "សុំទោស តើអ្នកអាចជួយខ្ញុំរកឈុតសំលៀកបំពាក់សម្រាប់งานបុណ្យមួយបានទេ?" },
                        { speaker: "Store Assistant", text: "Of course! What size do you need?", khmer: "ប្រាកដហើយ! តើអ្នកត្រូវការទំហំអ្វី?" },
                        { speaker: "Customer", text: "I usually wear a medium.", khmer: "ខ្ញុំធម្មតាស្លៀកពាក់ទំហំមធ្យម។" },
                        { speaker: "Store Assistant", text: "Here are some options in medium size.", khmer: "នេះគឺជាជម្រើសខ្លះក្នុងទំហំមធ្យម។" },
                        { speaker: "Customer", text: "Thank you! I’ll try these on.", khmer: "អរគុណ! ខ្ញុំនឹងសាកល្បងពួកវា។" }
                    ],
                    "🛍️ Conversation 4 – Buying Fruit": [
                        { speaker: "Customer", text: "Hello, how much are these bananas?", khmer: "សួស្ដី តើចេកទាំងនេះថ្លៃប៉ុន្មាន?" },
                        { speaker: "Seller", text: "They’re $1.50 per kilogram.", khmer: "មួយគីឡូ ១.៥០ ដុល្លារ។" },
                        { speaker: "Customer", text: "Okay, I’ll take two kilograms.", khmer: "អូខេ ខ្ញុំយកពីរគីឡូ។" },
                        { speaker: "Seller", text: "No problem. Anything else?", khmer: "គ្មានបញ្ហាទេ។ មានអ្វីផ្សេងទៀតទេ?" },
                        { speaker: "Customer", text: "No, that’s all. Thank you!", khmer: "ទេ អស់ហើយ។ អរគុណ!" },
                        { speaker: "Seller", text: "You’re welcome!", khmer: "មិនអីទេ!" }
                    ],
                                    "👋 Conversation 1 – Saying Goodbye After School": [
                        { speaker: "Person A", text: "I have to go now. See you later!", khmer: "ខ្ញុំត្រូវទៅហើយ។ ជួបគ្នាពេលក្រោយ!" },
                        { speaker: "Person B", text: "Okay, see you later! Have a good day!", khmer: "អូខេ ជួបគ្នាពេលក្រោយ! សូមឱ្យមានថ្ងៃល្អ!" },
                        { speaker: "Person A", text: "You too!", khmer: "អ្នកក៏ដូចគ្នា!" }
                    ],
                    "👋 Conversation 2 – Leaving Work": [
                        { speaker: "Person A", text: "I’m done for today. I’m heading home.", khmer: "ខ្ញុំចប់ហើយសម្រាប់ថ្ងៃនេះ។ ខ្ញុំកំពុងត្រឡប់ទៅផ្ទះ។" },
                        { speaker: "Person B", text: "Alright! See you later!", khmer: "អូខេ! ជួបគ្នាពេលក្រោយ!" },
                        { speaker: "Person A", text: "Bye!", khmer: "លាហើយ!" }
                    ],
                    "👋 Conversation 3 – Ending a Phone Call": [
                        { speaker: "Person A", text: "I’ll talk to you again soon.", khmer: "ខ្ញុំនឹងនិយាយជាមួយអ្នកទៀតឆាប់ៗនេះ។" },
                        { speaker: "Person B", text: "Okay! See you later!", khmer: "អូខេ! ជួបគ្នាពេលក្រោយ!" },
                        { speaker: "Person A", text: "See you!", khmer: "ជួបគ្នា!" }
                    ],
                    "😔 Conversation 1 – Forgetting Something": [
                        { speaker: "Person A", text: "I forgot to bring your book.", khmer: "ខ្ញុំភ្លេចយកសៀវភៅរបស់អ្នកមក។" },
                        { speaker: "Person B", text: "That’s okay, I’m not in a hurry.", khmer: "មិនអីទេ ខ្ញុំមិនប្រញាប់ទេ។" },
                        { speaker: "Person A", text: "I’m really sorry about that.", khmer: "ខ្ញុំពិតជាសុំទោសចំពោះរឿងនោះ។" },
                        { speaker: "Person B", text: "No problem. Just bring it next time.", khmer: "គ្មានបញ្ហាទេ។ គ្រាន់តែយកវាមកពេលក្រោយទៅ។" }
                    ],
                    "⏰ Conversation 2 – Arriving Late": [
                        { speaker: "Person A", text: "I’m so sorry I’m late!", khmer: "ខ្ញុំសុំទោសដែលខ្ញុំមកយឺត!" },
                        { speaker: "Person B", text: "It’s alright. Did something happen?", khmer: "មិនអីទេ។ មានរឿងអីកើតឡើងមែនទេ?" },
                        { speaker: "Person A", text: "The traffic was really bad.", khmer: "ចរាចរណ៍អាក្រក់ខ្លាំងណាស់។" },
                        { speaker: "Person B", text: "I understand. Let’s start now.", khmer: "ខ្ញុំយល់ហើយ។ តោះចាប់ផ្តើមឥឡូវនេះ។" }
                    ],
                    "😬 Conversation 3 – Bumping Into Someone": [
                        { speaker: "Person A", text: "Oops! I’m sorry!", khmer: "អូស! ខ្ញុំសុំទោស!" },
                        { speaker: "Person B", text: "That’s okay. Are you alright?", khmer: "មិនអីទេ។ តើអ្នកសុខសប្បាយជាទេ?" },
                        { speaker: "Person A", text: "Yes, I didn’t see you there.", khmer: "បាទ/ចាស ខ្ញុំមិនបានឃើញអ្នកនៅទីនោះទេ។" },
                        { speaker: "Person B", text: "No worries. Be careful!", khmer: "កុំបារម្ភ។ ប្រយ័ត្នប្រយែងផង!" }
                    ],
                    "👂 Conversation 1 – Asking to Repeat": [
                        { speaker: "Person A", text: "The meeting is at 3 PM.", khmer: "កិច្ចប្រជុំគឺនៅម៉ោង ៣ រសៀល។" },
                        { speaker: "Person B", text: "Sorry, could you repeat that, please?", khmer: "សុំទោស តើអ្នកអាចនិយាយម្តងទៀតបានទេ?" },
                        { speaker: "Person A", text: "Sure. I said the meeting is at 3 PM.", khmer: "ប្រាកដហើយ។ ខ្ញុំបាននិយាយថាកិច្ចប្រជុំគឺនៅម៉ោង ៣ រសៀល។" },
                        { speaker: "Person B", text: "Got it. Thanks!", khmer: "បានហើយ។ អរគុណ!" }
                    ],
                    "🍽️ Conversation 2 – At a Restaurant": [
                        { speaker: "Waiter", text: "Would you like rice or noodles?", khmer: "តើអ្នកចង់បានបាយ ឬមី?" },
                        { speaker: "Customer", text: "Sorry, could you repeat that, please?", khmer: "សុំទោស តើអ្នកអាចនិយាយម្តងទៀតបានទេ?" },
                        { speaker: "Waiter", text: "I said, would you like rice or noodles?", khmer: "ខ្ញុំបាននិយាយថា តើអ្នកចង់បានបាយ ឬមី?" },
                        { speaker: "Customer", text: "Oh, rice, please!", khmer: "អូ បាយ សូម!" }
                    ],
                    "📞 Conversation 3 – On the Phone": [
                        { speaker: "Person A", text: "My phone number is 098 543 219.", khmer: "លេខទូរស័ព្ទរបស់ខ្ញុំគឺ ០៩៨ ៥៤៣ ២១៩។" },
                        { speaker: "Person B", text: "Could you say that again, please?", khmer: "តើអ្នកអាចនិយាយម្តងទៀតបានទេ?" },
                        { speaker: "Person A", text: "Sure. It’s 098 543 219.", khmer: "ប្រាកដហើយ។ គឺ ០៩៨ ៥៤៣ ២១៩។" },
                        { speaker: "Person B", text: "Thank you!", khmer: "អរគុណ!" }
                    ],
                    "💼 Conversation 1 – At a Party": [
                        { speaker: "Person A", text: "Nice to meet you! What do you do?", khmer: "រីករាយណាស់ដែលបានជួប! តើអ្នកធ្វើការអ្វី?" },
                        { speaker: "Person B", text: "I’m a teacher. How about you?", khmer: "ខ្ញុំជាគ្រូបង្រៀន។ ចុះអ្នកវិញ?" },
                        { speaker: "Person A", text: "I work in a bank.", khmer: "ខ្ញុំធ្វើការនៅធនាគារ។" }
                    ],
                    "💼 Conversation 2 – At School": [
                        { speaker: "Person A", text: "What does your father do?", khmer: "តើឪពុករបស់អ្នកធ្វើការអ្វី?" },
                        { speaker: "Person B", text: "He’s a doctor. He works at the hospital.", khmer: "គាត់ជាវេជ្ជបណ្ឌិត។ គាត់ធ្វើការនៅមន្ទីរពេទ្យ។" },
                        { speaker: "Person A", text: "That’s great! My dad is a farmer.", khmer: "ល្អណាស់! ឪពុកខ្ញុំជាកសិករ។" }
                    ],
                    "💼 Conversation 3 – Making New Friends": [
                        { speaker: "Person A", text: "So, what do you do?", khmer: "អញ្ចឹង តើអ្នកធ្វើការអ្វី?" },
                        { speaker: "Person B", text: "I’m a student. I study English at university.", khmer: "ខ្ញុំជាសិស្ស។ ខ្ញុំរៀនភាសាអង់គ្លេសនៅសាកលវិទ្យាល័យ។" },
                        { speaker: "Person A", text: "Cool! I’m learning English too.", khmer: "ឡូយ! ខ្ញុំក៏កំពុងរៀនភាសាអង់គ្លេសដែរ។" }
                    ],
                    "🌎 Conversation 1 – Basic Introduction": [
                        { speaker: "Person A", text: "Where are you from?", khmer: "អ្នកមកពីណា?" },
                        { speaker: "Person B", text: "I’m from Cambodia.", khmer: "ខ្ញុំមកពីកម្ពុជា។" },
                        { speaker: "Person A", text: "Oh, nice! I’ve heard Cambodia is beautiful.", khmer: "អូ ល្អណាស់! ខ្ញុំលឺថាកម្ពុជាស្រស់ស្អាត។" },
                        { speaker: "Person B", text: "Yes, it is!", khmer: "បាទ/ចាស វាពិតជាស្រស់ស្អាត!" }
                    ],
                    "🌎 Conversation 2 – At a Language School": [
                        { speaker: "Person A", text: "Hi! I’m Sarah. Where are you from?", khmer: "សួស្ដី! ខ្ញុំសារ៉ា។ អ្នកមកពីណា?" },
                        { speaker: "Person B", text: "I’m from Thailand. And you?", khmer: "ខ្ញុំមកពីប្រទេសថៃ។ ចុះអ្នកវិញ?" },
                        { speaker: "Person A", text: "I’m from Canada. Nice to meet you!", khmer: "ខ្ញុំមកពីប្រទេសកាណាដា។ រីករាយណាស់ដែលបានជួប!" },
                        { speaker: "Person B", text: "Nice to meet you too!", khmer: "រីករាយណាស់ដែលបានជួបអ្នកដូចគ្នា!" }
                    ],
                    "🌎 Conversation 3 – Talking About Hometown": [
                        { speaker: "Person A", text: "Where are you from?", khmer: "អ្នកមកពីណា?" },
                        { speaker: "Person B", text: "I’m from Siem Reap.", khmer: "ខ្ញុំមកពីសៀមរាប។" },
                        { speaker: "Person A", text: "Really? I love Angkor Wat!", khmer: "ពិតមែនទេ? ខ្ញុំចូលចិត្តអង្គរវត្តណាស់!" },
                        { speaker: "Person B", text: "Me too! I live near there.", khmer: "ខ្ញុំក៏ដូចគ្នា! ខ្ញុំរស់នៅជិតទីនោះ។" }
                    ],
                    "🕒 Conversation 1 – Asking for the Time": [
                        { speaker: "Person A", text: "Excuse me, what time is it?", khmer: "សុំទោស តើម៉ោងប៉ុន្មានហើយ?" },
                        { speaker: "Person B", text: "It’s 3:15.", khmer: "ម៉ោង ៣:១៥។" },
                        { speaker: "Person A", text: "Thank you!", khmer: "អរគុណ!" },
                        { speaker: "Person B", text: "You’re welcome.", khmer: "មិនអីទេ។" }
                    ],
                    "🕒 Conversation 2 – At School": [
                        { speaker: "Person A", text: "What time is it now?", khmer: "ឥឡូវម៉ោងប៉ុន្មានហើយ?" },
                        { speaker: "Person B", text: "It’s 7:45.", khmer: "ម៉ោង ៧:៤៥។" },
                        { speaker: "Person A", text: "Oh no! Class starts at 8:00.", khmer: "អូ ទេ! ថ្នាក់ចាប់ផ្តើមម៉ោង ៨:០០។" },
                        { speaker: "Person B", text: "Let’s hurry!", khmer: "តោះប្រញាប់!" }
                    ],
                    "🕒 Conversation 3 – On the Phone": [
                        { speaker: "Person A", text: "Do you know what time it is?", khmer: "តើអ្នកដឹងម៉ោងប៉ុន្មានហើយ?" },
                        { speaker: "Person B", text: "It’s almost midnight.", khmer: "ជិតពាក់កណ្តាលអធ្រាត្រហើយ។" },
                        { speaker: "Person A", text: "Really? I didn’t notice the time.", khmer: "ពិតមែនទេ? ខ្ញុំមិនបានចាប់អារម្មណ៍ម៉ោងសោះ។" },
                        { speaker: "Person B", text: "Time goes fast when you’re talking!", khmer: "ពេលវេលាហក់លឿនណាស់ពេលអ្នកកំពុងនិយាយ!" }
                    ],
                    "🕒 Conversation 4 – Daily Routine": [
                        { speaker: "Person A", text: "What time do you usually wake up?", khmer: "តើអ្នកភ្ញាក់ឡើងម៉ោងប៉ុន្មាន?" },
                        { speaker: "Person B", text: "I usually wake up at 6:30 AM.", khmer: "ខ្ញុំធម្មតាភ្ញាក់ឡើងម៉ោង ៦:៣០ ព្រឹក។" },
                        { speaker: "Person A", text: "That’s early! I wake up at 7:00.", khmer: "វាម៉ោងព្រឹកដល់ហើយ! ខ្ញុំភ្ញាក់ឡើងម៉ោង ៧:០០។" },
                        { speaker: "Person B", text: "Yeah, I like to start my day early.", khmer: "បាទ/ចាស ខ្ញុំចូលចិត្តចាប់ផ្តើមថ្ងៃរបស់ខ្ញុំនៅព្រឹកៗ។" }
                    ],
                    "🛍️ Conversation 1 – At a Clothing Store": [
                        { speaker: "Customer", text: "Excuse me, I’m looking for a black coat. Do you have any?", khmer: "សុំទោស ខ្ញុំកំពុងរកអាវរងាខ្មៅ។ តើអ្នកមានទេ?" },
                        { speaker: "Shop Assistant", text: "Yes, they’re over here.", khmer: "បាទ/ចាស ពួកវាត្រង់នេះ។" },
                        { speaker: "Customer", text: "Thank you. Can I try it on?", khmer: "អរគុណ។ ខ្ញុំអាចសាកបានទេ?" },
                        { speaker: "Shop Assistant", text: "Of course! The fitting room is right there.", khmer: "ពិតណាស់! បន្ទប់សាកនៅទីនោះ។" }
                    ],
                    "🛍️ Conversation 2 – At a Bookstore": [
                        { speaker: "Customer", text: "I’m looking for a book about English grammar.", khmer: "ខ្ញុំកំពុងរកសៀវភៅអំពីវេយ្យាករណ៍ភាសាអង់គ្លេស។" },
                        { speaker: "Clerk", text: "Sure! They’re in aisle 3, on the right.", khmer: "ប្រាកដហើយ! ពួកវាស្ថិតនៅធ្នើទី 3 ខាងស្តាំដៃ។" },
                        { speaker: "Customer", text: "Thank you so much.", khmer: "អរគុណច្រើនណាស់។" },
                        { speaker: "Clerk", text: "You’re welcome. Let me know if you need help.", khmer: "មិនអីទេ។ ប្រាប់ខ្ញុំផងបើអ្នកត្រូវការជំនួយ។" }
                    ],
                    "🛍️ Conversation 3 – At a Market": [
                        { speaker: "Customer", text: "I’m looking for fresh mangoes.", khmer: "ខ្ញុំកំពុងរកស្វាយស្រស់។" },
                        { speaker: "Seller", text: "Yes, we have some here. How many do you want?", khmer: "បាទ/ចាស យើងមាននៅទីនេះ។ តើអ្នកចង់បានប៉ុន្មាន?" },
                        { speaker: "Customer", text: "I’ll take three, please.", khmer: "ខ្ញុំសូមយកបី។" },
                        { speaker: "Seller", text: "No problem!", khmer: "គ្មានបញ្ហាទេ!" }
                    ],
                    "❓ Conversation 1 – In Class": [
                        { speaker: "Student", text: "Can I ask you a question?", khmer: "ខ្ញុំអាចសួរអ្នកសំណួរបានទេ?" },
                        { speaker: "Teacher", text: "Of course! What is it?", khmer: "ប្រាកដហើយ! តើវាជាអ្វី?" },
                        { speaker: "Student", text: "How do you spell “because”?", khmer: "តើអ្នកប្រកបពាក្យ “because” យ៉ាងដូចម្តេច?" },
                        { speaker: "Teacher", text: "B-E-C-A-U-S-E.", khmer: "ប៊ី-អ៊ី-ស៊ី-អេ-យូ-អេស-អ៊ី។" }
                    ],
                    "❓ Conversation 2 – At Work": [
                        { speaker: "Worker", text: "Can I ask you a question?", khmer: "ខ្ញុំអាចសួរអ្នកសំណួរបានទេ?" },
                        { speaker: "Boss", text: "Sure. Go ahead.", khmer: "ប្រាកដហើយ។ បន្តទៅ។" },
                        { speaker: "Worker", text: "What time is the meeting today?", khmer: "តើកិច្ចប្រជុំថ្ងៃនេះម៉ោងប៉ុន្មាន?" },
                        { speaker: "Boss", text: "It’s at 3 PM in the main room.", khmer: "គឺនៅម៉ោង ៣ រសៀល ក្នុងបន្ទប់ធំ។" }
                    ],
                    "❓ Conversation 3 – With a Friend": [
                        { speaker: "Friend A", text: "Hey, can I ask you a question?", khmer: "ហេ៎ ខ្ញុំអាចសួរអ្នកសំណួរបានទេ?" },
                        { speaker: "Friend B", text: "Yeah, sure!", khmer: "បាទ/ចាស ប្រាកដហើយ!" },
                        { speaker: "Friend A", text: "Do you want to study together this weekend?", khmer: "តើអ្នកចង់រៀនជាមួយគ្នាចុងសប្តាហ៍នេះទេ?" },
                        { speaker: "Friend B", text: "Yes, that’s a good idea!", khmer: "បាទ/ចាស នោះជាគំនិតល្អ!" }
                    ],
                    "🙏 Conversation 1 – Lifting Something": [
                        { speaker: "Person A", text: "Could you please help me carry this box?", khmer: "តើអ្នកអាចជួយខ្ញុំលើកប្រអប់នេះបានទេ?" },
                        { speaker: "Person B", text: "Sure, no problem!", khmer: "ប្រាកដហើយ គ្មានបញ្ហាទេ!" },
                        { speaker: "Person A", text: "Thank you so much.", khmer: "អរគុណច្រើនណាស់។" },
                        { speaker: "Person B", text: "You’re welcome!", khmer: "មិនអីទេ!" }
                    ],
                    "🙏 Conversation 2 – At School": [
                        { speaker: "Student", text: "Could you please help me with this question?", khmer: "តើអ្នកអាចជួយខ្ញុំដោះស្រាយសំណួរនេះបានទេ?" },
                        { speaker: "Friend", text: "Of course! Let me take a look.", khmer: "ប្រាកដហើយ! ទុកខ្ញុំមើលសិន។" },
                        { speaker: "Student", text: "I don’t understand number 5.", khmer: "ខ្ញុំមិនយល់លេខ ៥។" },
                        { speaker: "Friend", text: "No worries, I’ll explain it.", khmer: "កុំបារម្ភ ខ្ញុំនឹងពន្យល់វា។" }
                    ],
                    "🙏 Conversation 3 – On the Street": [
                        { speaker: "Tourist", text: "Excuse me, could you please help me find the bus station?", khmer: "សុំទោស តើអ្នកអាចជួយខ្ញុំរកស្ថានីយ៍ឡានក្រុងបានទេ?" },
                        { speaker: "Local", text: "Yes, it’s over there, near the coffee shop.", khmer: "បាទ/ចាស វាត្រង់នោះ ជិតហាងកាហ្វេ។" },
                        { speaker: "Tourist", text: "Thank you!", khmer: "អរគុណ!" },
                        { speaker: "Local", text: "You’re welcome. Have a good day!", khmer: "មិនអីទេ។ សូមឱ្យមានថ្ងៃល្អ!" }
                    ],
                    "🙏 Conversation 2 – At School": [
                        { speaker: "Student", text: "Could you please help me with this question?", khmer: "តើអ្នកអាចជួយខ្ញុំដោះស្រាយសំណួរនេះបានទេ?" },
                        { speaker: "Friend", text: "Of course! Let me take a look.", khmer: "ប្រាកដហើយ! ទុកខ្ញុំមើលសិន។" },
                        { speaker: "Student", text: "I don’t understand number 5.", khmer: "ខ្ញុំមិនយល់លេខ ៥។" },
                        { speaker: "Friend", text: "No worries, I’ll explain it.", khmer: "កុំបារម្ភ ខ្ញុំនឹងពន្យល់វា។" }
                    ],
                    "🙏 Conversation 3 – On the Street": [
                        { speaker: "Tourist", text: "Excuse me, could you please help me find the bus station?", khmer: "សុំទោស តើអ្នកអាចជួយខ្ញុំរកស្ថានីយ៍ឡានក្រុងបានទេ?" },
                        { speaker: "Local", text: "Yes, it’s over there, near the coffee shop.", khmer: "បាទ/ចាស វាត្រង់នោះ ជិតហាងកាហ្វេ។" },
                        { speaker: "Tourist", text: "Thank you!", khmer: "អរគុណ!" },
                        { speaker: "Local", text: "You’re welcome. Have a good day!", khmer: "មិនអីទេ។ សូមឱ្យមានថ្ងៃល្អ!" }
                    ],
                    "❓ Conversation – Asking About Time/Directions": [
                        { speaker: "Person A", text: "Is the meeting at 2 PM or 3 PM?", khmer: "តើកិច្ចប្រជុំម៉ោង 2 រសៀល ឬ 3 រសៀល?" },
                        { speaker: "Person B", text: "I’m not sure. Let me check.", khmer: "ខ្ញុំមិនច្បាស់ទេ។ ទុកខ្ញុំពិនិត្យមើលសិន។" },
                        { speaker: "Person A", text: "Okay, thanks!", khmer: "អូខេ អរគុណ!" },
                        { speaker: "Person A", text: "Does this bus go to the city center?", khmer: "តើឡានក្រុងនេះទៅកណ្តាលក្រុងទេ?" },
                        { speaker: "Person B", text: "I’m not sure. Maybe we can ask the driver.", khmer: "ខ្ញុំមិនច្បាស់ទេ។ ប្រហែលជាយើងអាចសួរអ្នកបើកបរបាន។" },
                        { speaker: "Student A", text: "Is the test on Monday or Tuesday?", khmer: "តើការប្រឡងនៅថ្ងៃច័ន្ទ ឬថ្ងៃអង្គារ?" },
                        { speaker: "Student B", text: "I’m not sure. I’ll ask the teacher and tell you later.", khmer: "ខ្ញុំមិនច្បាស់ទេ។ ខ្ញុំនឹងសួរគ្រូ ហើយប្រាប់អ្នកពេលក្រោយ។" }
                    ],
                    "❓ Conversation 1 – Asking About Time": [
                        { speaker: "Person A", text: "Is the meeting at 2 PM or 3 PM?", khmer: "តើកិច្ចប្រជុំម៉ោង 2 រសៀល ឬ 3 រសៀល?" },
                        { speaker: "Person B", text: "I’m not sure. Let me check.", khmer: "ខ្ញុំមិនច្បាស់ទេ។ ទុកខ្ញុំពិនិត្យមើលសិន។" },
                        { speaker: "Person A", text: "Okay, thanks!", khmer: "អូខេ អរគុណ!" }
                    ],
                    "🚌 Conversation 2 – Asking About Directions": [
                        { speaker: "Person A", text: "Does this bus go to the city center?", khmer: "តើឡានក្រុងនេះទៅកណ្តាលក្រុងទេ?" },
                        { speaker: "Person B", text: "I’m not sure. Maybe we can ask the driver.", khmer: "ខ្ញុំមិនច្បាស់ទេ។ ប្រហែលជាយើងអាចសួរអ្នកបើកបរបាន។" }
                    ],
                    "🗓️ Conversation 3 – At School (Test)": [
                        { speaker: "Student A", text: "Is the test on Monday or Tuesday?", khmer: "តើការប្រឡងនៅថ្ងៃច័ន្ទ ឬថ្ងៃអង្គារ?" },
                        { speaker: "Student B", text: "I’m not sure. I’ll ask the teacher and tell you later.", khmer: "ខ្ញុំមិនច្បាស់ទេ។ ខ្ញុំនឹងសួរគ្រូ ហើយប្រាប់អ្នកពេលក្រោយ។" }
                    ],
                    "💡 Conversation – Asking for Opinions": [
                        { speaker: "Person A", text: "I’m thinking of buying a new phone. What do you think?", khmer: "ខ្ញុំកំពុងគិតចង់ទិញទូរស័ព្ទថ្មី។ តើអ្នកគិតយ៉ាងណា?" },
                        { speaker: "Person B", text: "That’s a good idea!", khmer: "នោះជាគំនិតល្អ!" },
                        { speaker: "Person A", text: "Should we eat at the new restaurant? What do you think?", khmer: "តើយើងគួរញ៉ាំនៅភោជនីយដ្ឋានថ្មីទេ? តើអ្នកគិតយ៉ាងណា?" },
                        { speaker: "Person B", text: "I’ve heard it’s very good. Let’s try it!", khmer: "ខ្ញុំបានលឺថាវាល្អណាស់។ តោះសាកមើល!" },
                        { speaker: "Person A", text: "I want to visit Siem Reap next month. What do you think?", khmer: "ខ្ញុំចង់ទៅលេងសៀមរាបខែក្រោយ។ តើអ្នកគិតយ៉ាងណា?" },
                        { speaker: "Person B", text: "That sounds great! It’s a beautiful place.", khmer: "ស្តាប់ទៅល្អណាស់! វាជាកន្លែងដ៏ស្រស់ស្អាត។" }
                    ],
                    "☕ Conversation 1 – Ordering at a Café": [
                        { speaker: "Person A", text: "I’d like to order a coffee, please.", khmer: "ខ្ញុំចង់កុម្ម៉ង់កាហ្វេមួយ។" },
                        { speaker: "Barista", text: "Sure! What kind would you like?", khmer: "ប្រាកដហើយ! តើអ្នកចង់បានប្រភេទណា?" },
                        { speaker: "Person A", text: "I’d like a cappuccino, please.", khmer: "ខ្ញុំចង់បានកាប៉ូឈីណូមួយ។" },
                        { speaker: "Barista", text: "Great! Anything else?", khmer: "ល្អណាស់! មានអ្វីផ្សេងទៀតទេ?" },
                        { speaker: "Person A", text: "No, thank you.", khmer: "ទេ អរគុណ។" }
                    ],
                    "🍽️ Conversation 2 – At a Restaurant": [
                        { speaker: "Person A", text: "I’d like to have the chicken salad.", khmer: "ខ្ញុំចង់បានសាឡាដមាន់។" },
                        { speaker: "Waiter", text: "Excellent choice! Would you like anything to drink?", khmer: "ជម្រើសដ៏ល្អ! តើអ្នកចង់បានអ្វីសម្រាប់ផឹកទេ?" },
                        { speaker: "Person A", text: "Yes, I’d like some water, please.", khmer: "បាទ/ចាស ខ្ញុំចង់បានទឹកបន្តិច។" }
                    ],
                    "🛍️ Conversation 3 – Shopping (General)": [
                        { speaker: "Customer", text: "I’d like to buy this shirt.", khmer: "ខ្ញុំចង់ទិញអាវនេះ។" },
                        { speaker: "Shopkeeper", text: "Would you like to try it on?", khmer: "តើអ្នកចង់សាកវាទេ?" },
                        { speaker: "Customer", text: "Yes, please.", khmer: "បាទ/ចាស សូម។" }
                    ],
                    "🤷‍♀️ Conversation 1 – Choosing a Place": [
                        { speaker: "Person A", text: "Should we go to the park or the mall?", khmer: "តើយើងគួរទៅសួនច្បារ ឬផ្សារទំនើប?" },
                        { speaker: "Person B", text: "It’s up to you.", khmer: "វាអាស្រ័យលើអ្នក។" }
                    ],
                    "🤷‍♀️ Conversation 2 – Deciding What to Eat": [
                        { speaker: "Person A", text: "Do you want pizza or noodles for dinner?", khmer: "តើអ្នកចង់បានភីហ្សា ឬមីសម្រាប់អាហារពេលល្ងាច?" },
                        { speaker: "Person B", text: "It’s up to you.", khmer: "វាអាស្រ័យលើអ្នក។" }
                    ],
                    "🤷‍♀️ Conversation 3 – Picking a Movie": [
                        { speaker: "Person A", text: "What movie should we watch?", khmer: "តើយើងគួរមើលរឿងអ្វី?" },
                        { speaker: "Person B", text: "It’s up to you.", khmer: "វាអាស្រ័យលើអ្នក។" }
                    ],
                    "🤝 Conversation 1 – After Meeting Someone New": [
                        { speaker: "Person A", text: "It was great meeting you!", khmer: "រីករាយណាស់ដែលបានជួបអ្នក!" },
                        { speaker: "Person B", text: "Yes, let’s keep in touch!", khmer: "បាទ/ចាស តោះបន្តទាក់ទងគ្នា!" }
                    ],
                    "🤝 Conversation 2 – Ending a Phone Call": [
                        { speaker: "Person A", text: "I have to go now, but let’s keep in touch.", khmer: "ខ្ញុំត្រូវទៅហើយឥឡូវនេះ ប៉ុន្តែតោះបន្តទាក់ទងគ្នា។" },
                        { speaker: "Person B", text: "Definitely! Talk to you soon.", khmer: "ពិតប្រាកដ! និយាយជាមួយអ្នកឆាប់ៗនេះ។" }
                    ],
                    "🤝 Conversation 3 – After a Class or Workshop": [
                        { speaker: "Person A", text: "I learned a lot today. Let’s keep in touch!", khmer: "ខ្ញុំបានរៀនច្រើនណាស់ថ្ងៃនេះ។ តោះបន្តទាក់ទងគ្នា!" },
                        { speaker: "Person B", text: "Sure! I’d like that.", khmer: "ប្រាកដហើយ! ខ្ញុំចង់បានដូចនោះ។" }
                    ],
        },
         listenAndType: {
            "Basic Phrases": [
                { text: "Hello, how are you?", khmer: "សួស្ដី សុខសប្បាយជាទេ?" },
                { text: "Thank you very much.", khmer: "អរគុណច្រើន។" },
                { text: "Please come in.", khmer: "សូមអញ្ជើញចូល។"},
                { text: "I don't understand.", khmer: "ខ្ញុំមិនយល់ទេ។"},
                { text: "Can you help me?", khmer: "អ្នកអាចជួយខ្ញុំបានទេ?" }
            ],
            "Common Questions": [
                { text: "What is your name?", khmer: "តើអ្នកឈ្មោះអ្វី?" },
                { text: "Where are you from?", khmer: "តើអ្នកមកពីណា?" },
                { text: "How old are you?", khmer: "តើអ្នកអាយុប៉ុន្មានហើយ?" },
                { text: "What do you do?", khmer: "តើអ្នកធ្វើការអ្វី?" },
                { text: "How much is this?", khmer: "តម្លៃប៉ុន្មាន?" }
            ],
            "Daily Expressions": [
                { text: "Good morning.", khmer: "អរុណសួស្តី។"  },
                { text: "Good night.", khmer: "រាត្រីសួស្តី។"  },
                { text: "See you later.", khmer: "ជួបគ្នាពេលក្រោយ។"  },
                { text: "Have a good day.", khmer: "សូមឱ្យមានថ្ងៃល្អ។" },
                { text: "No problem.", khmer: "គ្មានបញ្ហាទេ។" },
                { text: "I’ll grant permission.", khmer: "— usually referring to systems, files, or actions that require authorization.<br>ខ្ញុំនឹងអនុញ្ញាតឲ្យអ្នក (ប្រើឯកសារ/ចូលប្រើប្រព័ន្ធ)។ <br> ខ្ញុំនឹងផ្តល់ការអនុញ្ញាត។"},
                { text: "I will allow you to do something", khmer: "I’ll grant permission." },
                { text: "I will give you access or approval.", khmer: "I’ll grant permission." },
                { text: "I’m still getting used to the system.", khmer: "This means the speaker is still learning or adjusting to how the system works — it’s not fully comfortable or familiar yet, but they’re in the process of adapting.<br>getting used to = becoming familiar with<br>the system = likely referring to software, procedures, or workflow in the workplace<br>still = continuing; not finished<br>🔹 Khmer Translation:<br>Literal: ខ្ញុំកំពុងទទួលស្គាល់ប្រព័ន្ធ។<br>Natural: ខ្ញុំនៅតែស្ថិតក្នុងដំណើរការរៀនស្គាល់ប្រព័ន្ធ។<br>More casual: ខ្ញុំទើបចាប់ផ្តើមស្គាល់ប្រព័ន្ធនេះ។", audio: "audio/listen_type/have_a_good_day.mp3" },
                { text: "If you have questions, email me.", khmer: "Should you have any questions, feel free to contact me." },
                { text: "Should you have any questions, feel free to contact me."},
                { text: " If you want to cancel the meeting, let me know."},
                {text: "If you face any issues, contact support. "},
            ],
            "Make your Sentences": [
                { text: "It's too hot to go outside.", khmer: "Structure: Subject + be + too + adjective/adverb + to + base verb. <br>"},
                { text: "She doesn't like spicy food.", khmer: "Structure: Subject + do/does + not + base verb. <br>"},,
                { text: "She doesn't like to play football.", khmer: "like + V-ing or to + verb <br>"},
                { text: "I have seen that movie before.", khmer: "Have seen is present perfect --used when you don't mention when."},
                { text: "I saw that movie yesterday.", khmer: "when you use a specific time (yesterday), you should use the past simple. <br>"},
                { text: "I can't make the sentence because I freeze when I think about it.", khmer: ""},
                { text:"I freeze when I try to make a sentence.", khmer: ""},

            ],
            
            
        
        },
        
    };

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

