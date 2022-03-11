import express from "express";

export const helloRouter = express.Router();

/* GET home page. */
helloRouter.get('/', (req, res) => {
    res.send('hello express');
});
