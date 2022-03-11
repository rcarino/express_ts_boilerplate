import dotenv from "dotenv";
import express from "express";
import path from "path";
import {indexRouter} from "./routes";
import {helloRouter} from "./routes/hello";

// Used tutorial from Okta to setup a TS-express, static app.ts server
// https://developer.okta.com/blog/2018/11/15/node-express-typescript#a-better-way-to-manage-configuration-settings-in-nodejs
// Halted before auth and DB set up. Kind of did my own thing for routing.

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.use('/', indexRouter);
app.use('/hello', helloRouter);

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
