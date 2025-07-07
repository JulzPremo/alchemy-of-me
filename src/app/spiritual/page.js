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
        <h2 className="tool-title">🔮 Tarot Experience</h2>
        <p className="tool-description">
          This interactive tarot tool provides a two-card reading using symbolic suits (Cups, Swords, Wands, Pentacles). 
          Built with responsive design and CSS animations, it reflects both technical skill and spiritual depth.
        </p>

        <div className="tarot-placeholder-container">
          <div className="tarot-card">
            <img 
              src="/images/placeholder-card.svg" 
              alt="Placeholder Tarot Card 1" 
              className="placeholder-img"
            />
          </div>
          <div className="tarot-card">
            <img 
              src="/images/placeholder-card.svg" 
              alt="Placeholder Tarot Card 2" 
              className="placeholder-img"
            />
          </div>
        </div>

        <div className="tarot-buttons">
          <button disabled className="disabled-button">🔍 Reveal My Reading</button>
          <button disabled className="disabled-button">🔄 Re-Draw</button>
        </div>

        <p className="placeholder-note"><strong>Note:</strong> Placeholder card images will be replaced with custom SVGs.</p>

        <ul className="tool-points">
          <li>🎴 Flip animation for card reveals</li>
          <li>✨ Interpretations appear beneath each card</li>
          <li>🔁 Re-Draw feature resets the reading</li>
        </ul>

        <p><strong>Status:</strong> Under development – visuals and functionality in progress.</p>
      </div>

      <div className="back-link">
        <Link href="/">← Back to Home</Link>
      </div>
    </div>
  );
}
