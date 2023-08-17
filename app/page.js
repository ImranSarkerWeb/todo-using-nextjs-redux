"use clinet";

import { ToDoLists } from "@/components";
import { AddToList } from "@/components/AddToList";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center px-4 gap-6">
      <p className="text-3xl font-semibold text-gray-100">Todo-List</p>
      <div className="w-full md:w-1/2 rounded-lg px-6 py-8 border border-zinc-800">
        {/* Add to list */}
        <AddToList />
        {/* all list items here */}
        <ToDoLists />
      </div>
    </div>
  );
};

export default Home;
