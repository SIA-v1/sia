// app/layout.js
import './globals.css';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/footer';
import { AuthProvider } from './hooks/Authcontext';

export const metadata = {
  title: 'Robo App',
  description: 'A web app to interact with your robotic companion',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="layout">
        <AuthProvider>
          <header className="header">
            <Navbar />
          </header>
          <main className="content">
          {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}