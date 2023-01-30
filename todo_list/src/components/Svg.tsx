import {
  ArcContainer,
  ArcSvg,
  ArcText,
  WaveContainer,
  WaveSvg,
  WaveText,
} from "../styles/Svg";

interface SvgProps {
  text: string;
  id: string;
  d: string;
  rotation?: boolean;
}

function SubtitleSvg({ text, id, d, rotation }: SvgProps) {
  const href = "#" + id;
  return (
    <>
      {rotation ? (
        <WaveContainer>
          <WaveSvg>
            <path id={id} fill="none" d={d} />
            <WaveText>
              <textPath href={href}>{text}</textPath>
            </WaveText>
          </WaveSvg>
        </WaveContainer>
      ) : (
        <ArcContainer>
          <ArcSvg className=" w-full overflow-visible ">
            <path id={id} fill="none" d={d} />
            <ArcText>
              <textPath href={href}>{text}</textPath>
            </ArcText>
          </ArcSvg>
        </ArcContainer>
      )}
    </>
  );
}

export default SubtitleSvg;
