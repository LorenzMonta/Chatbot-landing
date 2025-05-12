'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CookiePolicy() {
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
          {isItalian ? "Informativa Cookie" : "Cookie Policy"}
        </h1>
        <p className="mb-8 text-sm text-gray-600 text-center">
          {isItalian ? "Ultimo aggiornamento: 12 Maggio 2025" : "Last updated: May 12, 2025"}
        </p>

        <section className="space-y-8 bg-white shadow-sm p-8 rounded-xl">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. {isItalian ? "Cosa sono i cookie" : "What are cookies"}</h2>
            <p>{isItalian
              ? "I cookie sono piccoli file di testo che i siti web possono salvare sul dispositivo dell’utente per memorizzare preferenze e dati di navigazione."
              : "Cookies are small text files that websites can store on the user's device to remember preferences and browsing data."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. {isItalian ? "Tipologie di cookie utilizzati" : "Types of cookies used"}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{isItalian ? "Cookie tecnici (necessari al funzionamento del sito)." : "Technical cookies (essential for site functionality)."}</li>
              <li>{isItalian ? "Cookie analitici (per analisi statistiche anonime)." : "Analytical cookies (for anonymous statistical analysis)."}</li>
              <li>{isItalian ? "Cookie di profilazione (solo previo consenso esplicito)." : "Profiling cookies (only with explicit consent)."}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. {isItalian ? "Finalità" : "Purpose"}</h2>
            <p>{isItalian
              ? "Utilizziamo i cookie per migliorare la navigazione, analizzare il traffico e offrire contenuti personalizzati."
              : "We use cookies to enhance navigation, analyze traffic, and offer personalized content."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. {isItalian ? "Gestione del consenso" : "Consent management"}</h2>
            <p>{isItalian
              ? "Puoi gestire le preferenze cookie tramite il banner iniziale o le impostazioni del browser."
              : "You can manage your cookie preferences through the initial banner or your browser settings."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. {isItalian ? "Servizi di terze parti" : "Third-party services"}</h2>
            <p>{isItalian
              ? "Alcuni cookie sono installati da servizi esterni come Google Analytics, che possono raccogliere dati anonimizzati sull’uso del sito."
              : "Some cookies are installed by third-party services like Google Analytics, which may collect anonymized data about site usage."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. {isItalian ? "Durata dei cookie" : "Cookie Duration"}</h2>
            <p>{isItalian
              ? "I cookie possono essere temporanei (sessione) o persistenti (rimangono memorizzati più a lungo sul dispositivo)."
              : "Cookies may be temporary (session-based) or persistent (stored longer on the device)."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. {isItalian ? "Modifiche alla presente policy" : "Changes to this policy"}</h2>
            <p>{isItalian
              ? "Ci riserviamo il diritto di modificare l’informativa cookie in qualsiasi momento. Eventuali modifiche sostanziali saranno comunicate agli utenti."
              : "We reserve the right to update this cookie policy at any time. Any material changes will be communicated to users."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. {isItalian ? "Contatti" : "Contact"}</h2>
            <p>{isItalian
              ? "Per ulteriori informazioni o chiarimenti scrivi a info@careloopai.com."
              : "For further information or clarification, contact info@careloopai.com."}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
