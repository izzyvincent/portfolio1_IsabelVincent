import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import HeroImageSequence from '../components/HeroImageSequence';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const workContainerRef = useRef(null);

  useEffect(() => {
    const container = workContainerRef.current;
    if (!container) return;
    
    const totalWidth = container.scrollWidth;

    gsap.to(container, {
      x: -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container.parentNode, 
        start: "top top",  
        pin: true,
        scrub: true,
        end: () => `+=${totalWidth}`,
        // markers: true, 
      }
    });
  }, []);

  useEffect(() => {
    const container = document.querySelector('.vertical-sections');
    if (!container) return;

    const panels = container.querySelectorAll('.panel');

    gsap.to(panels, {
      yPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,    
        scrub: 1,   
        end: '+=5000'
        // markers: true, 
      },
    });
  }, []);
  
  return (
    <Layout>
      <section className={styles.videoSection}>
        <HeroImageSequence />
      </section>
      
      {/* more content below to come */}
      <section className={styles.contentSection}>
        <h4 className={styles.subtitle}>Nice to meet ya! I'm</h4>
        <h1 className={styles.title}>Isabel Vincent</h1>
      </section>

      <section className={styles.workSection}>
        <h2 className={styles.workHeading}>Work</h2>
        <div className={styles.workContainer} ref={workContainerRef}>
          <div className={styles.projectCard}>
            <h3>Project One</h3>
            <p>Description</p>
          </div>
          <div className={styles.projectCard}>
            <h3>Project Two</h3>
            <p>Description </p>
          </div>
          <div className={styles.projectCard}>
            <h3>Project Three</h3>
            <p>Description</p>
          </div>
        </div>
      </section>

      <section className="vertical-sections">
        <div className="panel about-panel">
          <h2>About</h2>
          <p>This is an about section where I share my story and mission.</p>
        </div>
        <div className="panel contact-panel">
          <h2>Contact</h2>
          <p>Get in touch at izzyvincentdesign@gmail.com</p>
        </div>
      </section>
    </Layout>
  );
}