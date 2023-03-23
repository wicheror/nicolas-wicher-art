import * as S from "./Menu.styles";

export function Menu() {
  return (
    <S.Container>
      <S.MenuList>
      <S.MenuItem>
          <S.Link href="https://shop.nicolaswicher.com">shop</S.Link>
        </S.MenuItem>
        <S.MenuItem>
          <S.Link href="#gallery">gallery</S.Link>
        </S.MenuItem>
        <S.MenuItem>
          <S.Link href="#bio">bio</S.Link>
        </S.MenuItem>
        <S.MenuItem>
          <S.Link href="#contact">contact</S.Link>
        </S.MenuItem>
      </S.MenuList>
    </S.Container>
  );
}
