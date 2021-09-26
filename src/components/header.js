import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle, faPhoneSquare, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='inner-header'> 
          <div className='logo'>
            <Link to='/'>HOME</Link>
          </div>
          <div className='navigation'>
            <nav>
              <Link to='/about'><FontAwesomeIcon icon={faInfoCircle} /> ABOUT</Link>
              <Link to='/projects'><FontAwesomeIcon icon={faLaptopCode} /> PROJECTS</Link>
              <Link to='/contact'><FontAwesomeIcon icon={faPhoneSquare} /> CONTACT</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;