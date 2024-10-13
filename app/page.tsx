'use client'

import Image from 'next/image';
import EmailForm from './EmailForm';
import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-75">{description}</p>
    </div>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia según cuándo quieras activar el estilo sticky
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-burgundy to-burgundy-dark text-white relative">
      <link rel="icon" href="/logo.png" sizes="any" />
      <header className={`fixed top-0 left-0 w-full bg-burgundy z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto flex justify-center">
          <Image
            src="/logo.png"
            alt="Winai Logo"
            width={60}
            height={60}
            className="mx-auto"
          />
        </div>
      </header>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-burgundy opacity-75"></div>
      </div>
      <div className="max-w-4xl w-full text-center relative z-10 pt-24">
        <h1 className="text-6xl font-bold mb-6">Winai</h1>
        <p className="text-2xl mb-12">Your AI-Powered Wine Companion</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center mb-16">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <Image
              src="/mockup2.png"
              alt="Winai App Mockup"
              width={300}
              height={600}
              className="mx-auto rounded-3xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-6">Discover and Manage Your Wines</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-2xl mr-4">🍷</span>
                <span>Virtual Wine Bodega</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">🤖</span>
                <span>AI-powered recommendations</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">📸</span>
                <span>Instant label scanning</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">🧠</span>
                <span>Personalized wine education</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">🌐</span>
                <span>Connect with wine enthusiasts</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Winai?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🍷"
              title="Virtual Wine Bodega"
              description="Keep track of your wine collection with ease"
            />
            <FeatureCard 
              icon="🤖"
              title="Smart Recommendations"
              description="Get AI-curated wine suggestions tailored to your palate"
            />
            <FeatureCard 
              icon="📸"
              title="Instant Wine Info"
              description="Scan any wine label for immediate details and ratings"
            />
            <FeatureCard 
              icon="🧠"
              title="Wine Knowledge Hub"
              description="Expand your wine expertise with AI-driven insights and lessons"
            />
            <FeatureCard 
              icon="🌐"
              title="Wine Community"
              description="Connect with fellow wine enthusiasts and share experiences"
            />
            <FeatureCard 
              icon="🍇"
              title="Vineyard Exploration"
              description="Discover and plan visits to wineries around the world"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Get Early Access</h2>
          <EmailForm />
        </div>

        <p className="text-xl font-semibold">
          Coming soon to iOS and Android
        </p>
      </div>
    </main>
  );
}
