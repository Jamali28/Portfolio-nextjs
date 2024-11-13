
import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => (
  <header className={styles.Navbar}>
    <h1>MJs Portfolio</h1>
    <nav>
      <Link href="#about">About</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#experience">Experience</Link>
      <Link href="#contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
