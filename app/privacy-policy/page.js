'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
  const [isItalian, setIsItalian] = useState(false);

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setIsItalian(userLang.startsWith('it'));
  }, []);

  return (
    <main className="min-h-screen bg-[#f9fafb] text-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 flex items-center justify-between">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← {isItalian ? "Torna alla home" : "Back to Home"}
          </Link>
          <Image src="/onlylogo.png" alt="Careloop logo" width={40} height={40} />
        </header>

        <h1 className="text-4xl font-bold mb-2 text-center">
          {isItalian ? "Informativa sulla Privacy" : "Privacy Policy"}
        </h1>
        <p className="mb-8 text-sm text-gray-600 text-center">
          {isItalian ? "Ultimo aggiornamento: 12 Maggio 2025" : "Last updated: May 12, 2025"}
        </p>

        <section className="space-y-8 bg-white shadow-sm p-8 rounded-xl">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. {isItalian ? "Introduzione" : "Introduction"}</h2>
            <p>
              {isItalian
                ? "Careloop rispetta la privacy dei propri utenti e si impegna a proteggere i dati personali raccolti durante l’uso del servizio."
                : "Careloop respects the privacy of its users and is committed to protecting personal data collected during use of the service."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. {isItalian ? "Titolare del trattamento" : "Data Controller"}</h2>
            <p>
              {isItalian
                ? "Il Titolare del trattamento è Lorenzo Montanari – info@careloopai.com con sede operativa in Italia."
                : "The Data Controller is Lorenzo Montanari – info@careloopai.com based in Italy."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. {isItalian ? "Dati raccolti" : "Data Collected"}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{isItalian ? "Dati identificativi: nome, email (inseriti dall’utente nel form o chatbot)" : "Identifying data: name, email (provided via form or chatbot)"}</li>
              <li>{isItalian ? "Dati tecnici: indirizzo IP, tipo di browser, lingua e dispositivo" : "Technical data: IP address, browser type, language, device"}</li>
              <li>{isItalian ? "Dati di utilizzo: interazioni con il sito, chatbot e moduli" : "Usage data: interactions with the site, chatbot and forms"}</li>
              <li>{isItalian ? "Dati forniti volontariamente: messaggi inviati tramite moduli o chat" : "Voluntary data: messages sent via contact forms or chat"}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. {isItalian ? "Finalità del trattamento" : "Purposes of Processing"}</h2>
            <p>
              {isItalian
                ? "Rispondere a richieste e messaggi inviati dagli utenti; fornire il servizio di chatbot e migliorarlo; creare ticket di supporto; invio di comunicazioni informative e assistenziali; analisi anonima del comportamento per migliorare il servizio."
                : "Responding to user inquiries and messages; providing and improving the chatbot service; creating support tickets; sending service-related or informative emails; anonymous behavioral analysis to enhance the platform."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. {isItalian ? "Base giuridica" : "Legal Basis"}</h2>
            <p>
              {isItalian
                ? "Il trattamento si basa su: consenso espresso; obbligo contrattuale; legittimo interesse."
                : "Processing is based on: consent; contractual obligation; legitimate interest."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. {isItalian ? "Conservazione dei dati" : "Data Retention"}</h2>
            <p>
              {isItalian
                ? "I dati sono conservati per il tempo necessario alle finalità indicate e non oltre 24 mesi per fini analitici e contatto. Su richiesta dell’utente, i dati possono essere cancellati anticipatamente."
                : "Data is retained for as long as necessary and no more than 24 months for analytics and contact. Upon user request, data can be deleted earlier."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. {isItalian ? "Condivisione dei dati" : "Data Sharing"}</h2>
            <p>
              {isItalian
                ? "I dati possono essere condivisi con: provider tecnici (es. hosting, CRM, EmailJS, Zapier); collaboratori autorizzati; autorità pubbliche solo se previsto per legge."
                : "Data may be shared with: technical providers (e.g. hosting, CRM, EmailJS, Zapier); authorized collaborators; public authorities only where legally required."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. {isItalian ? "Diritti dell’utente" : "User Rights"}</h2>
            <p>
              {isItalian
                ? "Ai sensi del GDPR, l’utente può accedere, correggere, cancellare, revocare il consenso, opporsi al trattamento e presentare reclamo al Garante Privacy."
                : "Under the GDPR, users may access, correct, delete, withdraw consent, object to processing, and file a complaint with the relevant Data Protection Authority."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. {isItalian ? "Cookie" : "Cookies"}</h2>
            <p>
              {isItalian
                ? "Il sito utilizza cookie tecnici e analitici per migliorare la navigazione. Per maggiori dettagli, consulta la nostra Cookie Policy."
                : "This site uses technical and analytics cookies to enhance navigation. For full details, see our Cookie Policy."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10. {isItalian ? "Modifiche alla policy" : "Changes to This Policy"}</h2>
            <p>
              {isItalian
                ? "Questa Privacy Policy può essere aggiornata in qualsiasi momento. Gli utenti verranno informati tramite sito o email in caso di modifiche rilevanti."
                : "This Privacy Policy may be updated at any time. Users will be notified on the website or by email in case of significant changes."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">11. {isItalian ? "Contatti" : "Contact"}</h2>
            <p>
              {isItalian
                ? "Per ogni informazione o richiesta: info@careloopai.com"
                : "For any request or question: info@careloopai.com"}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
