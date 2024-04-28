import styled from "styled-components";
import { COLORS } from "../../themes/colors";
import { Typography } from "@mui/material";

export const Container = styled.div`
  padding: 0;
  margin: 0;
`;

export const Welcome = styled(Typography)`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
  color: ${COLORS.PRIMARY_BASE};
`;

export const Image = styled.img`
  display: block;
  padding: 0;
  margin: 0;
  margin-left: 1rem;
`;
