import { motion } from 'framer-motion';
import clsx from 'clsx';
import styles from './Profile.module.css';
import * as variants from './Profile.variants';
import { profileContent } from './Profile.content';

export default function Profile() {
  const name = profileContent.name.split('');

  return (
    <section className={styles.profile}>
      <div className={clsx(styles.glow, styles.glow1)} />
      <div className={clsx(styles.glow, styles.glow2)} />

      <div className={styles.heroContent}>
        <motion.div
          variants={variants.container}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={variants.item} className={styles.greeting}>
            {profileContent.greeting}
          </motion.p>

          <motion.h1 variants={variants.container} className={styles.name}>
            {name.map((char, i) => (
              <motion.span
                key={i}
                variants={variants.letter}
                className={styles.letter}
                style={{ marginRight: char === ' ' ? '0.25em' : 0 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2 variants={variants.item} className={styles.subtitle}>
            {profileContent.title}
          </motion.h2>

          <motion.p variants={variants.item} className={styles.description}>
            {profileContent.description}
          </motion.p>

          <motion.div variants={variants.item} className={styles.cta}>
            <a
              href="#projects"
              className={clsx(styles.btn, styles.btnPrimary)}
              aria-label={profileContent.ctaPrimaryAria}
            >
              {profileContent.ctaPrimary}
              <span className={styles.arrow}>→</span>
            </a>
            <a
              href="#contact"
              className={clsx(styles.btn, styles.btnSecondary)}
              aria-label={profileContent.ctaSecondaryAria}
            >
              {profileContent.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}