'use client';

import React, { useState } from 'react';


interface EmailFormProps {
  title: string;
  placeholder: string;
  thankYou: string;
}

export default function EmailForm({ title, placeholder, thankYou }: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [error, setError] = useState<string | null>(null); // Para manejar errores

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAnimating(true); // Activa la animación

    const data = { email: email };

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format.");
      setIsAnimating(false);
      return;
    }

    try {
      const response = await fetch('https://back-winai.vercel.app/save/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Enviar el email al backend
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error sending email: ${errorText}`);
      }

      // Simula el tiempo de la animación y oculta el formulario después
      setTimeout(() => {
        setIsSubmitted(true); // Cambia el estado a "enviado" solo después de que la animación haya terminado
        setError(null); // Reiniciar el error si la solicitud fue exitosa
      }, 600); // La duración de la animación en milisegundos
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
      setIsAnimating(false);
    }
  };


  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col items-center sm:flex-row sm:justify-center gap-4 transition-all duration-600 ${isAnimating ? 'fade-out-scale' : ''
            }`}
        >
          <input
            type="email"
            placeholder={placeholder}
            className="px-4 py-2 rounded-full text-burgundy w-full sm:w-64"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-burgundy font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300 w-full sm:w-auto"
          >
            {title}
          </button>
        </form>
      ) : (
        <div className="text-center text-white pb-4">
          {thankYou}
        </div>
      )}
      {error && (
        <div className="text-red-500 mt-4">
          {error} {/* Muestra el mensaje de error */}
        </div>
      )}
    </div>
  );
}
