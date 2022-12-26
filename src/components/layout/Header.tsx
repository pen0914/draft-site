import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { VFC, memo } from "react";
import { BsCart2 } from "react-icons/bs";

import Css from "../css/layout/HeaderCss.module.scss";
import { MenuIconButton } from "../../components/molecules/buttons/MenuIconButton";
import { MenuDrawer } from "../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className={Css.FirstDiv}>
        <MenuIconButton onOpen={onOpen} />
        <Link to="/home" className={Css.Link2}>
          デモサイト
        </Link>
        <Link to="/home/cart" className={Css.Link3}>
          <BsCart2 size={"20px"} />
        </Link>
        <MenuDrawer onClose={onClose} isOpen={isOpen} />
      </div>
    </>
  );
});
