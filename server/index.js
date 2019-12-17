const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./src/config/config');
const app = express();
const Post = require('./src/models/post-model');
const User = require('./src/models/user-model');

var session = require("express-session");

mongoose.Promise = global.Promise;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'LONG_RANDOM_STRING_HERE',
    resave: true,
    saveUninitialized: false
}));

mongoose.connect(config.dbURL, {useNewUrlParser: true});

mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`);
        app.listen(process.env.PORT || config.port,
            () => console.log(`Server start on port ${config.port} ...`))
    })
    .on('error', error => console.warn(error));

app.get('/companies', (req, res) => {

    Post.find({}, 'name price address', (err, posts) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send({posts: posts})
        }
    }).sort({_id: -1})
});

app.post('/companies', (req, res) => {
    const post = new Post({
        name: req.body.name,
        address: req.body.address,
        price: req.body.price
    });
    post.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                message: `Company with ID_${data._id} saved successfully!`
            })
        }
    })
});

app.post('/sign_in', (req, res) => {
    const user = User({
        email: req.body.email,
        role: req.body.role,
        password: req.body.password
    });
    user.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                message: `User with ID_${data.id} saved successfully!`
            })
        }
    })
});
