import React, { VFC, memo } from "react";

import { ItemContext } from "../../../provider/ItemProvider";

export const TrackJacket51: VFC = memo(() => {
  const items = React.useContext(ItemContext);
  const res = items.filter((items) => {
    return items.id === 1;
  });

  return (
    <>
      <div>
        <image />
      </div>
      <div>
        <div>
          <p>{res.id}</p>
        </div>
      </div>
    </>
  );
});
