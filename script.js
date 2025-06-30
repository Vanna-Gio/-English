
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
                    "Passive and active voice": {
                            description: `
                                Understanding **Active Voice** and **Passive Voice** is crucial for clear and effective communication in English.

                                **Active Voice** focuses on the subject performing the action, making sentences direct and impactful.
                                **Passive Voice** focuses on the action itself or the receiver of the action, often used when the doer is unknown, unimportant, or when emphasizing the action's result.
                            `,
                            structure: {
                                active: "Subject + Verb + Object",
                                passive: "Object + Form of 'to be' (is/am/are/was/were) + Past Participle (of Verb) + (by + Agent)"
                            },
                            examples: [
                                {
                                    type: "correct",
                                    sentence: "Active: The chef cooks delicious meals.",
                                    explanation: "Here, 'The chef' is the subject performing the action 'cooks'."
                                },
                                {
                                    type: "correct",
                                    sentence: "Passive: Delicious meals are cooked by the chef.",
                                    explanation: "Here, 'Delicious meals' receive the action. The focus shifts from the chef to the meals."
                                },
                                {
                                    type: "incorrect",
                                    sentence: "Awkward Passive: The ball was thrown by the boy by means of a powerful arm.",
                                    explanation: "While grammatically passive, this sentence is unnecessarily wordy and less clear than its active counterpart. A better version would be: 'The boy threw the ball with a powerful arm.'"
                                }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Which sentence is in **active voice**?",
                                    options: [
                                        { text: "The book was read by him.", correct: false },
                                        { text: "He read the book.", correct: true },
                                        { text: "The book was being read.", correct: false }
                                    ]
                                },
                                {
                                    type: "multiple-choice",
                                    question: "Which sentence is in **passive voice**?",
                                    options: [
                                        { text: "She baked a cake.", correct: false },
                                        { text: "A cake was baked by her.", correct: true },
                                        { text: "They are baking cakes.", correct: false }
                                    ]
                                },
                                {
                                    type: "match-the-words",
                                    question: "Match the active voice sentence with its passive voice equivalent.",
                                    pairs: [
                                        { stem: "The chef cooks dinner.", correctOption: "Dinner is cooked by the chef." },
                                        { stem: "The student wrote the essay.", correctOption: "The essay was written by the student." },
                                        { stem: "The wind blew the leaves.", correctOption: "The leaves were blown by the wind." },
                                        { stem: "The cat caught the mouse.", correctOption: "The mouse was caught by the cat." },
                                        { stem: "The painter created a masterpiece.", correctOption: "A masterpiece was created by the painter." },
                                        { stem: "The doctor examines the patient.", correctOption: "The patient is examined by the doctor." },
                                        { stem: "The committee approved the plan.", correctOption: "The plan was approved by the committee." },
                                        { stem: "The rain damaged the crops.", correctOption: "The crops were damaged by the rain." }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "Change the active sentence to passive: 'My mother ______ dinner every evening.' (Hint: Use a form of 'prepare')",
                                    correctAnswer: "is prepared by my mother",
                                    explanation: "The passive voice sentence would be: 'Dinner is prepared by my mother every evening.' (Or 'Dinner is prepared every evening by my mother.')"
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "Change the active sentence to passive: 'Someone stole my car yesterday.' (Hint: Use a form of 'steal')",
                                    correctAnswer: "was stolen",
                                    explanation: "The passive voice sentence would be: 'My car was stolen yesterday.'"
                                }
                            ]
                    },
                    "Passive and active voice": {
                        description: `
                            Understanding **Active Voice** and **Passive Voice** is crucial for clear and effective communication in English.

                            **Active Voice** focuses on the subject performing the action, making sentences direct and impactful.
                            **Passive Voice** focuses on the action itself or the receiver of the action, often used when the doer is unknown, unimportant, or when emphasizing the action's result.

                            **How Voice Changes Across Tenses:**

                            The core structure of active (Subject + Verb + Object) and passive (Object + Form of 'to be' + Past Participle) remains consistent, but the *form of 'to be'* and the main verb's tense will change.

                            **1. Simple Present**
                            * Active: S + V1 (s/es) + O
                            * Passive: O + is/am/are + V3

                            **2. Simple Past**
                            * Active: S + V2 + O
                            * Passive: O + was/were + V3

                            **3. Simple Future**
                            * Active: S + will + V1 + O
                            * Passive: O + will be + V3

                            **4. Present Continuous**
                            * Active: S + is/am/are + V-ing + O
                            * Passive: O + is/am/are + being + V3

                            **5. Past Continuous**
                            * Active: S + was/were + V-ing + O
                            * Passive: O + was/were + being + V3

                            **6. Present Perfect**
                            * Active: S + has/have + V3 + O
                            * Passive: O + has/have + been + V3

                            **7. Past Perfect**
                            * Active: S + had + V3 + O
                            * Passive: O + had + been + V3

                            **8. Future Perfect**
                            * Active: S + will have + V3 + O
                            * Passive: O + will have + been + V3
                        `,
                        structure: {
                            active: "Subject + Verb + Object",
                            passive: "Object + Form of 'to be' (is/am/are/was/were, being, been) + Past Participle (of Verb) + (by + Agent)"
                        },
                        examples: [
                            {
                                type: "correct",
                                sentence: "Active (Present Simple): The chef cooks delicious meals.",
                                explanation: "Here, 'The chef' is the subject performing the action 'cooks'."
                            },
                            {
                                type: "correct",
                                sentence: "Passive (Present Simple): Delicious meals are cooked by the chef.",
                                explanation: "Here, 'Delicious meals' receive the action. The focus shifts from the chef to the meals."
                            },
                            {
                                type: "correct",
                                sentence: "Active (Past Simple): He wrote a letter yesterday.",
                                explanation: "The subject 'He' performed the action 'wrote' in the past."
                            },
                            {
                                type: "correct",
                                sentence: "Passive (Past Simple): A letter was written by him yesterday.",
                                explanation: "The object 'A letter' received the action. The past simple passive uses 'was/were' + past participle."
                            },
                            {
                                type: "correct",
                                sentence: "Active (Present Continuous): She is reading a book.",
                                explanation: "The subject 'She' is currently performing the action 'reading'."
                            },
                            {
                                type: "correct",
                                sentence: "Passive (Present Continuous): A book is being read by her.",
                                explanation: "The object 'A book' is currently receiving the action. The present continuous passive uses 'is/am/are being' + past participle."
                            },
                            {
                                type: "correct",
                                sentence: "Active (Present Perfect): They have built a new house.",
                                explanation: "The subject 'They' completed the action 'built' at an unspecified time before now."
                            },
                            {
                                type: "correct",
                                sentence: "Passive (Present Perfect): A new house has been built by them.",
                                explanation: "The object 'A new house' has received the action. The present perfect passive uses 'has/have been' + past participle."
                            },
                            {
                                type: "incorrect",
                                sentence: "Awkward Passive: The ball was thrown by the boy by means of a powerful arm.",
                                explanation: "While grammatically passive, this sentence is unnecessarily wordy and less clear than its active counterpart. A better version would be: 'The boy threw the ball with a powerful arm.'"
                            }
                        ],
                        // New section for examples across all tenses
                    
                        quizQuestions: [
                            {
                                type: "multiple-choice",
                                question: "Which sentence is in **active voice**?",
                                options: [
                                    { text: "The book was read by him.", correct: false },
                                    { text: "He read the book.", correct: true },
                                    { text: "The book was being read.", correct: false }
                                ]
                            },
                            {
                                type: "multiple-choice",
                                question: "Which sentence is in **passive voice**?",
                                options: [
                                    { text: "She baked a cake.", correct: false },
                                    { text: "A cake was baked by her.", correct: true },
                                    { text: "They are baking cakes.", correct: false }
                                ]
                            },
                            {
                                type: "match-the-words",
                                question: "Match the active voice sentence with its passive voice equivalent.",
                                pairs: [
                                    { stem: "The chef cooks dinner.", correctOption: "Dinner is cooked by the chef." },
                                    { stem: "The student wrote the essay.", correctOption: "The essay was written by the student." },
                                    { stem: "The wind blew the leaves.", correctOption: "The leaves were blown by the wind." },
                                    { stem: "The cat caught the mouse.", correctOption: "The mouse was caught by the cat." },
                                    { stem: "The painter created a masterpiece.", correctOption: "A masterpiece was created by the painter." },
                                    { stem: "The doctor examines the patient.", correctOption: "The patient is examined by the doctor." },
                                    { stem: "The committee approved the plan.", correctOption: "The plan was approved by the committee." },
                                    { stem: "The rain damaged the crops.", correctOption: "The crops were damaged by the rain." }
                                ]
                            },
                            {
                                type: "fill-in-blank",
                                question: "Change the active sentence to passive: 'My mother ______ dinner every evening.' (Hint: Use a form of 'prepare')",
                                correctAnswer: "is prepared by my mother",
                                explanation: "The passive voice sentence would be: 'Dinner is prepared by my mother every evening.' (Or 'Dinner is prepared every evening by my mother.')"
                            },
                            {
                                type: "fill-in-blank",
                                question: "Change the active sentence to passive: 'Someone stole my car yesterday.' (Hint: Use a form of 'steal')",
                                correctAnswer: "was stolen",
                                explanation: "The passive voice sentence would be: 'My car was stolen yesterday.'"
                            }
                        ]
                    },
                    
                   // "speakingSkillLessons"
                        "Active Listening": {
                            "description": "Active listening is crucial for effective communication. It involves fully concentrating on what is being said rather than just passively hearing the message. This deep focus helps you understand the speaker's context, emotions, and intentions, enabling you to formulate more appropriate and empathetic responses. In Khmer, this means ផ្តោតទៅលើអ្វីដែលអ្នកដទៃកំពុងនិយាយ មិនមែនគ្រាន់តែលើការបង្កើតការឆ្លើយតបផ្ទាល់ខ្លួនរបស់អ្នកនោះទេ។ នេះជួយអ្នកឱ្យយល់ពីបរិបទ និងឆ្លើយតបបានត្រឹមត្រូវជាងមុន។",
                            "structure": "Focus on verbal and non-verbal cues; ask clarifying questions.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "Listener: 'So, if I understand correctly, you're saying the main challenge is time management?' (Clarifying question)"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "Speaker: 'I'm really stressed about the deadline.' Listener: (Nods, maintains eye contact) 'I can see that. Tell me more.'"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Speaker: 'I had a really tough day at work.' Listener: 'Oh, that reminds me, I had a great day!'"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "During a conversation, the listener is constantly checking their phone."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which of the following is NOT a component of active listening?",
                                    "options": [
                                        { "text": "Asking clarifying questions", "correct": false },
                                        { "text": "Maintaining eye contact", "correct": false },
                                        { "text": "Interrupting to share your own story", "correct": true },
                                        { "text": "Summarizing what the speaker said", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "Active listening involves fully _______________ on what is being said.",
                                    "correctAnswer": "concentrating",
                                    "explanation": "Active listening requires full concentration to truly understand the speaker."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the active listening components with their descriptions:",
                                    "pairs": [
                                        { "stem": "Non-verbal cues", "correctOption": "Body language, facial expressions" },
                                        { "stem": "Clarifying questions", "correctOption": "Asking to confirm understanding" },
                                        { "stem": "Verbal cues", "correctOption": "Words being spoken" }
                                    ]
                                }
                            ]
                        },
                        "Practicing Pronunciation & Intonation": {
                            "description": "Improving your speaking clarity involves dedicated practice of pronunciation and intonation. This means regularly working on difficult sounds, specific words, and the natural rise and fall of your voice in sentences. Utilizing online resources, recording your speech for self-assessment, and comparing it to native speakers are effective methods. In Khmer, this is អនុវត្តការបញ្ចេញសំឡេង និងសម្លេងឱ្យបានទៀងទាត់នូវសំឡេង ពាក្យ និងសម្លេងប្រយោគដែលពិបាក។ ប្រើប្រាស់ធនធានតាមអ៊ីនធឺណិត ថតសំឡេងខ្លួនឯង និងប្រៀបធៀបជាមួយអ្នកនិយាយភាសាកំណើត។",
                            "structure": "Identify difficult sounds/words -> Practice with resources -> Record & compare -> Repeat.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "Practicing the 'th' sound: 'The thick thought.' (Focus on tongue placement)"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "Recording a sentence like 'What are you doing?' and ensuring the intonation rises naturally at the end for a question."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Speaking all words in a sentence with the same flat tone, making it sound robotic."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Ignoring specific vowel sounds that are challenging in a new language."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Why is practicing intonation important for speaking skills?",
                                    "options": [
                                        { "text": "It helps you speak louder.", "correct": false },
                                        { "text": "It makes your speech sound more natural and conveys meaning.", "correct": true },
                                        { "text": "It allows you to speak faster.", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "The natural rise and fall of your voice in sentences is called _______________.",
                                    "correctAnswer": "intonation",
                                    "explanation": "Intonation refers to the melody of speech, important for conveying meaning and naturalness."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the pronunciation/intonation terms:",
                                    "pairs": [
                                        { "stem": "Pronunciation", "correctOption": "How words are spoken" },
                                        { "stem": "Intonation", "correctOption": "Rise and fall of voice" },
                                        { "stem": "Word stress", "correctOption": "Emphasis on certain syllables" }
                                    ]
                                }
                            ]
                        },
                        "Expanding Vocabulary & Idioms": {
                            "description": "To express yourself more precisely and richly, it's essential to expand your vocabulary and knowledge of idioms. This isn't just about memorizing lists, but learning new words and phrases within their natural context. Paying attention to collocations (words that often go together) and common idioms will make your speech sound significantly more natural and fluent. In Khmer, it means រៀនពាក្យ និងឃ្លាថ្មីៗក្នុងបរិបទ មិនមែនគ្រាន់តែជាបញ្ជីនោះទេ។ យកចិត្តទុកដាក់លើការភ្ជាប់ពាក្យ និងឃ្លាគំរូទូទៅ ដើម្បីធ្វើឱ្យការនិយាយរបស់អ្នកស្តាប់ទៅធម្មជាតិជាងមុន។",
                            "structure": "Learn new words/idioms in context -> Identify collocations -> Integrate into conversations.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "Instead of 'I feel very happy,' try 'I'm over the moon!' (using an idiom in context)."
                                },
                                {
                                    "type": "correct",
                                    "sentence": "Learning 'make a decision' instead of 'do a decision' for proper collocation."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Using a new word incorrectly because you only learned its definition without seeing it in a sentence."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Trying to translate an idiom word-for-word from your native language."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "What does 'learning words in context' mean?",
                                    "options": [
                                        { "text": "Memorizing long lists of words.", "correct": false },
                                        { "text": "Using a dictionary to find every word's meaning.", "correct": false },
                                        { "text": "Understanding how a word is used in sentences or real-life situations.", "correct": true }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "Words that often go together naturally are called _______________.",
                                    "correctAnswer": "collocations",
                                    "explanation": "Collocations are groups of words that naturally go together, like 'heavy rain' instead of 'strong rain'."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the idiom to its meaning:",
                                    "pairs": [
                                        { "stem": "Break a leg", "correctOption": "Good luck" },
                                        { "stem": "Hit the books", "correctOption": "Study hard" },
                                        { "stem": "Bite the bullet", "correctOption": "Endure a difficult situation" }
                                    ]
                                }
                            ]
                        },
                        "Structuring Your Thoughts": {
                            "description": "Speaking coherently, especially when delivering longer responses or explanations, benefits greatly from structuring your thoughts. Before you begin speaking, take a moment to quickly organize your ideas into a logical flow: an introduction, a few main points, and a conclusion. This helps both you stay on track and your listener follow your message clearly. In Khmer, this is មុននឹងនិយាយ ជាពិសេសសម្រាប់ការឆ្លើយតបវែង ត្រូវរៀបចំគំនិតរបស់អ្នកឱ្យលឿនទៅជាសេចក្តីផ្តើម ចំណុចសំខាន់ៗ និងការសន្និដ្ឋាន។ នេះជួយឱ្យអ្នកនិយាយបានច្បាស់លាស់ជាងមុន។",
                            "structure": "Introduction -> Main Point 1 -> Main Point 2 -> Conclusion.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "Starting a response with 'First, I'd like to address...' then moving to 'Secondly...' and concluding with 'In summary...'"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "For a problem, outlining: 'The problem is X. My solution is Y. The benefits are Z.'"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Jumping between unrelated ideas without clear transitions, making the speech confusing."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Starting to speak without any idea of the points you want to make."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "What is the primary benefit of structuring your thoughts before speaking?",
                                    "options": [
                                        { "text": "It helps you speak faster.", "correct": false },
                                        { "text": "It ensures your speech is coherent and easy to follow.", "correct": true },
                                        { "text": "It means you don't need to practice.", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "A good structure for a response often includes an introduction, main points, and a _______________.",
                                    "correctAnswer": "conclusion",
                                    "explanation": "A conclusion helps summarize your points and provide a clear ending to your speech."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the structural elements to their purpose:",
                                    "pairs": [
                                        { "stem": "Introduction", "correctOption": "Sets the stage, introduces topic" },
                                        { "stem": "Main points", "correctOption": "Details and arguments" },
                                        { "stem": "Conclusion", "correctOption": "Summarizes and reiterates" }
                                    ]
                                }
                            ]
                        },
                        "Practicing Conversational Fillers & Pauses": {
                            "description": "To sound more natural and confident, it's beneficial to learn and appropriately use conversational fillers and effective pauses. Fillers like 'well,' 'you know,' 'I mean,' or 'like' can buy you time to think and make your speech flow more smoothly, rather than having awkward silences. Strategic pauses can also emphasize points or allow listeners to process information. In Khmer, this means រៀនពាក្យបំពេញការសន្ទនា (ឧទុាហរណ៍ 'well', 'you know', 'I mean') និងរបៀបប្រើប្រាស់ការផ្អាកឱ្យមានប្រសិទ្ធភាព។ នេះធ្វើឱ្យការនិយាយរបស់អ្នកស្តាប់ទៅមិនសូវជាមនុស្សយន្ត និងមានលក្ខណៈជាការសន្ទនាជាងមុន។",
                            "structure": "Learn common fillers -> Observe native speaker pauses -> Practice incorporating naturally.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "Speaker: 'Well, I think... (pause) ...the best approach would be to start with research.'"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "Using 'you know' to check for understanding: 'It's a really complex issue, you know?'"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Using too many fillers to the point where it becomes distracting or makes you sound uncertain."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Speaking continuously without any pauses, making it hard for listeners to follow."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "What is the benefit of using appropriate conversational fillers and pauses?",
                                    "options": [
                                        { "text": "They make your speech sound more robotic.", "correct": false },
                                        { "text": "They help you sound more natural and confident, allowing for thought processing.", "correct": true },
                                        { "text": "They replace the need for a good vocabulary.", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "Words like 'well' or 'you know' used to buy time are called conversational _______________.",
                                    "correctAnswer": "fillers",
                                    "explanation": "Conversational fillers are short words or phrases that give you time to think without silence."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the conversational element to its effect:",
                                    "pairs": [
                                        { "stem": "Fillers", "correctOption": "Buy time to think" },
                                        { "stem": "Pauses", "correctOption": "Emphasize points, allow processing" },
                                        { "stem": "Rapid speech", "correctOption": "Can make speech hard to follow" }
                                    ]
                                }
                            ]
                        },
                        "Engaging in Role-Playing & Simulations": {
                            "description": "Building confidence and adaptability in diverse conversational contexts is greatly achieved through role-playing and simulations. By practicing speaking in various real-life scenarios, you train yourself to react spontaneously, manage unexpected turns in conversation, and apply your language skills in practical situations. In Khmer, this means អនុវត្តការនិយាយក្នុងស្ថានភាពជាក់ស្តែងផ្សេងៗតាមរយៈការសម្តែងតួ។ នេះបង្កើតទំនុកចិត្ត និងការសម្របខ្លួនក្នុងបរិបទសន្ទនាផ្សេងៗ។",
                            "structure": "Identify scenario -> Define roles -> Practice dialogue -> Get feedback -> Repeat.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "Simulating a job interview with a friend, practicing common questions and answers."
                                },
                                {
                                    "type": "correct",
                                    "sentence": "Role-playing ordering food at a restaurant to practice specific vocabulary and phrases."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Only studying grammar rules without ever practicing speaking in a simulated environment."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Practicing only formal speech when you also need informal conversation skills."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "What is the main purpose of engaging in role-playing for speaking practice?",
                                    "options": [
                                        { "text": "To memorize scripts.", "correct": false },
                                        { "text": "To build confidence and adaptability in various real-life conversational contexts.", "correct": true },
                                        { "text": "To avoid speaking with native speakers.", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "Role-playing helps build _______________ and adaptability in different conversational contexts.",
                                    "correctAnswer": "confidence",
                                    "explanation": "Confidence is a key outcome of practicing speaking in simulated scenarios."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the simulation activity to its benefit:",
                                    "pairs": [
                                        { "stem": "Job interview simulation", "correctOption": "Practices formal communication" },
                                        { "stem": "Restaurant role-play", "correctOption": "Practices ordering and social phrases" },
                                        { "stem": "Getting feedback", "correctOption": "Identifies areas for improvement" }
                                    ]
                                }
                            ]
                        },
                   
                    
                    //"a2SpeakingStructures"
                        "Simple Present (Routines & Facts)": {
                            "description": "At A2 level, mastering the Simple Present is essential for talking about daily routines, habits, general truths, and facts. It helps you describe what you do regularly or things that are always true. In Khmer, this helps you say: និយាយអំពីទម្លាប់ប្រចាំថ្ងៃ ការពិតទូទៅ និងអ្វីដែលតែងតែពិត។",
                            "structure": "Subject + Verb (base form / -s for he/she/it) + Object/Complement.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "I wake up at 7 AM every day."
                                },
                                {
                                    "type": "correct",
                                    "sentence": "She works in a hospital."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "They working hard now."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "He like coffee."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which sentence correctly uses the Simple Present?",
                                    "options": [
                                        { "text": "We are going to the park tomorrow.", "correct": false },
                                        { "text": "She usually reads books.", "correct": true },
                                        { "text": "He bought a new car yesterday.", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "Water _______ at 100 degrees Celsius. (boil)",
                                    "correctAnswer": "boils",
                                    "explanation": "This is a general fact, so we use the Simple Present. For 'it' (water), we add '-s'."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the subject with the correct verb form in Simple Present:",
                                    "pairs": [
                                        { "stem": "I", "correctOption": "eat" },
                                        { "stem": "He", "correctOption": "eats" },
                                        { "stem": "They", "correctOption": "eat" }
                                    ]
                                }
                            ]
                        },
                        "Present Continuous (Actions Happening Now)": {
                            "description": "The Present Continuous is vital for describing actions happening at the moment of speaking, temporary situations, or future plans that are already decided. In Khmer, this helps you say: ពិពណ៌នាអំពីសកម្មភាពដែលកំពុងកើតឡើងនៅពេលបច្ចុប្បន្ន ស្ថានភាពបណ្តោះអាសន្ន ឬផែនការនាពេលអនាគតដែលបានសម្រេចរួចហើយ។",
                            "structure": "Subject + am/is/are + Verb-ing + Object/Complement.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "I am studying English right now."
                                },
                                {
                                    "type": "correct",
                                    "sentence": "They are watching a movie."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "She play outside now."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "We is eating dinner."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which sentence correctly uses the Present Continuous?",
                                    "options": [
                                        { "text": "He often goes to the gym.", "correct": false },
                                        { "text": "They are listening to music.", "correct": true },
                                        { "text": "I will call you later.", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "Look! The cat _______ on the sofa. (sleep)",
                                    "correctAnswer": "is sleeping",
                                    "explanation": "The action is happening now, so we use 'is' + verb-ing."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the subject with the correct auxiliary verb:",
                                    "pairs": [
                                        { "stem": "I", "correctOption": "am" },
                                        { "stem": "He/She/It", "correctOption": "is" },
                                        { "stem": "We/You/They", "correctOption": "are" }
                                    ]
                                }
                            ]
                        },
                        "Simple Past (Past Events)": {
                            "description": "To talk about completed actions or events that happened at a specific time in the past, the Simple Past is fundamental. It's crucial for narrating past experiences. In Khmer, this helps you say: និយាយអំពីសកម្មភាព ឬព្រឹត្តិការណ៍ដែលបានបញ្ចប់នៅពេលជាក់លាក់ណាមួយក្នុងអតីតកាល។",
                            "structure": "Subject + Verb (past form) + Object/Complement. (For regular verbs, add -ed; for irregular verbs, use specific past forms).",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "I visited my grandparents last weekend."
                                },
                                {
                                    "type": "correct",
                                    "sentence": "She ate pizza for dinner yesterday."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "We go to the beach last summer."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "He did not went to school."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which verb form is used for regular verbs in the Simple Past?",
                                    "options": [
                                        { "text": "Base form", "correct": false },
                                        { "text": "-ing form", "correct": false },
                                        { "text": "-ed form", "correct": true }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "They _______ a new car two years ago. (buy)",
                                    "correctAnswer": "bought",
                                    "explanation": "The past form of 'buy' is 'bought'."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the base verb with its Simple Past form:",
                                    "pairs": [
                                        { "stem": "Go", "correctOption": "Went" },
                                        { "stem": "See", "correctOption": "Saw" },
                                        { "stem": "Play", "correctOption": "Played" }
                                    ]
                                }
                            ]
                        },
                        "Basic Questions (Wh- & Yes/No)": {
                            "description": "Being able to ask and answer basic questions is critical for conversation. This includes 'Wh-' questions (who, what, where, when, why, how) to get specific information and 'Yes/No' questions for confirmation. In Khmer, this helps you say: សួរ និងឆ្លើយសំណួរមូលដ្ឋាន ដោយប្រើសំណួរ 'Wh-' (នរណា អ្វី ទីណា ពេលណា ហេតុអ្វី របៀបណា) និងសំណួរ 'Yes/No'។",
                            "structure": "Wh-word + auxiliary verb (do/does/did/is/am/are/was/were) + Subject + Main Verb? OR Auxiliary Verb + Subject + Main Verb? (for Yes/No).",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "Where do you live?"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "Are you busy today?"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "You like coffee?"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "What you do yesterday?"
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which type of question typically requires 'Yes' or 'No' as an answer?",
                                    "options": [
                                        { "text": "Wh-question", "correct": false },
                                        { "text": "Yes/No question", "correct": true },
                                        { "text": "Open-ended question", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "_______ is your favorite color? (Ask about something specific)",
                                    "correctAnswer": "What",
                                    "explanation": "'What' is used to ask for specific information about a thing."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the Wh-word to its purpose:",
                                    "pairs": [
                                        { "stem": "Who", "correctOption": "Person" },
                                        { "stem": "Where", "correctOption": "Place" },
                                        { "stem": "When", "correctOption": "Time" }
                                    ]
                                }
                            ]
                        },
                        "Expressing Likes & Dislikes": {
                            "description": "Being able to express your preferences is a core part of everyday conversation. This structure allows you to clearly state what you like, love, don't like, or hate. In Khmer, this helps you say: បង្ហាញពីចំណូលចិត្តរបស់អ្នកឱ្យបានច្បាស់លាស់ នូវអ្វីដែលអ្នកចូលចិត្ត ស្រលាញ់ មិនចូលចិត្ត ឬស្អប់។",
                            "structure": "Subject + like/love/enjoy/don't like/hate + Noun / Verb-ing.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "I like reading books."
                                },
                                {
                                    "type": "correct",
                                    "sentence": "She doesn't like spicy food."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "He likes to play soccer."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "They hate go shopping."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which verb form typically follows 'like' or 'love' when talking about activities?",
                                    "options": [
                                        { "text": "Base form", "correct": false },
                                        { "text": "-ed form", "correct": false },
                                        { "text": "-ing form (gerund)", "correct": true }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "He loves _______ (swim) in the ocean.",
                                    "correctAnswer": "swimming",
                                    "explanation": "When 'love' is followed by an activity, use the -ing form (gerund)."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the expression with its meaning:",
                                    "pairs": [
                                        { "stem": "I love", "correctOption": "Strong preference" },
                                        { "stem": "I like", "correctOption": "Positive preference" },
                                        { "stem": "I don't like", "correctOption": "Negative preference" }
                                    ]
                                }
                            ]
                        },
                    
                    //B1
            
                        "Present Perfect (Experiences & Unfinished Actions)": {
                            "description": "The Present Perfect is crucial at B1 for talking about experiences ('Have you ever...'), actions that started in the past and continue to the present, or recent actions with current relevance. In Khmer, this helps you say: និយាយអំពីបទពិសោធន៍ សកម្មភាពដែលបានចាប់ផ្តើមពីអតីតកាល និងបន្តមកដល់បច្ចុប្បន្ន ឬសកម្មភាពថ្មីៗដែលមានជាប់ទាក់ទងនឹងបច្ចុប្បន្ន។",
                            "structure": "Subject + have/has + Verb (past participle) + Object/Complement.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "I have visited Paris twice."
                                },
                                {
                                    "type": "correct",
                                    "sentence": "She has lived here for five years."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Have you ever go to Japan?"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "He has finish his homework."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which of these sentences uses the Present Perfect correctly?",
                                    "options": [
                                        { "text": "I am studying English now.", "correct": false },
                                        { "text": "She has never tried sushi.", "correct": true },
                                        { "text": "They went to the cinema yesterday.", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "We have _______ (know) each other since childhood.",
                                    "correctAnswer": "known",
                                    "explanation": "The past participle of 'know' is 'known'. This indicates an action continuing to the present."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the base verb with its past participle:",
                                    "pairs": [
                                        { "stem": "See", "correctOption": "Seen" },
                                        { "stem": "Do", "correctOption": "Done" },
                                        { "stem": "Eat", "correctOption": "Eaten" }
                                    ]
                                }
                            ]
                        },
                        "Future Forms (will, going to, Present Continuous)": {
                            "description": "At B1, it's important to differentiate and use various future forms: 'will' for predictions/spontaneous decisions, 'be going to' for plans/predictions based on evidence, and Present Continuous for fixed arrangements. In Khmer, this helps you say: បែងចែក និងប្រើប្រាស់ទម្រង់អនាគតផ្សេងៗគ្នា៖ 'will' សម្រាប់ការទស្សន៍ទាយ/ការសម្រេចចិត្តភ្លាមៗ, 'be going to' សម្រាប់ផែនការ/ការទស្សន៍ទាយផ្អែកលើភស្តុតាង, និង Present Continuous សម្រាប់កិច្ចការដែលបានកំណត់រួចហើយ។",
                            "structure": "S + will + V1; S + be going to + V1; S + be + Ving (for fixed arrangements).",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "I think it will rain tomorrow. (Prediction)"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "We are going to buy a new house next year. (Plan)"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "They are meeting John at 7 PM. (Fixed arrangement)"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "She going to visit her family next week."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "I am going to help you right now. (Spontaneous offer, should be 'I will help you')"
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which future form is best for a sudden decision?",
                                    "options": [
                                        { "text": "be going to", "correct": false },
                                        { "text": "will", "correct": true },
                                        { "text": "Present Continuous", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "Look at those dark clouds! It _______ (rain).",
                                    "correctAnswer": "is going to rain",
                                    "explanation": "This is a prediction based on evidence, so 'be going to' is appropriate."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the future form with its primary use:",
                                    "pairs": [
                                        { "stem": "Will", "correctOption": "Predictions/Spontaneous decisions" },
                                        { "stem": "Be going to", "correctOption": "Plans/Predictions with evidence" },
                                        { "stem": "Present Continuous", "correctOption": "Fixed arrangements" }
                                    ]
                                }
                            ]
                        },
                        "Comparatives & Superlatives": {
                            "description": "At B1, you should be able to compare people, things, and places using comparatives (for two items) and superlatives (for three or more items). This allows for more nuanced descriptions. In Khmer, this helps you say: ប្រៀបធៀបមនុស្ស វត្ថុ និងទីកន្លែង ដោយប្រើប្រៀបធៀប (សម្រាប់វត្ថុពីរ) និងកំពូលប្រៀបធៀប (សម្រាប់វត្ថុបី ឬច្រើនជាងនេះ)។",
                            "structure": "Adjective + -er / more + Adjective + than (Comparative); The + Adjective + -est / most + Adjective (Superlative).",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "This book is more interesting than that one."
                                },
                                {
                                    "type": "correct",
                                    "sentence": "Mount Everest is the highest mountain in the world."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "She is more taller than her brother."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "This is the most good movie I've ever seen."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "To compare two items, you use a:",
                                    "options": [
                                        { "text": "Superlative", "correct": false },
                                        { "text": "Comparative", "correct": true },
                                        { "text": "Base adjective", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "Tokyo is one of the _______ (big) cities in the world.",
                                    "correctAnswer": "biggest",
                                    "explanation": "To compare among many cities, use the superlative form 'biggest'."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the adjective with its comparative/superlative form:",
                                    "pairs": [
                                        { "stem": "Tall", "correctOption": "Taller/Tallest" },
                                        { "stem": "Beautiful", "correctOption": "More beautiful/Most beautiful" },
                                        { "stem": "Good", "correctOption": "Better/Best" }
                                    ]
                                }
                            ]
                        },
                    
                    //b1SpeakingStructures": 
                        "Present Perfect Continuous (Duration of Actions)": {
                            "description": "At B1, the Present Perfect Continuous allows you to talk about actions that started in the past and are still continuing, often emphasizing how long they have been happening. It's used for ongoing activities with results in the present. In Khmer, this helps you say: និយាយអំពីសកម្មភាពដែលបានចាប់ផ្តើមពីអតីតកាល ហើយនៅតែកំពុងបន្ត ដោយសង្កត់ធ្ងន់លើរយៈពេលដែលវាបានកើតឡើង។",
                            "structure": "Subject + have/has + been + Verb-ing + Object/Complement + (for/since).",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "I have been studying English for three hours."
                                },
                                {
                                    "type": "correct",
                                    "sentence": "She has been working at this company since 2020."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "They have been watched TV all morning."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "He is been waiting for you."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which sentence correctly uses the Present Perfect Continuous?",
                                    "options": [
                                        { "text": "He lived here for five years.", "correct": false },
                                        { "text": "We have been waiting for an hour.", "correct": true },
                                        { "text": "They are going to travel next month.", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "She _______ (read) that book all day.",
                                    "correctAnswer": "has been reading",
                                    "explanation": "The action of reading started in the past and is still ongoing, covering the entire day."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the phrase with its appropriate time expression:",
                                    "pairs": [
                                        { "stem": "I have been living here", "correctOption": "for ten years" },
                                        { "stem": "She has been learning French", "correctOption": "since January" },
                                        { "stem": "They have been playing", "correctOption": "for a long time" }
                                    ]
                                }
                            ]
                        },
                        "Past Continuous (Ongoing Past Actions)": {
                            "description": "The Past Continuous is used to describe actions that were ongoing at a specific point in the past, or actions that were in progress when another action interrupted them. It sets the scene for past narratives. In Khmer, this helps you say: ពិពណ៌នាអំពីសកម្មភាពដែលកំពុងបន្តនៅចំណុចជាក់លាក់មួយក្នុងអតីតកាល ឬសកម្មភាពដែលកំពុងបន្តនៅពេលដែលសកម្មភាពមួយទៀតបានរំខាន។",
                            "structure": "Subject + was/were + Verb-ing + Object/Complement.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "I was cooking dinner when the phone rang."
                                },
                                {
                                    "type": "correct",
                                    "sentence": "They were playing football all afternoon."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "She was watch TV last night."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "He is running when I saw him."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which sentence indicates an action that was ongoing in the past when another action occurred?",
                                    "options": [
                                        { "text": "I ate breakfast.", "correct": false },
                                        { "text": "She was sleeping when the alarm went off.", "correct": true },
                                        { "text": "They will arrive soon.", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "While I _______ (walk) to the park, I saw my friend.",
                                    "correctAnswer": "was walking",
                                    "explanation": "The action of walking was ongoing when another action (seeing a friend) happened."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the subject with the correct auxiliary verb for Past Continuous:",
                                    "pairs": [
                                        { "stem": "I/He/She/It", "correctOption": "was" },
                                        { "stem": "We/You/They", "correctOption": "were" }
                                    ]
                                }
                            ]
                        },
                       "Used to / Would (Past Habits)": {
                            "description": "At B1, you can express past habits or states that no longer exist using 'used to' or 'would'. 'Used to' can be used for both habits and states, while 'would' is typically only for repeated actions. In Khmer, this helps you say: បង្ហាញទម្លាប់ ឬស្ថានភាពពីអតីតកាលដែលលែងមាន ដោយប្រើ 'used to' ឬ 'would'។",
                            "structure": "Subject + used to + Verb (base form) + ... OR Subject + would + Verb (base form) + ... (for repeated actions only).",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "I used to live in a small town. (Past state)"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "Every summer, we would go to the beach. (Repeated past action)"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "She would be shy when she was a child.",
                                    "explanation": "'Would' is not used for past states; 'used to' should be used instead: 'She used to be shy when she was a child.'"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "He used to played soccer.",
                                    "explanation": "'Used to' must be followed by the base form of the verb: 'He used to play soccer.'"
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which option is correct for a past state that no longer exists?",
                                    "options": [
                                        { "text": "He would have a lot of free time.", "correct": false },
                                        { "text": "He used to have a lot of free time.", "correct": true },
                                        { "text": "He was having a lot of free time.", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "When I was a kid, I _______ (play) outside every day.",
                                    "correctAnswer": "used to play / would play",
                                    "explanation": "Both 'used to play' and 'would play' are correct here as it describes a repeated past action."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the phrase with its appropriate usage:",
                                    "pairs": [
                                        { "stem": "Used to", "correctOption": "Past habits and states" },
                                        { "stem": "Would", "correctOption": "Repeated past actions only" },
                                        { "stem": "Simple Past", "correctOption": "Single completed action in the past" }
                                    ]
                                }
                            ]
                        },
                        "Reporting Verbs (Direct & Indirect Speech)": {
                            "description": "At B1, you need to be able to report what someone else said, both directly (exact words) and indirectly (paraphrased). This involves changes in tenses, pronouns, and time/place expressions. In Khmer, this helps you say: រាយការណ៍នូវអ្វីដែលអ្នកផ្សេងបាននិយាយ ទាំងដោយផ្ទាល់ និងដោយប្រយោល។",
                            "structure": "Direct: '...' + reporting verb. Indirect: Reporting verb + (that) + changed sentence (tense, pronoun, time/place).",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "Direct: She said, 'I am tired.'"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "Indirect: She said (that) she was tired."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "He told me he is going yesterday."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "They asked where is the station."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "When reporting a sentence from Present Simple to Indirect Speech, what tense does it usually change to?",
                                    "options": [
                                        { "text": "Present Continuous", "correct": false },
                                        { "text": "Simple Past", "correct": true },
                                        { "text": "Present Perfect", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "Direct: 'I will help you tomorrow,' he said. Indirect: He said he _______ help me the next day.",
                                    "correctAnswer": "would",
                                    "explanation": "'Will' changes to 'would' in indirect speech, and 'tomorrow' changes to 'the next day'."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the direct speech element with its indirect speech equivalent:",
                                    "pairs": [
                                        { "stem": "Now", "correctOption": "Then" },
                                        { "stem": "Here", "correctOption": "There" },
                                        { "stem": "Today", "correctOption": "That day" }
                                    ]
                                }
                            ]
                        },
                        "Passive Voice (Simple Tenses)": {
                            "description": "At B1, you should be able to use the passive voice for Simple Present and Simple Past. The passive voice is used when the focus is on the action or the object of the action, rather than the doer. In Khmer, this helps you say: ប្រើសំឡេងអកម្មសម្រាប់បច្ចុប្បន្នកាលធម្មតា និងអតីតកាលធម្មតា។ សំឡេងអកម្មត្រូវបានប្រើនៅពេលដែលការផ្តោតសំខាន់គឺទៅលើសកម្មភាព ឬកម្មវត្ថុនៃសកម្មភាព មិនមែនអ្នកធ្វើនោះទេ។",
                            "structure": "Object + be (is/am/are/was/were) + Verb (past participle) + (by agent).",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "The letter was written yesterday. (Simple Past Passive)"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "Coffee is grown in Brazil.(Simple Present Passive)" 
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "The book written by John."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "English is speak around the world."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "When is the passive voice typically used?",
                                    "options": [
                                        { "text": "When the doer of the action is unknown or unimportant.", "correct": true },
                                        { "text": "When the doer of the action is the main focus.", "correct": false },
                                        { "text": "Only when talking about future events.", "correct": false }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "The new bridge _______ (build) next year.",
                                    "correctAnswer": "will be built",
                                    "explanation": "This is Future Simple Passive, for an action whose focus is on the object (the bridge) and is in the future."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the active sentence with its passive equivalent:",
                                    "pairs": [
                                        { "stem": "They built the house.", "correctOption": "The house was built." },
                                        { "stem": "She cleans the room.", "correctOption": "The room is cleaned." },
                                        { "stem": "He will send the email.", "correctOption": "The email will be sent." }
                                    ]
                                }
                            ]
                        },
                        "Second Conditional (Hypothetical Situations)": {
                            "description": "The Second Conditional is used to talk about hypothetical or unlikely situations in the present or future, and their imaginary results. It's about 'what if' scenarios that are not expected to happen. In Khmer, this helps you say: និយាយអំពីស្ថានភាពសម្មតិកម្ម ឬមិនទំនងនៅក្នុងបច្ចុប្បន្ន ឬអនាគត និងលទ្ធផលស្រមៃរបស់ពួកគេ។",
                            "structure": "If + Subject + Simple Past (of main verb), Subject + would + Base Verb.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "If I won the lottery, I would buy a big house. (Unlikely scenario)"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "If I were you, I would accept the job. (Hypothetical advice)"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "If he would study, he would pass."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "If I had money, I will buy a car."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "The Second Conditional is used for:",
                                    "options": [
                                        { "text": "Real possibilities in the future.", "correct": false },
                                        { "text": "Past events that cannot be changed.", "correct": false },
                                        { "text": "Hypothetical or unlikely situations in the present/future.", "correct": true }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "If she _______ (speak) English, she would get a better job.",
                                    "correctAnswer": "spoke",
                                    "explanation": "For the 'if' clause in Second Conditional, use the Simple Past tense."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the 'if' clause with its likely result clause in the Second Conditional:",
                                    "pairs": [
                                        { "stem": "If I had wings,", "correctOption": "I would fly." },
                                        { "stem": "If she lived closer,", "correctOption": "we would meet more often." },
                                        { "stem": "If it were sunny,", "correctOption": "we would go to the beach." }
                                    ]
                                }
                            ]
                        },
                        "Modals for Advice, Obligation, Permission": {
                            "description": "At B1, you'll expand your use of modal verbs to express various functions like giving advice ('should'), expressing obligation/necessity ('must', 'have to'), and asking for/giving permission ('can', 'may', 'might'). In Khmer, this helps you say: ប្រើកិរិយាសព្ទជំនួយដើម្បីបង្ហាញពីអនុសាសន៍ កាតព្វកិច្ច ការអនុញ្ញាត។",
                            "structure": "Subject + Modal Verb + Base Verb + Object/Complement.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "You should study for the exam. (Advice)"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "All passengers must wear seatbelts. (Obligation)"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "May I come in? (Permission)"
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "We can to go now."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "He should learns English."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which modal verb is best for strong obligation or necessity?",
                                    "options": [
                                        { "text": "Should", "correct": false },
                                        { "text": "Might", "correct": false },
                                        { "text": "Must", "correct": true }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "It's raining heavily, so you _______ (take) an umbrella.",
                                    "correctAnswer": "should take",
                                    "explanation": "'Should' is used to give advice or make a recommendation."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the modal verb with its primary function:",
                                    "pairs": [
                                        { "stem": "Should", "correctOption": "Advice" },
                                        { "stem": "Must", "correctOption": "Obligation" },
                                        { "stem": "May", "correctOption": "Permission/Possibility" }
                                    ]
                                }
                            ]
                        },
                        "Connectors & Discourse Markers": {
                            "description": "At B1, connecting your ideas smoothly and logically is key to fluent conversation. Discourse markers and connectors (e.g., 'however', 'therefore', 'although', 'in my opinion') help you organize your thoughts, express relationships between ideas, and guide your listener. In Khmer, this helps you say: តភ្ជាប់គំនិតរបស់អ្នកឱ្យរលូន និងសមហេតុផល ដើម្បីធ្វើឱ្យការសន្ទនារបស់អ្នកកាន់តែប្រសើរ។",
                            "structure": "Sentence 1 + Connector/Marker + Sentence 2; Discourse Marker at beginning of sentence/paragraph.",
                            "examples": [
                                {
                                    "type": "correct",
                                    "sentence": "I like coffee; however, I prefer tea in the mornings. (Contrast)"
                                },
                                {
                                    "type": "correct",
                                    "sentence": "In my opinion, we should focus on quality.(Opinion)" 
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Although he was tired. He continued working."
                                },
                                {
                                    "type": "incorrect",
                                    "sentence": "Therefore, I am happy, I bought a new car."
                                }
                            ],
                            "quizQuestions": [
                                {
                                    "type": "multiple-choice",
                                    "question": "Which connector is used to introduce a contrasting idea?",
                                    "options": [
                                        { "text": "Therefore", "correct": false },
                                        { "text": "In addition", "correct": false },
                                        { "text": "However", "correct": true }
                                    ]
                                },
                                {
                                    "type": "fill-in-blank",
                                    "question": "She studied hard; _______, she passed the exam easily.",
                                    "correctAnswer": "therefore",
                                    "explanation": "'Therefore' is used to show a result or consequence."
                                },
                                {
                                    "type": "match-the-words",
                                    "question": "Match the connector/marker with its function:",
                                    "pairs": [
                                        { "stem": "In addition", "correctOption": "Adding information" },
                                        { "stem": "For example", "correctOption": "Giving an illustration" },
                                        { "stem": "As a result", "correctOption": "Indicating consequence" }
                                    ]
                                }
                            ]
                        },
                    
                

                

                },
                MoveOnstructure: {
                    "So...as to... (Degree and Result)": {
                        "description": "“So + adjective/adverb + as to + verb” is used to express a degree or quality that leads to a specific result or action. It’s similar to “so...that” or “in such a way that”, but often sounds more formal, polite, or can even be used for indirect criticism. In Khmer, this helps you say: ប្រើដើម្បីបង្ហាញពីកម្រិត ឬគុណភាពដែលនាំឱ្យមានលទ្ធផល ឬសកម្មភាពជាក់លាក់។ វាស្រដៀងនឹង 'so...that' ឬ 'in such a way that' ប៉ុន្តែជារឿយៗស្តាប់ទៅផ្លូវការជាង សុភាពជាង ឬអាចប្រើសម្រាប់រិះគន់ដោយប្រយោល។",
                        "structure": "Subject + be + so + adjective/adverb + as to + base verb.",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "She was so kind as to help me with my homework."
                            },
                            {
                                "type": "correct",
                                "sentence": "He was so careless as to forget his passport."
                            },
                            {
                                "type": "correct",
                                "sentence": "They were so generous as to donate all the money."
                            },
                            {
                                "type": "correct",
                                "sentence": "Are you so foolish as to believe that story?"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "He was so quickly as to run away.",
                                "explanation": "Use an adjective with 'so' when followed by 'as to'. 'Quickly' is an adverb. Correct: 'He was so quick as to run away.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "She was so beautiful as to smiled.",
                                "explanation": "The verb after 'as to' must be in its base form. Correct: 'She was so beautiful as to smile.'"
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "Which phrase has a similar meaning to 'so...as to...'?",
                                "options": [
                                    { "text": "Although", "correct": false },
                                    { "text": "In order to", "correct": true },
                                    { "text": "Unless", "correct": false }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "He was so brave _______ (save) the child from the burning building.",
                                "correctAnswer": "as to save",
                                "explanation": "The structure 'so + adjective + as to + base verb' expresses the degree that leads to an action."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the beginning of the sentence with a logical completion using 'so...as to...':",
                                "pairs": [
                                    { "stem": "She was so polite", "correctOption": "as to open the door for me." },
                                    { "stem": "They were so shocked", "correctOption": "as to remain silent." },
                                    { "stem": "Are you so desperate", "correctOption": "as to accept that offer?" }
                                ]
                            }
                        ]
                    },
                    "If it hadn’t been for... (Hypothetical Past Cause)": {
                        "description": "“If it hadn’t been for…” is a powerful structure used to express a hypothetical past cause that either prevented something worse from happening or enabled something good. It means that without that person or thing, the situation would have been negative. It can also be expressed more formally with 'But for...'. In Khmer, this helps you say: គឺជាទម្រង់ដ៏មានឥទ្ធិពលដែលប្រើដើម្បីបង្ហាញពីមូលហេតុសម្មតិកម្មពីអតីតកាល ដែលបានការពារអ្វីមួយដែលអាក្រក់ជាងនេះមិនឱ្យកើតឡើង ឬបានធ្វើឱ្យអ្វីល្អកើតឡើង។ វាមានន័យថា បើគ្មានបុគ្គល ឬវត្ថុនោះទេ ស្ថានភាពនឹងអវិជ្ជមាន។",
                        "structure": "If it hadn’t been for + noun/pronoun, + result (would have + past participle).",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "If it hadn’t been for you, I would have failed."
                            },
                            {
                                "type": "correct",
                                "sentence": "If it hadn’t been for the rain, we would have gone hiking."
                            },
                            {
                                "type": "correct",
                                "sentence": "If it hadn’t been for her advice, I wouldn’t have passed the interview."
                            },
                            {
                                "type": "correct",
                                "sentence": "If it hadn’t been for my alarm, I would have missed my flight."
                            },
                            {
                                "type": "correct",
                                "sentence": "But for your quick thinking, the accident would have been much worse.(Formal alternative)" 
                            },
                            {
                                "type": "incorrect",
                                "sentence": "If it hadn’t been for he, I would be lost.",
                                "explanation": "After 'for', use an object pronoun or noun. Correct: 'If it hadn’t been for him, I would be lost.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "If it hadn’t been for my help, she pass the exam.",
                                "explanation": "The result clause must use 'would have + past participle' for hypothetical past outcomes. Correct: 'If it hadn’t been for my help, she wouldn’t have passed the exam.'"
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "What does 'If it hadn’t been for...' imply?",
                                "options": [
                                    { "text": "Something happened because of a specific cause.", "correct": false },
                                    { "text": "Something positive happened or something negative was avoided due to a specific cause.", "correct": true },
                                    { "text": "A general truth or habit.", "correct": false }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "If it hadn’t been for their warning, we _______ (enter) the dangerous area.",
                                "correctAnswer": "would have entered",
                                "explanation": "The structure indicates a hypothetical past action that would have occurred without the stated condition."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the 'If it hadn’t been for...' phrase with its logical result:",
                                "pairs": [
                                    { "stem": "If it hadn’t been for the map,", "correctOption": "we would have gotten lost." },
                                    { "stem": "If it hadn’t been for his intervention,", "correctOption": "the argument would have escalated." },
                                    { "stem": "If it hadn’t been for the emergency services,", "correctOption": "many lives would have been lost." }
                                ]
                            }
                        ]
                    },
                    "Too...to (Excessive Degree and Negative Result)": {
                        "description": "“Too...to” is a very natural and advanced structure used to express cause and effect, specifically when something is excessive and prevents an action from happening. It means 'so much that something is not possible'. In Khmer, this helps you say: គឺជាទម្រង់ធម្មជាតិ និងកម្រិតខ្ពស់ដែលប្រើដើម្បីបង្ហាញពីមូលហេតុ និងផលប៉ះពាល់ ជាពិសេសនៅពេលដែលអ្វីមួយលើសលប់ ហើយរារាំងសកម្មភាពមិនឱ្យកើតឡើង។",
                        "structure": "Subject + be + too + adjective/adverb + to + base verb.",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "I’m too tired to go out tonight."
                            },
                            {
                                "type": "correct",
                                "sentence": "She was too shy to speak in public."
                            },
                            {
                                "type": "correct",
                                "sentence": "It’s too late to start a movie now."
                            },
                            {
                                "type": "correct",
                                "sentence": "They were running too fast to catch."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "He is too tired that he can't go.",
                                "explanation": "The 'too...to' structure already implies the negative result, so 'that he can't' is redundant. Correct: 'He is too tired to go.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "The box was too heavy for lifting.",
                                "explanation": "The 'to' infinitive is needed after 'too + adjective/adverb'. If you want to specify who it's for, use 'for + pronoun/noun'. Correct: 'The box was too heavy to lift.' or 'The box was too heavy for him to lift.'"
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "What does 'too...to' express?",
                                "options": [
                                    { "text": "Sufficient degree for an action.", "correct": false },
                                    { "text": "Excessive degree preventing an action.", "correct": true },
                                    { "text": "A comparison between two qualities.", "correct": false }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "The coffee is too hot _______ (drink).",
                                "correctAnswer": "to drink",
                                "explanation": "The 'too...to' structure is completed with 'to' + base verb to show the preventing effect."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the 'too' phrase with its logical 'to' completion:",
                                "pairs": [
                                    { "stem": "She's too young", "correctOption": "to understand." },
                                    { "stem": "The problem was too complicated", "correctOption": "to solve easily." },
                                    { "stem": "He spoke too quietly", "correctOption": "to be heard clearly." }
                                ]
                            }
                        ]
                    },
                    
                },
                KeentoKeep:{
                          "No matter how / what / where / who / when / why...": {
                        "description": "This structure is used when you want to say something is true or will happen in any case, under any condition, or regardless of the situation. Think of it like saying: “It doesn’t matter how / what / where...”. In Khmer, this helps you say: ប្រើនៅពេលអ្នកចង់និយាយថាអ្វីមួយគឺពិត ឬនឹងកើតឡើងមិនថាស្ថិតក្នុងករណីណាក៏ដោយ ក្រោមលក្ខខណ្ឌណាមួយ ឬដោយមិនគិតពីស្ថានភាព។",
                        "structure": "No matter + question word (how/what/where/who/when/why) + subject + verb, main result.",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "No matter how tired I am, I always finish my work."
                            },
                            {
                                "type": "correct",
                                "sentence": "No matter what you say, I won't change my mind."
                            },
                            {
                                "type": "correct",
                                "sentence": "No matter where she goes, he follows her."
                            },
                            {
                                "type": "correct",
                                "sentence": "No matter who wins, we’ll celebrate together."
                            },
                            {
                                "type": "correct",
                                "sentence": "No matter when you call, I’ll answer."
                            },
                            {
                                "type": "correct",
                                "sentence": "No matter why he left, we still miss him."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "No matter what you doing, stop it now.",
                                "explanation": "The verb after the question word should be in the base form or conjugated correctly without auxiliary verbs unless it's a continuous tense: 'No matter what you do, stop it now.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "No matter how much difficult, I will try.",
                                "explanation": "The adjective 'difficult' should be used as an adverb 'difficult' or 'difficulty' to modify 'how': 'No matter how difficult it is, I will try.'"
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "Which phrase indicates that something will happen regardless of the situation?",
                                "options": [
                                    { "text": "Only if", "correct": false },
                                    { "text": "As long as", "correct": false },
                                    { "text": "No matter what", "correct": true }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "_______ how hard it rains, we will still go for a walk.",
                                "correctAnswer": "No matter",
                                "explanation": "'No matter' is used with 'how' to indicate that the intensity of the rain won't change the decision."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the 'no matter' phrase with its primary focus:",
                                "pairs": [
                                    { "stem": "No matter who", "correctOption": "Person" },
                                    { "stem": "No matter when", "correctOption": "Time" },
                                    { "stem": "No matter why", "correctOption": "Reason" }
                                ]
                            }
                        ]
                    },
                    "Inverted Conditionals with 'Had I...'": {
                        "description": "This is one of the fanciest and most advanced structures in English, a formal version of the Third Conditional ('If I had...'). You use it when you want to talk about an unreal past condition in a formal, elegant way. It sounds formal, elegant, and very fluent, often used in writing, speeches, debates, or professional situations. In Khmer, this helps you say: នេះជាទម្រង់មួយដែលស៊ីជម្រៅ និងកម្រិតខ្ពស់បំផុតក្នុងភាសាអង់គ្លេស ដែលជាទម្រង់ផ្លូវការនៃលក្ខខណ្ឌប្រភេទទីបី ('If I had...')។ អ្នកប្រើវាពេលអ្នកចង់និយាយអំពីស្ថានភាពអតីតកាលដែលមិនពិត តាមរបៀបផ្លូវការ និងឆើតឆាយ។",
                        "structure": "Had + subject + past participle, + subject + would have + past participle. (Same meaning as: If + subject + had + past participle, ...)",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "Had I known about the meeting, I would have come."
                            },
                            {
                                "type": "correct",
                                "sentence": "Had she studied harder, she would have passed."
                            },
                            {
                                "type": "correct",
                                "sentence": "Had they left earlier, they wouldn’t have missed the train."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "Had I know, I would have gone."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "Had he told me, he would have come."
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "When is 'Had I...' typically used?",
                                "options": [
                                    { "text": "For real possibilities in the future.", "correct": false },
                                    { "text": "For hypothetical situations in the present.", "correct": false },
                                    { "text": "For unreal past conditions in a formal way.", "correct": true }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "Had he _______ (arrive) on time, he would have caught the flight.",
                                "correctAnswer": "arrived",
                                "explanation": "After 'Had + subject', the verb must be in the past participle form."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the inverted conditional start with its likely completion:",
                                "pairs": [
                                    { "stem": "Had I gone there,", "correctOption": "I would have seen it." },
                                    { "stem": "Had she told me,", "correctOption": "I would have understood." },
                                    { "stem": "Had we planned it,", "correctOption": "we would have succeeded." }
                                ]
                            }
                        ]
                    },
                     "Such...that (Strong Cause-Effect)": {
                        "description": "“Such...that” is a powerful and natural way to describe strong results or consequences. You use it when you want to say something is true or will happen in any case, under any condition, or regardless of the situation, similar to saying “It doesn’t matter how / what / where...”. In Khmer, this helps you say: គឺជាវិធីដ៏មានប្រសិទ្ធភាព និងធម្មជាតិមួយដើម្បីពិពណ៌នាអំពីលទ្ធផល ឬផលវិបាកខ្លាំងៗ។ អ្នកប្រើវាពេលអ្នកចង់និយាយថាអ្វីមួយគឺពិត ឬនឹងកើតឡើងមិនថាស្ថិតក្នុងករណីណាក៏ដោយ ក្រោមលក្ខខណ្ឌណាមួយ ឬដោយមិនគិតពីស្ថានភាព។",
                        "structure": "Such + (adjective) + noun + that + result. OR Such + a/an + adjective + singular countable noun + that + result.",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "It was such a beautiful day that we went to the beach."
                            },
                            {
                                "type": "correct",
                                "sentence": "She’s such a kind person that everyone loves her."
                            },
                            {
                                "type": "correct",
                                "sentence": "They told such interesting stories that we didn’t want to leave."
                            },
                            {
                                "type": "correct",
                                "sentence": "It was such bad weather that they canceled the flight."
                            },
                            {
                                "type": "correct",
                                "sentence": "She is such a quick speaker that I can’t hear clearly."
                            },
                            {
                                "type": "correct",
                                "sentence": "There was such a lot of water that the bottle overflowed."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "It was such happy that I smiled.",
                                "explanation": "You cannot use 'such' directly with an adjective without a noun. Use 'so' instead: 'It was so happy that I smiled.' Or with a noun: 'It was such a happy moment that I smiled.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "He has such many friends that he never feels alone.",
                                "explanation": "With 'many' or 'much', you typically use 'so': 'He has so many friends that he never feels alone.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "She is such a quickly speak that I can't heard clearly.",
                                "explanation": "'Quickly' is an adverb; use 'quick speaker' (adjective + noun). Also, 'can't heard' should be 'can't hear' (modal verb + base verb)."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "He is such much water that the bottle overflowing.",
                                "explanation": "Use 'such a lot of' with uncountable nouns. The verb 'overflowing' should be past tense 'overflowed' to match the result."
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "When do you typically use 'such...that'?",
                                "options": [
                                    { "text": "To describe a moderate cause and effect.", "correct": false },
                                    { "text": "To show a strong cause-effect relationship with a noun.", "correct": true },
                                    { "text": "To compare two unrelated items.", "correct": false }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "It was _______ a difficult exam _______ many students failed.",
                                "correctAnswer": "such ... that",
                                "explanation": "'Such...that' is used with 'a difficult exam' to show the strong result."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the phrase start with its correct completion using 'such...that':",
                                "pairs": [
                                    { "stem": "It was such a loud noise", "correctOption": "that I couldn't hear myself think." },
                                    { "stem": "They had such little time", "correctOption": "that they couldn't finish the project." },
                                    { "stem": "She is such an inspiring leader", "correctOption": "that everyone respects her." }
                                ]
                            }
                        ]
                    },
                     "Were I to... (Formal Conditional with Inversion)": {
                        "description": "“Were I to...” is an elegant and advanced structure, a formal conditional with inversion. You use it when you want to talk about an imaginary future situation (like “If I were to…”), but you want it to sound more formal or stylish. This structure makes your English sound advanced, polished, and confident, and is common in writing, debates, and public speaking. In Khmer, this helps you say: គឺជាទម្រង់បែបបទ និងកម្រិតខ្ពស់មួយ ដែលជាលក្ខខណ្ឌផ្លូវការជាមួយនឹងការបញ្ច្រាស។ អ្នកប្រើវាពេលអ្នកចង់និយាយអំពីស្ថានភាពអនាគតដែលស្រមៃ (ដូចជា 'If I were to…') ប៉ុន្តែអ្នកចង់ឱ្យវាស្តាប់ទៅមានលក្ខណៈផ្លូវការ ឬទាន់សម័យជាង។",
                        "structure": "Were + subject + to + base verb, subject + would + base verb. (This is an inversion of: If + subject + were to + base verb...)",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "Were I to win the lottery, I would travel the world."
                            },
                            {
                                "type": "correct",
                                "sentence": "Were he to ask me, I would help him."
                            },
                            {
                                "type": "correct",
                                "sentence": "Were we to leave now, we could catch the train."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "Were I to won, I would celebrate.",
                                "explanation": "After 'to', you must use the base form of the verb, not the past participle. Correct: 'Were I to win, I would celebrate.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "Were she to be rich, she would buy a mansion.",
                                "explanation": "While grammatically possible in some contexts, for 'were to' it's usually 'Were she to become rich'. Or if expressing a hypothetical present state, it would be 'If she were rich' or 'Were she rich'."
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "The structure 'Were I to...' is primarily used for:",
                                "options": [
                                    { "text": "Real past events.", "correct": false },
                                    { "text": "Formal, imaginary future situations.", "correct": true },
                                    { "text": "General truths.", "correct": false }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "Were she _______ (know) the truth, she would be very upset.",
                                "correctAnswer": "to know",
                                "explanation": "The structure 'Were + subject + to + base verb' is required for this formal conditional."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the inverted conditional start with its logical continuation:",
                                "pairs": [
                                    { "stem": "Were I to receive an offer,", "correctOption": "I would consider it carefully." },
                                    { "stem": "Were they to arrive late,", "correctOption": "we would start without them." },
                                    { "stem": "Were he to apologize,", "correctOption": "I would forgive him." }
                                ]
                            }
                        ]
                    },
                     "So long as... (Condition)": {
                        "description": "“So long as...” means “only if” or “on the condition that.” You use it to say something will happen, but only if a specific condition is met. It's similar to 'as long as' but can sound a bit more formal or emotional. In Khmer, this helps you say: មានន័យថា 'លុះត្រាតែ' ឬ 'ក្នុងលក្ខខណ្ឌថា'។ អ្នកប្រើវាដើម្បីនិយាយថាអ្វីមួយនឹងកើតឡើង ប៉ុន្តែលុះត្រាតែមានលក្ខខណ្ឌជាក់លាក់ណាមួយត្រូវបានបំពេញ។",
                        "structure": "So long as + subject + verb, result clause.",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "You can stay here so long as you keep quiet."
                            },
                            {
                                "type": "correct",
                                "sentence": "So long as you work hard, you will succeed."
                            },
                            {
                                "type": "correct",
                                "sentence": "I’ll support you so long as you’re honest with me."
                            },
                            {
                                "type": "correct",
                                "sentence": "She will forgive him, so long as he apologizes."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "So long as you will come, I happy.",
                                "explanation": "After 'so long as', use the Simple Present tense for the condition. The result clause also needs proper verb tense: 'So long as you come, I will be happy.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "She can help so long as he asked.",
                                "explanation": "The tenses are mismatched. If the condition is present, the result should match. Correct: 'She can help so long as he asks.' (If it's about a past condition, 'She would have helped so long as he had asked.')"
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "What is the meaning of 'So long as...'?",
                                "options": [
                                    { "text": "Because", "correct": false },
                                    { "text": "Unless", "correct": false },
                                    { "text": "Only if / On the condition that", "correct": true }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "You can borrow my car _______ you promise to drive carefully.",
                                "correctAnswer": "so long as",
                                "explanation": "'So long as' introduces the condition for borrowing the car."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the condition with its likely result:",
                                "pairs": [
                                    { "stem": "So long as you study,", "correctOption": "you will pass the exam." },
                                    { "stem": "So long as it doesn't rain,", "correctOption": "we can have the picnic." },
                                    { "stem": "So long as she arrives on time,", "correctOption": "we won't miss the show." }
                                ]
                            }
                        ]
                    },
                     "Suppose / Supposing that... (Hypothetical Scenarios)": {
                        "description": "“Suppose that” or “Supposing that” means “What if...”. You use it to imagine a situation or talk about a hypothetical or possible scenario. It's like a conditional ('If... then...') but can sound a little more imaginative or speculative. This structure is often used in spoken English, brainstorming, and storytelling. It can be used with any conditional type (real or unreal). In Khmer, this helps you say: មានន័យថា 'ចុះបើ...?'។ អ្នកប្រើវាដើម្បីស្រមៃស្ថានភាព ឬនិយាយអំពីសេណារីយ៉ូសម្មតិកម្ម ឬអាចកើតឡើង។",
                        "structure": "Suppose (that) + subject + verb, result. OR Supposing (that) + subject + verb, result.",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "Suppose you lost your phone — what would you do?"
                            },
                            {
                                "type": "correct",
                                "sentence": "Supposing it rains tomorrow, will we cancel the trip?"
                            },
                            {
                                "type": "correct",
                                "sentence": "Suppose she never arrives — should we start without her?"
                            },
                            {
                                "type": "correct",
                                "sentence": "Supposing you were the president, what would you change?"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "Suppose you had a million dollars, you would bought a house.",
                                "explanation": "The result clause of the conditional needs the base form of the verb after 'would'. Correct: 'Suppose you had a million dollars, you would buy a house.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "Supposing he miss the train, what he will do?",
                                "explanation": "The verb in the 'supposing' clause should be correctly conjugated for the tense (Simple Past for hypothetical future, or Simple Present for real future possibility). Also, the question structure in the result clause needs an auxiliary verb: 'Supposing he missed the train, what would he do?' (hypothetical) or 'Supposing he misses the train, what will he do?' (real possibility)."
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "What is the main function of 'Suppose that...'?",
                                "options": [
                                    { "text": "To state a fact.", "correct": false },
                                    { "text": "To ask for an explanation.", "correct": false },
                                    { "text": "To introduce a hypothetical or speculative scenario.", "correct": true }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "_______ you win the competition, what will you do with the prize money?",
                                "correctAnswer": "Suppose / Supposing that",
                                "explanation": "Both 'Suppose' and 'Supposing that' can introduce a hypothetical future situation."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the 'Suppose/Supposing' clause with a suitable result:",
                                "pairs": [
                                    { "stem": "Suppose you could fly,", "correctOption": "where would you go first?" },
                                    { "stem": "Supposing she forgot her passport,", "correctOption": "she couldn't travel." },
                                    { "stem": "Suppose they finish early,", "correctOption": "they can leave." }
                                ]
                            }
                        ]
                    },
                    "Lest (Negative Purpose or Warning)": {
                        "description": "“Lest” is a formal, rare, and very elegant structure used mostly in writing, speeches, and literature. It means 'so that...not' or 'to avoid' something bad happening. It expresses a fear, precaution, or warning, and is always followed by the base form of a verb (without 'should' or 'to'). In Khmer, this helps you say: គឺជាទម្រង់ផ្លូវការ កម្រប្រើ និងឆើតឆាយបំផុត ដែលប្រើជាទូទៅក្នុងការសរសេរ ការថ្លែងសុន្ទរកថា និងអក្សរសិល្ប៍។ វាមានន័យថា 'ដើម្បីកុំឱ្យ...' ឬ 'ដើម្បីជៀសវាង' អ្វីអាក្រក់កើតឡើង។",
                        "structure": "Main clause + lest + subject + base verb.",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "She left early lest she miss the train."
                            },
                            {
                                "type": "correct",
                                "sentence": "Take an umbrella lest it rain."
                            },
                            {
                                "type": "correct",
                                "sentence": "He spoke quietly lest anyone hear him."
                            },
                            {
                                "type": "correct",
                                "sentence": "I write notes lest I forget what I study."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "Lest she doesn't forget, I reminded her.",
                                "explanation": "Do not use 'doesn't' or other negative auxiliary verbs with 'lest'. The 'lest' itself implies negation. Correct: 'Lest she forget, I reminded her.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "They hurried lest they would be late.",
                                "explanation": "Do not use 'would' or 'should' with 'lest'. Use the base form of the verb. Correct: 'They hurried lest they be late.'"
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "What is the meaning of 'lest'?",
                                "options": [
                                    { "text": "Because", "correct": false },
                                    { "text": "To avoid something bad happening", "correct": true },
                                    { "text": "If", "correct": false }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "He wore a mask _______ he (catch) the virus.",
                                "correctAnswer": "lest ... catch",
                                "explanation": "'Lest' is followed by the base form of the verb to express a negative purpose or warning."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the action with the negative outcome it tries to avoid using 'lest':",
                                "pairs": [
                                    { "stem": "Study hard,", "correctOption": "lest you fail the exam." },
                                    { "stem": "Be careful,", "correctOption": "lest you fall." },
                                    { "stem": "Listen closely,", "correctOption": "lest you miss the instructions." }
                                ]
                            }
                        ]
                    },
                    "Only if... (Strict or Exclusive Conditions)": {
                        "description": "“Only if” means “just in case this one condition is true.” The action or result depends entirely on that specific condition. This structure is used to express strict or exclusive conditions. In Khmer, this helps you say: មានន័យថា 'លុះត្រាតែមានលក្ខខណ្ឌតែមួយនេះជាការពិត'។ សកម្មភាព ឬលទ្ធផលគឺអាស្រ័យទាំងស្រុងលើលក្ខខណ្ឌនោះ។",
                        "structure": "Normal: Only if + subject + verb, result clause. OR Formal/Inverted: Only if + condition + auxiliary + subject + verb + ...",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "Only if it stops raining, we will go outside."
                            },
                            {
                                "type": "correct",
                                "sentence": "Only if you study hard, will you pass the test."
                            },
                            {
                                "type": "correct",
                                "sentence": "Only if he apologizes, will she forgive him."
                            },
                            {
                                "type": "correct",
                                "sentence": "Only if I finish my work, can I go out."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "Only if you practice, you will improve.",
                                "explanation": "For formal inversion, an auxiliary verb must come before the subject in the result clause. Correct: 'Only if you practice, will you improve.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "Only if she would call, I go.",
                                "explanation": "The 'only if' clause uses regular present or past tenses, not modal verbs like 'would'. Also, the main clause needs correct tense/modals. Correct: 'Only if she calls, I will go.' or 'Only if she called, I would go.'"
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "What does 'Only if...' emphasize?",
                                "options": [
                                    { "text": "A general truth.", "correct": false },
                                    { "text": "A condition that is absolutely necessary for the result.", "correct": true },
                                    { "text": "A choice between two options.", "correct": false }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "Only if you wear a helmet, _______ (ride) your bike.",
                                "correctAnswer": "can you ride",
                                "explanation": "This is a formal inversion. 'Can' is the auxiliary verb that comes before the subject 'you'."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the 'Only if' condition with its suitable result:",
                                "pairs": [
                                    { "stem": "Only if it's an emergency,", "correctOption": "should you call this number." },
                                    { "stem": "Only if you have an invitation,", "correctOption": "can you enter the party." },
                                    { "stem": "Only if they collaborate,", "correctOption": "will they finish the project on time." }
                                ]
                            }
                        ]
                    },
                    "By the time... (Sequencing of Events)": {
                        "description": "“By the time…” means 'when something happens, something else will already have happened.' It's excellent for clearly discussing the order or timing of two actions, especially when the second action is already complete or nearly complete by the time the first action occurs. In Khmer, this helps you say: មានន័យថា 'នៅពេលដែលអ្វីមួយកើតឡើង អ្វីផ្សេងទៀតនឹងបានកើតឡើងរួចហើយ'។ វាល្អសម្រាប់និយាយអំពីលំដាប់លំដោយ ឬពេលវេលានៃសកម្មភាពពីរ។",
                        "structure": "Past: By the time + Simple Past, Past Perfect. OR Future: By the time + Present Simple, Future Perfect.",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "By the time I arrived, they had already left."
                            },
                            {
                                "type": "correct",
                                "sentence": "By the time she finished dinner, the movie had started."
                            },
                            {
                                "type": "correct",
                                "sentence": "By the time you get home, I will have cooked dinner."
                            },
                            {
                                "type": "correct",
                                "sentence": "By the time we reach the station, the train will have left."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "By the time I will arrive, they had left.",
                                "explanation": "In the 'By the time' clause (when talking about the future), use the Present Simple, not Future Simple. Correct: 'By the time I arrive, they will have left.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "By the time she finish, the show will have begun.",
                                "explanation": "For the future perfect construction, the 'By the time' clause should be in the Present Simple tense, and the main clause needs 'will have + past participle'. Correct: 'By the time she finishes, the show will have begun.'"
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "If the 'By the time' clause is in the Past Simple, what tense is typically used in the main clause?",
                                "options": [
                                    { "text": "Present Perfect", "correct": false },
                                    { "text": "Past Perfect", "correct": true },
                                    { "text": "Future Simple", "correct": false }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "By the time I graduate, I _______ (study) English for ten years.",
                                "correctAnswer": "will have studied",
                                "explanation": "This refers to an action completed before a future point, requiring the Future Perfect tense."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the 'By the time' clause with the appropriate main clause:",
                                "pairs": [
                                    { "stem": "By the time the guests arrived,", "correctOption": "we had already eaten." },
                                    { "stem": "By the time you wake up,", "correctOption": "I will have finished my work." },
                                    { "stem": "By the time she started her new job,", "correctOption": "she had moved to a new city." }
                                ]
                            }
                        ]
                    },
                     "As long as... (Condition)": {
                        "description": "“As long as” introduces a condition. It means something will happen only if another thing is true. It's similar to 'so long as' and 'provided that', but 'as long as' is generally more neutral in tone. In Khmer, this helps you say: បង្ហាញលក្ខខណ្ឌ។ វាមានន័យថា អ្វីមួយនឹងកើតឡើងលុះត្រាតែមានលក្ខខណ្ឌមួយទៀតជាការពិត។",
                        "structure": "Main clause + as long as + condition. OR As long as + condition, + result.",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "You can stay here as long as you’re quiet."
                            },
                            {
                                "type": "correct",
                                "sentence": "As long as you study, you will pass the exam."
                            },
                            {
                                "type": "correct",
                                "sentence": "I’ll forgive you as long as you tell the truth."
                            },
                            {
                                "type": "correct",
                                "sentence": "As long as she calls me, I won’t worry."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "As long as he will come, I happy.",
                                "explanation": "After 'as long as', use the Simple Present tense for the condition. The result clause also needs proper verb tense: 'As long as he comes, I will be happy.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "She can help as long as he asking.",
                                "explanation": "The verb after 'as long as' should be in the base form or correctly conjugated Simple Present. Correct: 'She can help as long as he asks.'"
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "What does 'As long as...' primarily express?",
                                "options": [
                                    { "text": "A duration of time.", "correct": false },
                                    { "text": "A condition for something to happen.", "correct": true },
                                    { "text": "A comparison of two things.", "correct": false }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "You can use my car _______ you fill up the tank.",
                                "correctAnswer": "as long as",
                                "explanation": "'As long as' introduces the condition for using the car."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the 'As long as' condition with its suitable result:",
                                "pairs": [
                                    { "stem": "As long as you are honest,", "correctOption": "I will trust you." },
                                    { "stem": "As long as it's warm,", "correctOption": "we can eat outside." },
                                    { "stem": "As long as they practice daily,", "correctOption": "they will improve quickly." }
                                ]
                            }
                        ]
                    },
                     "Much as... (Contrast)": {
                        "description": "“Much as” is a formal and elegant way to express contrast or contradiction, similar to 'although' or 'even though'. It introduces something you feel strongly about or a significant fact, which then contrasts with another truth or action. This structure adds sophistication and emotional depth to your contrasts, and is common in formal speech, writing, essays, arguments, or storytelling. In Khmer, this helps you say: គឺជាវិធីផ្លូវការ និងឆើតឆាយមួយដើម្បីបង្ហាញពីភាពផ្ទុយគ្នា ឬភាពខុសគ្នា ដូចជា 'although' ឬ 'even though'។ វាបង្ហាញពីអ្វីមួយដែលអ្នកមានអារម្មណ៍ខ្លាំង ឬការពិតសំខាន់ ដែលផ្ទុយពីការពិត ឬសកម្មភាពផ្សេងទៀត។",
                        "structure": "Much as + subject + verb, contrasting clause.",
                        "examples": [
                            {
                                "type": "correct",
                                "sentence": "Much as I like chocolate, I try not to eat it every day."
                            },
                            {
                                "type": "correct",
                                "sentence": "Much as he admires her, he disagrees with her decision."
                            },
                            {
                                "type": "correct",
                                "sentence": "Much as they wanted to stay, they had to leave early."
                            },
                            {
                                "type": "correct",
                                "sentence": "Much as we hoped for sunshine, it kept raining."
                            },
                            {
                                "type": "incorrect",
                                "sentence": "Much as she is tired, but she continues working.",
                                "explanation": "Do not use 'but' with 'much as'. The contrast is already implied. Correct: 'Much as she is tired, she continues working.'"
                            },
                            {
                                "type": "incorrect",
                                "sentence": "Much as I wanted to go, I cannot.",
                                "explanation": "The tenses in the main clause should align. If the desire was in the past, the inability is also likely past or ongoing from that point. Correct: 'Much as I wanted to go, I couldn't.' or 'Much as I want to go, I cannot.'"
                            }
                        ],
                        "quizQuestions": [
                            {
                                "type": "multiple-choice",
                                "question": "What is 'Much as...' used to express?",
                                "options": [
                                    { "text": "Cause and effect.", "correct": false },
                                    { "text": "A strong contrast or contradiction.", "correct": true },
                                    { "text": "A sequence of events.", "correct": false }
                                ]
                            },
                            {
                                "type": "fill-in-blank",
                                "question": "_______ he disliked public speaking, he accepted the challenge.",
                                "correctAnswer": "Much as",
                                "explanation": "'Much as' introduces a strong feeling or fact that is then contrasted by the action taken."
                            },
                            {
                                "type": "match-the-words",
                                "question": "Match the 'Much as' clause with its logical contrasting result:",
                                "pairs": [
                                    { "stem": "Much as I appreciate your offer,", "correctOption": "I must decline." },
                                    { "stem": "Much as she tried her best,", "correctOption": "she couldn't solve the puzzle." },
                                    { "stem": "Much as they love their home,", "correctOption": "they decided to move to a new city." }
                                ]
                            }
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
                        { sentence: "The weather is beautiful today.", khmer: "អាកាសធាតុថ្ងៃនេះស្រស់ស្អាតណាស់។" },
                        { sentence: "I need to buy some groceries.", khmer: "ខ្ញុំត្រូវការទិញម្ហូបអាហារតិចតួច។" },
                        { sentence: "Can you help me with my homework?", khmer: "អ្នកអាចជួយខ្ញុំធ្វើការផ្ទះបានទេ?" },
                        { sentence: "I enjoy reading books in my free time.", khmer: "ខ្ញុំរីករាយក្នុងការអានសៀវភៅនៅពេលមានពេលទំនេរ។" },
                        { sentence: "Let's meet at the coffee shop later.", khmer: "មកជួបគ្នានៅហាងកាហ្វេក្រោយនេះ។" },
                        { sentence: "I have a meeting at 3 PM.", khmer: "ខ្ញុំមានការប្រជុំម៉ោង ៣ រសៀល។" },
                        { sentence: "She is very talented in music.", khmer: "នាងមានទេពកោសល្យខ្ពស់ក្នុងវិស័យតន្ត្រី។" },
                        { sentence: "I will call you back later.", khmer: "ខ្ញុំនឹងហៅអ្នកវិញក្រោយនេះ។" },
                        { sentence: "I need to finish this project by Friday.", khmer: "ខ្ញុំត្រូវបញ្ចប់គម្រោងនេះមុនថ្ងៃសុក្រ។" },
                        { sentence: "He is a great friend.", khmer: "គាត់ជាមិត្តភក្តិដ៏អស្ចារ្យ។" },
                        { sentence: "I love traveling to new places.", khmer: "ខ្ញុំស្រលាញ់ការធ្វើដំណើរទៅកាន់កន្លែងថ្មីៗ។" },
                        { sentence: "She is studying hard for her exams.", khmer: "នាងកំពុងសិក្សាខ្លាំងសម្រាប់ការប្រឡងរបស់នាង។" },
                        { sentence: "We should go to the beach this weekend.", khmer: "ពួកយើងគួរតែទៅឆ្នេរខ្សាច់នៅចុងសប្តាហ៍នេះ។" },
                        { sentence: "Would you like to try it on? = Do you want to wear it first? (for clothes)", khmer: "" },
                        { sentence: "I need to buy a new pair of shoes.", khmer: "ខ្ញុំត្រូវការទិញស្បែកជើងថ្មីមួយគូ។" },
                        { sentence: "Can you recommend a good restaurant?", khmer: "អ្នកអាចផ្តល់អនុសាសន៍អំពីភោជនីយដ្ឋានល្អមួយបានទេ?" },
                        { sentence: "I will send you the details by email.", khmer: "ខ្ញុំនឹងផ្ញើព័ត៌មានលម្អិតទៅអ្នកតាមអ៊ីមែល។" },
                        { sentence: "She is very passionate about her work.", khmer: "នាងមានចំណង់ចំណូលចិត្តខ្ពស់ចំពោះការងាររបស់នាង។" },
                        { sentence: "Let's go for a walk in the park.", khmer: "មកដើរលេងនៅសួនច្បារទៅ។" },
                        { sentence: "I need to charge my phone.", khmer: "ខ្ញុំត្រូវការបញ្ចូលថ្មទូរស័ព្ទរបស់ខ្ញុំ។" },
                        { sentence: "Can you please lower your voice?", khmer: "សូមអ្នកបន្ថយសំឡេងរបស់អ្នកបានទេ?" },
                        { sentence: "I will be there in 10 minutes.", khmer: "ខ្ញុំនឹងទៅដល់ទីនោះក្នុងរយៈពេល ១០ នាទី។" },
                        { sentence: "She is very good at math.", khmer: "នាងមានជំនាញខ្ពស់ក្នុងវិស័យគណិតវិទ្យា។" },
                        { sentence: "I need to get some rest.", khmer: "ខ្ញុំត្រូវការសម្រាកបន្តិច។" },
                        { sentence: "I didn’t catch that. = I didn’t hear or understand", khmer: "" },
                        { sentence: "That’s okay. / No problem. / It’s alright. = polite reply", khmer: "" },
                        { sentence: "Sure. / Of course. / No problem. = polite replies", khmer: "" },
                        { sentence: "Be careful! = used after accidents", khmer: "" },
                        { sentence: "I have to go now. = I need to leave.", khmer: "" },
                        { sentence: "Sorry, could you repeat that, please?", khmer: "" },
                        { sentence: "Could you say that again, please?", khmer: "" },
                        { sentence: "Let’s hurry = move quickly", khmer: "" },
                        { sentence: "Almost = nearly (e.g. It’s almost 6)", khmer: "" },
                        { sentence: "Let me help you / Let me show you = offering help", khmer: "" },
                        { sentence: "Thanks for your help! / Okay, thanks! = polite responses", khmer: "" },
                        { sentence: "Let me check. / Maybe we can ask. / I’ll find out. = ways to find the answer", khmer: "" },
                        { sentence: "I’m not sure = I don’t know exactly", khmer: "" },
                       

                    ],
                    "Idioms": [
                        { sentence: "It's raining cats and dogs.", khmer: "ភ្លៀងខ្លាំងណាស់។", explanation: "Meaning: Raining very heavily." },
                        { sentence: "Break a leg!", khmer: "សូមសំណាងល្អ!", explanation: "Meaning: Good luck! (Used especially in theater)." }
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
                    ]
                },

                listenAndType: {
                        "A1. Would you mind...?": [
                            {
                                sentence: "Would you mind sending me the report by noon?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​ផ្ញើ​របាយការណ៍​មក​ខ្ញុំ​នៅ​ពេល​ថ្ងៃត្រង់​ទេ? <br> Sentence: Would you mind ... me the ... by noon? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                answer: "Would you mind sending me the report by noon?"
                            },
                            {
                                sentence: "Would you mind reviewing this document?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​ពិនិត្យ​មើល​ឯកសារ​នេះ​ទេ? <br> Sentence: Would you mind ... this ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                answer: "Would you mind reviewing this document?"
                            },
                            {
                                sentence: "Would you mind if I used the conference room at 3?",
                                khmer: "Khmer: តើ​អ្នក​នឹង​គិត​យ៉ាង​ណា​បើ​ខ្ញុំ​ប្រើ​បន្ទប់​ប្រជុំ​នៅ​ម៉ោង 3? <br> Sentence: Would you mind if I ... the ... at 3? <br>រចនាសម្ព័ន្ធ៖ Would you mind if I + past verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                answer: "Would you mind if I used the conference room at 3?"
                            },
                            {
                                sentence: "Would you mind helping me with this task?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​ជួយ​ខ្ញុំ​ក្នុង​កិច្ចការ​នេះ​ទេ? <br> Sentence: Would you mind ... me with this ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                answer: "Would you mind helping me with this task?"
                            },
                            {
                                sentence: "Would you mind closing the window?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​បិទ​បង្អួច​ទេ? <br> Sentence: Would you mind ... the ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                answer: "Would you mind closing the window?"
                            },
                            {
                                sentence: "Would you mind if I sat here?",
                                khmer: "Khmer: តើ​អ្នក​នឹង​គិត​យ៉ាង​ណា​បើ​ខ្ញុំ​អង្គុយ​ទីនេះ? <br> Sentence: Would you mind if I ... here? <br>រចនាសម្ព័ន្ធ៖ Would you mind if I + past verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                answer: "Would you mind if I sat here?"
                            },
                            {
                                sentence: "Would you mind explaining that again?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​ពន្យល់​រឿង​នោះ​ម្តង​ទៀត​ទេ? <br> Sentence: Would you mind ... that again? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                answer: "Would you mind explaining that again?"
                            },
                            {
                                sentence: "Would you mind if I borrowed your pen?",
                                khmer: "Khmer: តើ​អ្នក​នឹង​គិត​យ៉ាង​ណា​បើ​ខ្ញុំ​ខ្ចី​ប៊ិច​របស់​អ្នក? <br> Sentence: Would you mind if I ... your ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind if I + past verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                answer: "Would you mind if I borrowed your pen?"
                            },
                            {
                                sentence: "Would you mind holding this for a moment?",
                                khmer: "Khmer: តើ​អ្នក​ចង់​កាន់​របស់​នេះ​មួយ​ភ្លែត​ទេ? <br> Sentence: Would you mind ... this for a ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind + -ing verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                answer: "Would you mind holding this for a moment?"
                            },
                            {
                                sentence: "Would you mind if I left early today?",
                                khmer: "Khmer: តើ​អ្នក​នឹង​គិត​យ៉ាង​ណា​បើ​ខ្ញុំ​ចេញ​ទៅ​មុន​ថ្ងៃ​នេះ? <br> Sentence: Would you mind if I ... early ...? <br>រចនាសម្ព័ន្ធ៖ Would you mind if I + past verb...? <br> Meaning: (= You're making a polite request. It sounds more respectful than direct commands.)",
                                answer: "Would you mind if I left early today?"
                            }
                        ],
                    "A2. Polite Requests / Appreciations": [
                            {
                                sentence: "I’d appreciate it if you could send me the final draft by Friday.",
                                answer: "I’d appreciate it if you could send me the final draft by Friday.",
                                khmer: "Khmer: ខ្ញុំសូមអរគុណប្រសិនបើអ្នកអាចផ្ញើឯកសារចុងក្រោយមកខ្ញុំត្រឹមថ្ងៃសុក្រ។ <br> Sentence: I’d appreciate it if you could ... me the final draft by .... <br>រចនាសម្ព័ន្ធ៖ I'd appreciate it if you could + base verb + object + time phrase. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            {
                                sentence: "I’d appreciate it if you could confirm your attendance.",
                                answer: "I’d appreciate it if you could confirm your attendance.",
                                khmer: "Khmer: ខ្ញុំសូមអរគុណប្រសិនបើអ្នកអាចបញ្ជាក់ការចូលរួមរបស់អ្នក។ <br> Sentence: I’d appreciate it if you could ... your .... <br>រចនាសម្ព័ន្ធ៖ I'd appreciate it if you could + base verb + object. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            {
                                sentence: "I’d appreciate it if you could review the attached file.",
                                answer: "I’d appreciate it if you could review the attached file.",
                                khmer: "Khmer: ខ្ញុំសូមអរគុណប្រសិនបើអ្នកអាចពិនិត្យមើលឯកសារភ្ជាប់។ <br> Sentence: I’d appreciate it if you could ... the attached .... <br>រចនាសម្ព័ន្ធ៖ I'd appreciate it if you could + base verb + object. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            {
                                sentence: "I’d appreciate it if you could keep me updated on the progress.",
                                answer: "I’d appreciate it if you could keep me updated on the progress.",
                                khmer: "Khmer: ខ្ញុំសូមអរគុណប្រសិនបើអ្នកអាចបន្តផ្តល់ព័ត៌មានថ្មីៗអំពីវឌ្ឍនភាពដល់ខ្ញុំ។ <br> Sentence: I’d appreciate it if you could ... me updated on the .... <br>រចនាសម្ព័ន្ធ៖ I'd appreciate it if you could + keep + object + updated on + noun. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            // New sentences added below
                            {
                                sentence: "I would be grateful if you could provide more details.",
                                answer: "I would be grateful if you could provide more details.",
                                khmer: "Khmer: ខ្ញុំនឹងដឹងគុណប្រសិនបើអ្នកអាចផ្តល់ព័ត៌មានលម្អិតបន្ថែម។ <br> Sentence: I would be grateful if you could ... more .... <br>រចនាសម្ព័ន្ធ៖ I would be grateful if you could + base verb + object. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            {
                                sentence: "I would be grateful if you could assist us with this task.",
                                answer: "I would be grateful if you could assist us with this task.",
                                khmer: "Khmer: ខ្ញុំនឹងដឹងគុណប្រសិនបើអ្នកអាចជួយពួកយើងក្នុងការងារនេះ។ <br> Sentence: I would be grateful if you could ... us with this .... <br>រចនាសម្ព័ន្ធ៖ I would be grateful if you could + base verb + object + with + noun. <br> Meaning: (= a polite and formal way to ask someone to do something)"
                            },
                            {
                                sentence: "Please let me know if you’re available to discuss this further.",
                                answer: "Please let me know if you’re available to discuss this further.",
                                khmer: "Khmer: សូមប្រាប់ខ្ញុំផងប្រសិនបើអ្នកទំនេរដើម្បីពិភាក្សារឿងនេះបន្ត។ <br> Sentence: Please let me know if you’re available to ... this .... <br>រចនាសម្ព័ន្ធ៖ Please let me know if you're available to + base verb + object + adverb. <br> Meaning: (= a polite way to ask about availability or to request information)"
                            },
                            {
                                sentence: "Please let me know if you’re available to join the meeting.",
                                answer: "Please let me know if you’re available to join the meeting.",
                                khmer: "Khmer: សូមប្រាប់ខ្ញុំផងប្រសិនបើអ្នកទំនេរដើម្បីចូលរួមការប្រជុំ។ <br> Sentence: Please let me know if you’re available to ... the .... <br>រចនាសម្ព័ន្ធ៖ Please let me know if you're available to + base verb + object. <br> Meaning: (= a polite way to ask about availability or to request information)"
                            }
                        ],
                    
                      "✅ “Much as”": [
                        {
                            sentence: "Much as",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>Much as I love ...., I can't eat it .....<br>ថ្វីត្បិតតែខ្ញុំស្រឡាញ់សូកូឡាខ្លាំងណាស់ក៏ដោយ ក៏ខ្ញុំមិនអាចញ៉ាំវាជារៀងរាល់ថ្ងៃបានដែរ។",
                            answer: "Much as I love chocolate, I can't eat it every day."
                        },
                        {
                            sentence: "Much as ",
                            answer: "Much as he tries to be a good person, his true feelings often show.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>...he tries to be ..., his true ... often show.<br>ថ្វីត្បិតតែគាត់ព្យាយាមធ្វើជាមនុស្សសុភាពរាបសារក៏ដោយ ក៏អារម្មណ៍ពិតរបស់គាត់តែងតែបង្ហាញចេញមក។"
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>....they ... to help, they were ... to.<br>ថ្វីត្បិតតែពួកគេចង់ជួយខ្លាំងណាស់ក៏ដោយ ក៏ពួកគេមិនអាចជួយបានដែរ។",
                            answer: "Much as they wanted to help, they were unable to."
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>...I ... her work, I don't ... with all her ....<br>ថ្វីត្បិតតែខ្ញុំគោរពការងាររបស់នាងក៏ដោយ ខ្ញុំមិនយល់ព្រមជាមួយគំនិតទាំងអស់របស់នាងទេ។",
                            answer: "Much as I admire her work, I don't agree with all her opinions."
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>....it ... me to say it, you are ....<br>ថ្វីត្បិតតែវាធ្វើឲ្យខ្ញុំឈឺចាប់ក្នុងការនិយាយក៏ដោយ ក៏អ្នកខុសដែរ។",
                            answer: "Much as it pains me to say it, you are wrong."
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>...she ... public speaking, she has to do it for her ...<br>ថ្វីត្បិតតែនាងមិនចូលចិត្តការនិយាយជាសាធារណៈក៏ដោយ ក៏នាងត្រូវធ្វើវាសម្រាប់ការងាររបស់នាងដែរ។"
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>...he ... to hide it, his ... was ...<br>ថ្វីត្បិតតែគាត់ព្យាយាមលាក់បាំងក៏ដោយ ក៏ភាពភ័យខ្លាចរបស់គាត់គឺច្បាស់ណាស់។",
                            answer: "Much as he tried to hide it, his fear was evident."
                        },
                        {
                            sentence: "Much as ",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>...we ... your ..., we have to ....<br>ថ្វីត្បិតតែពួកយើងកោតសរសើរការផ្តល់ជូនរបស់អ្នកក៏ដោយ ក៏ពួកយើងត្រូវបដិសេធដែរ។",
                            answer: "Much as we appreciate your offer, we have to decline."
                        },
                        {
                            sentence: "Much as",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>.. I ...to stay, I had to ... early.<br>ថ្វីត្បិតតែខ្ញុំចង់នៅក៏ដោយ ក៏ខ្ញុំត្រូវចេញទៅមុនដែរ។",
                            answer: "Much as I wanted to stay, I had to leave early."
                        },
                        {
                            sentence: "Much as",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>.. the children ..., they still ... their ....<br>ថ្វីត្បិតតែក្មេងៗត្អូញត្អែរក៏ដោយ ក៏ពួកគេនៅតែញ៉ាំបន្លែរបស់ពួកគេដែរ។",
                            answer: "Much as the children complained, they still ate their vegetables."
                        },
                        {
                            sentence: "Much as",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>.. I ... the idea, I had to ... it.<br>ថ្វីត្បិតតែខ្ញុំមិនចូលចិត្តគំនិតនេះក៏ដោយ ក៏ខ្ញុំត្រូវទទួលយកវា។",
                            answer: "Much as I disliked the idea, I had to accept it."
                        },
                        {
                            sentence: "Much as",
                            khmer: "Structure: Much as + subject + verb, contrasting clause<br>.. the weather ..., we still ... our ....<br>ថ្វីត្បិតតែអាកាសធាតុអាក្រក់ក៏ដោយ ក៏យើងនៅតែរីករាយនឹងការធ្វើដំណើររបស់យើង។",
                            answer: "Much as the weather was bad, we still enjoyed our trip."
                        }
                    ],
                    "✅ By the time…": [
                        {
                            sentence: "By the time ",
                            khmer: "ពេលខ្ញុំទៅដល់ ពួកគេបានញ៉ាំអាហារពេលល្ងាចរួចហើយ។ <br> By the time I ..., they had already finished .... <br>រចនាសម្ព័ន្ធ៖ By the time + past simple, past perfect.",
                            answer: "By the time I arrived, they had already finished dinner."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលនាងបញ្ចប់ការសិក្សា នាងនឹងបានបញ្ចប់ការបណ្តុះបណ្តាលការងារហើយ។ <br> By the time she ..., she will have completed an .... <br>រចនាសម្ព័ន្ធ៖ By the time + present simple, future perfect.",
                            answer: "By the time she graduates, she will have completed an internship."
                        },
                        {
                            sentence: "By the time",
                            khmer: "ពេលគាត់ភ្ញាក់ពីគេង ព្រះអាទិត្យបានរះហើយ។ <br> By the time he ... up, the sun had already .... <br>រចនាសម្ព័ន្ធ៖ By the time + past simple, past perfect.",
                            answer: "By the time he woke up, the sun had already risen."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលអ្នកអាននេះ ខ្ញុំនឹងបានចេញទៅវិស្សមកាលហើយ។ <br> By the time you ... this, I will have left for .... <br>រចនាសម្ព័ន្ធ៖ By the time + present simple, future perfect.",
                            answer: "By the time you read this, I will have left for vacation."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលពួកគេទៅដល់ស្ថានីយ៍ រថភ្លើងបានចេញដំណើរហើយ។ <br> By the time they ... the station, the train had .... <br>រចនាសម្ព័ន្ធ៖ By the time + past simple, past perfect.",
                            answer: "By the time they reached the station, the train had departed."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលពួកយើងបញ្ចប់គម្រោងនេះ វានឹងចំណាយពេលមួយខែហើយ។ <br> By the time we ... this project, it will have been a .... <br>រចនាសម្ព័ន្ធ៖ By the time + present simple, future perfect.",
                            answer: "By the time we finish this project, it will have been a month."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលប៉ូលីសទៅដល់ ចោរបានបាត់ខ្លួនបាត់ហើយ។ <br> By the time the police ..., the thieves had .... <br>រចនាសម្ព័ន្ធ៖ By the time + past simple, past perfect.",
                            answer: "By the time the police arrived, the thieves had vanished."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលនាងអាយុសាមសិបឆ្នាំ នាងនឹងបានធ្វើដំណើរទៅប្រទេសជាច្រើនហើយ។ <br> By the time she ... thirty, she will have traveled to many .... <br>រចនាសម្ព័ន្ធ៖ By the time + present simple, future perfect.",
                            answer: "By the time she turns thirty, she will have traveled to many countries."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលពួកគេចាប់ផ្តើមចម្អិន ខ្ញុំបានញ៉ាំរួចហើយ។ <br> By the time they ... cooking, I had already .... <br>រចនាសម្ព័ន្ធ៖ By the time + past simple, past perfect.",
                            answer: "By the time they started cooking, I had already eaten."
                        },
                        {
                            sentence: "By the time ",
                            khmer: "ពេលអ្នកទៅដល់ផ្ទះ ខ្ញុំនឹងបានរៀបចំអាហារពេលល្ងាចហើយ។ <br> By the time you ... home, I will have prepared .... <br>រចនាសម្ព័ន្ធ៖ By the time + present simple, future perfect.",
                            answer: "By the time you get home, I will have prepared dinner."
                        }
                    ],
                    "✅ So…as to…": [
                        {
                            sentence: "So…as to…",
                            khmer: "គាត់ចិត្តល្អណាស់ រហូតដល់បានជូនខ្ញុំទៅ។ <br> He was so ... as to offer me a .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            answer: "He was so kind as to offer me a ride."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "បញ្ហាគឺស្មុគស្មាញណាស់ រហូតដល់ត្រូវការដំបូន្មានពីអ្នកជំនាញ។ <br> The problem was so ... as to require expert .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            answer: "The problem was so complex as to require expert advice."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "នាងនិយាយតិចៗ រហូតស្ទើរតែស្តាប់មិនឮ។ <br> She spoke so ... as to be almost .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            answer: "She spoke so softly as to be almost inaudible."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "គាត់រត់លឿនណាស់ រហូតដល់បំបែកកំណត់ត្រាសាលា។ <br> He ran so ... as to break the school .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            answer: "He ran so fast as to break the school record."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "ព័ត៌មាននេះគួរឲ្យភ្ញាក់ផ្អើលណាស់ រហូតដល់ធ្វើឲ្យអ្នករាល់គ្នាស្ងាត់មាត់។ <br> The news was so ... as to leave everyone .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            answer: "The news was so shocking as to leave everyone speechless."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "ពួកគេរំភើបណាស់ រហូតដល់ចាប់ផ្តើមធ្វើការភ្លាមៗ។ <br> They were so ... as to start working .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            answer: "They were so eager as to start working immediately."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "បន្ទប់ងងឹតណាស់ រហូតដល់មិនអាចអានបាន។ <br> The room was so ... as to make it impossible to .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            answer: "The room was so dark as to make it impossible to read."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "គាត់សុភាពរាបសារណាស់ រហូតដល់បានកាន់ទ្វារបើកឲ្យអ្នករាល់គ្នា។ <br> He was so ... as to hold the door open for .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            answer: "He was so polite as to hold the door open for everyone."
                        },
                        {
                            sentence: "So…as to….",
                            khmer: "ទឹកត្រជាក់ណាស់ រហូតដល់ធ្វើឲ្យម្រាមដៃខ្ញុំស្ពឹក។ <br> The water was so ... as to numb my .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            answer: "The water was so cold as to numb my fingers."
                        },
                        {
                            sentence: "So…as to…",
                            khmer: "នាងក្លាហានណាស់ រហូតដល់ហ៊ានប្រឈមមុខនឹងអ្នកវាយប្រហារ។ <br> She was so ... as to confront the .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + so + adjective/adverb + as to + base verb.",
                            answer: "She was so brave as to confront the attacker."
                        }
                    ],
                    "✅ Too…to": [
                        {
                            sentence: "Too…to",
                            khmer: "គាត់ក្មេងពេកមិនអាចបើកបររថយន្តបានទេ។ <br> He is too ... to drive a .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            answer: "He is too young to drive a car."
                        },
                        {
                            sentence: "The coffee was too hot to drink immediately.",
                            khmer: "កាហ្វេក្តៅពេកមិនអាចផឹកភ្លាមៗបានទេ។ <br> The coffee was too ... to drink .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            answer: "The coffee was too hot to drink immediately."
                        },
                        {
                            sentence: "She was too tired to continue working.",
                            khmer: "នាងហត់ពេកមិនអាចបន្តធ្វើការបានទេ។ <br> She was too ... to continue .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            answer: "She was too tired to continue working."
                        },
                        {
                            sentence: "The box is too heavy to lift alone.",
                            khmer: "ប្រអប់នេះធ្ងន់ពេកមិនអាចលើកម្នាក់ឯងបានទេ។ <br> The box is too ... to lift .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            answer: "The box is too heavy to lift alone."
                        },
                        {
                            sentence: "He spoke too quickly to be understood.",
                            khmer: "គាត់និយាយលឿនពេកមិនអាចយល់បានទេ។ <br> He spoke too ... to be .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            answer: "He spoke too quickly to be understood."
                        },
                        {
                            sentence: "The dress was too expensive to buy.",
                            khmer: "រ៉ូបនេះថ្លៃពេកមិនអាចទិញបានទេ។ <br> The dress was too ... to .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            answer: "The dress was too expensive to buy."
                        },
                        {
                            sentence: "It's too late to change our plans now.",
                            khmer: "វាយឺតពេលពេកមិនអាចប្តូរផែនការឥឡូវនេះបានទេ។ <br> It's too ... to change our ... now.",
                            answer: "It's too late to change our plans now."
                        },
                        {
                            sentence: "The music was too loud to have a conversation.",
                            khmer: "តន្ត្រីលឺខ្លាំងពេកមិនអាចនិយាយគ្នាបានទេ។ <br> The music was too ... to have a .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            answer: "The music was too loud to have a conversation."
                        },
                        {
                            sentence: "They are too busy to help us right now.",
                            khmer: "ពួកគេរវល់ពេកមិនអាចជួយពួកយើងបាននៅពេលនេះទេ។ <br> They are too ... to help us right .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            answer: "They are too busy to help us right now."
                        },
                        {
                            sentence: "The problem is too difficult to solve without assistance.",
                            khmer: "បញ្ហាគឺពិបាកពេកមិនអាចដោះស្រាយដោយគ្មានជំនួយបានទេ។ <br> The problem is too ... to solve without .... <br>រចនាសម្ព័ន្ធ៖ Subject + be + too + adjective/adverb + to + base verb.",
                            answer: "The problem is too difficult to solve without assistance."
                        }
                    ],
                    "✅ If it hadn’t been for…": [
                        {
                            sentence: "If it hadn’t been for your help, I would have failed the exam.",
                            khmer: "បើមិនមែនដោយសារជំនួយរបស់អ្នកទេ ខ្ញុំប្រាកដជាធ្លាក់ប្រឡងហើយ។ <br> If it hadn’t been for ... help, I would have failed the .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            answer: "If it hadn’t been for your help, I would have failed the exam."
                        },
                        {
                            sentence: "If it hadn’t been for the warning, they would have entered the dangerous area.",
                            khmer: "បើមិនមែនដោយសារការព្រមានទេ ពួកគេប្រាកដជាបានចូលទៅក្នុងតំបន់គ្រោះថ្នាក់ហើយ។ <br> If it hadn’t been for the ..., they would have entered the dangerous .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            answer: "If it hadn’t been for the warning, they would have entered the dangerous area."
                        },
                        {
                            sentence: "If it hadn’t been for the rain, we would have gone for a walk.",
                            khmer: "បើមិនមែនដោយសារភ្លៀងទេ ពួកយើងប្រាកដជាបានទៅដើរលេងហើយ។ <br> If it hadn’t been for the ..., we would have gone for a .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            answer: "If it hadn’t been for the rain, we would have gone for a walk."
                        },
                        {
                            sentence: "If it hadn’t been for the traffic, we would have arrived on time.",
                            khmer: "បើមិនមែនដោយសារការកកស្ទះចរាចរណ៍ទេ ពួកយើងប្រាកដជាបានទៅដល់ទាន់ពេលហើយ។ <br> If it hadn’t been for the ..., we would have arrived on .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            answer: "If it hadn’t been for the traffic, we would have arrived on time."
                        },
                        {
                            sentence: "If it hadn’t been for her quick thinking, the accident would have been worse.",
                            khmer: "បើមិនមែនដោយសារគំនិតរហ័សរបស់នាងទេ គ្រោះថ្នាក់នឹងកាន់តែអាក្រក់ជាងនេះ។ <br> If it hadn’t been for her quick ..., the accident would have been .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            answer: "If it hadn’t been for her quick thinking, the accident would have been worse."
                        },
                        {
                            sentence: "If it hadn’t been for the strong wind, the fire would have spread faster.",
                            khmer: "បើមិនមែនដោយសារខ្យល់ខ្លាំងទេ ភ្លើងនឹងរាលដាលលឿនជាងនេះ។ <br> If it hadn’t been for the strong ..., the fire would have spread .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            answer: "If it hadn’t been for the strong wind, the fire would have spread faster."
                        },
                        {
                            sentence: "If it hadn’t been for his dedication, the project would not have been completed.",
                            khmer: "បើមិនមែនដោយសារការលះបង់របស់គាត់ទេ គម្រោងនេះនឹងមិនត្រូវបានបញ្ចប់ឡើយ។ <br> If it hadn’t been for his ..., the project would not have been .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            answer: "If it hadn’t been for his dedication, the project would not have been completed."
                        },
                        {
                            sentence: "If it hadn’t been for the alarm, we wouldn't have woken up.",
                            khmer: "បើមិនមែនដោយសារសំឡេងរោទិ៍ទេ ពួកយើងនឹងមិនភ្ញាក់ពីគេងទេ។ <br> If it hadn’t been for the ..., we wouldn't have woken .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            answer: "If it hadn’t been for the alarm, we wouldn't have woken up."
                        },
                        {
                            sentence: "If it hadn’t been for the generous donation, the charity couldn't have continued its work.",
                            khmer: "បើមិនមែនដោយសារការបរិច្ចាគដ៏សប្បុរសទេ អង្គការសប្បុរសធម៌នឹងមិនអាចបន្តការងាររបស់ខ្លួនបានទេ។ <br> If it hadn’t been for the generous ..., the charity couldn't have continued its .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            answer: "If it hadn’t been for the generous donation, the charity couldn't have continued its work."
                        },
                        {
                            sentence: "If it hadn’t been for the doctor's advice, his condition would have worsened.",
                            khmer: "បើមិនមែនដោយសារដំបូន្មានរបស់វេជ្ជបណ្ឌិតទេ ស្ថានភាពរបស់គាត់នឹងកាន់តែអាក្រក់ទៅៗ។ <br> If it hadn’t been for the doctor's ..., his condition would have .... <br>រចនាសម្ព័ន្ធ៖ If it hadn’t been for + noun, + result (would have + past participle).",
                            answer: "If it hadn’t been for the doctor's advice, his condition would have worsened."
                        }
                    ],
                    "A. Basic Progress Updates": [
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
                    "B. Ongoing / In Progress": [
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
                    "C. Future Plans / Next Steps": [
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
                    "D. Time-based Reports": [
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
                    "E. Communicating Delays or Setbacks Politely": [
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
                    "F. Offering Help / Polite Closings": [
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
                   
                    
                    "Ways to say 'I understand'":[
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
                const currentCategory = gameState.currentListenAndTypeCategory; // Keep track of the category for listen-type

                resetGameState(); // Reset state for a new game

                if (currentMode === 'vocab') {
                    initVocabGame(); // Go back to vocab limit selection
                } else if (currentMode === 'listen-type') {
                    // Go back to the limit selection for the *same* listen-type category
                    displayListenAndTypeLimitSelection(currentCategory);
                }
                else {
                    selectMode(currentMode); // Start the game again in the same mode
                }
            }

            // Vocabulary Game Functions
            function initVocabGame() {
                console.log("Initializing Vocabulary Game - Limit Selection...");
                elements.gameArea.innerHTML = `
                    <div class="container vocab-limit-selection">
                        <h2 class="text-center text-blue-600">How many words do you want to practice?</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            <button class="btn btn-primary btn-lg" onclick="startVocabGameWithLimit(10)">10 Words</button>
                            <button class="btn btn-primary btn-lg" onclick="startVocabGameWithLimit(30)">30 Words</button>
                            <button class="btn btn-primary btn-lg" onclick="startVocabGameWithLimit('all')">All Words (${gameData.vocab.length})</button>
                        </div>
                        <button class="btn btn-secondary mt-8" onclick="goHome()">Back to Home</button>
                    </div>
                `;
            }

            function startVocabGameWithLimit(limit) {
                console.log(`Starting Vocabulary Game with ${limit === 'all' ? 'all' : limit} words...`);
                let wordsToUse = gameData.vocab;
                if (limit !== 'all' && typeof limit === 'number') {
                    wordsToUse = shuffleArray(gameData.vocab).slice(0, limit);
                } else {
                    // If 'all' or invalid number, use all words and shuffle
                    wordsToUse = shuffleArray(gameData.vocab);
                }

                // Ensure the pool is not empty
                if (wordsToUse.length === 0) {
                    elements.gameArea.innerHTML = `
                        <div class="container">
                            <h2 class="text-center text-red-600">No vocabulary words available!</h2>
                            <button class="btn btn-secondary mt-4" onclick="initVocabGame()">Back to Vocab Selection</button>
                            <button class="btn btn-secondary mt-4" onclick="goHome()">Back to Home</button>
                        </div>
                    `;
                    return;
                }

                gameState.currentPool = wordsToUse;
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
                let timerDuration = 100; // Longer timer for grammar questions

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
                            ${currentLine.khmer ? `<p class="khmer-meaning mt-1 text-base text-gray-600">(${currentLine.khmer})</p>` : ''}
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
                            <button class="btn btn-secondary" onclick="initConversationGame()"><i class="fas fa-times-circle mr-2"></i>Back to Topics</button>
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

            // Listen & Type Game Functions
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
                                    <button class="btn btn-primary w-full" onclick="displayListenAndTypeLimitSelection('${cat}')">Select Category</button>
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn btn-secondary mt-8" onclick="goHome()">Back to Home</button>
                    </div>
                `;
            }

            function displayListenAndTypeLimitSelection(category) {
                gameState.currentListenAndTypeCategory = category;
                const totalItems = gameData.listenAndType[category].length;
                elements.gameArea.innerHTML = `
                    <div class="container listen-type-limit-selection">
                        <h2 class="text-center text-blue-600">How many items from "${category}" do you want to practice?</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            <button class="btn btn-primary btn-lg" onclick="startListenAndTypeGameWithLimit('${category}', 10)">10 Items</button>
                            <button class="btn btn-primary btn-lg" onclick="startListenAndTypeGameWithLimit('${category}', 30)">30 Items</button>
                            <button class="btn btn-primary btn-lg" onclick="startListenAndTypeGameWithLimit('${category}', 'all')">All Items (${totalItems})</button>
                        </div>
                        <button class="btn btn-secondary mt-8" onclick="initListenAndTypeGame()">Back to Categories</button>
                    </div>
                `;
            }

            function startListenAndTypeGameWithLimit(category, limit) {
                console.log(`Starting Listen & Type Game for category "${category}" with ${limit === 'all' ? 'all' : limit} items...`);
                let itemsToUse = gameData.listenAndType[category];

                if (limit !== 'all' && typeof limit === 'number') {
                    // Shuffle the entire category pool first, then slice
                    itemsToUse = shuffleArray(gameData.listenAndType[category]).slice(0, limit);
                } else {
                    // If 'all' or invalid number, use all items and shuffle
                    itemsToUse = shuffleArray(gameData.listenAndType[category]);
                }

                // Ensure the pool is not empty
                if (itemsToUse.length === 0) {
                    elements.gameArea.innerHTML = `
                        <div class="container">
                            <h2 class="text-center text-red-600">No items available for this category!</h2>
                            <button class="btn btn-secondary mt-4" onclick="displayListenAndTypeLimitSelection('${category}')">Back to Item Selection</button>
                            <button class="btn btn-secondary mt-4" onclick="goHome()">Back to Home</button>
                        </div>
                    `;
                    return;
                }

                gameState.currentPool = itemsToUse;
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
                const timerDuration = 100; // Time for listening and typing

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

                // Automatically speak the text when the question is displayed
                speakText(currentItem.sentence);

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
                // For Q&A, we'll keep the category selection first, then start the quiz directly
                // as there's no "limit" option requested for Q&A, only for vocab/listen-type
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

                feedbackElement.classList.add('show');

                setTimeout(() => {
                    feedbackElement.classList.remove('show');
                    gameState.currentIndex++;
                    displayQnAGameQuestion();
                }, 3000); // Wait 3 seconds to show explanation
            }

            // Initial call to set up the game
            document.addEventListener("DOMContentLoaded", goHome);
   
