import React, { VFC, memo } from "react";
import { ItemDetail } from "../pages/ItemDetail";
import { ItemContext } from "../provider/ItemProvider";
import { useParams } from "react-router-dom";

export const MatchData: VFC = memo(() => {
  //データを取得
  const items = React.useContext(ItemContext);

  //useParamsでclickから渡されたpartNumberを取り出す
  const params: { clickNumber: string } = useParams();
  const partNumber = params.clickNumber;

  //同じpartNumberを持つデータのみを取り出す
  const res = items.find((items) => items.partNumber === partNumber);

  return <ItemDetail res={res} />;
});
