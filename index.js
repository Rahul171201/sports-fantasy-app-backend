const port = 3000;
const url = "http://localhost:3000/";
let express = require('express');

// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

const app = express();
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send("Finally i learnt some backend");
});

app.listen(port, () => {
    console.log("Server running at port : " + port)
});
