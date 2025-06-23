import Head from 'next/head';
import Link from 'next/link';

export default function Music() {
  return (
    <div className="section-bubble">
      <Head>
        <title>Music | The Alchemy of Me</title>
      </Head>

      <h1 className="section-title">🎵 Music: Playing Possum</h1>
      <p className="section-subtitle">A song about survival, transformation, and reclaiming power.</p>

      <div className="music-lyrics">
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

      <div className="music-section">
        <h2>🎧 Soundscape & Visual Ideas</h2>
        <ul className="project-points">
          <li>Saxophone feature in bridge and outro jam</li>
          <li>Layered vocals during the bridge</li>
          <li>Intro with light piano, rainfall SFX, and whispered meditation: <em>"Breathe in the rhythm... let go of the weight... this is your moment, your story, your beat."</em></li>
          <li>Dreamy-to-dynamic visual transitions (from grayscale to vibrant color)</li>
          <li>Soulful retro-pop vibe with spiritual undertones and danceable energy</li>
        </ul>
      </div>
      <div className="music-section">
        <h2>💻 Composing with Code: Sonic Pi</h2>
        <p>
          <em>Playing Possum</em> is not just a lyrical piece—it's a coding journey. Using <strong>Sonic Pi</strong>, I’ve been programming the backtrack from the ground up with Ruby-based code, crafting beats, melodies, and ambient effects to match the mood and story of the lyrics.
        </p>
        <ul className="project-points">
          <li><strong>Beat & Rhythm:</strong> Custom drum loops coded in a steady 80 BPM using <code>live_loop</code> for modular timing</li>
          <li><strong>Ambient Texture:</strong> Vinyl crackle and tape hiss layered via sample effects to evoke nostalgia and emotional grounding</li>
          <li><strong>Melodic Structure:</strong> Lead melody composed using <code>play_pattern_timed</code> with reverb and echo FX</li>
          <li><strong>Dynamic Build:</strong> Chorus-driven energy shifts achieved with volume fades, stacked harmonics, and tempo consistency</li>
          <li><strong>Code Highlights:</strong> Thread management for live loops, sound layering, and synchronized cueing for section transitions</li>
        </ul>
        <p>
          This coding-first approach allows for total control over the emotional arc of the song—blending structured logic with intuitive musicality.
          The final mix will be exported for audio embedding and later vocal layering in GarageBand or another DAW.
        </p>
      </div>

      <div className="music-note">
        <p><strong>🎙️ Coming Soon:</strong> An embedded audio snippet of <em>Playing Possum</em> will be added here once production is finalized. Stay tuned!</p>
      </div>

      <div className="back-link">
        <Link href="/">← Back to Home</Link>
      </div>
    </div>
  );
}
