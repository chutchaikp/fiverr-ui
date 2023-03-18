import React from 'react';

import Featured from '../../components/featured/Featured.jsx';
import TrustedBy from '../../components/trustedBy/TrustedBy.jsx';
import Slide from '../../components/slide/Slide.jsx';

import './home.scss';
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide />

      <div className="wrapper">
        <h1> Home </h1>
      </div>
    </div>
  );
};
export default Home;
