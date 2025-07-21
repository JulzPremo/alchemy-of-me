'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

// ============================
// Tarot Deck Definition
// ============================
// Each card object contains:
// - `name`: the card's title
// - `image`: path to the SVG illustration
// - `meaning`: whimsical interpretation
// This section begins with the Major Arcana (22 cards)
const tarotDeck = [
  {
    name: 'The Fool',
    image: '/images/The Fool.svg',
    meaning: 'Leap, giggle, stumble, repeat. The universe winks when you trust the unknown.',
  },
  {
    name: 'The Magician',
    image: '/images/The Magician.svg',
    meaning: 'Wand in one hand, WiFi in the other—manifestation at your fingertips.',
  },
  {
    name: 'The High Priestess',
    image: '/images/The High Priestess.svg',
    meaning: 'She knows your secrets and she’s sipping tea about it. Tune into your inner oracle.',
  },
  {
    name: 'The Empress',
    image: '/images/The Empress.svg',
    meaning: 'Lush, wild, and blooming—your creativity wants to be romanced.',
  },
  {
    name: 'The Emperor',
    image: '/images/The Emperor.svg',
    meaning: 'Structure with swagger. Set your throne down, love—it’s yours.',
  },
  {
    name: 'The Hierophant',
    image: '/images/The Hierophant.svg',
    meaning: 'Tradition says hello. Wisdom is dressed in vintage robes today.',
  },
  {
    name: 'The Lovers',
    image: '/images/The Lovers.svg',
    meaning: 'It’s a heart-yes or a cosmic nope. Choose what makes your soul purr.',
  },
  {
    name: 'The Chariot',
    image: '/images/The Chariot.svg',
    meaning: 'Grab the reins and blast Beyoncé. You’re steering your story now.',
  },
  {
    name: 'Strength',
    image: '/images/Strength.svg',
    meaning: 'Rawr means "I love you" in fierce. Power wears a soft paw.',
  },
  {
    name: 'The Hermit',
    image: '/images/The Hermit.svg',
    meaning: 'Retreat into your cozy cave. Truth glows when you unplug.',
  },
  {
    name: 'Wheel of Fortune',
    image: '/images/Wheel of Fortune.svg',
    meaning: 'Spin the wheel. It’s your season of serendipity and cosmic curveballs.',
  },
  {
    name: 'Justice',
    image: '/images/Justice.svg',
    meaning: 'Balance the scales and spill no tea. Fairness looks good on you.',
  },
  {
    name: 'The Hanged Man',
    image: '/images/The Hanged Man.svg',
    meaning: 'Flip the script. There’s magic in surrendering the rush.',
  },
  {
    name: 'Death',
    image: '/images/Death.svg',
    meaning: 'Endings are just glow-ups in disguise. Welcome the reboot.',
  },
  {
    name: 'Temperance',
    image: '/images/Temperance.svg',
    meaning: 'Stir, don’t shake. Sip life slowly—balance is a sacred brew.',
  },
  {
    name: 'The Devil',
    image: '/images/The Devil.svg',
    meaning: 'Temptation in glitter. Break the chain, keep the sparkle.',
  },
  {
    name: 'The Tower',
    image: '/images/The Tower.svg',
    meaning: 'Boom. Foundations shake so you can build something real.',
  },
  {
    name: 'The Star',
    image: '/images/The Star.svg',
    meaning: 'Make a wish and hydrate. You’re made of hope and constellations.',
  },
  {
    name: 'The Moon',
    image: '/images/The Moon.svg',
    meaning: 'Dreams get weird. Trust your inner witch and the whispers of dusk.',
  },
  {
    name: 'The Sun',
    image: '/images/The Sun.svg',
    meaning: 'Joy with sprinkles on top. Let yourself glow unapologetically.',
  },
  {
    name: 'Judgement',
    image: '/images/Untitled design.svg', // Update this filename when finalized
    meaning: 'Time to rise. Dust off the past—it’s your cue to shine.',
  },
  {
    name: 'The World',
    image: '/images/The World.svg',
    meaning: 'You’ve danced the dance. Completion is just the next beginning.',
  },

  // ============================
  // Minor Arcana - Wands
  // ============================
  ...Array.from({ length: 14 }, (_, i) => {
    const names = [
      'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
      'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'
    ];
    const meanings = [
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
    ];
    return {
      name: `${names[i]} of Wands`,
      image: `/images/${names[i]} of Wands.svg`,
      meaning: meanings[i],
    };
  }),

  // ============================
  // Minor Arcana - Cups
  // ============================
  ...Array.from({ length: 14 }, (_, i) => {
    const names = [
      'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
      'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'
    ];
    const meanings = [
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
    ];
    return {
      name: `${names[i]} of Cups`,
      image: `/images/${names[i]} of Cups.svg`,
      meaning: meanings[i],
    };
  }),

  // ============================
  // Minor Arcana - Swords
  // ============================
  ...Array.from({ length: 14 }, (_, i) => {
    const names = [
      'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
      'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'
    ];
    const meanings = [
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
    ];
    return {
      name: `${names[i]} of Swords`,
      image: `/images/${names[i]} of Swords.svg`,
      meaning: meanings[i],
    };
  }),
 // Minor Arcana - Pentacles
  ...Array.from({ length: 14 }, (_, i) => {
    const names = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'];
    const meanings = [
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
    ];
    return {
      name: `${names[i]} of Pentacles`,
      image: `/images/${names[i]} of Pentacles.svg`,
      meaning: meanings[i],
    };
  }),
];

