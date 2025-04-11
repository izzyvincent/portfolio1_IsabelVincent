import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRefs = useRef([]);
  textRefs.current = [];

  const addTextRef = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const videoRef = useRef(null);

  useEffect(() => {
    textRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 20%',  
            scrub: true,
            // markers: true, 
          },
        }
      );
    });

    gsap.to(videoRef.current, {
      yPercent: 30,  
      ease: 'none',
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <section className={styles.section}>
          <img
            src="/img/LinkedinPhoto.png"
            alt="Isabel Vincent"
            className={styles.photo}
          />
          <div className={styles.textBlock}>
            <h2 ref={addTextRef} className={styles.title}>Oh! Didn't see ya there!</h2>
            <p ref={addTextRef} className={styles.text}>
            I'm Izzy, a New Media design student based in Vancouver at BCIT. A little bit about me, I've been an athlete my whole life, starting with competitive cheerleading at age 8 and continuing until I turned 20. Right when I hung up my cheer shoes, I dove into coaching, and I've been passionate about it ever since. Today, I coach two elite teams that travel, fuelling my love for both sports and adventure. <br/><br/>

            When I'm not coaching, you'll probably find me strumming my guitar or planning my next trip. I've already visited 23 countries and am always eager to explore more. I even dream of eventually settling in Europe, close to where my family is. 
            </p>
          </div>
        </section>

        <section className={styles.videoSection}>
          <video
            ref={videoRef}
            src="/mp4/placeholder-coaching.mov"
            autoPlay
            muted
            loop
            playsInline
            className={styles.parallaxVideo}
          />
        </section>

        <section className={styles.contentSection}>
          <h2 ref={addTextRef} className={styles.title}>Second Blurb</h2>
          <p ref={addTextRef} className={styles.text}>
          Alongside my athletic pursuits, I'm also passionate about design. I'm currently enrolled in the BCIT New Medium Web Development program, where I'm learning everything from coding to the creative side of web design. Over the past term, I've discovered a real love for motion graphics, UI/UX, and graphic design through various projects, and I know this is where my true passion lies. <br/><br/>

          Overall, I blend my love for sports, travel, and design into everything I do, always striving to bring creativity and enthusiasm to both the field and the digital space.
          </p>

          <h2 ref={addTextRef} className={styles.title}>Why Design?</h2>
          <p ref={addTextRef} className={styles.text}>
          I've always been really drawn to design, especially in the digital space. Ever since I got my own laptop at around 14 or 15, I was tinkering with website builders, and different design programs just for fun. I remember in grade 12, after handing in a geography assignment, my teacher didn't focus on the content at all. Instead, they pointed out how impressive the website looked and suggested I consider a career in design. That moment really stuck with me and sparked an early passion for creating visually engaging work. <br/><br/>

          Even while pursuing a degree in anthropology at UBC, a field I remain passionate about, design was never far from my mind. It was the creative outlet I enjoyed and one I knew I could eventually turn into a career. This blend of early inspiration and continuous creative exploration has led me to embrace design as a central part of my professional journey in web development, where I now fuse technology with the art of visual storytelling every day.
          </p>
        </section>
      </div>
    </Layout>
  );
}