import * as firebase from 'firebase-admin'
import * as functions from 'firebase-functions';

import * as express from 'express'
import * as engines from 'consolidate'


const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './src/views');
app.set('view engine', 'hbs');


app.get("/test", (request, response) => {
    response.render('index', {number: 42});
});

exports.app = functions.https.onRequest(app)
