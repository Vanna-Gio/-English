
///////
import React, { useState } from 'react';

const App = () => {
  const [userSentence, setUserSentence] = useState('');
  const [submittedSentences, setSubmittedSentences] = useState([]);
  const [feedback, setFeedback] = useState('');

  const lessonContent = {
    title: "Mastering 'Only If...': Strict and Exclusive Conditions",
    intro: "“Only if...” is used to express strict or exclusive conditions.",
    meaning: {
      heading: "💡 Meaning:",
      text: "“Only if” = “just in case this one condition is true”\n→ The action/result depends entirely on that condition."
    },
    structure: {
      heading: "🔧 Structure:",
      normal: "Only if + subject + verb, result clause",
      formal: "Only if + condition + auxiliary + subject + verb..."
    },
    examples: [
      { sentence: "Only if it stops raining, we will go outside.", explanation: "We’ll go only if the rain stops." },
      { sentence: "Only if you study hard, will you pass the test.", explanation: "(Formal inverted version — sounds stronger!)" },
      { sentence: "Only if he apologizes, will she forgive him." },
      { sentence: "Only if I finish my work, can I go out." }
    ],
    notes: [
      "The inverted version (flipping the sentence) is common in formal writing:",
      "❌ Only if you practice, you will improve.",
      "✅ Only if you practice, will you improve."
    ],
    practicePrompt: "✍️ Try it out! Write 1–2 sentences with:\nNormal structure: Only if + condition, result...\nFormal inversion: Only if + condition, will/can/should + subject + verb..."
  };

  const handleSubmitSentence = () => {
    if (userSentence.trim()) {
      setSubmittedSentences([...submittedSentences, userSentence.trim()]);
      setUserSentence('');
      setFeedback('Your sentence has been added! Keep practicing!');
    } else {
      setFeedback('Please write a sentence before submitting.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-inter">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 rounded-md p-3 bg-indigo-100 w-full">
          {lessonContent.title}
        </h1>

        <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
          {lessonContent.intro}
        </p>

        {/* Meaning Section */}
        <div className="mb-6 w-full">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">{lessonContent.meaning.heading}</h2>
          <p className="text-lg text-gray-800 leading-relaxed bg-indigo-50 p-4 rounded-lg whitespace-pre-wrap">
            {lessonContent.meaning.text}
          </p>
        </div>

        {/* Structure Section */}
        <div className="mb-6 w-full">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">{lessonContent.structure.heading}</h2>
          <p className="text-lg text-gray-800 leading-relaxed bg-indigo-50 p-4 rounded-lg mb-2">
            <span className="font-semibold">Normal:</span> <code className="bg-gray-200 p-1 rounded-md text-purple-700 font-mono">{lessonContent.structure.normal}</code>
          </p>
          <p className="text-lg text-gray-800 leading-relaxed bg-indigo-50 p-4 rounded-lg">
            <span className="font-semibold">Formal (inverted):</span> <code className="bg-gray-200 p-1 rounded-md text-purple-700 font-mono">{lessonContent.structure.formal}</code>
          </p>
        </div>

        {/* Examples Section */}
        <div className="mb-6 w-full">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">✅ Examples:</h2>
          <ul className="list-disc list-inside bg-indigo-50 p-4 rounded-lg">
            {lessonContent.examples.map((ex, index) => (
              <li key={index} className="mb-2 text-lg text-gray-800">
                <span className="font-medium">{ex.sentence}</span>
                {ex.explanation && <span className="text-gray-600 ml-2 italic">{ex.explanation}</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Notes Section */}
        <div className="mb-8 w-full">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">🧠 Notes:</h2>
          <ul className="list-disc list-inside bg-indigo-50 p-4 rounded-lg">
            {lessonContent.notes.map((note, index) => (
              <li key={index} className="mb-1 text-lg text-gray-800"
                  dangerouslySetInnerHTML={{ __html: note.replace(/❌/g, '<span class="text-red-600 font-bold">❌</span>').replace(/✅/g, '<span class="text-green-600 font-bold">✅</span>') }}
              ></li>
            ))}
          </ul>
        </div>

        {/* Practice Section */}
        <div className="w-full bg-yellow-50 p-6 rounded-lg shadow-inner mb-6">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4 whitespace-pre-wrap">{lessonContent.practicePrompt}</h2>
          <textarea
            className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-lg h-32 resize-y"
            placeholder="Type your sentence(s) here..."
            value={userSentence}
            onChange={(e) => setUserSentence(e.target.value)}
          ></textarea>
          <button
            onClick={handleSubmitSentence}
            className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold text-xl"
          >
            Submit My Sentence
          </button>
          {feedback && (
            <p className="mt-4 text-center text-lg font-medium text-gray-700">
              {feedback}
            </p>
          )}
        </div>

        {/* Submitted Sentences Display */}
        {submittedSentences.length > 0 && (
          <div className="w-full bg-green-50 p-6 rounded-lg shadow-inner mt-4">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Your Practice Sentences:</h2>
            <ul className="list-disc list-inside">
              {submittedSentences.map((sentence, index) => (
                <li key={index} className="text-lg text-gray-800 mb-2">
                  {sentence}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;














/////





# -English
We will add and fix

 "✅ “Much as” :[
                        {
                            sentence: "Much as I love chocolate, I can't eat it every day.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause <br> ថ្វីត្បិតតែខ្ញុំស្រឡាញ់សូកូឡាខ្លាំងណាស់ក៏ដោយ ក៏ខ្ញុំមិនអាចញ៉ាំវាជារៀងរាល់ថ្ងៃបានដែរ។", // Placeholder for Khmer translation
                            answer: "Much as I love chocolate, I can't eat it every day."
                        },
                        {
                            sentence: "Much as he tries to be polite, his true feelings often show.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause <br> ថ្វីត្បិតតែគាត់ព្យាយាមធ្វើជាមនុស្សសុភាពរាបសារក៏ដោយ ក៏អារម្មណ៍ពិតរបស់គាត់តែងតែបង្ហាញចេញមក។", // Placeholder for Khmer translation
                            answer: "Much as he tries to be polite, his true feelings often show."
                        },
                        {
                            sentence: "Much as they wanted to help, they were unable to.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause <br> ថ្វីត្បិតតែពួកគេចង់ជួយខ្លាំងណាស់ក៏ដោយ ក៏ពួកគេមិនអាចជួយបានដែរ។", // Placeholder for Khmer translation
                            answer: "Much as they wanted to help, they were unable to."
                        },
                        {
                            sentence: "Much as I admire her work, I don't agree with all her opinions.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause <br> ថ្វីត្បិតតែខ្ញុំកោតសរសើរការងាររបស់នាងខ្លាំងណាស់ក៏ដោយ ក៏ខ្ញុំមិនយល់ស្របនឹងមតិរបស់នាងទាំងអស់ដែរ។", // Placeholder for Khmer translation
                            answer: "Much as I admire her work, I don't agree with all her opinions."
                        },
                        {
                            sentence: "Much as it pains me to say it, you are wrong.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause <br> ថ្វីត្បិតតែវាធ្វើឲ្យខ្ញុំឈឺចាប់ក្នុងការនិយាយក៏ដោយ ក៏អ្នកខុសដែរ។", // Placeholder for Khmer translation
                            answer: "Much as it pains me to say it, you are wrong."
                        },
                        {
                            sentence: "Much as she dislikes public speaking, she has to do it for her job.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause <br> ថ្វីត្បិតតែនាងមិនចូលចិត្តការនិយាយជាសាធារណៈក៏ដោយ ក៏នាងត្រូវធ្វើវាសម្រាប់ការងាររបស់នាងដែរ។", // Placeholder for Khmer translation
                            answer: "Much as she dislikes public speaking, she has to do it for her job."
                        },
                        {
                            sentence: "Much as he tried to hide it, his nervousness was obvious.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause <br> ថ្វីត្បិតតែគាត់ព្យាយាមលាក់បាំងក៏ដោយ ក៏ភាពភ័យខ្លាចរបស់គាត់គឺច្បាស់ណាស់។", // Placeholder for Khmer translation
                            answer: "Much as he tried to hide it, his nervousness was obvious."
                        },
                        {
                            sentence: "Much as we appreciate your offer, we have to decline.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause <br> ថ្វីត្បិតតែពួកយើងកោតសរសើរការផ្តល់ជូនរបស់អ្នកក៏ដោយ ក៏ពួកយើងត្រូវបដិសេធដែរ។", // Placeholder for Khmer translation
                            answer: "Much as we appreciate your offer, we have to decline."
                        },
                        {
                            sentence: "Much as I wanted to stay, I had to leave early.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause <br> ថ្វីត្បិតតែខ្ញុំចង់នៅក៏ដោយ ក៏ខ្ញុំត្រូវចេញទៅមុនដែរ។", // Placeholder for Khmer translation
                            answer: "Much as I wanted to stay, I had to leave early."
                        },
                        {
                            sentence: "Much as the children complained, they still ate their vegetables.",
                            khmer: "Structure: Much as + subject + verb, contrasting clause <br> ថ្វីត្បិតតែក្មេងៗត្អូញត្អែរក៏ដោយ ក៏ពួកគេនៅតែញ៉ាំបន្លែរបស់ពួកគេដែរ។", // Placeholder for Khmer translation
                            answer: "Much as the children complained, they still ate their vegetables."
                        }
                        ],
                        "✅ By the time…” :[
                            {
                                sentence: "By the time I arrived, they had already finished dinner.",
                                khmer: "Structure: By the time + past simple, past perfect <br> By the time + present simple, future perfect <br> ពេលខ្ញុំទៅដល់ ពួកគេបានញ៉ាំអាហារពេលល្ងាចរួចហើយ។", // Placeholder for Khmer translation
                                answer: "By the time I arrived, they had already finished dinner."
                            },
                            {
                                sentence: "By the time she graduates, she will have completed an internship.",
                                khmer: "Structure: By the time + past simple, past perfect <br> By the time + present simple, future perfect <br> ពេលនាងបញ្ចប់ការសិក្សា នាងនឹងបានបញ្ចប់ការបណ្តុះបណ្តាលការងារហើយ។", // Placeholder for Khmer translation
                                answer: "By the time she graduates, she will have completed an internship."
                            },
                            {
                                sentence: "By the time he woke up, the sun had already risen.",
                                khmer: "Structure: By the time + past simple, past perfect <br> By the time + present simple, future perfect <br> ពេលគាត់ភ្ញាក់ពីគេង ព្រះអាទិត្យបានរះហើយ។", // Placeholder for Khmer translation
                                answer: "By the time he woke up, the sun had already risen."
                            },
                            {
                                sentence: "By the time you read this, I will have left for vacation.",
                                khmer: "Structure: By the time + past simple, past perfect <br> By the time + present simple, future perfect <br> ពេលអ្នកអាននេះ ខ្ញុំនឹងបានចេញទៅវិស្សមកាលហើយ។", // Placeholder for Khmer translation
                                answer: "By the time you read this, I will have left for vacation."
                            },
                            {
                                sentence: "By the time they reached the station, the train had departed.",
                                khmer: "Structure: By the time + past simple, past perfect <br> By the time + present simple, future perfect <br> ពេលពួកគេទៅដល់ស្ថានីយ៍ រថភ្លើងបានចេញដំណើរហើយ។", // Placeholder for Khmer translation
                                answer: "By the time they reached the station, the train had departed."
                            },
                            {
                                sentence: "By the time we finish this project, it will have been a month.",
                                khmer: "Structure: By the time + past simple, past perfect <br> By the time + present simple, future perfect <br> ពេលពួកយើងបញ្ចប់គម្រោងនេះ វានឹងចំណាយពេលមួយខែហើយ។", // Placeholder for Khmer translation
                                answer: "By the time we finish this project, it will have been a month."
                            },
                            {
                                sentence: "By the time the police arrived, the thieves had vanished.",
                                khmer: "Structure: By the time + past simple, past perfect <br> By the time + present simple, future perfect <br> ពេលប៉ូលីសទៅដល់ ចោរបានបាត់ខ្លួនបាត់ហើយ។", // Placeholder for Khmer translation
                                answer: "By the time the police arrived, the thieves had vanished."
                            },
                            {
                                sentence: "By the time she turns thirty, she will have traveled to many countries.",
                                khmer: "Structure: By the time + past simple, past perfect <br> By the time + present simple, future perfect <br> ពេលនាងអាយុសាមសិបឆ្នាំ នាងនឹងបានធ្វើដំណើរទៅប្រទេសជាច្រើនហើយ។", // Placeholder for Khmer translation
                                answer: "By the time she turns thirty, she will have traveled to many countries."
                            },
                            {
                                sentence: "By the time they started cooking, I had already eaten.",
                                khmer: "Structure: By the time + past simple, past perfect <br> By the time + present simple, future perfect <br> ពេលពួកគេចាប់ផ្តើមចម្អិន ខ្ញុំបានញ៉ាំរួចហើយ។", // Placeholder for Khmer translation
                                answer: "By the time they started cooking, I had already eaten."
                            },
                            {
                                sentence: "By the time you get home, I will have prepared dinner.",
                                khmer: "Structure: By the time + past simple, past perfect <br> By the time + present simple, future perfect <br> ពេលអ្នកទៅដល់ផ្ទះ ខ្ញុំនឹងបានរៀបចំអាហារពេលល្ងាចហើយ។", // Placeholder for Khmer translation
                                answer: "By the time you get home, I will have prepared dinner."
                            }
                            ],
                            "✅ So…as to…” :[
                                {
                                    sentence: "He was so kind as to offer me a ride.",
                                    khmer: "Structure: Subject + be + so + adjective/adverb + as to + base verb <br> គាត់ចិត្តល្អណាស់ រហូតដល់បានជូនខ្ញុំទៅ។", // Placeholder for Khmer translation
                                    answer: "He was so kind as to offer me a ride."
                                },
                                {
                                    sentence: "The problem was so complex as to require expert advice.",
                                    khmer: "Structure: Subject + be + so + adjective/adverb + as to + base verb <br> បញ្ហាគឺស្មុគស្មាញណាស់ រហូតដល់ត្រូវការដំបូន្មានពីអ្នកជំនាញ។", // Placeholder for Khmer translation
                                    answer: "The problem was so complex as to require expert advice."
                                },
                                {
                                    sentence: "She spoke so softly as to be almost inaudible.",
                                    khmer: "Structure: Subject + be + so + adjective/adverb + as to + base verb <br> នាងនិយាយតិចៗ រហូតស្ទើរតែស្តាប់មិនឮ។", // Placeholder for Khmer translation
                                    answer: "She spoke so softly as to be almost inaudible."
                                },
                                {
                                    sentence: "He ran so fast as to break the school record.",
                                    khmer: "Structure: Subject + be + so + adjective/adverb + as to + base verb <br> គាត់រត់លឿនណាស់ រហូតដល់បំបែកកំណត់ត្រាសាលា។", // Placeholder for Khmer translation
                                    answer: "He ran so fast as to break the school record."
                                },
                                {
                                    sentence: "The news was so shocking as to leave everyone speechless.",
                                    khmer: "Structure: Subject + be + so + adjective/adverb + as to + base verb <br> ព័ត៌មាននេះគួរឲ្យភ្ញាក់ផ្អើលណាស់ រហូតដល់ធ្វើឲ្យអ្នករាល់គ្នាស្ងាត់មាត់។", // Placeholder for Khmer translation
                                    answer: "The news was so shocking as to leave everyone speechless."
                                },
                                {
                                    sentence: "They were so eager as to start working immediately.",
                                    khmer: "Structure: Subject + be + so + adjective/adverb + as to + base verb <br> ពួកគេរំភើបណាស់ រហូតដល់ចាប់ផ្តើមធ្វើការភ្លាមៗ។", // Placeholder for Khmer translation
                                    answer: "They were so eager as to start working immediately."
                                },
                                {
                                    sentence: "The room was so dark as to make it impossible to read.",
                                    khmer: "Structure: Subject + be + so + adjective/adverb + as to + base verb <br> បន្ទប់ងងឹតណាស់ រហូតដល់មិនអាចអានបាន។", // Placeholder for Khmer translation
                                    answer: "The room was so dark as to make it impossible to read."
                                },
                                {
                                    sentence: "He was so polite as to hold the door open for everyone.",
                                    khmer: "Structure: Subject + be + so + adjective/adverb + as to + base verb <br> គាត់សុភាពរាបសារណាស់ រហូតដល់បានកាន់ទ្វារបើកឲ្យអ្នករាល់គ្នា។", // Placeholder for Khmer translation
                                    answer: "He was so polite as to hold the door open for everyone."
                                },
                                {
                                    sentence: "The water was so cold as to numb my fingers.",
                                    khmer: "Structure: Subject + be + so + adjective/adverb + as to + base verb <br> ទឹកត្រជាក់ណាស់ រហូតដល់ធ្វើឲ្យម្រាមដៃខ្ញុំស្ពឹក។", // Placeholder for Khmer translation
                                    answer: "The water was so cold as to numb my fingers."
                                },
                                {
                                    sentence: "She was so brave as to confront the attacker.",
                                    khmer: "Structure: Subject + be + so + adjective/adverb + as to + base verb <br> នាងក្លាហានណាស់ រហូតដល់ហ៊ានប្រឈមមុខនឹងអ្នកវាយប្រហារ។", // Placeholder for Khmer translation
                                    answer: "She was so brave as to confront the attacker."
                                }
                            ],
                            "✅ Too…to” :[
                                {
                                    sentence: "He is too young to drive a car.",
                                    khmer: "Structure: Subject + be + too + adjective/adverb + to + base verb <br> គាត់ក្មេងពេកមិនអាចបើកបររថយន្តបានទេ។", // Placeholder for Khmer translation
                                    answer: "He is too young to drive a car."
                                },
                                {
                                    sentence: "The coffee was too hot to drink immediately.",
                                    khmer: "Structure: Subject + be + too + adjective/adverb + to + base verb <br> កាហ្វេក្តៅពេកមិនអាចផឹកភ្លាមៗបានទេ។", // Placeholder for Khmer translation
                                    answer: "The coffee was too hot to drink immediately."
                                },
                                {
                                    sentence: "She was too tired to continue working.",
                                    khmer: "Structure: Subject + be + too + adjective/adverb + to + base verb <br> នាងហត់ពេកមិនអាចបន្តធ្វើការបានទេ។", // Placeholder for Khmer translation
                                    answer: "She was too tired to continue working."
                                },
                                {
                                    sentence: "The box is too heavy to lift alone.",
                                    khmer: "Structure: Subject + be + too + adjective/adverb + to + base verb <br> ប្រអប់នេះធ្ងន់ពេកមិនអាចលើកម្នាក់ឯងបានទេ។", // Placeholder for Khmer translation
                                    answer: "The box is too heavy to lift alone."
                                },
                                {
                                    sentence: "He spoke too quickly to be understood.",
                                    khmer: "Structure: Subject + be + too + adjective/adverb + to + base verb <br> គាត់និយាយលឿនពេកមិនអាចយល់បានទេ។", // Placeholder for Khmer translation
                                    answer: "He spoke too quickly to be understood."
                                },
                                {
                                    sentence: "The dress was too expensive to buy.",
                                    khmer: "Structure: Subject + be + too + adjective/adverb + to + base verb <br> រ៉ូបនេះថ្លៃពេកមិនអាចទិញបានទេ។", // Placeholder for Khmer translation
                                    answer: "The dress was too expensive to buy."
                                },
                                {
                                    sentence: "It's too late to change our plans now.",
                                    khmer: "Structure: Subject + be + too + adjective/adverb + to + base verb <br> វាយឺតពេលពេកមិនអាចប្តូរផែនការឥឡូវនេះបានទេ។", // Placeholder for Khmer translation
                                    answer: "It's too late to change our plans now."
                                },
                                {
                                    sentence: "The music was too loud to have a conversation.",
                                    khmer: "Structure: Subject + be + too + adjective/adverb + to + base verb <br> តន្ត្រីលឺខ្លាំងពេកមិនអាចនិយាយគ្នាបានទេ។", // Placeholder for Khmer translation
                                    answer: "The music was too loud to have a conversation."
                                },
                                {
                                    sentence: "They are too busy to help us right now.",
                                    khmer: "Structure: Subject + be + too + adjective/adverb + to + base verb <br> ពួកគេរវល់ពេកមិនអាចជួយពួកយើងបាននៅពេលនេះទេ។", // Placeholder for Khmer translation
                                    answer: "They are too busy to help us right now."
                                },
                                {
                                    sentence: "The problem is too difficult to solve without assistance.",
                                    khmer: "Structure: Subject + be + too + adjective/adverb + to + base verb <br> បញ្ហាគឺពិបាកពេកមិនអាចដោះស្រាយដោយគ្មានជំនួយបានទេ។", // Placeholder for Khmer translation
                                    answer: "The problem is too difficult to solve without assistance."
                                }
                            ],
                            "✅ If it hadn’t been for…” :[
                                    {
                                        sentence: "If it hadn’t been for your help, I would have failed the exam.",
                                        khmer: "Structure: If it hadn’t been for + noun, + result (would have + past participle) <br> បើមិនមែនដោយសារជំនួយរបស់អ្នកទេ ខ្ញុំប្រាកដជាធ្លាក់ប្រឡងហើយ។", // Placeholder for Khmer translation
                                        answer: "If it hadn’t been for your help, I would have failed the exam."
                                    },
                                    {
                                        sentence: "If it hadn’t been for the warning, they would have entered the dangerous area.",
                                        khmer: "Structure: If it hadn’t been for + noun, + result (would have + past participle) <br> បើមិនមែនដោយសារការព្រមានទេ ពួកគេប្រាកដជាបានចូលទៅក្នុងតំបន់គ្រោះថ្នាក់ហើយ។", // Placeholder for Khmer translation
                                        answer: "If it hadn’t been for the warning, they would have entered the dangerous area."
                                    },
                                    {
                                        sentence: "If it hadn’t been for the rain, we would have gone for a walk.",
                                        khmer: "Structure: If it hadn’t been for + noun, + result (would have + past participle) <br> បើមិនមែនដោយសារភ្លៀងទេ ពួកយើងប្រាកដជាបានទៅដើរលេងហើយ។", // Placeholder for Khmer translation
                                        answer: "If it hadn’t been for the rain, we would have gone for a walk."
                                    },
                                    {
                                        sentence: "If it hadn’t been for the traffic, we would have arrived on time.",
                                        khmer: "Structure: If it hadn’t been for + noun, + result (would have + past participle) <br> បើមិនមែនដោយសារការកកស្ទះចរាចរណ៍ទេ ពួកយើងប្រាកដជាបានទៅដល់ទាន់ពេលហើយ។", // Placeholder for Khmer translation
                                        answer: "If it hadn’t been for the traffic, we would have arrived on time."
                                    },
                                    {
                                        sentence: "If it hadn’t been for her quick thinking, the accident would have been worse.",
                                        khmer: "Structure: If it hadn’t been for + noun, + result (would have + past participle) <br> បើមិនមែនដោយសារគំនិតរហ័សរបស់នាងទេ គ្រោះថ្នាក់នឹងកាន់តែអាក្រក់ជាងនេះ។", // Placeholder for Khmer translation
                                        answer: "If it hadn’t been for her quick thinking, the accident would have been worse."
                                    },
                                    {
                                        sentence: "If it hadn’t been for the strong wind, the fire would have spread faster.",
                                        khmer: "Structure: If it hadn’t been for + noun, + result (would have + past participle) <br> បើមិនមែនដោយសារខ្យល់ខ្លាំងទេ ភ្លើងនឹងរាលដាលលឿនជាងនេះ។", // Placeholder for Khmer translation
                                        answer: "If it hadn’t been for the strong wind, the fire would have spread faster."
                                    },
                                    {
                                        sentence: "If it hadn’t been for his dedication, the project would not have been completed.",
                                        khmer: "Structure: If it hadn’t been for + noun, + result (would have + past participle) <br> បើមិនមែនដោយសារការលះបង់របស់គាត់ទេ គម្រោងនេះនឹងមិនត្រូវបានបញ្ចប់ឡើយ។", // Placeholder for Khmer translation
                                        answer: "If it hadn’t been for his dedication, the project would not have been completed."
                                    },
                                    {
                                        sentence: "If it hadn’t been for the alarm, we wouldn't have woken up.",
                                        khmer: "Structure: If it hadn’t been for + noun, + result (would have + past participle) <br> បើមិនមែនដោយសារសំឡេងរោទិ៍ទេ ពួកយើងនឹងមិនភ្ញាក់ពីគេងទេ។", // Placeholder for Khmer translation
                                        answer: "If it hadn’t been for the alarm, we wouldn't have woken up."
                                    },
                                    {
                                        sentence: "If it hadn’t been for the generous donation, the charity couldn't have continued its work.",
                                        khmer: "Structure: If it hadn’t been for + noun, + result (would have + past participle) <br> បើមិនមែនដោយសារការបរិច្ចាគដ៏សប្បុរសទេ អង្គការសប្បុរសធម៌នឹងមិនអាចបន្តការងាររបស់ខ្លួនបានទេ។", // Placeholder for Khmer translation
                                        answer: "If it hadn’t been for the generous donation, the charity couldn't have continued its work."
                                    },
                                    {
                                        sentence: "If it hadn’t been for the doctor's advice, his condition would have worsened.",
                                        khmer: "Structure: If it hadn’t been for + noun, + result (would have + past participle) <br> បើមិនមែនដោយសារដំបូន្មានរបស់វេជ្ជបណ្ឌិតទេ ស្ថានភាពរបស់គាត់នឹងកាន់តែអាក្រក់ទៅៗ។", // Placeholder for Khmer translation
                                        answer: "If it hadn’t been for the doctor's advice, his condition would have worsened."
                                    }
                                    ],



link gpt:
https://chatgpt.com/share/685e3f2a-17bc-8004-ad6d-317e79a3db13
