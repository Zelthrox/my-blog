import styles from './FloatingSocials.module.css';
import { socialLinksContent } from './FloatingSocials.content';

export default function FloatingSocials() {
  return (
    <div className={styles.floatingSocials}>
      {/* LinkedIn */}
      <a
        href={socialLinksContent.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
        aria-label="Visit my LinkedIn profile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      {/* GitHub */}
      <a
        href={socialLinksContent.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
        aria-label="Visit my GitHub profile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.2 0-1.6-.7-3-1.8-4.1a.8.8 0 0 0-.7-.3c-.4 0-.7.1-1 .3C12.3 2.8 9.7 2 7.5 3.1c-.3.2-.6.5-.7.9-.1.4-.1.8-.1 1.2 0 5.6 3.5 6.8 6.8 7.2-.7.7-1.2 1.8-1.2 3V22" />
          <path d="M9 19c-1.5 1-3 1-4 0" />
        </svg>
      </a>
    </div>
  );
}