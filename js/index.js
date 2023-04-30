import {
  addNewTask,
  onClickTaskBehaviour,
  fillTasksList,
  addNewTaskPressEnter,
} from "./functional.js";
import refs from "./refs.js";

refs.addBtn.addEventListener("click", addNewTask);
document.addEventListener("keydown", addNewTaskPressEnter);
refs.myUl.addEventListener("click", onClickTaskBehaviour);

window.addEventListener("DOMContentLoaded", fillTasksList);
