import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';
import { useEffect } from 'react';
import { initSmoothScroll } from '../library/smoothscroll'; // maybe change, for if I want smooth scroll

export default function Layout({ children }) {
  useEffect(() => {
    // not totally sure this is right, check later
    const lenis = initSmoothScroll && initSmoothScroll();
    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}
