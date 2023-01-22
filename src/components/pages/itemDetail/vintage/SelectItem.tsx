import React, { VFC, memo } from "react";
import { useLocation } from "react-router-dom";

import { ItemContext } from "../../../provider/ItemProvider";

export const SelectItem: VFC = memo(() => {
  //後で削除
  const items = React.useContext(ItemContext);
  const { state } = useLocation();

  const res = items.find((items) => items.id === state);
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
