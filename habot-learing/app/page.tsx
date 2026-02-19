import ProviderList from "./components/ProviderList";
import { getProviders } from "./services/api";
import Navbar from "./components/Navbar";
import './styles/globals.module.scss'

export default async function Home() {
  const providers = await getProviders();

  return (
    <div style={{display: 'flex', width: '100%', flexDirection: 'column', gap: '40px'  }}>
      <Navbar />
      <ProviderList initialProviders={providers} />
    </div>
  );
}
