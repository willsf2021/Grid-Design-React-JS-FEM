import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledArticle = styled.article`
  background-color: ${theme.colors.yellow100};
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  max-width:375px;
  grid-area: item1;
   img {
    width:100%;
  }

 @media (min-width: 768px) {
  align-items: center;
  justify-content: center;
    
  img {
  width:100%;
}
}
`;

export const H1 = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.6rem;
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 1.8rem;
  }
  span {
    color: ${theme.colors.purple500};
    font-size: 28px;
    font-weight: 600;
    @media (min-width: 768px) {
      font-size: 36px;
    }
  }
`;
