import multiplePlatformsPicture from "../../assets/images/illustration-multiple-platforms.webp";
import { StyledArticle } from "./Article.styled";

function Article2() {
  return (
    <StyledArticle>
      <img src={multiplePlatformsPicture} alt="Multiple Plataforms Picture" />
      <p>Manage multiple accounts and platforms.</p>
    </StyledArticle>
  );
}

export default Article2;
