import express from 'express';

const express = require('express')

const app = express();

app.use(express.static('./dist/socla-psi'));

app.get('/*', (req, res)=> {
    res.sendFile('index.html', {root: 'dist/socla-psi'})
});

app.listen(process.env.PORT || 8080);