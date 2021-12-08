import React from 'react';
import Logo from './Logo.js';
import LabelMediumBold from './LabelMediumBold';
import MenuItem from './MenuItem'
import './Sidebar.css';


function Sidebar() {
  return (
    <div className="Sidebar">
      <Logo />
      <LabelMediumBold />
      <MenuItem />
    </div>
  );
}

export default Sidebar