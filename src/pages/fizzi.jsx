import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltedCard from '../blocks/TiltedCard';
import Layout from '../components/Layout';
import styles from '../styles/ArtifactPage3.module.css';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function FizziArtifact() {
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
            title="Fizzi Sparkling Water Commercial | Isabel Vincent"
            description="A motion commercial project for a fictional sparkling water brand. Discover how innovative visual effects and dynamic storytelling bring the brand to life."
            keywords="Fizzi, motion graphics, commercial, video, visual effects, Isabel Vincent"
            image="/img/fizzihome.png" 
            url="https://isabelruthvincent.ca/fizzi"
        />
        <div className={styles.projectPage}>
            <section className={styles.headerSection} ref={addToRefs}>
                <video
                    src="/mp4/fizzi.mp4"
                    alt="Period App Redesign Background"
                    className={styles.headerImage}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className={styles.metadata}>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Project Type</span>
                    <span className={styles.metaValue}>Motion Graphics, Graphic Design</span>
                    </div>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Role</span>
                    <span className={styles.metaValue}>Motion and Graphic Designer</span>
                    </div>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Applications Used</span>
                    <span className={styles.metaValue}>After Effects, Adobe Dimension, Adobe Fresco</span>
                    </div>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Project Time</span>
                    <span className={styles.metaValue}>23 hours</span>
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
                        <p className="tilted-card-text">
                          Innovative Visual Effects
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
                        <p className="tilted-card-text">
                          3D Integration & Branding
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
                        <p className="tilted-card-text">
                          Creative Post-Production
                        </p>
                    }      
                    />
                </div>
                <div className={styles.rightColumn}>
                    <h2>Challenges</h2>
                    <TiltedCard
                    imageSrc="/img/blue.png"
                    captionText="Challenge"
                    containerWidth="300px"
                    containerHeight="300px"
                    imageWidth="300px"
                    imageHeight="300px"
                    scaleOnHover={1.1}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-text">
                          Maintaining Visual Consistency
                        </p>
                    }      
                    />
                    <TiltedCard
                    imageSrc="/img/blue.png"
                    captionText="Challenge"
                    containerWidth="300px"
                    containerHeight="300px"
                    imageWidth="300px"
                    imageHeight="300px"
                    scaleOnHover={1.1}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-text">
                          Balancing Experimentation with Clarity
                        </p>
                    }      
                    />
                    <TiltedCard
                    imageSrc="/img/blue.png"
                    captionText="Challenge"
                    containerWidth="300px"
                    containerHeight="300px"
                    imageWidth="300px"
                    imageHeight="300px"
                    scaleOnHover={1.1}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-text">
                          Technical & Performance Constraints Across Applications
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
                            This was my first introduction to Adobe After Effects. The primary goal here was to explore and experiment with various effects that suited the narrative I had in mind for the commercial. Some of the sub-tasks needed to achieve this was: <br/><br/>

                            • Create a preliminary storyboard  <br/>
                            • Incorporate a 3D model <br/>
                            • Be consistent with branding throughout <br/>
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Narrative</h2>
                        <p>
                            Since this was my first introduction to After Effects, I went into the project with an open mind and a lot of curiosity. For a deliverable for a separate course, we were tasked with creating a product and using Adobe Dimension to bring our branding to life. I had created Fizzi, a sparkling water company. I knew immediately when this project was introduced, I wanted to somehow blend the 2 projects into one. First however, I needed to start with a storyboard.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Background &amp; Storyboard</h2>
                        <p>
                            The sample flavours were Yuzu Lemon, and Cara Cara Orange. From this, I envisioned the scenery to be set in summer with a refreshing air to it. Ocean, Sun, Sand... check. Once I had a general idea, I sought to do some self-directed education on what was possible using After Effects, and I was amazed. I found different techniques through YouTube, as well as Instagram and LinkedIn from some accounts I was already familiar with. The half-baked idea I had in the beginning was complete from this research, so I then began putting it onto paper. Using Adobe Fresco, I created a 3-block board of what the scenes I wanted. By using a storyboard, it is a lot easier going into production to know where resources need to be spent for time management purposes. Having done other projects without, I see their necessity.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Asset Aquisition</h2>
                        <p>
                            With the scene set in summer, I went to Adobe Stock to find appropriate videos for the vibe I had set in the storyboard. I found one video with the right tone and decided to try my hand at animating water transitions and clips.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Animation and Effects <em>Scene 1</em></h2>
                        <p>
                            I used a wide range of effects to create this vision. The first scene was comprised of 2 layered compositions. Using the Vegas effect on the typography to create the filling in outline, and turbulent displace to have the effect of water filling in the background. I added some CC bubbles as a flair.                              
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Animation and Effects <em>Scene 2</em></h2>
                        <p>
                            I used the 3D model from the other project to smoothly take out the text from the first scene by moving over top of it from the bottom. Immediately after, the visual of a water droplet splashing into the scene transitions into the video for scene 2. I achieved the look and feel of the water using roughen edges, gradient ramp as well as the stopwatch on the path tool. Once I got this down, I duplicated it a couple times over and played with the colors and edges. The viewer is now met with a soft sandy beach. Another 3D object transitions into the scene on the left and has the text appear as it swings around to the right of the screen. Masking was my friend here to get this effect. I have the 3D object swing back to the left, revealing new text suing the same method.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Animation and Effects <em>Scene 3</em></h2>
                        <p>
                            With turbulent displace being comfortable at this point, I used it again to create the visual of water passing over the screen to transition to the final scene. The color of the last wave matches the background, and slowly the royal blue surface turns into the sun glistening over the water. The shading and ripple used fractal noise, levels, and shift channel effects. It should be noted the fractal type was set to strings and noise as spline. The catch phrase bounces onto the screen once the effect was on full force.
                        </p>
                    </div>
            </section>
            </div>
        </div>
    </Layout>
);}
