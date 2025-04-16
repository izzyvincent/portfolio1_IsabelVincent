import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FiInstagram, FiLinkedin } from "react-icons/fi";
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import HeroImageSequence from '../components/HeroImageSequence';
import TypewriterTitle from '../components/TyperwriterTitle';
// import TypewriterSkills from '../components/TypewriterSkills';
import VerticalScroll from '../components/VerticalScroll';
import SEO from '../components/SEO';

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
      <SEO
        title="Isabel Vincent Portfolio | Multidisciplinary Designer"
        description="Welcome to the portfolio of Isabel Vincent, a multidisciplinary designer with expertise in UI/UX, Motion Graphics, and Front-End Development. Explore featured projects and learn more about her creative journey."
        keywords="portfolio, design, UI/UX, motion graphics, front-end, Isabel Vincent"
        image="/img/LinkedinPhoto.png"
        url="https://isabelruthvincent.ca"
      />
      <section className={styles.videoSection}>
        <HeroImageSequence />
      </section>
      
      <section className={styles.contentSection}>
        <h4 className={styles.subtitle}>Nice to meet ya! I'm</h4>
        <h1 className={styles.title}>Isabel Vincent</h1>
        <TypewriterTitle />
      </section>

      <section className={styles.workSection}>
        <h2 className={styles.workHeading}>Work</h2>
        <div className={styles.workContainer} ref={workContainerRef}>
          <div className={styles.projectCard}>
            <div className={styles.cardImageWrapper}>
              <img 
                src='/img/periodredesignhome.png'
                alt='Project One' // edit later
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.projectTitle}>Period App Redesign</h2>
              <span className={styles.projectType}>UI/UX Design</span>
              <p className={styles.projectOverview}>
                This redesign of the Flo period tracker reimagines the app for greater accessibility and inclusivity, with a focus on users who are visually impaired or do not identify as women. Built in Figma with a detailed user persona and empathy mapping process, the new interface simplifies navigation, and reduces clutter. The result is a more thoughtful, user-centered tool that respects a broader spectrum of menstruating individuals.
              </p>
              <a href='/periodredesign' className={styles.viewMoreBtn}>View Details</a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.cardImageWrapper}>
              <img 
                src='/img/shanghaifollieshome.png'
                alt='Project Two' // edit later
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.projectTitle}>Shanghai Follies Pitch</h2>
              <span className={styles.projectType}>UI/UX Design | Front-End Development |  Motion Graphics</span>
              <p className={styles.projectOverview}>
                An interactive one-page pitch site for the Shanghai Follies film, combining design, storytelling, and front-end development. Built from scratch with HTML, CSS, and JavaScript, the site features a hero video, responsive layout, dynamic character bios, and PDF pitch downloads. This project showcases a strong understanding of both design systems and technical execution across devices.
              </p>
              <a href='/shanghaifollies' className={styles.viewMoreBtn}>View Details</a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.cardImageWrapper}>
              <img 
                src='/img/fizzihome.png'
                alt='Project Three' // edit later
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.projectTitle}>Fizzi Sparkling Water Commercial</h2>
              <span className={styles.projectType}>Motion Graphics, Graphic Design</span>
              <p className={styles.projectOverview}>
                A motion commercial concept for a fictional sparkling water brand, created using Adobe After Effects, Dimension, and Audition. The animation blends layered compositions, 3D assets, and fluid transitions to bring a vibrant summer mood to life. With a focus on branding consistency and creative experimentation, this was a deep dive into visual storytelling through motion.
              </p>
              <a href='/fizzi' className={styles.viewMoreBtn}>View Details</a>
            </div>
          </div>
        </div>
      </section>

      <VerticalScroll />
      {/* <section className="vertical-sections">
        <div className="panel about-panel">
          <div className={styles.aboutContainer}>
            <div className={styles.aboutImageWrapper}>
              <img 
                src="/img/LinkedinPhoto.png"
                alt="Isabel Vincent"
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>Who am I?</h2>
              <p className={styles.aboutParagraph}>
              I’m Izzy, a multidisciplinary designer who values clarity, creativity, and connection. I approach each project with intention and adaptability, always focused on creating work that feels human.
              </p>
              <div className={styles.aboutSkills}>
                <strong>Skills:</strong> <TypewriterSkills />
              </div>
              <a href='#about.jsx' className={styles.viewMoreBtn} style={{width: '90%'}}>
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="panel contact-panel">
          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <h2 className={styles.contactTitle}>Want to work together?</h2>
              <p className={styles.contactText}>
                Shoot me a message if you think we'd make a purrfect team!
              </p>

              <div className={styles.contactIcons}>
                <a href='#' className={styles.emailBtn}>
                  <h3 style={{fontWeight: 500}}>izzyvincentdesign@gmail.com</h3>
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
                  <FiInstagram className={styles.contactIcon}/>
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                  <FiLinkedin className={styles.contactIcon}/>
                </a>
              </div>
            </div>

            <div className={styles.contactFormWrapper}>
              <form
                target='_blank'
                action="https://formsubmit.co/izzyvincentdesign@gmail.com"
                method="POST"
                className={styles.contactForm}
              >
                <input type="hidden" name="_subject" value="New form submission!" />

                <input type="text" id="name" name="name" placeholder='Your name...' required/>

                <input type="email" id="email" name="email" placeholder='Your email address...' required/>

                <input type="text" name="_honey" style={{ display: 'none' }}></input>

                <textarea id="message" name="message" rows="5" placeholder='Your message...' required style={{ fontFamily: 'DM sans'}}></textarea>

                <button type="submit" className={styles.submitBtn}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
}