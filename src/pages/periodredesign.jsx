import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltedCard from '../blocks/TiltedCard';
import Layout from '../components/Layout';
import styles from '../styles/ArtifactPage1.module.css';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function PeriodRedesignArtifact() {
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
            title="Period App Redesign | Isabel Vincent"
            description="A redesign project aimed at improving accessibility and inclusivity in period tracking apps. Explore the process, research, and solutions implemented to create a user-centered experience."
            keywords="period app, redesign, accessibility, inclusive design, UI/UX, Isabel Vincent"
            image="/img/periodredesignbanner.png" 
            url="https://isabelruthvincent.ca/periodredesign"
        />
        <div className={styles.projectPage}>
            <section className={styles.headerSection} ref={addToRefs}>
                <img
                    src="/img/periodredesignbanner.png"
                    alt="Period App Redesign Background"
                    className={styles.headerImage}
                />
                <div className={styles.metadata}>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Project Type</span>
                    <span className={styles.metaValue}>UI/UX</span>
                    </div>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Role</span>
                    <span className={styles.metaValue}>UI/UX Designer</span>
                    </div>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Applications Used</span>
                    <span className={styles.metaValue}>Figma, Miro</span>
                    </div>
                    <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Project Time</span>
                    <span className={styles.metaValue}>25 hours</span>
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
                          Streamline navigation
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
                          Enhance visual clarity
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
                          Iterate with user feedback
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
                        <p className="tilted-card-text">
                          Balance inclusivity with minimalism
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
                        <p className="tilted-card-text">
                          Integrate robust accessibility
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
                        <p className="tilted-card-text">
                          Maintain performance with dynamic animations
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
                        The goal are was to redesign the Flo period app to make the interface for accessible to those with visual impairments, as well as more inclusive to all who menstruate or ovulate. I did this through decluttering the interface, distilled the navigation menu and features, as well customized colour experience.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Narrative</h2>
                        <p>
                            This redesign is aimed to address issues with clutter and complexity in the interface and navigation, inaddition to broadening their audience.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Background</h2>
                        <p>
                            As someone who is gender-fluid, finding a period app that works for me has been a challenge. I used Flo in the past but ended up deleting it soon there after due to its cluttered home page and somewhat confusing navigation. This was my inspiration to take my experiences as a user and use it in my Project for UI/UX Strategy.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Research</h2>
                        <p>
                            First, I came up with objectives, hypotheses, methods, and noted my biases. Using my objectives, I came up with a wide range of questions to ensure my solutions would be inclusive. My methods for user research consisted of google trends, AI, and blogs/reddit. Due to my inherent bias of using the app before and having an unfavourable experience, it was important I was as detailed as possible to keep the research as neutral as possible.<br/> <br/>
                        
                            Using this information, I was able to create Jordan Period, a non-binary person with visual impairments. I fleshed out their profile by detailing their interests, motivation, pain points, etc., and wrote a scenario of when the app would be used by them. Empathy and Journey maps were then used to see why and when the aforementioned pain points would come in to play, and thus be corrected.<br/> <br/>

                            Using a competitive analysis, I was able to conclude where Flo needed to be simplified, and where Flo could stand out against its competitors.
                        </p>
                    </div>
                    <div className={styles.panel}>
                        <h2>Wireframes &amp; Prototyping</h2>
                        <p>
                            With research concluded, I began with lo-fidelity wireframes in Figma to get sense of how the layout and navigation needed to be formatted in order to solve my User Persona's pain points. Once satisfied, I added the colours, assets, and content to create the high-fidelity frames. <br/> <br/>
                            
                            From there, I used the Figma prototyping tools to make the app interactive to give a feel of how the new layout would function as an app.
                        </p>
                    </div>
            </section>
            </div>
        </div>
    </Layout>
);}
