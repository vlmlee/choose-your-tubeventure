const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const app = express();

const MongoClient = mongodb.MongoClient,
    url = "mongodb://localhost:27017/tubeventure";

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.post('/validate/:id', (req, res) => {
    const id = new ObjectID(req.params.id);
    console.log(req.body.secret);
    // bcrypt req.body.secret and then compare
    MongoClient.connect(url, (err, db) => {
        if (err) return next(err);
        db.collection('adventures')
            .find({ _id: id, secret: req.body.secret })
            .count()
            .then(count => {
                if (count > 0) {
                    res.json({ allowed: true });
                } else {
                    res.json({ allowed: false });
                }
            });
        db.close();
    });
});

app.get('/search/:name', (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) return next(err);
        const regexpr = new RegExp('.*' + req.params.name + '.*');
        db.collection('adventures').find({ name: regexpr })
            .toArray((err, content) => {
                if (err) return next(err);
                res.json({ content: content });
            });
        db.close();
    });
});

app.get('/adventure/:id', (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) return next(err);
        db.collection('adventures').find({ id: req.params.id })
            .toArray((err, content) => {
                if (err) return next(err);
                res.json({ content: content });
            });
        db.close();
    });
});

app.post('/adventure/:id', (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) return next(err);
        db.collection('adventures').findOneAndUpdate(
            { _id: req.params.id },
            req.body.data,
            { upsert: true },
            (err, doc) => {
                if (err) next(err);
                res.send('Success');
            }
        );
        db.close();
    })
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send(err.message);
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

module.exports = app;
