import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { VFC, memo } from "react";

import Css from "../css/layout/HeaderCss.module.scss";

export const Header: VFC = memo(() => {
  // const {} = useDisclosure();
  return (
    <>
      <div className={Css.FirstDiv}>
        <div className={Css.SecondDiv}>
          <Link className={Css.Link1}>O</Link>
          <Link className={Css.Link2}>デモサイト</Link>
          <Link className={Css.Link3}>O</Link>
        </div>
      </div>
    </>
  );
});
