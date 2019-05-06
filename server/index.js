const Express =  require('express');
const PORT = 8080;
const app = Express();
let users = require('./users.json');
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    // console.log(users);
    res.send(users);
});

app.delete('/', (req,res) => {
    var id = req.body.id;
    console.log("ID receievd:", id);
    users = users.filter((user) => user.id!==id);
    res.send(users);
    }
);

app.use('/add', (req,res,next) => {
    var newUser = req.body;
    newUser['created_on'] = new Date();
    console.log("user:", newUser);
    req.newUser = newUser;
    next();
})

app.post('/add', (req,res) => {
    users.push(req.newUser);
    res.send(users)
})

app.listen(PORT, console.log(`Server listening at http://127.0.0.1:${PORT}`));