'use client';

import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [isItalian, setIsItalian] = useState(false);

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    setIsItalian(lang.startsWith('it'));
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="text-center py-24 px-4 bg-gradient-to-br from-black to-gray-800 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {isItalian ? "Chatbot AI per l'assistenza e-commerce" : "AI Chatbot for E-Commerce Support"}
        </h1>
        <p className="text-lg md:text-2xl max-w-xl mx-auto mb-8">
          {isItalian
            ? "Automatizza le FAQ, scala il supporto e offri assistenza istantanea ai tuoi clienti – 24/7."
            : "Automate FAQ, scale your support, and offer instant assistance to your customers – 24/7."}
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded shadow">
          {isItalian ? "Prenota una demo" : "Book a Demo"}
        </button>
      </section>

      {/* DEMO PLACEHOLDER */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          {isItalian ? "Guarda il bot in azione" : "See It in Action"}
        </h2>
        <div className="bg-gray-200 p-6 rounded-xl">
          <img src="/demo-placeholder.png" alt="Demo" className="w-full rounded-xl" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            {isItalian ? "Cosa sa fare" : "What It Can Do"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">
                📦 {isItalian ? "Risposte automatiche alle FAQ" : "Answer FAQs Automatically"}
              </h3>
              <p>
                {isItalian
                  ? "Spedizioni, resi, pagamenti, info prodotto – tutto gestito in pochi secondi dalla knowledge base."
                  : "Shipping, returns, payments, product info – handled in seconds using your website's knowledge base."}
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">
                🙋 {isItalian ? "Escalation a un operatore" : "Escalate to a Human When Needed"}
              </h3>
              <p>
                {isItalian
                  ? "Passaggio fluido delle richieste complesse al team supporto via email o CRM."
                  : "Seamlessly transfer unresolved questions to your support team via email or CRM."}
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">
                ⚙️ {isItalian ? "Personalizzabile e no-code" : "Customizable and No-Code"}
              </h3>
              <p>
                {isItalian
                  ? "Facile da configurare – personalizza tono, flow e risposte in pochi minuti."
                  : "Easy to adapt – personalize tone, flow, and responses in minutes without coding."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          {isItalian ? "Prezzo" : "Pricing"}
        </h2>
        <div className="bg-white border border-gray-300 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-semibold mb-4">
            {isItalian ? "Piano base" : "Starter Plan"}
          </h3>
          <p className="text-4xl font-bold mb-2">€99/month</p>
          <p className="mb-4">
            {isItalian
              ? "Incluso: configurazione bot, escalation via email e integrazione completa."
              : "Includes setup, email escalation, and full integration."}
          </p>
          <button className="bg-black text-white px-6 py-3 rounded">
            {isItalian ? "Inizia ora" : "Get Started"}
          </button>
        </div>
      </section>

      {/* CTA FINALE + CALENDLY + FORM */}
      <section className="py-20 px-4 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          {isItalian ? "Vuoi vedere il chatbot live?" : "Want to see your chatbot live?"}
        </h2>
        <p className="mb-6 text-lg">
          {isItalian ? "Lo personalizziamo per il tuo shop in 48 ore." : "We customize it for your store in 48 hours."}
        </p>
        <button className="bg-white text-black px-6 py-4 rounded font-semibold">
          {isItalian ? "Prenota una demo gratuita" : "Book a Free Demo"}
        </button>

        {/* Calendly */}
        <div className="mt-12">
          <iframe
            src="https://calendly.com/tuo-calendly/30min"
            width="100%"
            height="600"
            frameBorder="0"
            title="Calendly Booking"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="mt-16 max-w-xl mx-auto text-left">
          <h3 className="text-2xl font-semibold mb-4">
            {isItalian ? "Oppure contattaci direttamente:" : "Or contact us directly:"}
          </h3>
          <form className="grid gap-4">
            <input type="text" placeholder={isItalian ? "Nome" : "Name"} className="p-3 rounded border" />
            <input type="email" placeholder="Email" className="p-3 rounded border" />
            <textarea placeholder={isItalian ? "Il tuo messaggio" : "Your message"} rows="4" className="p-3 rounded border" />
            <button className="bg-white text-black px-6 py-3 rounded">
              {isItalian ? "Invia richiesta" : "Send Request"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
