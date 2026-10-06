'use client';

import React, { useState } from 'react';

const paryavaranExamData = [
    {
        title: "પ્રકરણ ૧: કુટુંબ અને મિત્રો",
        questions: [
            { id: 1, q: "આપણી પહેલી શાળા કઈ ગણાય છે?", o: ["ઘર (પરિવાર)", "પ્રાથમિક શાળા", "આંગણવાડી", "ટ્યુશન"], a: 0 },
            { id: 2, q: "પપ્પાના પપ્પાને શું કહેવાય?", o: ["દાદા", "નાના", "કાકા", "મામા"], a: 0 },
            { id: 3, q: "મમ્મીના ભાઈને શું કહેવાય?", o: ["મામા", "કાકા", "માસા", "ફુવા"], a: 0 },
            { id: 4, q: "સંયુક્ત કુટુંબમાં કોણ સાથે રહે છે?", o: ["દાદા-દાદી, મમ્મી-પપ્પા, કાકા-કાકી અને બાળકો", "માત્ર મમ્મી-પપ્પા અને બાળકો", "માત્ર મિત્રો", "કોઈ નહીં"], a: 0 },
            { id: 5, q: "મિત્રો આપણને શામાં મદદ કરે છે?", o: ["રમવામાં અને ભણવામાં", "ઝગડવામાં", "કચરો કરવામાં", "ઊંઘવામાં"], a: 0 },
            { id: 6, q: "પપ્પાના નાના ભાઈને શું કહેવાય?", o: ["કાકા", "મામા", "મોટા પપ્પા", "ફુવા"], a: 0 },
            { id: 7, q: "મમ્મીની બહેનને શું કહેવાય?", o: ["માસી", "ફોઈ", "કાકી", "મામી"], a: 0 },
            { id: 8, q: "પરિવારમાંથી આપણને મુખ્યત્વે શું મળે છે?", o: ["પ્રેમ, સલામતી અને સંસ્કાર", "માત્ર પૈસા", "માત્ર રમકડાં", "કંઈ નહીં"], a: 0 },
            { id: 9, q: "વડીલોને આપણે શું આપવું જોઈએ?", o: ["આદર અને માન", "દુઃખ", "અવગણના", "ગુસ્સો"], a: 0 },
            { id: 10, q: "બીમાર સભ્યની સંભાળ કોણ રાખે છે?", o: ["પરિવારના સભ્યો", "પાડોશી", "દુકાનદાર", "કોઈ નહીં"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૨: મેળામાં જઈએ",
        questions: [
            { id: 11, q: "મેળામાં શાની દુકાનો હોય છે?", o: ["રમકડાં અને મીઠાઈની", "શાકભાજીની", "પુસ્તકોની", "સિમેન્ટની"], a: 0 },
            { id: 12, q: "મેળામાં ગોળ ગોળ ફરે તેને શું કહેવાય?", o: ["ચકડોળ", "ગાડી", "નદી", "બગીચો"], a: 0 },
            { id: 13, q: "મેળામાં રસ્તો ખોવાઈ જાય તો કોની મદદ લેવી જોઈએ?", o: ["પોલીસ અંકલ કે હેલ્પ ડેસ્ક", "અજાણી વ્યક્તિ", "જોકર", "કોઈની નહીં"], a: 0 },
            { id: 14, q: "ફુગ્ગાવાળો ફુગ્ગામાં કયો વાયુ ભરે છે જેથી ફુગ્ગો ઊંચે ઊડે છે?", o: ["હળવો વાયુ (ગેસ)", "પાણી", "માટી", "કાગળ"], a: 0 },
            { id: 15, q: "મેળામાં સ્વચ્છતા જાળવવા કચરો ક્યાં ફેંકવો જોઈએ?", o: ["કચરાપેટીમાં", "જમીન પર", "ચકડોળ નીચે", "દુકાન આગળ"], a: 0 },
            { id: 16, q: "મેળામાં લોકો શા માટે જાય છે?", o: ["આનંદ અને મનોરંજન માટે", "ઊંઘવા માટે", "ભણવા માટે", "રોવા માટે"], a: 0 },
            { id: 17, q: "મેળામાં જાદુના ખેલ કોણ બતાવે છે?", o: ["જાદુગર", "મદારી", "જોકર", "શિક્ષક"], a: 0 },
            { id: 18, q: "સાપનો ખેલ બતાવનારને શું કહેવાય?", o: ["મદારી", "જાદુગર", "વાંસળીવાળો", "કુંભાર"], a: 0 },
            { id: 19, q: "જન્માષ્ટમી કે શ્રાવણ મહિનામાં શું ભરાય છે?", o: ["લોકમેળો", "બજાર", "શાળા", "સરકસ"], a: 0 },
            { id: 20, q: "મેળામાં નાના બાળકોએ કોનો હાથ પકડી રાખવો જોઈએ?", o: ["મમ્મી-પપ્પા કે વાલીનો", "ફુગ્ગાવાળાનો", "અજાણ્યાનો", "કોઈનો નહીં"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૩: ઉત્સવોની ઉજવણી",
        questions: [
            { id: 21, q: "રંગોનો તહેવાર કયો છે?", o: ["હોળી-ધૂળેટી", "દિવાળી", "નવરાત્રી", "ઉત્તરાયણ"], a: 0 },
            { id: 22, q: "દીવા પ્રગટાવીને, રોશની કરીને કયો તહેવાર ઉજવાય છે?", o: ["દિવાળી", "ઈદ", "નાતાલ", "હોળી"], a: 0 },
            { id: 23, q: "આકાશમાં પતંગ ચગાવવાનો તહેવાર કયો છે?", o: ["ઉત્તરાયણ (મકરસંક્રાંતિ)", "દિવાળી", "દશેરા", "રક્ષાબંધન"], a: 0 },
            { id: 24, q: "ગરબા કયા તહેવારમાં રમાય છે?", o: ["નવરાત્રી", "દિવાળી", "જન્માષ્ટમી", "હોળી"], a: 0 },
            { id: 25, q: "બહેન ભાઈને રાખડી કયા તહેવારમાં બાંધે છે?", o: ["રક્ષાબંધન", "દિવાળી", "ઈદ", "નાતાલ"], a: 0 },
            { id: 26, q: "૨૫મી ડિસેમ્બરે કયો તહેવાર ઉજવાય છે?", o: ["નાતાલ (Christmas)", "ઈદ", "દિવાળી", "પતેતી"], a: 0 },
            { id: 27, q: "મુસ્લિમ ભાઈઓનો પવિત્ર તહેવાર કયો છે?", o: ["ઈદ", "નાતાલ", "દિવાળી", "નવરાત્રી"], a: 0 },
            { id: 28, q: "૧૫મી ઓગસ્ટ અને ૨૬મી જાન્યુઆરી કેવા તહેવાર છે?", o: ["રાષ્ટ્રીય તહેવાર", "ધાર્મિક તહેવાર", "સામાજિક તહેવાર", "ખાનગી તહેવાર"], a: 0 },
            { id: 29, q: "ગણેશ ચતુર્થીમાં કોની મૂર્તિની સ્થાપના થાય છે?", o: ["ગણેશજીની", "કૃષ્ણ ભગવાનની", "રામચંદ્રજીની", "હનુમાનજીની"], a: 0 },
            { id: 30, q: "તહેવારો ઉજવવાથી સમાજમાં શું વધે છે?", o: ["એકતા અને આનંદ", "ઝગડા", "દુશ્મનાવટ", "કંટાળો"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૪: વનસ્પતિને જાણીએ",
        questions: [
            { id: 31, q: "વનસ્પતિનો કયો ભાગ જમીનની અંદર હોય છે?", o: ["મૂળ", "પાંદડું", "ફૂલ", "ડાળી"], a: 0 },
            { id: 32, q: "લીલા પાંદડા સૂર્યપ્રકાશમાં શું બનાવે છે?", o: ["ખોરાક", "પાણી", "માટી", "પથ્થર"], a: 0 },
            { id: 33, q: "મોટા અને મજબૂત થડવાળી વનસ્પતિને શું કહેવાય?", o: ["વૃક્ષ (ઝાડ)", "છોડ", "વેલો", "ઘાસ"], a: 0 },
            { id: 34, q: "નબળા થડવાળી અને આધાર લઈને પથરાતી વનસ્પતિને શું કહેવાય?", o: ["વેલો", "વૃક્ષ", "છોડ", "ઝાડવાં"], a: 0 },
            { id: 35, q: "નીચેનામાંથી ઔષધીય વનસ્પતિ કઈ છે?", o: ["તુલસી અને અરડૂસી", "બાવળ", "મકાઈ", "ઘાસ"], a: 0 },
            { id: 36, q: "ઝાડ આપણને શ્વાસ લેવા માટે કયો વાયુ આપે છે?", o: ["ઓક્સિજન", "કાર્બન ડાયોક્સાઇડ", "નાઇટ્રોજન", "ધૂળ"], a: 0 },
            { id: 37, q: "વનસ્પતિના કયા ભાગમાંથી ફળ બને છે?", o: ["ફૂલમાંથી", "મૂળમાંથી", "પાંદડામાંથી", "છાલમાંથી"], a: 0 },
            { id: 38, q: "સરગવા અને લીમડાના પાંદડાનો આકાર કેવો હોય છે?", o: ["નાના નાના (સંયુક્ત)", "ખૂબ મોટા", "ચોરસ", "ગોળ"], a: 0 },
            { id: 39, q: "વડના થડમાંથી નીકળતા મૂળને શું કહેવાય?", o: ["વડવાઈ", "ડાળી", "પાન", "ફૂલ"], a: 0 },
            { id: 40, q: "વૃક્ષો વાવવાથી શું ફાયદો થાય છે?", o: ["વરસાદ આવે છે અને હવા શુદ્ધ થાય છે", "ગરમી વધે છે", "પ્રદૂષણ વધે છે", "જમીન બગડે છે"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૫: વનસ્પતિ અને પ્રાણીઓનું સહજીવન",
        questions: [
            { id: 41, q: "પંખીઓ રહેવા માટે ઝાડ પર શું બનાવે છે?", o: ["માળો", "ઘર", "દર", "ગુફા"], a: 0 },
            { id: 42, q: "મધમાખી ફૂલોમાંથી શું એકઠું કરે છે?", o: ["મધ (રસ)", "પાણી", "દૂધ", "માટી"], a: 0 },
            { id: 43, q: "કીટકો અને પતંગિયા ફૂલો પર બેસીને શામાં મદદ કરે છે?", o: ["પરાગનયન (ફૂલમાંથી ફળ બનવામાં)", "ઝાડ કાપવામાં", "પાંદડા તોડવામાં", "કંઈ નહીં"], a: 0 },
            { id: 44, q: "ઝાડના પોલાણમાં કે બખોલમાં કયું પક્ષી રહે છે?", o: ["લક્કડખોદ / પોપટ", "ચકલી", "હોલો", "બગલો"], a: 0 },
            { id: 45, q: "શાકાહારી પ્રાણીઓ ખોરાક માટે શાના પર નભે છે?", o: ["વનસ્પતિ અને ઘાસ પર", "માસ પર", "કીડા પર", "કંઈ નહીં"], a: 0 },
            { id: 46, q: "પ્રાણીઓ દ્વારા વનસ્પતિના બીજનો શું થાય છે?", o: ["ફેલાવો (બીજનો ફેલાવો)", "નાશ", "બગાડ", "ચોરી"], a: 0 },
            { id: 47, q: "ગાય અને ભેંસના શરીર પર બેસીને કીડા કોણ ખાય છે?", o: ["બગલો", "કાગડો", "સમડી", "ગુવડ"], a: 0 },
            { id: 48, q: "ઝાડ પર કુદાકૂદ કરતું પ્રાણી કયું છે?", o: ["વાંદરો અને ખિસકોલી", "ગાય", "કૂતરો", "હાથી"], a: 0 },
            { id: 49, q: "જંગલના નિવસનતંત્રમાં વનસ્પતિ અને પ્રાણીઓ એકબીજા પર શું છે?", o: ["આધારિત (અવલંબિત)", "અલગ અલગ", "દુશ્મન", "કંઈ નહીં"], a: 0 },
            { id: 50, q: "જંગલો બચાવવા આપણે શાનું રક્ષણ કરવું જોઈએ?", o: ["વૃક્ષો અને વન્યજીવોનું", "માત્ર ગાડીઓનું", "શહેરોનું", "મકાનોનું"], a: 0 }
        ]
    },
    {
        title: "પ્રકરણ ૬: સુમેળભર્યું જીવન",
        questions: [
            { id: 51, q: "સુમેળભર્યું જીવન એટલે કેવું જીવન?", o: ["મળીમળીને સંપથી રહેવું", "ઝગડા કરીને રહેવું", "એકલા રહેવું", "દુશ્મનાવટ રાખવી"], a: 0 },
            { id: 52, q: "આપણા પાડોશીઓ સાથે આપણે કેવો વ્યવહાર રાખવો જોઈએ?", o: ["મદદરૂપ અને પ્રેમપૂર્વકનો", "ઝગડાખોર", "અબોલા", "ખરાબ"], a: 0 },
            { id: 53, q: "ગામમાં કે સમાજમાં બધા કારીગરો (કુંભાર, સુથાર, લુહાર) શું કરે છે?", o: ["એકબીજાને ઉપયોગી સેવા આપે છે", "એકબીજા સાથે લડે છે", "કામ બંધ રાખે છે", "કંઈ નહીં"], a: 0 },
            { id: 54, q: "માટીના વાસણો કોણ બનાવે છે?", o: ["કુંભાર", "સુથાર", "દરજી", "મોચી"], a: 0 },
            { id: 55, q: "લાકડામાંથી ટેબલ, ખુરશી કે બારી-બારણાં કોણ બનાવે છે?", o: ["સુથાર", "કુંભાર", "લુહાર", "કડીયો"], a: 0 },
            { id: 56, q: "કપડાં સીવવાનું કામ કોણ કરે છે?", o: ["દરજી", "મોચી", "ધોબી", "નાઈ"], a: 0 },
            { id: 57, q: "આપણા પગરખાં (ચંપલ/બૂટ) કોણ સીવે કે સાર્વે છે?", o: ["મોચી", "દરજી", "વાંદરો", "કુંભાર"], a: 0 },
            { id: 58, q: "કુદરતના ઘટકો (પાણી, હવા, વનસ્પતિ, પ્રાણીઓ) સાથે માનવીએ કેમ રહેવું જોઈએ?", o: ["સંતુલન અને સુમેળથી", "નાશ કરીને", "બગાડ કરીને", "દૂર ભાગીને"], a: 0 },
            { id: 59, q: "જાહેર મિલકતો (બગીચો, શાળા, પાણીના નળ) નો ઉપયોગ કેમ કરવો જોઈએ?", o: ["જાળવણી અને વિવેકપૂર્વક", "તોડફોડ કરીને", "બગાડીને", "કચરો કરીને"], a: 0 },
            { id: 60, q: "આપણા વિસ્તારમાં સ્વચ્છતા રાખવાથી શું થાય છે?", o: ["આરોગ્ય સારું રહે છે", "બીમારી વધે છે", "ગંદકી વધે છે", "કંઈ થતું નથી"], a: 0 }
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
                        <div>કુલ ગુણ: ૬૦</div>
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
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#15803d', margin: '0 0 5px 0' }}>આપણી આસપાસ અસાઇન્મેન્ટ પરિણામ</h3>
                            <div style={{ fontSize: '13px', color: '#334155' }}>
                                શાળા: <strong>{displaySchool}</strong> ({displayTalukaDist})<br />
                                વિદ્યાર્થી: <strong>{studentName}</strong> {rollNumber && `| રોલ નં: ${rollNumber}`} {teacherName && `| વર્ગશિક્ષક: ${teacherName}`} {examDate && `| તારીખ: ${examDate}`}
                            </div>
                        </div>

                        <div className="print-score-text" style={{ fontSize: '28px', fontWeight: '800', color: '#16a34a', margin: '8px 0' }}>
                            મેળવેલ કુલ ગુણ: {calculateFinalScore()} / ૬૦
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
                        <strong>સૂચનાઓ:</strong> ૧. પ્રથમ સત્રના પ્રકરણ ૧ થી ૬ ના ૧૦-૧૦ પ્રશ્નો આપેલા છે. ૨. સાચો વિકલ્પ પસંદ કરો. ૩. સબમિટ પર ક્લિક કરો.
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