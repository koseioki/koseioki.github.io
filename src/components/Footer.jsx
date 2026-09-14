import './Footer.css';
import { NavLink } from "react-router-dom";
// import ThemeSwitcher from './ThemeSwitcher';
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <hr aria-hidden="true" />

          <h2 className="sr-only">Site footer</h2>

          <div className="footer-links-container">

            <ul>
              <li>
              <NavLink to="/accessibility">Accessibility</NavLink>
              </li>
              <li>
              <NavLink to="/privacy">Privacy</NavLink>
              </li>
            </ul>

            <ul>

              <li>
                <a href="tel:+46727702333">+46 72-770 23 33</a>
              </li>
              <li>
                <a href="mailto:kosei.oki@outlook.com">
                  kosei.oki@outlook.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/koseioki/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/Koseioki?tab=repositories">GitHub</a>
              </li>

            </ul>
          </div>
          <p>© Kosei Oki 2026 - All rights reserved</p>

        </div>
      </footer>

    </>

  );
}
export default Footer;