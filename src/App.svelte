<script>
  import FilterView from "./lib/filterView.svelte";
  import Input from "./lib/input.svelte";
  import ListDisplay from "./lib/listDisplay.svelte";
</script>

<main>
  <div class="topImage"></div>
  <div class="todoList">
    <div class="topDisplay">
      <h1>Todo</h1>
    </div>
    <Input/>
    <ListDisplay/>
    <FilterView/>
  </div>
</main>

<style>
.topImage {
	background-image: url(/public/bg-mobile-dark.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 200px;
}

.todoList {
	position: absolute;
	left: 1rem;
	right: 1rem;
	top: 3rem;
	margin-left: auto;
	margin-right: auto;
	margin-top: auto;
	display: flex;
	flex-direction: column;
}

.topDisplay {
	display: flex;
	align-items: center;
	justify-content: space-between;
	letter-spacing: 1rem;
	text-transform: uppercase;
	color: var(--vlg);
}

.topDisplay h1 {
	font-size: 3rem;
}

/* #themeSwitcher {
	cursor: pointer;
} */



/* .bottomDisplay+p {
	cursor: default;
	padding-top: 3rem;
	align-self: center;
	color: var(--dgb);
	font-size: 0.75rem;
} */

/* DESKTOP VIEWPORT */
@media screen and (min-width: 1366px) {
	.topImage {
		background-image: url(/public/bg-desktop-dark.jpg);
		min-height: 300px;
	}

	.todoList {
		top: 5rem;
		width: 580px;
	}
}
</style>
