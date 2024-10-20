"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Home = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); 
    if (name) {
      router.push(`/input/${name}`); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-pink-400">
      <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">👋 Welcome to Dynamic App</h1>
      <h2 className="text-2xl text-white mb-4 drop-shadow-md">Enter any name:</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          placeholder="Type a name"
          className="border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
