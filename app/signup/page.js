// pages/signup.js

"use client"
import './signup.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '../hooks/Authcontext';


export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');

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
          <div className="form-row">
            <label>
              Name:
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email:
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Password:
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Contact Number:
              <input
                type="tel"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="button-container">
            <button type="submit">Signup</button>
          </div>
       </form>
    </div>
  );
}
