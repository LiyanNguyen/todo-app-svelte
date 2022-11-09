import { readable, writable } from "svelte/store";

export let allTodos = writable([
  { name: "Complete online JavaScript course", status: false },
  { name: "Jog around the park 3x", status: false },
  { name: "10 minutes meditation", status: false },
  { name: "Read for 1 hour", status: false },
  { name: "Pick up groceries", status: false },
  { name: "Complete Todo App on Svelte", status: false },
]);

export let viewAllTodosIsSelected = writable(true);
export let viewActiveTodosIsSelected = writable(false);
export let viewCompletedTodosIsSelected = writable(false);

export function showAllTodos () {
		viewAllTodosIsSelected.set(true);
		viewActiveTodosIsSelected.set(false);
		viewCompletedTodosIsSelected.set(false);
	}

export function showActiveTodos() {
  viewAllTodosIsSelected.set(false);
  viewActiveTodosIsSelected.set(true);
  viewCompletedTodosIsSelected.set(false);
}

export function showCompletedTodos() {
  viewAllTodosIsSelected.set(false);
  viewActiveTodosIsSelected.set(false);
  viewCompletedTodosIsSelected.set(true);
}