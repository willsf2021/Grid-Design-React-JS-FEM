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
  grid-area: item8;
  @media (min-width: 768px) {
  flex-direction: row;
  img {
    max-width:240px;
  }
 }

  
  

  p {
  text-align: center;
  color: white;
  font-size: 28px;
  line-height: 1.8rem;
  // padding: 0px 24px;
  }
`;
