import React, { useState, useEffect } from 'react';
import './TaskModal.css'

function TaskModal(props) {
	var today = new Date();
	var year = today.getFullYear()
	var month = (today.getMonth() + 1)
	var day =  today.getDate()
	if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    var date = year + '-' + month + '-' + day // getting date format YYYY-MM-DD

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [user_id, setUser_id] = useState('null')
    const [status, setStatus] = useState('Not Assigned')
	const [endingDate, setEndingDate] = useState(date)
	//
	const data = props.taskData;
	const users = props.users;

	useEffect(() => {
		if (props.editingTask){
			console.log(data.ended_at)
			const userID = users.find(user => user.name === data.name)
			if (!userID){
				setUser_id('null');
			}else {
				setUser_id(userID.id);
			}
			console.log(userID)
			setTitle(data.title)
			setDescription(data.description)
			setStatus(data.status)
			setEndingDate(data.ended_at)
		}
	}, [])
    // ///////////////////////////////////// Handling Input changes
    
    const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	}
    const descriptionChangeHandler = (event) => {
		setDescription(event.target.value);
	}
    const userChangeHandler = (event) => {
		setUser_id(event.target.value);
	}
    const statusChangeHandler = (event) => {
		setStatus(event.target.value);
	}
	const endingDateChangeHandler = (event) => {
		setEndingDate(event.target.value)
	}
    // // ///////////////////////////////////// HANDLING MODAL ATIVITIES
    function onTaskSubmit(e){
		e.preventDefault();
		
		if (props.editingTask){
			const taskData = {
				id: data.id,
				title: title,
				description: description,
				user_id: user_id,
				status: status,
				ending_at: endingDate
			}
			props.onSaveEditedTask(taskData)
		} else {
			const taskData = {
				title: title,
				description: description,
				user_id: user_id,
				status: status,
				ending_at: endingDate
			}
			props.onSubmitTask(taskData); // sending data to parent
		}

		closeModal(); // closing popup modal
        // reseting to default values
		setTitle('');
		setDescription('');
		setUser_id('');
		setStatus('');
		setEndingDate('')
	}

    function closeModal(){
		props.onCloseModal()
	}

    return (
        <div className='customer-modal'>
			<div className="backdrop" onClick={closeModal}></div>
			<div className="modal-card">
				<div className="modal-header">
					<h2>Add new task</h2>
				</div>
				<div className="modal-content">
					<form onSubmit={onTaskSubmit}>
						<div className='form-group'>
							<label>Task Title</label>
							<input value={title ?? ""} onChange={titleChangeHandler} required></input>
						</div>
						<div className='form-group'>
							<label>Description</label>
							<input value={description ?? ""} onChange={descriptionChangeHandler} required></input>
						</div>
						<div className='form-group'>
							<label>Select User</label>
							<select value={user_id ?? ""} onChange={userChangeHandler} required>
								<option value="null" defaultValue>Select your option</option>
								{users.map(user => <option key={user.id} value={user.id}>ID: {user.id} - {user.name}</option>)}
							</select>
						</div>
						<div className='form-group'>
							<label>Status</label>
							<select value={status ?? ""} onChange={statusChangeHandler}>
								<option selected value="Not Assigned">Not Assigned</option>
								<option value="Not Started">Not Started</option>
								<option value="In production">In Production</option>
								<option value="Finished">Finished</option>
								<option value="Rejected">Rejected</option>
								<option value="Accepted">Accepted</option>
							</select>
						</div>
						
						<div className='form-group'>
							<label>Ending At</label>
							<input type='date' value={endingDate ?? ""} onChange={endingDateChangeHandler} required></input>
						</div>
						<div className='form-actions'>
							<button type='submit' className='submit-task'>{props.editingTask ? 'Save' : 'Create'}</button>
							<button onClick={closeModal} className="close-modal">Close</button>
						</div>
					</form>
				</div>
			</div>
		</div>
    )
}

export default TaskModal