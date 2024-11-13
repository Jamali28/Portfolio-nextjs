
import styles from '../styles/about.module.css'
import Image from 'next/image';
const About = () => (
  <section id="about" className={styles.about}>
   <div className="">
    <Image src="/public/img.jpg" alt="logo" width={100} height={50}></Image>
   </div>

   <div className="logo">
    <Image src="/Images/logo.jpg" alt="logo" width={250} height={250}></Image>
   </div>
    <h2>About Me</h2>
    <p>My name is  Muheeb Ali Jamali an 17 y/o web developer. </p>
    <p>Im currently learning Agentic AI (Artificial Inteleligence) at Governer Initaitive Sindh from an experience 
       developer Sir Ali Jawad.</p>
    <p>Im currently an Intermediate developer but after some more training and hardwork,</p>
    <p>I can be a great developer.</p>
    <p>Im a passionate developer specializing in modern web applications...</p>
  </section>
);

export default About;
