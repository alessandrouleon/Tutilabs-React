import styled from "styled-components";
import { COLORS } from "../../themes/colors";
import { Divider, Typography } from "@mui/material";

export const Container = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  height: 19rem;
  background: ${COLORS.BACKGROUND_BASE};
  border-radius: 1.5rem;
  border: solid 1px ${COLORS.BLACK_COLOR};
`;

export const Title = styled(Typography)`
  text-align: start;
  padding: 1rem 0.5rem 0.5rem 1.5rem;
  color: ${COLORS.BLACK_COLOR};
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
`;

export const StyledDivider = styled(Divider)({
  backgroundColor: COLORS.BLACK_COLOR,
  height: "1px",
  margin: "1rem 0",
});

export const TextInformation = styled(Typography)`
  text-align: start;
  color: ${COLORS.BLACK_COLOR};
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
  width: 21.5rem;
  height: 13rem;
  margin-top: 7rem;
  padding: 2rem 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: wrap;
`;

export const Image = styled.img`
  width: 20rem;
  height: 8rem;
  margin: 0;
  border-radius: 4rem;
`;

export const MediaQuery = styled.div`
  padding: 1rem 0 0 0;
  margin: 0;
  width: 22.3rem;
  @media (max-width: 393px) {
    .textInformation {
      text-align: start;
      padding: 1rem;
    }
  }
`;
