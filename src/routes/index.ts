import express from "express";

export const indexRouter = express.Router();

// define a route handler for the default home page
indexRouter.get( "/", ( reqxs, res ) => {
    // render the index template
    res.render( "index", {title: 'hello'});
} );
