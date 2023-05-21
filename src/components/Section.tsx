import React, { useState } from "react";
import SectionTop from "./SectionTop";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import TodoList from "./TodoList";
import SectionRight from "./SectionRight";

function Section() {

    const [isTodoInput, setIsTodoInput] = useState(false);
    const [todoInputData, setTodoInputData] = useState<any[]>([]);
    const [editClicked, setEditClicked] = useState(false);
  
    const [editTitle, setEditTitle] = useState("");
    const [editDesc, setEditDesc] = useState("");
    const [editId, setEditId] = useState("");
  
    const saveEdit = () => {
      if (editTitle && editDesc) {
        setTodoInputData(
          todoInputData.map((element) => {
            if (element.id === editId) {
              return {
                ...element,
                title: editTitle,
                desc: editDesc,
              };
            }
            return element;
          })
        );
      }
      setEditTitle("");
      setEditDesc("");
  
      const invisible = document.querySelector('.section-right') as HTMLElement;
      if (invisible) {
        invisible.style.display = 'none';
      }
    };
  

  return (
    <div className="section">
      <SectionTop />
      <div className="section-bottom">
        <div
          className="section-left"
          style={{
            display: "flex",
          }}
        >
          <div>
            <TodoList />
            {
              <AddTodo
              id='1'
                todoInputData={todoInputData}
                setTodoInputData={setTodoInputData}
                setIsTodoInput={setIsTodoInput}
                // setTodoId={setTodoId}

              />
            }
            { (isTodoInput) &&
              todoInputData.filter(element => element.listId === '1').map((element) => {
                return (
                  <EditTodo
                    id={element.id}
                    title={element.title}
                    desc={element.desc}
                    setEditClicked={setEditClicked}
                    todoInputData={todoInputData}
                    setEditTitle={setEditTitle}
                    setEditDesc={setEditDesc}
                    setEditId={setEditId}
                  />
                );
              })}
          </div>

          <div>
            <TodoList />
            {
              <AddTodo
                id='2'
                todoInputData={todoInputData}
                setTodoInputData={setTodoInputData}
                setIsTodoInput={setIsTodoInput}
                // setTodoId={setTodoId}

              />
            }
            { (isTodoInput )  &&
              todoInputData.filter(element => element.listId === '2').map((element) => {
                return (
                  <EditTodo
                    id={element.id}
                    title={element.title}
                    desc={element.desc}
                    setEditClicked={setEditClicked}
                    todoInputData={todoInputData}
                    setEditTitle={setEditTitle}
                    setEditDesc={setEditDesc}
                    setEditId={setEditId}
                  />
                );
              }) }
          </div>

          <div>
            <TodoList />
            {
              <AddTodo
                id='3'
                todoInputData={todoInputData}
                setTodoInputData={setTodoInputData}
                setIsTodoInput={setIsTodoInput}
                // setTodoId={setTodoId}
              />
            }
            {(isTodoInput) &&
              todoInputData.filter(element => element.listId === '3').map((element) => {
                return (
                  <EditTodo
                    id={element.id}
                    title={element.title}
                    desc={element.desc}
                    setEditClicked={setEditClicked}
                    todoInputData={todoInputData}
                    setEditTitle={setEditTitle}
                    setEditDesc={setEditDesc}
                    setEditId={setEditId}
                  />
                ) 
              })}
          </div>


        </div>

        <SectionRight
          editClicked={editClicked}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editDesc={editDesc}
          setEditDesc={setEditDesc}
          saveEdit={saveEdit}
        />
      </div>
    </div>
  );
}

export default Section;
