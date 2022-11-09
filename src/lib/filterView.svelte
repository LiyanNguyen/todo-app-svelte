<script>
  import { once } from "svelte/internal";
	import {
		viewAllTodosIsSelected,
		viewActiveTodosIsSelected,
		viewCompletedTodosIsSelected,
		showAllTodos,
		showActiveTodos,
		showCompletedTodos,
		allTodos }
		from "./sharedState";

	function clearCompletedTodos () {
		let activeTodos =  $allTodos.filter((el) => {
			if(el.status == false) {
				return el.name
			}
		})
		$allTodos = activeTodos;
	}

	// LOL this was smart
	$: count =  $allTodos.filter((el) => {return el.status == false}).length;

</script>

<div class="bottomDisplay">
	{#if count > 1}
		<p id="todoItemsLeft">{count} tasks left</p>
	{:else}
		<p id="todoItemsLeft">{count} task left</p>
	{/if}
	<div>
		<button on:click={showAllTodos} class:active={$viewAllTodosIsSelected}>All</button>
		<button on:click={showActiveTodos} class:active={$viewActiveTodosIsSelected}>Active</button>
		<button on:click={showCompletedTodos} class:active={$viewCompletedTodosIsSelected}>Completed</button>
	</div>
	<button on:click={clearCompletedTodos}>Clear Completed</button>
</div>

<style>
.bottomDisplay {
	display: flex;
	justify-content: space-between;
	padding: 1.5rem;
	background-color: var(--vddb);
	color: var(--dgb);
	font-size: 0.75rem;
	border-radius: 0 0 .25rem .25rem;
	align-items: center;
}

.bottomDisplay>p {
	cursor: default;
}

.bottomDisplay div {
	list-style: none;
	gap: 1rem;
	font-weight: 700;
	display: flex;
	flex-flow: column;
}

.bottomDisplay div button {
	cursor: pointer;
	transition: 0.15s ease;
	font-weight: 700;
	background-color: transparent;
	border: none;
	color: inherit;
	font-family: inherit;
	font-size: inherit;
}

.bottomDisplay div button:hover {
	color: var(--lgb);
}

.bottomDisplay div button.active {
	color: var(--brightBlue);
}

.bottomDisplay div+button {
	cursor: pointer;
	transition: 0.15s ease;
	background-color: transparent;
	border: none;
	color: inherit;
	font-family: inherit;
	font-size: inherit;
}

.bottomDisplay div+button:hover {
	color: var(--lgb);
}

@media screen and (min-width: 1366px) {
	.bottomDisplay div {
		flex-flow: row;
	}
}
</style>