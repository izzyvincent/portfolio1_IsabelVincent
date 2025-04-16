import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltedCard from '../blocks/TiltedCard';
import Layout from '../components/Layout';
import styles from '../styles/ArtifactPage2.module.css';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function ShanghaiFolliesArtifact() {
  const sectionsRef = useRef([]);
  sectionsRef.current = [];
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  const horizontalScrollRef = useRef(null);
  useEffect(() => {
    const container = horizontalScrollRef.current;
    if (!container) return;
    const scrollDistance = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'bottom 85%"',
        pin: true,
        scrub: true,
        end: () => `+=${scrollDistance}`,
        // markers: true, 
      },
    });
    ScrollTrigger.refresh();
  }, []);

return (
    <Layout>
        <SEO
            title="Shanghai Follies Pitch | Isabel Vincent"
            description="An interactive one-page pitch site for the Shanghai Follies film project, blending design, storytelling, and front-end development to create an engaging user experience."
            keywords="Shanghai Follies, film pitch, interactive, UI/UX, front-end, storytelling, Isabel Vincent"
            image="/img/placeholder-image1.jpeg"
            url="https://isabelruthvincent.ca/shanghaifollies"
        />
        <div className={styles.projectPage}>
            <section className={styles.headerSection} ref={addToRefs}>
                <img
                    src="/img/placeholder-image1.jpeg"
                    alt="Period App Redesign Background"
                    className={styles.headerImage}
                />
                <div className={styles.metadata}>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Project Type</span>
                    <span className={styles.metaValue}>Front-end Development, UI/UX, Motion Graphics</span>
                    </div>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Role</span>
                    <span className={styles.metaValue}>Designer and Developer</span>
                    </div>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Applications Used</span>
                    <span className={styles.metaValue}>Front-end Languages, After Effects, Photoshop</span>
                    </div>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Project Time</span>
                    <span className={styles.metaValue}>~50 hours</span>
                    </div>
                </div>
            </section>

            <section className={styles.splitSection} ref={addToRefs}>
                <div className={styles.leftColumn}>
                    <h2>Opportunities</h2>
                    <TiltedCard
                    imageSrc="/img/blue.png"
                    captionText="Opportunity"
                    containerWidth="300px"
                    containerHeight="300px"
                    imageWidth="300px"
                    imageHeight="300px"
                    scaleOnHover={1.1}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className= {styles.tiltedCardText}>
                          Immersive Storytelling
                        </p>
                    }                    
                    />
                    <TiltedCard
                    imageSrc="/img/blue.png"
                    captionText="Opportunity"
                    containerWidth="300px"
                    containerHeight="300px"
                    imageWidth="300px"
                    imageHeight="300px"
                    scaleOnHover={1.1}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className= {styles.tiltedCardText}>
                          Dynamic Interactivity
                        </p>
                    }      
                    />
                    <TiltedCard
                    imageSrc="/img/blue.png"
                    captionText="Opportunity"
                    containerWidth="300px"
                    containerHeight="300px"
                    imageWidth="300px"
                    imageHeight="300px"
                    scaleOnHover={1.1}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className= {styles.tiltedCardText}>
                          Responsive Modernization
                        </p>
                    }      
                    />
                </div>
                <div className={styles.rightColumn}>
                    <h2>Challenges</h2>
                    <TiltedCard
                    imageSrc="/img/red.png"
                    captionText="Challenge"
                    containerWidth="300px"
                    containerHeight="300px"
                    imageWidth="300px"
                    imageHeight="300px"
                    scaleOnHover={1.1}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className= {styles.tiltedCardText}>
                          Balancing Complexity & Usability
                        </p>
                    }      
                    />
                    <TiltedCard
                    imageSrc="/img/red.png"
                    captionText="Challenge"
                    containerWidth="300px"
                    containerHeight="300px"
                    imageWidth="300px"
                    imageHeight="300px"
                    scaleOnHover={1.1}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className= {styles.tiltedCardText}>
                          Harmonizing Aesthetic and Function
                        </p>
                    }      
                    />
                    <TiltedCard
                    imageSrc="/img/red.png"
                    captionText="Challenge"
                    containerWidth="300px"
                    containerHeight="300px"
                    imageWidth="300px"
                    imageHeight="300px"
                    scaleOnHover={1.1}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className= {styles.tiltedCardText}>
                          Performance Optimization
                        </p>
                    }      
                    />
                </div>
            </section>

            <div className={styles.panelContainer}>
            <section className={styles.horzScrollSection} ref={horizontalScrollRef}>
                    <div className={styles.panel}>
                        <h2>Goal</h2>
                        <p>
                            The film synopsis, character biographies, and interactive galleries are the main features of this one-page Shanghai Follies film pitch website. Its design places a strong emphasis on responsiveness across all devices, easy navigation, and a clear and straightforward layout. Some goals with this project include: <br/><br/>
                                • Achieve a fully responsive layout <br/>
                                • Stay true to the design concepts of the film through typography and visual assets<br/>
                                • Offer CTAs to external PDFs<br/>
                                • Use a dynamic carousel for landing page images and art<br/>
                                • Dynamic and interactive character section
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Narrative</h2>
                        <p>
                            Shanghai Follies was my first major client project, and it challenged me to balance design, development, and storytelling in one single-page site. I started with only basic wireframes to confirm the core structure, then dove straight into writing HTML, CSS, and JavaScript. Along the way, I spent time in Photoshop enhancing photos and in After Effects crafting a short splash video to set the stage.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Background</h2>
                        <p>
                            Set against a 1930s backdrop, Shanghai Follies needed to capture both the period and modern usability goals. Through discussion with the client, they were looking for an interactive and dynamic design for the character biographies, a landing carousel, and specific sections.The rest was up to me.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Research &amp; Early Concepts</h2>
                        <p>
                            Before getting into the design, I looked into the history of Long Tack Sam. He was a largely popular Chinese vaudevillian magician and acrobat who toured extensively in the early 1900s. Learning more about vaudeville was really interesting. It is a style of theatrical entertainment featuring variety acts like comedy, song, and dance that thrived before film dominated. Because the show's spirit is rooted in this performance culture, I wanted the website to highlight it's roots in a modern, single-page format. <br/><br/>
                        
                            From a coding standpoint, I initially envisioned using flip cards for character bios. Carousels and dropdowns were also a need. The carousel for rotating images on the landing page and dropdowns for the Limited Series section. Flip cards could have also been used here. As the client provided feedback, I researched the best approaches to ensure each feature was both visually appealing and user-friendly.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Wireframes</h2>
                        <p>
                            Given the tight timeline and a client who preferred a direct approach, I only sketched out basic wireframes to nail down key elements: a hero section video, a character area, and limited series section. Once they gave those pieces a thumbs-up, I went straight to coding.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Continued Iterations</h2>
                        <p>
                            Large and differently sized images caused responsiveness issues and visual overwhelm, so the use of media queries and flexible layouts, specifically in the hero carousel and gallery, were a must. The project also called for PDF pitches for both a feature film and a series, alongside certain PDFs restricted via Adobe Acrobat for owner-approved users. To accommodate these documents, all PDFs were stored in buttons/CTAs and I sectioned off the group that was password-protected. Flip cards were tossed aside, and I instead had the character images act as buttons, and onclick, the bios slide out to the right, and the character moves left to split center. As the client gave feedback on each section, my approach slowly got more streamlined.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Visual Assets</h2>
                        <p>
                            A big part of the project involved editing images, so they looked polished and loaded quickly. I converted most visuals to .webp to keep file sizes small without sacrificing quality, and scanned in older, physical photos that needed extra cleanup. Once I had everything in digital form, I used Photoshop for color correction, cropping, and general touch-ups, as some were rough due to age. Later, the client asked for a typewriter-style logline near the top, which inspired me to create a splash video made in After Effects using the typewriter effect, using on-brand typography.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Coding with HTML &amp; CSS</h2>
                        <p>
                            The core of my effort centered on building a stable, responsive single-page layout: <br/>
                            • Divided each major section like Hero, Characters, Development, Contact, etc. into semantic containers and used comments to make dev-side navigation clear.  <br/>
                            • Flexbox & media queries to avoid horizontal overflow, especially in the character section where each image/bio could otherwise exceed mobile widths. <br/>
                            • I mention this because I ran into an overflow-x issue, but used inspect and put a contrasting outline on the entire site to find the problem area and resolved it swiftly. <br/>
                            • Custom Classes for toggling character bios and ensuring a clean, maintainable stylesheet. <br/>
                            • For PDFS, used buttons opening in new tabs for immediate user access. <br/>
                            • Password-protected PDFs are titled. 
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Javascript and Deployment</h2>
                        <p>
                            • Implemented a simple track-based carousel for the hero, with auto-rotation and dot-based navigation. Handled browser-specific attributes so the splash video would autostart. <br/>
                            • Each character "button” expands right on click, triggered by JS snippets controlling CSS classes. <br/>
                            • Same function to add space at the bottom for more substantial bios. <br/>
                            • After local testing, I uploaded files to Rebel Hosting. <br/>
                            • Performed an end-to-end test on multiple devices, confirming the site's responsiveness, video autoplay, contact form, and PDF links all functioned as intended. <br/>
                            • Ran into some issues with domain and files not having the correct numeric value. <br/>
                            • Resolved used FileZilla and guidance from a professor.  
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Conclusion</h2>
                        <p>
                            Even though my focus leans heavily toward design, this project gave me a whole new level of appreciation for developers. Seeing how code, design, and user experience all interact made it clear that having people on a team who can speak both “designer” and “developer” is an incredible asset. It not only speeds up problem-solving but also bridges the gap between a great concept and a smooth, finished product.
                        </p>
                    </div>
            </section>
            </div>
        </div>
    </Layout>
);}
