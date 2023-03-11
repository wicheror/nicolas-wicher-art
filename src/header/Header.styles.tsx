import styled from "styled-components";
import { ContainerStyle } from "../App.styles";

export const Container = styled.div`
  ${ContainerStyle}
`;

export const Arrow = styled.h1`
  margin-top: 0;
`;

export const Icons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  img:hover {
    opacity: 0.6;
  }
`;
