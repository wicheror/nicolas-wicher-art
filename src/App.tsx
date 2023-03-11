import * as S from "./App.styles";
import { Bio } from "./bio";
import { Contact } from "./contact";
import { Gallery } from "./gallery";
import { Header } from "./header";
import { Menu } from "./menu";

export default function App() {
  return (
    <S.Container>
      <Menu />
      <S.Content>
        <Header />
        <Gallery />
        <Bio />
        <Contact />
      </S.Content>
      <S.Credits>
        icons by
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
        <br />
        <br />
        dev by
        <a target="_blank" href="">
          Venus Arcade
        </a>
      </S.Credits>
    </S.Container>
  );
}
