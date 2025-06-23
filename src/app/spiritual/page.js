import Head from 'next/head';
import Link from 'next/link';

export default function SpiritualTools() {
  return (
    <div className="section-bubble">
      <Head>
        <title>Spiritual Tools | The Alchemy of Me</title>
      </Head>

      <h1 className="section-title">🕯️ Spiritual Tools</h1>
      <p className="section-subtitle">Explore interactive elements inspired by my spiritual journey and web design skills.</p>

      <div className="tool-card">
        <h2 className="tool-title">🔮 Tarot Experience (Placeholder)</h2>
        <p className="tool-description">
          This interactive tarot tool provides a two-card reading using symbolic suits (Cups, Swords, Wands, Pentacles). 
          Built with responsive design and CSS animations, it reflects both technical skill and spiritual depth.
        </p>
        <ul className="tool-points">
          <li>✨ Placeholder card images will be added soon</li>
          <li>🎴 Click to reveal cards and see their interpretations</li>
          <li>🔁 Includes a Re-Draw option for multiple readings</li>
        </ul>
        <p><strong>Status:</strong> Under development – visuals and interactivity coming soon!</p>
      </div>

      <div className="back-link">
        <Link href="/">← Back to Home</Link>
      </div>
    </div>
  );
}
