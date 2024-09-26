import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledArticle = styled.article`
  background-color: ${theme.colors.purple500};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
  border-radius: 10px;
  padding: 40px;
  grid-area: item2;

  img {
    width: 64%;
    margin-top: 16px;
  }

  p {
    font-size: 18px;
    color: white;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  color: white;
  font-size: 48px;
  font-weight: 500;
  line-height: 2.8rem;
  span {
    color: ${theme.colors.yellow500};
  }
`;
