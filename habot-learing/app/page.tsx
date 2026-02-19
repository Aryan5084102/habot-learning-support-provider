import ProviderList from "./components/ProviderList";
import { getProviders } from "./services/api";

export default async function Home() {
  const providers = await getProviders();

  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Learning Support Directory</h1>
      <ProviderList initialProviders={providers} />
    </main>
  );
}
