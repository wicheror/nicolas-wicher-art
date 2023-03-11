import * as S from "./Header.styles";
import YoutubeIcon from "./icons/icons8-youtube.svg";
import TiktokIcon from "./icons/icons8-tiktok.svg";
import InstagramIcon from "./icons/icons8-instagram.svg";

export function Header() {
  return (
    <S.Container id="header">
      <h1>Nicolas Wicher</h1>
      <h2>abstract art</h2>
      <S.Icons>
        <a href="https://www.tiktok.com/@nicolaswicherart">
          <img src={TiktokIcon} />
        </a>
        <a href="https://www.youtube.com/@nicolaswicher">
          <img src={YoutubeIcon} />
        </a>
        <a href="https://www.instagram.com/nicolaswicherart/">
          <img src={InstagramIcon} />
        </a>
      </S.Icons>
      <S.Arrow>↓</S.Arrow>
    </S.Container>
  );
}
