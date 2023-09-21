import { NavLink } from "react-router-dom";
import './styles.scss'

const AppHeader = () => {
  return (
    <header className="app_header">
      <span className="app_name">get<span>linked</span></span>
      <nav>
        <NavLink exact activeClassName="active_link" className="custom_link" to="">
          Timeline
        </NavLink>
        <NavLink exact activeClassName="active_link" className="custom_link" to="">
          Overview
        </NavLink>
        <NavLink exact activeClassName="active_link" className="custom_link" to="">
          FAQs
        </NavLink>
        <NavLink exact activeClassName="active_link" className="custom_link" to="">
          Contact
        </NavLink>
        <button>
          Register
        </button>
      </nav>
    </header>
  );
}

export default AppHeader;