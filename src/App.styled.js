import styled from "styled-components";
import { theme } from "../theme";

export const StyledApp = styled.main`
  width: 100vw;
  padding: 40px 16px;
  font-family: "DM Sans", sans-serif;
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  @media (min-width: 768px) {
  margin: auto;
    max-width: 1024px;
    display: grid;
    gap: 32px;
    grid-template-areas:
      "item1 item2 item2 item3"
      "item1 item5 item6 item3"
      "item4 item5 item6 item3"
      "item4 item7 item8 item8";
  }
`;
