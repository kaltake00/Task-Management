const db = require('../db');

const getAllTasks = (req, res) => {
    db.query("SELECT tasks.id, tasks.title, tasks.description, tasks.user_id, users.name, tasks.created_at, tasks.ended_at, tasks.status FROM tasks LEFT JOIN users ON tasks.user_id=users.id;", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}

const getTasksByUserId = (req, res) => {
    db.query("SELECT * FROM tasks WHERE user_id = " + req.params.id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}

const deleteTaskById = (req, res) => {
    db.query("DELETE FROM tasks WHERE id = " + req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
}

const createTask = (req, res) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() // getting date format YYYY-MM-DD

    const title = req.body.title;
    const description = req.body.description;
    const user_id = req.body.user_id;
    const created_at = date
    const ended_at = req.body.ending_at;
    const status = req.body.status;

    db.query(
        "INSERT INTO tasks (title, description, user_id, created_at, ended_at, status) VALUES (?, ?, ?, ?, ?, ?)",
        [title, description, user_id, created_at, ended_at, status],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('Values inserted')
            }
        })
};

const updateTaskById = (req, res) => {
    const task_id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const ending_at = req.body.ending_at;
    const status = req.body.status;
    const user_id = req.body.user_id;

    db.query("UPDATE tasks SET title = ?, description = ?, user_id = ?, ended_at = ?, status = ? WHERE id = ?",
        [title, description, user_id, ending_at, status, task_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
};


module.exports = {getAllTasks, getTasksByUserId, deleteTaskById, createTask, updateTaskById}