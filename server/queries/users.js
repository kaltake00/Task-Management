const db = require('../db')

const getAllUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
};

const deleteUserById = (req, res) => {
    db.query("DELETE FROM users WHERE id = " + req.params.id,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        })
}

module.exports = {getAllUsers, deleteUserById}