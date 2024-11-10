// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/home">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/settings">Settings</Link>
    </nav>
  );
}
