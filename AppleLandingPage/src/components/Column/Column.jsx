import React from 'react';
import "./Column.css"
import { dataFooter } from '../../data/datafooter';

export function Column() {
  return (
    <div className="column">
      {dataFooter.map((section) => (
        <div key={section.id} className="footer-section">
          <h3>{section.id}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

