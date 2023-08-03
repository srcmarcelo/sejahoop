import ContactSection from '@/components/sections/ContactSection';
import DetailsSection from '@/components/sections/DetailsSection';
import HomeSection from '@/components/sections/HomeSection';
import MobileSection from '@/components/sections/MobileSection';
import PaymentSection from '@/components/sections/PaymentSection';
import StorekeeperSection from '@/components/sections/StorekeeperSection';
import StoresSection from '@/components/sections/StoresSection';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seja Hoop</title>
        <meta
          name='description'
          content='Faça um pix no exterior com HoopBank!'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex min-h-screen items-center justify-center'>
        <HomeSection />
      </main>
      <MobileSection />
      <StoresSection />
      <PaymentSection />
      <StorekeeperSection />
      <DetailsSection />
      <ContactSection />
    </>
  );
}
