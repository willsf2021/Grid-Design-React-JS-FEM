import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledArticle = styled.article`
  background-color: ${theme.colors.yellow500};
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  max-width: 375px;
  grid-area: item4;

  h1 {
    font-size: 28px;
    font-weight: 600;
    line-height: 1.6rem;
  }
  img {
    width: 72%;
  }

  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-around;
    padding: 16px;
    h1 {
      font-size: 36px;
      width: 200px;
    }
    img {
      width: 200px;
    }
  }
`;