// Utility function to draw random cards from the tarot deck
function getRandomCards(deck, count) {
  const shuffled = [...deck].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Main component for the Spiritual Tools page
export default function SpiritualTools() {
  const [cards, setCards] = useState([]);         // Holds drawn cards
  const [revealed, setRevealed] = useState(false); // Tracks if cards are revealed

  // Draw two random tarot cards
  const handleDraw = () => {
    const drawn = getRandomCards(tarotDeck, 2);
    setCards(drawn);
    setRevealed(false);
  };

  // Reveal the cards that were drawn
  const handleReveal = () => {
    setRevealed(true);
  };

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
            <strong>Disclaimer:</strong> While I’ve crafted this digital tarot experience with care and intention,
            I believe the most resonant readings come from handling physical cards—where your energy can truly
            infuse the deck and the ritual. Use this as a playful guide, but trust your intuition above all.
          </p>
          <p className="tool-description">
            Draw two cards and receive your whimsical reading.
          </p>

          {/* Card Draw Area */}
          <div className="tool-placeholder-container">
            {cards.length === 0 ? (
              <>
                <div className="tool-card-holder">
                  <img src="/images/Tarot Back.svg" alt="Back of Card 1" className="placeholder-img" />
                </div>
                <div className="tool-card-holder">
                  <img src="/images/Tarot Back.svg" alt="Back of Card 2" className="placeholder-img" />
                </div>
              </>
            ) : (
              cards.map((card, index) => (
                <div className="tool-card-holder" key={index}>
                  <img
                    src={revealed ? card.image : '/images/Tarot Back.svg'}
                    alt={card.name}
                    className="placeholder-img"
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

          {/* Action Buttons */}
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
        {/* Rune Tool Placeholder */}
        <div className="tool-card">
          <h2 className="tool-title">🪄 Rune Experience</h2>
          <p className="tool-description">
            A digital rune casting experience is in the works! Soon, you'll be able to draw runes and receive inspired insights grounded in ancient symbols.
          </p>

          <div className="tool-placeholder-container">
            <div className="tool-card-holder">
              <img src="/images/Coming-Soon-Rune.svg" alt="Rune Coming Soon" className="placeholder-img" />
            </div>
          </div>

          <p className="placeholder-note">
            <strong>Coming Soon:</strong> A rune reading experience that brings ancient wisdom to your modern journey.
          </p>
        </div>

        {/* Back Navigation */}
        <div className="back-link">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </>
  );
}
