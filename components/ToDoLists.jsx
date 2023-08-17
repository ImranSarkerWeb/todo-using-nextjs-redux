"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
const ToDoLists = () => {
  return (
    <div className="w-full bg-zinc-800 my-4 rounded-lg px-4 py-3 flex flex-col items-center justify-center gap-2">
      <ListCard key={1} index={1} item={"Sample new item"} />
      <ListCard key={2} index={2} item={"Sample new item"} />
      <ListCard key={3} index={3} item={"Sample new item"} />
      <ListCard key={4} index={4} item={"Sample new item"} />
      <ListCard key={5} index={5} item={"Sample new item"} />
      <ListCard key={6} index={6} item={"Sample new item"} />
      <ListCard key={7} index={7} item={"Sample new item"} />
      <ListCard key={8} index={8} item={"Sample new item"} />
    </div>
  );
};

const ListCard = ({ index, item }) => {
  return (
    <motion.div
      className="w-full bg-black px-4 py-3 rounded-lg flex items-center justify-between"
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <p className="text-lg text-[#555] font-semibold">{item}</p>
      <motion.div className=" cursor-pointer" whileTap={{ scale: 0.9 }}>
        <MdDelete className="text-2xl text-red-500" />
      </motion.div>
    </motion.div>
  );
};

export default ToDoLists;
