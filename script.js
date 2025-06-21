
        // Game Data - Moved to separate object for better organization
        const gameData = {
            vocab: [
                {
                    word: "surprising",
                    meaning: "causing surprise; unexpected.",
                    khmer: "គួរឱ្យភ្ញាក់ផ្អើល",
                    audio: "audio/surprising.mp3",
                    options: [
                        "expected",
                        "shocking",
                        "normal",
                        "boring"
                    ],
                    "correctAnswer": "shocking"
                },
                {
                    word: "expected",
                    meaning: "regarded as likely to happen or arrive.",
                    khmer: "បានរំពឹងទុក",
                    audio: "audio/expected.mp3",
                    options: [
                        "anticipated",
                        "unforeseen",
                        "unlikely",
                        "random"
                    ],
                    "correctAnswer": "anticipated"
                },
                {
                    word: "elegant",
                    meaning: "stylish and graceful in appearance or manner.",
                    khmer: "ប្រណិត",
                    audio: "audio/elegant.mp3",
                    options: [
                        "clumsy",
                        "graceful",
                        "plain",
                        "rough"
                    ],
                    "correctAnswer": "graceful"
                },
                {
                    word: "in spite of",
                    meaning: "without being affected by the particular fact mentioned.",
                    khmer: "ទោះបីជា",
                    audio: "audio/in_spite_of.mp3",
                    options: [
                        "because of",
                        "despite",
                        "due to",
                        "in addition to"
                    ],
                    "correctAnswer": "despite"
                },
                {
                    word: "despite (preposition)",
                    meaning: "without being affected by; in spite of.",
                    khmer: "ទោះបីជា",
                    audio: "audio/despite.mp3",
                    options: [
                        "because of",
                        "even though",
                        "in spite of",
                        "due to"
                    ],
                    "correctAnswer": "in spite of"
                },
                {
                    word: "Although",
                    meaning: "in spite of the fact that; even though.",
                    khmer: "ទោះបីជា",
                    audio: "audio/although.mp3",
                    options: [
                        "because",
                        "however",
                        "even if",
                        "in order that"
                    ],
                    "correctAnswer": "even if"
                },
                {
                    word: "a bit more formal",
                    meaning: "slightly more serious or official in style or manner.",
                    khmer: "ផ្លូវការជាងបន្តិច",
                    audio: "audio/a_bit_more_formal.mp3",
                    options: [
                        "very casual",
                        "slightly informal",
                        "more official",
                        "completely relaxed"
                    ],
                    "correctAnswer": "more official"
                },
                {
                    word: "followed",
                    meaning: "went or came after (someone or something) so as to catch up with them.",
                    khmer: "បានតាមដាន / បានបន្តបន្ទាប់",
                    audio: "audio/followed.mp3",
                    options: [
                        "preceded",
                        "led",
                        "pursued",
                        "ignored"
                    ],
                    "correctAnswer": "pursued"
                },
                {
                    word: "fear",
                    meaning: "an unpleasant emotion caused by the threat of danger, pain, or harm.",
                    khmer: "ការភ័យខ្លាច",
                    audio: "audio/fear.mp3",
                    options: [
                        "bravery",
                        "courage",
                        "terror",
                        "confidence"
                    ],
                    "correctAnswer": "terror"
                },
                {
                    word: "being tired (gerund phrase)",
                    meaning: "the state of feeling sleepy or needing rest.",
                    khmer: "ការនឿយហត់ / ក្នុងស្ថានភាពនឿយហត់",
                    audio: "audio/being_tired.mp3",
                    options: [
                        "feeling energetic",
                        "being exhausted",
                        "having strength",
                        "being awake"
                    ],
                    "correctAnswer": "being exhausted"
                },
                {
                    word: "he kept working (past tense + continuous action)",
                    meaning: "he continued to work without stopping.",
                    khmer: "គាត់បន្តធ្វើការ",
                    audio: "audio/he_kept_working.mp3",
                    options: [
                        "he stopped working",
                        "he started working",
                        "he paused his work",
                        "he continued to labor"
                    ],
                    "correctAnswer": "he continued to labor"
                },
                {
                    word: "It looks as if...",
                    meaning: "used to express appearance or assumption",
                    khmer: "វាមើលទៅដូចជា...",
                    audio: "audio/it_looks_as_if.mp3",
                    options: [
                        "It seems that...",
                        "It's certainly...",
                        "It's impossible that...",
                        "It appears unlikely that..."
                    ],
                    "correctAnswer": "It seems that..."
                },
                {
                    word: "assumption",
                    meaning: "a thing that is accepted as true or as certain to happen, without proof.",
                    khmer: "ការសន្មត់",
                    audio: "audio/assumption.mp3",
                    options: [
                        "fact",
                        "proof",
                        "presumption",
                        "certainty"
                    ],
                    "correctAnswer": "presumption"
                },
                {
                    word: "appearance",
                    meaning: "the way that someone or something looks.",
                    khmer: "រូបរាង",
                    audio: "audio/appearance.mp3",
                    options: [
                        "disguise",
                        "reality",
                        "looks",
                        "disappearance"
                    ],
                    "correctAnswer": "looks"
                },
                {
                    word: "they've had a shock",
                    meaning: "present perfect tense: have had)",
                    khmer: "ពួកគេទើបទទួលរងការភ្ញាក់ផ្អើល",
                    audio: "audio/theyve_had_a_shock.mp3",
                    options: [
                        "They are calm.",
                        "They experienced a sudden disturbing emotion.",
                        "They were expecting it.",
                        "They were happy."
                    ],
                    "correctAnswer": "They experienced a sudden disturbing emotion."
                },
                {
                    word: "as if",
                    meaning: "used to describe an appearance or gesture",
                    khmer: "ដូចជា / ដូចបំណង",
                    audio: "audio/as_if.mp3",
                    options: [
                        "in reality",
                        "as though",
                        "actually",
                        "definitely"
                    ],
                    "correctAnswer": "as though"
                },
                {
                    word: "gesture",
                    meaning: "a movement of part of the body, especially a hand or the head, to express an idea or meaning.",
                    khmer: "កាយវិការ",
                    audio: "audio/gesture.mp3",
                    options: [
                        "stillness",
                        "motion",
                        "speech",
                        "inaction"
                    ],
                    "correctAnswer": "motion"
                },
                {
                    word: "They were shouting",
                    meaning: "They were speaking very loudly or crying out.",
                    khmer: "ពួកគេកំពុងក្ដែងសម្លេង (past continuous tense)",
                    audio: "audio/they_were_shouting.mp3",
                    options: [
                        "They were whispering.",
                        "They were singing.",
                        "They were yelling.",
                        "They were silent."
                    ],
                    "correctAnswer": "They were yelling."
                },
                {
                    word: "as though",
                    meaning: "as if.",
                    khmer: "ដូចជា / ដូចជាបាន (similar in meaning to 'as if')",
                    audio: "audio/as_though.mp3",
                    options: [
                        "actually",
                        "in reality",
                        "as if",
                        "certainly"
                    ],
                    "correctAnswer": "as if"
                },
                {
                    word: "in panic",
                    meaning: "in a state of sudden uncontrollable fear or anxiety.",
                    khmer: "ក្នុងស្ថានភាពភ័យខ្លាច",
                    audio: "audio/in_panic.mp3",
                    options: [
                        "calmly",
                        "fearfully",
                        "confidently",
                        "peacefully"
                    ],
                    "correctAnswer": "fearfully"
                },
                {
                    word: "interchangeably",
                    meaning: "in a way that can be exchanged without making any difference.",
                    khmer: "អាចផ្លាស់ប្តូរគ្នាបាន",
                    audio: "audio/interchangeably.mp3",
                    options: [
                        "separately",
                        "alternatively",
                        "fixedly",
                        "uniquely"
                    ],
                    "correctAnswer": "alternatively"
                },
                {
                    word: "reactions",
                    meaning: "responses to something.",
                    khmer: "ប្រតិកម្ម",
                    audio: "audio/reactions.mp3",
                    options: [
                        "actions",
                        "responses",
                        "initiatives",
                        "causes"
                    ],
                    "correctAnswer": "responses"
                },
                {
                    word: "imagined",
                    meaning: "formed a mental image or concept of.",
                    khmer: "បានស្រមៃ",
                    audio: "audio/imagined.mp3",
                    options: [
                        "realized",
                        "conceived",
                        "disregarded",
                        "confirmed"
                    ],
                    "correctAnswer": "conceived"
                },
                {
                    word: "situation",
                    meaning: "a set of circumstances in which one finds oneself; a state of affairs.",
                    khmer: "ស្ថានភាព",
                    audio: "audio/situation.mp3",
                    options: [
                        "solution",
                        "condition",
                        "event",
                        "plan"
                    ],
                    "correctAnswer": "condition"
                },
                {
                    word: "furious",
                    meaning: "very angry",
                    khmer: "ខឹងខ្លាំងណាស់",
                    audio: "audio/furious.mp3",
                    options: [
                        "calm",
                        "enraged",
                        "happy",
                        "sad"
                    ],
                    "correctAnswer": "enraged"
                },
                {
                    word: "gorgeous",
                    meaning: "very beautiful",
                    khmer: "ស្រស់ស្អាតខ្លាំងណាស់",
                    audio: "audio/gorgeous.mp3",
                    options: [
                        "ugly",
                        "stunning",
                        "plain",
                        "unattractive"
                    ],
                    "correctAnswer": "stunning"
                },
                {
                    word: "hideous",
                    meaning: "very ugly",
                    khmer: "អាក្រក់ខ្លាំងណាស់",
                    audio: "audio/hideous.mp3",
                    options: [
                        "beautiful",
                        "dreadful",
                        "attractive",
                        "pleasing"
                    ],
                    "correctAnswer": "dreadful"
                },
                {
                    word: "exhausted",
                    meaning: "very tired",
                    khmer: "នឿយហត់ខ្លាំងណាស់",
                    audio: "audio/exhausted.mp3",
                    options: [
                        "energetic",
                        "fatigued",
                        "rested",
                        "lively"
                    ],
                    "correctAnswer": "fatigued"
                },
                {
                    word: "spotless",
                    meaning: "very clean",
                    khmer: "ស្អាតណាស់",
                    audio: "audio/spotless.mp3",
                    options: [
                        "dirty",
                        "immaculate",
                        "stained",
                        "grimy"
                    ],
                    "correctAnswer": "immaculate"
                },
                {
                    word: "filthy",
                    meaning: "very dirty",
                    khmer: "កខ្វក់ខ្លាំងណាស់",
                    audio: "audio/filthy.mp3",
                    options: [
                        "clean",
                        "squalid",
                        "pure",
                        "hygienic"
                    ],
                    "correctAnswer": "squalid"
                },
                {
                    word: "enormous",
                    meaning: "very big",
                    khmer: "ធំសម្បើម",
                    audio: "audio/enormous.mp3",
                    options: [
                        "tiny",
                        "immense",
                        "small",
                        "minute"
                    ],
                    "correctAnswer": "immense"
                },
                {
                    word: "deafening",
                    meaning: "very noisy",
                    khmer: "ថ្លង់ណាស់",
                    audio: "audio/deafening.mp3",
                    options: [
                        "quiet",
                        "ear-splitting",
                        "silent",
                        "soft"
                    ],
                    "correctAnswer": "ear-splitting"
                },
                {
                    word: "starving",
                    meaning: "very hungry",
                    khmer: "ឃ្លានខ្លាំងណាស់",
                    audio: "audio/starving.mp3",
                    options: [
                        "full",
                        "famished",
                        "satiated",
                        "fed"
                    ],
                    "correctAnswer": "famished"
                },
                {
                    word: "parched",
                    meaning: "very thirsty",
                    khmer: "ស្រេកទឹកខ្លាំងណាស់",
                    audio: "audio/parched.mp3",
                    options: [
                        "hydrated",
                        "desiccated",
                        "moist",
                        "wet"
                    ],
                    "correctAnswer": "desiccated"
                },
                {
                    word: "destitute",
                    meaning: "very poor",
                    khmer: "ក្រីក្រខ្លាំងណាស់",
                    audio: "audio/destitute.mp3",
                    options: [
                        "wealthy",
                        "impoverished",
                        "rich",
                        "affluent"
                    ],
                    "correctAnswer": "impoverished"
                },
                {
                    word: "wealthy",
                    meaning: "very rich",
                    khmer: "អ្នកមាន",
                    audio: "audio/wealthy.mp3",
                    options: [
                        "poor",
                        "affluent",
                        "destitute",
                        "needy"
                    ],
                    "correctAnswer": "affluent"
                },
                {
                    word: "brilliant",
                    meaning: "very smart",
                    khmer: "ឆ្លាតវៃ",
                    audio: "audio/brilliant.mp3",
                    options: [
                        "dull",
                        "intelligent",
                        "stupid",
                        "unintelligent"
                    ],
                    "correctAnswer": "intelligent"
                },
                {
                    word: "ancient",
                    meaning: "very old",
                    khmer: "បុរាណ",
                    audio: "audio/ancient.mp3",
                    options: [
                        "new",
                        "old",
                        "modern",
                        "current"
                    ],
                    "correctAnswer": "old"
                },
                {
                    word: "infantile",
                    meaning: "very young",
                    khmer: "ក្មេងណាស់",
                    audio: "audio/infantile.mp3",
                    options: [
                        "adult",
                        "childish",
                        "mature",
                        "aged"
                    ],
                    "correctAnswer": "childish"
                },
                {
                    word: "indolent",
                    meaning: "very lazy",
                    khmer: "ខ្ជិលណាស់",
                    audio: "audio/indolent.mp3",
                    options: [
                        "active",
                        "slothful",
                        "energetic",
                        "diligent"
                    ],
                    "correctAnswer": "slothful"
                },
                {
                    word: "swamped",
                    meaning: "very busy",
                    khmer: "រវល់ខ្លាំងណាស់",
                    audio: "audio/swamped.mp3",
                    options: [
                        "idle",
                        "overwhelmed",
                        "free",
                        "unoccupied"
                    ],
                    "correctAnswer": "overwhelmed"
                },
                {
                    word: "elated*",
                    meaning: "very happy",
                    khmer: "រីករាយខ្លាំងណាស់",
                    audio: "audio/elated.mp3",
                    options: [
                        "sad",
                        "joyful",
                        "depressed",
                        "miserable"
                    ],
                    "correctAnswer": "joyful"
                },
                {
                    word: "excruciating",
                    meaning: "very painful",
                    khmer: "ឈឺចាប់ខ្លាំងណាស់",
                    audio: "audio/excruciating.mp3",
                    options: [
                        "mild",
                        "agonizing",
                        "bearable",
                        "painless"
                    ],
                    "correctAnswer": "agonizing"
                },
                {
                    word: "I have no idea",
                    meaning: "A phrase used to express that you don’t know the answer to something.",
                    khmer: "ខ្ញុំគ្មានគំនិតទេ / ខ្ញុំមិនដឹងទេ",
                    audio: "audio/i_have_no_idea.mp3",
                    options: [
                        "I know the answer.",
                        "I'm certain.",
                        "I don't know.",
                        "I have a clear idea."
                    ],
                    "correctAnswer": "I don't know."
                },
                {
                    word: "Let’s keep in touch",
                    meaning: "A phrase used to express a desire to maintain contact with someone.",
                    khmer: "តោះបន្តទាក់ទងគ្នា",
                    audio: "audio/lets_keep_in_touch.mp3",
                    options: [
                        "Let's lose contact.",
                        "Let's stay connected.",
                        "Let's never speak again.",
                        "Let's forget each other."
                    ],
                    "correctAnswer": "Let's stay connected."
                },
                {
                    word: "Can you give me a hand?",
                    meaning: "A way to ask someone for help.",
                    khmer: "អ្នកអាចជួយខ្ញុំបានទេ?",
                    audio: "audio/can_you_give_me_a_hand.mp3",
                    options: [
                        "Can you ignore me?",
                        "Can you assist me?",
                        "Can you leave me alone?",
                        "Can you complicate things?"
                    ],
                    "correctAnswer": "Can you assist me?"
                },
                {
                    word: "I’ll think about it.",
                    meaning: "A phrase used to indicate that you need time to consider an option or decision.",
                    khmer: "ខ្ញុំនឹងគិតអំពីវា។",
                    audio: "audio/ill_think_about_it.mp3",
                    options: [
                        "I've decided.",
                        "I'll consider it.",
                        "I refuse immediately.",
                        "I agree without thought."
                    ],
                    "correctAnswer": "I'll consider it."
                },
                {
                    word: "Sounds like a plan!",
                    meaning: "An expression of agreement with a proposed idea or plan.",
                    khmer: "ស្តាប់ទៅដូចជាផែនការល្អ!",
                    audio: "audio/sounds_like_a_plan.mp3",
                    options: [
                        "That's a terrible idea.",
                        "I disagree.",
                        "That sounds good.",
                        "I have no opinion."
                    ],
                    "correctAnswer": "That sounds good."
                },
                {
                    word: "What do you mean?",
                    meaning: "A phrase used to ask someone to clarify or explain something they said.",
                    khmer: "តើអ្នកចង់មានន័យអ្វី?",
                    audio: "audio/what_do_you_mean.mp3",
                    options: [
                        "I understand completely.",
                        "Can you explain?",
                        "I don't care.",
                        "That's clear."
                    ],
                    "correctAnswer": "Can you explain?"
                },
                {
                    word: "That’s interesting!",
                    meaning: "A way to express curiosity or engagement in a conversation.",
                    khmer: "គួរឱ្យចាប់អារម្មណ៍ណាស់!",
                    audio: "audio/thats_interesting.mp3",
                    options: [
                        "That's boring.",
                        "That's captivating.",
                        "I don't care.",
                        "That's unexciting."
                    ],
                    "correctAnswer": "That's captivating."
                },
                {
                    word: "I appreciate it.",
                    meaning: "A phrase used to express gratitude for something someone has done for you.",
                    khmer: "ខ្ញុំពេញចិត្តវា។",
                    audio: "audio/i_appreciate_it.mp3",
                    options: [
                        "I don't care.",
                        "Thank you.",
                        "I dislike it.",
                        "It's nothing special."
                    ],
                    "correctAnswer": "Thank you."
                },
                {
                    word: "Let me think.",
                    meaning: "A phrase used to indicate that you need a moment to consider or reflect on something.",
                    khmer: "ទុកឱ្យខ្ញុំគិតសិន។",
                    audio: "audio/let_me_think.mp3",
                    options: [
                        "I know immediately.",
                        "I need to consider.",
                        "I don't want to think.",
                        "Tell me the answer."
                    ],
                    "correctAnswer": "I need to consider."
                },
                {
                    word: "What’s the matter?",
                    meaning: "A way to ask someone if something is wrong or if they need to talk about an issue.",
                    khmer: "មានការអី?",
                    audio: "audio/whats_the_matter.mp3",
                    options: [
                        "Everything is fine.",
                        "What's wrong?",
                        "Tell me good news.",
                        "I don't care about your problems."
                    ],
                    "correctAnswer": "What's wrong?"
                },
                {
                    word: "Can I help you with anything?",
                    meaning: "A polite way to offer assistance to someone.",
                    khmer: "តើខ្ញុំអាចជួយអ្វីបានទេ?",
                    audio: "audio/can_i_help_you_with_anything.mp3",
                    options: [
                        "I don't need help.",
                        "Do you need my help?",
                        "Can I offer assistance?",
                        "Don't bother me."
                    ],
                    "correctAnswer": "Can I offer assistance?"
                },
                {
                    word: "I don’t mind.",
                    meaning: "A phrase used to say that you are okay with something or don’t have a preference.",
                    khmer: "ខ្ញុំមិនប្រកាន់ទេ។",
                    audio: "audio/i_dont_mind.mp3",
                    options: [
                        "I strongly object.",
                        "I have a strong preference.",
                        "It's fine with me.",
                        "I care a lot."
                    ],
                    "correctAnswer": "It's fine with me."
                },
                {
                    word: "That sounds good.",
                    meaning: "A way to express agreement or approval for a suggestion or plan.",
                    khmer: "ស្តាប់ទៅល្អ។",
                    audio: "audio/that_sounds_good.mp3",
                    options: [
                        "That sounds bad.",
                        "I approve.",
                        "I disagree.",
                        "That's a terrible idea."
                    ],
                    "correctAnswer": "I approve."
                },
                {
                    word: "Take care",
                    meaning: "A friendly way to say goodbye, wishing the other person well.",
                    khmer: "ប្រយ័ត្ន/ថែរក្សាខ្លួន",
                    audio: "audio/take_care.mp3",
                    options: [
                        "Goodbye.",
                        "Be careless.",
                        "I don't care about you.",
                        "Don't worry."
                    ],
                    "correctAnswer": "Goodbye."
                },
                {
                    word: "I’ll be right back.",
                    meaning: "A way to tell someone that you’re leaving briefly and will return soon.",
                    khmer: "ខ្ញុំនឹងត្រលប់មកវិញភ្លាម។",
                    audio: "audio/ill_be_right_back.mp3",
                    options: [
                        "I'm leaving for a long time.",
                        "I'll return shortly.",
                        "I'm not coming back.",
                        "I'm staying here."
                    ],
                    "correctAnswer": "I'll return shortly."
                },
                {
                    word: "Let’s get started",
                    meaning: "A phrase used to begin a task or activity.",
                    khmer: "តោះចាប់ផ្តើម",
                    audio: "audio/lets_get_started.mp3",
                    options: [
                        "Let's stop.",
                        "Let's begin.",
                        "Let's delay.",
                        "Let's finish."
                    ],
                    "correctAnswer": "Let's begin."
                },
                {
                    word: "It’s up to you.",
                    meaning: "A phrase used to let someone else decide or make a choice.",
                    khmer: "វាអាស្រ័យលើអ្នក។",
                    audio: "audio/its_up_to_you.mp3",
                    options: [
                        "It's my decision.",
                        "You decide.",
                        "I will decide.",
                        "There is no choice."
                    ],
                    "correctAnswer": "You decide."
                },
                {
                    word: "What do you think?",
                    meaning: "A way to ask someone for their opinion or thoughts on a topic.",
                    khmer: "តើអ្នកគិតយ៉ាងណា?",
                    audio: "audio/what_do_you_think.mp3",
                    options: [
                        "I don't care about your opinion.",
                        "What's your opinion?",
                        "Tell me the answer.",
                        "Don't tell me your thoughts."
                    ],
                    "correctAnswer": "What's your opinion?"
                },
                {
                    word: "I’m not sure.",
                    meaning: "A phrase used when you’re uncertain about something or don’t know the answer.",
                    khmer: "ខ្ញុំមិនច្បាស់ទេ។",
                    audio: "audio/im_not_sure.mp3",
                    options: [
                        "I'm certain.",
                        "I don't know for sure.",
                        "I have definite knowledge.",
                        "It's clear to me."
                    ],
                    "correctAnswer": "I don't know for sure."
                },
                {
                    word: "Can I ask you a question?",
                    meaning: "A polite way to request permission before asking something.",
                    khmer: "ខ្ញុំអាចសួរអ្នកសំណួរបានទេ?",
                    audio: "audio/can_i_ask_you_a_question.mp3",
                    options: [
                        "Don't ask me anything.",
                        "May I inquire?",
                        "Ask me anything.",
                        "I don't want to answer."
                    ],
                    "correctAnswer": "May I inquire?"
                },
                {
                    word: "I’m looking for [something].",
                    meaning: "A phrase used to say that you are searching for something specific.",
                    khmer: "ខ្ញុំកំពុងរក [អ្វីមួយ]។",
                    audio: "audio/im_looking_for_something.mp3",
                    options: [
                        "I've found it.",
                        "I'm searching for [something].",
                        "I don't need anything.",
                        "I'm not looking for anything."
                    ],
                    "correctAnswer": "I'm searching for [something]."
                },
                {
                    word: "How much is this?",
                    meaning: "A question used to ask for the price of something.",
                    khmer: "នេះតម្លៃប៉ុន្មាន?",
                    audio: "audio/how_much_is_this.mp3",
                    options: [
                        "What's the cost?",
                        "I don't want to buy this.",
                        "Tell me the weight.",
                        "Is this free?"
                    ],
                    "correctAnswer": "What's the cost?"
                },
                {
                    word: "I don’t know.",
                    meaning: "A phrase used when you don’t have an answer or are unsure about something.",
                    khmer: "ខ្ញុំមិនដឹងទេ។",
                    audio: "audio/i_dont_know.mp3",
                    options: [
                        "I have the answer.",
                        "I'm clueless.",
                        "I'm certain.",
                        "I know everything."
                    ],
                    "correctAnswer": "I'm clueless."
                },
                {
                    word: "How can I help you?",
                    meaning: "A polite phrase used to offer assistance, commonly used in customer service or by someone offering help.",
                    khmer: "តើខ្ញុំអាចជួយអ្នកបានយ៉ាងដូចម្តេច?",
                    audio: "audio/how_can_i_help_you.mp3",
                    options: [
                        "I don't need help.",
                        "What assistance do you require?",
                        "I'm busy.",
                        "Don't bother me."
                    ],
                    "correctAnswer": "What assistance do you require?"
                },
                {
                    word: "What time is it?",
                    meaning: "A question used to ask for the current time.",
                    khmer: "ម៉ោងប៉ុន្មានហើយ?",
                    audio: "audio/what_time_is_it.mp3",
                    options: [
                        "I don't have a watch.",
                        "Could you tell me the time?",
                        "When is the event?",
                        "What day is it?"
                    ],
                    "correctAnswer": "Could you tell me the time?"
                },
                {
                    word: "Where are you from?",
                    meaning: "A question used to ask someone about their country or city of origin.",
                    khmer: "អ្នកមកពីណា?",
                    audio: "audio/where_are_you_from.mp3",
                    options: [
                        "What's your destination?",
                        "What's your nationality?",
                        "Where are you going?",
                        "Are you local?"
                    ],
                    "correctAnswer": "What's your nationality?"
                },
                {
                    word: "I don’t understand.",
                    meaning: "Used to let someone know that you didn’t comprehend what they said or what’s going on.",
                    khmer: "ខ្ញុំមិនយល់ទេ។",
                    audio: "audio/i_dont_understand.mp3",
                    options: [
                        "I comprehend fully.",
                        "I'm confused.",
                        "It's very clear.",
                        "I grasp everything."
                    ],
                    "correctAnswer": "I'm confused."
                },
                {
                    word: "Have a nice day!",
                    meaning: "A friendly way of saying goodbye and wishing someone well.",
                    khmer: "សូមឱ្យមានថ្ងៃល្អ!",
                    audio: "audio/have_a_nice_day.mp3",
                    options: [
                        "Have a bad day.",
                        "Enjoy your day!",
                        "I hope your day is awful.",
                        "Goodbye forever."
                    ],
                    "correctAnswer": "Enjoy your day!"
                },
                {
                    word: "Can I help you?",
                    meaning: "A polite way to offer assistance to someone.",
                    khmer: "ខ្ញុំអាចជួយអ្នកបានទេ?",
                    audio: "audio/can_i_help_you.mp3",
                    options: [
                        "I don't need anything.",
                        "How may I assist you?",
                        "Please leave me alone.",
                        "Are you helping me?"
                    ],
                    "correctAnswer": "How may I assist you?"
                },
                {
                    word: "What do you do?",
                    meaning: "A phrase used to ask someone about their job or profession.",
                    khmer: "តើអ្នកធ្វើការអ្វី?",
                    audio: "audio/what_do_you_do.mp3",
                    options: [
                        "What are your hobbies?",
                        "What is your occupation?",
                        "What are you doing right now?",
                        "What is your favorite activity?"
                    ],
                    "correctAnswer": "What is your occupation?"
                },
                {
                    word: "Could you repeat that, please?",
                    meaning: "A polite way to ask someone to say something again because you didn’t hear or understand it.",
                    khmer: "សូមជួយនិយាយម្តងទៀតបានទេ?",
                    audio: "audio/could_you_repeat_that_please.mp3",
                    options: [
                        "Don't repeat yourself.",
                        "Please say that again.",
                        "I heard you clearly.",
                        "I understood perfectly."
                    ],
                    "correctAnswer": "Please say that again."
                },
                {
                    word: "I’m sorry",
                    meaning: "Used to apologize when you have made a mistake or if something goes wrong.",
                    khmer: "ខ្ញុំសុំទោស",
                    audio: "audio/im_sorry.mp3",
                    options: [
                        "I'm happy.",
                        "My apologies.",
                        "I don't care.",
                        "It's not my fault."
                    ],
                    "correctAnswer": "My apologies."
                },
                {
                    word: "See you later!",
                    meaning: "A casual way of saying goodbye.",
                    khmer: "ជួបគ្នាពេលក្រោយ!",
                    audio: "audio/see_you_later.mp3",
                    options: [
                        "Goodbye for now.",
                        "Never see you again.",
                        "I won't see you.",
                        "Stay here."
                    ],
                    "correctAnswer": "Goodbye for now."
                },
                {
                    word: "How much does this cost?",
                    meaning: "A common phrase used to ask about the price of something.",
                    khmer: "នេះតម្លៃប៉ុន្មាន?",
                    audio: "audio/how_much_does_this_cost.mp3",
                    options: [
                        "What's the price?",
                        "I don't want to pay.",
                        "Is this free?",
                        "Tell me the weight."
                    ],
                    "correctAnswer": "What's the price?"
                },
                {
                    word: "You’re welcome.",
                    meaning: "A polite response to someone who says 'thank you.'",
                    khmer: "មិនអីទេ / រីករាយ",
                    audio: "audio/youre_welcome.mp3",
                    options: [
                        "No problem.",
                        "You're not welcome.",
                        "I don't accept thanks.",
                        "It was a burden."
                    ],
                    "correctAnswer": "No problem."
                },
                {
                    word: "How are you?",
                    meaning: "This is a polite way to ask someone about their well-being.",
                    khmer: "សុខសប្បាយជាទេ?",
                    audio: "audio/how_are_you.mp3",
                    options: [
                        "What's your name?",
                        "How's life?",
                        "Are you busy?",
                        "Where are you going?"
                    ],
                    "correctAnswer": "How's life?"
                },
                {
                    word: "Thank you",
                    meaning: "Used to show gratitude or appreciation.",
                    khmer: "អរគុណ",
                    audio: "audio/thank_you.mp3",
                    options: [
                        "You're welcome.",
                        "I appreciate it.",
                        "No thanks.",
                        "I'm upset."
                    ],
                    "correctAnswer": "I appreciate it."
                },
                {
                    word: "closure",
                    meaning: "In programming, a closure is a function bundled together with references to its surrounding state (the lexical environment).",
                    khmer: "មុខងារដែលភ្ជាប់ជាមួយបរិស្ថានពាក្យរបស់វា",
                    audio: "audio/closure.mp3",
                    options: [
                        "A function bundled with its lexical environment.",
                        "A statement that closes a program.",
                        "A loop that never ends.",
                        "A type of variable scope."
                    ],
                    "correctAnswer": "A function bundled with its lexical environment."
                },
                {
                    word: "hoisting",
                    meaning: "In JavaScript, hoisting is a mechanism where variable and function declarations are moved to the top of their containing scope during compilation.",
                    khmer: "អាកប្បកិរិយាលំនាំដើមរបស់ JavaScript ក្នុងការផ្លាស់ប្តូរការប្រកាសទៅខាងលើ",
                    audio: "audio/hoisting.mp3",
                    options: [
                        "JavaScript's default behavior of moving declarations to the top.",
                        "A method for lifting heavy objects.",
                        "A type of server deployment.",
                        "A security vulnerability."
                    ],
                    "correctAnswer": "JavaScript's default behavior of moving declarations to the top."
                },
                {
                    word: "asynchronous",
                    meaning: "In computing, asynchronous operations are those that can run independently of the main program flow, allowing other tasks to be executed simultaneously.",
                    khmer: "ប្រតិបត្តិការដែលមិនរាំងស្ទះខ្សែស្រឡាយសំខាន់",
                    audio: "audio/asynchronous.mp3",
                    options: [
                        "Operations that don't block the main thread.",
                        "Code that runs only once.",
                        "Functions that execute immediately.",
                        "Data sent in a single block."
                    ],
                    "correctAnswer": "Operations that don't block the main thread."
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

                listenAndType: {
                    "Words": [
                        { sentence: "apple", khmer: "ផ្លែប៉ោម", answer: "apple" },
                        { sentence: "banana", khmer: "ចេក", answer: "banana" },
                        { sentence: "cat", khmer: "ឆ្មា", answer: "cat" },
                        { sentence: "dog", khmer: "ឆ្កែ", answer: "dog" },
                        { sentence: "house", khmer: "ផ្ទះ", answer: "house" },
                        { sentence: "flower", khmer: "ផ្កា", answer: "flower" },
                        { sentence: "water", khmer: "ទឹក", answer: "water" },
                        { sentence: "friend", khmer: "មិត្តភ័ក្តិ", answer: "friend" },
                        { sentence: "book", khmer: "សៀវភៅ", answer: "book" },
                        { sentence: "school", khmer: "សាលារៀន", answer: "school" },
                        { sentence: "surprising", khmer: "គួរឱ្យភ្ញាក់ផ្អើល", answer: "surprising" },
                        { sentence: "expected", khmer: "បានរំពឹងទុក", answer: "expected" },
                        { sentence: "elegant", khmer: "ប្រណិត", answer: "elegant" },
                        { sentence: "in spite of", khmer: "ទោះបីជា", answer: "in spite of" },
                        { sentence: "despite ", khmer: "ទោះបីជា (preposition)", answer: "despite " },
                        { sentence: "Although", khmer: "ទោះបីជា", answer: "Although" },
                        { sentence: "followed", khmer: "បានតាមដាន / បានបន្តបន្ទាប់", answer: "followed" },
                        { sentence: "fear", khmer: "ការភ័យខ្លាច", answer: "fear" },
                        { sentence: "assumption", khmer: "ការសន្មត់", answer: "assumption" },
                        { sentence: "appearance", khmer: "រូបរាង", answer: "appearance" },
                        { sentence: "as if", khmer: "ដូចជា / ដូចបំណង", answer: "as if" },
                        { sentence: "gesture", khmer: "កាយវិការ", answer: "gesture" },
                        { sentence: "as though", khmer: "ដូចជា / ដូចជាបាន (similar in meaning to 'as if')", answer: "as though" },
                        { sentence: "in panic", khmer: "ក្នុងស្ថានភាពភ័យខ្លាច", answer: "in panic" },
                        { sentence: "interchangeably", khmer: "អាចផ្លាស់ប្តូរគ្នាបាន", answer: "interchangeably" },
                        { sentence: "reactions", khmer: "ប្រតិកម្ម", answer: "reactions" },
                        { sentence: "imagined", khmer: "បានស្រមៃ",answer: "imagined" },
                        { sentence: "situation",khmer: "ស្ថានភាព", answer: "situation" },
                        { sentence: "furious", khmer: "ខឹងខ្លាំងណាស់", answer: "furious" },
                        { sentence: "gorgeous", khmer: "ស្រស់ស្អាតខ្លាំងណាស់", answer: "gorgeous" },
                        { sentence: "hideous", khmer: "អាក្រក់ខ្លាំងណាស់", answer: "hideous" },
                        { sentence: "exhausted", khmer: "នឿយហត់ខ្លាំងណាស់", answer: "exhausted" },
                        { sentence: "spotless", khmer: "ស្អាតណាស់", answer: "spotless" },
                        { sentence: "filthy", khmer: "កខ្វក់ខ្លាំងណាស់", answer: "filthy" },
                        { sentence: "enormous", khmer: "ធំសម្បើម", answer: "enormous" },
                        { sentence: "deafening", khmer: "ថ្លង់ណាស់", answer: "deafening" },
                        { sentence: "starving", khmer: "ឃ្លានខ្លាំងណាស់", answer: "starving" },
                        { sentence: "parched", khmer: "ស្រេកទឹកខ្លាំងណាស់", answer: "parched" },
                        { sentence: "destitute", khmer: "ក្រីក្រខ្លាំងណាស់", answer: "destitute" },
                        { sentence: "wealthy", khmer: "អ្នកមាន", answer: "wealthy" },
                        { sentence: "brilliant", khmer: "ឆ្លាតវៃ", answer: "brilliant" },
                        { sentence: "ancient", khmer: "បុរាណ", answer: "ancient" },
                        { sentence: "infantile", khmer: "ក្មេងណាស់", answer: "infantile" },
                        { sentence: "indolent", khmer: "ខ្ជិលណាស់", answer: "indolent" },
                        { sentence: "swamped", khmer: "រវល់ខ្លាំងណាស់", answer: "swamped" },
                        { sentence: "elated*", khmer: "រីករាយខ្លាំងណាស់", answer: "elated*" },
                        { sentence: "excruciating", khmer: "ឈឺចាប់ខ្លាំងណាស់", answer: "excruciating" },
                    ],

                    "Common English phrases": [
                        { sentence: "I would rather stay home tonight.", khmer: "ខ្ញុំចង់នៅផ្ទះយប់នេះជាង។", answer: "I would rather stay home tonight." },
                        { sentence: "She’d rather eat noodles than rice.", khmer: "នាងចង់ញ៉ាំមីជាងបាយ។", answer: "She’d rather eat noodles than rice." },
                        { sentence: "I’d rather you stayed home tonight.", khmer: "ខ្ញុំចង់ឱ្យអ្នកនៅផ្ទះយប់នេះ។", answer: "I’d rather you stayed home tonight." },
                        { sentence: "She would rather he didn’t come.", khmer: "នាងចង់ឱ្យគាត់មិនមក។", answer: "She would rather he didn’t come." },
                        { sentence: "She prefers that he doesn't come.", khmer: "នាងចូលចិត្តឱ្យគាត់មិនមក។", answer: "She prefers that he doesn't come." },
                        { sentence: "We’d rather they arrived earlier", khmer: "ពួកយើងចង់ឱ្យពួកគេមកដល់មុន។", answer: "We’d rather they arrived earlier." },
                        { sentence: "In spite of her fear, she gave the speech.", khmer: "ទោះបីជាគាត់ភ័យក៏ដោយ គាត់នៅតែថ្លែងសុន្ទរកថា។", answer: "In spite of her fear, she gave the speech." },
                        { sentence: "Despite being tired, he kept working.", khmer: "ទោះបីជាគាត់នឿយហត់ក៏ដោយ គាត់នៅតែបន្តធ្វើការ។", answer: "Despite being tired, he kept working." },
                        { sentence: "In spite of the rain, we went outside.", khmer: "ទោះបីជាមានភ្លៀងក៏ដោយ ពួកយើងនៅតែចេញទៅខាងក្រៅ។", answer: "In spite of the rain, we went outside." },
                        { sentence: "Despite the noise, I fell asleep quickly.", khmer: "ទោះបីមានសំឡេងរំខានក៏ដោយ ខ្ញុំនៅតែដេកលក់បានលឿន។", answer: "Despite the noise, I fell asleep quickly." },
                        { sentence: "He talks as if he knows the answer.", khmer: "គាត់និយាយដូចជាគាត់ដឹងចម្លើយ។", answer: "He talks as if he knows the answer." },
                        { sentence: "He talks as if he knew the answer. (but he probably doesn’t)", khmer: "គាត់និយាយដូចជាគាត់ដឹងចម្លើយ (ប៉ុន្តែប្រហែលជាគាត់មិនដឹងទេ។)", answer: "He talks as if he knew the answer. (but he probably doesn’t)" },
                        { sentence: "It looks as if they’ve had a shock.", khmer: "វាមើលទៅដូចជាពួកគេទើបទទួលរងការភ្ញាក់ផ្អើល។", answer: "It looks as if they’ve had a shock." },
                        { sentence: "It looks as though you’ve not met before.", khmer: "វាមើលទៅដូចជាអ្នកមិនបានជួបគ្នាមុន។", answer: "It looks as though you’ve not met before." },
                        { sentence: "She moved her lips as if to smile.", khmer: "នាងផ្លាស់ទីបបូរមាត់របស់នាងដូចជាចង់ញញឹម។", answer: "She moved her lips as if to smile." },
                        { sentence: "They were shouting as though in panic.", khmer: "ពួកគេកំពុងស្រែកដូចជាកំពុងភ័យខ្លាច។", answer: "They were shouting as though in panic." },
                        { sentence: "She felt as if all her worries had gone.", khmer: "នាងមានអារម្មណ៍ដូចជាការព្រួយបារម្ភទាំងអស់របស់នាងបានបាត់ទៅ។", answer: "She felt as if all her worries had gone." },
                        { sentence: "I’ve got so much work it looks as if I’ll have to stay at home this evening.", khmer: "ខ្ញុំមានការងារច្រើនណាស់ វាមើលទៅដូចជាខ្ញុំត្រូវនៅផ្ទះយប់នេះ។", answer: "I’ve got so much work it looks as if I’ll have to stay at home this evening." },
                        { sentence: "They felt as though they had been given the wrong information.", khmer: "ពួកគេមានអារម្មណ៍ដូចជាពួកគេបានទទួលព័ត៌មានខុស។", answer: "They felt as though they had been given the wrong information." },
                        { sentence: "You sound as though you're sick.", khmer: "សំឡេងអ្នកដូចជាអ្នកកំពុងជំងឺ។", answer: "You sound as though you're sick." },
                        { sentence: "They acted as if they were rich.", khmer: "ពួកគេធ្វើដូចជាពួកគេមានសម្បត្តិ។", answer: "They acted as if they were rich." },
                        { sentence: "Not only did he lie, but he also blamed me!", khmer: "មិនត្រឹមតែគាត់កុហកទេ គាត់នៅតែបន្ទោសខ្ញុំ។", answer: "Not only did he lie, but he also blamed me!" },
                        { sentence: "Not only is she smart, but she’s also kind.", khmer: "មិនត្រឹមតែនាងឆ្លាតទេ នាងនៅតែចិត្តល្អ។", answer: "Not only is she smart, but she’s also kind." },
                        { sentence: "He not only speaks English, but also French.", khmer: "គាត់មិនត្រឹមតែនិយាយភាសាអង់គ្លេសទេ គាត់នៅតែនិយាយភាសាបារាំង។", answer: "He not only speaks English, but also French." },
                        { sentence: "Neither my brother nor my sister likes pizza.", khmer: "ទាំងបងប្រុសរបស់ខ្ញុំ និងបងស្រីរបស់ខ្ញុំមិនចូលចិត្តភីហ្សាទេ។", answer: "Neither my brother nor my sister likes pizza." },
                        { sentence: "She neither called me nor sent a message.", khmer: "នាងមិនបានហៅខ្ញុំ និងមិនបានផ្ញើសារទេ។", answer: "She neither called me nor sent a message." },
                        { sentence: "I study hard so that I can pass the exam.", khmer: "ខ្ញុំសិក្សាខ្លាំងដើម្បីឱ្យខ្ញុំអាចជាប់ការប្រឡង។", answer: "I study hard so that I can pass the exam." },
                        { sentence: "I woke up early so that I could see the sunrise.", khmer: "ខ្ញុំបានភ្ញាក់ពីដំណេកដើម ដើម្បីឱ្យខ្ញុំអាចមើលថ្ងៃរះ។", answer: "I woke up early so that I could see the sunrise." },
                        { sentence: "She left early so that she could catch the bus.", khmer: "នាងចេញដើម ដើម្បីឱ្យនាងអាចចាប់ឡានក្រុង។", answer: "She left early so that she could catch the bus." },
                        { sentence: "I won’t go unless it stops raining.", khmer: "ខ្ញុំមិនទៅទេ លុះត្រាតែភ្លៀងឈប់។", answer: "I won’t go unless it stops raining." },
                        { sentence: "You can’t enter the club unless you’re a member.", khmer: "អ្នកមិនអាចចូលក្លឹបបានទេ លុះត្រាតែអ្នកជាសមាជិក។", answer: "You can’t enter the club unless you’re a member." },
                        { sentence: "Whether you like it or not, we have to go.", khmer: "មិនថាអ្នកចូលចិត្តវាឬមិនចូលចិត្តទេ ពួកយើងត្រូវទៅ។", answer: "Whether you like it or not, we have to go." },
                        { sentence: "It’s time you went to bed.", khmer: "វាជាពេលដែលអ្នកគួរទៅដេក។", answer: "It’s time you went to bed." },
                        { sentence: "It’s high time we left.", khmer: "វាជាពេលដែលពួកយើងគួរចេញទៅ។", answer: "It’s high time we left." },
                        { sentence: "She was so tired that she fell asleep at her desk.", khmer: "នាងនឿយហត់ណាស់ ដល់ថ្នាក់ដែលនាងដេកលក់នៅតុរបស់នាង។", answer: "She was so tired that she fell asleep at her desk." },
                        { sentence: "He ran so fast that nobody could catch him.", khmer: "គាត់រត់លឿនណាស់ ដល់ថ្នាក់ដែលគ្មាននរណាអាចចាប់គាត់បាន។", answer: "He ran so fast that nobody could catch him." },
                        { sentence: "It was so hot that we stayed inside all day.", khmer: "វាក្តៅណាស់ ដល់ថ្នាក់ដែលពួកយើងនៅក្នុងផ្ទះពេញមួយថ្ងៃ។", answer: "It was so hot that we stayed inside all day." },
                        { sentence: "As soon as she left the house, it started to rain.", khmer: "ទាំងនាងទើបចេញពីផ្ទះភ្លៀងបានចាប់ផ្តើមធ្លាក់។", answer: "As soon as she left the house, it started to rain." },
                        { sentence: "No sooner had she left the house than it started to rain.", khmer: "ទាំងនាងទើបចេញពីផ្ទះភ្លៀងបានចាប់ផ្តើមធ្លាក់។", answer: "No sooner had she left the house than it started to rain." },
                    
                        { sentence: "Hello, how are you today?", khmer: "សួស្ដី! តើអ្នកសុខសប្បាយជាទេថ្ងៃនេះ?", answer: "Hello, how are you today?" },
                        { sentence: "The weather is beautiful.", khmer: "អាកាសធាតុស្រស់ស្អាត។", answer: "The weather is beautiful." },
                        { sentence: "Can you please repeat that?", khmer: "តើអ្នកអាចនិយាយម្ដងទៀតបានទេ?", answer: "Can you please repeat that?" },
                        { sentence: "I am learning English.", khmer: "ខ្ញុំកំពុងរៀនភាសាអង់គ្លេស។", answer: "I am learning English." },
                        { sentence: "What time is it?", khmer: "ម៉ោងប៉ុន្មានហើយ?", answer: "What time is it?" },
                        { sentence: "Please speak slowly.", khmer: "សូមនិយាយយឺតៗ។", answer: "Please speak slowly." },
                        { sentence: "Thank you very much.", khmer: "អរគុណច្រើន។", answer: "Thank you very much." },
                        { sentence: "Where is the library?", khmer: "បណ្ណាល័យនៅឯណា?", answer: "Where is the library?" },
                        { sentence: "I don't understand.", khmer: "ខ្ញុំមិនយល់ទេ។", answer: "I don't understand." },
                        { sentence: "See you later.", khmer: "ជួបគ្នាពេលក្រោយ។", answer: "See you later." },
                       
                        
                        { sentence: "a bit more formal", khmer: "ផ្លូវការជាងបន្តិច", answer: "a bit more formal" },
                        
                        { sentence: "being tired", khmer: "ការនឿយហត់ / ក្នុងស្ថានភាពនឿយហត់ (gerund phrase)", answer: "being tired" },
                        { sentence: "he kept working.", khmer: "គាត់បន្តធ្វើការ (past tense + continuous action)", answer: "he kept working." },
                        { sentence: "It looks as if...", khmer: "វាមើលទៅដូចជា...", answer: "It looks as if..." },
                        
                        { sentence: "they've had a shock.", khmer: "ពួកគេទើបទទួលរងការភ្ញាក់ផ្អើល", answer: "they've had a shock." },
                        
                        { sentence: "They were shouting", khmer: "ពួកគេកំពុងក្ដែងសម្លេង (past continuous tense)", answer: "They were shouting" },
                        
                        { sentence: "I have no idea", khmer: "ខ្ញុំគ្មានគំនិតទេ / ខ្ញុំមិនដឹងទេ", answer: "I have no idea" },
                        { sentence: "Let’s keep in touch", khmer: "តោះបន្តទាក់ទងគ្នា", answer: "Let’s keep in touch" },
                        { sentence: "Can you give me a hand?", khmer: "អ្នកអាចជួយខ្ញុំបានទេ?", answer: "Can you give me a hand?" },
                        { sentence: "I’ll think about it.", khmer: "ខ្ញុំនឹងគិតអំពីវា។", answer: "I’ll think about it." },
                        { sentence: "Sounds like a plan!", khmer: "ស្តាប់ទៅដូចជាផែនការល្អ!", answer: "Sounds like a plan!" },
                        { sentence: "What do you mean?", khmer: "តើអ្នកចង់មានន័យអ្វី?", answer: "What do you mean?" },
                        { sentence: "That’s interesting!", khmer: "គួរឱ្យចាប់អារម្មណ៍ណាស់!", answer: "That’s interesting!" },
                        { sentence: "I appreciate it.", khmer: "ខ្ញុំពេញចិត្តវា។", answer: "I appreciate it." },
                        { sentence: "Let me think.", khmer: "ទុកឱ្យខ្ញុំគិតសិន។", answer: "Let me think." },
                        { sentence: "What’s the matter?", khmer: "មានការអី?", answer: "What’s the matter?" },
                        { sentence: "Can I help you with anything?", khmer: "តើខ្ញុំអាចជួយអ្វីបានទេ?", answer: "Can I help you with anything?" },
                        { sentence: "I don’t mind.", khmer: "ខ្ញុំមិនប្រកាន់ទេ។", answer: "I don’t mind." },
                        { sentence: "That sounds good.", khmer: "ស្តាប់ទៅល្អ។", answer: "That sounds good." },
                        { sentence: "Take care", khmer: "ប្រយ័ត្ន/ថែរក្សាខ្លួន", answer: "Take care" },
                        { sentence: "I’ll be right back.", khmer: "ខ្ញុំនឹងត្រលប់មកវិញភ្លាម។", answer: "I’ll be right back." },
                        { sentence: "Let’s get started", khmer: "តោះចាប់ផ្តើម", answer: "Let’s get started" },
                        { sentence: "It’s up to you.", khmer: "វាអាស្រ័យលើអ្នក។", answer: "It’s up to you." },
                        { sentence: "What do you think?", khmer: "តើអ្នកគិតយ៉ាងណា?", answer: "What do you think?" },
                        { sentence: "I’m not sure.", khmer: "ខ្ញុំមិនច្បាស់ទេ។",answer: "I’m not sure." },
                        { sentence: "Can I ask you a question?", khmer: "ខ្ញុំអាចសួរអ្នកសំណួរបានទេ?", answer: "Can I ask you a question?" },
                        { sentence: "I’m looking for [something].", khmer: "ខ្ញុំកំពុងរក [អ្វីមួយ]។", answer: "I’m looking for [something]." },
                        { sentence: "How much is this?", khmer: "នេះតម្លៃប៉ុន្មាន?", answer: "How much is this?" },
                        { sentence: "I don’t know.", khmer: "ខ្ញុំមិនដឹងទេ។", answer: "I don’t know." },
                        { sentence: "How can I help you?", khmer: "តើខ្ញុំអាចជួយអ្នកបានយ៉ាងដូចម្តេច?", answer: "How can I help you?" },
                        { sentence: "What time is it?", khmer: "ម៉ោងប៉ុន្មានហើយ?", answer: "What time is it?" },
                        { sentence: "Where are you from?", khmer: "អ្នកមកពីណា?", answer: "Where are you from?" },
                        { sentence: "I don’t understand.", khmer: "ខ្ញុំមិនយល់ទេ។", answer: "I don’t understand." },
                        { sentence: "Have a nice day!", khmer: "សូមឱ្យមានថ្ងៃល្អ!", answer: "Have a nice day!" },
                        { sentence: "Can I help you?", khmer: "ខ្ញុំអាចជួយអ្នកបានទេ?", answer: "Can I help you?" },
                        { sentence: "What do you do?", khmer: "តើអ្នកធ្វើការអ្វី?", answer: "What do you do?" },
                        { sentence: "Could you repeat that, please?", khmer: "សូមជួយនិយាយម្តងទៀតបានទេ?", answer: "Could you repeat that, please?" },
                        { sentence: "I’m sorry", khmer: "ខ្ញុំសុំទោស", answer: "I’m sorry" },
                        { sentence: "See you later!", khmer: "ជួបគ្នាពេលក្រោយ!", answer: "See you later!" },
                        { sentence: "How much does this cost?", khmer: "នេះតម្លៃប៉ុន្មាន?", answer: "How much does this cost?" },
                        { sentence: "You’re welcome.", khmer: "មិនអីទេ / រីករាយ", answer: "You’re welcome." },
                        { sentence: "How are you?", khmer: "សុខសប្បាយជាទេ?", answer: "How are you?" },
                        { sentence: "Thank you", khmer: "អរគុណ", answer: "Thank you" },
                        { sentence: "", khmer: "", answer: "" },
                        { sentence: "", khmer: "", answer: "" },
                        { sentence: "", khmer: "", answer: "" }
                    ],
                    
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
                   
                    
                    
                    
                    "qna-html": [
                        {
                            
                            sentence:"Hyper Text Markup Language",
                            answer: "Hyper Text Markup Language",
                            Khmer: "HTML is the standard markup language for documents designed to be displayed in a web browser."
                        },
                        {
                            
                            sentence:"HTML is the standard markup language for documents designed to be displayed in a web browser.",
                            answer: "HTML is the standard markup language for documents designed to be displayed in a web browser.",
                            khmer: "Hyper Text Markup Language",
                            
                        },
                        {
                            question: "Which HTML tag is used to define an internal style sheet?",
                            sentence:"<style>",
                            answer: "<style>",
                            khmer: "The <style> tag is used to define style information (CSS) for a document."
                        },
                        {
                            question: "Which HTML tag is used to define an internal style sheet?",
                            sentence: "The <style> tag is used to define style information (CSS) for a document.",
                            khmer: "The ... tag is used to ... style information (CSS) for a ...",
                            answer: "The <style> tag is used to define style information (CSS) for a document."
                        },
                        {
                            question: "Which attribute is used to provide an advisory text about an element or its contents?",
                            sentence: "title",
                            answer: "title",
                            khmer: "The 'title' attribute provides extra information about an element (tooltip)."
                        },
                        {
                            question: "Which attribute is used to provide an advisory text about an element or its contents?",
                            sentence: "The 'title' attribute provides extra information about an element (tooltip).",
                            answer: "The 'title' attribute provides extra information about an element (tooltip).",
                            khmer: "The 'title' ... provides extra information about an ... (tooltip)."
                        }
                   ],
                    "qna-css": [
                        {
                            question: "What does CSS stand for?",
                            sentence: "Cascading Style Sheets",
                            answer: "Cascading Style Sheets",
                            khmer: "CSS is used to describe the look and formatting of a document written in HTML."
                        },
                        {
                            question: "What does CSS stand for?",
                            sentence: "CSS is used to describe the look and formatting of a document written in HTML.",
                            answer: "CSS is used to describe the look and formatting of a document written in HTML.",
                            khmer: "... is used to ... the look and ... of a document ... in ...."
                        },
                        {
                            question: "Which CSS property is used to change the background color of an element?",
                            sentence: "background-color",
                            answer: "background-color",
                            khmer: "The 'background-color' property sets the background color of an element."
                        },
                        {
                            question: "Which CSS property is used to change the background color of an element?",
                            sentence: "The 'background-color' property sets the background color of an element.",
                            answer: "The 'background-color' property sets the background color of an element.",
                            khmer: "The ... property sets the ... of an ...."
                        },
                        {
                            question: "How do you select an element with id 'header' in CSS?",
                            sentence: "#header",
                            answer: "#header",
                            khmer: "The '#' symbol is used to select elements by their ID."
                        },
                        {
                            question: "How do you select an element with id 'header' in CSS?",
                            sentence: "The '#' symbol is used to select elements by their ID.",
                            answer: "The '#' symbol is used to select elements by their ID.",
                            khmer: "The ... symbol is used to ... elements by their ...."
                        }
                    ],
                    "qna-js": [
                        {
                            question: "What does JavaScript primarily add to web pages?",
                            sentence: "Interactivity and dynamic behavior",
                            answer: "Interactivity and dynamic behavior",
                            khmer: "JavaScript is a programming language that enables interactive web pages."
                        },
                        {
                            question: "What does JavaScript primarily add to web pages?",
                            sentence: "JavaScript is a programming language that enables interactive web pages.",
                            answer: "JavaScript is a programming language that enables interactive web pages.",
                            khmer: ".....is a programming language that ..... ... web ..."
                        },
                        {
                            question: "Which of the following is a correct way to declare a JavaScript variable?",
                            sentence: "var myVar;",
                            answer: "var myVar;",
                            khmer: "The 'var' keyword is used to declare a variable in JavaScript (though 'let' and 'const' are now preferred)."
                        },
                        {
                            question: "Which of the following is a correct way to declare a JavaScript variable?",
                            sentence:"The 'var' keyword is used to declare a variable in JavaScript (though 'let' and 'const' are now preferred).",
                            answer:"The 'var' keyword is used to declare a variable in JavaScript (though 'let' and 'const' are now preferred).",
                            khmer: "The ... keyword is used to ... a ... in JavaScript (though 'let' and 'const' are now ...)."
                        },
                        {
                            question: "What is the purpose of 'console.log()' in JavaScript?",
                            sentence: "To print messages to the browser console for debugging",
                            answer: "To print messages to the browser console for debugging",
                            khmer: "console.log() is a function in JavaScript used to output messages or values to the web console."
                        },
                        {
                            question: "What is the purpose of 'console.log()' in JavaScript?",
                            sentence: "console.log() is a function in JavaScript used to output messages or values to the web console.",
                            answer: "console.log() is a function in JavaScript used to output messages or values to the web console.",
                            khmer: "... is a ... in JavaScript used to ... messages or ... to the web ...."
                        }
                    ],
                
                }

                    
            }

            // Game State Management
            const gameState = {
                mode: null,
                currentIndex: 0,
                score: 0,
                currentPool: [],
                currentRule: null, // For grammar rules
                currentLevel: null, // For shadowing levels
                currentListenAndTypeCategory: null, // New: For Listen & Type sub-categories
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
                gameState.currentListenAndTypeCategory = null; // Reset new state variable
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
                    case 'listen-type': headingText = '👂 Listen & Type Challenge'; break; // New mode
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
                    } else if (mode === "listen-type") { // New mode initialization
                        initListenAndTypeGame();
                    }
                    else if (mode.startsWith("qna-")) {
                        initQnAGame(mode);
                    }
                }, 500);
            }


            function displayGameEndScreen() {
                stopTimer(); // Ensure the timer is stopped

                let message = '';
                let finalScore = gameState.score;
                const totalItems = gameState.currentPool.length;

                if (gameState.mode === 'vocab' || gameState.mode.startsWith('qna-') || gameState.mode === 'listen-type') { // Added listen-type
                    message = `You completed the ${gameState.mode === 'listen-type' ? 'Listen & Type' : gameState.mode.replace('qna-', '').toUpperCase()} Challenge!`;
                    message += `<p>Your final score is: <span class="score-display">${finalScore} / ${totalItems}</span></p>`;
                    if (totalItems > 0) {
                        const percentage = (finalScore / totalItems) * 100;
                        if (percentage === 100) {
                            message += '<p class="success-message">Excellent! Perfect score!</p>';
                        } else if (percentage >= 70) {
                            message += '<p class="info-message">Great job! Keep practicing!</p個人的なメッセージを付け加えています。';
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
                    const feedbackElement = document.getElementById('feedback');
                    feedbackElement.innerHTML = `<p class="error-message">Time's up! The correct answer was: <strong>${currentWord.correctAnswer}</strong></p>`;
                    // Disable all options
                    elements.gameArea.querySelectorAll('.vocab-option-btn').forEach(btn => btn.disabled = true);
                    // Highlight the correct answer
                    elements.gameArea.querySelectorAll('.vocab-option-btn').forEach(btn => {
                        if (btn.dataset.option === currentWord.correctAnswer) {
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
                    feedbackElement.classList.add('show'); // Show feedback message
                    setTimeout(() => {
                        feedbackElement.classList.remove('show'); // Hide feedback
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

            // New Listen & Type Game Functions
            function initListenAndTypeGame() {
                console.log("Initializing Listen & Type Game...");
                const listenTypeCategories = Object.keys(gameData.listenAndType);
                elements.gameArea.innerHTML = `
                    <div class="container listen-type-selection">
                        <h2 class="text-center text-blue-600">Select Listen & Type Category</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            ${listenTypeCategories.map(cat => `
                                <div class="card bg-purple-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                                    <h5 class="text-xl font-semibold text-purple-800 mb-2">${cat}</h5>
                                    <p class="text-gray-700 text-sm mb-4">Practice typing ${cat.toLowerCase()}.</p>
                                    <button class="btn btn-primary w-full" onclick="startListenAndTypePractice('${cat}')">Start Practice</button>
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn btn-secondary mt-8" onclick="goHome()">Back to Home</button>
                    </div>
                `;
            }

            function startListenAndTypePractice(category) {
                gameState.currentListenAndTypeCategory = category;
                // Important: Do NOT shuffle the currentPool for Listen & Type
                gameState.currentPool = gameData.listenAndType[category];
                gameState.currentIndex = 0;
                gameState.score = 0;
                displayListenAndTypeQuestion();
            }

            function displayListenAndTypeQuestion() {
                stopTimer();
                if (gameState.currentIndex >= gameState.currentPool.length) {
                    displayGameEndScreen();
                    return;
                }

                const currentItem = gameState.currentPool[gameState.currentIndex];
                const timerDuration = 80; // Time for listening and typing

                elements.gameArea.innerHTML = `
                    <div class="container listen-type-game">
                        <div class="score-timer-container">
                            <div class="score">Score: <span id="score" class="text-blue-600">${gameState.score}</span></div>
                            <div class="timer">Time Left: <span id="timeLeft" class="text-blue-600">${gameState.timeLeft}s</span></div>
                        </div>
                        <div class="question-box text-left">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Listen carefully and type what you hear:</h3>
                            <p class="khmer-meaning">(${currentItem.khmer})</p>
                            <div class="audio-controls mt-3">
                                <button class="btn btn-info btn-lg" id="listenBtn"><i class="fas fa-volume-up mr-2"></i>Listen</button>
                            </div>
                        </div>
                        <div class="answer-input-container mt-4">
                            <input type="text" id="listenTypeAnswerInput" class="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" placeholder="Type what you heard here...">
                            <button class="btn btn-success w-full" onclick="checkListenAndTypeAnswer()">Check Answer</button>
                        </div>
                        <p id="feedback" class="mt-3 feedback-message"></p>
                    </div>
                `;

                document.getElementById('listenBtn').addEventListener('click', () => {
                    speakText(currentItem.sentence);
                });

                document.getElementById('listenTypeAnswerInput').focus();
                document.getElementById('listenTypeAnswerInput').onkeyup = function(event) {
                    if (event.key === "Enter") {
                        checkListenAndTypeAnswer();
                    }
                };

                startTimer(timerDuration, (timeLeft) => {
                    document.getElementById('timeLeft').textContent = `${timeLeft}s`;
                }, () => {
                    const feedbackElement = document.getElementById('feedback');
                    feedbackElement.innerHTML = `<p class="error-message">Time's up! The correct answer was: <strong>${currentItem.answer}</strong></p>`;
                    document.getElementById('listenTypeAnswerInput').disabled = true;
                    elements.gameArea.querySelector('.btn-success').disabled = true;
                    feedbackElement.classList.add('show');
                    setTimeout(() => {
                        feedbackElement.classList.remove('show');
                        gameState.currentIndex++;
                        displayListenAndTypeQuestion();
                    }, 2000);
                });
            }

            function checkListenAndTypeAnswer() {
                stopTimer();
                const currentItem = gameState.currentPool[gameState.currentIndex];
                const userAnswer = document.getElementById('listenTypeAnswerInput').value.trim();
                const feedbackElement = document.getElementById('feedback');

                // Normalize both strings for comparison (lowercase, remove punctuation, reduce multiple spaces)
                const normalizeText = (text) => text.toLowerCase().replace(/[.,!?;:'"-]/g, '').replace(/\s+/g, ' ').trim();

                const normalizedUserAnswer = normalizeText(userAnswer);
                const normalizedCorrectAnswer = normalizeText(currentItem.answer);

                document.getElementById('listenTypeAnswerInput').disabled = true;
                elements.gameArea.querySelector('.btn-success').disabled = true;

                if (normalizedUserAnswer === normalizedCorrectAnswer) {
                    gameState.score++;
                    feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉</p>`;
                } else {
                    feedbackElement.innerHTML = `<p class="error-message">Incorrect. The correct answer was: <strong>${currentItem.answer}</strong></p>`;
                }
                document.getElementById('score').textContent = gameState.score;

                feedbackElement.classList.add('show');

                setTimeout(() => {
                    feedbackElement.classList.remove('show');
                    gameState.currentIndex++;
                    displayListenAndTypeQuestion();
                }, 3000); // Wait 3 seconds for feedback
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
    
