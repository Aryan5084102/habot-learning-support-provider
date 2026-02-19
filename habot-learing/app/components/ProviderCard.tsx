import Link from 'next/link';
import styles from '../styles/ProviderCard.module.scss';
import { Provider } from '../types';

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Link href={`/providers/${provider.id}`} className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{provider.name}</h3>
        <span className={styles.rating}>★ {provider.rating}</span>
      </div>
      <p className={styles.specialization}>{provider.specialization}</p>
      <p className={styles.location}>📍 {provider.location}</p>
      <p className={styles.description}>{provider.shortDescription}</p>
    </Link>
  );
}