import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
//component

//pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import MainLoyout from "./loyouts/MainLoyout";
import Reade from "./pages/Reade";

//loyouts
const getInfoFromLocal = () => {
  return JSON.parse(localStorage.getItem("todo")) || [];
};

function App() {
  const [todo, setTodo] = useState(getInfoFromLocal());

  useEffect(() => {
    if (todo) {
      localStorage.setItem("todo", JSON.stringify(todo));
    }
  }, [todo]);

  const endedTodo = (t) => {
    setTodo((prev) => {
      return prev.map((todo) => {
        if (todo.id == t.id) {
          return { ...t };
        } else {
          return todo;
        }
      });
    });
  };
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLoyout />,
      children: [
        {
          index: true,
          element: (
            <Home todos={todo} setTodo={setTodo} endedTodo={endedTodo} />
          ),
        },
        {
          path: "/create",
          element: <Create setTodo={setTodo} />,
        },
        {
          path: "/reade",
          element: <Reade todos={todo} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
