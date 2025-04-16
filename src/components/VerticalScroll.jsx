import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import styles from '../styles/Home.module.css';
import TypewriterSkills from '../components/TypewriterSkills';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function VerticalScroll() {
  const app = useRef();
  const scrollTween = useRef();
  const [ctx] = useState(gsap.context(() => {}, app));

  const goToSection = (i) => {
    ctx.data.forEach((e) => {
      if (e.vars && e.vars.id === "scrollTween") {
        e.kill();
      }
    });
    ctx.add(() => {
      scrollTween.current = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        id: "scrollTween",
        onComplete: () => (scrollTween.current = null),
        overwrite: true,
      });
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      const tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
          pin: true,
          pinSpacing: false,
          end: "+=200%",
          onToggle: (self) =>
            self.isActive && !scrollTween.current && goToSection(i),
        });
      });
      ScrollTrigger.create({
        snap: {
            snapTo: (progress, self) => {
              let panelStarts = tops.map(st => st.start), 
                  snapScroll = gsap.utils.snap(panelStarts, self.scroll()); 
              return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); 
            },
            duration: 0.5
          }
        });
    }, app);
    return () => ctx.revert();
  }, []);

  return (
        <section className="vertical-sections">
            <div className="panel about-panel" id="panel">
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
                            I'm Izzy, a multidisciplinary designer who values clarity, creativity, and connection. I approach each project with intention and adaptability, always focused on creating work that feels human.
                        </p>
                        <div className={styles.aboutSkills}>
                            <strong>Skills:</strong> <TypewriterSkills />
                        </div>
                        <a href='/about' className={styles.viewMoreBtn} style={{width: '90%'}}>
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
                            <a className={styles.emailBtn}>
                                <h3 style={{fontWeight: 500}}>izzyvincentdesign@gmail.com</h3>
                            </a>
                            <a href="https://www.instagram.com/izzy.vincentt/?hl=en" target="_blank" rel="noreferrer">
                                <FiInstagram className={styles.contactIcon}/>
                            </a>
                            <a href="https://www.linkedin.com/in/isabel-vincent-374a8642" target="_blank" rel="noreferrer">
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
  );
}

export default VerticalScroll;