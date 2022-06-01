const db = require('../db')

const createCustomer = (req, res) => {
    const name = req.body.name;
    const companyName = req.body.companyname;
    const email = req.body.email;
    const position = req.body.position;
    const collaboration = req.body.collaboration;

    var insertedCollabValue = false
    if (collaboration === 'yes') {
        insertedCollabValue = 1;
    } else {
        insertedCollabValue = 0;
    }

    db.query(
        "INSERT INTO customers (name, company_name, email, title, collaboration) VALUES (?, ?, ?, ?, ?)",
        [name, companyName, email, position, insertedCollabValue],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('Values inserted')
            }
        })
};

const getCustomers = (req, res) => {
    db.query("SELECT * FROM customers", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
}

const updateCustomerById = (req, res) => {
    const customer_id = req.params.id;
    const name = req.body.name;
    const companyName = req.body.companyname;
    const email = req.body.email;
    const position = req.body.position;
    const collaboration = req.body.collaboration;

    var insertedCollabValue = false
    if (collaboration === 'yes') {
        insertedCollabValue = 1;
    } else {
        insertedCollabValue = 0;
    }
    console.log(name, customer_id);
    db.query("UPDATE customers SET name = ?, company_name = ?, email = ?, title = ?, collaboration = ? WHERE id = ?",
        [name, companyName, email, position, insertedCollabValue, customer_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
};

const deleteCustomerById = (req, res) => {
    db.query("DELETE FROM customers WHERE id = " + req.params.id,
        (err, result) => {
            if (err) throw err;
            res.send(result);
        })
};

module.exports = {createCustomer, getCustomers, updateCustomerById, deleteCustomerById}