const express = require('express')
const app = express()
const port = 4001

app.get('/', (req, res) => res.send('Running port 4001 test github connect'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))