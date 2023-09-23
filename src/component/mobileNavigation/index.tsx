import { NavLink } from "react-router-dom";
import './styles.scss'

const MobileNavigation = () => {
  return (
    <div className="hamburger-menu">
      <div className="nav-primary">
        <div className="nav-content">
          <div className="nav-links">
            <div className="nav-link">
              <NavLink exact activeClassName="active_link" className="custom_link" to="/#timeline">
                Timeline
              </NavLink>
            </div>
            <div className="nav-link">
              <NavLink exact activeClassName="active_link" className="custom_link" to="/#overview">
                Overview
              </NavLink>
            </div>
            <div className="nav-link">
              <NavLink exact activeClassName="active_link" className="custom_link" to="/#faq">
                FAQs
              </NavLink>
            </div>
            <div className="nav-link">
              <NavLink exact activeClassName="active_link" className="custom_link contact" to="/contact">
                Contact
              </NavLink>
            </div>
            <div className="nav-link">
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-secondary"></div>
    </div >
  );
};

export default MobileNavigation;
