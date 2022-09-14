const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    maxlength: [140,'message trop long'],
    minlength: [1,'message trop court'],
    required: [true,'Entrez qqchose']
  }
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;