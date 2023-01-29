import React, { memo } from "react";
import { useParams } from "react-router-dom";

import { ItemDetailLayout } from "../layout/ItemDetailLayout";
import { ItemContext } from "../provider/ItemProvider";

import { Item } from "../../type/api/Item";

export const ItemDetail = memo(() => {
  //データを取得
  const items: Array<Item> = React.useContext(ItemContext);

  //useParamsでclickから渡されたpartNumberを取り出す
  const params: { clickNumber: string } = useParams();
  const partNumber = params.clickNumber;

  //同じpartNumberを持つデータのみを取り出す
  const res = items.find((items) => items.partNumber === partNumber);

  return <ItemDetailLayout res={res} />;
});
