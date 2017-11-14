var express = require('express');
var app = express();
var recipeRouter = express.Router();

// Require Item model in our routes module
var Recipe = require('../models/Recipe');


// Defined get data(index or listing) route
recipeRouter.route('/').get(function (req, res) {

  // ingres = req.params.ingredients;
  // console.log("###");
  // console.log(ingres);
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

module.exports = recipeRouter;