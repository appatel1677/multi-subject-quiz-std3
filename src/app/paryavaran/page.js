'use client';

import React, { useState } from 'react';

const paryavaranExamData = [
    {
        title: "પ્રકરણ ૧: પૂનમે શું જોયું?",
        questions: [
            { id: 1, q: "નીચેનામાંથી કયું પ્રાણી ઝાડ પર રહે છે?", o: ["વાંદરો", "ગાય", "કૂતરો", "મગર"], a: 0 },
            { id: 2, q: "પૂનમે તળાવના કિનારે કયા પ્રાણીને જોયું?", o: ["ભેંસ અને બગલો", "સિંહ", "ઘોડો", "ઊંટ"], a: 0 },
            { id: 3, q: "કયું પ્રાણી પેટ સરડીને ચાલે છે?", o: ["સાપ", "કાચબો", "સસલું", "બકરી"], a: 0 },
            { id: 4, q: "ઊડી શકે તેવું પક્ષી કયું છે?", o: ["ચકલી", "ગાય", "બિલાડી", "ઉંદર"], a: 0 },
            { id: 5, q: "જેને ચાર પગ હોય તેવું પ્રાણી કયું?", o: ["ગાય", "કાકડો", "કબૂતર", "હોલો"], a: 0 },
            { id: 6, q: "દરમાં રહેતું પ્રાણી કયું છે?", o: ["ઉંદર", "વાંદરો", "ઘોડો", "બકરી"], a: 0 },
            { id: 7, q: "ઝાડના પ્રકાંડ પર કીડીઓનું સ્થાન ક્યાં હોય છે?", o: ["ઝાડની છાલ પર", "પાંદડા પર", "મૂળમાં", "આકાશમાં"], a: 0 },
            { id: 8, q: "પાણીમાં રહેતું પ્રાણી કયું છે?", o: ["માછલી", "બિલાડી", "સસલું", "વાંદરો"], a: 0 },
            { id: 9, q: "કયું પ્રાણી ઠેકડા મારીને ચાલે છે?", o: ["દિડકો (દેડકો)", "ગાય", "સાપ", "હાથી"], a: 0 },
            { id: 10, q: "માળામાં રહેતું પક્ષી કયું છે?", o: ["કબૂતર", "ઉંદર", "સાપ", "બિલાડી"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૨: વનપરી",
        questions: [
            { id: 11, q: "વનપરી રમતમાં છોકરાઓ ક્યાં રમતા હતા?", o: ["બગીચામાં", "વર્ગખંડમાં", "ઘરમાં", "શેરીમાં"], a: 0 },
            { id: 12, q: "બગીચામાં છોડને સ્પર્શ કરવાની રમત કોણે રમાડી?", o: ["દીદીએ (વનપરી)", "અમન", "શબ્નમ", "માઈકલ"], a: 0 },
            { id: 13, q: "કયા ઝાડનું પ્રકાંડ ખૂબ જાડું હોય છે?", o: ["વડનું", "મેહંદીના છોડનું", "ગુલાબનું", "તુલસીનું"], a: 0 },
            { id: 14, q: "જે પાંદડાની કિનારી છાપવા માટે વપરાય તેને શું કહેવાય?", o: ["પાંદડાની છાપ", "કાગળ", "ચિત્ર", "રંગ"], a: 0 },
            { id: 15, q: "તુલસીના પાંદડાની ગંધ કેવી હોય છે?", o: ["તીવ્ર અને ખાસ ગંધ", "ગંધ વગરની", "દુર્ગંધ", "મીઠી ગંધ"], a: 0 },
            { id: 16, q: "ઝાડનું કયું અંગ જમીનની અંદર હોય છે?", o: ["મૂળ", "પાંદડાં", "ડાળીઓ", "ફૂલ"], a: 0 },
            { id: 17, q: "કયા છોડના પાંદડાનો ઉપયોગ ઔષધિ તરીકે થાય છે?", o: ["તુલસી અને અરડૂસી", "બાવળ", "ઘાસ", "ગુલાબ"], a: 0 },
            { id: 18, q: "બગીચામાં ઘાસ પર કોણ બેઠું હતું?", o: ["દીદી", "માઈકલ", "અમન", "કાવેરી"], a: 0 },
            { id: 19, q: "લીમડાના પાંદડાનો સ્વાદ કેવો હોય છે?", o: ["કડવો", "મીઠો", "ખાટો", "તીખો"], a: 0 },
            { id: 20, q: "પાંદડાનો રંગ સામાન્ય રીતે કેવો હોય છે?", o: ["લીલો", "લાલ", "વા Lymph", "કાળો"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૩: પાણી જ પાણી",
        questions: [
            { id: 21, q: "પાણી વગર આપણે શું ન કરી શકીએ?", o: ["જીવી ન શકીએ", "રમી ન શકીએ", "ઊંઘી ન શકીએ", "કંઈ નહીં"], a: 0 },
            { id: 22, q: "પાણી મેળવવાનો મુખ્ય સ્ત્રોત કયો છે?", o: ["વરસાદ", "કૂવો", "નળ", "તળાવ"], a: 0 },
            { id: 23, q: "કઈ ક્રિયા માટે પાણીની જરૂર નથી?", o: ["લખવા માટે", "રસોઈ બનાવવા", " કપડાં ધોવા", "નાહવા માટે"], a: 0 },
            { id: 24, q: "નદી ક્યાં જઈને મળે છે?", o: ["દરિયામાં", "કૂવામાં", "ખાડામાં", "નળમાં"], a: 0 },
            { id: 25, q: "વરસાદ લાવવામાં કોણ મદદરૂપ થાય છે?", o: ["વૃક્ષો", "રોડ", "મકાનો", "ગાડીઓ"], a: 0 },
            { id: 26, q: "પાણીને ગરમ કરવાથી શામાં રૂપાંતર થાય છે?", o: ["વરાળમાં", "બરફમાં", "પથ્થરમાં", "માટીમાં"], a: 0 },
            { id: 27, q: "પાણી ઠંડુ પડતાં શું બને છે?", o: ["બરફ", "વરાળ", "ધુમાડો", "પથ્થર"], a: 0 },
            { id: 28, q: "નીચેનામાંથી પાણી સંગ્રહ કરવાનું સાધન કયું?", o: ["ડોલ / ટાંકી", "કંપાસ", "પુસ્તક", "બેગ"], a: 0 },
            { id: 29, q: "ખેતી માટે શાની સૌથી વધુ જરૂર પડે છે?", o: ["પાણીની", "પંખાની", "લાઇટની", "ટીવીની"], a: 0 },
            { id: 30, q: "પાણીનો બગાડ કરવો જોઈએ?", o: ["ના, બચાવવું જોઈએ", "હા, કરવો જોઈએ", "જેટલું મન થાય તેટલું વાપરવું", "કંઈ નહીં"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૪: છોટુંનું ઘર",
        questions: [
            { id: 31, q: "છોટું અમદાવાદ આવ્યો ત્યારે રહેવા માટે તેણે શાનો ઉપયોગ કર્યો?", o: ["સિમેન્ટના ભૂંગળાનો (પાઇપ)", "ઘરનો", "તંબુનો", "ઝાડનો"], a: 0 },
            { id: 32, q: "છોટું સાથે રહેવા કોણ આવ્યું?", o: ["મોનુ", "રાજુ", "સોનુ", "અમન"], a: 0 },
            { id: 33, q: "ઘરનો કયો ભાગ રસોઈ બનાવવા વપરાય છે?", o: ["રસોડું", "દીવાનખંડ", "અગાસી", "બાથરૂમ"], a: 0 },
            { id: 34, q: "આપણા ઘરમાં વગર નોતરે રહેતો બિનઅભ્યાસી મહેમાન કયો?", o: ["ઉંદર અને ગરોળી", "ગાય", "ઘોડો", "પોપટ"], a: 0 },
            { id: 35, q: "ઘરને સ્વચ્છ રાખવાનું કામ કોણ કરે છે?", o: ["પરિવારના બધા સભ્યો", "માત્ર મહેમાન", "કોઈ નહીં", "પાડોશી"], a: 0 },
            { id: 36, q: "છોટું ભૂંગળાની આસપાસ કયો ભાગ અલગ બનાવ્યો?", o: ["રસોઈ કરવાનો અને કપડાં સુકવવાનો", "રમત રમવાનો", "ગાડી મૂકવાનો", "દુકાનનો"], a: 0 },
            { id: 37, q: "ઘર આપણું શાનાથી રક્ષણ કરે છે?", o: ["ટાઢ, તડકો અને વરસાદથી", "માત્ર ચોરથી", "માત્ર જંતુઓથી", "કંઈ નહીં"], a: 0 },
            { id: 38, q: "કચરો ક્યાં ફેંકવો જોઈએ?", o: ["કચરાપેટીમાં", "શેરીમાં", "ઘરના ખૂણામાં", "નદીમાં"], a: 0 },
            { id: 39, q: "પંખીઓના ઘરને શું કહેવાય?", o: ["માળો", "દર", "ગુફા", "તબેલા"], a: 0 },
            { id: 40, q: "દીવાળીમાં ઘરની આગળ શું બનાવવામાં આવે છે?", o: ["રંગોળી", "ચિત્ર", "માટી", "ખાડો"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૫: ઘર – પહેલી શાળા",
        questions: [
            { id: 41, q: "આપણી પહેલી શાળા કઈ છે?", o: ["ઘર", "પ્રાથમિક શાળા", "આંગણવાડી", "ટ્યુશન"], a: 0 },
            { id: 42, q: "આપણે સૌપ્રથમ શીખવાનું ક્યાંથી શરૂ કરીએ છીએ?", o: ["પરિવારમાંથી", "મિત્રો પાસેથી", "ટીવીમાંથી", "પુસ્તકમાંથી"], a: 0 },
            { id: 43, q: "પપ્પાના પપ્પાને શું કહેવાય?", o: ["દાદા", "નાના", "કાકા", "મામા"], a: 0 },
            { id: 44, q: "મમ્મીના ભાઈને શું કહેવાય?", o: ["મામા", "કાકા", "માસા", "ફોઈ"], a: 0 },
            { id: 45, q: "મમ્મીની બહેનને શું કહેવાય?", o: ["માસી", "ફોઈ", "કાકી", "મામી"], a: 0 },
            { id: 46, q: "પપ્પાના નાના ભાઈને શું કહેવાય?", o: ["કાકા", "મામા", "મોટા પપ્પા", "ફુવા"], a: 0 },
            { id: 47, q: "પરિવારમાંથી આપણને શું મળે છે?", o: ["પ્રેમ અને સંસ્કાર", "માત્ર પૈસા", "માત્ર કપડાં", "કંઈ નહીં"], a: 0 },
            { id: 48, q: "વડીલોને આપણે શું આપવું જોઈએ?", o: ["આદર અને માન", "ગુસ્સો", "દુઃખ", "અવગણના"], a: 0 },
            { id: 49, q: "સુરેખાના પરિવારનો મુખ્ય વ્યવસાય કયો હતો?", o: ["ધોબીકામ (કપડાં પ્રેસ/ધોવા)", "સુથારીકામ", "ખેતી", "વેપાર"], a: 0 },
            { id: 50, q: "ઘરમાં પ્રવેશતા પહેલા પગરખાં (ચંપલ) ક્યાં ઉતારવા જોઈએ?", o: ["ઘરની બહાર જમીન પર/સ્ટેન્ડમાં", "રસોડામાં", "પલંગ પર", "દીવાનખંડમાં"], a: 0 }
        ]
    }
];

export default function ParyavaranAssignmentPage() {
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
        paryavaranExamData.forEach((section) => {
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

            <div style={{ width: '100%', maxWidth: '850px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{ fontSize: '14px', color: '#15803d', fontWeight: 'bold' }}>
                    {isSubmitted ? "✓ આસપાસ અસાઇન્મેન્ટ સબમિટ થઈ ગયું છે." : "🌿 ધોરણ-૩ આપણી આસપાસ (પર્યાવરણ) અસાઇન્મેન્ટ ચાલુ છે..."}
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
                        {isSubmitted ? "ધોરણ-૩ પ્રથમ સત્ર આપણી આસપાસ પરિણામ" : "ધોરણ-૩ પ્રથમ સત્ર આપણી આસપાસ (પર્યાવરણ)"}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', fontSize: '13px', fontWeight: '600', marginTop: '10px', opacity: 0.95 }}>
                        <div>વિષય: આપણી આસપાસ (પર્યાવરણ)</div>
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
                    <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '10px', padding: '15px', marginBottom: '25px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#15803d', margin: '0 0 5px 0' }}>આપણી આસપાસ અસાઇન્મેન્ટ પરિણામ</h3>
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

                {!isSubmitted && (
                    <div style={{ backgroundColor: '#f1f5f9', borderLeft: '4px solid #3b82f6', padding: '10px 12px', borderRadius: '4px', marginBottom: '20px', fontSize: '13px', color: '#334155', lineHeight: '1.5' }}>
                        <strong>સૂચનાઓ:</strong> ૧. પ્રથમ સત્રના પ્રકરણ ૧ થી ૫ ના ૧૦-૧૦ પ્રશ્નો આપેલા છે. ૨. સાચો વિકલ્પ પસંદ કરો. ૩. સબમિટ પર ક્લિક કરો.
                    </div>
                )}

                <form onSubmit={handlePaperSubmit}>
                    {paryavaranExamData.map((section, sIdx) => (
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
                        <div style={{ borderTop: '2px solid #1e3a8a', paddingTop: '20px', marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
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