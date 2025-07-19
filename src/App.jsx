
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="/logo.png" alt="Connect GCMS 2000 Logo" className="logo" />
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#collaboration">Collaborate</a>
          <a href="#ads">Medical Ads</a>
          <a href="#login">Login</a>
        </nav>
      </header>
      <main>
        <section id="home">
          <h1>Welcome to Connect GCMS 2000</h1>
          <p>A platform reconnecting GCMS 2000 medical graduates across the world.</p>
        </section>
        <section id="projects">
          <h2>Share a Project</h2>
          <p>Have an idea to give back to Ethiopia? Share it here and get support from your GCMS colleagues.</p>
        </section>
        <section id="collaboration">
          <h2>Collaborate with Peers</h2>
          <p>Connect with professionals abroad or in Ethiopia for joint ventures and skill-sharing.</p>
        </section>
        <section id="ads">
          <h2>Medical Advertisements</h2>
          <p>Medical companies and partners can advertise opportunities, tools, and services.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Connect GCMS 2000. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
