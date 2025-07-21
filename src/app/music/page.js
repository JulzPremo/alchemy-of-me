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
        <h1 className="page-title">🎵 Music: Playing Possum</h1>
        <p className="page-description">
          A song about survival, transformation, and reclaiming power.
        </p>

        {/* Lyrics Section */}
        <div className="section_bubble2">
          <h2>Lyrics – <em>Playing Possum</em></h2>
          <pre className="lyrics-text">
Rain hits the pavement, heartbeat slow,{"\n"}
I’ve been running from shadows I used to know.{"\n"}
Grandpa’s hands held me through thick and thin,{"\n"}
But the music kept calling, pulling me back in.{"\n\n"}
Feet on the floor, hear the rhythm ignite,{"\n"}
Every note in my soul, every spark in the night.{"\n"}
From the echoes of pain to the songs of release,{"\n"}
I found my voice, now I'm moving with ease.{"\n\n"}
I’m never gonna stop this beat,{"\n"}
From the soul to the sky, I feel complete.{"\n"}
Through the highs, through the lows, let the music flow,{"\n"}
I’m alive, I’m free, let the whole world know.{"\n\n"}
Every tear, every fall, every midnight call,{"\n"}
Built me up, made me strong—now I'm standing tall.{"\n"}
With my roots in the earth and my heart in the sky,{"\n"}
I’m dancing through the storm with my head held high.{"\n\n"}
I’m never gonna stop this beat,{"\n"}
From the soul to the sky, I feel complete.{"\n"}
Let the drums kick in, let the bass line roll,{"\n"}
I’m alive, I’m free, and I’m in control.
          </pre>
        </div>

        {/* Audio Playback Section */}
        <div className="section_bubble2">
          <h2>🎧 Listen to <em>Playing Possum</em></h2>
          <p>
            This is my first time creating music using Sonic Pi, and I brought the layers together in Audacity to shape the early foundation of this track.
            It’s not fully complete yet—I still want to refine the timing and add more depth—but I’m proud of how far it’s come.
            It’s already capturing the emotion, code, and courage I set out to express.
          </p>

          <audio controls style={{ width: '100%', marginTop: '1rem' }}>
            <source src="/audio/Playing Possum.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <p className="placeholder-note">
            <strong>Note:</strong> For the best experience, use headphones and let your heart guide the rhythm.
          </p>
        </div>

        {/* Story Behind the Song */}
        <div className="section_bubble2">
          <h2 className="section-title">🎭 The Story Behind <em>Playing Possum</em></h2>
          <p>
            <em>Playing Possum</em> was born from a deeply personal place—where fear meets performance, and survival becomes an art.
            The phrase itself captures what I’ve often felt: playing dead to stay safe, quieting my truth to keep the peace.
            But behind that stillness lived a soul aching to dance, sing, and scream her story.
          </p>
          <p>
            This song explores the tension between my inner light and shadow, especially as someone navigating mental health, trauma recovery, and personal identity.
            It’s about the masks we wear, the parts we silence, and what it means to finally reclaim your voice...
          </p>
          <p>
            I built the instrumental layers using Sonic Pi, experimenting with rhythm coding, ambient textures, and gradual build-ups.
            The song fuses electronic elements with organic emotion—mirroring my journey of using tech and art to reconnect with myself.
          </p>
        </div>

        {/* Sound & Visual Concepts */}
        <div className="section_bubble2">
          <h2>🎧 Soundscape & Visual Ideas</h2>
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
          <p><em>Playing Possum</em> is not just a lyrical piece—it's a coding journey...</p>
          <ul className="project-points">
            <li><strong>Beat & Rhythm:</strong> Custom drum loops...</li>
            <li><strong>Ambient Texture:</strong> Vinyl crackle and tape hiss...</li>
            <li><strong>Melodic Structure:</strong> Lead melody with reverb...</li>
            <li><strong>Dynamic Build:</strong> Chorus-driven energy shifts...</li>
            <li><strong>Code Highlights:</strong> Thread management for loops...</li>
          </ul>
        </div>

        {/* Back Navigation */}
        <div className="back-link">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </>
  );
}
