import audienceGrowthPicture from "../../assets/images/illustration-audience-growth.webp";
import { StyledArticle } from "./Article.styled";

function Article6() {
  return (
    <StyledArticle>
      <h1>{">"}56%</h1>
      <p>faster audience growth</p>
      <img src={audienceGrowthPicture} alt="Audience Growth" />
    </StyledArticle>
  );
}

export default Article6;
