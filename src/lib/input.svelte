<script>
  import { allTodos } from "./sharedState";
	let newTodo;

	function handleEvent (event) {
		if(event.key == "Enter") {
			$allTodos.push({name: newTodo, status: false});
			$allTodos = $allTodos; //redeclare the array to trigger svelte reactivity
			// Methods that mutate arrays or objects will not trigger updates by themselves
			newTodo = "";
		}
	}
</script>

<div class="inputContainer">
	<div class="circle"></div>
	<input bind:value={newTodo} on:keydown={handleEvent} type="text" placeholder="Create a new task...">
</div>


<style>
.inputContainer {
	position: relative;
	padding: 2rem 0;
}

.inputContainer .circle {
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 50%;
	border: .1rem solid var(--vdgb);
	position: absolute;
	top: 0;
	bottom: 0;
	margin-top: auto;
	margin-bottom: auto;
	left: 1.5rem;
}

input {
	width: 100%;
	padding: 1.5rem;
	padding-left: 3.5rem;
	outline: none;
	border: none;
	border-radius: .25rem;
	background-color: var(--vddb);
	color: var(--lgb);
	font-size: 1rem;
	font-family: 'Josefin Sans', sans-serif;
	caret-color: var(--brightBlue);
	/*something new to learn*/
}

input::placeholder {
	color: var(--dgb);
}
</style>