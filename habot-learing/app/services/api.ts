import { Provider } from '../types';
import providersData from './data.json'; // Import the JSON file

// Type assertion to ensure the JSON matches our TypeScript interface
const providers: Provider[] = providersData as Provider[];

// Simulated delay function to mimic network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch all providers
export const getProviders = async (): Promise<Provider[]> => {
  await delay(800); 
  return providers;
};

// Fetch a single provider by ID
export const getProviderById = async (id: string): Promise<Provider | null> => {
  await delay(500); // Simulate a 500ms network request
  const provider = providers.find(p => p.id === id);
  return provider || null;
};