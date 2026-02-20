'use client';
import { useState, useMemo } from 'react';
import ProviderCard from './ProviderCard';
import styles from '../styles/ProviderList.module.scss'
import SearchBar from './SearchBar';
import { Provider } from '../types';
import Pagination from './Pagination';

export default function ProviderList({ initialProviders }: { initialProviders: Provider[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProviders = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return initialProviders.filter((provider) =>
      provider.name.toLowerCase().includes(lowercasedTerm) ||
      provider.specialization.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm, initialProviders]);


  const  ITEMPERPAGE = 4;
  const indexOfLastItem = currentPage * ITEMPERPAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMPERPAGE;
  const currentItem = filteredProviders.slice(indexOfFirstItem, indexOfLastItem)
  const totalPage = Math.ceil(filteredProviders.length / ITEMPERPAGE)

  return (
    <div className={styles.container}>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      
      {currentItem.length === 0 ? (
        <p className={styles.noResults}>No providers found matching your search.</p>
      ) : (
        <div className={styles.grid}>
          {currentItem.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      )}
      <Pagination
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}