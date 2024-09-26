import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  width: 100vw;
    background-color: ${theme.colors.offWhite};
    
    }

    @media (min-width: 768px) {
      padding: 80px 120px;
    }
    `;
