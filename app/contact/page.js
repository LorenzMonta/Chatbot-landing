"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import logo from "@/public/onlylogo.png";

export default function ContactPage() {
  const [isItalian, setIsItalian] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef();

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    setIsItalian(lang.startsWith("it"));
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_apyohnf",
        "template_lwwgi8l",
        form.current,
        "XPgXNqDuQ_T6_0XQv"
      )
      .then(
        () => {
          e.target.reset();
          setSuccessMessage(
            isItalian
              ? "Messaggio inviato con successo!"
              : "Message sent successfully!"
          );
          setTimeout(() => setSuccessMessage(""), 5000);
        },
        (error) => {
          console.error("Email error:", error.text);
        }
      );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2e4374] to-blue-50 p-6 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-90 p-10 rounded-xl shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <Image src={logo} alt="Careloop logo" width={48} height={48} />
          <button
            onClick={() => setIsItalian(!isItalian)}
            className="text-sm text-blue-600 underline"
          >
            {isItalian ? "Switch to English" : "Passa all'Italiano"}
          </button>
        </div>

        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          {isItalian ? "Contattaci" : "Contact Us"}
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          {isItalian
            ? "Hai domande o desideri una demo personalizzata? Compila il modulo qui sotto e ti ricontatteremo al più presto."
            : "Have questions or want a personalized demo? Fill out the form below and we’ll get back to you shortly."}
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-gray-800 font-semibold mb-1">
              {isItalian ? "Nome" : "Name"}
            </label>
            <input
              type="text"
              name="name"
              placeholder={isItalian ? "Il tuo nome" : "Your name"}
              className="w-full p-3 rounded-lg bg-white bg-opacity-90 text-black placeholder-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder={isItalian ? "La tua email" : "Your email"}
              className="w-full p-3 rounded-lg bg-white bg-opacity-90 text-black placeholder-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-1">
              {isItalian ? "Messaggio" : "Message"}
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder={isItalian ? "Il tuo messaggio" : "Your message"}
              className="w-full p-3 rounded-lg bg-white bg-opacity-90 text-black placeholder-gray-700"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2e4374] hover:bg-[#24365c] text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            {isItalian ? "Invia messaggio" : "Send Message"}
          </button>

          {successMessage && (
            <p className="mt-4 text-green-700 text-center font-medium">
              {successMessage}
            </p>
          )}
        </form>

        <div className="mt-10 text-sm text-gray-600 text-center">
          {isItalian
            ? "Careloop è la soluzione moderna per l’assistenza clienti automatizzata, creata per i brand più esigenti."
            : "Careloop is the modern customer support solution, designed for high-performance brands."}
        </div>
      </div>
    </main>
  );
}
