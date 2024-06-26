import styled from "styled-components";
import { COLORS } from "../../themes/colors";
import { Typography } from "@mui/material";

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: ${COLORS.BACKGROUND_BASE};
`;

export const Title = styled(Typography)`
  text-align: start;
  padding: 1rem 0.5rem 0.5rem 1.5rem;
  color: ${COLORS.BLACK_COLOR};
  font-family: "Poppins", sans-serif;
  font-style: normal;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonAction = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 0.3rem;
  margin-left: 1rem;
  border: solid 1px ${COLORS.BLACK_COLOR};
  border-radius: 4rem;
  cursor: pointer;
  position: relative;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TiteButton = styled.text`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 300;
  margin-right: 0.5rem;
  color: ${COLORS.BACKGROUND_BASE};
  font-family: "Poppins", sans-serif;
  font-style: normal;
`;

export const VectorImage = styled.img`
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
`;

export const NavigationButtonSelection = styled.div`
  width: 35rem;
  height: 7.063rem;
  margin-top: 2rem;
  padding: 0.5rem 0;
  background-color: ${COLORS.BACKGROUND_LIGHT};
  border-radius: 4.223rem;
  // overflow-x: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  justify-content: flex-start;
`;

export const ImageGroup = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 35rem; */
  margin-left: 1rem;
`;

export const Image = styled.img`
  width: 6rem;
  height: 6rem;
  margin-right: 2rem;
  border-radius: 4rem;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(80%);
  }
`;

export const ButtonImageGroup = styled.button`
  width: 6rem;
  height: 6rem;
  margin-right: 2rem;
  border-radius: 50rem;
  cursor: pointer;
`;

export const ArrwForwardButton = styled.button`
  position: absolute;
  width: 6.75rem;
  height: 7.063rem;
  right: 0;
  margin-top: -0.5rem;
  border-radius: 0 4rem 4rem 0;
  margin-right: 0;
  left: 28.5rem;
`;

export const ImageArrwForward = styled.img`
  position: relative;
  width: 6.75rem;
  height: 7.063rem;
  right: 0;
  border-radius: 0 4rem 4rem 0;
`;

export const ArrwBackButton = styled.button`
  position: absolute;
  width: 6.75rem;
  height: 7.063rem;
  left: 0;
  margin-top: -0.5rem;
  border-radius: 4rem 0 0 4rem;
`;

export const ImageArrwBack = styled.img`
  position: relative;
  width: 6.75rem;
  height: 7.063rem;
  border-radius: 4rem 0 0 4rem;
  left: 0;
`;

export const MediaQuery = styled.div`
  @media (max-width: 393px) {
    width: 22.4rem;
    .navigationButtonSelection {
      width: 22rem;
      height: 5.4rem;
    }

    .titleButtonsBackFront {
      width: 22.8rem;
    }

    .imageGroup {
      display: flex;
      flex-direction: row;
      width: 22.813rem;
      margin-left: 0.5rem;
      margin-right: 0;
    }

    .buttonGroup {
      width: 4.5rem;
      height: 4.5rem;
      margin-right: 1rem;
      border-radius: 50rem;
      cursor: pointer;
    }

    .imagem {
      width: 4.5rem;
      height: 4.5rem;
      margin-right: 1rem;
      border-radius: 4rem;
      transition: filter 0.3s ease;
    }

    .arrwBackButton {
      position: absolute;
      width: 4.6rem;
      height: 5.4rem;
      left: 0;
      margin-top: -0.5rem;
      border-radius: 4rem 0 0 4rem;
    }

    .imageArrwBack {
      position: relative;
      width: 4.5rem;
      height: 5.4rem;
      border-radius: 4rem 0 0 4rem;
      left: 0;
    }

    .arrwForwardButton {
      width: 4.6rem;
      height: 5.4rem;
      right: 0;
      margin-top: -0.5rem;
      border-radius: 0 4rem 4rem 0;
      margin-right: 0;
      left: 18.5rem;
    }

    .imageArrwForward {
      width: 4.5rem;
      height: 5.4rem;
      border-radius: 0 4rem 4rem 0;
    }
  }

  @media (min-width: 394px) and (max-width: 768px) {
    max-width: 47rem;
    .navigationButtonSelection {
      width: 45.5rem;
      height: 5.4rem;
    }

    .titleButtonsBackFront {
     max-width: 45.5rem;
    }

    .imageGroup {
      display: flex;
      flex-direction: row;
      max-width: 45.5rem;
      margin-left: 0.5rem;
      margin-right: 0;
    }

    .buttonGroup {
      max-width: 4.5rem;
      max-height: 4.5rem;
      margin-right: 1rem;
      border-radius: 50rem;
      cursor: pointer;
    }

    .imagem {
      max-width: 4.5rem;
      max-height: 4.5rem;
      margin-right: 1rem;
      border-radius: 4rem;
      transition: filter 0.3s ease;
    }

    .arrwBackButton {
      position: absolute;
      max-width: 4.6rem;
      max-height: 5.4rem;
      left: 0;
      margin-top: -0.5rem;
      border-radius: 4rem 0 0 4rem;
    }

    .imageArrwBack {
      position: relative;
      max-width: 4.5rem;
      max-height: 5.4rem;
      border-radius: 4rem 0 0 4rem;
      left: 0;
    }

    .arrwForwardButton {
      max-width: 4.6rem;
      max-height: 5.4rem;
      right: 0;
      margin-top: -0.5rem;
      border-radius: 0 4rem 4rem 0;
      margin-right: 0;
      left: 41rem;
    }

    .imageArrwForward {
      max-width: 4.5rem;
      max-height: 5.4rem;
      border-radius: 0 4rem 4rem 0;
    }
  }

`;
