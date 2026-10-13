import './Header.css';
import { NavLink } from "react-router-dom";

function Header() {

  return (

    <>
      <div className="skip-to-content">
        <NavLink to="#main-content">Skip to Content</NavLink>
      </div>
      <header>
        <NavLink to="/">Kosei&#39;s Digital Work</NavLink>

      </header>
    </>
  );
}
export default Header;