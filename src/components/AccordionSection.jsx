// import { useRef, useEffect, useState, Children, useContext, createContext } from 'react';
import './AccordionSection.css';

function AccordionSection({ children, title }) {
  return (
    <li className="accordion">
      <details>
      <summary>
        <h3>{title}</h3>
        <span aria-hidden="true"></span>
        </summary>
      <div className="accordion-content">
        {children}
      </div>
      </details>
    </li>
  );
}


export default AccordionSection;
