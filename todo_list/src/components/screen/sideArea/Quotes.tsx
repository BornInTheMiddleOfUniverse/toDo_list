import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { quoteState } from "../../../atoms";
import { Author, Quote, QuotesArea, QuotesBody } from "../../../styles/Quotes";
import SubtitleSvg from "../../Svg";

function Quotes() {
  const [data, setData] = useRecoilState(quoteState);
  useEffect(() => {
    async function updateQuote() {
      try {
        const response = await fetch(
          "https://api.quotable.io/random?maxLength=60"
        );
        const { statusCode, statusMessage, ...data } = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
        setData({ content: "Opps... Something went wrong", author: "null" });
      }
    }
    updateQuote();
  }, []);

  return (
    <>
      <QuotesArea>
        <SubtitleSvg
          text={"QUOTE"}
          id={"quote"}
          d={"m 20 20 a 30 30 30 1 1 90 100"}
        />
        <QuotesBody>
          <Quote>{data.content}</Quote>
          <Author>{data.author}</Author>
        </QuotesBody>
      </QuotesArea>
    </>
  );
}

export default Quotes;
