import { Fragment } from "react";

import { MouseEvent } from "react";

interface ILayoutNavigationUIProps {
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  const NAVIGATION_MENU = [
    { name: "라이브게시판", page: "/boards" },
    { name: "라이브상품", page: "/markets" },
    { name: "마이페이지", page: "/boards" },
  ];

  return (
    <Wrapper>
      {NAVIGATION_MENU.map((el) => {
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>;
      })}
    </Wrapper>
  );
}
