'use client';

import { useState } from 'react';

interface AddUserProps {
  onAdd: (name: string, age: number) => void;
}

export default function AddUser({ onAdd }: AddUserProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !age.trim()) return;

    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 0 || ageNum > 150) {
      alert('Please enter a valid age between 0 and 150');
      return;
    }

    setIsSubmitting(true);
    try {
      await onAdd(name.trim(), ageNum);
      setName('');
      setAge('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="mb-10 p-8 bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-2xl transition-all hover:shadow-3xl"
>
  <h2 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent tracking-tight mb-6">
    Add New User
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter name"
      className="px-5 py-4 text-lg rounded-2xl border-0 shadow-inner bg-slate-50/80 focus:bg-white focus:ring-2 focus:ring-sky-400 focus:outline-none placeholder:text-slate-500 text-gray-900 transition duration-200"
      disabled={isSubmitting}
      required
    />
    <input
      type="number"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      placeholder="Enter age"
      min="0"
      max="150"
      className="px-5 py-4 text-lg rounded-2xl border-0 shadow-inner bg-slate-50/80 focus:bg-white focus:ring-2 focus:ring-sky-400 focus:outline-none placeholder:text-slate-500 text-gray-900 transition duration-200"
      disabled={isSubmitting}
      required
    />
    <button
      type="submit"
      disabled={!name.trim() || !age.trim() || isSubmitting}
      className="px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-400 text-white shadow-xl hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
    >
      {isSubmitting ? 'Adding...' : 'Add User'}
    </button>
  </div>
    </form>

  );
} 