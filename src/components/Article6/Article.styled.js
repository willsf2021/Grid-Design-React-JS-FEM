import styled from "styled-components";

export const StyledArticle = styled.article`
  background-color: white;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
    max-width:375px;
  grid-area: item7;
  @media (min-width: 768px) {
    justify-content: space-around;
  }

  img {
    width: 60%;
    @media (min-width: 768px) {
      width: 196px;
    }
  }
  h1 {
    line-height: 40px;
    font-size: 48px;
    font-weight: 500;
    @media (min-width: 768px) {
      font-size: 56px;
    }
  }

  p {
    color: black;
    font-size: 18px;
    font-weight: 500;
  }
`;
