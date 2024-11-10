// pages/login.js
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '../hooks/Authcontext';

export default function Login() {
  const router = useRouter();
  const { setUser } = useAuth();  // Use setUser to set authenticated user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Assuming authentication logic here
    setUser({ email });  // Set user as authenticated
    router.push('/');  // Redirect to home page after login
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}