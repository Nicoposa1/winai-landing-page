import Image from 'next/image';
import EmailForm from './EmailForm';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-xl">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-75">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-burgundy to-burgundy-dark text-white">
      <div className="max-w-3xl w-full text-center">
        
        <h1 className="text-5xl font-bold mb-6">Winai</h1>
        <p className="text-xl mb-8">Your AI-Powered Wine Companion</p>
        
        <div className="mb-12">
          <Image
            src="/winai-mockup.png"
            alt="Winai App Mockup"
            width={300}
            height={600}
            className="mx-auto rounded-3xl shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FeatureCard 
            icon="🍷"
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
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Get Early Access</h2>
          <EmailForm />
        </div>

        <p className="mt-8 text-sm opacity-75">
          Coming soon to iOS and Android
        </p>
      </div>
    </main>
  );
}