// console.log("Testing")
import { blankDocument } from "./blankProject";
import { intialDom } from "./intitalDom";
import { createToDo } from "./toDos";

blankDocument();
intialDom();

const myTodo = createToDo("Homework","do work","22/2/2024","High","To do list")

console.log("Pushing myTodo ",myTodo)