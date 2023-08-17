"use client";
import { AddToList, ToDoLists } from "@/components";
import store from "@/context/store";

import { Provider } from "react-redux";

const Home = () => {
  return (
    <DataProvider>
      <div className="w-screen h-screen flex flex-col justify-center items-center px-4 gap-6">
        <p className="text-3xl font-semibold text-gray-100">Todo-List</p>
        <div className="w-full md:w-1/2 rounded-lg px-6 py-8 border border-zinc-800">
          {/* Add to list */}
          <AddToList />
          {/* all list items here */}
          <ToDoLists />
        </div>
      </div>
    </DataProvider>
  );
};

const DataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default Home;
