"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/onlylogo.png";

export default function ThankYouPage() {
  const isItalian = typeof window !== "undefined" && window.navigator.language.startsWith("it");
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const paypalLink = "https://www.paypal.me/careloopai/49";
  const stripeLink = "https://buy.stripe.com/test_bJe4gBee0aXWdyJfHA0Jq01";

  const handleCopy = () => {
    navigator.clipboard.writeText("IT20I0306234210000002460896");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bonificoContent = (
    <div className="text-left space-y-2">
      <p><strong>{isItalian ? "Beneficiario" : "Beneficiary"}:</strong> Lorenzo Montanari</p>
      <div className="flex items-center space-x-2">
        <p><strong>IBAN:</strong> IT20I0306234210000002460896</p>
        <button
          onClick={handleCopy}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          {copied ? (isItalian ? "Copiato" : "Copied") : (isItalian ? "Copia IBAN" : "Copy IBAN")}
        </button>
      </div>
      <p><strong>{isItalian ? "Banca" : "Bank"}:</strong> Mediolanum</p>
      <p><strong>{isItalian ? "Causale" : "Payment reason"}:</strong> Attivazione servizio Careloop - Careloop</p>
      <p><strong>{isItalian ? "Importo" : "Amount"}:</strong> €49</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B4171] to-[#f1f5f9] text-gray-900 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image src={Logo} alt="Careloop Logo" width={60} height={60} />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          {isItalian ? "Grazie per il tuo interesse in Careloop" : "Thank you for your interest in Careloop"}
        </h1>
        <p className="text-lg text-white mb-8">
          {isItalian
            ? "Siamo entusiasti di aiutarti a rivoluzionare il tuo customer service. Sei a un passo dal trasformare l’assistenza clienti del tuo e-commerce."
            : "We’re excited to help you revolutionize your customer service. You’re one step away from transforming your e-commerce support."}
        </p>

        <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 space-y-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2B4171] text-center">
            {isItalian ? "Procedi al pagamento per attivare il tuo chatbot" : "Proceed to payment to activate your chatbot"}
          </h2>
          <p className="text-lg text-center text-gray-800">
            {isItalian
              ? "Il servizio ha un costo di €49 al mese. Dopo il pagamento, riceverai un'email entro 24 ore per personalizzare il tuo bot."
              : "The service costs €49 per month. After payment, you’ll receive an email within 24 hours to personalize your bot."}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={paypalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0070ba] border border-[#0070ba] font-semibold rounded-xl px-6 py-4 text-center shadow hover:bg-[#0070ba]/10 transition duration-200"
            >
              Pay with PayPal
            </a>

            <a
              href={stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#635bff] text-white font-semibold rounded-xl px-6 py-4 text-center shadow hover:bg-indigo-700 transition duration-200"
            >
              Pay with Stripe
            </a>

            <button
              onClick={() => setShowModal(true)}
              className="bg-[#1e3a8a] text-white font-semibold rounded-xl px-6 py-4 text-center shadow hover:bg-blue-900 transition duration-200"
            >
              {isItalian ? "Bonifico bancario" : "Bank transfer"}
            </button>
          </div>

          <p className="text-sm text-gray-200 text-center">
            {isItalian
              ? "Hai bisogno di aiuto? Contattaci per qualsiasi domanda."
              : "Need help? Contact us for any questions."}
          </p>
        </div>

        <div className="mt-12 text-white">
          <h3 className="text-xl font-bold mb-2">
            {isItalian ? "Cosa succede dopo il pagamento?" : "What happens after payment?"}
          </h3>
          <p className="text-md">
            {isItalian
              ? "Il nostro team ti contatterà entro 24h per personalizzare il chatbot sulle tue esigenze."
              : "Our team will reach out within 24h to customize your chatbot for your needs."}
          </p>
        </div>
      </div>

      {/* MODAL per bonifico */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {isItalian ? "Dettagli per il bonifico" : "Bank Transfer Details"}
            </h2>
            {bonificoContent}
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#2B4171] text-white px-4 py-2 rounded hover:bg-[#1f2f52]"
              >
                {isItalian ? "Chiudi" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
