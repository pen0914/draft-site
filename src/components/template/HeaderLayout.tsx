import { VFC, memo, ReactNode } from "react";
import { Header } from "../layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      {children}
    </>
  );
});
