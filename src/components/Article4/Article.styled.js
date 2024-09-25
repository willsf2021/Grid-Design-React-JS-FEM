import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledArticle = styled.article`
  background-color: ${theme.colors.purple100};
  border-radius: 10px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
`;
export const P1 = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.6rem;
`;
export const P2 = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2rem;
  padding: 0px 8px;
`;
