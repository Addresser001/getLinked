import { NavLink, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react'
import './styles.scss'
import { closeMenu, openMenu } from "../../animation/animations";

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const history = useHistory()

  useEffect(() => {
    if (menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }

    history.listen(() => {
      setMenuOpen(false);
    });
  }, [menuOpen, history]);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <header className="app_header">
      <span onClick={() => history.push('/')} className="app_name">get<span>linked</span></span>
      <nav>
        <NavLink exact activeClassName="active_link" className="custom_link" to="/#timeline">
          Timeline
        </NavLink>
        <NavLink exact activeClassName="active_link" className="custom_link" to="/#overview">
          Overview
        </NavLink>
        <NavLink exact activeClassName="active_link" className="custom_link" to="/#faq">
          FAQs
        </NavLink>
        <NavLink exact activeClassName="active_link" className="custom_link contact" to="/contact">
          Contact
        </NavLink>
        <button onClick={() => history.push("/register")}>
          Register
        </button>
      </nav>
      <div className="menu" onClick={() => menuToggle()}>
        <div
          className={`hamburger${menuOpen ? "__active" : ""} `}
        >
          <div className="hamburger-icon" />
        </div>
      </div>
    </header>


  );
}

export default AppHeader;