import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const ContainerStyle = css`
  position: relative;
  margin: 2.5rem;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 468px) {
    margin: 0.5rem;
  }
`;

export const Credits = styled.div`
  font-size: 0.8rem;
  text-align: center;

  a {
    font-size: 0.8rem;
    margin: 0 0.2rem;
  }
`;
