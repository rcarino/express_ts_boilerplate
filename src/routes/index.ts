import express from "express";

export const indexRouter = express.Router();

/* GET home page. */
// indexRouter.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

// define a route handler for the default home page
indexRouter.get( "/", ( reqxs, res ) => {
    // render the index template
    res.render( "index", {title: 'hello'});
} );
