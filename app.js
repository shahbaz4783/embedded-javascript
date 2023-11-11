import express from 'express';

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('<h1>This is EJS</h1>')
})

app.listen(port, () => {
    `Listning on Port ${port}`
})