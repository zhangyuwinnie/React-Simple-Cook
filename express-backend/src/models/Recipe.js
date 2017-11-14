var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Recipe = new Schema({
  recipe: {
    type: String
  },

},{
    collection: 'recipes'
});

module.exports = mongoose.model('Recipe', Recipe);
