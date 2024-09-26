import createPostPicture from "../../assets/images/illustration-create-post.webp";
import { StyledArticle, H1 } from "./Article.styled";

function Article7() {
  return (
    <StyledArticle>
      <H1>
        Create and schedule content <span><em>quicker.</em></span>
        
      </H1>
      <img src={createPostPicture} alt="Create Post" />
    </StyledArticle>
  );
}

export default Article7;
