import { IconButton } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      size="sm"
      icon={<HamburgerIcon />}
      variant="unstyled"
      onClick={onOpen}
    />
  );
});
