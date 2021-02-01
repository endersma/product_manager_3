const mongoose = require('mongoose');

const dbName = "product-api";

mongoose
    .connect("mongodb://localhost/" + dbName, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('You have successfully connected to the database!'))
    .catch((err) => console.log(`Something seems to have gone wrong: ${err}`));