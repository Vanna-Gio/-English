
        
        // Game Data - Moved to separate object for better organization
        const gameData = {
            vocab: [
                {
                    word: "surprising",
                    meaning: "unexpected or causing wonder",
                    khmer: "គួរឱ្យភ្ញាក់ផ្អើល",
                    audio: "",
                    options: ["unexpected", "boring", "usual", "common"],
                    correctAnswer: "unexpected"
                },
                {
                    word: "expected",
                    meaning: "anticipated or thought likely to happen",
                    khmer: "ដែលបានរំពឹងទុក",
                    audio: "",
                    options: ["anticipated", "surprising", "unusual", "rare"],
                    correctAnswer: "anticipated"
                },
                {
                    word: "elegant",
                    meaning: "graceful and stylish in appearance or manner",
                    khmer: "ស្រស់ស្អាត",
                    audio: "",
                    options: ["graceful", "clumsy", "messy", "ordinary"],
                    correctAnswer: "graceful"
                },
                {
                    word: "in spite of",
                    meaning: "despite; without being affected by something",
                    khmer: "ទោះបីជា",
                    audio: "",
                    options: ["despite", "because of", "due to", "instead of"],
                    correctAnswer: "despite"
                },
                {
                    word: "despite (preposition)",
                    meaning: "used to show contrast or unexpected results",
                    khmer: "ទោះបីជា",
                    audio: "",
                    options: ["although", "despite", "because", "since"],
                    correctAnswer: "despite"
                },
                {
                    word: "Although",
                    meaning: "used to introduce a contrasting idea",
                    khmer: "ទោះបីជា",
                    audio: "",
                    options: ["although", "because", "since", "despite"],
                    correctAnswer: "although"
                },
                {
                    word: "a bit more formal",
                    meaning: "slightly more official or proper",
                    khmer: "ធ្វើឱ្យមានភាពផ្លូវការបន្ថែម",
                    audio: "",
                    options: ["informal", "formal", "casual", "relaxed"],
                    correctAnswer: "formal"
                },
                {
                    word: "followed",
                    meaning: "came after or pursued",
                    khmer: "បានតាម",
                    audio: "",
                    options: ["preceded", "followed", "ignored", "avoided"],
                    correctAnswer: "followed"
                },
                {
                    word: "fear",
                    meaning: "an unpleasant emotion caused by danger or threat",
                    khmer: "ការភ័យខ្លាច",
                    audio: "",
                    options: ["fear", "joy", "confidence", "calm"],
                    correctAnswer: "fear"
                },
                {
                    word: "being tired (gerund phrase)",
                    meaning: "the state of feeling exhausted",
                    khmer: "ការនឿយហត់ / ក្នុងស្ថានភាពនឿយហត់",
                    audio: "",
                    options: ["being tired", "being happy", "being energetic", "being relaxed"],
                    correctAnswer: "being tired"
                },
                {
                    word: "he kept working (past tense + continuous action)",
                    meaning: "he continued to perform his job",
                    khmer: "គាត់បន្តធ្វើការ",
                    audio: "",
                    options: ["he kept working", "he stopped working", "he started working", "he avoided working"],
                    correctAnswer: "he kept working"
                },
                {
                    word: "It looks as if...",
                    meaning: "used to express appearance or assumption",
                    khmer: "វាមើលទៅដូចជា...",
                    audio: "",
                    options: ["It looks as if", "It seems like", "It appears", "It is"],
                    correctAnswer: "It looks as if"
                },
                {
                    word: "assumption",
                    meaning: "a belief or idea accepted as true without proof",
                    khmer: "ការសន្និដ្ឋាន",
                    audio: "",
                    options: ["assumption", "proof", "certainty", "doubt"],
                    correctAnswer: "assumption"
                },
                {
                    word: "appearance",
                    meaning: "the way someone or something looks",
                    khmer: "រូបរាង",
                    audio: "",
                    options: ["appearance", "disappearance", "behavior", "attitude"],
                    correctAnswer: "appearance"
                },
                {
                    word: "they've had a shock",
                    meaning: "they experienced something surprising or upsetting",
                    khmer: "ពួកគេទើបទទួលរងការភ្ញាក់ផ្អើល",
                    audio: "",
                    options: ["they've had a shock", "they've had a joy", "they've had a rest", "they've had a surprise"],
                    correctAnswer: "they've had a shock"
                },
                {
                    word: "as if",
                    meaning: "used to describe an appearance or gesture",
                    khmer: "ដូចជា / ដូចបំណង",
                    audio: "",
                    options: ["as if", "as though", "like", "similar"],
                    correctAnswer: "as if"
                },
                {
                    word: "gesture",
                    meaning: "a movement of the body to express an idea or feeling",
                    khmer: "ចលនា",
                    audio: "",
                    options: ["gesture", "speech", "expression", "action"],
                    correctAnswer: "gesture"
                },
                {
                    word: "They were shouting",
                    meaning: "they were speaking loudly (past continuous tense)",
                    khmer: "ពួកគេកំពុងស្រែក",
                    audio: "",
                    options: ["They were shouting", "They were whispering", "They were singing", "They were talking"],
                    correctAnswer: "They were shouting"
                },
                {
                    word: "as though",
                    meaning: "similar in meaning to 'as if'",
                    khmer: "ដូចជា / ដូចជាបាន",
                    audio: "",
                    options: ["as though", "as if", "like", "similar"],
                    correctAnswer: "as though"
                },
                {
                    word: "in panic",
                    meaning: "in a state of fear or anxiety",
                    khmer: "ក្នុងស្ថានភាពភ័យខ្លាច",
                    audio: "",
                    options: ["in panic", "in joy", "in calm", "in peace"],
                    correctAnswer: "in panic"
                }
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
                        ]
                    },
                    "Present Continuous": {
                        description: `Used for actions happening now, temporary actions, or planned future actions.<br>🧠 Use Present Continuous for:

                                    <br>Actions happening now:
                                      <br>→ She is talking on the phone right now.

                                    <br>Temporary actions:
                                     <br> → I’m living with my aunt this month.

                                    <br>Actions happening around now (not this exact moment):
                                    <br>  → I’m learning English this year.

                                    <br>Annoying habits (with “always”):
                                    <br>→ He is always forgetting his homework.
                                    <br>❓Question Form:

                                    <br>Are you studying now?

                                    <br>Is she eating lunch?

                                    <br>What are you doing?

                                    <br>Where is he going?`,
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
                            },
                            {
                                type: "fill-in-blank",
                                question: "My mom  ______(cook )in the kitchen.",
                                correctAnswer: "is cooking",
                                explanation: "My mom is cooking in the kitchen."
                            },
                            {
                                type: "match-the-words",
                                question: "Match the beginning of the sentence on the left with the correct ending on the right.",
                                pairs: [
                                    { stem: "I am  ", correctOption: " chatting with you now." },
                                    { stem: "I am  ", correctOption: "sitting at my desk.  "},
                                    { stem: "I’m ", correctOption: "reading a book." },
                                    { stem: "My family ", correctOption: " is eating dinner." },
                                    { stem: "I'm ", correctOption: " not watching TV." },
                                    { stem: " He's", correctOption: "playing a game." },
                                    { stem: "My brother ", correctOption: "is playing a game." },
                                    { stem: "I'm not", correctOption: "watching TV at the moment." }
                                ]
                            },
                        ]
                    },
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
                                  
                                       🔹  "I didn’t like the movie. It was well made, though. <br> ខ្ញុំមិនចូលចិត្តភាពយន្តនោះទេ។ ទោះបីបង្កើតបានល្អក៏ដោយ។" 
                                 `,
                                structure: "Although / Even though / Though + subject + verb, main clause. <br>OR <br>Main clause + although / even though / though + subject + verb.",
                                examples: [
                                    { type: "correct", sentence: "Although it was raining, we went for a walk",explanation: "👉 It's surprising to walk in the rain.<br>->ទោះបីជាភ្លៀងក៏ដោយ ប៉ុន្តែពួកយើងក៏ទៅដើរលេង។ " },
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
                     "So that – (To show purpose or reason)": {
                        description: `✅ Use it when:<br>You want to explain why someone did something — the goal or result they wanted
                                        <br>💬 You can use different helping verbs depending on time:
                                        <br>can / will → for future

                                        <br>could / would → for past
                                        <br>⚠️ Don’t forget:
                                        <br>You need a subject + verb after “so that.”

                                        <br>❌ "I study hard so that pass the exam."
                                        <br>✅ "I study hard so that I can pass the exam."
                         `,
                        structure: "🔧 Main clause + so that + subject + can/will/could/would + verb",
                        examples: [
                            { type: "correct", sentence: "I study hard so that I can pass the exam.",explanation: "👉 The reason I study = I want to pass the exam." },
                            { type: "correct", sentence: "I woke up early so that I could see the sunrise." },
                            { type: "correct", sentence: "" },
                            { type: "correct", sentence: "She left early so that she could catch the bus." },
                            { type: "correct", sentence: "They spoke quietly so that they wouldn’t wake the baby." },
                            { type: "correct", sentence: "He practices every day so that he will become a great player.",explanation: ` `},

                        ],
                       
                       
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly so that?",
                                options: [
                                    { text: "I woke up early so that...", correct: false },
                                    { text: "I woke up early so that I could see the sunrise.", correct: true, explanation: "🔹 Just add 'the' before 'sunrise'  and write it as one word (it's a noun here)." },
                                    { text: " I woke up early, I could see the sunrise.", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctl",
                                options: [
                                    { text: " She saved money she could buy a new phone.", correct: false },
                                    { text: "She saved money so that she could buy a new phone.", correct: true, explanation: "🔹 Add  'a' before 'new phone' — we always need an article with singular countable nouns." },
                                    { text: "She saved money so that", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly ?",
                                options: [
                                    { text: "He studied all night so that he would pass the exam.", correct: true },
                                    { text: "He studied all night so that he would pass exam", correct: false},
                                    { text: " He went to work, though he wasn’t feeling well", correct: true}
                                ]
                            },
                           
                        ]
                    },
                    " In spite of / Despite – (To show contrast or unexpected results)": {
                       description: `✅ Use it when:<br>You want to say that something happened even though it was difficult, surprising, or not expected.
                                        <br>🔁 Same meaning as:
                                        <br>"Although it was raining, we went outside."

                                        <br>But "in spite of" and "despite" are a bit more formal or elegant.

                                        <br>⚠️ Common mistake:
                                        <br>❌ "In spite of she was tired, she worked."
                                        <br>✅ "In spite of being tired / her tiredness, she worked."

                                        <br>🆚 "Despite" vs. "In spite of"
                                        <br>They mean the same thing! Use whichever sounds better to you — but "despite" is a bit more common in writing.
                         `,
                        structure: `🔧 Both "in spite of" and "despite" are followed by:<br>➡️ a noun, pronoun, or -ing verb (gerund)<br>🚫 Not followed by a full sentence (subject + verb)!`,
                        examples: [
                            { type: "correct", sentence: "In spite of her fear, she gave the speech.",explanation: "👉 The reason I study = I want to pass the exam." },
                            { type: "correct", sentence: "Despite being tired, he kept working." },
                            { type: "correct", sentence: "In spite of the rain, we went outside" },
                            { type: "correct", sentence: "Despite the noise, I fell asleep quickly." },
                           

                        ],
                       
                       
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly? ",
                                options: [
                                    { text: "In spite of the cold weather, we decided to go camping", correct: true },
                                    { text: "The cold weather, we decided to go camping", correct: false, },
                                    { text: " In spite of the cold weather", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly ",
                                options: [
                                    { text: " In spite of the summer weather, the children continued to play outside", correct: true },
                                    { text: "In spite of the spring weather, they went out for a long walk", correct: true },
                                    { text: "Despite studying a lot, I still struggled with the exam", correct: true}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "He studied all night so that he would pass the exam.", correct:false},
                                    { text: "Despite studying a lot, I found the exam much harder than expected", correct: true},
                                    { text: " In spite of being sick, he managed to finish all his work on time.", correct: true}
                                ]
                            },
                           
                        ] 
                    },
                     "🔄 Unless – (For conditions and exceptions)": {
                       description: `✅ Use it when:<br>You want to say something will/won’t happen if a condition is not met.<br>It’s kind of like the opposite of “if not.”
                                       <br>⚠️ Common mistake:
                                        <br>❌ "Unless you don’t come, I’ll be angry."
                                        <br>✅ "Unless you come, I’ll be angry."
                                        <br>(“Unless” already means “if not” — so no need for “don’t”)
                         `,
                        structure: `🔧Main clause + unless + subject + verb<br>Or flip it:<br>Unless + subject + verb, main clause`,
                        examples: [
                            { type: "correct", sentence: "I won’t go unless it stops raining.",explanation: "👉 I will only go if it stops." },
                            { type: "correct", sentence: "You can’t enter the club unless you’re a member.",explanation: "👉 You must be a member — or no entry. " },
                            { type: "correct", sentence: "Unless he studies, he will fail the test" },
                            { type: "correct", sentence: "I won’t pass the level unless I beat the boss." },
                            { type: "correct", sentence: "Unless we leave now, we’ll miss the train." },
                           

                        ],
                       
                       
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly? ",
                                options: [
                                    { text: "Unless we leave now, we’ll miss the train.", correct: true },
                                    { text: "I won’t pass the level unless I beat the boss.", correct: true },
                                    { text: " Unless he studies, he will fail the test", correct: true}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly ",
                                options: [
                                    { text: "You can’t enter the club unless you’re a member. ", correct: true },
                                    { text: "I won’t go unless it stops raining.", correct: true },
                                    { text: "Unless you come, I’ll be angry.", correct: true}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "Unless you don’t come, I’ll be angry.", correct:false},
                                    { text: " I won't eat unless you pay for me.", correct: true},
                                    { text: " You can’t drive unless you have a driver’s license.", correct: true}
                                ]
                            },
                             {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "Unless you don’t come, I’ll be angry.", correct:false},
                                    { text: " Unless they go on a trip, they will meet me", correct: true},
                                    { text: " Unless she stays here, she will go to the market.", correct: true}
                                ]
                            },
                           
                        ] 
                    },
                     "🤔 Whether... or not — (For choices, possibilities, or situations with no control)": {
                       description: `✅ Use it when:<br>You want to say something happens in both cases — whether something is true or not.
                                       <br>⚠️ Common mistake:
                                        <br>Don’t confuse “whether” with “if” — they’re similar but not always the same.

                                        <br>❌ "I don’t know whether or not I should go or not." (too many “or not”s 😅)
                                        <br>✅ "I don’t know whether I should go."
                         `,
                        structure: `🔧Whether + subject + verb... or not, main clause<br>or<br>Main clause + whether + subject + verb... or not<br>You can also skip "or not" sometimes if it's understood.`,
                        examples: [
                            { type: "correct", sentence: "Whether you like it or not, we have to go.",explanation: "👉 We’re going — even if you don’t want to." },
                            { type: "correct", sentence: "I'm going to the party whether he comes or not.",explanation: "👉 His choice doesn’t change your decision." },
                            { type: "correct", sentence: "She’ll take the test whether she’s ready or not" },
                            { type: "correct", sentence: "Whether it rains or not, the game will go on." },
                            { type: "correct", sentence: "" },
                           

                        ],
                       
                       
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly? ",
                                options: [
                                    { text: "Whether it rains or not, the game will go on.", correct: true },
                                    { text: "She’ll take the test whether she’s ready or not.", correct: true },
                                    { text: "I'm going to the party whether he comes or not.", correct: true}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly ",
                                options: [
                                    { text: "Whether you like it or not, we have to go. ", correct: true },
                                    { text: "Whether I pass or not, I have to learn.", correct: true, explanation: " 💬 Meaning: Even if I fail, I still need to keep learning."},
                                    { text: "Whether she agrees or not, she needs to go.", correct: true}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "I'll do it whether you help me.", correct:false, explanation: " This sentence needs the 'or not' at the end to show the contrast clearly."},
                                    { text: "I'll do it whether you help me or not", correct: true},
                                    { text: " You can’t drive unless you have a driver’s license.", correct: false}
                                ]
                            },
                             {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "Unless you don’t come, I’ll be angry.", correct:false},
                                    { text: " Unless they go on a trip, they will meet me", correct: true},
                                    { text: " Unless she stays here, she will go to the market.", correct: true}
                                ]
                            },
                           
                        ] 
                    },
                     "⚖️ So... that – (To show a result or effect)": {
                       description: `✅ Use it when:<br>You want to explain how strong something is — and what result it causes.
                                    <br>❗️Don't confuse with:
                                    <br>❌ "So that" (which means purpose — we learned that earlier!)
                                    <br>✅ This one is about result, not goal.
                                    <br>🔁 Quick breakdown:
                                    <br>Expression	Example
                                    <br>So + adjective	"so cold" → "It was so cold that we stayed home."
                                    <br>So + adverb	"so quickly" → "He spoke so quickly that I couldn’t understand."
                                    <br>So + much/many	"They had so much work that they got stressed."
                        `,
                        structure: `🔧So + adjective/adverb + that + result<br>OR<br>So + much/many/little/few + noun + that + result`,
                        examples: [
                            { type: "correct", sentence: "She was so tired that she fell asleep at her desk",explanation: "👉 Her tiredness caused her to sleep at her desk" },
                            { type: "correct", sentence: "He ran so fast that nobody could catch him.",explanation: "" },
                            { type: "correct", sentence: "It was so hot that we stayed inside all day." },
                            { type: "correct", sentence: "They had so much homework that they couldn’t go out." },
                            { type: "correct", sentence: "I ate so little food that I felt dizzy." },
                             { type: "correct", sentence: "He spoke so quickly that I couldn't understand what he said." },
                           

                        ],
                       
                       
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly? ",
                                options: [
                                    { text: "I ate so little food that I felt dizzy.", correct: true },
                                    { text: "They had so much homework that they couldn’t go out.", correct: true },
                                    { text: "It was so hot that we stayed inside all day.", correct: true}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly ",
                                options: [
                                    { text: "They had so much work that they got stressed. ", correct: true },
                                    { text: "He spoke so quickly that I couldn’t understand.", correct: true},
                                    { text: "Whether she agrees or not, she needs to go.", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "It was so cold that we stayed home.", correct: true},
                                    { text: "They were so friendly that everyone felt comfortable around them", correct: true},
                                    { text: " You can’t drive unless you have a driver’s license.", correct: false}
                                ]
                            },
                             {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "It was so cute that it made me fall in love.", correct: true},
                                    { text: " He was so handsome that he got the Handsome Man Award", correct: true},
                                    { text: "She had so much money that she became rich", correct: true}
                                ]
                            },
                           
                        ] 
                    },
                    " ✨ Not only... but also...(For emphasis and adding extra information)": {
                       description: `✅ Use it when:<br>You want to say two strong or surprising things — and show that the second one adds even more importance.
                                    <br>🔥 With Emphasis (Inversion):
                                    <br>Sometimes we put "Not only" at the beginning for drama:

                                    <br>"Not only did he lie, but he also blamed me!"
                                    <br>✅ Uses inversion (did he lie = not normal word order)

                                    <br>⚠️ Don’t forget:
                                    <br>“Not only” = first point

                                    <br>“But also” = second, surprising or impressive point

                                    <br>You can add "also" or "too" for emphasis

                                    <br>✍️ Try creating:
                                    <br>"Not only did I..."

                                    <br>"He not only..."

                                    <br>"She is not only..., but also..."

                                    <br>"They not only..., they also..."
                        `,
                        structure: `🔧Not only + [verb/phrase] + but also + [verb/phrase]<br>Can be used with:<br>verbs<br>nouns<br>adjectives<br>full actions`,
                        examples: [
                            { type: "correct", sentence: "Not only is she smart, but she’s also kind.",explanation: "👉 She’s BOTH smart and kind." },
                            { type: "correct", sentence: "He not only speaks English, but also French",explanation: "" },
                            { type: "correct", sentence: "Not only did they finish early, but they also helped others" },
                            { type: "correct", sentence: "They had so much homework that they couldn’t go out." },
                            { type: "correct", sentence: "She not only forgot my birthday but also ignored my message!." },
                             { type: "correct", sentence: "" },
                           

                        ],
                       
                       
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly? ",
                                options: [
                                    { text: "Not only did I finish my homework, but I also helped my friend with theirs", correct: true },
                                    { text: "She not only forgot my birthday but also ignored my message!.", correct: true },
                                    { text: "He not only speaks English, but also French", correct: true}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly ",
                                options: [
                                    { text: " He bought not only a phone but also a laptop", correct: true },
                                    { text: "She is not only smart but also funny.", correct: true},
                                    { text: "Whether she agrees or not, she needs to go.", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "It was so cold that we stayed home.", correct: true},
                                    { text: "They were so friendly that everyone felt comfortable around them", correct: true},
                                    { text: " You can’t drive unless you have a driver’s license.", correct: false}
                                ]
                            },
                             {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "It was so cute that it made me fall in love.", correct: true},
                                    { text: " He was so handsome that he got the Handsome Man Award", correct: true},
                                    { text: "She had so much money that she became rich", correct: true}
                                ]
                            },
                           
                        ] 
                    },
                    " 🚫 Neither... nor...(For combining two negative ideas)": {
                       description: `✅ Use it when:<br>You want to say that two things are NOT true or do NOT happen.<br>It’s like saying:<br>“Not this… and also not that.”
                                    <br>✨ Notes:
                                    <br>Use singular or plural verb depending on the second subject
                                    <br>👉 "Neither he nor I am going."
                                    <br>👉 "Neither she nor they are coming."

                                    <br>Similar to:
                                    <br>"I don’t like apples or bananas."
                                    <br>➡️ Formal version: "I like neither apples nor bananas."

                                    <br>📝 Try creating:
                                    <br>"Neither I nor..."

                                    <br>"He neither... nor..."

                                    <br>"They are neither... nor..."

                                    <br>"She neither [verb] nor [verb]..."
                        `,
                        structure: `🔧Neither + [thing 1] + nor + [thing 2]<br>You can use:<br>Nouns<br>Verbs<br>Subjects<br>Adjectives`,
                        examples: [
                            { type: "correct", sentence: "Neither my brother nor my sister likes pizza.",explanation: "👉 Both of them don’t like it." },
                            { type: "correct", sentence: "She neither called me nor sent a message",explanation: "👉 She did not do either thing." },
                            { type: "correct", sentence: "They are neither ready nor motivated<br>👉 They’re not ready and not motivated." },
                            { type: "correct", sentence: "Neither the teacher nor the students were prepared." },
                            { type: "correct", sentence: "" },
                             { type: "correct", sentence: "" },
                           

                        ],
                       
                       
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly? ",
                                options: [
                                    { text: "Not only did I finish my homework, but I also helped my friend with theirs", correct: true },
                                    { text: "She not only forgot my birthday but also ignored my message!.", correct: true },
                                    { text: "He not only speaks English, but also French", correct: true}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly ",
                                options: [
                                    { text: " Neither the teacher nor the students were prepared.", correct: true },
                                    { text: "She is not only smart but also funny.", correct: false},
                                    { text: "Whether she agrees or not, she needs to go.", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "She neither called me nor sent a message", correct: true},
                                    { text: "Neither my brother nor my sister likes pizza", correct: true},
                                    { text: " You can’t drive unless you have a driver’s license.", correct: false}
                                ]
                            },
                             {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "Neither I nor he is doing the homework.", correct: true},
                                    { text: " He neither called her nor sent a message.", correct: true},
                                    { text: "They are neither coming to the party nor staying at all. or They are neither coming to the party nor staying long", correct: true}
                                ]
                            },
                           
                        ] 
                    },
                    "💭 As if / As though – (To describe something imaginary, unreal, or surprising)": {
                       description: `✅ Use it when:<br>You want to compare a situation to something that’s not true or only seems true.”
                                    <br>🧠 Tense Tip:
                                    <br>Situation	Verb Tense
                                    <br>Possible/Real	Present (or same tense)
                                    <br>Imaginary/Unreal	Use past (or past perfect if it's about the past)

                                    <br>Example:

                                    <br>Real: "He talks as if he knows the answer."

                                    <br>Unreal: "He talks as if he knew the answer." (but he probably doesn’t)

                                    <br>✍️ Try making sentences like:
                                    <br>"She looks as if..."

                                    <br>"He speaks as though..."

                                    <br>"They acted as if they..."

                                    <br>"I felt as if I..."

                                    <br>"It seems as though..."
                        `,
                        structure: `🔧Subject + verb + as if/as though + subject + verb (past simple OR past perfect)`,
                        examples: [
                            { type: "correct", sentence: "He talks as if he knows everything",explanation: "👉 He acts like he knows it all (maybe he doesn't." },
                            { type: "correct", sentence: "She looked as if she had seen a ghost.",explanation: "👉 She looked shocked/surprised (imaginary situation)" },
                            { type: "correct", sentence: "They acted as if they were rich.<br>👉 They’re not rich, but they acted like it." },
                            { type: "correct", sentence: "You sound as though you're sick.<br>👉 You might not be sick — but it seems like you are" },
                            { type: "correct", sentence: "" },
                             { type: "correct", sentence: "" },
                           

                        ],
                       
                       
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly? ",
                                options: [
                                    { text: "She looked as if she had seen a ghost.", correct: true },
                                    { text: "You sound as though you're sick.", correct: true },
                                    { text: "They acted as if they were rich", correct: true}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly ",
                                options: [
                                    { text: "She looks as if she has seen a ghost, but in fact, she hasn’t. ", correct: true },
                                    { text: "She is not only smart but also funny.", correct: false},
                                    { text: "Whether she agrees or not, she needs to go.", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "They acted as if they were poor", correct: true},
                                    { text: "He speaks as though he knew the answer, but actually, he doesn't", correct: true},
                                    { text: " You can’t drive unless you have a driver’s license.", correct: false}
                                ]
                            },
                             {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "I felt as if I had fallen in love with her", correct: true},
                                    { text: " It seems as though they don’t care.", correct: true},
                                    { text: "It seems as though something is wrong.", correct: true},
                                    { text: "It seems as though he's hiding something", correct: true}
                                ]
                            },
                           
                        ] 
                    },
                    "🌟 Would rather – (To express preferences)": {
                       description: `✅ Use it when:<br>You want to say what someone prefers to do — now or in the future.
                                    <br>⚡ Bonus:
                                    <br>You can compare preferences:

                                    <br>"I’d rather go out than stay in."

                                    <br>"He’d rather play football than watch it."

                                    <br>✍️ Now you try!
                                    <br>Make two sentences:

                                    <br>"I would rather..." (about yourself)

                                    <br>"I would rather you/he/she..." (about someone else)"
                        `,
                        structure: `🔧 Structure 1 – Same subject (I prefer to do something):<br>Subject + would rather + base verb<br>🧠 No "to" before the verb!
                                        <br>🔧 Structure 2 – Different subject (You prefer someone else to do something):
                                        <br>**Subject + would rather + other subject + past simple
                                        <br>🧠 Even though you're talking about the present/future, you use past tense for the second subject.`,
                        examples: [
                            { type: "correct", sentence: "I would rather stay home tonight.",explanation: "👉 I prefer to stay home." },
                            { type: "correct", sentence: "She’d rather eat noodles than rice.",explanation: "👉 She’d = She would" },
                            { type: "correct", sentence: "We’d rather not talk about that." },
                            { type: "correct", sentence: "I’d rather you stayed home tonight.<br>👉 I want you to stay home (not me)." },
                            { type: "correct", sentence: "She would rather he didn’t come. <br>👉 She prefers that he doesn't come." },
                             { type: "correct", sentence: "We’d rather they arrived earlier" },
                           

                        ],
                       
                       
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly? ",
                                options: [
                                    { text: "We’d rather they arrived earlier", correct: true },
                                    { text: "You sound as though you're sick.", correct:false },
                                    { text: "They acted as if they were rich", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly ",
                                options: [
                                    { text: "She would rather he didn’t come. ", correct: true },
                                    { text: "She is not only smart but also funny.", correct: false},
                                    { text: "Whether she agrees or not, she needs to go.", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "I’d rather you stayed home tonight.", correct: true},
                                    { text: "I'd rather go out than stay in.", correct: true},
                                    { text: " You can’t drive unless you have a driver’s license.", correct: false}
                                ]
                            },
                             {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "I'd rather he played with me.", correct: true, explanation: " 👉 Means: I prefer that he plays with me (now or later)"},
                                    { text: " It seems as though they don’t care.", correct: false},
                                    { text: "I would rather stay home tonight.", correct: true},
                                    
                                ]
                            },
                           
                        ] 
                    },
                    "⏰ It's (high/about) time + subject + past simple": {
                       description: `✅ Use it when:<br>You want to say something should already have happened or needs to happen now.<br>➡️ Used to strongly suggest that something should happen now or very soon.
                                    <br>🧠 Why past tense?
                                    <br>Even though we mean now, we use past simple to show:

                                    <br>criticism

                                    <br>urgency

                                    <br>it's already late

                                    <br>⚡ Bonus:
                                    <br>You can also use:

                                    <br>"It's time to + base verb"
                                    <br>(when the subject is not changing)

                                    <br>Example:

                                    <br>"It’s time to start the meeting."

                                    <br>"It’s time to go."

                                    <br>✍️ Try making:
                                    <br>A sentence with "It’s time you..."

                                    <br>One with "It’s high time..."

                                    <br>One with "It’s about time..."
                        `,
                        structure: `🔧 It’s time + subject + past tense<br>It’s high time / about time + subject + past tense`,
                        examples: [
                            { type: "correct", sentence: "It’s time you went to bed.",explanation: "👉 (You’re still awake — but should be in bed now.)" },
                            { type: "correct", sentence: "It’s high time we left.",explanation: "👉 (We should have left already!)" },
                            { type: "correct", sentence: "It’s about time he apologized.<br>👉 (He hasn’t apologized — but he should!)" },
                            { type: "correct", sentence: "It's time you thought about your future." },
                            { type: "correct", sentence: "It's high time we bought fruit." },
                             { type: "correct", sentence: "it's about time she ran to the goal.<br>After 'It’s (about) time + subject', we always use past simple → 'ran' not 'run'" },
                           

                        ],
                       
                       
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly? ",
                                options: [
                                    { text: "It's about time she ran to the goal.", correct: true },
                                    { text: "You sound as though you're sick.", correct:false },
                                    { text: "They acted as if they were rich", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly ",
                                options: [
                                    { text: "She would rather he didn’t come. ", correct: true },
                                    { text: "She is not only smart but also funny.", correct: false},
                                    { text: "Whether she agrees or not, she needs to go.", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "I’d rather you stayed home tonight.", correct: true},
                                    { text: "I'd rather go out than stay in.", correct: true},
                                    { text: " You can’t drive unless you have a driver’s license.", correct: false}
                                ]
                            },
                             {
                                type: "multiple-choice",
                                question: "Which sentence correctly  ?",
                                options: [
                                    { text: "I'd rather he played with me.", correct: true, explanation: " 👉 Means: I prefer that he plays with me (now or later)"},
                                    { text: " It seems as though they don’t care.", correct: false},
                                    { text: "I would rather stay home tonight.", correct: true},
                                    
                                ]
                            },
                           
                        ] 
                    },
               
                },
                BasicSentencePatterns: {
                        "🗣️1. Yes/No Questions": {
                            description: "Used for actions happening now, temporary actions, or planned future actions.<br>💡 Remember: <br>Use “Do” with I, you, we, they <br>Use “Does” with he, she, it <br>The verb stays in base form (don’t add -s in the question)",
                            structure: "Do/Does + Subject + Base Verb + …? → to ask questions <br>Subject + Base Verb (or Verb+s) → to answer",
                            examples: [
                                { type: "correct", sentence: "Do you play football? ", explanation: "→ Yes, I do. / No, I don’t." },
                                { type: "correct", sentence: "Does she like coffee?", explanation: "→ Yes, she does. / No, she doesn’t." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Do you like English?",
                                    options: [
                                        { text: "Yes, I like English because it helps me find information on the internet for my assignments", correct: true },
                                        { text: "Yes, I like English. It’s fun and useful.", correct: true, explanation: "✅" },
                                        { text: "→ Yes, I like English because it helps me find information on the internet for my assignments.", correct: true}
                                    ]
                                },
                                
                            ]
                        },
                        "🗣️ 2. Wh- Questions": {
                        description: "Used for actions happening now, temporary actions, or planned future actions.<br>🧠 Common Wh- question words:<br>What = thing<br>Where = place<br>When = time<br>Who = person<br>Why = reason<br>How = way/method",
                        structure: "Wh-word + do/does + subject + verb?",
                        examples: [
                            { type: "correct", sentence: "What do you eat for breakfast? ", explanation: "→ I eat rice and fried egg." },
                            { type: "correct", sentence: "When do you go to school?", explanation: "→  I go to school at 7 a.m." },
                            { type: "correct", sentence: "Where does he live?", explanation: "→ He lives in Phnom Penh." },
                            { type: "correct", sentence: "Why do you study English?", explanation: "→  → I study English because I want to get a good job." },
                            
                        ],
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "What do you do on the weekend?",
                                options: [
                                    { text: "On the weekend, I usually relax at home, watch movies, and sometimes go out with my friends.", correct: true, explanation: "✅" },
                                    { text: "On the weekend, I usually get up late, around 8 o’clock.I do the homework assigned by my teacher, and sometimes I go out with my friends to do fun activities like watching a movie or going on a picnic.", correct: true},
                                    { text: "Yes, I do", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "❓When do you do your homework?",
                                options: [
                                    { text: "I usually do my homework at 6 o’clock after dinner.", correct: true },
                                    { text: "I usually do my homework in the evening after dinner.", correct: true, explanation: "✅"},
                                    { text: "Yes, I do", correct: false}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "❓Where do you go after school?",
                                options: [
                                    { text: "On the weekend, I usually relax at home, watch movies, and sometimes go out with my friends.", correct:false },
                                    { text: " After school, I go home and take a rest, or sometimes I go to the market with my friends.", correct: true},
                                    { text: "After school, I go home and rest, or sometimes I go to the library.", correct: true, explanation: "✅"}
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "❓Why do you learn English?",
                                options: [
                                    { text: "I learn English because it helps me get better opportunities and communicate with people from other contries.", correct: true, explanation: "✅"  },
                                    { text: "I usually do my homework in the evening after dinner.", correct: false},
                                    { text: "I learn English because I want to improve my skills, get a good job, and be able to communicate with people from around the world.", correct: true }
                                ]
                            },
                        ]
                    },
                    
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
                    { sentence: "I would rather stay home tonight.", khmer: "ខ្ញុំចង់នៅផ្ទះយប់នេះជាង។" },
                    { sentence: "She’d rather eat noodles than rice.", khmer: "នាងចង់ញ៉ាំមីជាងបាយ។" },
                    { sentence: "I’d rather you stayed home tonight.", khmer: "ខ្ញុំចង់ឱ្យអ្នកនៅផ្ទះយប់នេះ។" },
                    { sentence: "She would rather he didn’t come.", khmer: "នាងចង់ឱ្យគាត់មិនមក។" },
                    { sentence: "She prefers that he doesn't come.", khmer: "នាងចូលចិត្តឱ្យគាត់មិនមក។" },
                    { sentence: "We’d rather they arrived earlier", khmer: "ពួកយើងចង់ឱ្យពួកគេមកដល់មុន។" },
                    { sentence: "In spite of her fear, she gave the speech.", khmer: "ទោះបីជាគាត់ភ័យក៏ដោយ គាត់នៅតែថ្លែងសុន្ទរកថា។" },
                    { sentence: "Despite being tired, he kept working.", khmer: "ទោះបីជាគាត់នឿយហត់ក៏ដោយ គាត់នៅតែបន្តធ្វើការ។" },
                    { sentence: "In spite of the rain, we went outside.", khmer: "ទោះបីជាមានភ្លៀងក៏ដោយ ពួកយើងនៅតែចេញទៅខាងក្រៅ។" },
                    { sentence: "Despite the noise, I fell asleep quickly.", khmer: "ទោះបីមានសំឡេងរំខានក៏ដោយ ខ្ញុំនៅតែដេកលក់បានលឿន។" },
                    { sentence: "He talks as if he knows the answer.", khmer: "គាត់និយាយដូចជាគាត់ដឹងចម្លើយ។" },
                    { sentence: "He talks as if he knew the answer. (but he probably doesn’t)", khmer: "គាត់និយាយដូចជាគាត់ដឹងចម្លើយ (ប៉ុន្តែប្រហែលជាគាត់មិនដឹងទេ។)" },
                    { sentence: "It looks as if they’ve had a shock.", khmer: "វាមើលទៅដូចជាពួកគេទើបទទួលរងការភ្ញាក់ផ្អើល។" },
                    { sentence: "It looks as though you’ve not met before.", khmer: "វាមើលទៅដូចជាអ្នកមិនបានជួបគ្នាមុន។" },
                    { sentence: "She moved her lips as if to smile.", khmer: "នាងផ្លាស់ទីបបូរមាត់របស់នាងដូចជាចង់ញញឹម។" },
                    { sentence: "They were shouting as though in panic.", khmer: "ពួកគេកំពុងស្រែកដូចជាកំពុងភ័យខ្លាច។" },
                    { sentence: "She felt as if all her worries had gone.", khmer: "នាងមានអារម្មណ៍ដូចជាការព្រួយបារម្ភទាំងអស់របស់នាងបានបាត់ទៅ។" },
                    { sentence: "I’ve got so much work it looks as if I’ll have to stay at home this evening.", khmer: "ខ្ញុំមានការងារច្រើនណាស់ វាមើលទៅដូចជាខ្ញុំត្រូវនៅផ្ទះយប់នេះ។" },
                    { sentence: "They felt as though they had been given the wrong information.", khmer: "ពួកគេមានអារម្មណ៍ដូចជាពួកគេបានទទួលព័ត៌មានខុស។" },
                    { sentence: "You sound as though you're sick.", khmer: "សំឡេងអ្នកដូចជាអ្នកកំពុងជំងឺ។" },
                    { sentence: "They acted as if they were rich.", khmer: "ពួកគេធ្វើដូចជាពួកគេមានសម្បត្តិ។" },
                    { sentence: "Not only did he lie, but he also blamed me!", khmer: "មិនត្រឹមតែគាត់កុហកទេ គាត់នៅតែបន្ទោសខ្ញុំ។" },
                    { sentence: "Not only is she smart, but she’s also kind.", khmer: "មិនត្រឹមតែនាងឆ្លាតទេ នាងនៅតែចិត្តល្អ។" },
                    { sentence: "He not only speaks English, but also French.", khmer: "គាត់មិនត្រឹមតែនិយាយភាសាអង់គ្លេសទេ គាត់នៅតែនិយាយភាសាបារាំង។" },
                    { sentence: "Neither my brother nor my sister likes pizza.", khmer: "ទាំងបងប្រុសរបស់ខ្ញុំ និងបងស្រីរបស់ខ្ញុំមិនចូលចិត្តភីហ្សាទេ។" },
                    { sentence: "She neither called me nor sent a message.", khmer: "នាងមិនបានហៅខ្ញុំ និងមិនបានផ្ញើសារទេ។" },
                    { sentence: "I study hard so that I can pass the exam.", khmer: "ខ្ញុំសិក្សាខ្លាំងដើម្បីឱ្យខ្ញុំអាចជាប់ការប្រឡង។" },
                    { sentence: "I woke up early so that I could see the sunrise.", khmer: "ខ្ញុំបានភ្ញាក់ពីដំណេកដើម ដើម្បីឱ្យខ្ញុំអាចមើលថ្ងៃរះ។" },
                    { sentence: "She left early so that she could catch the bus.", khmer: "នាងចេញដើម ដើម្បីឱ្យនាងអាចចាប់ឡានក្រុង។" },
                    { sentence: "I won’t go unless it stops raining.", khmer: "ខ្ញុំមិនទៅទេ លុះត្រាតែភ្លៀងឈប់។" },
                    { sentence: "You can’t enter the club unless you’re a member.", khmer: "អ្នកមិនអាចចូលក្លឹបបានទេ លុះត្រាតែអ្នកជាសមាជិក។" },
                    { sentence: "Whether you like it or not, we have to go.", khmer: "មិនថាអ្នកចូលចិត្តវាឬមិនចូលចិត្តទេ ពួកយើងត្រូវទៅ។" },
                    { sentence: "It’s time you went to bed.", khmer: "វាជាពេលដែលអ្នកគួរទៅដេក។" },
                    { sentence: "It’s high time we left.", khmer: "វាជាពេលដែលពួកយើងគួរចេញទៅ។" },
                    { sentence: "She was so tired that she fell asleep at her desk.", khmer: "នាងនឿយហត់ណាស់ ដល់ថ្នាក់ដែលនាងដេកលក់នៅតុរបស់នាង។" },
                    { sentence: "He ran so fast that nobody could catch him.", khmer: "គាត់រត់លឿនណាស់ ដល់ថ្នាក់ដែលគ្មាននរណាអាចចាប់គាត់បាន។" },
                    { sentence: "It was so hot that we stayed inside all day.", khmer: "វាក្តៅណាស់ ដល់ថ្នាក់ដែលពួកយើងនៅក្នុងផ្ទះពេញមួយថ្ងៃ។" },
                    { sentence: "As soon as she left the house, it started to rain.", khmer: "ទាំងនាងទើបចេញពីផ្ទះភ្លៀងបានចាប់ផ្តើមធ្លាក់។" },
                    { sentence: "No sooner had she left the house than it started to rain.", khmer: "ទាំងនាងទើបចេញពីផ្ទះភ្លៀងបានចាប់ផ្តើមធ្លាក់។" }
                    ],
                    "Intermedian Sentences": [
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
                    ],
                    "🗣️How are you? (with Present Continuous) ": [
                        { speaker: "A", text: "Hey! How are you?" },
                        { speaker: "B", text: "I’m doing well, thanks. How about you?" },
                        { speaker: "A", text: "I’m okay. I’m a little tired today." },
                        { speaker: "B", text: "Oh, why? Are you studying a lot?" },
                        { speaker: "A", text: "Yes, I’m studying for my English test." },
                        { speaker: "B", text: "I see. I’m also doing some homework now." },
                        { speaker: "A", text: "What subject?" },
                        { speaker: "B", text: "Math. It’s a bit difficult." },
                        { speaker: "A", text: "Yeah, math can be hard." },
                        { speaker: "B", text: "Anyway, good luck with your test!" },
                        { speaker: "A", text: "Thanks! Talk to you soon." },
                        { speaker: "B", text: "See you!" }
                    ],
                   
                    "🗣️ Simple Conversation: How are you?": [
                        { speaker: "A", text: "Hi! How are you today?" },
                        { speaker: "B", text: "I’m good, thanks. And you?" },
                        { speaker: "A", text: "I’m fine too, thanks. What are you doing now?" },
                        { speaker: "B", text: "I’m just relaxing. I finished my homework." },
                        { speaker: "A", text: "That’s great! I just finished cooking dinner." },
                        { speaker: "B", text: "Sounds good! Let’s talk later." },
                        { speaker: "A", text: "Sure! Bye!" },
                        { speaker: "B", text: "Bye!" }
                    ],
                    
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
                // Shuffle options to ensure random order each time
                const shuffledOptions = shuffleArray(currentWord.options);

                elements.gameArea.innerHTML = `
                    <div class="container vocab-game">
                        <div class="score-timer-container">
                            <div class="score">Score: <span id="score">${gameState.score}</span></div>
                            <div class="timer">Time Left: <span id="timeLeft">${gameState.timeLeft}s</span></div>
                        </div>
                        <div class="question-box">
                            <h3>${currentWord.meaning}</h3>
                            <p class="khmer-meaning">(${currentWord.khmer})</p>
                            <div class="audio-controls mt-3">
                                <button class="btn btn-info" onclick="speakText('${currentWord.word}')"><i class="fas fa-volume-up mr-2"></i>Pronounce (EN)</button>
                                ${currentWord.audio ? `<button class="btn btn-info" onclick="playAudio('${currentWord.audio}')"><i class="fas fa-headphones mr-2"></i>Listen Audio</button>` : ''}
                            </div>
                        </div>
                        <div class="answer-options-container mt-4 grid grid-cols-1 gap-3">
                            ${shuffledOptions.map((option, index) => `
                                <button class="btn btn-outline-primary w-full text-left vocab-option-btn" data-option="${option}" onclick="checkVocabAnswer(this, '${option}')">${option}</button>
                            `).join('')}
                        </div>
                        <p id="feedback" class="mt-3 feedback-message"></p>
                    </div>
                `;

                startTimer(30, (timeLeft) => { // 30 seconds per vocabulary question
                    document.getElementById('timeLeft').textContent = `${timeLeft}s`;
                }, () => {
                    document.getElementById('feedback').innerHTML = `<p class="error-message">Time's up! The correct answer was: <strong>${currentWord.correctAnswer}</strong></p>`;
                    // Disable all options
                    elements.gameArea.querySelectorAll('.vocab-option-btn').forEach(btn => btn.disabled = true);
                    // Highlight the correct answer
                    elements.gameArea.querySelectorAll('.vocab-option-btn').forEach(btn => {
                        if (btn.dataset.option === currentWord.correctAnswer) {
                            btn.classList.add('btn-success');
                        }
                    });
                    setTimeout(() => {
                        gameState.currentIndex++;
                        displayVocabQuestion();
                    }, 2000);
                });
            }

            function checkVocabAnswer(buttonElement, selectedOption) {
                stopTimer();
                const currentWord = gameState.currentPool[gameState.currentIndex];
                const feedbackElement = document.getElementById('feedback');

                // Disable all options immediately after an answer is chosen
                elements.gameArea.querySelectorAll('.vocab-option-btn').forEach(btn => btn.disabled = true);

                if (selectedOption === currentWord.correctAnswer) {
                    gameState.score++;
                    buttonElement.classList.add('btn-success'); // Green for correct
                    feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉</p>`;
                } else {
                    buttonElement.classList.add('btn-danger'); // Red for incorrect
                    feedbackElement.innerHTML = `<p class="error-message">Incorrect. The correct answer was: <strong>${currentWord.correctAnswer}</strong></p>`;
                    // Also highlight the correct answer
                    elements.gameArea.querySelectorAll('.vocab-option-btn').forEach(btn => {
                        if (btn.dataset.option === currentWord.correctAnswer) {
                            btn.classList.add('btn-success');
                        }
                    });
                }
                document.getElementById('score').textContent = gameState.score;

                // Show feedback message
                feedbackElement.classList.add('show');

                setTimeout(() => {
                    feedbackElement.classList.remove('show'); // Hide feedback
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
                let timerDuration = 60; // Longer timer for grammar questions

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
    
    
