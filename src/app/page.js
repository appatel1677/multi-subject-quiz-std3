'use client';

import React, { useState } from 'react';

const examPaperData = [
  {
    title: "SECTION A: UNIT 1 - COLOURS ALL AROUND",
    questions: [
      { id: 1, q: "What color is a ripe tomato?", o: ["Red", "Green", "Yellow", "Blue"], a: 0 },
      { id: 2, q: "The sky is usually ____ on a bright sunny day.", o: ["Blue", "Black", "Pink", "Orange"], a: 0 },
      { id: 3, q: "Which of these natural elements is green?", o: ["Grass", "Milk", "Crow", "Sun"], a: 0 },
      { id: 4, q: "What color is clean, fresh milk?", o: ["White", "Blue", "Green", "Red"], a: 0 },
      { id: 5, q: "A bright sunflower blooming in a field is ____.", o: ["Yellow", "Red", "Blue", "Black"], a: 0 },
      { id: 6, q: "What is the opposite color of 'Black'?", o: ["White", "Red", "Blue", "Green"], a: 0 },
      { id: 7, q: "Find the correctly spelled color name:", o: ["Pink", "Pnk", "Pnik", "Pikn"], a: 0 },
      { id: 8, q: "An orange fruit shares its name with its color. It is ____.", o: ["Orange", "Blue", "Green", "White"], a: 0 },
      { id: 9, q: "Complete the vocabulary word: R _ D", o: ["e", "a", "o", "i"], a: 0 },
      { id: 10, q: "What color do you get when you mix a lot of dark mud?", o: ["Brown", "Pink", "White", "Clear"], a: 0 }
    ]
  },
  {
    title: "SECTION B: UNIT 2 - BEAUTIFUL BIRDS",
    questions: [
      { id: 11, q: "Which large bird dances beautifully when it rains?", o: ["Peacock", "Crow", "Sparrow", "Duck"], a: 0 },
      { id: 12, q: "A parrot is green and features a bright ____ beak.", o: ["Red", "Blue", "Black", "Yellow"], a: 0 },
      { id: 13, q: "Which clever bird is black and makes a \"Caw-Caw\" sound?", o: ["Crow", "Sparrow", "Duck", "Parrot"], a: 0 },
      { id: 14, q: "A tiny sparrow makes a friendly ____ sound in the morning.", o: ["Chirp", "Moo", "Roar", "Quack"], a: 0 },
      { id: 15, q: "Which bird swims gracefully in water and says \"Quack-Quack\"?", o: ["Duck", "Peacock", "Pigeon", "Crow"], a: 0 },
      { id: 16, q: "Select the peaceful bird that is typically grey or white:", o: ["Pigeon", "Parrot", "Eagle", "Rooster"], a: 0 },
      { id: 17, q: "Birds are able to fly high through the air using their ____.", o: ["Wings", "Legs", "Teeth", "Hands"], a: 0 },
      { id: 18, q: "Unscramble these letters to find a bird name: o-C-r-w", o: ["Crow", "Cow", "Cat", "Owl"], a: 0 },
      { id: 19, q: "Which bird stays wide awake hunting at night?", o: ["Owl", "Sparrow", "Parrot", "Peacock"], a: 0 },
      { id: 20, q: "Complete the bird spelling: S p a r r _ w", o: ["o", "a", "e", "i"], a: 0 }
    ]
  },
  {
    title: "SECTION C: UNIT 3 - RAINBOW",
    questions: [
      { id: 21, q: "How many beautiful colors make up a complete rainbow?", o: ["Seven", "Five", "Six", "Eight"], a: 0 },
      { id: 22, q: "When do we most frequently spot a rainbow in the sky?", o: ["After a rain shower", "During winter nights", "At midnight", "Inside a dark cave"], a: 0 },
      { id: 23, q: "Which of the following is a primary rainbow color?", o: ["Violet", "Pink", "Black", "Brown"], a: 0 },
      { id: 24, q: "Complete the sequence: Red, Orange, ____, Green", o: ["Yellow", "Blue", "White", "Purple"], a: 0 },
      { id: 25, q: "A rainbow curves across the sky like a giant, colorful ____.", o: ["Arch", "Square", "Triangle", "Box"], a: 0 },
      { id: 26, q: "Which color sits at the very outer/top band of a rainbow?", o: ["Red", "Violet", "Green", "Blue"], a: 0 },
      { id: 27, q: "Cool rain drops fall down to earth from heavy ____.", o: ["Clouds", "Trees", "Ground", "Rocks"], a: 0 },
      { id: 28, q: "Point out the correct spelling for this sky phenomenon:", o: ["Rainbow", "Rainbw", "Ranbow", "Reinbow"], a: 0 },
      { id: 29, q: "Find a word that rhymes perfectly with 'Rain':", o: ["Main", "Run", "Sun", "Pin"], a: 0 },
      { id: 30, q: "A rainbow always displays itself high up in the ____.", o: ["Sky", "Water", "Mud", "Grass"], a: 0 }
    ]
  },
  {
    title: "SECTION D: UNIT 4 - LION OR DONKEY?",
    questions: [
      { id: 31, q: "The strong lion is traditionally called the king of the ____.", o: ["Jungle", "River", "Sky", "Ocean"], a: 0 },
      { id: 32, q: "What kind of sound does a donkey make?", o: ["Bray", "Roar", "Mew", "Bark"], a: 0 },
      { id: 33, q: "How do we describe a brave lion's nature?", o: ["Brave", "Weak", "Fearful", "Tiny"], a: 0 },
      { id: 34, q: "In the textbook story, what did the donkey wear to scare others?", o: ["A lion's skin", "A tiger's coat", "A blanket", "A large leaf"], a: 0 },
      { id: 35, q: "The villagers quickly discovered it was a donkey because it ____.", o: ["Started braying", "Ran away fast", "Fell asleep", "At green grass"], a: 0 },
      { id: 36, q: "A donkey is helper animal often carrying heavy ____ for humans.", o: ["Loads", "Cars", "Houses", "Rivers"], a: 0 },
      { id: 37, q: "Grammar practice: What is the exact opposite of the word 'Brave'?", o: ["Coward", "Strong", "Happy", "Quick"], a: 0 },
      { id: 38, q: "Choose the correct plural form of the word 'Lion':", o: ["Lions", "Liones", "Lioness", "Lionis"], a: 0 },
      { id: 39, q: "Fill in the blank: An angry lion can ____ very loudly.", o: ["Roar", "Chirp", "Quack", "Whistle"], a: 0 },
      { id: 40, q: "Identify the correct spelling for this farm animal:", o: ["Donkey", "Donky", "Dankey", "Donki"], a: 0 }
    ]
  },
  {
    title: "SECTION E: UNIT 5 - SWIMMING",
    questions: [
      { id: 41, q: "Which animal lives completely in water and swims all day?", o: ["Fish", "Monkey", "Cat", "Cow"], a: 0 },
      { id: 42, q: "A little green frog can swim in pools and ____ on grass.", o: ["Hop", "Fly", "Sleep", "Sing"], a: 0 },
      { id: 43, q: "We practice safe water exercises inside a managed swimming ____.", o: ["Pool", "Road", "Box", "Field"], a: 0 },
      { id: 44, q: "Action word: Moving your body safely through water is called ____.", o: ["Swimming", "Running", "Jumping", "Dancing"], a: 0 },
      { id: 45, q: "Water birds like ducks possess webbed ____ to push water back.", o: ["Feet", "Ears", "Eyes", "Wings"], a: 0 },
      { id: 46, q: "Find a word that rhymes perfectly with 'Swim':", o: ["Brim", "Sun", "Run", "Hat"], a: 0 },
      { id: 47, q: "What special clothing should you wear to swim comfortably?", o: ["Swimsuit", "Winter coat", "Woolen sweater", "Leather boots"], a: 0 },
      { id: 48, q: "Clean water is limited. Young children should never ____ it.", o: ["Waste", "Protect", "Save", "Store"], a: 0 },
      { id: 49, q: "Complete this fun action word: H _ P", o: ["o", "a", "e", "u"], a: 0 },
      { id: 50, q: "Identify the odd one out (the animal that cannot swim at all):", o: ["Sparrow", "Fish", "Duck", "Frog"], a: 0 }
    ]
  }
];

