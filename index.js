const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const Mongoose = require('mongoose');
const app = express();
const Deporte = require('./schemas/deporte.js');
const compression = require('compression');
const cors = require('cors');
const User = require('./schemas/user');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }))

Mongoose.createConnection('mongodb://localhost:27017/better', { config: { autoIndex: false } });

app.use(cors());
app.use(compression());
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));
app.use('/', express.static("./src/main/webapp/"));

app.get('/admin/*', function (req, res) {
    res.sendFile(__dirname + '/src/main/webapp/resources/views/admin/index.html');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/src/main/webapp/resources/views/front/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.post('/register', function (req, res) {
    console.log("LLEGO", req.body)
    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {
        let userData = {
            email: req.body.email,
            username: req.body.username,
            birthDate: new Date(),//req.body.birthDate,
            password: req.body.password,
            //passwordConf: req.body.passwordConf,
        }

        console.log("TODOS PARAMS SETTEADOS")
        //use schema.create to insert data into the db
        User.create(userData, function (err, user) {
            if (err) {
                console.log("ERROR", err)
                return next(err)
            } else {
                console.log("user", user)
                return res.redirect('/');
            }
        });
    }
});


app.post('/login', function (req, res) {
    if (req.body.email &&
        req.body.password) {

            User.authenticate(req.body.email, req.body.password, function (err, user) {
                console.log("ERROR AUTH",err)
                if(err)
                    res.send(err)
                else
                    res.redirect('/')
                console.log("AUTH OK",res);
            });
    }
});

app.listen(3000, () => {
    console.log('listening on 3000')
})