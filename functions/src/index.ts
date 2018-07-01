import * as firebase from 'firebase-admin'
import * as functions from 'firebase-functions';

import * as express from 'express'
import * as engines from 'consolidate'

import * as path from 'path'


const app = express();
app.engine('html', engines.handlebars);
app.set('views', './src/views');
app.set('view engine', 'html');


app.get("/test", (request, response) => {
    response.render('index', {number: 45});    
});

exports.app = functions.https.onRequest(app)
