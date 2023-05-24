import React, { useState } from "react";

interface AddTodoProps {
    todoInputData: any[];
    setTodoInputData: React.Dispatch<React.SetStateAction<any[]>>;
    setIsTodoInput: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
  }

function AddTodo(props: AddTodoProps) {

  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  const storeFormInput = (id: string) => {
    const newInput = {
      listId: id,
      id: new Date().getTime().toString(),
      title: todoTitle,
      desc: todoDesc,
  };
    props.setTodoInputData([...props.todoInputData, newInput]);
    props.setIsTodoInput(true);
    setTodoTitle("");
    setTodoDesc("");
    console.log(props.todoInputData)
  };

  return (
    <form className="add-todo">
      <div className="todo-title" style={{ padding: "0" }}>
        <svg
          style={{ margin: "8px 8px" }}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12.5721"
            cy="12"
            r="12"
            fill="url(#paint0_linear_10_806)"
          />
          <path
            d="M14.9036 9.96558H10.674C9.86398 10.8914 8.41235 12.7682 8.41235 14.342C8.41235 15.0527 8.72813 17.3718 12.7888 17.3718C16.8494 17.3718 17.1652 15.0527 17.1652 14.342C17.1652 12.7682 15.7136 10.8914 14.9036 9.96558Z"
            fill="white"
          />
          <path
            d="M12.4525 9.29478V7.94818H13.1258V9.29478H14.6804L16.027 6.60159H9.55127L10.8979 9.29478H12.4525Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_806"
              x1="-11.4279"
              y1="12"
              x2="12.5721"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BBB5E2" />
              <stop offset="1" stop-color="#9C92DF" />
            </linearGradient>
          </defs>
        </svg>

        <input
          type="text"
          placeholder="Add Todo"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <svg
          onClick={() => storeFormInput(props.id)} 
          style={{ marginLeft: "-2rem", color: "#353945", cursor:"pointer" }}
          width="27"
          height="30"
          viewBox="0 0 27 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.0454102"
            width="26.5426"
            height="30"
            rx="12"
            fill="#353945"
          />
          <path
            d="M19.2232 13.5226V16.9163H7.28442V13.5226H19.2232ZM14.8927 8.18182V22.514H11.6269V8.18182H14.8927Z"
            fill="white"
          />
        </svg>
      </div>
      <textarea
        placeholder="Add Todo Description"
        value={todoDesc}
        onChange={(e) => setTodoDesc(e.target.value)}
      />
    </form>
  );
}

export default AddTodo;
