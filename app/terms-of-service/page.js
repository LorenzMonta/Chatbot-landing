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
          {isItalian ? "Ultimo aggiornamento: 12 Maggio 2025" : "Last updated: May 12, 2025"}
        </p>

        <section className="space-y-8 bg-white shadow-sm p-8 rounded-xl">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. {isItalian ? "Descrizione del Servizio" : "Service Description"}</h2>
            <p>{isItalian
              ? "Careloop fornisce un assistente virtuale basato su AI, integrabile nel sito web dell’utente, capace di rispondere automaticamente a domande frequenti, suggerire taglie, cercare prodotti e offrire funzioni di customer care."
              : "Careloop provides an AI-based virtual assistant that integrates with your website to automatically answer FAQs, suggest sizes, search products, and offer customer care features."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. {isItalian ? "Iscrizione e Utilizzo" : "Registration and Use"}</h2>
            <p>{isItalian
              ? "Per accedere al servizio è necessario: un indirizzo email valido, il pagamento mensile e l’accettazione dei presenti Termini. L’utente è responsabile dei propri dati e dell’uso conforme alla legge."
              : "To use the service, you must: provide a valid email address, complete monthly payment, and accept these Terms. Users are responsible for the accuracy of their data and lawful use of the service."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. {isItalian ? "Pagamento e Fatturazione" : "Payment and Billing"}</h2>
            <p>{isItalian
              ? "Careloop funziona con abbonamento mensile. Copertura: 30 giorni. Disdetta: possibile in qualsiasi momento prima della scadenza. Rimborso: non previsto per periodi non utilizzati."
              : "Careloop operates on a monthly subscription basis. Coverage: 30 days. Cancellation: anytime before renewal. Refunds: not provided for unused time."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. {isItalian ? "Licenza d'Uso" : "License of Use"}</h2>
            <p>{isItalian
              ? "Concediamo una licenza non esclusiva, non trasferibile e revocabile, limitata all’uso commerciale lecito sul proprio sito. Tutti i diritti sul software restano riservati a Careloop."
              : "We grant a non-exclusive, non-transferable, and revocable license for lawful commercial use on your own website. All rights to the software remain the property of Careloop."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. {isItalian ? "Limitazioni di Responsabilità" : "Limitation of Liability"}</h2>
            <p>{isItalian
              ? "Careloop è uno strumento automatizzato basato su AI. Le risposte potrebbero non essere sempre corrette. L’utente è responsabile per l’interazione con i propri clienti. Careloop non è responsabile per danni diretti o indiretti. Il servizio è fornito 'così com’è', senza garanzie di risultato."
              : "Careloop is an automated AI-based tool. Answers may not always be accurate. Users are responsible for customer interactions. Careloop shall not be held liable for direct or indirect damages. The service is provided 'as is' with no guarantee of specific outcomes."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. {isItalian ? "Modifiche al Servizio" : "Service Updates"}</h2>
            <p>{isItalian
              ? "Ci riserviamo il diritto di modificare, sospendere o aggiornare il servizio in qualsiasi momento. In caso di modifiche importanti, informeremo gli utenti via email."
              : "We reserve the right to modify, suspend, or update the service at any time. In case of substantial changes, users will be notified by email."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. {isItalian ? "Sicurezza e Privacy" : "Security and Privacy"}</h2>
            <p>{isItalian
              ? "I dati sono trattati secondo il GDPR (Reg. UE 2016/679). Per dettagli, consulta la nostra Privacy Policy e Cookie Policy."
              : "Data is processed in accordance with the GDPR (EU Reg. 2016/679). For details, see our Privacy Policy and Cookie Policy."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. {isItalian ? "Uso Illecito o Non Autorizzato" : "Prohibited or Unlawful Use"}</h2>
            <p>{isItalian
              ? "È vietato usare Careloop per scopi illegali, offensivi o ingannevoli, automazioni fraudolente o interferenze tecniche. Le violazioni possono portare alla sospensione immediata del servizio."
              : "Careloop may not be used for illegal, offensive, or misleading purposes, fraudulent automation, or technical interference. Violations may result in immediate suspension of the service."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. {isItalian ? "Disdetta del Servizio" : "Cancellation"}</h2>
            <p>{isItalian
              ? "L’utente può interrompere il servizio in qualsiasi momento. La disdetta sarà effettiva al termine del periodo già pagato."
              : "Users may cancel the service at any time. Cancellation takes effect at the end of the paid period."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10. {isItalian ? "Legge Applicabile e Foro Competente" : "Governing Law and Jurisdiction"}</h2>
            <p>{isItalian
              ? "I presenti Termini sono regolati dalla legge italiana. Per ogni controversia è competente il Foro di Ravenna."
              : "These Terms are governed by Italian law. Any dispute shall be subject to the exclusive jurisdiction of the Court of Ravenna."}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">11. {isItalian ? "Contatti" : "Contact"}</h2>
            <p>{isItalian
              ? "Per domande sui Termini di Servizio, scrivere a info@careloopai.com."
              : "For questions regarding the Terms of Service, contact info@careloopai.com."}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
