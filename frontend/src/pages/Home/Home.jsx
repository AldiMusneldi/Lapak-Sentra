import React from 'react';
import Hero from '../../components/Hero/Hero';
import CardsFitur from '../../components/Cards-fitur/CardsFitur';
import ContentHome from '../../components/Content-home/ContentHome';
import Testimoni from '../../components/Testimoni/Testimoni';

function Home() {
  return (
    <>
      <Hero />
      <CardsFitur />
      <ContentHome />
      <Testimoni />
    </>
  );
}

export default Home;
