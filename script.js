
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
                            },
                            {
                                type: "match-the-words",
                                question: "Match the beginning of the sentence on the left with the correct ending on the right.",
                                pairs: [
                                    { stem: "My sister often", correctOption: "goes to bed late." },
                                    { stem: "They always", correctOption: "watch TV in the evenings." },
                                    { stem: "The sun always", correctOption: "shines brightly." },
                                    { stem: "We sometimes", correctOption: "eat dinner together." },
                                    { stem: "A cat", correctOption: "catches mice." },
                                    { stem: "He rarely", correctOption: "drives to work." },
                                    { stem: "I", correctOption: "love to read books." }
                                ]
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
                    },
                    "Routines": {
                        description: `📄 Printable Practice Sheet – “My Daily Routine”
                                        <br>
                                        You can copy and print this text to practice speaking and shadowing:<br>
                                        
                                        📝 My Daily Routine<br>
                                        
                                        🔹 Morning<br>
                                        In the morning, I usually wake up at 6 o’clock.<br>
                                        The first thing I do is go to the bathroom.<br>
                                        In the bathroom, I wash my hands and face.<br>
                                        Then, I brush my teeth and take a shower.<br>
                                        After that, I dry my body and hair with a towel.<br>
                                        I comb my hair and get dressed.<br>
                                        Then, I make my bed and clean my room.<br>
                                        After that, I eat breakfast.<br>
                                        I like to eat a fried egg with pickles and rice.
                                         <br>	
                                        🔹 Afternoon
                                        In the afternoon, I usually come back home at around 2:30 p.m.<br>
                                        First, I wash my hands and make lunch by myself.<br>
                                        At 3:00 p.m., I have lunch.<br>
                                        After lunch, I take a short rest or nap.<br>
                                        Sometimes, I do housework or study my lessons.<br>
                                        If I have free time, I watch a movie or play with my friends.<br>

                                        🔹 Evening<br>
                                        In the evening, I usually take a shower around 5 o’clock.<br>
                                        Then, I eat dinner and watch a movie while eating.<br>
                                        After dinner, I sometimes review my homework or read a book.<br>
                                        I also like to relax by listening to music or watching YouTube.<br>
                                        Before I go to bed, I brush my teeth and prepare my clothes for the next day.<br>

                                `,
                        
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Part 1: Morning - What time do you usually wake up?",
                                options: [
                                    { text: "I usually wake up at 5 o’clock in the morning.", correct: false },
                                    { text: "I usually wake up at 6 o’clock in the morning.", correct: true},
                                    { text: "I usually wake up at 8 o’clock in the morning.", correct: false }
                                ]
                            },
                            
                            {
                                type: "multiple-choice",
                                question: "Part 1: Morning - What is the first thing you do after waking up?",
                                options: [
                                    { text: "The first thing I do is go to the bathroom.", correct: true },
                                    { text: "In the bathroom, I wash my hands and face, then brush my teeth and take a shower.", correct: false },
                                    { text: "The first thing I do is go to the bathroom.", correct: false }
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Part 1: Morning - What do you do in the bathroom?",
                                options: [
                                    { text: "The first thing I do is go to the bathroom.", correct: false },
                                    { text: "In the bathroom, I wash my hands and face, then brush my teeth and take a shower.", correct: true },
                                    { text: "The first thing I do is go to the bathroom.", correct: false }
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Part 1: Morning - What do you do after taking a shower?",
                                options: [
                                    { text: "The first thing I do is go to the bathroom.", correct: false },
                                    { text: "In the bathroom, I wash my hands and face, then brush my teeth and take a shower.", correct: false },
                                    { text: "After taking a shower, I dry my body and hair with a towel, comb my hair, get dressed, make my bed, and clean my room.", correct: true }
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Part 1: Morning - What do you eat for breakfast?",
                                options: [
                                    { text: "They are playing soccer now.", correct: false },
                                    { text: "I like to eat a fried egg with pickles and rice for breakfast.", correct: true,  },
                                    { text: "I will visit my grandparents tomorrow.", correct: false }
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Part 2: afternoon - What time do you usually come back home?",
                                options: [
                                    { text: "I usually come back home at around 6:30 p.m.", correct: false },
                                    { text: "I usually come back home at around 2:30 p.m.", correct: true, explanation: "" },
                                    { text: "I usually come back home at around 3:30 p.m.", correct: false }
                                ]
                            },
                            
                            {
                                type: "multiple-choice",
                                question: "Part 2: afternoon - Who prepares your lunch?",
                                options: [
                                    { text: "I prepare my lunch by myself.", correct: true },
                                    { text: "My family prepare my lunch .", correct: false },
                                    { text: "I and my family prepare our lunch.", correct: false }
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Part 2: afternoon - What do you do after eating lunch?",
                                options: [
                                    { text: "After eating lunch, I take a short rest.", correct: false },
                                    { text: "After eating lunch, I take a short rest or nap", correct: true },
                                    { text: "After eating lunch, I take a short nap", correct: false }
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Part 2: afternoon - What do you do if you have free time in the afternoon?",
                                options: [
                                    { text: "If I have free time in the afternoon, I play with my friends.", correct: false },
                                    { text: "If I have free time in the afternoon, I watch a movie.", correct: false },
                                    { text: "If I have free time in the afternoon, I watch a movie or play with my friends.", correct: true }
                                ]
                            },
                            
                            {
                                type: "multiple-choice",
                                question: "Part 3: Evening - What time do you usually take a shower in the evening?",
                                options: [
                                    { text: "I usually take a shower around 6 o’clock in the evening.", correct: false },
                                    { text: "I usually take a shower around 5 o’clock in the evening.", correct: true,  },
                                    { text: "I usually take a shower around 7 o’clock in the evening.", correct: false }
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Part 3: Evening - What do you do while eating dinner?",
                                options: [
                                    { text: "I watch a movie.", correct: false },
                                    { text: "I listening to music.", correct: false  },
                                    { text: "I watch a movie while eating dinner.", correct: true }
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Part 3: Evening - Do you review your homework or read a book after dinner?",
                                options: [
                                    { text: "After dinner I sometimes read a book.", correct: false },
                                    { text: "Yes, after dinner I sometimes review my homework or read a book.", correct: true,  },
                                    { text: "After dinner I sometimes review my homework.", correct: false }
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Part 3: Evening - What do you do to relax in the evening?",
                                options: [
                                    { text: "I relax by listening to music or watching YouTube.", correct: true },
                                    { text: "I relax by listening to music.", correct: false  },
                                    { text: "I relax by watching YouTube.", correct: false }
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Part 3: Evening - What do you do before going to bed?",
                                options: [
                                    { text: "Before I go to bed, I brush my teeth.", correct: false },
                                    { text: "Before I go to bed, I brush my teeth and prepare my clothes for the next day.", correct: true,  },
                                    { text: "Before I go to bed, I prepare my clothes for the next day. ", correct: false }
                                ]
                            },
                            {
                                type: "match-the-words",
                                question: "Match the beginning of the sentence on the left with the correct ending on the right.",
                                pairs: [
                                    { stem: "comb ⬜", correctOption: "H. To brush and arrange hair" },
                                    { stem: "towel ⬜", correctOption: "B. A cloth used for drying the body." },
                                    { stem: "nap ⬜", correctOption: "A. A short sleep during the day" },
                                    { stem: "prepare ⬜", correctOption: "G. To get ready or set up in advance" },
                                    { stem: "review ⬜", correctOption: "C. To look at something again, like homework." },
                                    { stem: "housework ⬜", correctOption: "F. Work done to keep the home clean" },
                                    { stem: "pickles ⬜", correctOption: "E. Food made from vegetables in vinegar or salty water" },
                                    { stem: "routine ⬜", correctOption: "D. A regular set of actions you do every day." }
                                ]
                            },
                            {
                                type: "fill-in-blank",
                                question: "After I wake up, I _____ my teeth and take a shower.",
                                correctAnswer: "brush",
                                explanation: "After I wake up, I brush my teeth and take a shower."
                            },
                            {
                                type: "fill-in-blank",
                                question: " I use a ______ to dry my body.",
                                correctAnswer: "towel",
                                explanation: "I use a towel to dry my body."
                            },
                            {
                                type: "fill-in-blank",
                                question: " After lunch, I sometimes take a short ____.",
                                correctAnswer: "nap",
                                explanation: "After lunch, I sometimes take a short nap."
                            },
                            {
                                type: "fill-in-blank",
                                question: "In the evening, I ______ my homework or read a book.",
                                correctAnswer: "review",
                                explanation: "In the evening, I review my homework or read a book."
                            },
                            {
                                type: "fill-in-blank",
                                question: "Before I go to bed, I ____ my clothes for tomorrow.",
                                correctAnswer: "prepare",
                                explanation: "Before I go to bed, I prepare my clothes for tomorrow."
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
                           "Although / Even though / Though": {
                                description: `You want to say two ideas that don’t match — one is surprising or opposite to the other.
                                                <br>✅ Tips:
                                                <br> "Even though"  is a bit stronger/more emphatic than ' although.' <br>' Though'  is more casual and often used at the end of a sentence too:" <br>
                                  
                                       🔹  "I didn’t like the movie. It was well made, though." 
                                 `,
                                structure: "Although / Even though / Though + subject + verb, main clause. <br>OR <br>Main clause + although / even though / though + subject + verb.",
                                examples: [
                                    { type: "correct", sentence: "Although it was raining, we went for a walk",explanation: "👉 It's surprising to walk in the rain. " },
                                    { type: "correct", sentence: "Even though he was tired, he kept studying." },
                                    { type: "correct", sentence: "Though she didn’t like the food, she smiled politely." },
                                    { type: "correct", sentence: "I went to the party, even though I didn’t feel well." },
                                    { type: "correct", sentence: "They finished the game, although they were losing at first." },
                                    { type: "correct", sentence: "He went to work, though he wasn’t feeling well.",explanation: ` 🔹 "feeling not well" → in natural English, we say "wasn’t feeling well"`},
        
                                ],
                               
                               
                                quizQuestions: [
                                    {
                                        type: "multiple-choice",
                                        question: "Which sentence correctly Although / Even though / Though'?",
                                        options: [
                                            { text: "Although I feeling sleepy, I tried to learn.", correct: false },
                                            { text: "Although I was feeling sleepy, I tried to learn.", correct: true, explanation: "✅ This sentence is clear, correct, and sounds great after the fix!" },
                                            { text: " I was feeling sleepy, I tried to learn.", correct: false}
                                        ]
                                    },
                                    {
                                        type: "multiple-choice",
                                        question: "Which sentence correctly Although / Even though / Though'?",
                                        options: [
                                            { text: " she was on her phone, she didn’t forget to eat rice", correct: false },
                                            { text: "Even though she was on her phone, she didn’t forget to eat rice", correct: true, explanation: "✅ This sentence is clear, correct, and sounds great after the fix!" },
                                            { text: "Even though she on her phone, she didn’t forget to eat rice", correct: false}
                                        ]
                                    },
                                    {
                                        type: "multiple-choice",
                                        question: "Which sentence correctly Although / Even though / Though'?",
                                        options: [
                                            { text: "He went to work, he wasn’t feeling well", correct: false },
                                            { text: "He went to work, even though he wasn’t feeling well", correct: true},
                                            { text: " He went to work, though he wasn’t feeling well", correct: true}
                                        ]
                                    },
                                    {
                                        type: "fill-in-blank",
                                        question: "They finished the game, ______ they were losing at first.",
                                        correctAnswer: "although",
                                        
                                    },
                                    {
                                        type: "fill-in-blank",
                                        question: " ______she didn’t like the food, she smiled politely.",
                                        correctAnswer: "Though",
                                        
                                    },
                                    {
                                        type: "fill-in-blank",
                                        question: "I went to the party, ______ I didn’t feel well.",
                                        correctAnswer: "even though",
                                        
                                    },
                                    {
                                        type: "fill-in-blank",
                                        question: "______ he was tired, he kept studying",
                                        correctAnswer: "Even though",
                                        
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
                        { sentence: "The section tag represents a standalone section of content, usually with its own heading, such as a chapter, tab, or part of a page. ", khmer: "What is the &lt;section&gt; tag used for in HTML?" },
                        { sentence: "To define standalone blocks of content with a specific theme or purpose. ", khmer: "What is the &lt;section&gt; tag used for in HTML?" },
                        { sentence: "What happens when you place two div elements next to each other in HTML?", khmer: "They stack vertically because div is a block-level element." },
                    ],
                    "Intermediate Sentences": [
                        { sentence: "I love learning English. It's so rewarding!", khmer: "ខ្ញុំស្រលាញ់ការសិក្សាភាសាអង់គ្លេស។ វាពិតជាមានប្រយោណាស់!" },
                        { sentence: "Could you please repeat that?", khmer: "សូមអ្នកជួយនិយាយម្ដងទៀតបានទេ?" },
                        { sentence: "The weather is beautiful today.", khmer: "អាកាសធាតុថ្ងៃនេះស្រស់ស្អាតណាស់។" }
                    ],
                    "Idioms": [
                        { sentence: "It's raining cats and dogs.", khmer: "ភ្លៀងខ្លាំងណាស់។", explanation: "Meaning: Raining very heavily." },
                        { sentence: "Break a leg!", khmer: "សូមសំណាងល្អ!", explanation: "Meaning: Good luck! (Used especially in theater)." }
                    ]
                },

                conversation: {
                    "Routines": [
                        { speaker: "A", text: "Hi! What time do you usually wake up in the morning?" },
                        { speaker: "B", text: "I usually wake up at 6 o’clock." },
                        { speaker: "A", text: "What do you do after you wake up?" },
                        { speaker: "B", text: "First, I go to the bathroom. I wash my hands and face, brush my teeth, and take a shower." },
                        { speaker: "A", text: "What do you eat for breakfast?" },
                        { speaker: "B", text: "I eat a fried egg with pickles and rice." },
                        { speaker: "A", text: "What time do you come home in the afternoon?" },
                        { speaker: "B", text: "I usually come back at 2:30 p.m." },
                        { speaker: "A", text: "Do you make lunch yourself?" },
                        { speaker: "B", text: "Yes, I prepare lunch by myself and eat at 3:00 p.m." },
                        { speaker: "A", text: "What do you do if you have free time?" },
                        { speaker: "B", text: "I watch a movie or play with my friends." },
                        { speaker: "A", text: "What’s your evening routine like?" },
                        { speaker: "B", text: "In the evening, I take a shower around 5 o’clock. Then, I eat dinner and watch a movie while eating." },
                        { speaker: "A", text: "What do you do after dinner?" },
                        { speaker: "B", text: "I review my homework or read a book, then I relax by listening to music or watching YouTube." },
                        { speaker: "A", text: "What do you do before bed?" },
                        { speaker: "B", text: "I brush my teeth and prepare my clothes for the next day." }
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
                navContainer: document.querySelector(".nav-container"), // Added for profile image insertion
                mainHeading: document.querySelector('h1') // Direct reference to the main heading
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
                // Ensure the clicked element or its parent has the 'sub-menu-btn' class
                const targetButton = event.target.closest('.sub-menu-btn');
                if (targetButton) {
                    const mode = targetButton.dataset.mode;
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
                elements.modeSelection.classList.add('hidden'); // Use Tailwind hidden class
                elements.gameArea.classList.remove('hidden'); // Ensure gameArea is visible
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
                elements.modeSelection.classList.remove('hidden'); // Show mode selection
                elements.gameArea.classList.add('hidden'); // Hide game area
                elements.gameArea.innerHTML = "";
                elements.mainHeading.textContent = "Master English: Your Interactive Learning Journey";
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
                elements.modeSelection.classList.add('hidden'); // Hide mode selection
                elements.gameArea.classList.remove('hidden'); // Show game area
                let headingText = '';
                switch(mode) {
                    case 'vocab': headingText = '📚 Vocabulary Challenge'; break;
                    case 'grammar': headingText = '📝 Grammar Guru'; break;
                    case 'shadowing': headingText = '🗣️ Shadowing Practice'; break;
                    case 'conversation': headingText = '💬 Conversation Activity'; break;
                    case 'qna-html': headingText = '❓ HTML Quiz'; break;
                    case 'qna-css': headingText = '❓ CSS Quiz'; break;
                    case 'qna-js': headingText = '❓ JavaScript Quiz'; break;
                    default: headingText = 'Interactive Learning Journey';
                }
                elements.mainHeading.textContent = `Master English: ${headingText}`; // Update H1
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
                    } else if (mode === "conversation") {
                        initConversationGame();
                    } else if (mode.startsWith("qna-")) {
                        initQnAGame(mode);
                    }
                }, 500);
            }


            function displayGameEndScreen() {
                stopTimer(); // Ensure the timer is stopped

                let message = '';
                let finalScore = gameState.score;
                const totalItems = gameState.currentPool.length;

                if (gameState.mode === 'vocab' || gameState.mode.startsWith('qna-')) {
                    message = `You completed the ${gameState.mode.replace('qna-', '').toUpperCase()} Challenge!`;
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
                            message += '<p class="success-message">Grammar Master! Well done!</p>';
                        } else if (percentage >= 70) {
                            message += '<p class="info-message">Good understanding of grammar!</p>';
                        } else {
                            message += '<p class="error-message">Time to brush up on those grammar rules!</p>';
                        }
                    }
                } else if (gameState.mode === 'shadowing') {
                    message = `Shadowing Practice Complete!`;
                    message += `<p>You practiced ${gameState.currentIndex} sentences.</p>`;
                    message += `<p class="info-message">Keep practicing to improve your pronunciation and fluency!</p>`;
                } else if (gameState.mode === 'conversation') {
                    message = `Conversation Activity Complete!`;
                    message += `<p>You went through ${gameState.currentIndex} lines of dialogue.</p>`;
                    message += `<p class="info-message">Keep practicing conversations to improve your speaking and listening skills!</p>`;
                } else {
                    message = `Challenge Complete!`;
                    message += `<p>Your final score: <span class="score-display">${finalScore}</span></p>`;
                }

                elements.gameArea.innerHTML = `
                    <div class="container game-end-screen">
                        <h2 class="text-center">Challenge Complete!</h2>
                        <div class="result-box">
                            ${message}
                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto mt-4">
                            <button class="btn btn-primary btn-lg" onclick="handlePlayAgain()">Play Again</button>
                            <button class="btn btn-secondary btn-lg" onclick="goHome()">Back to Home</button>
                        </div>
                    </div>
                `;
                elements.modeSelection.classList.add('hidden');
                elements.gameArea.classList.remove('hidden');
            }

            // Function to handle "Play Again" button click
            function handlePlayAgain() {
                const currentMode = gameState.mode;
                resetGameState(); // Reset state for a new game
                selectMode(currentMode); // Start the game again in the same mode
            }

            // Placeholder for game initialization functions (these would be defined elsewhere in script.js)
            function initVocabGame() {
                console.log("Initializing Vocabulary Game...");
                gameState.currentPool = shuffleArray(gameData.vocab);
                gameState.currentIndex = 0;
                gameState.score = 0;
                displayVocabQuestion();
            }

            function displayVocabQuestion() {
                stopTimer(); // Ensure timer is reset for each question
                if (gameState.currentIndex >= gameState.currentPool.length) {
                    displayGameEndScreen();
                    return;
                }

                const currentWord = gameState.currentPool[gameState.currentIndex];
                elements.gameArea.innerHTML = `
                    <div class="container vocab-game">
                        <div class="score-timer-container">
                            <div class="score">Score: <span id="score">${gameState.score}</span></div>
                            <div class="timer">Time Left: <span id="timeLeft">${gameState.timeLeft}s</span></div>
                        </div>
                        <div class="question-box">
                            <h3>What does "${currentWord.word}" mean?</h3>
                            <p class="khmer-meaning">${currentWord.khmer}</p>
                            <div class="audio-controls mt-3">
                                <button class="btn btn-info" onclick="speakText('${currentWord.word}')">Pronounce (EN)</button>
                                <button class="btn btn-info" onclick="speakText('${currentWord.khmer}', 'km-KH')">Pronounce (KH)</button>
                                ${currentWord.audio ? `<button class="btn btn-info" onclick="playAudio('${currentWord.audio}')">Listen Audio</button>` : ''}
                            </div>
                        </div>
                        <div class="answer-input-container mt-4">
                            <input type="text" id="vocabAnswerInput" class="form-control" placeholder="Type the meaning in English">
                            <button class="btn btn-success mt-3" onclick="checkVocabAnswer()">Submit Answer</button>
                        </div>
                        <p id="feedback" class="mt-3 feedback-message"></p>
                    </div>
                `;

                document.getElementById('vocabAnswerInput').focus();
                document.getElementById('vocabAnswerInput').onkeyup = function(event) {
                    if (event.key === "Enter") {
                        checkVocabAnswer();
                    }
                };

                startTimer(30, (timeLeft) => { // 30 seconds per vocabulary question
                    document.getElementById('timeLeft').textContent = `${timeLeft}s`;
                }, () => {
                    document.getElementById('feedback').innerHTML = `<p class="error-message">Time's up! The correct meaning was: <strong>${currentWord.meaning}</strong></p>`;
                    setTimeout(() => {
                        gameState.currentIndex++;
                        displayVocabQuestion();
                    }, 2000);
                });
            }

            function checkVocabAnswer() {
                stopTimer();
                const currentWord = gameState.currentPool[gameState.currentIndex];
                const userAnswer = document.getElementById('vocabAnswerInput').value.trim();
                const feedbackElement = document.getElementById('feedback');

                // Simple check: convert both to lowercase and remove punctuation/extra spaces for comparison
                const normalizedUserAnswer = userAnswer.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
                const normalizedCorrectAnswer = currentWord.meaning.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');

                if (normalizedUserAnswer === normalizedCorrectAnswer) {
                    gameState.score++;
                    feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉</p>`;
                } else {
                    feedbackElement.innerHTML = `<p class="error-message">Incorrect. The correct meaning was: <strong>${currentWord.meaning}</strong></p>`;
                }
                document.getElementById('score').textContent = gameState.score;

                setTimeout(() => {
                    gameState.currentIndex++;
                    displayVocabQuestion();
                }, 2000); // Wait 2 seconds before next question
            }


            function initGrammarGame() {
                console.log("Initializing Grammar Game...");
                // Choose a random grammar rule to start with or present options
                const grammarCategories = Object.keys(gameData.grammar);
                elements.gameArea.innerHTML = `
                    <div class="container grammar-selection">
                        <h2 class="text-center">Choose a Grammar Topic or Pattern</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            ${grammarCategories.map(cat => `
                                <div class="card bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" data-category="${cat}">
                                    <h5 class="text-xl font-semibold text-blue-800 mb-2">${cat}</h5>
                                    <p class="text-gray-700 text-sm mb-4">${gameData.grammar[cat].description ? gameData.grammar[cat].description.substring(0, 100) + '...' : 'Explore various grammar concepts.'}</p>
                                    <button class="btn btn-primary w-full" data-category="${cat}">Select</button>
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn btn-secondary mt-8" onclick="goHome()">Back to Home</button>
                    </div>
                `;
                elements.gameArea.querySelectorAll('.card button').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const category = event.target.dataset.category;
                        displayGrammarSubCategories(category);
                    });
                });
            }

            function displayGrammarSubCategories(category) {
                gameState.currentRule = category; // Store the main category
                const subCategories = Object.keys(gameData.grammar[category]);
                elements.gameArea.innerHTML = `
                    <div class="container grammar-sub-selection">
                        <h2 class="text-center text-blue-600">${category} - Select a Specific Rule/Pattern</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            ${subCategories.map(subCat => {
                                const item = gameData.grammar[category][subCat];
                                return `
                                    <div class="card bg-green-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" data-rule="${subCat}">
                                        <h5 class="text-xl font-semibold text-green-800 mb-2">${subCat}</h5>
                                        <p class="text-gray-700 text-sm mb-4">${item.description ? item.description.substring(0, 100) + '...' : 'Learn this rule.'}</p>
                                        <button class="btn btn-info w-full" data-rule="${subCat}">Learn & Quiz</button>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <button class="btn btn-secondary mt-8" onclick="initGrammarGame()">Back to Grammar Topics</button>
                    </div>
                `;

                elements.gameArea.querySelectorAll('.card button').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const rule = event.target.dataset.rule;
                        displayGrammarRuleDetails(gameState.currentRule, rule);
                    });
                });
            }


            function displayGrammarRuleDetails(category, ruleName) {
                const rule = gameData.grammar[category][ruleName];
                gameState.currentRule = ruleName; // Store the specific rule for quiz

                if (!rule) {
                    elements.gameArea.innerHTML = `<p class="text-red-500">Error: Rule not found.</p><button class="btn btn-secondary mt-4" onclick="initGrammarGame()">Back to Grammar</button>`;
                    return;
                }

                let examplesHtml = '';
                if (rule.examples && rule.examples.length > 0) { // Check if examples exist and are not empty
                    examplesHtml = rule.examples.map(ex => `
                        <li class="${ex.type === 'correct' ? 'text-green-700' : 'text-red-700'} mb-2">
                            <strong class="font-semibold">${ex.sentence}</strong>
                            ${ex.explanation ? `<br><small class="text-gray-600">${ex.explanation}</small>` : ''}
                            ${ex.type === 'incorrect' && ex.correct ? `<br><small class="text-blue-600">Correct version: ${ex.correct}</small>` : ''}
                        </li>
                    `).join('');
                }

                elements.gameArea.innerHTML = `
                    <div class="container grammar-rule-detail">
                        <h2 class="text-center text-blue-600">${ruleName}</h2>
                        <div class="question-box text-left mb-6">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Description:</h3>
                            <p class="mb-4">${rule.description}</p>
                            ${rule.structure ? `
                                <h3 class="text-lg font-semibold text-gray-800 mb-2">Structure:</h3>
                                <p class="mb-4 bg-gray-100 p-2 rounded-md font-mono text-gray-700"><code>${rule.structure}</code></p>
                            ` : ''}
                            ${examplesHtml ? `
                                <h3 class="text-lg font-semibold text-gray-800 mb-2">Examples:</h3>
                                <ul class="list-disc list-inside">${examplesHtml}</ul>
                            ` : ''}
                        </div>
                        <div class="flex flex-col md:flex-row gap-4 justify-center">
                            <button class="btn btn-primary btn-lg" onclick="startGrammarQuiz('${category}', '${ruleName}')">Start Quiz</button>
                            <button class="btn btn-secondary btn-lg" onclick="displayGrammarSubCategories('${category}')">Back to Rules</button>
                        </div>
                    </div>
                `;
            }

            function startGrammarQuiz(category, ruleName) {
                const rule = gameData.grammar[category][ruleName];
                if (!rule || !rule.quizQuestions || rule.quizQuestions.length === 0) {
                    elements.gameArea.innerHTML = `<p class="text-red-500">No quiz questions available for this rule.</p><button class="btn btn-secondary mt-4" onclick="displayGrammarRuleDetails('${category}', '${ruleName}')">Back to Rule Details</button>`;
                    return;
                }

                gameState.currentPool = shuffleArray(rule.quizQuestions);
                gameState.currentIndex = 0;
                gameState.score = 0;
                displayGrammarQuizQuestion();
            }

            function displayGrammarQuizQuestion() {
                stopTimer();
                if (gameState.currentIndex >= gameState.currentPool.length) {
                    displayGameEndScreen();
                    return;
                }

                const currentQuestion = gameState.currentPool[gameState.currentIndex];
                let questionContent = '';
                let answerArea = '';
                let timerDuration = 45; // Longer timer for grammar questions

                if (currentQuestion.type === "multiple-choice") {
                    questionContent = `<h3 class="text-lg font-semibold text-gray-800 mb-4">${currentQuestion.question}</h3>`;
                    answerArea = `<div class="flex flex-col gap-3">
                        ${currentQuestion.options.map((opt, index) => `
                            <button class="btn btn-outline-primary w-full text-left" data-index="${index}" onclick="checkGrammarAnswer(this, '${currentQuestion.type}')">${opt.text}</button>
                        `).join('')}
                    </div>`;
                } else if (currentQuestion.type === "fill-in-blank") {
                    questionContent = `<h3 class="text-lg font-semibold text-gray-800 mb-4">${currentQuestion.question}</h3>`;
                    answerArea = `
                        <input type="text" id="grammarAnswerInput" class="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" placeholder="Type your answer here">
                        <button class="btn btn-success w-full" onclick="checkGrammarAnswer(null, '${currentQuestion.type}')">Submit Answer</button>
                    `;
                } else if (currentQuestion.type === "match-the-words") {
                    questionContent = `<h3 class="text-lg font-semibold text-gray-800 mb-4">${currentQuestion.question}</h3>
                                       <p class="text-sm text-gray-600 mb-4">Drag an ending from the right column to its correct beginning on the left.</p>`;
                    const shuffledOptions = shuffleArray(currentQuestion.pairs.map(p => p.correctOption));
                    
                    answerArea = `
                        <div class="match-the-words-grid">
                            <div class="stems-column p-4 rounded-lg bg-gray-200">
                                <h4 class="font-bold text-gray-700 mb-3">Sentence Beginnings</h4>
                                ${currentQuestion.pairs.map((pair, index) => `
                                    <div class="stem-item flex items-center justify-between bg-white p-3 rounded-md shadow-sm mb-3">
                                        <span class="font-medium">${pair.stem}</span>
                                        <div class="dropzone w-40 min-h-[40px] border-2 border-dashed border-blue-400 bg-blue-50 rounded-md flex items-center justify-center text-sm text-gray-500 transition-all duration-200" data-stem-index="${index}" data-correct-option="${pair.correctOption}">
                                            <span class="italic text-xs">Drop here</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="options-pool p-4 rounded-lg bg-gray-50">
                                <h4 class="font-bold text-gray-700 mb-3">Endings to Match</h4>
                                ${shuffledOptions.map((optionText) => `
                                    <div class="draggable-option p-3 bg-blue-500 text-white rounded-md shadow-md cursor-grab transition-all duration-200 hover:scale-105" draggable="true" data-option-text="${optionText}">
                                        ${optionText}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <button class="btn btn-success w-full mt-6" onclick="checkGrammarAnswer(null, '${currentQuestion.type}')">Check Answers</button>
                    `;
                    // Setup drag and drop after the HTML is rendered
                    setTimeout(setupDragAndDrop, 100); // Small delay to ensure DOM is ready
                }

                elements.gameArea.innerHTML = `
                    <div class="container grammar-quiz">
                        <div class="score-timer-container">
                            <div class="score">Score: <span id="score" class="text-blue-600">${gameState.score}</span></div>
                            <div class="timer">Time Left: <span id="timeLeft" class="text-blue-600">${gameState.timeLeft}s</span></div>
                        </div>
                        <div class="question-box">
                            ${questionContent}
                        </div>
                        <div class="answer-area mt-4">
                            ${answerArea}
                        </div>
                        <p id="feedback" class="mt-3 feedback-message"></p>
                    </div>
                `;

                if (currentQuestion.type === "fill-in-blank") {
                    document.getElementById('grammarAnswerInput').focus();
                    document.getElementById('grammarAnswerInput').onkeyup = function(event) {
                        if (event.key === "Enter") {
                            checkGrammarAnswer(null, currentQuestion.type);
                        }
                    };
                }

                startTimer(timerDuration, (timeLeft) => {
                    document.getElementById('timeLeft').textContent = `${timeLeft}s`;
                }, () => {
                    const feedbackElement = document.getElementById('feedback');
                    let correctFeedback = "The correct answer was: ";
                    if (currentQuestion.type === "multiple-choice") {
                        correctFeedback += `<strong>${currentQuestion.options.find(opt => opt.correct).text}</strong>`;
                    } else if (currentQuestion.type === "fill-in-blank") {
                        correctFeedback += `<strong>${currentQuestion.correctAnswer}</strong>`;
                    } else if (currentQuestion.type === "match-the-words") {
                        correctFeedback = "Correct matches:";
                        currentQuestion.pairs.forEach(pair => {
                            correctFeedback += `<br><strong>${pair.stem} ${pair.correctOption}</strong>`;
                        });
                    }

                    feedbackElement.innerHTML = `<p class="error-message">Time's up! ${correctFeedback}</p>`;
                    setTimeout(() => {
                        gameState.currentIndex++;
                        displayGrammarQuizQuestion();
                    }, 2000);
                });
            }

            function setupDragAndDrop() {
                const draggables = document.querySelectorAll('.draggable-option');
                const dropzones = document.querySelectorAll('.dropzone');
                const optionsPool = document.querySelector('.options-pool');

                let draggedItem = null;

                draggables.forEach(draggable => {
                    draggable.addEventListener('dragstart', (e) => {
                        draggedItem = e.target;
                        e.dataTransfer.setData('text/plain', e.target.dataset.optionText);
                        setTimeout(() => {
                            e.target.classList.add('opacity-50'); // Tailwind opacity class
                        }, 0);
                    });

                    draggable.addEventListener('dragend', (e) => {
                        e.target.classList.remove('opacity-50');
                        draggedItem = null;
                    });
                });

                dropzones.forEach(dropzone => {
                    dropzone.addEventListener('dragover', (e) => {
                        e.preventDefault(); // Allow drop
                    });

                    dropzone.addEventListener('dragenter', (e) => {
                        e.preventDefault();
                        dropzone.classList.add('drag-over');
                    });

                    dropzone.addEventListener('dragleave', (e) => {
                        dropzone.classList.remove('drag-over');
                    });

                    dropzone.addEventListener('drop', (e) => {
                        e.preventDefault();
                        dropzone.classList.remove('drag-over');

                        if (draggedItem) {
                            // If the dropzone already has an item, move it back to the options pool
                            if (dropzone.children.length > 0) {
                                const existingItem = dropzone.children[0];
                                optionsPool.appendChild(existingItem);
                                existingItem.classList.remove('correct', 'incorrect'); // Clear feedback
                            }
                            dropzone.innerHTML = ''; // Clear "Drop here" text
                            dropzone.appendChild(draggedItem);
                            draggedItem.classList.remove('correct', 'incorrect'); // Clear feedback from the dragged item
                        }
                    });
                });

                // Event listener to allow dragging options back to the original pool
                optionsPool.addEventListener('dragover', (e) => {
                    e.preventDefault(); // Allow dropping onto the pool itself
                });
                optionsPool.addEventListener('drop', (e) => {
                    // Only drop if the target is the pool itself, not another draggable item within it
                    if (draggedItem && (e.target === optionsPool || e.target.classList.contains('draggable-option'))) {
                        if (e.target.classList.contains('draggable-option')) {
                             // If dropped onto another option, insert before it
                            e.target.parentNode.insertBefore(draggedItem, e.target);
                        } else {
                            // Otherwise, append to the pool
                            optionsPool.appendChild(draggedItem);
                        }
                        draggedItem.classList.remove('correct', 'incorrect'); // Clear feedback
                        e.preventDefault();
                    }
                });
            }


            function checkGrammarAnswer(buttonElement, questionType) {
                stopTimer();
                const currentQuestion = gameState.currentPool[gameState.currentIndex];
                const feedbackElement = document.getElementById('feedback');
                let isCorrectOverall = false;
                let explanation = '';
                let totalCorrectMatches = 0;

                // Disable relevant input/buttons
                if (buttonElement) { // For multiple choice
                    elements.gameArea.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
                } else if (questionType === "fill-in-blank") {
                    document.getElementById('grammarAnswerInput').disabled = true;
                    elements.gameArea.querySelector('.btn-success').disabled = true;
                } else if (questionType === "match-the-words") {
                    document.querySelectorAll('.draggable-option').forEach(item => item.draggable = false);
                    elements.gameArea.querySelector('.btn-success').disabled = true;
                }

                if (questionType === "multiple-choice") {
                    const selectedIndex = parseInt(buttonElement.dataset.index);
                    const selectedOption = currentQuestion.options[selectedIndex];
                    const correctOption = currentQuestion.options.find(opt => opt.correct);
                    isCorrectOverall = selectedOption.correct;
                    explanation = selectedOption.explanation || '';
                    
                    // Visual feedback
                    buttonElement.classList.add(isCorrectOverall ? 'btn-success' : 'btn-danger');
                    elements.gameArea.querySelectorAll('.option-btn').forEach(btn => {
                        if (parseInt(btn.dataset.index) !== selectedIndex && currentQuestion.options[parseInt(btn.dataset.index)].correct) {
                            btn.classList.add('btn-success'); // Highlight correct answer if wrong choice was made
                        }
                    });

                } else if (questionType === "fill-in-blank") {
                    const userAnswer = document.getElementById('grammarAnswerInput').value.trim();
                    const normalizedUserAnswer = userAnswer.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
                    const normalizedCorrectAnswer = currentQuestion.correctAnswer.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
                    isCorrectOverall = (normalizedUserAnswer === normalizedCorrectAnswer);
                    explanation = currentQuestion.explanation || '';

                } else if (questionType === "match-the-words") {
                    const dropzones = document.querySelectorAll('.dropzone');
                    let matchedPairs = 0;
                    
                    dropzones.forEach(dropzone => {
                        const droppedOption = dropzone.querySelector('.draggable-option');
                        const correctOptionForThisStem = dropzone.dataset.correctOption; // Get correct option directly from dropzone data

                        if (droppedOption) {
                            const droppedText = droppedOption.dataset.optionText;
                            if (droppedText === correctOptionForThisStem) {
                                droppedOption.classList.add('correct');
                                matchedPairs++;
                            } else {
                                droppedOption.classList.add('incorrect');
                            }
                        }
                        dropzone.classList.remove('drag-over'); // Remove drag-over class
                        dropzone.style.border = '1px solid #ccc'; // Reset border
                    });

                    totalCorrectMatches = matchedPairs;
                    isCorrectOverall = (totalCorrectMatches === currentQuestion.pairs.length);
                    explanation = `You got ${totalCorrectMatches} out of ${currentQuestion.pairs.length} matches correct.`;
                }

                if (isCorrectOverall) {
                    gameState.score++;
                    feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉 ${explanation}</p>`;
                } else {
                    feedbackElement.innerHTML = `<p class="error-message">Incorrect. ${explanation}</p>`;
                }
                document.getElementById('score').textContent = gameState.score;

                // Show feedback message
                feedbackElement.classList.add('show');

                setTimeout(() => {
                    feedbackElement.classList.remove('show'); // Hide feedback
                    gameState.currentIndex++;
                    displayGrammarQuizQuestion();
                }, 3000); // Wait 3 seconds for user to read explanation
            }


            // Shadowing Game Functions
            function initShadowingGame() {
                console.log("Initializing Shadowing Game...");
                const shadowingLevels = Object.keys(gameData.shadowing);

                elements.gameArea.innerHTML = `
                    <div class="container shadowing-selection">
                        <h2 class="text-center text-blue-600">Select Shadowing Level</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            ${shadowingLevels.map(level => `
                                <div class="card bg-purple-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" data-level="${level}">
                                    <h5 class="text-xl font-semibold text-purple-800 mb-2">${level}</h5>
                                    <p class="text-gray-700 text-sm mb-4">Practice sentences for ${level.toLowerCase()} learners.</p>
                                    <button class="btn btn-primary w-full" data-level="${level}">Start Practice</button>
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn btn-secondary mt-8" onclick="goHome()">Back to Home</button>
                    </div>
                `;

                elements.gameArea.querySelectorAll('.card button').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const level = event.target.dataset.level;
                        startShadowingPractice(level);
                    });
                });
            }

            function startShadowingPractice(level) {
                gameState.currentLevel = level;
                gameState.currentPool = shuffleArray(gameData.shadowing[level]);
                gameState.currentIndex = 0;
                gameState.score = 0; // Score can represent sentences completed in shadowing
                displayShadowingSentence();
            }

            function displayShadowingSentence() {
                stopTimer();
                if (gameState.currentIndex >= gameState.currentPool.length) {
                    displayGameEndScreen();
                    return;
                }

                const currentSentence = gameState.currentPool[gameState.currentIndex];
                elements.gameArea.innerHTML = `
                    <div class="container shadowing-practice">
                        <div class="score-timer-container">
                            <div class="score">Sentence: <span id="currentSentenceNum" class="text-blue-600">${gameState.currentIndex + 1} / ${gameState.currentPool.length}</span></div>
                            <div class="timer">Time Left: <span id="timeLeft" class="text-blue-600">--s</span></div>
                        </div>
                        <div class="question-box text-left">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Listen and Repeat:</h3>
                            <p id="shadowingSentence" class="lead text-xl font-medium text-blue-800 mb-2">${currentSentence.sentence}</p>
                            <p class="khmer-meaning text-gray-700">(${currentSentence.khmer})</p>
                            ${currentSentence.explanation ? `<p class="info-text text-sm mt-3 bg-blue-50 p-2 rounded-md"><strong>Explanation:</strong> ${currentSentence.explanation}</p>` : ''}
                        </div>
                        <div class="flex flex-col gap-4 mt-6">
                            <button class="btn btn-info btn-lg" id="listenBtn"><i class="fas fa-volume-up mr-2"></i>Listen (EN)</button>
                            <button class="btn btn-warning btn-lg" id="recordBtn"><i class="fas fa-microphone mr-2"></i>Start Recording</button>
                            <button class="btn btn-danger btn-lg hidden" id="stopRecordBtn"><i class="fas fa-stop-circle mr-2"></i>Stop Recording</button>
                            <div class="mt-3 text-gray-700" id="recordingStatus"></div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-4 justify-center mt-8">
                            <button class="btn btn-secondary" onclick="nextShadowingSentence()"><i class="fas fa-arrow-right mr-2"></i>Skip / Next Sentence</button>
                            <button class="btn btn-dark" onclick="initShadowingGame()"><i class="fas fa-times-circle mr-2"></i>End Practice</button>
                        </div>
                    </div>
                `;

                document.getElementById('listenBtn').addEventListener('click', () => {
                    speakText(currentSentence.sentence);
                });

                const recordBtn = document.getElementById('recordBtn');
                const stopRecordBtn = document.getElementById('stopRecordBtn');
                const recordingStatus = document.getElementById('recordingStatus');

                recordBtn.addEventListener('click', () => startRecording(recordingStatus, recordBtn, stopRecordBtn));
                stopRecordBtn.addEventListener('click', () => stopRecording(currentSentence.sentence, recordingStatus, recordBtn, stopRecordBtn));

                // Automatically start the timer (e.g., 60 seconds per sentence for practice)
                startTimer(60, (timeLeft) => {
                    document.getElementById('timeLeft').textContent = `${timeLeft}s`;
                }, () => {
                    recordingStatus.innerHTML = `<p class="error-message">Time's up! Moving to the next sentence.</p>`;
                    stopRecording(currentSentence.sentence, recordingStatus, recordBtn, stopRecordBtn, true); // Stop recording if active
                    setTimeout(nextShadowingSentence, 2000);
                });
            }

            function nextShadowingSentence() {
                stopTimer();
                gameState.currentIndex++;
                displayShadowingSentence();
            }

            async function startRecording(statusElement, recordBtn, stopRecordBtn) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    gameState.audioRecorder = new MediaRecorder(stream);
                    gameState.audioChunks = [];

                    gameState.audioRecorder.ondataavailable = event => {
                        gameState.audioChunks.push(event.data);
                    };

                    gameState.audioRecorder.onstop = () => {
                        const audioBlob = new Blob(gameState.audioChunks, { type: 'audio/webm' });
                        const audioUrl = URL.createObjectURL(audioBlob);
                        // Optional: Play back the recorded audio
                        // const audio = new Audio(audioUrl);
                        // audio.play();
                        statusElement.innerHTML += '<p class="success-message">Recording stopped. Analyzing...</p>';
                        // Here you would send audioBlob to a speech-to-text API for analysis
                        // For now, we'll just indicate it's done.
                        console.log("Recorded audio blob:", audioBlob);
                    };

                    gameState.audioRecorder.start();
                    recordBtn.classList.add('hidden'); // Tailwind hidden class
                    stopRecordBtn.classList.remove('hidden'); // Tailwind hidden class
                    statusElement.innerHTML = '<p class="info-message">Recording... Speak now!</p>';
                } catch (err) {
                    console.error('Error accessing microphone:', err);
                    statusElement.innerHTML = '<p class="error-message">Error accessing microphone. Please allow microphone access.</p>';
                }
            }

            function stopRecording(expectedText, statusElement, recordBtn, stopRecordBtn, timedOut = false) {
                if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
                    gameState.audioRecorder.stop();
                    gameState.audioRecorder.stream.getTracks().forEach(track => track.stop()); // Stop microphone access
                }
                recordBtn.classList.remove('hidden'); // Tailwind hidden class
                stopRecordBtn.classList.add('hidden'); // Tailwind hidden class

                if (!timedOut) {
                    statusElement.innerHTML = '<p class="info-message">Recording finished. Move to next sentence.</p>';
                }
                // In a real application, you'd send the recording to a speech recognition API here
                // and compare the result with `expectedText`.
                // For this example, we just stop.
            }

            // Conversation Game Functions
            function initConversationGame() {
                console.log("Initializing Conversation Activity...");
                const conversationTopics = Object.keys(gameData.conversation);
                elements.gameArea.innerHTML = `
                    <div class="container conversation-selection">
                        <h2 class="text-center text-blue-600">Select a Conversation Topic</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            ${conversationTopics.map(topic => `
                                <div class="card bg-orange-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                                    <h5 class="text-xl font-semibold text-orange-800 mb-2">${topic}</h5>
                                    <p class="text-gray-700 text-sm mb-4">Practice a conversation about ${topic.toLowerCase()}.</p>
                                    <button class="btn btn-primary w-full" onclick="startConversationTopic('${topic}')">Start Conversation</button>
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn btn-secondary mt-8" onclick="goHome()">Back to Home</button>
                    </div>
                `;
            }

            function startConversationTopic(topicName) {
                gameState.currentPool = gameData.conversation[topicName];
                gameState.currentIndex = 0;
                displayConversationLine();
            }

            function displayConversationLine() {
                stopTimer(); // No timer for conversation activity lines unless explicitly needed
                if (gameState.currentIndex >= gameState.currentPool.length) {
                    displayGameEndScreen(); // Conversation complete
                    return;
                }

                const currentLine = gameState.currentPool[gameState.currentIndex];
                const speakerClass = `speaker-${currentLine.speaker.toLowerCase()}`;
                const speakerLabel = currentLine.speaker === 'A' ? '👩 A' : '👦 B'; // Using emojis for fun

                elements.gameArea.innerHTML = `
                    <div class="container conversation-activity">
                        <h2 class="text-center text-blue-600 mb-4">Conversation Practice</h2>
                        <div class="conversation-line ${speakerClass}">
                            <span class="speaker-label">${speakerLabel}:</span>
                            <span class="text-lg">${currentLine.text}</span>
                        </div>
                        <div class="flex flex-col gap-4 mt-6">
                            <button class="btn btn-info btn-lg" id="listenBtn"><i class="fas fa-volume-up mr-2"></i>Listen</button>
                            <button class="btn btn-warning btn-lg" id="recordBtn"><i class="fas fa-microphone mr-2"></i>Start Recording</button>
                            <button class="btn btn-danger btn-lg hidden" id="stopRecordBtn"><i class="fas fa-stop-circle mr-2"></i>Stop Recording</button>
                            <div class="mt-3 text-gray-700" id="recordingStatus"></div>
                            <audio id="recordedAudioPlayback" controls class="hidden w-full mt-2"></audio>
                        </div>
                        <div class="flex flex-col md:flex-row gap-4 justify-center mt-8">
                            <button class="btn btn-primary" onclick="nextConversationLine()"><i class="fas fa-arrow-right mr-2"></i>Next Line</button>
                            <button class="btn btn-secondary" onclick="goHome()"><i class="fas fa-times-circle mr-2"></i>End Conversation</button>
                        </div>
                    </div>
                `;

                document.getElementById('listenBtn').addEventListener('click', () => {
                    speakText(currentLine.text);
                });

                const recordBtn = document.getElementById('recordBtn');
                const stopRecordBtn = document.getElementById('stopRecordBtn');
                const recordingStatus = document.getElementById('recordingStatus');
                const recordedAudioPlayback = document.getElementById('recordedAudioPlayback');

                recordBtn.addEventListener('click', () => startRecordingConversation(recordingStatus, recordBtn, stopRecordBtn, recordedAudioPlayback));
                stopRecordBtn.addEventListener('click', () => stopRecordingConversation(recordingStatus, recordBtn, stopRecordBtn, recordedAudioPlayback));
            }

            async function startRecordingConversation(statusElement, recordBtn, stopRecordBtn, audioPlaybackElement) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    gameState.audioRecorder = new MediaRecorder(stream);
                    gameState.audioChunks = [];

                    gameState.audioRecorder.ondataavailable = event => {
                        gameState.audioChunks.push(event.data);
                    };

                    gameState.audioRecorder.onstop = () => {
                        const audioBlob = new Blob(gameState.audioChunks, { type: 'audio/webm' });
                        const audioUrl = URL.createObjectURL(audioBlob);
                        audioPlaybackElement.src = audioUrl;
                        audioPlaybackElement.classList.remove('hidden'); // Show audio controls
                        statusElement.innerHTML = '<p class="success-message">Recording stopped. You can play it back.</p>';
                    };

                    gameState.audioRecorder.start();
                    recordBtn.classList.add('hidden');
                    stopRecordBtn.classList.remove('hidden');
                    audioPlaybackElement.classList.add('hidden'); // Hide playback during recording
                    statusElement.innerHTML = '<p class="info-message">Recording... Speak your line!</p>';
                } catch (err) {
                    console.error('Error accessing microphone:', err);
                    statusElement.innerHTML = '<p class="error-message">Error accessing microphone. Please allow microphone access.</p>';
                }
            }

            function stopRecordingConversation(statusElement, recordBtn, stopRecordBtn, audioPlaybackElement) {
                if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
                    gameState.audioRecorder.stop();
                    gameState.audioRecorder.stream.getTracks().forEach(track => track.stop()); // Stop microphone access
                }
                recordBtn.classList.remove('hidden');
                stopRecordBtn.classList.add('hidden');
                // The onstop event handler will show the audio playback
            }

            function nextConversationLine() {
                stopTimer(); // Ensure any recording timer is stopped
                if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
                    gameState.audioRecorder.stop();
                    gameState.audioRecorder.stream.getTracks().forEach(track => track.stop()); // Stop microphone access
                }
                gameState.currentIndex++;
                displayConversationLine();
            }


            // Q&A Game Functions
            function initQnAGame(qnaCategory) {
                console.log(`Initializing Q&A Game for ${qnaCategory}...`);
                gameState.currentPool = shuffleArray(gameData[qnaCategory]);
                gameState.currentIndex = 0;
                gameState.score = 0;
                displayQnACategorySelection(qnaCategory);
            }

            function displayQnACategorySelection(selectedCategory) {
                const categories = ['qna-html', 'qna-css', 'qna-js'];
                elements.gameArea.innerHTML = `
                    <div class="container qna-selection">
                        <h2 class="text-center text-blue-600">Select Q&A Category</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            ${categories.map(cat => {
                                const categoryName = cat.replace('qna-', '').toUpperCase();
                                return `
                                    <div class="card bg-yellow-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                                        <h5 class="text-xl font-semibold text-yellow-800 mb-2">${categoryName} Quiz</h5>
                                        <p class="text-gray-700 text-sm mb-4">Test your knowledge on ${categoryName}.</p>
                                        <button class="btn btn-primary w-full" onclick="startQnACategoryQuiz('${cat}')">Start Quiz</button>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <button class="btn btn-secondary mt-8" onclick="goHome()">Back to Home</button>
                    </div>
                `;
            }

            function startQnACategoryQuiz(category) {
                gameState.currentPool = shuffleArray(gameData[category]);
                gameState.currentIndex = 0;
                gameState.score = 0;
                displayQnAGameQuestion();
            }

            function displayQnAGameQuestion() {
                stopTimer();
                if (gameState.currentIndex >= gameState.currentPool.length) {
                    displayGameEndScreen();
                    return;
                }

                const currentQuestion = gameState.currentPool[gameState.currentIndex];
                const timerDuration = 20; // Time for Q&A questions

                elements.gameArea.innerHTML = `
                    <div class="container qna-game">
                        <div class="score-timer-container">
                            <div class="score">Score: <span id="score" class="text-blue-600">${gameState.score}</span></div>
                            <div class="timer">Time Left: <span id="timeLeft" class="text-blue-600">${gameState.timeLeft}s</span></div>
                        </div>
                        <div class="question-box text-left">
                            <h3 class="text-lg font-semibold text-gray-800 mb-4">${currentQuestion.question}</h3>
                        </div>
                        <div class="flex flex-col gap-3 mt-4">
                            ${currentQuestion.options.map((option, index) => `
                                <button class="btn btn-outline-primary w-full text-left" data-index="${index}" onclick="checkQnAAnswer(this, '${option}')">${option}</button>
                            `).join('')}
                        </div>
                        <p id="feedback" class="mt-3 feedback-message"></p>
                    </div>
                `;

                startTimer(timerDuration, (timeLeft) => {
                    document.getElementById('timeLeft').textContent = `${timeLeft}s`;
                }, () => {
                    const feedbackElement = document.getElementById('feedback');
                    feedbackElement.innerHTML = `<p class="error-message">Time's up! The correct answer was: <strong>${currentQuestion.answer}</strong></p>`;
                    // Disable options
                    elements.gameArea.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
                    // Show feedback message
                    feedbackElement.classList.add('show');
                    setTimeout(() => {
                        feedbackElement.classList.remove('show');
                        gameState.currentIndex++;
                        displayQnAGameQuestion();
                    }, 2000);
                });
            }

            function checkQnAAnswer(buttonElement, selectedOption) {
                stopTimer();
                const currentQuestion = gameState.currentPool[gameState.currentIndex];
                const feedbackElement = document.getElementById('feedback');

                // Disable all options
                elements.gameArea.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

                if (selectedOption === currentQuestion.answer) {
                    gameState.score++;
                    buttonElement.classList.add('btn-success');
                    feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉 ${currentQuestion.explanation}</p>`;
                } else {
                    buttonElement.classList.add('btn-danger');
                    feedbackElement.innerHTML = `<p class="error-message">Incorrect. The correct answer was: <strong>${currentQuestion.answer}</strong>. ${currentQuestion.explanation}</p>`;
                    // Highlight correct answer
                    elements.gameArea.querySelectorAll('.option-btn').forEach(btn => {
                        if (btn.textContent === currentQuestion.answer) {
                            btn.classList.add('btn-success');
                        }
                    });
                }
                document.getElementById('score').textContent = gameState.score;

                // Show feedback message
                feedbackElement.classList.add('show');

                setTimeout(() => {
                    feedbackElement.classList.remove('show');
                    gameState.currentIndex++;
                    displayQnAGameQuestion();
                }, 3000); // Wait 3 seconds to show explanation
            }

            // Initial call to set up the game
            document.addEventListener("DOMContentLoaded", goHome);
   
