import React from 'react';
import Hero from '../../components/Hero/Hero';
import CardsFitur from '../../components/Cards-fitur/CardsFitur';
import ContentHome from '../../components/Content-home/ContentHome';
import Testimoni from '../../components/Testimoni/Testimoni';

function Home({ katagori, setKatagori }) {
  return (
    <>
      <Hero />
      <CardsFitur />
      <ContentHome katagori={katagori} setKatagori={setKatagori} />
      <Testimoni />
    </>
  );
}

export default Home;
