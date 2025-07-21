import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>The Alchemy of Me | Julia Neff</title>
        <meta name="description" content="Explore Julia Neff’s creative portfolio blending code, design, and personal storytelling." />
      </Head>

      <div className="section-bubble">
        {/* Title Block */}
        <h1 className="page-title">✨ The Alchemy of Me</h1>
        <p className="page-description">
          A portfolio where creativity meets code, and every line tells a story.
        </p>

        {/* Two-Column Grid of Highlights */}
        <div className="highlight-grid">
          {/* About */}
          <div className="section_bubble2">
            <h2 className="highlight-title">🌟 About</h2>
            <p className="highlight-text">
              Learn more about my background, journey into tech, and what fuels my passion for creating purposeful, inclusive experiences.
            </p>
            <Link href="/about" className="project-button">Show Me More →</Link>
          </div>

          {/* Music */}
          <div className="section_bubble2">
            <h2 className="highlight-title">🎵 Music</h2>
            <p className="highlight-text">
              Explore my original track <em>“Playing Possum”</em>, a project born from code and courage, blending electronic soundscapes and personal storytelling.
            </p>
            <Link href="/music" className="project-button">Listen & Read →</Link>
          </div>

          {/* Projects */}
          <div className="section_bubble2">
            <h2 className="highlight-title">💻 Web Projects</h2>
            <p className="highlight-text">
              Dive into my design and development work — from interactive tarot readings to community-first marketplace concepts.
            </p>
            <Link href="/projects" className="project-button">Explore Projects →</Link>
          </div>

          {/* Spiritual Tools */}
          <div className="section_bubble2">
            <h2 className="highlight-title">🔮 Spiritual Tools</h2>
            <p className="highlight-text">
              Play with my digital tarot draw and soon-to-launch rune experience — combining ancient insight with modern code.
            </p>
            <Link href="/spiritual" className="project-button">Draw a Card →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
