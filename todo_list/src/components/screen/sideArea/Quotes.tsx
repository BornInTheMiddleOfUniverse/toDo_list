import { Author, Quote, QuotesArea, QuotesBody } from "../../../styles/Quotes";
import SubtitleSvg from "../../Svg";

function Quotes() {
  return (
    <QuotesArea>
      <SubtitleSvg
        text={"QUOTE"}
        id={"quote"}
        d={"m 20 20 a 30 30 30 1 1 90 100"}
      />
      <QuotesBody>
        <Quote>Talk is cheap. Show me the code.</Quote>
        <Author>By. Author</Author>
      </QuotesBody>
    </QuotesArea>
  );
}

export default Quotes;
