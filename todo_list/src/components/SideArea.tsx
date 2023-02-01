import { Side } from "../styles/App";
import Goals from "./Goals";
import Quotes from "./Quotes";

function SideArea() {
  return (
    <Side>
      <Goals />
      <Quotes />
    </Side>
  );
}
export default SideArea;
