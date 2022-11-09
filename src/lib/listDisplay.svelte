<script>
  import CheckBox from "./checkBox.svelte";
	import DeleteTodoItem from "./deleteTodoItem.svelte";
  import { each, once, prevent_default } from "svelte/internal";
  import {
		viewAllTodosIsSelected,
		viewActiveTodosIsSelected,
		viewCompletedTodosIsSelected,
		allTodos } from "./sharedState";

</script>

<ul>
	{#if $viewAllTodosIsSelected}
		{#each $allTodos as todoItem, listIndex}
			<li class:completed={todoItem.status}>
				<CheckBox elementIndex={listIndex} completed={todoItem.status}/>
				<!-- LEARNED SOMETHING HERE -->
				<!-- YOU CANNOT HAVE AN ELEMENT IN A EACHLOOP THEN BIND IT TO A FUNCTION ON THE SAME COMPONENT -->
				<!-- IT SHOULD BE A SEPERATE COMPONENT -->
				{todoItem.name}
				<DeleteTodoItem itemIndex={listIndex}/>
			</li>
		{/each}
	{:else if $viewActiveTodosIsSelected}
		{#each $allTodos as todoItem, listIndex}
			{#if todoItem.status == false}
				<li class:completed={todoItem.status}>
					<CheckBox elementIndex={listIndex} completed={todoItem.status}/>
					{todoItem.name}
					<DeleteTodoItem itemIndex={listIndex}/>
				</li>
			{/if}
		{/each}
	{:else if $viewCompletedTodosIsSelected}
		{#each $allTodos as todoItem, listIndex}
			{#if todoItem.status == true}
				<li class:completed={todoItem.status}>
					<CheckBox elementIndex={listIndex} completed={todoItem.status}/>
					{todoItem.name}
					<DeleteTodoItem itemIndex={listIndex}/>
				</li>
			{/if}
		{/each}
	{/if}
</ul>

<style>
ul {
	list-style: none;
	background-color: var(--vddb);
	border-radius: .25rem .25rem 0 0;
}

ul li {
	padding: 1.5rem;
	border-bottom: 1px solid var(--vdgb);
	color: var(--lgb);
	transition: 0.15s ease;
	display: flex;
	align-items: center;
	gap: 1rem;
}

ul li:hover {
	color: var(--vlg);
}

ul li.completed {
	color: var(--vdgb);
	text-decoration: line-through;
}
</style>