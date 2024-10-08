'use client';

import React, { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAnimating(true); // Activa la animación

    // Simula el tiempo de la animación y oculta el formulario después
    setTimeout(() => {
      setIsSubmitted(true); // Cambia el estado a "enviado" solo después de que la animación haya terminado
    }, 600); // La duración de la animación en milisegundos
  };

  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col items-center sm:flex-row sm:justify-center gap-4 transition-all duration-600 ${
            isAnimating ? 'fade-out-scale' : ''
          }`}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full text-burgundy w-full sm:w-64"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-burgundy font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300 w-full sm:w-auto"
          >
            Join Waitlist
          </button>
        </form>
      ) : (
        <div className="text-center text-white pb-4">
          Thank you for joining the waitlist!
        </div>
      )}
    </div>
  );
}
