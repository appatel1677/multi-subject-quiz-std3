'use client';

import React, { useState } from 'react';

const gujaratiExamData = [
    {
        title: "પ્રકરણ ૧: શરણાઈ, ઢોલક અને રંગ",
        questions: [
            { id: 1, q: "વાંસળીવાળાએ પહેલીવાર વાંસળી વગાડી ત્યારે કોણ આગળ આવ્યું?", o: ["ઉંદર", "છોકરાં", "માણસો", "કૂતરાં"], a: 0 },
            { id: 2, q: "ગામલોકોએ વાંસળીવાળાને કેટલા રૂપિયા આપવાનું કહ્યું હતું?", o: ["૧૦૦૦ રૂપિયા", "૫૦૦ રૂપિયા", "૧૦૦ રૂપિયા", "૨૦૦ રૂપિયા"], a: 0 },
            { id: 3, q: "બીજીવાર વાંસળી વાગી ત્યારે વાંસળીવાળા પાછળ કોણ દોડ્યું?", o: ["ગામના છોકરાં", "ઉંદર", "કૂતરાં", "ગાયો"], a: 0 },
            { id: 4, q: "વાંસળીવાળો છોકરાંને લઈને ક્યાં ગયો?", o: ["નદી તરફ", "જંગલ તરફ", "પહાડ તરફ", "સીમ તરફ"], a: 0 },
            { id: 5, q: "ઉંદરથી કંટાળીને ગામલોકો કોની પાસે ગયા?", o: ["સરપંચ પાસે", "વાંસળીવાળા પાસે", "રાજા પાસે", "પોલીસ પાસે"], a: 1 },
            { id: 6, q: "'ઢોલક' શબ્દમાં પહેલો અક્ષર કયો છે?", o: ["ઢ", "ડ", "ત", "થ"], a: 0 },
            { id: 7, q: "ઉંદર ક્યાં ક્યાં હતા?", o: ["ઘરમાં અને બાગમાં", "પેટીમાં અને કબાટમાં", "મોટા અને નાના", "આપેલ તમામ"], a: 3 },
            { id: 8, q: "વાંસળીવાળાએ કેવા રંગની ટોપી પહેરી હતી?", o: ["લાલ", "પીળી", "કાળી", "વા Lymph"], a: 0 },
            { id: 9, q: "વાંસળીવાળાના વાળ કેવા હતા?", o: ["લાંબા", "ટૂંકા", "વાંકડિયા", "સફેદ"], a: 0 },
            { id: 10, q: "વાંસળીવાળાએ કડી પહેરી હતી કેવો કોટ?", o: ["પીળો કોટ", "લાલ કોટ", "કાળો કોટ", "સફેદ કોટ"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૨: દાદા જ ખોવાયા છે",
        questions: [
            { id: 11, q: "યજ્ઞ કોની સાથે મેળામાં ગયો હતો?", o: ["દાદા સાથે", "મમ્મી સાથે", "પપ્પા સાથે", "મિત્ર સાથે"], a: 0 },
            { id: 12, q: "યજ્ઞના દાદાનું નામ શું હતું?", o: ["ત્રિકમદાસ", "દિનકરરાય", "હરિરામ", "મનસુખભાઈ"], a: 0 },
            { id: 13, q: "મેળામાં યજ્ઞને કોણે રમકડું અપાવવાની ના પાડી?", o: ["દાદાએ", "પોલીસ અંકલે", "દુકાનદારે", "મિત્રે"], a: 0 },
            { id: 14, q: "યજ્ઞ ક્યાં ખોવાઈ ગયો હતો?", o: ["આનંદ મેળામાં", "બજારમાં", "શાળામાં", "બગીચામાં"], a: 0 },
            { id: 15, q: "યજ્ઞને રડતો જોઈને કોણે મદદ કરી?", o: ["પોલીસ અંકલે", "દુકાનદારે", "જોકરે", "સાઇકલવાળાએ"], a: 0 },
            { id: 16, q: "પોલીસ અંકલે યજ્ઞને શું ખાવાનું કહ્યું?", o: ["આઇસક્રીમ અને ચણાજોર ગરમ", "ચોકલેટ", "પુરી-શાક", "બર્ગર"], a: 0 },
            { id: 17, q: "યજ્ઞ મેળામાં શું જોવા ઊભો રહ્યો હતો?", o: ["મોટું ચકડોળ", "જાદુનો શો", "મોટરસાઇકલના સ્ટંટ", "રમકડાંની દુકાન"], a: 2 },
            { id: 18, q: "દાદા યજ્ઞ માટે શું લેવા ગયા હતા?", o: ["મેળાની ટિકિટ", "આઇસક્રીમ", "રમકડાં", "ફુગ્ગા"], a: 0 },
            { id: 19, q: "'મેળો' શબ્દનો સાચો અર્થ શું થાય?", o: ["ઘણા લોકો ભેગા થાય તે જગ્યા", "બગીચો", "શાળા", "ઘર"], a: 0 },
            { id: 20, q: "યજ્ઞ સતત શું બોલતો હતો?", o: ["મારે દાદા પાસે જવું છે", "મારે રમકડું જોઈએ છે", "મારે ઘરે જવું છે", "મારે આઇસક્રીમ ખાવો છે"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૩: મકાન વગરના વાંદરા",
        questions: [
            { id: 21, q: "વાંદરાનું નામ શું હતું?", o: ["ખટપટ", "ચટપટ", "સુઘરી", "બિલી"], a: 0 },
            { id: 22, q: "સુઘરીનું નામ શું હતું?", o: ["ચટપટ", "ખટપટ", "મીની", "ટીની"], a: 0 },
            { id: 23, q: "શિયાળામાં ઠંડી ભગાડવા માણસો શું કરતા હતા?", o: ["તાપણું", "પંખો", "નાસ્તો", "રમત"], a: 0 },
            { id: 24, q: "વાંદરાઓએ ઠંડી ભગાડવા શાનું તાપણું કર્યું?", o: ["લાલ મરચાંનું", "લાકડાંનું", "પાંદડાંનું", "કાગળનું"], a: 0 },
            { id: 25, q: "સુઘરી વાંદરાને શું બનાવવાની સલાહ આપતી હતી?", o: ["ઘર", "માળો", "ઝાંપો", "ગાડી"], a: 0 },
            { id: 26, q: "ચટપટ સુઘરી ક્યાં રહેતી હતી?", o: ["પોતાના માળામાં", "ઝાડની ડાળી પર", "ગુફામાં", "ઘરમાં"], a: 0 },
            { id: 27, q: "વાંદરાઓ ચોમાસામાં શાનાથી ભીંજાઈ ગયા?", o: ["વરસાદથી", "નદીના પાણીથી", "કૂવાના પાણીથી", "ઝરણુંથી"], a: 0 },
            { id: 28, q: "ઋતુઓ કેટલી છે?", o: ["૩ (શિયાળો, ઉનાળો, ચોમાસું)", "૨", "૪", "૫"], a: 0 },
            { id: 29, q: "ઉનાળામાં ખટપટને શું થતું હતું?", o: ["પરસેવો", "ઠંડી", "વરસાદ", "ભૂખ"], a: 0 },
            { id: 30, q: "વાંદરાઓએ છેવટે ઘર બનાવ્યું કે નહીં?", o: ["ન બનાવ્યું", "બનાવ્યું", "અડધું બનાવ્યું", "મોટું બનાવ્યું"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૪: સસલાની પાછળ કુતરો",
        questions: [
            { id: 31, q: "જંગલમાં શિકાર કરવા કોણ ગયું?", o: ["હંટોક શિકારી", "એક્સપ્રેસ ડોગી", "ફાસ્ટુ સસલું", "સિંહ"], a: 0 },
            { id: 32, q: "બપોરે ગુફામાં બેઠા બેઠા હંટોક શિકારી શું જોતો હતો?", o: ["એક્સપ્રેસ ડોગી અને સસલું", "ઝાડ", "પક્ષીઓ", "નદી"], a: 0 },
            { id: 33, q: "ફાસ્ટુ સસલું શા માટે ઝડપથી દોડતું હતું?", o: ["જીવ બચાવવા", "રમત રમવા", "રેસ જીતવા", "ખોરાક માટે"], a: 0 },
            { id: 34, q: "એક્સપ્રેસ ડોગી સસલાને શા માટે પકડી ન શક્યો?", o: ["સસલું જીવ બચાવવા દોડતું હતું", "ડોગી થાકી ગયો", "ડોગી આળસુ હતો", "સસલું સંતાઈ ગયું"], a: 0 },
            { id: 35, q: "શિકારી કૂતરાનું નામ શું હતું?", o: ["એક્સપ્રેસ ડોગી", "ટોમી", "ટાઈગર", "રોકી"], a: 0 },
            { id: 36, q: "સસલાનું નામ શું હતું?", o: ["ફાસ્ટુ સસલું", "ચીકુ", "મિલુ", "સુઘરી"], a: 0 },
            { id: 37, q: "'દોડ' શબ્દનો સમાન અર્થ શું થાય?", o: ["ભાગવું", "ચાલવું", "કૂદવું", "બેસવું"], a: 0 },
            { id: 38, q: "હંટોક શિકારી ક્યાં આરામ કરવા બેઠો હતો?", o: ["ઝાડ નીચે", "ઘરમાં", "નદી કિનારે", "પહાડ પર"], a: 0 },
            { id: 39, q: "કૂતરો શા માટે દોડતો હતો?", o: ["ખાવા માટે (શિકાર માટે)", "રમવા માટે", "જીવ બચાવવા", "ઊંઘવા માટે"], a: 0 },
            { id: 40, q: "આ વાર્તામાંથી શું શીખવા મળે છે?", o: ["જીવ બચાવવાની તાકાત વધારે હોય છે", "ઝડપથી દોડવું", "કૂતરાથી ડરવું", "શિકાર કરવો"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૫: કોરો કાચબો ભીનો ચાંદો",
        questions: [
            { id: 41, q: "તળાવના શાંત પાણીમાં ચંદ્રાનું શું દેખાતું હતું?", o: ["પ્રતિબિંબ (ચાંદો)", "સૂરજ", "વાદળ", "તારા"], a: 0 },
            { id: 42, q: "વાંદરાના બચ્ચાઓનું નામ શું હતું?", o: ["ચિંપુ, મિંદુ, ટીંકુ, મોન્ટુ", "ખટપટ", "ચટપટ", "ટોમી"], a: 0 },
            { id: 43, q: "બચ્ચાઓએ પાણીમાંથી શાને બહાર કાઢવાનું વિચાર્યું?", o: ["ચાંદાને", "દડાને", "માછલીને", "પથ્થરને"], a: 0 },
            { id: 44, q: "પાણીમાં દેખાતો ચાંદો વાસ્તવમાં શું હતો?", o: ["આકાશના ચાંદાનું પ્રતિબિંબ", "સોનાની થાળી", "રમકડું", "દડો"], a: 0 },
            { id: 45, q: "બચ્ચાઓ એકબીજાની શું પકડીને લટક્યા?", o: ["પૂંછડી", "હાથ", "પગ", "કાન"], a: 0 },
            { id: 46, q: "ચંદ્રાનું પ્રતિબિંબ ક્યાં દેખાતું હતું?", o: ["તળાવના પાણીમાં", "કાચમાં", "આકાશમાં", "જમીન પર"], a: 0 },
            { id: 47, q: "વાંદરાના સરદારનું નામ શું હતું?", o: ["મહાબલી", "બાહુબલી", "ખટપટ", "બલી"], a: 0 },
            { id: 48, q: "જ્યારે છેલ્લે પકડ છૂટી ગઈ ત્યારે બધા બચ્ચા ક્યાં પડ્યા?", o: ["પાણીમાં (ધબ્બાક)", "જમીન પર", "ઝાડ પર", "રેતીમાં"], a: 0 },
            { id: 49, q: "કાચબાનું નામ શું હતું?", o: ["ટપ્પુ", "મોન્ટુ", "ચિંપુ", "ચીકુ"], a: 0 },
            { id: 50, q: "કાચબો ક્યાંથી ઊડ્યો?", o: ["હવામાં (પેરાશૂટથી)", "પહાડ પરથી", "ઝાડ પરથી", "ઘર પરથી"], a: 0 }
        ]
    }
];

export default function GujaratiAssignmentPage() {
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
        gujaratiExamData.forEach((section) => {
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
                    {isSubmitted ? "✓ ગુજરાતી અસાઇન્મેન્ટ સબમિટ થઈ ગયું છે." : "📖 ધોરણ-૩ ગુજરાતી અસાઇન્મેન્ટ ચાલુ છે..."}
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
                        {isSubmitted ? "ધોરણ-૩ પ્રથમ સત્ર ગુજરાતી અસાઇન્મેન્ટ પરિણામ" : "ધોરણ-૩ પ્રથમ સત્ર ગુજરાતી અસાઇન્મેન્ટ"}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', fontSize: '13px', fontWeight: '600', marginTop: '10px', opacity: 0.95 }}>
                        <div>વિષય: ગુજરાતી (કલશોર)</div>
                        <div>વર્ષ: ૨૦૨૬-૨૭</div>
                        <div>કુલ ગુણ: ૫૦</div>
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
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#15803d', margin: '0 0 5px 0' }}>ગુજરાતી અસાઇન્મેન્ટ પરિણામ</h3>
                            <div style={{ fontSize: '13px', color: '#334155' }}>
                                શાળા: <strong>{displaySchool}</strong> ({displayTalukaDist})<br />
                                વિદ્યાર્થી: <strong>{studentName}</strong> {rollNumber && `| રોલ નં: ${rollNumber}`} {teacherName && `| વર્ગશિક્ષક: ${teacherName}`} {examDate && `| તારીખ: ${examDate}`}
                            </div>
                        </div>

                        <div className="print-score-text" style={{ fontSize: '28px', fontWeight: '800', color: '#16a34a', margin: '8px 0' }}>
                            મેળવેલ કુલ ગુણ: {calculateFinalScore()} / ૫૦
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
                        <strong>સૂચનાઓ:</strong> ૧. પ્રથમ સત્રના પ્રકરણ ૧ થી ૫ ના ૧૦-૧૦ પ્રશ્નો આપેલા છે. ૨. સાચો વિકલ્પ પસંદ કરો. ૩. સબમિટ પર ક્લિક કરો.
                    </div>
                )}

                <form onSubmit={handlePaperSubmit}>
                    {gujaratiExamData.map((section, sIdx) => (
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
                                સબમિટ અસાઇન્મેન્ટ (Submit)
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