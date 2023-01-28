import React, { VFC, memo } from "react";
import { Item } from "../../type/api/Item";

type Props = {
  res: Item;
};

export const SelectItem: VFC<Props> = memo((props) => {
  const { res } = props;
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
