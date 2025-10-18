import type { TaskType } from "./types";

export function loadLocalStorage(): TaskType[] {
  const rawTaskList = localStorage.getItem("tasklist");
  console.log(rawTaskList);
  if (rawTaskList) {
    console.log(JSON.parse(rawTaskList));
    return JSON.parse(rawTaskList); // possible error
  } else {
    return [];
  }
}