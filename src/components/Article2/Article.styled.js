import styled from "styled-components";

export const StyledArticle = styled.article`
    background-color: white;
    border-radius: 10px;
    padding:16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 16px;
    grid-area: item5;


    img {
        width: 100%;
    }
    
    p {
        font-size: 24px;
        font-weight: 600;
        line-height: 1.4rem
    }
`;
