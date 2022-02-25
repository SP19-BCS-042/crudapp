import React from 'react';
import Sami from './Sami.jpeg'; // Tell webpack this JS file uses this image

console.log(Sami); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={Sami} alt="Sami" />;
}

export default Header;