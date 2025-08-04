import Head from 'next/head';
import Link from 'next/link';

export default function Music() {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Music | The Alchemy of Me</title>
      </Head>

      {/* Main Wrapper Bubble */}
      <div className="section-bubble">
        {/* Page Title and Intro */}
        <h1 className="page-title">🎵 Music</h1>
        <p className="page-description">
          This is a track I have been working on in Sonic Pi, using Python to code music. 
        </p>

        {/* Audio Playback Section */}
        <div className="section_bubble2">
          <h2>🎧 Listen to my <em>Sonic-Pi Creation</em></h2>
          <p>
            This is my first time creating music using Sonic Pi, and I brought the layers together in Audacity to shape the early foundation of this track.
            It&apos;s not fully complete yet&mdash;I still want to refine the timing and add more depth&mdash;but I&apos;m proud of how far it&apos;s come.
            It&apos;s already capturing the emotion, code, and courage I set out to express.
          </p>

          <audio controls style={{ width: '100%', marginTop: '1rem' }}>
            <source src="/audio/Playing Possum.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <p className="placeholder-note">
            <strong>Note:</strong> For the best experience, use headphones and let your heart guide the rhythm.
          </p>
        </div>

        {/* Sound & Visual Concepts */}
        <div className="section_bubble2">
          <h2>🎧 Soundscape &amp; Visual Ideas</h2>
          <ul className="project-points">
            <li>Saxophone feature in bridge and outro jam</li>
            <li>Layered vocals during the bridge</li>
            <li>Intro with light piano, rainfall SFX, and whispered meditation...</li>
            <li>Dreamy-to-dynamic visual transitions</li>
            <li>Soulful retro-pop vibe</li>
          </ul>
        </div>

        {/* Sonic Pi Composition Notes */}
        <div className="section_bubble2">
          <h2>💻 Composing with Code: Sonic Pi</h2>
          <p>
            <em>My track</em> is not just a musical piece&mdash;it&apos;s a coding journey...
          </p>
          <ul className="project-points">
            <li><strong>Beat &amp; Rhythm:</strong> Custom drum loops...</li>
            <li><strong>Ambient Texture:</strong> Vinyl crackle and tape hiss...</li>
            <li><strong>Melodic Structure:</strong> Lead melody with reverb...</li>
            <li><strong>Dynamic Build:</strong> Chorus-driven energy shifts...</li>
            <li><strong>Code Highlights:</strong> Thread management for loops...</li>
          </ul>
        </div>

        {/* Back Navigation */}
        <div className="back-link">
          <Link href="/">&larr; Back to Home</Link>
        </div>
      </div>
    </>
  );
}
