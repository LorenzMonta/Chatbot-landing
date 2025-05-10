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
          <Link href="/" className="text-blue-600 hover:underline text-sm">← {isItalian ? "Torna alla home" : "Back to Home"}</Link>
          <Image src="/onlylogo.png" alt="Careloop logo" width={40} height={40} />
        </header>

        <h1 className="text-4xl font-bold mb-2 text-center">
          {isItalian ? "Informativa sulla Privacy" : "Privacy Policy"}
        </h1>
        <p className="mb-8 text-sm text-gray-600 text-center">
          {isItalian ? "Ultimo aggiornamento: Maggio 2025" : "Last updated: May 2025"}
        </p>

        <section className="space-y-8 bg-white shadow-sm p-8 rounded-xl">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              {isItalian ? "1. Introduzione" : "1. Introduction"}
            </h2>
            <p>
              {isItalian
                ? "La presente Informativa sulla Privacy descrive le modalità con cui Careloop raccoglie, utilizza e protegge i dati personali degli utenti in conformità al Regolamento (UE) 2016/679 (GDPR)."
                : "This Privacy Policy outlines how Careloop collects, uses, and protects users’ personal data in compliance with Regulation (EU) 2016/679 (GDPR)."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              {isItalian ? "2. Titolare del trattamento" : "2. Data Controller"}
            </h2>
            <p>
              {isItalian
                ? "Il titolare del trattamento è Careloop. Per qualsiasi richiesta scrivere a careloop.ai@gmail.com."
                : "The data controller is Careloop. For any inquiries, contact careloop.ai@gmail.com."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              {isItalian ? "3. Dati raccolti" : "3. Data We Collect"}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                {isItalian
                  ? "Dati identificativi (es. nome, email) forniti tramite moduli online."
                  : "Identification data (e.g., name, email) provided via online forms."}
              </li>
              <li>
                {isItalian
                  ? "Dati tecnici di navigazione (IP, tipo di browser, informazioni sul dispositivo)."
                  : "Browsing data (IP, browser type, device info)."}
              </li>
              <li>
                {isItalian
                  ? "Dati raccolti tramite cookie e tecnologie simili (vedi Cookie Policy)."
                  : "Data collected via cookies and similar technologies (see Cookie Policy)."}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              {isItalian ? "4. Finalità del trattamento" : "4. Purpose of Processing"}
            </h2>
            <p>
              {isItalian
                ? "I dati sono trattati per fornire il servizio, gestire le richieste di supporto, inviare comunicazioni informative/commerciali (se autorizzate) e migliorare l’esperienza utente."
                : "Data is processed to deliver the service, manage support inquiries, send updates/marketing (if consented), and improve the user experience."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              {isItalian ? "5. Base giuridica" : "5. Legal Basis"}
            </h2>
            <p>
              {isItalian
                ? "Il trattamento si basa sul consenso dell’utente, sull’esecuzione di obblighi contrattuali o sul legittimo interesse del titolare."
                : "Processing is based on user consent, performance of contractual obligations, or the legitimate interest of the controller."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              {isItalian ? "6. Conservazione dei dati" : "6. Data Retention"}
            </h2>
            <p>
              {isItalian
                ? "I dati saranno conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti."
                : "Data will be retained only as long as necessary to fulfill the purposes for which it was collected."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              {isItalian ? "7. Diritti dell’utente" : "7. User Rights"}
            </h2>
            <p>
              {isItalian
                ? "L’utente può in ogni momento esercitare i diritti previsti dagli articoli 15-22 del GDPR, tra cui accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei dati."
                : "Users may exercise their rights under Articles 15–22 of the GDPR, including access, rectification, erasure, restriction, objection, and data portability."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              {isItalian ? "8. Contatti" : "8. Contact"}
            </h2>
            <p>
              {isItalian
                ? "Per qualsiasi richiesta relativa alla presente informativa, è possibile scrivere a careloop.ai@gmail.com."
                : "For any inquiries regarding this notice, contact careloop.ai@gmail.com."}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
