import { HubClient } from '@/components/HubClient';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Rounak Neema | Cybersecurity, DevSecOps & Cloud Engineering',
  description: 'Rounak Neema is a computer science student focused on cybersecurity, DevSecOps, cloud infrastructure and security engineering. Explore his projects, technical work, research and engineering portfolio.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <JsonLd type="home" />
      <HubClient />
    </>
  );
}




