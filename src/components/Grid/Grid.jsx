import React from "react";
import './Grid.css'; 
import { dataGrid } from "../../data/datagrid";

export function Grid() {
    return (
      <div className="grid">
        {dataGrid.map((item, index) => (
          <div key={index} className="allgrid">
            <img src={item.image} alt={item.h4} className="gridimage" />
            <div className="gridtext">
              <h4 className="gridh4">{item.h4}</h4>
              <p className="gridh5">
                {item.h5.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <div className="link">
                <a className="learnmore">Learn more &gt;</a>
                <a className="buy">Buy &gt;</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  