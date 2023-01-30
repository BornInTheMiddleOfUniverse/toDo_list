import { BoardsArea, Header, HeaderTitle, Main } from "../styles/BoardArea";
import Boards from "./Boards";
import CreateBoard from "./CreateBoard";

function BoardArea() {
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

export default BoardArea;
