import React from "react";
import "../../styles.css";
import { useHistory } from "react-router-dom";
import { ItemContext } from "../provider/ItemProvider";

import Css from "../css/pages/HomeCss.module.scss";

export const Home = () => {
  //データを取得
  const items = React.useContext(ItemContext);

  //ページ遷移に要するhistoryを取得
  const history = useHistory();

  //アイテム画像からページ遷移する(idを渡す)
  const onClickPage = (id: number) => {
    history.push({ pathname: `/home/select/?id=${id}`, state: { id } });
  };

  return (
    <>
      <div className={Css.itemContainer}>
        {items.map((oneitem, index) => {
          return (
            <div
              key={oneitem.id}
              onClick={() => onClickPage(oneitem.id)}
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
