import React, { memo } from "react";
import "../../styles.css";
import { useHistory } from "react-router-dom";
import { ItemContext } from "../provider/ItemProvider";

import { HomeLayout } from "../layout/HomeLayout";

export const Home = memo(() => {
  //データを取得
  const items = React.useContext(ItemContext);

  //ページ遷移に要するhistoryを取得
  const history = useHistory();

  //アイテム画像からページ遷移する(idを渡す)
  const onClickPage = (partNumber: string) => {
    history.push({
      pathname: `/home/select/${partNumber}`
    });
  };

  return <HomeLayout items={items} onClickPage={onClickPage} />;
});
