<script>
	import { allTodos } from "./sharedState";
	export let elementIndex;
	export let completed = false;

	function check () {
		completed = true;
		$allTodos[elementIndex].status = true;
	}
</script>

<button on:click={check} class="checkBox" class:completed={completed}></button>

<style>
.checkBox {
	min-width: 1.25rem;
	min-height: 1.25rem;
	border-radius: 50%;
	border: .1rem solid var(--vdgb);
	cursor: pointer;
	transition: 0.15s ease;
	background-color: transparent;
	color: inherit;
	font-family: inherit;
	font-size: inherit;
}

.checkBox:hover {
	border: .1rem solid var(--lgb);
}

.checkBox.completed {
	border: none;
	background: url(/public/icon-check.svg), linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
	/* something new to learn */
	/* IMAGE FIRST , BEFORE THE LINEAR GRADIENT! */
	background-repeat: no-repeat;
	background-position: center;
	cursor: default;
}
</style>