import styled from "styled-components";
import { theme } from "../../../theme";
import schedulePostsPicture from "../../assets/images/illustration-schedule-posts.webp";

export const StyledArticle = styled.article`
  background-color: ${theme.colors.purple100};
  border-radius: 10px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
  grid-area: item3;
  max-width:375px;
  img {
    width: 100%;
  }
  @media (min-width: 768px) {
  background-image: url(${schedulePostsPicture});
  background-position: bottom 56% left -25%;
  background-size: 140%;
  background-repeat: no-repeat;
  row-gap: 346px;
  padding: 48px 24px;
    img {
      display: none;
    }
  }
`;
export const P1 = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.6rem;
  @media (min-width: 768px) {
    text-align: left;
  font-size: 32px;
  }
`;
export const P2 = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2rem;
  padding: 0px 8px;
  @media (min-width: 768px) {
    text-align: left;
    padding: 0px;
    font-size: 18px;
  }
`;
