import React from "react";
import { StyledApp } from "./App.styled";
import Article1 from "./components/Article1/Index";
import Article2 from "./components/Article2/Index";
import Article3 from "./components/Article3/Index";
import Article4 from "./components/Article4/Index";

function App() {
  return (
    <StyledApp>
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
    </StyledApp>
  );
}

export default App;
