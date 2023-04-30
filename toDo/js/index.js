import {
  addNewTask,
  onClickTaskBehaviour,
  fillTasksList,
} from "./functional.js";
import refs from "./refs.js";

refs.addBtn.addEventListener("click", addNewTask);
refs.myUl.addEventListener("click", onClickTaskBehaviour);

window.addEventListener("DOMContentLoaded", fillTasksList);
