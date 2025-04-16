import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import ScrollingText from '../components/ScrollingText';
import styles from '../styles/About.module.css';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const carouselImages = [
    "/img/carousel1.jpg",
    "/img/carousel2.jpg",
    "/img/carousel3.jpg",
    "/img/carousel4.jpg",
    "/img/carousel5.jpg",
    "/img/carousel6.jpg",
    "/img/carousel7.jpg",
    "/img/carousel8.jpg",
    "/img/carousel9.jpg",
    "/img/carousel10.jpg",
    "/img/carousel11.jpg",
    "/img/carousel12.png",
    "/img/carousel13.jpg",
  ];
  
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

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
      <SEO
        title="About Isabel Vincent | Designer & Storyteller"
        description="Learn about Isabel Vincent's creative journey, her background in art, design and sports, as well as her passion for inclusive, user-focused design."
        keywords="about, biography, designer, art, cheerleading, cheer, inclusive design, Isabel Vincent"
        image="/img/carousel1.jpg" 
        url="https://isabelruthvincent.ca/about"
      />
      <div className={styles.aboutContainer}>
        <section className={styles.section}>
          <div className={styles.carouselWrapper}>
            <img
              src={carouselImages[carouselIndex]}
              alt="Izzy's rotating images"
              className={styles.carouselImage}
            />
          </div>
          <div className={styles.textBlock}>
            <h2 ref={addTextRef} className={styles.title}>A Little Bit About Me</h2>
            <p ref={addTextRef} className={styles.text}>
              Yes, my name is Isabel, but I'm only called that when something is seriously wrong, so just Izzy is great. Art and design have been a part of my life for as long as I can remember. My mom was a producer at an animation studio and brought me to work almost every day. Some of the first movies and shows I watched were from Fleischer Studios and early Disney. You could say it runs in the family, as my uncle is also an animator specializing in the Fleischer style. <br/><br/>
            </p>
          </div>
        </section>
        <section className={styles.secondSection}>
          <p ref={addTextRef} className={styles.secondParagraph}>          
            While my love for animation never faded, I found new passions along the way. With half my family living in Europe, travel became a source of comfort and connection. Twenty-four countries later, and I'm still not done. Being immersed in different cultures taught me the importance of inclusivity and the value of building meaningful relationships with people from all walks of life. It gave me a roll with the punches mentality that has helped me adapt quickly in unfamiliar situations, whether abroad, in class, or on a team. That global curiosity even inspired me to study Anthropology at UBC. During the throes of exam season and the semi-lockdown of 2021, I picked up the ukulele and quickly transitioned to guitar. I used to think my sister had taken all the musical talent since she is a successful singer and composer, but it turns out I got just enough to enjoy it as a hobby. I probably avoided music earlier because I kept interrupting my piano lessons to play with fitness weights in the corner of the studio. Ironically, that moment ended up being one of the sparks that led me to cheerleading.
          </p>
        </section>
        <section className={styles.videoSection}>
          <video
            ref={videoRef}
            src='/mp4/about-video.mp4'
            autoPlay
            muted
            loop
            playsInline
            className={styles.parallaxVideo}
          />
        </section>

        <section className={styles.contentSection}>
          <h2 ref={addTextRef} className={styles.title}>Cheerleading</h2>
          <p ref={addTextRef} className={styles.text}>
          I started cheer at age 9 and never looked back. I've had the privilege of representing Canada and my club at the World Championships four times. After 13 years as an athlete, I transitioned to coaching and fell in love with the sport all over again. Leading the next generation of athletes has been unimaginably rewarding, and all I hope is to give them the guidance and compassion that shaped me when I was their age.
          </p>

          <h2 ref={addTextRef} className={styles.title}>Back to Design Please?</h2>
          <p ref={addTextRef} className={styles.text}>
          So, a bit turned into a lot, huh? What does any of that have to do with design? Honestly, everything. Those experiences, studies, and travels are exactly what led me to take design seriously. <br/><br/>

          Throughout school, I was always the PowerPoint person. It sounds silly, but when you're more passionate about making slides than the actual material, it makes you stop and think. Am I even in the right field? I created a website for a geography assignment and got endless praise for the design and layout, but barely a word about the content. I helped friends with websites and social media for their businesses but never thought of it as a career. <br/><br/>
          </p>
        </section>
          <ScrollingText
            texts={['Inclusivity', 'Connection', 'Curiosity']} 
            velocity= '100'
            className="scrollText"
          />
        <section className={styles.contentSection}>
          <p ref={addTextRef} className={styles.lastParagraph}>
          Still, my curiosity pushed me forward. It's never let me down. Not when I spent three months solo traveling. Not when I coached over 40 athletes. Not when I taught myself music. So I gave design a shot. With an eye for detail, a people-first mindset, and core values of inclusivity, connection, and curiosity shaped through those experiences, and formal training from BCIT's New Media and Web Development program, I'm confident I'll hit the ground running as I break into the industry.
          </p>
        </section>
      </div>
    </Layout>
  );
}