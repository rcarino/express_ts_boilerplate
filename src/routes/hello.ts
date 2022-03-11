import express from "express";
import axios from "axios";
import * as _ from "lodash";

export const helloRouter = express.Router();

/* GET home page. */
helloRouter.get('/', async (req, res) => {
    const jsonSample = (await axios.get('https://jsonplaceholder.typicode.com/todos/1')).data;
    res.json(_.merge({hello_express: 'i am a json merged with an axios API sample call'}, jsonSample));
});
