'use client';

import React, { useState } from 'react';

const mathsExamData = [
    {
        title: "પ્રકરણ ૧: નામમાં શું છે?",
        questions: [
            { id: 1, q: "'ગુજરાત' શબ્દમાં અક્ષરોની સંખ્યા કેટલી છે?", o: ["૪", "૩", "૫", "૬"], a: 0 },
            { id: 2, q: "માહિતી રજૂ કરવા માટે શાનો ઉપયોગ થાય છે?", o: ["ટેલીમાર્ક (Tally Marks)", "ચિત્રો", "અંકો", "આપેલ તમામ"], a: 3 },
            { id: 3, q: "૫ અક્ષરવાળું નામ ઓળખો:", o: ["મહેસાણા", "પાલજ", "ભારત", "સ્કૂલ"], a: 0 },
            { id: 4, q: "'કમળ' શબ્દમાં કેટલા અક્ષરો છે?", o: ["૩", "૨", "૪", "૫"], a: 0 },
            { id: 5, q: "ટેલીમાર્કમાં ૪ ને દર્શાવવા કેટલી ઊભી કે આડી લીટી થાય?", o: ["૪", "૩", "૫", "૨"], a: 0 },
            { id: 6, q: "સૌથી લાંબુ નામ શોધવા શું ગણવું પડે?", o: ["અક્ષરોની સંખ્યા", "અક્ષરનો વજન", "શબ્દનો અર્થ", "કઈ નહીં"], a: 0 },
            { id: 7, q: "જો વર્ગમાં ૩ બાળકોના નામ 'ઓમ' હોય, તો અક્ષરોની કુલ સંખ્યા કેટલી થાય?", o: ["૬", "૩", "૯", "૨"], a: 0 },
            { id: 8, q: "ટેલીમાર્કમાં ૫ ને દર્શાવવા ૪ લીટી ઉપર ૧ લીટી કેવી કરાય છે?", o: ["ત્રાસી", "ગોળ", "ઉભી", "આડી"], a: 0 },
            { id: 9, q: "'અમદાવાદ' શબ્દમાં અક્ષરો કેટલા?", o: ["૫", "૪", "૬", "૩"], a: 0 },
            { id: 10, q: "સરખા અક્ષરવાળા નામોનું જૂથ બનાવવું એ શાનું ઉદાહરણ છે?", o: ["માહિતીનું વર્ગીકરણ", "બાદબાકી", "ગુણાકાર", "ભાગાકાર"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૨: રમકડાંની રમતનો આનંદ",
        questions: [
            { id: 11, q: "દડાની સપાટી કેવી હોય છે?", o: ["વક્ર (ગોળ)", "સપાટ", "ખૂણાવાળી", "ચોરસ"], a: 0 },
            { id: 12, q: "લુડોના પાસાની સપાટી કેવી હોય છે?", o: ["સપાટ", "ગોળ", "વક્ર", "નળાકાર"], a: 0 },
            { id: 13, q: "નીચેનામાંથી કઈ વસ્તુ ગબડી શકે છે?", o: ["લખોટી", "ઈંટ", "મેચબોક્સ", "પુસ્તક"], a: 0 },
            { id: 14, q: "કઈ વસ્તુ સરકી અને ગબડી બંને શકે છે?", o: ["રૂપિયાનો સિક્કો", "દડો", "ઈંટ", "પત્થર"], a: 0 },
            { id: 15, q: "ચોરસ રમકડાને કેટલા ખૂણા હોય છે?", o: ["૪", "૩", "૫", "૬"], a: 0 },
            { id: 16, q: "ગોળ રમકડાને કેટલી ધાર (કિનારી) હોય છે?", o: ["૦ (એકપણ નહીં)", "૧", "૨", "૪"], a: 0 },
            { id: 17, q: "રમકડાની લંબાઈ માપવા માટે નાનો એકમ કયો?", o: ["સેન્ટીમીટર (સેમી)", "મીટર", "કિલોમીટર", "લીટર"], a: 0 },
            { id: 18, q: "સરકી શકે તેવી વસ્તુ કઈ છે?", o: ["કંપાસબોક્સ", "લખોટી", "દડો", "ટામેટું"], a: 0 },
            { id: 19, q: "રમકડાની ગાડીના પૈડાનો આકાર કેવો હોય છે?", o: ["વર્તુળ (ગોળ)", "ચોરસ", "ત્રિકોણ", "લંબચોરસ"], a: 0 },
            { id: 20, q: "રમકડાંની થપ્પી (Tower) કઈ વસ્તુથી સરળતાથી બને?", o: ["સપાટ તળિયાવાળા બોક્સ", "ગોળ દડા", "લખોટી", "ઈંડા"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૩: બેવડી સદી",
        questions: [
            { id: 21, q: "૧ સદી એટલે કેટલા રન થાય?", o: ["૧૦૦", "૫૦", "૨૦૦", "૧૫૦"], a: 0 },
            { id: 22, q: "બેવડી સદી એટલે કેટલા થાય?", o: ["૨૦૦", "૧૦૦", "૩૦૦", "૧૫૦"], a: 0 },
            { id: 23, q: "૧૯૯ માં ૧ ઉમેરતાં કેટલા થાય?", o: ["૨૦૦", "૧૯૦", "૨૦૧", "૨૧૦"], a: 0 },
            { id: 24, q: "વિરાટે ૧૯૮ રન કર્યા. બેવડી સદી કરવા કેટલા રન ખૂટે?", o: ["૨ રન", "૧ રન", "૫ રન", "૧૦ રન"], a: 0 },
            { id: 25, q: "૨ દશક અને ૫ એકમ એટલે કેટલા?", o: ["૨૫", "૫૨", "૨૦", "૫"], a: 0 },
            { id: 26, q: "સૌથી નાની ત્રણ અંકની સંખ્યા કઈ?", o: ["૧૦૦", "૯૯૯", "૧૦૧", "૧૧૧"], a: 0 },
            { id: 27, q: "૧૭૫ માં ૭ ની સ્થાનકિંમત કેટલી થાય?", o: ["૭૦", "૭", "૭૦૦", "૭૫"], a: 0 },
            { id: 28, q: "૨૦૬ ને શબ્દોમાં કેમ લખાય?", o: ["બસો છ", "બસો સાઠ", "છસો બે", "બસો અડસઠ"], a: 0 },
            { id: 29, q: "૧૫૦, ૧૬૦, ૧૭૦, ____ આગળની સંખ્યા કઈ આવે?", o: ["૧૮૦", "૧૭૫", "૧૯૦", "૨૦૦"], a: 0 },
            { id: 30, q: "અડધી સદી એટલે કેટલા?", o: ["૫૦", "૧૦૦", "૨૫", "૭૫"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૪: નાનીમા સાથે વેકેશન",
        questions: [
            { id: 31, q: "૧ અઠવાડિયામાં કેટલા દિવસ હોય?", o: ["૭ દિવસ", "૩૦ દિવસ", "૫ દિવસ", "૧૨ દિવસ"], a: 0 },
            { id: 32, q: "૧ મહિનામાં સામાન્ય રીતે કેટલા દિવસ હોય?", o: ["૩૦ અથવા ૩૧", "૨૫", "૪૦", "૧૫"], a: 0 },
            { id: 33, q: "વેકેશનના દિવસો ગણવા શાનો ઉપયોગ થાય છે?", o: ["કેલેન્ડર (Calendar)", "ઘડિયાળ", "ત્રાજવું", "માપપટ્ટી"], a: 0 },
            { id: 34, q: "મે મહિના પછી કયો મહિનો આવે?", o: ["જૂન", "એપ્રિલ", "જુલાઈ", "ઓગસ્ટ"], a: 0 },
            { id: 35, q: "જો વેકેશન ૧૫ મે થી શરૂ થાય અને ૧૦ દિવસ ચાલે તો કઈ તારીખે પૂરું થાય?", o: ["૨૫ મે", "૨૦ મે", "૩૦ મે", "૨૪ મે"], a: 0 },
            { id: 36, q: "૧ વર્ષમાં કેટલા મહિના હોય છે?", o: ["૧૨", "૧૦", "૫૨", "૩૬૫"], a: 0 },
            { id: 37, q: "રવિવાર પછી તરત કયો વાર આવે?", o: ["સોમવાર", "શનિવાર", "મંગળવાર", "બુધવાર"], a: 0 },
            { id: 38, q: "નાનીમાના ઘરે ૭ દિવસ રોકાયા તો કેટલા અઠવાડિયા રોકાયા કહેવાય?", o: ["૧ અઠવાડિયું", "૨ અઠવાડિયા", "૩ અઠવાડિયા", "અડધું અઠવાડિયું"], a: 0 },
            { id: 39, q: "૧ કલાકમાં કેટલી મિનિટ હોય છે?", o: ["૬૦ મિનિટ", "૧૦૦ મિનિટ", "૫૦ મિનિટ", "૨૪ મિનિટ"], a: 0 },
            { id: 40, q: "વેકેશનના ૨૧ દિવસ એટલે કેટલા અઠવાડિયા થાય?", o: ["૩ અઠવાડિયા", "૨ અઠવાડિયા", "૪ અઠવાડિયા", "૧ અઠવાડિયું"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૫: આકાર સાથે આનંદ",
        questions: [
            { id: 41, q: "ત્રિકોણને કેટલા ખૂણા હોય છે?", o: ["૩", "૪", "૫", "૬"], a: 0 },
            { id: 42, q: "ચોરસને કેટલી બાજુઓ હોય છે?", o: ["૪", "૩", "૫", "૬"], a: 0 },
            { id: 43, q: "વર્તુળને કેટલા ખૂણા હોય?", o: ["૦ (એકપણ નહીં)", "૧", "૨", "૪"], a: 0 },
            { id: 44, q: "લંબચોરસની સામસામેની બાજુઓ કેવી હોય છે?", o: ["સરખી", "અલગ અલગ", "ત્રાસી", "ગોળ"], a: 0 },
            { id: 45, q: "જોકરની ટોપીનો આકાર કેવો હોય છે?", o: ["શંકુ", "ગોળ", "ચોરસ", "નળાકાર"], a: 0 },
            { id: 46, q: "ઈંટનો આકાર કેવો હોય છે?", o: ["લંબઘન", "ગોળ", "ત્રિકોણ", "શંકુ"], a: 0 },
            { id: 47, q: "ટેંગ્રામ (Tangram) માં કેટલા ટુકડાનો સેટ વપરાય છે?", o: ["૫ અથવા ૭", "૨", "૧૦", "૧૨"], a: 0 },
            { id: 48, q: "કેરમ બોર્ડનો આકાર કેવો હોય છે?", o: ["ચોરસ", "લંબચોરસ", "ગોળ", "ત્રિકોણ"], a: 0 },
            { id: 49, q: "દીવાસળીના બોક્સનો આકાર કેવો હોય?", o: ["લંબઘન", "ગોળ", "ચોરસ", "શંકુ"], a: 0 },
            { id: 50, q: "સંમિત આકાર (Symmetrical Shape) કયો છે?", o: ["સરખા બે ભાગ થાય તેવો", "ખૂણા વગરનો", "મોટો આકાર", "અલગ આકાર"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૬: 'સો'નું ઘર – ૧",
        questions: [
            { id: 51, q: "૪૫ + ૧૫ = કેટલા થાય?", o: ["૬૦", "૫૦", "૫૫", "૬૫"], a: 0 },
            { id: 52, q: "૮૦ - ૩૦ = કેટલા થાય?", o: ["૫૦", "૪૦", "૬૦", "૩૦"], a: 0 },
            { id: 53, q: "૧૦૦ બનાવવા માટે ૬૦ માં કેટલા ઉમેરવા પડે?", o: ["૪૦", "૩૦", "૫૦", "૨૦"], a: 0 },
            { id: 54, q: "૩૩ માં ૧૦ ઉમેરતાં કેટલા થાય?", o: ["૪૩", "૩૪", "૫૩", "૨૩"], a: 0 },
            { id: 55, q: "૭૫ માંથી કેટલા બાદ કરીએ તો ૫૦ રહે?", o: ["૨૫", "૩૫", "૧૫", "૨૦"], a: 0 },
            { id: 56, q: "૧૦ દશક ભેગા મળીને શું બનાવે?", o: ["૧ સો (૧૦૦)", "૧૦", "૧૦૦૦", "૫૦"], a: 0 },
            { id: 57, q: "૧૦૦ માંથી ૪૫ બાદ કરતાં કેટલા વધે?", o: ["૫૫", "૬૫", "૪૫", "૫૦"], a: 0 },
            { id: 58, q: "૫૨ + ૪૮ = કેટલા થાય?", o: ["૧૦૦", "૯૦", "૧૧૦", "૯૮"], a: 0 },
            { id: 59, q: "૬૬ થી ૧૧ ઓછા એટલે કેટલા?", o: ["૫૫", "૬૫", "૫૬", "૭૭"], a: 0 },
            { id: 60, q: "૯૦ માં કેટલા ઉમેરીએ તો ૧૦૦ થાય?", o: ["૧૦", "૫", "૨૦", "૧૫"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૭: રક્ષાબંધન",
        questions: [
            { id: 61, q: "મીનાએ ૧૨ રાખડી ખરીદી, ભાઈએ ૮ આપી. કુલ કેટલી થઈ?", o: ["૨૦", "૧૮", "૨૨", "૧૫"], a: 0 },
            { id: 62, q: "૧ ડઝન રાખડી એટલે કેટલી રાખડી થાય?", o: ["૧૨", "૧૦", "૬", "૨૪"], a: 0 },
            { id: 63, q: "રાખડીના પેકેટમાં ૫ રાખડી છે, આવા ૪ પેકેટમાં કુલ કેટલી થાય?", o: ["૨૦", "૧૫", "૨૫", "૧૦"], a: 0 },
            { id: 64, q: "૫૦ રૂપિયામાંથી ૩૦ રૂપિયાની રાખડી લીધી, કેટલા વધે?", o: ["૨૦ રૂપિયા", "૩૦ રૂપિયા", "૧૦ રૂપિયા", "૨૫ રૂપિયા"], a: 0 },
            { id: 65, q: "૧૫ મીઠાઈના લાડુ ૩ ભાઈઓમાં સરખે ભાગે વહેંચતા દરેકને કેટલા મળે?", o: ["૫", "૩", "૬", "૪"], a: 0 },
            { id: 66, q: "૨૫ + ૨૫ = કેટલા થાય?", o: ["૫૦", "૪૦", "૬૦", "૪૫"], a: 0 },
            { id: 67, q: "૧૦૦ રૂપિયાની નોટના ૨૦-૨૦ ના કેટલા નોટ થાય?", o: ["૫", "૪", "૬", "૧૦"], a: 0 },
            { id: 68, q: "૪ ભાઈઓને ૨-૨ રાખડી બાંધવા કુલ કેટલી રાખડી જોઈએ?", o: ["૮", "૬", "૧૦", "૪"], a: 0 },
            { id: 69, q: "૬૦ માંથી ૨૦ બાદ કરતાં કેટલા વધે?", o: ["૪૦", "૩૦", "૫૦", "૨૦"], a: 0 },
            { id: 70, q: "૧૮ ને ૩ વડે ભાગતા જવાબ શું આવે?", o: ["૬", "૫", "૭", "૪"], a: 0 }
        ]
    }
];

export default function MathsAssignmentPage() {
    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        mathsExamData.forEach((section) => {
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

    const displaySchool = schoolName.trim() || 'પાલજ પ્રાયમરી સ્કૂલ';
    const displayTalukaDist = talukaDist.trim() || 'તા.&જી-મહેસાણા';

    return (
        <div style={{ backgroundColor: '#eef2f5', minHeight: '100vh', padding: '15px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif', boxSizing: 'border-box', width: '100%' }}>

            <style dangerouslySetInnerHTML={{
                __html: `
          @media print {
            .print-hide { display: none !important; }
            .print-score-card {
              border: none !important;
              background: transparent !important;
              padding: 0 !important;
              margin-bottom: 15px !important;
            }
            .print-score-text {
              font-size: 18px !important;
              color: #000 !important;
              font-weight: bold !important;
            }
          }
        `
            }} />

            <div style={{ width: '100%', maxWidth: '850px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }} className="print-hide">
                <span style={{ fontSize: '14px', color: '#15803d', fontWeight: 'bold' }}>
                    {isSubmitted ? "✓ ગણિત મેળો અસાઇન્મેન્ટ સબમિટ થઈ ગયું છે." : "🔢 ધોરણ-૩ ગણિત મેળો અસાઇન્મેન્ટ ચાલુ છે..."}
                </span>
                <button
                    type="button"
                    onClick={handlePrint}
                    style={{ padding: '8px 16px', backgroundColor: '#1e40af', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
                >
                    🖨️ {isSubmitted ? "રિઝલ્ટ PDF ડાઉનલોડ કરો" : "અસાઇન્મેન્ટ પ્રિન્ટ કરો"}
                </button>
            </div>

            <div style={{ width: '100%', maxWidth: '850px', backgroundColor: 'white', border: '2px solid #1e3a8a', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', padding: '15px 20px', boxSizing: 'border-box', overflow: 'hidden' }}>

                <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', color: 'white', borderRadius: '8px', padding: '18px 12px', textAlign: 'center', marginBottom: '20px', boxShadow: '0 4px 10px rgba(30,58,138,0.2)' }}>
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
                        {isSubmitted ? "ધોરણ-૩ પ્રથમ સત્ર ગણિત મેળો અસાઇન્મેન્ટ પરિણામ" : "ધોરણ-૩ પ્રથમ સત્ર ગણિત મેળો અસાઇન્મેન્ટ"}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', fontSize: '13px', fontWeight: '600', marginTop: '10px', opacity: 0.95 }}>
                        <div>વિષય: ગણિત મેળો</div>
                        <div>વર્ષ: ૨૦૨૬-૨૭</div>
                        <div>કુલ ગુણ: ૭૦</div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', padding: '12px 15px', borderRadius: '8px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
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

                {isSubmitted && (
                    <div className="print-score-card" style={{ backgroundColor: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '10px', padding: '15px', marginBottom: '25px', textAlign: 'center' }}>
                        <div className="print-hide">
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#15803d', margin: '0 0 5px 0' }}>ગણિત મેળો અસાઇન્મેન્ટ પરિણામ</h3>
                            <div style={{ fontSize: '13px', color: '#334155' }}>
                                શાળા: <strong>{displaySchool}</strong> ({displayTalukaDist})<br />
                                વિદ્યાર્થી: <strong>{studentName}</strong> {rollNumber && `| રોલ નં: ${rollNumber}`} {teacherName && `| વર્ગશિક્ષક: ${teacherName}`} {examDate && `| તારીખ: ${examDate}`}
                            </div>
                        </div>

                        <div className="print-score-text" style={{ fontSize: '28px', fontWeight: '800', color: '#16a34a', margin: '8px 0' }}>
                            મેળવેલ કુલ ગુણ: {calculateFinalScore()} / ૭૦
                        </div>

                        <div className="print-hide" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                            <button type="button" onClick={handlePrint} style={{ padding: '8px 14px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}>
                                💾 પરિણામ PDF ડાઉનલોડ કરો
                            </button>
                            <button type="button" onClick={handleReset} style={{ padding: '8px 14px', backgroundColor: '#334155', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}>
                                ફરીથી શરૂ કરો
                            </button>
                        </div>
                    </div>
                )}

                {!isSubmitted && (
                    <div style={{ backgroundColor: '#f1f5f9', borderLeft: '4px solid #3b82f6', padding: '10px 12px', borderRadius: '4px', marginBottom: '20px', fontSize: '13px', color: '#334155', lineHeight: '1.5' }}>
                        <strong>સૂચનાઓ:</strong> ૧. નવા પાઠ્યપુસ્તક ગણિત મેળો ના પ્રથમ ૭ પ્રકરણના ૧૦-૧૦ પ્રશ્નો આપેલા છે. ૨. સાચો વિકલ્પ પસંદ કરો. ૩. પૂરું થયા પછી સબમિટ બટન પર ક્લિક કરો.
                    </div>
                )}

                <form onSubmit={handlePaperSubmit}>
                    {mathsExamData.map((section, sIdx) => (
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

                    {!isSubmitted && (
                        <div style={{ borderTop: '2px solid #1e3a8a', paddingTop: '20px', marginTop: '30px', display: 'flex', justifyContent: 'center' }} className="print-hide">
                            <button type="submit" style={{ width: '100%', maxWidth: '350px', padding: '12px 20px', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(30,58,138,0.3)' }}>
                                સબમિટ ગણિત મેળો અસાઇન્મેન્ટ (Submit)
                            </button>
                        </div>
                    )}
                </form>

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