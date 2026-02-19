import Link from 'next/link';
import Image from 'next/image';
import { Provider } from '../types';
import styles from '../styles/ProviderCard.module.scss';
import { Mail, Phone, MapPin, Star } from 'lucide-react';

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Link href={`/providers/${provider.id}`} className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3>{provider.name}</h3>
          <span className={styles.rating}>
            <Star size={16} fill="currentColor" /> 
            <span>{provider.rating}</span>
          </span>
        </div>
        
        <p className={styles.specialization}>{provider.specialization}</p>
        <div className={styles.locationRow}>
          <MapPin size={14} className={styles.icon} />
          <span>{provider.location}</span>
        </div>
        
        <p className={styles.description}>{provider.shortDescription}</p>

        {/* New Contact Section */}
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <Mail size={14} className={styles.icon} />
            <span className={styles.text}>{provider.contactEmail}</span>
          </div>
          <div className={styles.contactItem}>
            <Phone size={14} className={styles.icon} />
            <span className={styles.text}>{provider.phoneNumber}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}