export default function QuestionPaperPage() {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [teacherName, setTeacherName] = useState('');

  const handleOptionChange = (questionId, optionIndex) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const calculateFinalScore = () => {
    let totalScore = 0;
    examPaperData.forEach((section) => {
      section.questions.forEach((question) => {
        if (answers[question.id] === question.a) {
          totalScore++;
        }
      });
    });
    return totalScore;
  };

  const handlePaperSubmit = (e) => {
    e.preventDefault();
    if (!studentName.trim()) {
      alert("કૃપા કરીને સબમિટ કરતા પહેલા વિદ્યાર્થીનું નામ લખો.");
      return;
    }
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
    setStudentName('');
    setRollNumber('');
    setTeacherName('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-8 px-4 flex flex-col items-center print:bg-white print:py-0">

      {/* Top Action Bar (Hidden during print) */}
      <div className="w-full max-w-4xl flex justify-between mb-4 print:hidden">
        <span className="text-sm text-neutral-500 self-center font-sans">
          {isSubmitted ? "✓ પેપર સબમિટ થઈ ગયું છે. હવે તમે PDF સેવ કરી શકો છો." : "📝 પરીક્ષા ચાલુ છે..."}
        </span>
        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 transition font-sans text-sm"
        >
          <span>🖨️</span> {isSubmitted ? "પરિણામની PDF સેવ કરો / પ્રિન્ટ" : "ખાલી પેપર પ્રિન્ટ કરો"}
        </button>
      </div>

      <div className="w-full max-w-4xl bg-white border-2 border-neutral-800 shadow-xl p-6 sm:p-12 relative font-serif print:border-none print:shadow-none print:p-0">

        {/* Exam Paper Official Header */}
        <div className="text-center border-b-4 border-double border-neutral-800 pb-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase text-neutral-900 mb-2">
            પલાજ પ્રાયમરી સ્કૂલ, તા.&જી-મહેસાણા
          </h1>
          <h2 className="text-xl font-bold text-neutral-800 mt-1">
            {isSubmitted ? "પ્રથમ સત્ર પરીક્ષા - વિદ્યાર્થી ગુણપત્રક (Result)" : "પ્રથમ સત્ર પરીક્ષા (ધોરણ - ૩ પ્રશ્નાવલી)"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm font-semibold text-neutral-700 mt-4 px-2 text-left sm:text-center">
            <div>ધોરણ: ૩ (Three)</div>
            <div>વિષય: ENGLISH</div>
            <div>વર્ષ: ૨૦૨૬-૨૭</div>
            <div>કુલ ગુણ: ૫૦</div>
          </div>
        </div>

        {/* Student & Teacher Information Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-50 border border-neutral-300 p-4 rounded mb-6 text-sm print:bg-transparent print:border-neutral-400">
          <div className="flex items-center gap-2">
            <label className="font-bold text-neutral-800 whitespace-nowrap">વિદ્યાર્થીનું નામ:</label>
            <span className="hidden print:inline font-sans font-medium">{studentName || '___________'}</span>
            <input
              type="text"
              disabled={isSubmitted}
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="અહીં નામ લખો"
              className="w-full bg-transparent border-b border-neutral-400 focus:border-neutral-800 outline-none px-1 py-0.5 font-sans print:hidden"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-bold text-neutral-800 whitespace-nowrap">રોલ નંબર:</label>
            <span className="hidden print:inline font-sans font-medium">{rollNumber || '_____'}</span>
            <input
              type="text"
              disabled={isSubmitted}
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              placeholder="નંબર"
              className="w-full bg-transparent border-b border-neutral-400 focus:border-neutral-800 outline-none px-1 py-0.5 font-sans print:hidden"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-bold text-neutral-800 whitespace-nowrap">વર્ગશિક્ષકનું નામ:</label>
            <span className="hidden print:inline font-sans font-medium">{teacherName || '___________'}</span>
            <input
              type="text"
              disabled={isSubmitted}
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              placeholder="શિક્ષકનું નામ"
              className="w-full bg-transparent border-b border-neutral-400 focus:border-neutral-800 outline-none px-1 py-0.5 font-sans print:hidden"
            />
          </div>
        </div>

        {/* Online Evaluation Results Header */}
        {isSubmitted && (
          <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 mb-8 text-center font-sans print:bg-neutral-100 print:border-neutral-800">
            <h3 className="text-xl font-bold text-green-800 mb-1 print:text-neutral-900">પરીક્ષા પરિણામ પત્રક (Evaluation Sheet)</h3>
            <p className="text-gray-600 text-sm print:text-neutral-700">
              વિદ્યાર્થી: <span className="font-bold text-gray-900">{studentName}</span> {rollNumber && `| રોલ નં: ${rollNumber}`} {teacherName && `| વર્ગશિક્ષક: ${teacherName}`}
            </p>
            <div className="text-4xl font-extrabold text-green-700 my-3 print:text-neutral-900">
              મેળવેલ કુલ ગુણ: {calculateFinalScore()} / ૫૦
            </div>
            <div className="mt-4 flex justify-center gap-3 print:hidden">
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2 bg-green-600 text-white font-semibold rounded text-sm hover:bg-green-700 transition"
              >
                💾 આ રિઝલ્ટ PDF ડાઉનલોડ કરો
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 bg-neutral-800 text-white rounded font-semibold text-sm hover:bg-neutral-900 transition"
              >
                ફરીથી નવું પેપર શરૂ કરો
              </button>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!isSubmitted && (
          <div className="border border-neutral-400 p-3 rounded mb-8 bg-neutral-50 text-xs text-neutral-700 leading-relaxed print:bg-transparent">
            <span className="font-bold block text-neutral-900 mb-1">સામાન્ય સૂચનાઓ:</span>
            ૧. બધા પ્રશ્નો ફરજિયાત છે. દરેક પ્રશ્નનો ૧ ગુણ છે.<br />
            ૨. નીચે આપેલા વિકલ્પોમાંથી સાચો વિકલ્પ પસંદ કરીને નિશાની કરો.<br />
            ૩. પેપર પૂરું થયા પછી નીચે આપેલા સબમિટ બટન પર ક્લિક કરો (ઓનલાઇન મૂલ્યાંકન માટે).
          </div>
        )}

        {/* Question Form */}
        <form onSubmit={handlePaperSubmit} className="space-y-8">
          {examPaperData.map((section, sIdx) => (
            <div key={sIdx} className="border-t border-neutral-300 pt-6 print:break-inside-avoid">
              <h3 className="text-base font-bold bg-neutral-800 text-white px-3 py-1 rounded inline-block tracking-wider mb-6 print:bg-neutral-200 print:text-neutral-900 print:border print:border-neutral-400">
                {section.title}
              </h3>

              <div className="space-y-6 pl-1">
                {section.questions.map((question) => {
                  const studentChoice = answers[question.id];
                  const isCorrect = studentChoice === question.a;
                  return (
                    <div key={question.id} className="text-sm text-neutral-900 leading-relaxed print:break-inside-avoid">
                      <div className="font-semibold mb-2">
                        <span>{question.id}. </span>
                        {question.q}

                        {/* Interactive Verification labels */}
                        {isSubmitted && (
                          <span className={`ml-2 text-xs font-bold px-1.5 py-0.5 rounded print:inline ${isCorrect ? 'bg-green-100 text-green-800 print:text-green-900 print:bg-transparent' : 'bg-red-100 text-red-800 print:text-red-900 print:bg-transparent'
                            }`}>
                            {isCorrect ? '✓ સાચો જવાબ' : `✗ ખોટો (સાચો: ${String.fromCharCode(65 + question.a)})`}
                          </span>
                        )}
                      </div>

                      {/* Options Layout */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 font-sans text-xs">
                        {question.o.map((option, oIdx) => {
                          const isOptionSelected = studentChoice === oIdx;
                          const isThisCorrectAnswer = question.a === oIdx;

                          return (
                            <label
                              key={oIdx}
                              className={`flex items-center gap-3 p-2 border rounded cursor-pointer transition-colors ${isOptionSelected
                                ? 'border-neutral-800 bg-neutral-100 font-semibold print:bg-neutral-200 print:border-neutral-600'
                                : 'border-neutral-200 bg-white'
                                } ${isSubmitted && isThisCorrectAnswer ? 'print:border-green-600 print:border-2' : ''} ${isSubmitted ? 'pointer-events-none' : ''
                                }`}
                            >
                              <input
                                type="radio"
                                readOnly
                                disabled={isSubmitted}
                                name={`question-${question.id}`}
                                checked={isOptionSelected}
                                onClick={() => handleOptionChange(question.id, oIdx)}
                                className="w-3.5 h-3.5 accent-neutral-800 print:opacity-100"
                              />
                              <span className="flex items-center justify-between w-full">
                                <span>
                                  <strong className="mr-1">{String.fromCharCode(65 + oIdx)})</strong>
                                  {option}
                                </span>
                                {isSubmitted && isOptionSelected && (
                                  <span className="text-[10px] uppercase font-bold text-neutral-500 print:inline">
                                    (બાળકનો જવાબ)
                                  </span>
                                )}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Submit Button (Hidden during print) */}
          {!isSubmitted && (
            <div className="border-t-2 border-neutral-800 pt-6 mt-10 flex justify-center print:hidden">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-neutral-900 text-white font-bold rounded shadow hover:bg-neutral-800 transition transform hover:-translate-y-0.5 font-sans"
              >
                સબમિટ કરો અને પરિણામ જુઓ (Submit Paper)
              </button>
            </div>
          )}
        </form>

        {/* Teacher's Signature Block (Visible on printed report) */}
        {isSubmitted && (
          <div className="hidden print:flex justify-between items-center mt-12 pt-8 border-t border-dashed border-neutral-400 font-sans text-xs">
            <div>તારીખ: ____/____/________</div>
            <div className="text-center">
              <div className="h-8"></div>
              <div>______________________</div>
              <div className="font-bold mt-1">વર્ગશિક્ષકની સહી</div>
            </div>
            <div className="text-center">
              <div className="h-8"></div>
              <div>______________________</div>
              <div className="font-bold mt-1">આચાર્યશ્રીની સહી</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
