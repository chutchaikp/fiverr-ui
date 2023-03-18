import React from 'react';
import CatCard from '../../components/catCard/CatCard.jsx';
import './slide.scss';
import { cards } from '../../dummy.js';
import { Slider } from 'infinite-react-carousel/lib';

const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Slider centerMode={false} slidesToShow={5} arrowsScroll={5}>
          {cards.map((d, idx) => (
            <CatCard data={d} key={idx} />
            // <div key={idx}>xx</div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Slide;
