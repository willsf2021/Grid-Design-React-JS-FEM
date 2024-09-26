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
  max-width:375px;
  grid-area: item2;

  @media (min-width:768px){
    max-width:max-content;
  }

  img {
    width: 64%;
    margin-top: 16px;
    @media (min-width:768px){
    width: 224px;
    }
  }

  p {
    font-size: 18px;
    color: white;
    text-align: center;
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
