import React, { VFC, memo, useState } from "react";
import { useHistory } from "react-router-dom";

import { Item } from "../../type/api/Item";

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
      pathname: "/home/cart",
      state: { cartItem }
    });
    //データ(state)を渡す
  };

  //詳細ページを返す
  return (
    <>
      <div>
        <img alt={res.name} src={res.image} />
      </div>
      <div>
        <div>
          <p>{res.name}</p>
          <p>{res.price}</p>
        </div>
        <div>
          <button onClick={() => onClickCart(res.partNumber)}>
            カートに入れる
          </button>
        </div>
        <div>
          <div>
            <p>[brand]</p>
            <p>{res.brand}</p>
          </div>
          <div>
            <p>[category]</p>
            <p>{res.category}</p>
          </div>
          <div>
            <p>[detail]</p>
            <p>{res.detail}</p>
          </div>
          <div>
            <p>[size]</p>
            <p>{res.size}</p>
          </div>
          <div>
            <p>[condition]</p>
            <p>{res.condition}</p>
          </div>
        </div>
      </div>
    </>
  );
});
