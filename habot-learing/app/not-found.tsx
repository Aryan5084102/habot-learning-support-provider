import Link from 'next/link';
import styles from './styles/NotFound.module.scss'

export default function NotFound() {
  return (
    <main className={styles.container}>
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className={styles.homeButton}>
        Return to Provider Directory
      </Link>
    </main>
  );
}