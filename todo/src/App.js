import "./App.css";
import { useState, useRef } from "react";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  let inputTask = useRef(null);
  const addTask = () => {
    setTodoList([...todoList, { task: task, completed: false }]);
    inputTask.current.value = "";
    setTask("");
  };

  const deleteTask = (taskToDelete) => {
    setTodoList(
      todoList.filter((tasks) => {
        return tasks.task !== taskToDelete;
      })
    );
  };

  const completeTask = (taskToComplete) => {
    setTodoList(
      todoList.map((task) => {
        return task.task === taskToComplete
          ? { task: taskToComplete, completed: true }
          : { task: task.task, completed: task.completed ? true : false };
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-96 absolute top-10">
        <h1 className="mx-auto text-center mb-5 text-2xl font-bold underline underline-offset-8">
          Your Fav Todo App
        </h1>
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
              />
            </svg>
          </div>
          <input
            ref={inputTask}
            type="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Insert tasks you want to do .."
            onChange={(event) => {
              setTask(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) addTask();
            }}
            required
          />
          <button
            onClick={addTask}
            type="button"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Task
          </button>
        </div>
      </div>
      <article className="rounded-xl border border-gray-700 bg-gray-100 p-4">
        <ul className=" space-y-2 w-96">
          {todoList.map((val, key) => {
            return (
              <li
                key={key}
                className="font-medium flex justify-between items-center text-black  h-full rounded-lg border border-gray-700 p-4 hover:border-red-600"
              >
                {val.task}
                <div>
                  <button onClick={() => deleteTask(val.task)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 m-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                      />
                    </svg>
                  </button>
                  <button onClick={() => completeTask(val.task)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 m-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                  </button>
                </div>
                {val.completed ? (
                  <span>TASK COMPLETED</span>
                ) : (
                  <span>TASK NOT COMPLETED</span>
                )}
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
}

export default App;
