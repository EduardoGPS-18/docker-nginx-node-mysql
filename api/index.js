const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const connection = mysql.createConnection({
  host: 'application-db',
  user: 'root',
  password: 'root',
  database: 'application-db',
})

app.get('/', (_, res) => {
  connection.query('SELECT * FROM users', (_, rows) => {
    res.send(
      `<h1>Full Cycle Rocks!</h1>
      ${(rows.length == 0) ? '<h2>No users found</h2>' : '<h2>Registered users</h2>'}
      <ul>
      ${rows.map((e) => `<li>${e.name} => ${e.email}</li>\n`).join('')}
      </ul>`
    )
  });
})

app.post('/', (req, res) => {
  const { email, name} = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  const values = [name, email];
  connection.query({sql,values}, (err) => {
    if(err) {
      return res.send(`<h1>An error ocurred ${err}</h1>`)
    }
    return res.send(`
      <h1>Full Cycle Rocks!</h1>
      <br>
      <p>Added user ${name}, ${email}!</p>
    `)
  })
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});