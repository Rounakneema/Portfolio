import { HubClient } from '@/components/HubClient';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Rounak Neema | DevOps Engineer & Penetration Tester',
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


