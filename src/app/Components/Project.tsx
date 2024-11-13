
 import styles from '../styles/project.module.css';

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <h2>Projects</h2>
    <div className={styles.projectList}>
      <div className={styles.projectItem}>
        <h3>Project 1 : Mini-hackhathon (clone website) </h3>
      </div>
      
      <div className={styles.projectItem}>
        <h3>Project 2 : static resume Builder</h3>
      </div>

      <div className={styles.projectItem}>
        <h3>Project 3 : responsive website and Resume Buider </h3>
      </div>

      <div className={styles.projectItem}>
        <h3>Project 4 : simple website of Html,Css and javascript(Typescript) </h3>
      </div>

    </div>
  </section>
);

export default Projects;
