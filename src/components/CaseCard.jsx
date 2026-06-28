import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Cards.css';

function CaseCard({ caseItem }) {
    const path = `/ux-design-cases/${caseItem.slug}`;
    const navigate = useNavigate();
    const handleClick = (event) => {
        const target = event.target;
        if (target.closest("a")) return;

        if (path) {
            navigate(path);
        } else {
            console.log("No path provided");
        }
    }

    return (
        <li>
            <article className="card-wrapper" onClick={handleClick}>
                <div className="card-text">
                    <h2 className="card-title">
                        <NavLink to={`/ux-design-cases/${caseItem.slug}`} className="card-title">
                            {caseItem.title}
                        </NavLink>
                    </h2>
                    {caseItem.summary.map((block, i) => (
                        <p key={`summary-${i}`}>{block.text}</p>
                    ))}

                    <img src={caseItem.clientLogo} className="client-logo" alt={caseItem.client} />

                </div>

                <img src={caseItem.image} className="case-card-thumbnail" alt="" aria-hidden="true" />

            </article>
        </li>
    );
}

export default CaseCard;