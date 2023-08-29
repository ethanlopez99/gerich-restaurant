import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, desc, price }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-top">
      <div className="app__menuitem-top_name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="app__menuitem-top_bar"></div>
      <p className="app__menuitem-top_price">{price}</p>
    </div>
    <div className="app__menuitem-bottom">
      <p>{desc}</p>
    </div>
  </div>
);

export default MenuItem;
