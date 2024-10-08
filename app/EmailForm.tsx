'use client';

import React, { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your server
    console.log('Submitted email:', email);
    // Reset the form
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center sm:flex-row sm:justify-center gap-4">
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
  );
}