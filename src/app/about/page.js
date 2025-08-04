import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>About | The Alchemy of Me</title>
      </Head>

      {/* Page Wrapper */}
      <div className="section-bubble">
        {/* Page Title */}
        <h1 className="page-title">About Me</h1>
        <p className="page-description">
          The story behind the creator &mdash; where tech meets storytelling, empathy, and purpose.
        </p>

        {/* Personal Intro */}
        <div className="section_bubble2">
          <p>
            Hi! I&apos;m Julia &mdash; a creative technologist and lifelong learner with a passion for blending code with storytelling.
            When I&apos;m not immersed in design or development, you&apos;ll likely find me surrounded by my beloved pets (including
            my dog!) or exploring new ways to express myself creatively.
          </p>
          <p>
            From photography and digital design to crafting meaningful online experiences, I love building things that feel
            both beautiful and intentional. I&apos;m also an active participant and local leader in the Society for Creative Anachronism (SCA),
            where I help organize events and bring history to life through community and education. Outside of that, I&apos;m an avid gamer,
            nature lover, and advocate for mental health and authenticity in all areas of life.
          </p>
        </div>

        {/* Journey & Career Background */}
        <div className="section_bubble2">
          <h2>🌱 My Journey</h2>
          <p>
            My path into tech was paved by years of experience in customer service and technical support &mdash; roles that taught me
            how to listen, empathize, and solve problems with clarity and care.
          </p>
          <p>
            I&apos;ve worked the front lines of service centers, guided frustrated customers through complex systems, and trained new team members
            to rise with confidence. These roles sharpened not just my communication, but my ability to translate needs into action &mdash;
            a skill that naturally led me to my current position as a Service Coordinator, where I manage workflows, coordinate across teams,
            and keep operations running smoothly.
          </p>
          <p>
            Along the way, I found myself drawn more and more to the creative side of tech. I began learning web design and development not
            just as a hobby, but as a way to build spaces that reflect the same empathy, organization, and clarity I bring to my support roles.
            My goal now is to transition fully into a web development role &mdash; combining my passion for design, storytelling, and structure to
            create inclusive, intuitive, and beautifully crafted digital experiences.
          </p>
        </div>

        {/* Skills & Mindset */}
        <div className="section_bubble2">
          <h2>💻 What I Do</h2>
          <p>
            I design and develop websites with both form and function in mind &mdash; but more importantly, I build with people in mind.
            My years in customer service have given me a unique ability to understand the needs behind the request.
          </p>
          <p>
            I don&apos;t just hear what clients say; I listen for what they mean, anticipate challenges, and strive to create solutions
            that truly serve them. Whether I&apos;m building an interactive experience, crafting an online portfolio, or prototyping a feature
            for a community platform, I approach each project with empathy, clarity, and a user-first mindset.
          </p>
          <p>
            My technical skills are backed by lived experience &mdash; I know how to ask the right questions, manage expectations,
            and deliver designs that feel intuitive and impactful.
          </p>
        </div>

        {/* Site Philosophy & Brand Vision */}
        <div className="section_bubble2">
          <h2>🌟 Why &ldquo;The Alchemy of Me&rdquo;</h2>
          <p>
            <em>The Alchemy of Me</em> is more than a personal brand &mdash; it&apos;s a creative declaration. It&apos;s a space where I combine my
            diverse skill set, life experience, and personal style to build something entirely my own.
          </p>
          <p>
            Rather than following a standard path or template, I&apos;ve chosen to showcase what I can do through a platform I&apos;ve designed
            from the ground up. This site is a living, evolving portfolio &mdash; a blend of code, design, storytelling, and curiosity &mdash;
            all shaped by who I am and what I care about.
          </p>
          <p>
            From front-end development to creative problem-solving, from user-focused thinking to clean, functional design,
            every part of this site is meant to show how I approach challenges and express myself through my work.
            <em> The Alchemy of Me</em> is my way of saying: &ldquo;Here&apos;s what I can do &mdash; and here&apos;s how I&apos;ll make it unforgettable.&rdquo;
          </p>
        </div>

        {/* Back to Home */}
        <div className="back-link">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </>
  );
}
