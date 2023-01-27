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
        <div>
          <svg className=" ml-5 mt-5 w-full -rotate-[23deg] overflow-visible ">
            <path id={id} fill="none" d={d} />
            <text className="text-2xl tracking-widest">
              <textPath href={href}>{text}</textPath>
            </text>
          </svg>
        </div>
      ) : (
        <div className=" ml-[100px] mt-16 w-full  ">
          <svg className=" w-full overflow-visible ">
            <path id={id} fill="none" d={d} />
            <text className=" text-3xl tracking-widest">
              <textPath href={href}>{text}</textPath>
            </text>
          </svg>
        </div>
      )}
    </>
  );
}

export default SubtitleSvg;
