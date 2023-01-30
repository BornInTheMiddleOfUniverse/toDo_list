import { QuotesArea } from "../styles/Quotes";
import SubtitleSvg from "./Svg";

function Quotes() {
  return (
    <QuotesArea>
      <SubtitleSvg
        text={"QUOTE"}
        id={"quote"}
        d={"m 20 20 a 30 30 30 1 1 90 100"}
      />

      <div>
        <div>Talk is cheap. Show me the code.</div>
        <div>Author. hahaha</div>
      </div>
    </QuotesArea>
  );
}

export default Quotes;
