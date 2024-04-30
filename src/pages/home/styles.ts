import { Grid } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  border: 0;
  padding: 0;
`;

export const HeaderHome = styled.div`
  padding: 1rem;
`;

export const GridBody = styled(Grid)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  padding: 0 1rem 1rem 1rem;
  gap: 1rem;
`;

export const CardGrid = styled(Grid)`
  padding: 0;
  border: none;
`;

export const SubCardsGrid = styled(Grid)`
  display: grid;
  grid-template-columns: 1fr 18.438rem;
  grid-template-rows: auto auto;
  padding: 0 0rem 1rem 0;
  gap: 1rem;
`;

export const MediaQuery = styled.div`
  @media (max-width: 393px) {
    .gridBody {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      padding: 0 1rem 1rem 1rem;
      gap: 1rem;
    }

    .subCardsGrid {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      padding: 0 0rem 1rem 0;
      gap: 1rem;
    }
  }

  @media (min-width: 394px) and (max-width: 768px) {
    .gridBody {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      padding: 0 1rem 1rem 1rem;
      gap: 1rem;
    }

    .subCardsGrid {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      padding: 0 0rem 1rem 0;
      gap: 1rem;
    }
  }

  @media  (width: 1920px) {
    .gridBody {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      padding: 0 1rem 1rem 1rem;
      gap: 1rem;
    }

    .subCardsGrid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      padding: 0 0rem 1rem 0;
      gap: 1rem;
    }
  }

`;
