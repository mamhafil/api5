function addTask() {
	// body...
	const taskInput = document.getElementById('taskInput');
	const taskText = taskInput.value.trim();

	if (taskText !== ''){
		const taskList = document.getElementById('taskList');
		const newTask = document.createElement('li');
		newTask.innerHTML = `${taskText} <button onclick="removeTask(This)">Remove</button>`;
		taskList.appendChild(newTask);
		taskInput.value='';
	}
}

function removeTask(button){
	button.parrentElement.remove();
}

correct this code