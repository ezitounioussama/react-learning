import React, { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superpower, setPower] = useState("");
  const [displayHero, setDisplayHero] = useState(false);

  return (
    <div className="App">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl capitalize">
            Build a hero
          </h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>
      </div>
      <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div>
          <label for="name" className="sr-only">
            Name
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm capitalize"
              placeholder="enter your hero name"
              onChange={(event) => setName(event.target.value)}
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" className="sr-only">
            Age
          </label>
          <div className="relative">
            <input
              type="number"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm capitalize"
              placeholder="enter your hero age"
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
        </div>

        <div>
          <label for="height" className="sr-only">
            Height
          </label>

          <div className="relative">
            <input
              type="number"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm capitalize"
              placeholder="enter your hero height"
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
        </div>
        <div>
          <label for="superpower" className="sr-only">
            SuperPower
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm capitalize"
              placeholder="enter your hero SuperPower"
              onChange={(event) => setPower(event.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={(event) => {
              setDisplayHero(true);
            }}
            type="button"
            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Display Character
          </button>
        </div>
      </form>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl capitalize">
            Hero Character
          </h1>
          {displayHero && (
            <article class="rounded-xl border-2 border-gray-100 bg-white">
              <div class="flex items-start p-6">
                <span class="block shrink-0">
                  <img
                    alt="Speaker"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    class="h-14 w-14 rounded-lg object-cover"
                  />
                </span>

                <div class="ml-4">
                  <h3 class="font-medium sm:text-lg underline">{name}</h3>

                  <p class="text-sm text-gray-700 line-clamp-2">Age : {age}</p>

                  <div class="mt-2 sm:flex sm:items-center sm:gap-2">
                    <div class="flex items-center text-gray-500">
                      <p class="ml-1 text-xs">{height} cm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-end">
                <strong class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-blue-600 py-1.5 px-3 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>

                  <span class="text-[10px] font-medium sm:text-xs">
                    {superpower}
                  </span>
                </strong>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
