import React from 'react';

import FootLog from '../Foot-logo/FootLog';
import FootMenu from '../Foot-menu/FootMenu';
import FootKebijakan from '../Foot-kebijakan/FootKebijakan';
import FootKontak from '../Foot-kontak/FootKontak';

const Footer = ({ navigate }) => {
  return (
    <>
      <footer className="bg-Neutral_90 p-[2rem]">
        <div className="container mx-auto p-1 text-Neutral_10 flex justify-between items-start font-Poppins">
          <FootLog />
          <FootMenu navigate={navigate} />
          <FootKebijakan />
          <FootKontak />
        </div>
      </footer>
    </>
  );
};

export default Footer;
