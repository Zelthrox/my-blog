import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import * as variants from './Projects.variants';
import { projectsContent } from './Projects.content';

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="title"
      >
        {projectsContent.title}
      </motion.h2>

      <motion.div
        variants={variants.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={styles.grid}
      >
        {projectsContent.projects.map((project) => (
          <motion.div
            key={project.id}
            variants={variants.card}
            className={styles.card}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>

            <div className={styles.techTags}>
              {project.tech.map((tag, i) => (
                <span key={i} className={styles.techTag}>
                  {tag}
                </span>
              ))}
            </div>

            <a href={project.link} className={styles.btn}>
              View Project →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}