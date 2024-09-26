import styled from "styled-components";
import { theme } from "../../../theme";


export const StyledArticle = styled.article`
  background-color: ${theme.colors.purple500};
  border-radius: 10px;
  padding: 24px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 48px;
  max-width:375px;
  grid-area: item8;
  img {
    width:100%;
  }

  @media (min-width: 768px) {
  min-width: 520px;
  padding: 24px 24px;
  flex-direction: row;
  align-itens: center;
  justify-content: center;
  img {
    max-width:240px;
  }
 }

  
  

  p {
  text-align: center;
  color: white;
  font-size: 28px;
  line-height: 1.8rem;
  @media (min-width: 768px) {
    font-size: 36px;
    text-align: left;
    display: flex;
    align-items: center;
  }
  }
`;
