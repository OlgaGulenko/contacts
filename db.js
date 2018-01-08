'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://helga:8TXMCTK@ds247047.mlab.com:47047/gulenko_contactsapp', err => {

    // mongo ds247047.mlab.com:47047/gulenko_contactsapp -u <dbuser> -p <dbpassword>
    if (err) {
        console.log(err);
    }
    console.log('Connect');
});

module.exports = mongoose;