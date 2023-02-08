import { Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { toDoState } from "../../../atoms";
import { Board, BoardBody, BoardHeader, BoardTitle } from "../../../styles/Boards";
import { Cards } from "../../../styles/ToDos";
import CreateToDo from "./board/CreateToDo";
import DraggableToDo from "./board/DraggableToDo";


function Boards() {
  const toDos = useRecoilValue(toDoState);
  const onClick = () => {
    console.log("toDos", toDos);
  };

  return (
    <>
      {Object.keys(toDos).map((boardTitle) => (
        <Board key={boardTitle}>

          <BoardHeader onClick={onClick}>
            <BoardTitle>{boardTitle}</BoardTitle>
            <CreateToDo boardTitle={boardTitle} toDos={toDos[boardTitle]} />
          </BoardHeader>
          
          <Droppable droppableId={boardTitle}>
                {(magic, info) => (
                  <BoardBody ref={magic.innerRef} {...magic.droppableProps}> 
                  <Cards>
                    {toDos[boardTitle].map((toDo, index) => (
                        <DraggableToDo key={toDo.id} toDoId={toDo.id} toDoText={toDo.text} index={index}/>                                  
                      ))}
                  </Cards>
                    
                    {magic.placeholder}

                  </BoardBody>
                )}

          </Droppable>

        </Board>
      ))}
    </>
  );
}
export default Boards;
