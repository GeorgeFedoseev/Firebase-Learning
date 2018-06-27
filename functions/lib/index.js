"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const express = require("express");
const app = express();
app.get("/*", (req, resp) => {
    resp.send(`${Date.now()}`);
});
exports.app = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map