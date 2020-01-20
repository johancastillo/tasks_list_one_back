/*
===============
== Variables ==
===============
*/

const mongoose = require('mongoose');

const URI = 'mongodb://localhost/taskslist';

const connection = mongoose.connection;

/*
==========================
== Connection Data Base ==
==========================
*/

mongoose.connect(URI, () => {
    useNewUrlParse: true;
    useCreateIndex: true
});

