import * as functions from 'firebase-functions';
import * as express from 'express'

const app = express();
app.get("/*", (req, resp) => {
    resp.send(`${Date.now()}`);
});

exports.app = functions.https.onRequest(app)
