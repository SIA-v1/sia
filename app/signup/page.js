// pages/signup.js
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '../hooks/Authcontext';

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement signup logic here
    alert('Account created! Assigned bot number: 12345');
    router.push('/login');
  };

  return (
    <div className="page">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
