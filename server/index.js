const express = require('express');
const app = express();
const db = require('./db');

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const filestore = require('session-file-store')(session)

const customer_api = require('./queries/customers');
const user_api = require('./queries/users');
const tasks_api = require('./queries/tasks');
const comments_api = require('./queries/comments')

// app.use(cors({
//     origin: ['https://customer-relations.netlify.app', 'http://localhost:3000'],
//     methods: ["GET", "PUT", "POST", "DELETE"],
//     allowedHeaders: ['Content-Type', 'X-Requested-With'],
//     credentials: true
// }));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: "tryhackme",
    resave: false,
    saveUninitialized: true
}))


// AUTHENTICATION APIs 
app.post('/register', (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const role = "user";

    console.log(name, username, password, role)
    db.query('INSERT INTO users (name, username, password, role, email) VALUES (?, ?, ?, ?, ?)',
        [name, username, password, role, email],
        (err, result) => {
            if (err) {
                console.log(err)
                res.send({ err: err })
            } else {
                console.log('successfully inserted 1 record in users table')
                res.send({ message: "Succesfully inserted 1 record in users table" })
            }
        })
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            if (result.length > 0) {
                req.session.user = result[0]; // ovdje sam obrisao .id da vraca user id
                res.send({ user: result[0], auth: true, session: req.session.user })
            }
            else (
                res.send({ message: "Wrong credentials!" })
            )
        })
})

app.get('/login', (req, res) => {
    
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false, message: "You are not logged in" });
    }
})

// CUSTOMERS APIs 
app.post('/customer/create', customer_api.createCustomer);
app.get('/customers', customer_api.getCustomers);
app.put('/customer/edit/:id', customer_api.updateCustomerById);
app.delete('/customer/delete/:id', customer_api.deleteCustomerById)

// USERs APIs

app.get('/users', user_api.getAllUsers);
app.delete('/users/delete/:id', user_api.deleteUserById)

// TASKS APIs 

app.post('/tasks/create', tasks_api.createTask)
app.get('/tasks', tasks_api.getAllTasks);
app.get('/tasks/:id', tasks_api.getTasksByUserId);
app.delete('/tasks/delete/:id', tasks_api.deleteTaskById);
app.put('/tasks/edit/:id', tasks_api.updateTaskById);

// TASKS Comments

app.post('/tasks/comments/create', comments_api.createComment);
app.get('/tasks/comments/:taskid', comments_api.getAllCommentsByTaskID)

// Running the App
app.listen(process.env.PORT || 3001, () => {
    console.log('Yeey, your server is running on port 3001')
});