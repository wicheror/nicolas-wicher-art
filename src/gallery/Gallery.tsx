import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import * as S from "./Gallery.styles";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

const photos = [
  { src: "https://user-images.githubusercontent.com/84172776/224514831-924750b9-3e1a-43d0-b94b-dcf942bf6ede.png", width: 1160, height: 1200 },
  { src: "https://user-images.githubusercontent.com/84172776/224514834-d2987682-a617-47b3-99ac-635866c35805.png", width: 885, height: 1182 },
  { src: "https://user-images.githubusercontent.com/84172776/224514835-70cec2fa-c821-4688-ba43-595a875af1e3.png", width: 1200, height: 1226 },
  { src: "https://user-images.githubusercontent.com/84172776/224514836-e239bcb9-2a9a-46d2-a338-e07315c9d833.png", width: 912, height: 1200 },
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
