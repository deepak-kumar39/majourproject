import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import '../Navbar/navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return (()=>{ window.removeEventListener('resize', showButton)})
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#242424' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu} style={{textDecoration:"none"}}>
            💚 LMS
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu} style={{textDecoration:"none"}}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  style={{textDecoration:"none"}}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  style={{textDecoration:"none"}}
                >
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  style={{textDecoration:"none"}}
                >
                 About
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/register' className='btn-link' style={{textDecoration:"none"}}>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/register' className='btn-link' style={{textDecoration:"none"}}>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// // import logo from "../images/logo.png";
// import ListItem from "../ListItem";
// import "../Navbar/navbar.css";
// const Navbar = () => {
//   const pageName = ["Home", "About", "Contact", "Services"];
//   const pageArray = ["/", "/about", "/contact", "/services"];
//   return (
//     <>
//       {/* <div className="container-fluid"> */}
//       <div className="container-fluid nav_bg">
//         <div className="row">
//           <div className="col-10 mx-auto"></div>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//               <Link className="navbar-brand" to="/">
//                 {/* <img
//                   src={logo}
//                   alt=""
//                   width="60"
//                   height="45"
//                   className="d-inline-block "
//                 /> */}
//                 LMS
//               </Link>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNav"
//                 aria-controls="navbarNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div
//                 className="collapse navbar-collapse text-center"
//                 id="navbarNav"
//               >
//                 <ul className="navbar-nav ms-auto ">
//                   {pageArray.map((li, ind) => {
//                     return (
//                       <ListItem
//                         key={ind}
//                         linkName={pageName[ind]}
//                         to={pageArray[ind]}
//                       />
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>

//       {/* </div> */}
//     </>
//   );
// };

// export default Navbar;

