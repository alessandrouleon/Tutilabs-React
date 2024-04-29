import styled, { keyframes } from "styled-components";
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

const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(20deg); }
  100% { transform: rotate(0deg); }
`;

export const HandImage = styled.img`
  display: flex;
  width: 4.622rem;
  height: 4.514rem;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.291rem 0.437rem;
  gap: 1.456rem;
  isolation: isolate;
  animation: ${waveAnimation} 2s ease-in-out infinite;
`;

export const MedyaQuery = styled.div`
  @media (max-width: 393px) {
    .title {
      font-size: 3.5rem;
    }

    .subtitle {
      width: 393px;
      font-weight: 400;
      font-size: 0.8rem;
      text-align: justify;
      word-wrap: break-word;
      padding-right: 2rem;
    }
  }
`;
