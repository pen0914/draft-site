import React, { VFC, memo } from "react";
import { useLocation } from "react-router-dom";
import { SelectItem } from "../components/pages/SelectItem";
import { ItemContext } from "../components/provider/ItemProvider";
import { useParams } from "react-router-dom";

//stateの型指定
type State = {
  id: number;
};

export const DetailRoute: VFC = memo(() => {
  //データを取得
  const items = React.useContext(ItemContext);

  //state:idをページ遷移と共に共有
  const location = useLocation();
  const params = location.search;
  console.log(params);
  //?以降のidを取り出す→

  //データからidに匹敵するデータのみを選択
  const res = items.find((items) => items.id === state.id);

  return <SelectItem res={res} />;
});
