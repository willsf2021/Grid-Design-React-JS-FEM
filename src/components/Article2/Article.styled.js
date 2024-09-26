import styled from "styled-components";

export const StyledArticle = styled.article`
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
  max-width:375px;
  grid-area: item5;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 16px;
  }

  img {
    width: 100%;
    @media (min-width: 768px) {
      width: 180px;
    }
  }

  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4rem;
    @media (min-width: 768px) {
      font-size: 28px;
    }
  }
`;
