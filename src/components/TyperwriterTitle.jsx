import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from '../styles/Home.module.css';

export default function TypewriterTitle() {
  const elRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "<strong>UI/UX </strong> <span style='font-weight:300;'> Designer</span>",
        "<strong>Graphic </strong> <span style='font-weight:300;'> Designer</span>",
        "<strong>MotionGraphic </strong> <span style='font-weight:300;'> Designer</span>",
      ],
      showCursor: false,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
      smartBackspace: true,
      contentType: 'html',
    };

    const typed = new Typed(elRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={elRef} className={styles.typedContainer}/>;
}
