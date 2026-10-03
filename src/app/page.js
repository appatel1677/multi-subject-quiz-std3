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
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
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
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'serif', boxSizing: 'border-box', width: '100%' }}>

      {/* Top Action Bar */}
      <div style={{ width: '100%', maxWidth: '850px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', boxSizing: 'border-box' }}>
        <span style={{ fontSize: '14px', color: '#666', fontFamily: 'sans-serif' }}>
          {isSubmitted ? "✓ પેપર સબમિટ થઈ ગયું છે. હવે તમે PDF સેવ કરી શકો છો." : "📝 પરીક્ષા ચાલુ છે..."}
        </span>
        <button
          type="button"
          onClick={handlePrint}
          style={{ padding: '10px 20px', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px', fontFamily: 'sans-serif' }}
        >
          🖨️ {isSubmitted ? "પરિણામની PDF સેવ કરો / પ્રિન્ટ" : "ખાલી પેપર પ્રિન્ટ કરો"}
        </button>
      </div>

      {/* Main Exam Paper Sheet */}
      <div style={{ width: '100%', maxWidth: '850px', backgroundColor: 'white', border: '2px solid #222', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', padding: '25px', boxSizing: 'border-box' }}>

        {/* Header Block */}
        <div style={{ textAlign: 'center', borderBottom: '4px double #222', paddingBottom: '15px', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#111' }}>
            પલાજ પ્રાયમરી સ્કૂલ, તા.&જી-મહેસાણા
          </h1>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', margin: 0 }}>
            {isSubmitted ? "પ્રથમ સત્ર પરીક્ષા - વિદ્યાર્થી ગુણપત્રક (Result)" : "પ્રથમ સત્ર પરીક્ષા (ધોરણ - ૩ પ્રશ્નાવલી)"}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', fontSize: '14px', fontWeight: '600', color: '#444', marginTop: '15px' }}>
            <div>ધોરણ: ૩ (Three)</div>
            <div>વિષય: ENGLISH</div>
            <div>વર્ષ: ૨૦૨૬-૨૭</div>
            <div>કુલ ગુણ: ૫૦</div>
          </div>
        </div>

        {/* Student & Teacher Info Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '25px', fontSize: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#333' }}>વિદ્યાર્થીનું નામ:</span>
            <input
              type="text"
              disabled={isSubmitted}
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="અહીં નામ લખો"
              style={{ flex: 1, backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #777', outline: 'none', padding: '2px 5px', fontFamily: 'sans-serif' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#333' }}>રોલ નંબર:</span>
            <input
              type="text"
              disabled={isSubmitted}
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              placeholder="નંબર"
              style={{ flex: 1, backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #777', outline: 'none', padding: '2px 5px', fontFamily: 'sans-serif' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#333' }}>વર્ગશિક્ષક:</span>
            <input
              type="text"
              disabled={isSubmitted}
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              placeholder="શિક્ષકનું નામ"
              style={{ flex: 1, backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #777', outline: 'none', padding: '2px 5px', fontFamily: 'sans-serif' }}
            />
          </div>
        </div>

        {/* Evaluation Score Board */}
        {isSubmitted && (
          <div style={{ backgroundColor: '#e6f4ea', border: '2px solid #137333', borderRadius: '8px', padding: '20px', marginBottom: '30px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#137333', margin: '0 0 5px 0' }}>પરીક્ષા પરિણામ પત્રક (Evaluation Sheet)</h3>
            <div style={{ fontSize: '14px', color: '#555' }}>
              વિદ્યાર્થી: <strong>{studentName}</strong> {rollNumber && `| રોલ નં: ${rollNumber}`} {teacherName && `| વર્ગશિક્ષક: ${teacherName}`}
            </div>
            <div style={{ fontSize: '32px', fontWeight: '800', color: '#137333', margin: '10px 0' }}>
              મેળવેલ કુલ ગુણ: {calculateFinalScore()} / ૫૦
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px' }}>
              <button type="button" onClick={handlePrint} style={{ padding: '8px 16px', backgroundColor: '#137333', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}>
                💾 આ રિઝલ્ટ PDF ડાઉનલોડ કરો
              </button>
              <button type="button" onClick={handleReset} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}>
                ફરીથી નવું પેપર શરૂ કરો
              </button>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!isSubmitted && (
          <div style={{ border: '1px solid #999', padding: '12px', borderRadius: '4px', marginBottom: '30px', backgroundColor: '#fafafa', fontSize: '13px', color: '#444', lineHeight: '1.6' }}>
            <strong>સામાન્ય સૂચનાઓ:</strong><br />
            ૧. બધા પ્રશ્નો ફરજિયાત છે. દરેક પ્રશ્નનો ૧ ગુણ છે.<br />
            ૨. નીચે આપેલા વિકલ્પોમાંથી સાચો વિકલ્પ પસંદ કરીને નિશાની કરો.<br />
            ૩. પેપર પૂરું થયા પછી નીચે આપેલા સબમિટ બટન પર ક્લિક કરો (ઓનલાઇન મૂલ્યાંકન માટે).
          </div>
        )}

        {/* Question Form */}
        <form onSubmit={handlePaperSubmit}>
          {examPaperData.map((section, sIdx) => (
            <div key={sIdx} style={{ borderTop: '1px solid #ccc', paddingTop: '20px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 'bold', backgroundColor: '#222', color: 'white', padding: '5px 12px', borderRadius: '3px', display: 'inline-block', margin: '0 0 20px 0' }}>
                {section.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {section.questions.map((question) => {
                  const studentChoice = answers[question.id];
                  const isCorrect = studentChoice === question.a;

                  return (
                    <div key={question.id} style={{ marginBottom: '15px', fontSize: '15px', color: '#111', lineHeight: '1.5' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                        {question.id}. {question.q}
                        {isSubmitted && (
                          <span style={{ marginLeft: '10px', fontSize: '11px', backgroundColor: isCorrect ? '#e6f4ea' : '#fce8e6', color: isCorrect ? '#137333' : '#c5221f', padding: '2px 6px', borderRadius: '3px', fontWeight: 'bold' }}>
                            {isCorrect ? '✓ સાચો જવાબ' : `✗ ખોટો (સાચો: ${String.fromCharCode(65 + question.a)})`}
                          </span>
                        )}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', fontFamily: 'sans-serif', fontSize: '13px', width: '100%' }}>
                        {question.o.map((option, oIdx) => {
                          const isOptionSelected = studentChoice === oIdx;
                          const isThisCorrect = question.a === oIdx;

                          let bg = '#fff';
                          let border = '1px solid #ddd';
                          let weight = 'normal';

                          if (isOptionSelected) {
                            bg = '#f0f0f0';
                            border = '1px solid #111';
                            weight = 'bold';
                          }
                          if (isSubmitted && isThisCorrect) {
                            border = '2px solid #137333';
                          }

                          return (
                            <label key={oIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', borderRadius: '4px', cursor: isSubmitted ? 'default' : 'pointer', backgroundColor: bg, border: border, fontWeight: weight }}>
                              <input
                                type="radio"
                                name={`question-${question.id}`}
                                disabled={isSubmitted}
                                checked={isOptionSelected}
                                onChange={() => handleOptionChange(question.id, oIdx)}
                              />
                              <span style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <span>
                                  <strong style={{ marginRight: '5px' }}>{String.fromCharCode(65 + oIdx)})</strong>
                                  {option}
                                </span>
                                {isSubmitted && isOptionSelected && (
                                  <span style={{ fontSize: '10px', color: '#666', fontWeight: 'bold' }}>
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

          {/* Form Actions Row */}
          {!isSubmitted && (
            <div style={{ borderTop: '2px solid #222', paddingTop: '25px', marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
              <button type="submit" style={{ padding: '12px 35px', backgroundColor: '#111', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>
                સબમિટ કરો અને પરિણામ જુઓ (Submit Paper)
              </button>
            </div>
          )}
        </form>

        {/* Signature Area */}
        {isSubmitted && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px dashed #999', fontSize: '13px', fontFamily: 'sans-serif' }}>
            <div>તારીખ: ____/____/________</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ height: '30px' }}></div>
              <div>______________________</div>
              <div style={{ fontWeight: 'bold', marginTop: '4px' }}>વર્ગશિક્ષકની સહી</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ height: '30px' }}></div>
              <div>______________________</div>
              <div style={{ fontWeight: 'bold', marginTop: '4px' }}>આચાર્યશ્રીની સહી</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}