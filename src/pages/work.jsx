import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Work.module.css';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <Layout>
        <SEO
          title="Featured Work | Isabel Vincent"
          description="Explore a curated collection of projects by Isabel Vincent, showcasing expertise in UI/UX, motion graphics, and front-end development."
          keywords="featured work, portfolio, design projects, UI/UX, motion graphics, front-end"
          image="/img/carousel2.jpg" 
          url="https://isabelruthvincent.ca/work"
        />
    <section className={styles.projectSection}>
      <div className={styles.workTitle}>
        <h1 className={styles.workHeading}>Featured Work</h1>
      </div>
      <div className={styles.projectContainer}>
        <Link className={styles.projectBtn} href='/periodredesign'>
          <div className={styles.projectCard} ref={addCardRef}>
            <img
              src="/img/periodredesignhome.png"
              alt="Period App Redesign"
              className={styles.cardImage}
            />
            <div className={styles.skillsContainer}>
              <div className={styles.softSkills}>
                <h3>Soft Skills</h3>
                <ul>
                  <li>Inclusivity</li>
                  <li>Adaptability</li>
                  <li>Communication</li>
                  <li>Problem-Solving</li>
                </ul>
              </div>
              <div className={styles.hardSkills}>
                <h3>Hard Skills</h3>
                <ul>
                  <li>Wireframing & Prototyping</li>
                  <li>User Research</li>
                  <li>Persona Development</li>
                  <li>Interaction Design</li>
                  <li>Competitor Analysis</li>
                </ul>
              </div>
            </div>
            <div className={styles.cardDescription}>
              <h2>Period App Redesign</h2>
              <p>
                This redesign of the Flo period tracker reimagines the app for greater accessibility and inclusivity. The updated interface declutters and simplifies navigation, resulting in a user-centered tool for a broader range of users.
              </p>
            </div>
          </div>
        </Link>

        <Link className={styles.projectBtn} href='/shanghaifollies'>
          <div className={styles.projectCard} ref={addCardRef}>
            <img
              src="/img/shanghaifollieshome.png"
              alt="Shanghai Follies Pitch"
              className={styles.cardImage}
            />
            <div className={styles.skillsContainer}>
              <div className={styles.softSkills}>
                <h3>Soft Skills</h3>
                <ul>
                  <li>Creativity & Storytelling</li>
                  <li>Adaptability</li>
                  <li>Collaboration</li>
                  <li>Attention to Detail</li>
                  <li>Time Management</li>
                </ul>
              </div>
              <div className={styles.hardSkills}>
                <h3>Hard Skills</h3>
                <ul>
                  <li>Responsive Web Design</li>
                  <li>Interactive Components</li>
                  <li>Visual Editing</li>
                  <li>Front-End Development</li>
                  <li>UI Prototyping</li>
                </ul>
              </div>
            </div>
            <div className={styles.cardDescription}>
              <h2>Shanghai Follies Pitch</h2>
              <p>
                An interactive one-page pitch site for the Shanghai Follies film, this project combines design, storytelling, and front-end development to create a responsive site with dynamic character bios and engaging visuals.
              </p>
            </div>
          </div>
        </Link>

        <Link className={styles.projectBtn} href='/fizzi'>
          <div className={styles.projectCard} ref={addCardRef}>
            <img
              src="/img/fizzihome.png"
              alt="Fizzi Sparkling Water Commercial"
              className={styles.cardImage}
            />
            <div className={styles.skillsContainer}>
              <div className={styles.softSkills}>
                <h3>Soft Skills</h3>
                <ul>
                  <li>Curiosity & Experimentation</li>
                  <li>Creativity</li>
                  <li>Open-Mindedness</li>
                  <li>Adaptability</li>
                  <li>Collaboration</li>
                </ul>
              </div>
              <div className={styles.hardSkills}>
                <h3>Hard Skills</h3>
                <ul>
                  <li>Motion Graphics & Animation</li>
                  <li>3D Integration</li>
                  <li>Storyboarding & Visual Planning</li>
                </ul>
              </div>
            </div>
            <div className={styles.cardDescription}>
              <h2>Fizzi Sparkling Water Commercial</h2>
              <p>
                A motion commercial concept for a sparkling water brand, this project uses a blend of layered animations and 3D assets to deliver a refreshing and dynamic visual experience.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  </Layout>
);
}