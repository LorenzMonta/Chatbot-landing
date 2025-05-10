'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import CookieBanner from '../components/CookieBanner';

export default function LandingPage() {
  const [isItalian, setIsItalian] = useState(false);

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setIsItalian(userLang.startsWith('it'));
  }, []);

  const logoIconUrl = "/onlylogo.png";

  return (
    <main className="min-h-screen bg-[#f5f8ff] text-gray-900 font-sans">
      <section className="py-20 px-4 bg-gradient-to-br from-[#4b6cb7] to-[#182848] text-white">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <Image src={logoIconUrl} alt="Careloop icon" width={90} height={90} className="rounded-full bg-white p-2" />
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">Careloop</h1>
            <p className="text-xl md:text-2xl mt-2">
              {isItalian ? "L'assistenza clienti, reinventata." : "Customer care, reimagined."}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href="/contact"
            className="bg-white text-[#182848] font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
          >
            {isItalian ? "Contattaci" : "Contact Us"}
          </a>
          <a
            href="/thank-you"
            className="bg-white text-[#182848] font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
          >
            {isItalian ? "Acquista ora" : "Get Started"}
          </a>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">
          {isItalian ? "Come funziona" : "How it works"}
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-[#f0f4ff] p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">1. {isItalian ? "Configuriamo il bot" : "We set up the bot"}</h3>
            <p>{isItalian ? "Personalizziamo il chatbot sulle tue esigenze." : "We tailor the bot to your needs."}</p>
          </div>
          <div className="bg-[#f0f4ff] p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">2. {isItalian ? "Lo integri sul sito" : "You integrate it"}</h3>
            <p>{isItalian ? "Ti aiutiamo a installarlo sul tuo e-commerce." : "We help you install it on your e-commerce."}</p>
          </div>
          <div className="bg-[#f0f4ff] p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">3. {isItalian ? "Assiste i clienti" : "It supports your customers"}</h3>
            <p>{isItalian ? "Il bot gestisce le richieste 24/7." : "The bot handles requests 24/7."}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-white">
        {isItalian ? (
          <>
            <h2 className="text-3xl font-semibold mb-4">Guarda Careloop in azione!</h2>
            <p className="text-gray-700 mb-8">
              Una demo reale del nostro assistente AI, progettato per gestire l'assistenza clienti 24/7 in modo intelligente, semplice ed efficace.
            </p>
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/TMH9XZVi-AQ"
                title="Demo Careloop"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-4">See Careloop in Action</h2>
            <p className="text-gray-700 mb-8">
              A real demo of our AI assistant, designed to handle customer support 24/7 with intelligence and simplicity.
            </p>
            <div className="max-w-4xl mx-auto aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 text-lg font-medium">
              Coming soon
            </div>
          </>
        )}
      </section>

      <section className="py-20 px-6 text-center bg-[#eaf0ff]">
        <h2 className="text-3xl font-semibold mb-6">
          {isItalian ? "Benefici principali" : "Key Benefits"}
        </h2>
        <ul className="max-w-2xl mx-auto text-left space-y-4 text-gray-800">
          <li>✅ {isItalian ? "Riduci i tempi di risposta fino al 90%." : "Reduce response time by up to 90%."}</li>
          <li>✅ {isItalian ? "Assistenza automatica 24/7." : "24/7 automated support."}</li>
          <li>✅ {isItalian ? "Facile da integrare, nessuna esperienza tecnica richiesta." : "Easy to integrate, no tech skills needed."}</li>
          <li>✅ {isItalian ? "Esperienza utente migliorata e più conversioni." : "Improved UX and higher conversions."}</li>
        </ul>
      </section>

      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">
          {isItalian ? "Chi siamo" : "Who We Are"}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          {isItalian
            ? "Careloop è una startup con esperienza in automazione, e-commerce e AI. Il nostro obiettivo è rendere il customer care semplice, veloce e intelligente."
            : "Careloop is a startup with experience in automation, e-commerce, and AI. Our goal is to make customer support simple, fast, and smart."}
        </p>
      </section>

      <section className="py-20 px-6 text-center bg-[#f0f4ff]">
        <h2 className="text-3xl font-semibold mb-6">
          {isItalian ? "Prezzo" : "Pricing"}
        </h2>
        <div className="max-w-md mx-auto bg-white border border-gray-300 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-4">
            {isItalian ? "Piano base" : "Starter Plan"}
          </h3>
          <p className="text-4xl font-bold mb-2">€49 {isItalian ? "/mese" : "/month"}</p>
          <p className="mb-4">
            {isItalian ? "Setup completo, email fallback, integrazione inclusa." : "Full setup, email fallback, integration included."}
          </p>
          <a href="/thank-you" className="bg-[#1d4ed8] text-white px-6 py-3 rounded inline-block hover:bg-[#2563eb]">
            {isItalian ? "Acquista ora" : "Get Started"}
          </a>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-[#4b6cb7] to-[#182848] text-white text-sm py-6 px-4 text-center">
        <div className="space-y-2">
          <div className="space-x-4">
            <a href="/privacy-policy" className="hover:underline">
              {isItalian ? "Privacy Policy" : "Privacy Policy"}
            </a>
            <a href="/terms-of-service" className="hover:underline">
              {isItalian ? "Termini di Servizio" : "Terms of Service"}
            </a>
            <a href="/cookie-policy" className="hover:underline">
              {isItalian ? "Informativa Cookie" : "Cookie Policy"}
            </a>
          </div>
          <p className="text-xs opacity-70">
            © Careloop {new Date().getFullYear()} – {isItalian ? "Tutti i diritti riservati." : "All rights reserved."}
          </p>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner />
    </main>
  );
}
