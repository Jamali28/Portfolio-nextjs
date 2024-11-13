
// pages/index.js
import Head from 'next/head';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Project';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Conatct';
import styles from './styles/page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Personal portfolio website" />
      </Head>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
