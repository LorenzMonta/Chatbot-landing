'use client';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [isItalian, setIsItalian] = useState(false);

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    setIsItalian(lang.startsWith('it'));
    const accepted = localStorage.getItem('cookie-consent');
    if (!accepted) setVisible(true);
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem('cookie-consent', value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 px-6 py-5 bg-white border-t border-gray-300 shadow-lg animate-fade-in transition-opacity duration-500">
      <div className="max-w-4xl mx-auto flex flex-col gap-4 items-center text-center text-sm text-gray-800">
        <p>
          {isItalian
            ? 'Questo sito utilizza cookie tecnici e analitici per offrirti la migliore esperienza. Leggi la nostra '
            : 'This site uses technical and analytical cookies to give you the best experience. Read our '}
          <a
            href="/cookie-policy"
            className="underline text-blue-600 hover:text-blue-800 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isItalian ? 'Cookie Policy' : 'Cookie Policy'}
          </a>.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => handleConsent('accepted')}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            {isItalian ? 'Accetta tutti' : 'Accept all'}
          </button>
          <button
            onClick={() => handleConsent('essential-only')}
            className="bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            {isItalian ? 'Solo essenziali' : 'Only essential'}
          </button>
          <button
            onClick={() => handleConsent('declined')}
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
          >
            {isItalian ? 'Rifiuta' : 'Decline'}
          </button>
        </div>
      </div>
    </div>
  );
}
