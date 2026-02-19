'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import { Provider } from '../types';
import styles from '../styles/ProviderCard.module.scss';

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/providers/${provider.id}`} className={styles.card} scroll={false}>
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <h3>{provider.name}</h3>
            <span className={styles.rating}>
              <Star size={14} fill="currentColor" /> {provider.rating}
            </span>
          </div>
          
          <p className={styles.specialization}>{provider.specialization}</p>
          
          <div className={styles.locationRow}>
            <MapPin size={14} />
            <span>{provider.location}</span>
          </div>
          
          <p className={styles.description}>{provider.shortDescription}</p>

        </div>
      </Link>
    </motion.div>
  );
}