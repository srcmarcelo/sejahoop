import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ContactSection from '@/components/sections/ContactSection';
import Head from 'next/head';
import HomeSection from './sections/HomeSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seja Hoop</title>
        <meta
          name='description'
          content='Quem somos?'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header tab='aboutUs' />
      <main className='flex min-h-screen items-center justify-center'>
        <HomeSection />
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}
