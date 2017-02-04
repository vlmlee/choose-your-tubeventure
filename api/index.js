'use strict';

const app = require('./api');

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
