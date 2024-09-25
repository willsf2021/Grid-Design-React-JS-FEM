import fiveStars from "../../assets/images/illustration-five-stars.webp";
import { StyledArticle, H1 } from "./Article.styled";

function Article1() {
  return (
    <StyledArticle>
      <H1>
        Social Media <span>10x</span> <em>Faster</em> with AI
      </H1>
      <img src={fiveStars} alt="Five Stars" />
      <p>
        Over 4,000 5-star reviews
      </p>
    </StyledArticle>
  );
}

export default Article1;
