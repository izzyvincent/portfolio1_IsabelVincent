import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Isabel Vincent. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
      </div>
    </footer>
  );
}