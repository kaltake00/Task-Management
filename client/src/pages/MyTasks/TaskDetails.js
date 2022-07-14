import React, { useEffect, useState } from 'react'
import Axios from "axios";

import './TaskDetails.css'
import {BiPaperPlane} from "react-icons/bi"


function TaskDetails(props) {

  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    fetchComments();
  }, [])

  async function fetchComments() {  //read
		const { data } = await Axios.get(`http://localhost:3001/tasks/comments/${task_data.id}`);
		setComments(data);
	}

  /////////////////////////////////////////
  const task_data = props.task_data;

  function closeTask() {
    console.log('closing task...')
    props.onCloseTask()
  }

  async function submitComment(){
    const commentData = {
      text: commentText,
      userID: props.user,
      taskID: task_data.id
    }
		await Axios.post('http://localhost:3001/tasks/comments/create', commentData);
    setCommentText('');
    fetchComments();
  }

  return (
    <div className='taskDetails-wrapper'>
        <div className='backdrop' onClick={closeTask}/>
        <div className='taskDetails-card'>
          <div className='taskDetails-title--wrapper'>
            <h1 className='taskDetails-title'>{task_data.title}<span>(ID: {task_data.id})</span> </h1>
          </div>
          <div className='taskDetails-card-body'>
            <div className='taskDetails-main'>
              <div className='taskDetails-description--wrapper'>
                <h4>Description:</h4>
                <span>{task_data.description}</span>
              </div>
              
              <div className='taskDetails-comments--wrapper'>
                <h4>Comments:</h4>
                <div className='comments-container'>
              
                  {comments.map(commentRow => <div className='comment'> <span className='comment-name'>{commentRow.name}:</span> <span className='comment-text'>{commentRow.text}</span> </div>)}
                
                </div>
                <div className='comment-form'>
                  <input className='comment-input' value={commentText} type="text" placeholder="Write a new comment" onChange={(e)=>{setCommentText(e.target.value)}}></input>
                  <button title='Submit comment' onClick={submitComment}><BiPaperPlane /></button>
                </div>
              </div>
            </div>
            <div className='taskDetails-sidebar'>
              <div className='taskDetails-informations--wraper'>
                <h4>Details:</h4>
                <div className='taskDetails-informations'>
                  <div className='informations-created_at column'>
                      <span>Created at:</span>
                      <span>{task_data.created_at}</span>
                  </div>
                  <div className='informations-ending_at column'>
                      <span>Ending at:</span>
                      <span>{task_data.ended_at}</span>
                  </div>
                  <div className='informations-status column'>
                      <span>Status:</span>
                      <span>{task_data.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default TaskDetails