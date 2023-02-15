import { Main } from "../../../styles/App";
import { BoardsArea, Header, HeaderTitle } from "../../../styles/MainArea";
import Boards from "./Boards";
import CreateBoard from "./CreateBoard";

function MainArea() {
  return (
    <Main>
      <Header>
        <HeaderTitle>To Dos</HeaderTitle>
        <CreateBoard />
      </Header>

      <BoardsArea>
        <Boards />
      </BoardsArea>
    </Main>
  );
}

export default MainArea;
