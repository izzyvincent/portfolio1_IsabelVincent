import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Isabel Vincent. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="https://www.instagram.com/izzy.vincentt/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/isabel-vincent-374a8642" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}