import React from 'react';
import { useEffect, useState } from 'react';
import Axios from "axios";

import TaskTableRow from '../Tasks/TaskTableRow';
//import TasksContext from "../../Context/TasksContext"

function MyTasks(props) {
    const user_informations = props.user;
    console.log('MyTasks User info',user_informations)

	const [tasks, setTasksList] = useState([]);
    async function fetchTasks() {  //read
		const { data } = await Axios.get(`http://localhost:3001/tasks/${user_informations.id}`);
		setTasksList(data);
	}

    useEffect(() => {
		fetchTasks();
	}, [])
    console.log('MyTasks component - tasks - ', tasks)
    ////////////////////////
    return (
        <div className="page_wrapper">
            <div className="tasks-topbar">
                <h1>MY TASKS - {user_informations.name}</h1>
                <p className='customer-hint'>Hi there. There are all created tasks that belong to you. You can easily see all details about every task that is given to you</p>
                <p className='customer-hint'>Also you can double click on sigle task to open a new widow to see more details about them.</p>
                <p className="customer-hint">Also You must to take care about your task and on a right time to update their status. <b>Keep an eye on deadline</b></p>
            </div>
            <div className='tasks-page_body'>
				<div className='tasks-table'>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>Description</th>
								{/* <th>Assigned User</th> */}
								<th>Created At</th>
								<th>Ending At</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{tasks.map(row => <TaskTableRow rowData={row} key={row.id} forMyTasks={true} />)}
						</tbody>
					</table>
				</div>
			</div>
        </div>
    )
}

export default MyTasks