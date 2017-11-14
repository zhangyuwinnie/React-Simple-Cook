var express = require('express');
var app = express();
var recipeRouter = express.Router();

// Require Item model in our routes module
var Recipe = require('../models/Recipe');


// Defined get data(index or listing) route
recipeRouter.route('/').get(function (req, res) {
  console.log("recipeRoutes, index");

  Recipe.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      res.json(itms);

      // console.log(items);
    }
  });
});

recipeRouter.route('/recipes').get(function(req, res){
  ingres = req.query;
  console.log("recipeRoutes, recipes");
  console.log(req.query);
  Recipe.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      // res.json(itms);

      console.log(itms);
    }
  });
});

module.exports = recipeRouter;