'use client';

import { useState, useEffect } from 'react';
import { User as UserType } from '@/lib/users';
import User from './User';
import AddUser from './AddUser';

export default function UserList() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Add new user
  const addUser = async (name: string, age: number) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add user');
      }

      const newUser = await response.json();
      setUsers(prev => [...prev, newUser]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add user');
    }
  };

  // Update user
  const updateUser = async (id: string, updates: Partial<UserType>) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update user');
      }

      const updatedUser = await response.json();
      setUsers(prev => prev.map(user => 
        user.id === id ? updatedUser : user
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update user');
    }
  };

  // Delete user
  const deleteUser = async (id: string) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete user');
      }

      setUsers(prev => prev.filter(user => user.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete user');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
  {/* AddUser Form */}
  <AddUser onAdd={addUser} />

  {/* Error Message */}
  {error && (
    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-2xl shadow-md max-w-2xl mx-auto">
      {error}
    </div>
  )}

  {/* Users List */}
  <div>
    <h2 className="text-3xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
      Users List
    </h2>

    {users.length === 0 ? (
      <div className="text-center py-16 text-gray-400 italic select-none">
        No users yet. Add one above!
      </div>
    ) : (
      <div className="space-y-6">
                  {users.map((user) => (
            <User
              key={user.id}
              user={user}
              onUpdate={updateUser}
              onDelete={deleteUser}
            />
          ))}
      </div>
    )}
  </div>
</div>

  );
} 