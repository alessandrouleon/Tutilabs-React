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
  width: 33.875rem;
  margin-left: 0.5rem;
`;

export const Image = styled.img`
  width: 6.188rem;
  height: 6.188rem;
  margin-right: 1rem;
`;

export const ImageArrwForward = styled.img`
  position: absolute;
  width: 6.75rem;
  height: 7.063rem;
  right: 0;
 margin-top: -0.5rem;
`;

export const ImageArrwBack = styled.img`
  position: absolute;
  width: 6.75rem;
  height: 7.063rem;
  left: 0;
 margin-top: -0.5rem;
`;
