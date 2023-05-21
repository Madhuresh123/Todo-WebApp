import React from "react";

interface EditTodoProps {
    id: string;
    title: string;
    desc: string;
    todoInputData: any[];
    setEditClicked: React.Dispatch<React.SetStateAction<boolean>>;
    setEditTitle: React.Dispatch<React.SetStateAction<string>>;
    setEditDesc: React.Dispatch<React.SetStateAction<string>>;
    setEditId: React.Dispatch<React.SetStateAction<string>>;
  }
  

  function EditTodo(props: EditTodoProps) {


    const handleEditClick = (id: string) =>{ 
      const editTodo = props.todoInputData.find((element) => element.id === id)
      props.setEditClicked(true)
      props.setEditTitle(editTodo.title)
      props.setEditDesc(editTodo.desc)
      props.setEditId(editTodo.id)

      const visible = document.querySelector('.section-right') as HTMLElement;
      visible.style.display = 'inline'
    }


  return (
    <div className="add-todo">
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

        <p
          style={{
            color: "#FFFFFF",
            width: "11rem",
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          {props.title}
        </p>
        <svg
          style={{ marginLeft: "1rem", color: "#353945", cursor:"pointer" }}
          onClick={() => handleEditClick(props.id)}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="#353945" />
          <path
            d="M20.2189 7C19.8777 7 19.5365 7.13029 19.2761 7.39062L17.6667 9L21.0001 12.3333L22.6095 10.724C23.1302 10.2033 23.1302 9.35921 22.6095 8.83854L21.1616 7.39062C20.9012 7.13029 20.56 7 20.2189 7ZM16.3334 10.3333L8.50652 18.1602C8.50652 18.1602 9.11837 18.1053 9.34637 18.3333C9.57437 18.5613 9.38669 20.0533 9.66669 20.3333C9.94669 20.6133 11.4293 20.4162 11.642 20.6289C11.8546 20.8416 11.8399 21.4935 11.8399 21.4935L19.6668 13.6667L16.3334 10.3333ZM7.66667 20.3333L7.03776 22.1146C7.01304 22.1849 7.00027 22.2588 7 22.3333C7 22.5101 7.07024 22.6797 7.19526 22.8047C7.32029 22.9298 7.48986 23 7.66667 23C7.74119 22.9997 7.81513 22.987 7.88542 22.9622C7.8876 22.9614 7.88977 22.9605 7.89193 22.9596L7.90886 22.9544L7.91277 22.9518L9.66669 22.3333L8.66668 21.3333L7.66667 20.3333Z"
            fill="#B0B1C8"
          />
        </svg> 
      </div>
      <div
        style={{
          color: "#808191",
          marginLeft: "1rem",
          fontWeight: "500",
          fontSize: "16px",
          whiteSpace: "pre-line",
          height: "auto"
        }}
      >
        {props.desc}
      </div>
    </div>
  );
}

export default EditTodo;
