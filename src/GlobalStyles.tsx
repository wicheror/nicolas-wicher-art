import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

import "./fonts.css";

export const GlobalStyles = createGlobalStyle`
${normalize};

html {
    scroll-snap-type: y mandatory;
  }

body {
    background-color: #fff;
    font: 16px/1.5 "Montserrat", sans-serif;
    font-weight:200;
    margin:1rem;
}

h2 {
    font-weight:200;
    opacity:0.7;
    letter-spacing:0.3rem;
}

h3 {
    font-weight: 200;
    opacity:0.9;
    letter-spacing:0.2rem;
}

p {
    text-align:justify;
}

ul {
    margin:0;
    padding:0;
    list-style-type: none;
}

a {
    color: #000;
    font-weight: 300;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: solid underline #000 0.1rem;
    text-underline-offset: 0.5rem;

  &:hover {
    text-decoration-thickness: 0.2rem;
  }

  &:active {
    text-decoration-thickness: 0.3rem;
  }
}
`;
