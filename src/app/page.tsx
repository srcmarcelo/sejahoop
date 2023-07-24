import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HomeSection from '@/components/sections/HomeSection';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seja Hoop</title>
        <meta name='description' content='Faça um pix no exterior com HoopBank!' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='flex min-h-screen items-center justify-center'>
        <HomeSection />
      </main>
      <Footer />
    </>
  );
}
