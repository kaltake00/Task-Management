import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri';
import {BsPencil} from 'react-icons/bs';
import {AiOutlineFileSearch} from 'react-icons/ai';

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
    const inspectTask = () => {
        props.onInspectTask(task_data)
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
                <div className="row-actions"> {/* checking if its rendering for my tasks */}
                    {forMyTasks 
                    ?<button className='cta-primary-btn view_task--btn' onClick={inspectTask} title='View more'><AiOutlineFileSearch /></button>
                    :<div className='buttons-wrapper'>
                        <button className='cta-primary-btn' onClick={deleteTask} title='Delete Task'><RiDeleteBin6Line /></button> 
                        <button className='cta-primary-btn edit' onClick={editTask} title='Edit Task'><BsPencil /></button>
                     </div>
                    }
                </div>
            </td>
        </tr>
    )
}

export default TaskTableRow