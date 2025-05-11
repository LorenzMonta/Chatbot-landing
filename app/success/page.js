"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/onlylogo.png";

export default function SuccessPage() {
  const [isItalian, setIsItalian] = useState(false);

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    setIsItalian(userLang.startsWith("it"));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4ff] to-white flex flex-col items-center justify-center text-gray-900 px-6 py-16">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center border border-[#dbeafe]">
        <div className="flex justify-center mb-6">
          <Image src={Logo} alt="Careloop Logo" width={70} height={70} />
        </div>
        <h1 className="text-4xl font-bold text-[#1e3a8a] mb-4">
          {isItalian ? "Pagamento completato" : "Payment Completed"}
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          {isItalian
            ? "Grazie per aver scelto Careloop. Il nostro team ti contatterà entro 24 ore per personalizzare il tuo chatbot."
            : "Thank you for choosing Careloop. Our team will contact you within 24 hours to personalize your chatbot."}
        </p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-[#1d4ed8] text-white font-semibold rounded-xl hover:bg-[#2563eb] transition"
        >
          {isItalian ? "Torna alla home" : "Return to Home"}
        </a>
      </div>
    </div>
  );
}
