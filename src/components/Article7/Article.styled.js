import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledArticle = styled.article`
  background-color: ${theme.colors.yellow100};
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  grid-area: item1;
 



  img {
  width:60%;
`;

export const H1 = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.6rem;
  span {
    color: ${theme.colors.purple500};
    font-size: 28px;
    font-weight: 600;
  }
`;
