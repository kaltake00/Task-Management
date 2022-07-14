const db = require('../db');

const createComment = (req, res) => {
    
    const user_id = req.body.userID;
    const text = req.body.text;
    const task_id = req.body.taskID;

    db.query(
        "INSERT INTO comments (user_id, text, task_id) VALUES (?, ?, ?)",
        [user_id, text, task_id],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('Values inserted');
                console.log('Comment inserted')
            }
        })
};

const getAllCommentsByTaskID = (req, res) => {

    db.query("SELECT comments.id, comments.text, comments.task_id, comments.user_id, users.name FROM comments LEFT JOIN users ON comments.user_id=users.id WHERE task_id = " + req.params.taskid, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}


module.exports = {createComment, getAllCommentsByTaskID}