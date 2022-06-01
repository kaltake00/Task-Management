import { useEffect, useState } from "react";
import Axios from "axios";

import './Tasks.css'
import TaskTableRow from "./TaskTableRow";
import TaskModal from "./TaskModal";

function Tasks() {

	const [tasks, setTasksList] = useState([]);
	const [users, setAllUsers] = useState([])

	const [isCreatingTask, setCreatingTask] = useState(false);
	const [isEditingTask, setEditingTask] = useState(false);
	const [singleTaskData, setSingleTaskData] = useState({})

	useEffect(() => {
		fetchTasks();
		fetchUsers();
	}, [])

	/////////////////////////////// TASKS API's
	async function createTask(taskData){  //create
		try {
			await Axios.post('http://localhost:3001/tasks/create', taskData);
		} catch (err) {
			// Handle Error Here
			console.error(err);
		}
		console.log('Created Task Data: ',taskData)
		fetchTasks();
	}
	async function fetchTasks() {  //read
		const { data } = await Axios.get('http://localhost:3001/tasks');
		setTasksList(data);
	}
	async function fetchUsers(){
		const { data } = await Axios.get('http://localhost:3001/users');
		setAllUsers(data);
	}
	async function updateTask(taskData) { //update
		await Axios.put(`http://localhost:3001/tasks/edit/${taskData.id}`, taskData);
		fetchTasks();
	}
	async function deleteTask(task_id) { // delete
		await Axios.delete(`http://localhost:3001/tasks/delete/${task_id}`)
		fetchTasks()
	}
	

	///////////// HANDLING MODAL FUNCTIONS
	const openCreateTaskModal = () => {			// handling opening modal
		setCreatingTask(true)
	}
	const openEditTaskModal = (task_id) =>{
		setEditingTask(true)
		setSingleTaskData(tasks.find(task => task.id === task_id))
	}
	const closeModal = () =>{					// handling closing modal
		setCreatingTask(false)
		setEditingTask(false)
	}
	///////////////////////////////////////
	return (
		<div className="page_wrapper">
			{isCreatingTask && <TaskModal onSubmitTask={createTask} onCloseModal={closeModal} users={users}/>}
			{isEditingTask && <TaskModal onSaveEditedTask={updateTask} onCloseModal={closeModal} editingTask={isEditingTask} taskData={singleTaskData} users={users}/>}  
			<div className="tasks-topbar">
				<h1>TASKS</h1>
				<p className='customer-hint'>Ok Buddy. There are all created tasks. You can easily manipulate with them using buttons in 'Actions' column.</p>
				<p className='customer-hint'>Also you can double click on sigle task to open a new widow to see more details about them.</p>
				<p className="customer-hint"><b>If it is a right time to create a new task you can easily by clicking on button below</b></p>
				<div className='add_task_wrapper'>
					<button className="add-task-btn cta-primary-btn" onClick={openCreateTaskModal}>
						Add Task
					</button>
				</div>
			</div>

			<div className='tasks-page_body'>
				<div className='tasks-table'>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>Description</th>
								<th>Assigned User</th>
								<th>Created At</th>
								<th>Ending At</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{tasks.map(row => <TaskTableRow rowData={row} key={row.id} onSubmitTask={createTask} onEditTask={openEditTaskModal} onDeleteTask={deleteTask} />)}
						</tbody>
					</table>
				</div>
			</div>

		</div>

	)
}

export default Tasks