import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiInstagram, FiLinkedin } from "react-icons/fi";
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import HeroImageSequence from '../components/HeroImageSequence';
import TypewriterTitle from '../components/TyperwriterTitle';
import TypewriterSkills from '../components/TypewriterSkills';

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
                src='/img/placeholder-image1.jpeg'
                alt='Project One' // edit later
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.projectTitle}>Project 1</h2>
              <span className={styles.projectType}>UI/UX</span>
              <p className={styles.projectOverview}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas a voluptate, qui nemo iure eveniet eos! Alias eveniet, magnam ipsum praesentium, cumque exercitationem vero quaerat labore omnis quas doloremque.
              </p>
              <a href='#project1' className={styles.viewMoreBtn}>View More</a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.cardImageWrapper}>
              <img 
                src='/img/placeholder-image2.jpeg'
                alt='Project Two' // edit later
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.projectTitle}>Project 2</h2>
              <span className={styles.projectType}>UI/UX</span>
              <p className={styles.projectOverview}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas a voluptate, qui nemo iure eveniet eos! Alias eveniet, magnam ipsum praesentium, cumque exercitationem vero quaerat labore omnis quas doloremque.
              </p>
              <a href='#project2' className={styles.viewMoreBtn}>View More</a>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.cardImageWrapper}>
              <img 
                src='/img/placeholder-image3.jpeg'
                alt='Project Three' // edit later
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.projectTitle}>Project 3</h2>
              <span className={styles.projectType}>UI/UX</span>
              <p className={styles.projectOverview}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas a voluptate, qui nemo iure eveniet eos! Alias eveniet, magnam ipsum praesentium, cumque exercitationem vero quaerat labore omnis quas doloremque.
              </p>
              <a href='#project3' className={styles.viewMoreBtn}>View More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="vertical-sections">
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
                Hi there! I'm Isabel Vincent, a designer who loves creating 
                user-friendly experiences, capturing moments with photography,
                and leading teams with effective project management.
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
                <h3>izzyvincentdesign@gmail.com</h3>
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
      </section>
    </Layout>
  );
}