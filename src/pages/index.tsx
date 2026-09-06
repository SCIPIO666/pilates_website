import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Impact from '@/components/Impact';
import Classes from '@/components/Classes';
import Instructor from '@/components/Instructor';
import Gallery from '@/components/Gallery';
import GalleryStrip from '@/components/GalleryStrip';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Revival Pilates — Nairobi</title>
        <meta
          name="description"
          content="Revival Pilates — Reformer, Mat, Group and Private Pilates classes in Nairobi. Movement that meets you where you are."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Impact />
        <Classes />
        <Instructor />
        <Gallery />
        <GalleryStrip />
        <Testimonials />
        <Pricing />

      </main>
      <Footer />
    </>
  );
}
