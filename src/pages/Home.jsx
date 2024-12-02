import UbdateInfo from "./UbdateInfo";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Home({ todos, setTodo, endedTodo }) {
  const [modalId, setModalId] = useState(null)
  const [todo, setTodos] = useState(null)


  const deleteButton = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

 

  return (
    <>
      <ul className="flex flex-wrap gap-10 max-w-5xl mx-auto">
        {todo && <UbdateInfo endedTodo={endedTodo} todo={todo}/>}
        {todos.map((todo) => (
          <li key={todo.id} className="card bg-neutral mt-10 w-96">
            <div className="card-body items-center">
              <h2 className="card-title">{todo.title}</h2>
              <p>{todo.desc ? todo.desc.slice(0, 60) + "..." : "No description available"}</p>
              <div className="card-actions justify-end items-start">
                <button className="btn" onClick={() => {
                  setModalId(todo.id)
                  setTodos(todo)
                  document.getElementById('todom').showModal()
                }}><FaPen/></button>
                <button onClick={() => deleteButton(todo.id)} className="btn"><MdDelete/></button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
