import styled from "styled-components";
import { theme } from "../../../theme";
import consistentSchedulePicture from "../../assets/images/illustration-consistent-schedule.webp";

export const StyledArticle = styled.article`
  min-height: 224px;
  background-color: ${theme.colors.yellow500};
  background-image: url(${consistentSchedulePicture});
  background-position: bottom -48px left 16px;
  background-size: 64%;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 16px 24px;
  max-width:375px;
  grid-area: item6;

  @media (min-width: 768px) {
    min-height: 0px;
    background-position: top 160% left 50%;
    background-size: 80%;
    background-repeat: no-repeat;
    row-gap: 346px;
    max-width: 240px;
    img {
      display: none;
    }
  }
  p {
    padding-top: 16px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4rem;
    @media (min-width: 768px) {
      font-size: 28px;
    }
  }
`;
