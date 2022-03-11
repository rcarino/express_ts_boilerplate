import express from "express";
import {Props} from "../views/test_tsx";

export const testTsxRouter = express.Router();

testTsxRouter.get("/", (req, res, next) => {
    const data: Props = { title: "Test", lang: "de" };
    res.render("test_tsx", data);
});
