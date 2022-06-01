import React from 'react'

function TaskTableRow(props) {

    const task_data = props.rowData;
    const forMyTasks = props.forMyTasks; // using this variable if rendering this component for MyTasks

    const deleteTask = () =>{
        console.log('Deleting Task', task_data.id)
        props.onDeleteTask(task_data.id)
    }
    const editTask = () =>{
        props.onEditTask(task_data.id)
    }


    if (!task_data.name) { task_data.name = 'Not Assigned'}
    if (!task_data.ended_at) { task_data.ended_at = '/'}


    return (
        <tr>
            <td>{task_data.id}</td>
            <td className='nowrap-column'>{task_data.title}</td>
            <td className='description-column'>{task_data.description}</td>
            {!forMyTasks && <td>{task_data.name}</td>}
            <td>{task_data.created_at}</td>
            <td>{task_data.ended_at}</td>
            <td className='nowrap-column'>{task_data.status}</td>
            <td>
                <div className="row-actions">
                    <button onClick={editTask}>Edit Task</button>
                    <button onClick={deleteTask}>Delete Task</button>

                    {/* <button onClick={deleteCustomer} className='customer-delete'><RiDeleteBin6Line /></button>
                    <button onClick={updateCustomer} className='customer-edit'><BsPencil /></button> */}
                </div>
            </td>
        </tr>
    )
}

export default TaskTableRow