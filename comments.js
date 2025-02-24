//Create web server
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/comments', (req, res) => {
    let comments = fs.readFileSync('comments.json');
    comments = JSON.parse(comments);
    res.send(comments);
});

app.post('/comments', (req, res) => {
    let comments = fs.readFileSync('comments.json');
    comments = JSON.parse(comments);
    let newComment = {
        id: comments.length,