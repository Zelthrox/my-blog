import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';
import styles from './TechStack.module.css';
import * as variants from './TechStack.variants';
import { techStackContent } from './TechStack.content';

export default function TechStack() {
  return (
    <section className={styles.techStack} id="tech-stack">
      {/* Experience badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={styles.experience}
      >
        <span>9+</span> Years Development Experience
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="title"
      >
        {techStackContent.title}
      </motion.h2>

      {/* Horizontal columns */}
      <motion.div
        variants={variants.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={styles.grid}
      >
        {techStackContent.columns.map((column, colIndex) => (
          <motion.div
            key={colIndex}
            variants={variants.item}
            className={styles.column}
          >
            <h3 className={styles.categoryTitle}>{column.category}</h3>
            {column.items.map((tech, i) => {
              const Icon = (Lucide as any)[tech.icon] || Lucide.Code;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className={styles.techCard}
                >
                  <div className={styles.techIcon}>
                    <Icon size={24} strokeWidth={2.25} />
                  </div>
                  <span>{tech.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}