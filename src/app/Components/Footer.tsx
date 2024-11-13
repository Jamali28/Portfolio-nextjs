
import styles from '../styles/footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>© 2023 My Portfolio. All rights reserved.</p>
    <div>
      <a href="https://linkedin.com">LinkedIn</a>
      <a href="https://github.com">GitHub</a>
    </div>
  </footer>
);

export default Footer;
