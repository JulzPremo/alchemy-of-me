'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

// Tarot Deck Definition
const tarotDeck = [
  {
    name: 'The World',
    image: '/images/The World.svg',
    meaning: 'You&apos;ve danced the dance. Completion is just the next beginning.',
  },
  // Full major arcana skipped here for brevity — include them above this line
  // Minor Arcana Suits
  ...['Wands', 'Cups', 'Swords', 'Pentacles'].flatMap((suit, i) => {
    const names = [
      'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
      'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'
    ];
    const meaningsMatrix = [
      [ // Wands
        'A spark of inspiration wants to party in your brain.',
        'Double vision? Nah, that’s just potential multiplying.',
        'Plant your ideas and wait for them to shimmy into bloom.',
        'A cozy pause wrapped in wand-flavored blankets.',
        'Creative chaos—duck or dance through it.',
        'Victory lap! You’ve done the thing, cape optional.',
        'Defend your glitter castle—haters gonna poke.',
        'Zoom! You’re on fire and your inbox can’t keep up.',
        'Wand burnout. Recharge your spark battery.',
        'Final boss energy. You’re carrying wands and wisdom.',
        'The messenger of mischief and lightbulb moments.',
        'Gallop boldly where no brainstorm has gone before.',
        'She conjures magic with mascara and wit.',
        'A leader who speaks wand and sass fluently.',
      ],
      [ // Cups
        'A sip of divine emotion—cheers to beginnings.',
        'Clink! A soulful connection swirls into view.',
        'Raise your cups and dance—joy is contagious.',
        'Emo fog rolling in. Wait it out or stir it gently.',
        'Spilled milk and soggy feelings—cry, then clean it up.',
        'Nostalgia calls. Answer, but don’t get lost in the past.',
        'Too many choices. Eeny meeny emotional roulette.',
        'Time to ghost the comfort zone. Deeper waters await.',
        'Dreams fulfilled—pop the emotional champagne.',
        'Cups overfloweth! A glittery heart-circle moment.',
        'Tiny oracle alert—watch for whispers in the waves.',
        'A moody poet on a mission to deliver feels.',
        'She reigns with velvet kindness and ocean eyes.',
        'He holds space like a warm tide. Big fish in soft waters.',
      ],
      [ // Swords
        'A sharp new truth just dropped—handle with clarity.',
        'Mental gymnastics. Pair your logic with compassion.',
        'Heartbreak hotel. Feel it, then rewrite the lyrics.',
        'Nap time for the noisy brain. Recharge mode engaged.',
        'Petty squabbles. Choose grace, or at least clever comebacks.',
        'Victory after the storm—damp but dazzling.',
        'Sneaky thoughts playing hide and seek. Be alert.',
        'Mind maze mode. Escape requires inner clarity.',
        'Anxiety parade—send it marching the other way.',
        'Dramatic ending, yes. But freedom’s peeking in.',
        'Ideas are sprouting—just don’t snip them too soon.',
        'The rebel rider slicing through mental fog.',
        'She speaks with clarity and eyebrow precision.',
        'A strategic sage—thinks twice, acts once (usually).',
      ],
      [ // Pentacles
        'Seeds of abundance sparkle beneath your boots.',
        'Teamwork and shared snacks build empires.',
        'Your work’s being noticed—ta-da!',
        'Hug your coins, but don’t strangle the flow.',
        'Tough times—hang on, brighter treasure ahead.',
        'Reciprocity is sexy. Give and receive with grace.',
        'Tend your money garden—it’s slow but golden.',
        'Skill-building montage time. Cue the learning beats.',
        'Fruitful vibes—luxury in your cozy corner.',
        'Legacy vibes—foundations and family heirlooms.',
        'The apprentice of earthly delights.',
        'A steady traveler with practical shoes and purpose.',
        'She nurtures prosperity like plants and kittens.',
        'He rules the coin kingdom—stable, grounded, fab.',
      ]
    ];
    return names.map((name, idx) => ({
      name: `${name} of ${suit}`,
      image: `/images/${name} of ${suit}.svg`,
      meaning: meaningsMatrix[i][idx],
    }));
  })
];

// Utility
function getRandomCards(deck, count) {
  const shuffled = [...deck].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Component
export default function SpiritualTools() {
  const [cards, setCards] = useState([]);
  const [revealed, setRevealed] = useState(false);

  const handleDraw = () => {
    const drawn = getRandomCards(tarotDeck, 2);
    setCards(drawn);
    setRevealed(false);
  };

  const handleReveal = () => setRevealed(true);

  return (
    <>
      <Head>
        <title>Spiritual Tools | The Alchemy of Me</title>
      </Head>

      <div className="section-bubble">
        <h1 className="page-title">🕯️ Spiritual Tools</h1>
        <p className="page-description">
          Explore interactive elements inspired by my spiritual journey and web design skills.
        </p>

        <div className="tool-card">
          <h2 className="tool-title">🔮 Tarot Experience</h2>
          <p className="tool-description">
            <strong>Disclaimer:</strong> While I&apos;ve crafted this digital tarot experience with care and intention,
            I believe the most resonant readings come from handling physical cards&mdash;where your energy can truly
            infuse the deck and the ritual. Use this as a playful guide, but trust your intuition above all.
          </p>
          <p className="tool-description">
            Draw two cards and receive your whimsical reading.
          </p>

          <div className="tool-placeholder-container">
            {cards.length === 0 ? (
              <>
                <div className="tool-card-holder">
                  <Image src="/images/Tarot Back.svg" alt="Back of Card 1" className="placeholder-img" width={200} height={300} />
                </div>
                <div className="tool-card-holder">
                  <Image src="/images/Tarot Back.svg" alt="Back of Card 2" className="placeholder-img" width={200} height={300} />
                </div>
              </>
            ) : (
              cards.map((card, index) => (
                <div className="tool-card-holder" key={index}>
                  <Image 
                    src={revealed ? card.image : '/images/Tarot Back.svg'}
                    alt={card.name}
                    className="placeholder-img"
                    width={200}
                    height={300}
                  />
                  {revealed && (
                    <div className="tarot-meaning">
                      <h3>{card.name}</h3>
                      <p>{card.meaning}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="tool-buttons">
            <button onClick={handleReveal} disabled={cards.length === 0 || revealed}>
              🔍 Reveal My Reading
            </button>
            <button onClick={handleDraw}>🔄 Draw</button>
          </div>

          <p className="placeholder-note">
            <strong>Note:</strong> All artwork is hand-selected and uniquely rendered using Canva.
          </p>
        </div>

        <div className="tool-card">
          <h2 className="tool-title">🪄 Rune Experience</h2>
          <p className="tool-description">
            A digital rune casting experience is in the works! Soon, you&apos;ll be able to draw runes and receive inspired insights grounded in ancient symbols.
          </p>
          <div className="tool-placeholder-container">
            <div className="tool-card-holder">
              <Image src="/images/Coming-Soon-Rune.svg" alt="Rune Coming Soon" className="placeholder-img" width={200} height={300} />
            </div>
          </div>
          <p className="placeholder-note">
            <strong>Coming Soon:</strong> A rune reading experience that brings ancient wisdom to your modern journey.
          </p>
        </div>

        <div className="back-link">
          <Link href="/">&larr; Back to Home</Link>
        </div>
      </div>
    </>
  );
}
