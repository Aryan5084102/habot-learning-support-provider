import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '../../styles/ProviderDetail.module.scss';
import { getProviderById } from '@/app/services/api';

export default async function ProviderDetail({ params }: { params: { id: string } }) {
  // Fetch specific provider data
  const provider = await getProviderById(params?.id);

  // Error handling: if provider not found, trigger Next.js 404 page
  if (!provider) {
    notFound(); 
  }

  return (
    <main className={styles.container}>
      <Link href="/" className={styles.backButton}>&larr; Back to List</Link>
      
      <div className={styles.card}>
        <div className={styles.header}>
          <h1>{provider.name}</h1>
          <span className={styles.rating}>★ {provider.rating}</span>
        </div>
        
        <div className={styles.tags}>
          <span className={styles.tag}>{provider.specialization}</span>
          <span className={styles.tag}>📍 {provider.location}</span>
        </div>

        <div className={styles.content}>
          <h2>About</h2>
          <p>{provider.longDescription}</p>
        </div>

        <div className={styles.contact}>
          <h2>Contact Information</h2>
          <p>📧 <a href={`mailto:${provider.contactEmail}`}>{provider.contactEmail}</a></p>
          <p>📞 <a href={`tel:${provider.phoneNumber}`}>{provider.phoneNumber}</a></p>
        </div>
      </div>
    </main>
  );
}