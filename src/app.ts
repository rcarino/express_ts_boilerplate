import dotenv from "dotenv";
import express from "express";
import { join, resolve } from "path";
import { setupReactViews } from "express-tsx-views";
import {indexRouter} from "./routes";
import {helloRouter} from "./routes/hello";
import {testTsxRouter} from "./routes/text_tsx";

// Used tutorial from Okta to setup a TS-express, static app.ts server
// https://developer.okta.com/blog/2018/11/15/node-express-typescript#a-better-way-to-manage-configuration-settings-in-nodejs
// Halted before auth and DB set up. Kind of did my own thing for routing.

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// Note: tsx and ejs are hard to get working together? Pick one
//
// TSX react views
// setupReactViews(app, {
//     viewsDirectory: resolve(__dirname, "views"),
//     prettify: true, // Prettify HTML output
// });

// Configure Express to use EJS
app.set( "views", join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.use('/', indexRouter);
app.use('/hello', helloRouter);

// app.use('/test_tsx', testTsxRouter);

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
