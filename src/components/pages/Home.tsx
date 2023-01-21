import React from "react";
import "../../styles.css";
import { useHistory } from "react-router-dom";
import { ItemContext } from "../provider/ItemProvider";

import Css from "../css/pages/HomeCss.module.scss";

export const Home = () => {
  const items = React.useContext(ItemContext);
  const history = useHistory();

  const onClickPage = (index) => {
    const itemNumber = items[index];
    history.push(`/home/${items[index].brand}/${items[index].name}`);
  };

  return (
    <>
      <div className={Css.itemContainer}>
        {items.map((oneitem, index) => {
          return (
            <div
              key={oneitem.id}
              onClick={() => onClickPage(index)}
              className={Css.item}
            >
              <img src={oneitem.image} className={Css.pic} alt="" />
              <div className={Css.explain}>
                <p className={Css.brand}>{`【${oneitem.brand}】`}</p>
                <p className={Css.title}>{oneitem.name}</p>

                <p>{oneitem.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
