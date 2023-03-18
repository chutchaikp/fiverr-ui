import React from 'react';
import { MdSearch } from 'react-icons/md';
import './featured.scss';
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> service for you bussiness
          </h1>
          <div className="search">
            <div className="inputs">
              <div className="icon">
                <MdSearch />
              </div>
              <input type="text" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./images/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Featured;
