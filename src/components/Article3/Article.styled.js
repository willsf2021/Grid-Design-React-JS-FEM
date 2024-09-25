import styled from "styled-components";
import { theme } from "../../../theme";
import consistentSchedulePicture from "../../assets/images/illustration-consistent-schedule.webp";

export const StyledArticle = styled.article`
  height: 224px;
  height: 224px;
  background-color: ${theme.colors.yellow500};
  background-image: url(${consistentSchedulePicture});
  background-position: bottom -24px left 16px;
  background-size: 64%;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 0px 16px;
  position: relative;

  p {
    padding-top: 16px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4rem;
  }
`;
