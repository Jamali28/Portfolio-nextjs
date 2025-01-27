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

      
        <div className="dec">
          <a href="/about">About Me</a>
          <a href="contact">Contact Me</a>

        </div>
      

    </div>
    <div className="right-section">
    <div style={{ textDecoration: 'underline' }}>
        <h1 >My Personal portfolio</h1>
   </div>
        <section id="personal-info">
          <h3>Personal Information</h3>
          <p><b>Name: </b> Muheeb Ali Jamali</p>
          <p><b>Phone: </b> 03232155972</p>
          <p><b>Email: </b> <a href="mailto:muheebalijamali28@gmail.com">muheebalijamali28@gmail.com</a></p>
          <p><b>LinkedIn: </b> <a href="https://www.linkedin.com/in/muheeb-jamali-2752a62b6/" target="_blank">https://www.linkedin.com/in/muheeb-jamali-2752a62b6/</a></p>

        </section>

        <section id="Education">
       
          <p><b>Intermediate: </b> In Pre Medical from Intermediate Karachi Board (2023-2025)</p>
          <p><b>Matriculaton: </b> In Science from Matric Karachi Board (2021-2023)</p>
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
          <p>

          Although I currently have no professional work experience, 
          I am eager to bring my strong foundational knowledge, dedication, and passion for development to the industry.
           I have spent significant time honing my skills through personal projects, online courses,
            and self-driven learning. This has given me a solid understanding of coding, problem-solving, and teamwork.
             I am highly motivated to grow and learn from experienced professionals while contributing fresh ideas and enthusiasm to any team I join.
           My adaptability, commitment, and curiosity make me ready to take on challenges and excel in a professional setting.


          </p>
        </section>

      </div>

        </div>

  );
}
