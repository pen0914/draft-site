import { css } from "@emotion/react";
import React, { VFC, memo, useState } from "react";
import { useHistory } from "react-router-dom";

import { Item } from "../../type/api/Item";
import Css from "../css/pages/ItemDetailCss.module.scss";

type Props = {
  res: Item;
};

export const ItemDetailLayout: VFC<Props> = memo((props) => {
  const { res } = props;

  const history = useHistory();

  //カートに品番を渡す
  const [cartItem, setCartItem] = useState<Array<string>>([]);
  const onClickCart = (partNumber: string) => {
    setCartItem([...cartItem, `${res.partNumber}`]);
    //読み込み
    //cartページへ移動
    history.push({
      pathname: "/cart",
      state: { cartItem }
    });
    //データ(state)を渡す
  };

  //詳細ページを返す
  return (
    <>
      <p className={Css.pic}>
        <img
          alt={res.name}
          src={res.image}
          className={Css.image}
          width="400px"
        />
        <br />

        {res.name}
        <br />
        {res.price}
      </p>
      <div>
        <div>
          <button onClick={() => onClickCart(res.partNumber)}>
            カートに入れる
          </button>
        </div>
        <div className={Css.explain}>
          <div className={Css.brand}>
            <p>[brand]</p>
            <p>{res.brand}</p>
          </div>
          <div className={Css.category}>
            <p>[category]</p>
            <p>{res.category}</p>
          </div>
          <div className={Css.detail}>
            <p>[detail]</p>
            <p>{res.detail}</p>
          </div>
          <div className={Css.size}>
            <p>[size]</p>
            <p>{res.size}</p>
          </div>
          <div className={Css.condition}>
            <p>[condition]</p>
            <p>{res.condition}</p>
          </div>
        </div>
      </div>
    </>
  );
});
