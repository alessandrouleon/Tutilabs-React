import styled from "styled-components";
import { COLORS } from "../../themes/colors";

export const Container = styled.div`
  max-height: 4.313rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const Image = styled.img`
  display: block;
  margin-left: 0;
`;

export const LinkDev = styled.div`
  background: ${COLORS.PRIMARY_LIGHT};
  width: 12rem;
  height: 2rem;
  font-size: 0.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  margin-right: 0;

  a {
    color: ${COLORS.PRIMARY_BASE};
    transition: color 0.3s ease;
    text-decoration: underline;

    &:hover {
      color: ${COLORS.SECONDARY_DARK};
    }
  }
`;
