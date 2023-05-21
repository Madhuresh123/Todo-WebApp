import React, { useState } from "react";


function TodoList() {
  const [list, setList] = useState("");
  const [listAdded, setListAdded] = useState(false);

  const handleListAdd = () => {
    setListAdded(true);
  };

  return (
    <div className="list" style={{ display: "flex" }}>
      {/* list got have */}
      {!listAdded ? (
        <form className="todo-list">
          <input
            style={{ fontWeight: "600", fontSize: "16px" }}
            type="text"
            value={list}
            onChange={(e) => setList(e.target.value)}
            placeholder="Add Todo-List"
          />

<svg
            style={{
              marginLeft: "-3rem",
              marginBottom: "-10px",
              color: "#353945",
              cursor: "pointer",
            }}
            onClick={handleListAdd}
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
          

        </form>
      ) : (
        <div className="entered-todo-list">
          <p style={{ color: "white" }}>List: {list} </p>
        </div>
      )}
    </div>
  );
}

export default TodoList;
