import React from 'react';
import './catCard.scss';

const CatCard = ({ data }) => {
  return (
    <div className="catCard">
      <img src={data.img} alt="" />
      <div className="text">
        <div className="title">{data.title}</div>
        <div className="desc">{data.desc}</div>
      </div>
    </div>
  );
};
export default CatCard;
