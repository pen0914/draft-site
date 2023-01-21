import React, { VFC, memo } from "react";

import { ItemContext } from "../../../provider/ItemProvider";

export const TrackJacket51: VFC = memo(() => {
  const items = React.useContext(ItemContext);
  const res = items.find((items) => items.id === 1);
  return (
    <>
      <div>
        <image />
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
