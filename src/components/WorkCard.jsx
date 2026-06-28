import './Cards.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function WorkCard({ image, title, link, linkType, description }) {

  const navigate = useNavigate();
  const handleClick = (event) => {
    // fire the event except when the user clicks on the link itself

    const target = event.target;
    if (target.closest("a")) return;


    if (link) {
      if (linkType === "external") {
        window.open(link, "_self");
      } else {
        navigate(link);
      }
    } else {
      console.log("No link provided");
    }

  }

  return (
    <li>
      <article className="card-wrapper" onClick={handleClick}>
        <div className="card-text">
          <h2 className="card-title">
            {linkType === "external" ? (

              <a href={link} target="_self" className="card-title">
                {title}
                <span className="external-link-icon" aria-hidden="true"> ⎘</span>
                <span className="sr-only"> (external link)</span>
              </a>

            ) : (
              <NavLink to={link} className="card-title">
                {title}
              </NavLink>
            )}

          </h2>
          <p>{description}</p>

        </div>
        <img src={image} alt="" aria-hidden="true" />

      </article>

    </li>
  );
}
export default WorkCard;