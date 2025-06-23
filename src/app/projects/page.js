// pages/web-projects.js
import Head from 'next/head';
import Link from 'next/link';

export default function WebProjects() {
  return (
    <>
      <Head>
        <title>Web Projects | The Alchemy of Me</title>
        <meta name="description" content="Explore my featured web design and development projects." />
      </Head>

      <main className="web-projects-container">
        <h1 className="page-title">Web Projects</h1>
        <p className="page-description">
          Here are some of the websites and applications I’ve designed and developed.
          Each one reflects a unique blend of function, creativity, and code.
        </p>

        <section className="project-list">
         <div class="project-card">
           <h2 class="project-title">🛡️ Medieval Kreations</h2>
            <p class="project-subtitle"><strong>Course Project</strong> | UX & Web Design Case Study</p>

            <p><strong>Overview:</strong> A digital marketplace concept for historical reenactors and the SCA community. This platform connects artisans and enthusiasts through product listings, forums, and a custom event calendar.</p>
  
          <ul class="project-points">
            <li><strong>Key Features:</strong> Product/Service Marketplace, Community Forums, Event Calendar, Media Sharing</li>
            <li><strong>User Persona:</strong> Sir Gareth – busy reenactor seeking efficient access to historical goods</li>
            <li><strong>Design Tools:</strong> Figma, Wireframes, Prototypes, UX Research</li>
              <li><strong>Testing:</strong> Moderated usability test with 3 users, identified search and support contact issues</li>
            <li><strong>Improvements:</strong> Unified UI styles, increased accessibility, added ARIA and keyboard navigation</li>
           </ul>

            <p><strong>Final Reflection:</strong> This project taught me to balance historical authenticity with modern UX design. I built out complete user flows, refined accessibility features, and conducted real user testing—all rooted in community-first design.</p>
            <a 
              href="https://www.figma.com/proto/1x1qn4DMS4GtCxVLHg1YO2/NeffJulia_WEBD-370?node-id=1012-3141&starting-point-node-id=1012%3A3141" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-button"
            >
               View Prototype ↗
            </a>
          </div>
        </section>
        <section classname="project-list">
          <div class="project-card">
            <h2 class="project-title">🔮 Animated Tarot Reading</h2>
            <p class="project-subtitle"><strong>WEB 350 - Web Media</strong></p>
            <p><strong>Overview:</strong> A personalized two-card tarot experience that combines responsive design, CSS animations, and interactive JavaScript functionality. Designed with a pastel theme and mobile-friendly layout to reflect both technical skill and personal branding.</p>
            <ul class="project-points">
              <li><strong>Key Features:</strong> Animated card flips, randomized suit selection, dynamic DOM updates, responsive layout</li>
              <li><strong>Tech Stack:</strong> HTML5, CSS3, Bootstrap, JavaScript, External SVGs</li>
              <li><strong>Accessibility:</strong> Mobile-optimized display, semantic HTML, alternative text for icons</li>
              <li><strong>Code Highlights:</strong> Custom animations with CSS transforms, flexible layout using Flexbox and media queries, JavaScript logic to prevent repeat suits</li>
            </ul>
            <p><strong>Final Reflection:</strong> This was a culmination of skills I built throughout the course—blending form and function with aesthetic intention. It not only showcases modern web practices but also reflects my voice and creative direction through playful interactivity.</p>
            <a 
             href="https://starfruit.champlain.edu/~julia" 
             target="_blank" 
             rel="noopener noreferrer"
             className="project-button"
            >
              View Project ↗
            </a>
          </div>
        </section>

        <footer className="page-footer">
          <Link href="/">← Back to Home</Link>
        </footer>
      </main>
    </>
  );
}

