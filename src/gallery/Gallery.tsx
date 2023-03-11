import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import * as S from "./Gallery.styles";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

const photos = [
  { src: "https://github.com/wicheror/nicolas-wicher-art/src/gallery/assets/pic1.png", width: 1160, height: 1200 },
  { src: "./src/gallery/assets/pic2.png", width: 885, height: 1182 },
  { src: "./src/gallery/assets/pic3.png", width: 1200, height: 1226 },
  { src: "./src/gallery/assets/pic4.png", width: 912, height: 1200 },
];

export function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <S.Container id="gallery">
      <PhotoAlbum
        layout="columns"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
        plugins={[Fullscreen]}
      />
    </S.Container>
  );
}
