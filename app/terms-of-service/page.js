'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsOfService() {
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
          {isItalian ? "Termini di Servizio" : "Terms of Service"}
        </h1>
        <p className="mb-8 text-sm text-gray-600 text-center">
          {isItalian ? "Ultimo aggiornamento: Maggio 2025" : "Last updated: May 2025"}
        </p>

        <section className="space-y-8 bg-white shadow-sm p-8 rounded-xl">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. {isItalian ? "Accettazione dei Termini" : "Acceptance of Terms"}</h2>
            <p>{isItalian
              ? "Utilizzando i servizi offerti da Careloop, l’utente accetta integralmente i presenti Termini di Servizio."
              : "By using the services offered by Careloop, the user fully accepts these Terms of Service."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. {isItalian ? "Descrizione del Servizio" : "Service Description"}</h2>
            <p>{isItalian
              ? "Careloop fornisce un assistente virtuale basato su AI per la gestione dell’assistenza clienti su siti e-commerce."
              : "Careloop provides an AI-based virtual assistant for managing customer service on e-commerce websites."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. {isItalian ? "Obblighi dell'utente" : "User Obligations"}</h2>
            <p>{isItalian
              ? "L’utente si impegna a utilizzare il servizio in modo lecito, rispettando tutte le normative applicabili."
              : "The user agrees to use the service lawfully, complying with all applicable regulations."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. {isItalian ? "Limitazione di responsabilità" : "Limitation of Liability"}</h2>
            <p>{isItalian
              ? "Careloop non è responsabile per danni derivanti da un uso improprio del chatbot o per contenuti generati automaticamente."
              : "Careloop is not liable for damages resulting from misuse of the chatbot or for content generated automatically."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. {isItalian ? "Modifiche ai Termini" : "Changes to Terms"}</h2>
            <p>{isItalian
              ? "Careloop si riserva il diritto di modificare i presenti termini in qualsiasi momento, informando gli utenti tramite email o sul sito."
              : "Careloop reserves the right to modify these terms at any time, notifying users via email or on the website."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. {isItalian ? "Legge applicabile" : "Governing Law"}</h2>
            <p>{isItalian
              ? "I presenti termini sono regolati dalla legge italiana."
              : "These terms are governed by Italian law."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. {isItalian ? "Contatti" : "Contact"}</h2>
            <p>{isItalian
              ? "Per domande sui Termini di Servizio, scrivere a careloop.ai@gmail.com."
              : "For questions regarding the Terms of Service, contact careloop.ai@gmail.com."}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
