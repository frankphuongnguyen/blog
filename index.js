const express = require('express')
const app = express()
const port = 3000


// route
app.get('/', (req, res) => {
    var a = 1;
    var b = 3;
    let c = a + b;
    res.send({"value": c})
})

app.listen(port, () => console.log(`Example listening at http://localhost:${port}`))
