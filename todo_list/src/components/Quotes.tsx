import SubtitleSvg from "./Svg";

function Quotes() {
  return (
    <div className="bg-[#ffc0a9] fill-white	">
      <SubtitleSvg
        text={"QUOTE"}
        id={"quote"}
        d={"m 20 20 a 30 30 30 1 1 90 100"}
      />

      <div>
        <div>Talk is cheap. Show me the code.</div>
        <div>Author. hahaha</div>
      </div>
    </div>
  );
}

export default Quotes;
