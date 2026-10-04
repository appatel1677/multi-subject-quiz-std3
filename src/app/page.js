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

  // Custom Header & Student States
  const [schoolName, setSchoolName] = useState('');
  const [talukaDist, setTalukaDist] = useState('');
  const [studentName, setStudentName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [examDate, setExamDate] = useState('');

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
    setExamDate('');
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper values for display
  const displaySchool = schoolName.trim() || 'પાલજ પ્રાયમરી સ્કૂલ';
  const displayTalukaDist = talukaDist.trim() || 'તા.&જી-મહેસાણા';

  return (
    <div style={{ backgroundColor: '#eef2f5', minHeight: '100vh', padding: '15px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif', boxSizing: 'border-box', width: '100%' }}>

      {/* Top Action Bar */}
      <div style={{ width: '100%', maxWidth: '850px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
        <span style={{ fontSize: '14px', color: '#15803d', fontWeight: 'bold' }}>
          {isSubmitted ? "✓ અસાઇન્મેન્ટ સબમિટ થઈ ગયું છે." : "📝 ધોરણ-૩ અસાઇન્મેન્ટ ચાલુ છે..."}
        </span>
        <button
          type="button"
          onClick={handlePrint}
          style={{ padding: '8px 16px', backgroundColor: '#1e40af', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
        >
          🖨️ {isSubmitted ? "રિઝલ્ટ PDF ડાઉનલોડ કરો" : "અસાઇન્મેન્ટ પ્રિન્ટ કરો"}
        </button>
      </div>

      {/* Main Assignment Sheet */}
      <div style={{ width: '100%', maxWidth: '850px', backgroundColor: 'white', border: '2px solid #1e3a8a', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', padding: '15px 20px', boxSizing: 'border-box', overflow: 'hidden' }}>

        {/* Dynamic School Header */}
        <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', color: 'white', borderRadius: '8px', padding: '18px 12px', textAlign: 'center', marginBottom: '20px', boxShadow: '0 4px 10px rgba(30,58,138,0.2)' }}>

          {/* School Name & Taluka Inputs / Displays */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <input
              type="text"
              disabled={isSubmitted}
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="પાલજ પ્રાયમરી સ્કૂલ"
              style={{ width: '100%', maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.4)', borderRadius: '6px', padding: '6px 12px', fontSize: '20px', fontWeight: 'bold', color: '#ffffff', textAlign: 'center', outline: 'none' }}
            />
            <input
              type="text"
              disabled={isSubmitted}
              value={talukaDist}
              onChange={(e) => setTalukaDist(e.target.value)}
              placeholder="તા.&જી-મહેસાણા"
              style={{ width: '100%', maxWidth: '300px', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.4)', borderRadius: '6px', padding: '4px 10px', fontSize: '13px', color: '#ffffff', textAlign: 'center', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'inline-block', backgroundColor: '#facc15', color: '#1e3a8a', padding: '4px 14px', borderRadius: '20px', fontWeight: 'bold', fontSize: '15px', margin: '4px 0' }}>
            {isSubmitted ? "ધોરણ-૩ પ્રથમ સત્ર અસાઇન્મેન્ટ પરિણામ" : "ધોરણ-૩ પ્રથમ સત્ર અસાઇન્મેન્ટ"}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', fontSize: '13px', fontWeight: '600', marginTop: '10px', opacity: 0.95 }}>
            <div>વિષય: ENGLISH</div>
            <div>વર્ષ: ૨૦૨૬-૨૭</div>
            <div>કુલ ગુણ: ૫૦</div>
          </div>
        </div>

        {/* Student & Date Form Box */}
        <div style={{ backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', padding: '12px 15px', borderRadius: '8px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>

          {/* Student Name Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
            <span style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '14px', minWidth: '100px' }}>વિદ્યાર્થીનું નામ:</span>
            <input
              type="text"
              disabled={isSubmitted}
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="અહીં પૂરું નામ લખો"
              style={{ flex: 1, backgroundColor: '#ffffff', border: '1px solid #94a3b8', borderRadius: '4px', padding: '6px 10px', fontSize: '14px', color: '#0f172a', outline: 'none', width: '100%' }}
            />
          </div>

          {/* Roll No, Teacher & Date Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '14px', minWidth: '60px' }}>રોલ નં:</span>
              <input
                type="text"
                disabled={isSubmitted}
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                placeholder="નંબર"
                style={{ flex: 1, backgroundColor: '#ffffff', border: '1px solid #94a3b8', borderRadius: '4px', padding: '6px 10px', fontSize: '14px', color: '#0f172a', outline: 'none', width: '100%' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '14px', minWidth: '70px' }}>વર્ગશિક્ષક:</span>
              <input
                type="text"
                disabled={isSubmitted}
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                placeholder="શિક્ષકનું નામ"
                style={{ flex: 1, backgroundColor: '#ffffff', border: '1px solid #94a3b8', borderRadius: '4px', padding: '6px 10px', fontSize: '14px', color: '#0f172a', outline: 'none', width: '100%' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '14px', minWidth: '50px' }}>તારીખ:</span>
              <input
                type="date"
                disabled={isSubmitted}
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                style={{ flex: 1, backgroundColor: '#ffffff', border: '1px solid #94a3b8', borderRadius: '4px', padding: '5px 8px', fontSize: '13px', color: '#0f172a', outline: 'none', width: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* Evaluation Score Card */}
        {isSubmitted && (
          <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '10px', padding: '15px', marginBottom: '25px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#15803d', margin: '0 0 5px 0' }}>અસાઇન્મેન્ટ ગુણપત્રક</h3>
            <div style={{ fontSize: '13px', color: '#334155' }}>
              શાળા: <strong>{displaySchool}</strong> ({displayTalukaDist})<br />
              વિદ્યાર્થી: <strong>{studentName}</strong> {rollNumber && `| રોલ નં: ${rollNumber}`} {teacherName && `| વર્ગશિક્ષક: ${teacherName}`} {examDate && `| તારીખ: ${examDate}`}
            </div>
            <div style={{ fontSize: '28px', fontWeight: '800', color: '#16a34a', margin: '8px 0' }}>
              મેળવેલ કુલ ગુણ: {calculateFinalScore()} / ૫૦
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
              <button type="button" onClick={handlePrint} style={{ padding: '8px 14px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}>
                💾 પરિણામ PDF ડાઉનલોડ કરો
              </button>
              <button type="button" onClick={handleReset} style={{ padding: '8px 14px', backgroundColor: '#334155', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}>
                ફરીથી શરૂ કરો
              </button>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!isSubmitted && (
          <div style={{ backgroundColor: '#f1f5f9', borderLeft: '4px solid #3b82f6', padding: '10px 12px', borderRadius: '4px', marginBottom: '20px', fontSize: '13px', color: '#334155', lineHeight: '1.5' }}>
            <strong>સૂચનાઓ:</strong> ૧. બધા પ્રશ્નોના ઉત્તર આપવા ફરજિયાત છે. ૨. સાચો વિકલ્પ પસંદ કરો. ૩. પૂર્ણ થયા પછી નીચે આપેલા સબમિટ બટન પર ક્લિક કરો.
          </div>
        )}

        {/* Questions Section */}
        <form onSubmit={handlePaperSubmit}>
          {examPaperData.map((section, sIdx) => (
            <div key={sIdx} style={{ borderTop: '2px solid #e2e8f0', paddingTop: '15px', marginBottom: '25px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', backgroundColor: '#1e3a8a', color: 'white', padding: '6px 12px', borderRadius: '5px', display: 'inline-block', margin: '0 0 15px 0' }}>
                {section.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {section.questions.map((question) => {
                  const studentChoice = answers[question.id];
                  const isCorrect = studentChoice === question.a;

                  return (
                    <div key={question.id} style={{ fontSize: '14px', color: '#0f172a' }}>
                      <div style={{ fontWeight: '600', marginBottom: '8px', lineHeight: '1.4' }}>
                        {question.id}. {question.q}
                        {isSubmitted && (
                          <span style={{ marginLeft: '8px', fontSize: '11px', backgroundColor: isCorrect ? '#dcfce7' : '#fee2e2', color: isCorrect ? '#15803d' : '#b91c1c', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                            {isCorrect ? '✓ સાચો' : `✗ ખોટો (સાચો: ${String.fromCharCode(65 + question.a)})`}
                          </span>
                        )}
                      </div>

                      {/* Options Grid */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', width: '100%' }}>
                        {question.o.map((option, oIdx) => {
                          const isOptionSelected = studentChoice === oIdx;
                          const isThisCorrect = question.a === oIdx;

                          let bg = '#ffffff';
                          let border = '1px solid #cbd5e1';
                          let weight = 'normal';

                          if (isOptionSelected) {
                            bg = '#e0f2fe';
                            border = '1.5px solid #0284c7';
                            weight = 'bold';
                          }
                          if (isSubmitted && isThisCorrect) {
                            border = '2px solid #16a34a';
                            bg = '#f0fdf4';
                          }

                          return (
                            <label key={oIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', borderRadius: '6px', cursor: isSubmitted ? 'default' : 'pointer', backgroundColor: bg, border: border, fontWeight: weight, fontSize: '13px' }}>
                              <input
                                type="radio"
                                name={`question-${question.id}`}
                                disabled={isSubmitted}
                                checked={isOptionSelected}
                                onChange={() => handleOptionChange(question.id, oIdx)}
                              />
                              <span style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <span>
                                  <strong style={{ marginRight: '4px' }}>{String.fromCharCode(65 + oIdx)})</strong>
                                  {option}
                                </span>
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

          {/* Submit Button */}
          {!isSubmitted && (
            <div style={{ borderTop: '2px solid #1e3a8a', paddingTop: '20px', marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
              <button type="submit" style={{ width: '100%', maxWidth: '350px', padding: '12px 20px', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(30,58,138,0.3)' }}>
                સબમિટ અસાઇન્મેન્ટ (Submit)
              </button>
            </div>
          )}
        </form>

        {/* Footer Signature */}
        {isSubmitted && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', paddingTop: '15px', borderTop: '1px dashed #94a3b8', fontSize: '12px', color: '#475569' }}>
            <div>તારીખ: {examDate || '____/____/________'}</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ height: '25px' }}></div>
              <div>______________________</div>
              <div style={{ fontWeight: 'bold', marginTop: '2px' }}>વર્ગશિક્ષકની સહી</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ height: '25px' }}></div>
              <div>______________________</div>
              <div style={{ fontWeight: 'bold', marginTop: '2px' }}>આચાર્યશ્રીની સહી</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}