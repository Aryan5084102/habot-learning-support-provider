'use client';
import { useState, useMemo } from 'react';
import ProviderCard from './ProviderCard';
import styles from '../styles/ProviderList.module.scss'
import SearchBar from './SearchBar';
import { Provider } from '../types';

export default function ProviderList({ initialProviders }: { initialProviders: Provider[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProviders = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return initialProviders.filter((provider) =>
      provider.name.toLowerCase().includes(lowercasedTerm) ||
      provider.specialization.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm, initialProviders]);

  return (
    <div className={styles.container}>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      
      {filteredProviders.length === 0 ? (
        <p className={styles.noResults}>No providers found matching your search.</p>
      ) : (
        <div className={styles.grid}>
          {filteredProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      )}
    </div>
  );
}