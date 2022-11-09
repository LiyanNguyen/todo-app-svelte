<script>
	import { allTodos } from "./sharedState";
	export let itemIndex;

	function deleteItem () {
		console.log(itemIndex);
		$allTodos.splice(itemIndex, 1);
		$allTodos = $allTodos;
	}
</script>

<button on:click={deleteItem}><img src="icon-cross.svg" alt="x icon"></button>

<style>
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		margin-left: auto;
	}
	
	img {
		display: block;
	}
</style>