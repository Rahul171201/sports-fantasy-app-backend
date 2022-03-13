const port = 3000;
let express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Finally i learnt some backend");
});

app.listen(port, () => {
    console.log("Server running at port : " + port)
});
