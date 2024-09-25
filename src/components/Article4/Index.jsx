import schedulePostsPicture from "../../assets/images/illustration-schedule-posts.webp";
import { StyledArticle, P1, P2 } from "./Article.styled";

function Article4() {
  return (
    <StyledArticle>
      <P1>Schedule to social media.</P1>
      <img src={schedulePostsPicture} alt="Schedule Posts" />
      <P2>Optimize post timings to publish content at the perfect time for your audience</P2>
    </StyledArticle>
  );
}

export default Article4;
