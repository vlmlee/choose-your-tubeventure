const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongodb = require('mongodb');

const app = express();

const MongoClient = mongodb.MongoClient,
	url = "mongodb://localhost:27017/youtube";

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/video/:id', (req, res) => {
	MongoClient.connect(url, (err, db) => {
		if (err) {
			throw new Error('Unable to connect to database.');
		}

		let collection = db.collection('videos');

		collection.find({ id: req.params.id }).toArray((err, content) => {
			res.json({ content: content });
		});

		db.close();
	});
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;