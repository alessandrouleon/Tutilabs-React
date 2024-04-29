import styled from "styled-components";
import { COLORS } from "../../themes/colors";

export const Container = styled.div`
  width: 18.438rem;
  height: 18.875rem;
  position: relative;
  padding: 0;
  margin: 0;
  background: ${COLORS.PORPLE_DARK};
  border-radius: 1.5rem;
  border: none;
  z-index: 1;
`;

export const BackgroundImageGrid = styled.img`
  margin: 0;
  position: absolute;
  width: 18.438rem;
  height: 18.875rem;
  border-radius: 1.5rem;
  z-index: 2;
`;

export const ImageGrad = styled.img`
  margin: 0;
  position: absolute;
  width: 18.063rem;
  height: 18.424rem;
  border-radius: 1.5rem;
  z-index: 3;
`;

export const LegendImageSeeWebsite = styled.img`
  margin: 0;
  position: absolute;
  width: 17.75rem;
  height: 5.563rem;
  border-radius: 1.5rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 0.4rem;
  z-index: 4;
`;

export const InformationSeeWebsite = styled.text`
  margin: 0;
  padding: 1rem;
  text-align: center;
  position: absolute;
  width: 17.75rem;
  height: 5.563rem;
  font-size: 1.2rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 0.4rem;
  z-index: 5;
`;

export const ButtonView = styled.a`
  padding: 0.5rem 1.25rem;
  margin-top: 0.3rem;
  margin-left: 8rem;
  color: ${COLORS.BACKGROUND_BASE};
  background-color: ${COLORS.PORPLE_DARK};
  border: none;
  border-radius: 4rem;
  cursor: pointer;
  position: relative;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${COLORS.PORPLE_BASE};
  }
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
`;

export const MediaQuery = styled.div`
   @media (max-width: 393px) {
    width: 22.3rem;
    border: solid 1px blue;
    background: ${COLORS.PORPLE_DARK};
    border-radius: 1.5rem;
    border: none;

    .backgroundImageGrid {
      width: 22.3rem;
      height: 18.875rem;
    }

    .imageGrad {
      width: 22.3rem;
      height: 15.424rem;
    }

    .nformationSeeWebsite {
      margin: 0;
      padding: 1rem;
      position: absolute;
      width: 22.3rem;
      height: 7.563rem;
      bottom: 0;
    }

    .more-about-website {
      display: flex;
      width: 19.5rem;
      justify-content: center;
      align-items: center;
    }

    .buttonView {
      height: 2.1rem;
      margin-top: 0rem;
      left: 23%;
    }
  }
`;
