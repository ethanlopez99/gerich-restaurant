import React from "react";

import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => (
  <div className="app__specialmenu section__padding flex__center app__bg">
    <div className="app__specialmenu-header">
      <SubHeading title="Menu that Fits Your Palatte" />
      <h1 className="headtext__cormorant">Today's Specials</h1>
    </div>
    <div className="app__specialmenu-content">
      <div className="app__specialmenu-content_winebeer">
        <h1 className="p__cormorant" style={{ marginBottom: "28px" }}>
          Wine & Beer
        </h1>
        <div>
          {data.wines.map((wine, index) => (
            <MenuItem title={wine.title} desc={wine.tags} price={wine.price} />
          ))}
        </div>
      </div>
      <img src={images.menu} />
      <div className="app__specialmenu-content_cocktails">
        <h1 className="p__cormorant" style={{ marginBottom: "28px" }}>
          Cocktails
        </h1>
        <div>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              title={cocktail.title}
              desc={cocktail.tags}
              price={cocktail.price}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialmenu-button">
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
