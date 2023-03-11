import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 2.5rem;
  // NOTE: Change the value below to move the gallery up/down.
  padding-top: 20vh;
  height: 100vh;
  scroll-snap-align: center;

  @media (max-width: 468px) {
    margin: 0.5rem;
  }
`;
