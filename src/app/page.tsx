import style from "../styles/page.module.css";
import Image from "next/image";
export default function Home() {
  return (
     
        <div className="resume-container">

      <div className="left-section">
        <Image src="/img.png" alt="profile" width={100} height={100} className="profile-picture" />

       

        <section id="objective">
          <h3 style={{ color: 'white' }}> Career Objective </h3>
          <p style={{ textAlign: 'justify', hyphens: 'auto' }}>To gain comprehensive knowledge and hands-on experience in Generative AI, enabling the development of innovative AI-driven solutions. As a newly enrolled Generative AI Certified Engineer, I aim to master the design, training, and deployment of generative models, applying advanced AI techniques to real-world problems. My goal is to contribute to cutting-edge AI projects and explore the potential of AI to transform industries and drive future technological advancements.</p>
        </section>

        <section id="certification"></section>
        <h3 style={{ color: 'white' }}>Certifications</h3>
        <p style={{ textAlign: 'justify', hyphens: 'auto' }}> <b>Aisha Bawany Academy</b> from , Karachi from May to Sep.2023</p>
        <p style={{ textAlign: 'justify', hyphens: 'auto' }}> <b> Artificial Intelligence, Web 3.0 & Metaverse</b> from Governor House, Karachi (ongoing)</p>

      
    </div>
    <div className="right-section">
    <div style={{ textDecoration: 'underline' }}>
        <h1 >My Personal portfolio</h1>
   </div>
        <section id="personal-info">
          <h3>Personal Information</h3>
          <p><b>Name: </b> Muheeb Ali Jamali</p>
          <p><b>Phone: </b> 0092xxxxxxx</p>
          <p><b>Email: </b> <a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
          <p><b>LinkedIn: </b> <a href="https://au.linkedin.com/in/" target="_blank">https://www.linkedin.com/</a></p>

        </section>

        <section id="Education">
          <h3>Education</h3>
          <p><b>Masters: </b> In ABC from XYZ University Karachi (2007-2009)</p>
          <p><b>Bachelors: </b> In ABC from XYZ University Karachi(2002-2007)</p>
          <p><b>Intermediate: </b> In Pre Engineering from Intermediate Karachi Board (2000-2002)</p>
          <p><b>Matriculaton: </b> In Science from Matric Karachi Board (1998-2000)</p>
        </section>

        <section id="skills">
          <h3>Skills</h3>
          <ul>
            <li> HTML</li>
            <li> CSS</li>
            <li> TypeScript</li>
            <li>Next.js</li>
            <li>Tailwindcss</li>
            <li>Web surfing</li>
          </ul>

        </section>

        <section id="Work Experience">
          <h3>Work Experience</h3>
          <p><b>Company: </b> ABC Organization</p>
          <p><b>Role: </b> Started working as Assistant Manager and now working as Senior Manager (2004-2024)</p>
          <p><b>Previous Experience: </b> XYZ Organization (2001-2002)</p>
        </section>

      </div>

        </div>
      
  );
}
