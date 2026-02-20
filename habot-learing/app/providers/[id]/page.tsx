import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone, Star } from 'lucide-react';
import { notFound } from 'next/navigation';
import styles from '../../styles/ProviderDetail.module.scss';
import { getProviderById, getProviders } from '../../services/api'

export async function generateStaticParams() {
  const providers = await getProviders(); 

  return providers.map((provider: any) => ({
    id: provider.id.toString(),
  }));
}

export default async function ProviderDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const provider = await getProviderById(resolvedParams.id);

  if (!provider) {
    notFound(); 
  }

  return (
    <main className={styles.container}>
      <Link href="/" className={styles.backButton}>
        <ArrowLeft className={styles.icon} />
        <span>Back </span>
      </Link>
      
      <div className={styles.card}>
        <div className={styles.header}>
          <h1>{provider.name}</h1>
          <span className={styles.rating}>
            <Star size={18} fill="currentColor" />
            {provider.rating}
          </span>
        </div>
        
        <div className={styles.tags}>
          <span className={styles.tag}>{provider.specialization}</span>
          <span className={styles.tag}>
            <MapPin className={styles.icon} />
            <span>{provider.location}</span>
          </span>
        </div>

        <div className={styles.content}>
          <h2>About</h2>
          <p>{provider.longDescription}</p>
        </div>

        <div className={styles.contact}>
          <h2>Contact Information</h2>
          <p className={styles.iconcontainer}>
            <Mail />
            <span >{provider.contactEmail}</span>
          </p>
          <p className={styles.iconcontainer}>
            <Phone />
            <span>{provider.phoneNumber}</span>
          </p>
        </div>
      </div>
    </main>
  );
}