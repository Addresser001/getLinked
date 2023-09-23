import { NavLink } from 'react-router-dom';
import {
  X,
  call,
  facebook,
  instagram,
  linkedIn,
  location,
} from '../../assets/svg';
import './styles.scss';
const AppFooter = () => {
  return (
    <footer className='app_footer'>
      <div className='content'>
        <div className='about'>
          <h3>
            get<span>linked</span>
          </h3>
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className='terms'>
            <span>Terms of Use</span>
            <span />
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className='links'>
          <span className='header'>Useful Links</span>
          <NavLink
            exact
            to='/#overview'
          >
            Overview
          </NavLink>
          <NavLink
            exact
            to='/#timeline'
          >
            Timeline
          </NavLink>
          <NavLink
            exact
            to='/#faq'
          >
            FAQs
          </NavLink>
          <NavLink
            exact
            to='/register'
          >
            Register
          </NavLink>
          <div className='social'>
            <span>Follow us</span>
            {instagram}
            {X}
            {facebook}
            {linkedIn}
          </div>
        </div>
        <div className='contact_wrappper'>
          <span className='header'>Contact us</span>

          <div className='contact'>
            {call}
            <span>+234 679 81819</span>
          </div>
          <div className='contact'>
            {location}
            <span>27,Alara Street Yaba 100012 Lagos State</span>
          </div>
        </div>
      </div>
      <div className='rights'>All rights reserved. © getlinked Ltd.</div>

    </footer>
  );
};

export default AppFooter;
