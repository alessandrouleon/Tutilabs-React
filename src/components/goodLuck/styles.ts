import styled from "styled-components";
import { COLORS } from "../../themes/colors";
import { Typography } from "@mui/material";

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: ${COLORS.ORANGE_PRIMARY};
  border-radius: 1.5rem;
  z-index: 1;
`;

export const Title = styled(Typography)`
  padding: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
  color: ${COLORS.PORPLE_DARK};
`;

export const TriangleBackground = styled.div`
  position: relative;
  width: 0;
  height: 0;
  margin-top: calc(5vw);
  border-style: solid;
  border-width: calc(13vw) 0 0 calc(50vw);
  border-color: transparent transparent transparent ${COLORS.ORANGE_LIGHT};
  border-radius: 0 0 1.5rem 1.5rem;
  z-index: 2;
`;

export const Image = styled.img`
  margin-left: auto;
  position: absolute;
  top: auto;
  right: 0.5rem;
  bottom: 0;
  width: 24.824rem;
  height: 23.617rem;
  z-index: 3;
`;

export const MediaQuery = styled.div`
  @media (max-width: 393px) {
    .containerBackground {
      width: 365px;
      padding-right: 2rem;
    }

    .title {
      font-size: 1.8rem;
    }

    .imagemRabbit {
      margin-left: auto;
      position: absolute;
      top: auto;
      right: 0.6rem;
      bottom: 0.2rem;
      width: 14.824rem;
      height: 13.617rem;
      z-index: 3;
    }

    .triangleBackground {
      position: relative;
      width: 0;
      height: 0;
      margin-top: calc(5vw);
      border-style: solid;
      border-width: calc(25vw) 0 0 calc(93vw);
      border-color: transparent transparent transparent ${COLORS.ORANGE_LIGHT};
      border-radius: 0 0 1.5rem 1.5rem;
      z-index: 2;
    }
  }
`;
