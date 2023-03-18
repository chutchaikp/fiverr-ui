import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: 'John',
    isSeller: true,
  };

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <Link to="/" className="logo">
          <div className="text">fiverr</div>
          <div className="dot">.</div>
        </Link>

        <ul className="links">
          <li>Fiverr Business</li>
          <li>Explore</li>
          <li>English</li>
          <li>Sign in</li>
          {!currentUser.isSeller && <li>Become a seller</li>}
          {!currentUser && (
            <li>
              <button>Join</button>
            </li>
          )}
          {currentUser && (
            <>
              <div className="user" onClick={() => setOpen(!open)}>
                <img
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg"
                  alt=""
                />
                <span>{currentUser.username}</span>
                {open && (
                  <div className="options">
                    {currentUser.isSeller && (
                      <>
                        <Link className="link" to="/mygigs">
                          Gigs
                        </Link>
                        <Link className="link" to="/add">
                          Add New Gig
                        </Link>
                      </>
                    )}
                    <Link className="link" to="/orders">
                      Orders
                    </Link>
                    <Link className="link" to="/messages">
                      Messages
                    </Link>
                    <Link className="link" to="/logout">
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </ul>
      </div>

      {(active || pathname !== '/') && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};
export default Navbar;
