const mysql = require('mysql')
const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.message);
            return res.send('problema para conecar no banco');
        }

        console.log('connected as id ' + connection.threadId);
        connection.query('CREATE TABLE IF NOT EXISTS people(name VARCHAR(255))', () => {
            connection.query(`INSERT INTO people(name) values('Wesley')`, () => {
                connection.query('SELECT * FROM people', (error, results, fields) => {
                    if (error) throw error;

                    console.log('ok', results)

                    connection.end()
                    res.send(results)
                })
            })
        })
    });


})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})