import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

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
    <div className={active ? 'navbar active' : 'navbar'}>
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
                        <span>Gigs</span>
                        <span>Add New Gig</span>
                      </>
                    )}
                    <span>Orders</span>
                    <span>Messages</span>
                    <span>Orders</span>
                  </div>
                )}
              </div>
            </>
          )}
        </ul>
      </div>

      {active && (
        <>
          <hr />
          <div className="menu">
            <span>test1</span>
            <span>test2</span>
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
