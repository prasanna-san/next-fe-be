'use client';

import { useState } from 'react';
import { User as UserType } from '@/lib/users';

interface UserProps {
  user: UserType;
  onUpdate: (id: string, updates: Partial<UserType>) => void;
  onDelete: (id: string) => void;
}

export default function User({ user, onUpdate, onDelete }: UserProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editAge, setEditAge] = useState(user.age.toString());

  const handleEdit = () => {
    setIsEditing(true);
    setEditName(user.name);
    setEditAge(user.age.toString());
  };

  const handleSave = async () => {
    const age = parseInt(editAge);
    if (isNaN(age) || age < 0 || age > 150) {
      alert('Please enter a valid age between 0 and 150');
      return;
    }
    
    if (editName.trim() !== user.name || age !== user.age) {
      onUpdate(user.id, { name: editName.trim(), age });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(user.name);
    setEditAge(user.age.toString());
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this user?')) {
      onDelete(user.id);
    }
  };

  return (
    <div className="flex items-center gap-6 p-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-slate-200 hover:shadow-2xl transition-shadow">
  <div className="flex-1 min-w-0">
    {isEditing ? (
      <div className="space-y-4">
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          placeholder="Name"
          className="w-full px-5 py-3 rounded-2xl border-0 shadow-inner bg-slate-50/70 focus:bg-white focus:ring-2 focus:ring-cyan-400 focus:outline-none placeholder:text-slate-400 transition"
        />
        <input
          type="number"
          value={editAge}
          onChange={(e) => setEditAge(e.target.value)}
          min="0"
          max="150"
          placeholder="Age"
          className="w-full px-5 py-3 rounded-2xl border-0 shadow-inner bg-slate-50/70 focus:bg-white focus:ring-2 focus:ring-cyan-400 focus:outline-none placeholder:text-slate-400 transition"
        />
      </div>
    ) : (
      <div>
        <h3 className="text-xl font-extrabold tracking-tight text-gray-900 mb-1">
          {user.name}
        </h3>
        <p className="text-gray-600 font-semibold">Age: {user.age}</p>
        <p className="text-xs text-gray-400 mt-1 select-none">
          Created: {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
    )}
  </div>

  <div className="flex gap-3">
    {isEditing ? (
      <>
        <button
          onClick={handleSave}
          className="px-5 py-2 text-sm font-semibold rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="px-5 py-2 text-sm font-semibold rounded-2xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
      </>
    ) : (
      <>
        <button
          onClick={handleEdit}
          className="px-5 py-2 text-sm font-semibold rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-500 text-white shadow-md hover:scale-105 hover:shadow-lg transition-transform"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-5 py-2 text-sm font-semibold rounded-2xl bg-gradient-to-r from-red-400 to-red-500 text-white shadow-md hover:scale-105 hover:shadow-lg transition-transform"
        >
          Delete
        </button>
      </>
    )}
  </div>
</div>

  );
} 