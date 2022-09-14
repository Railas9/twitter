const { set } = require('mongoose')
const Tweet = require('../database/model/tweets.model')

exports.getTweets = () =>{
   return Tweet.find({}).exec()
}

exports.saveTweet = (tweet) =>{
    const newTweet = new Tweet(tweet)
    return newTweet.save()
 }

 exports.tweetDelete = (tweet) =>{
    return Tweet.findByIdAndDelete(tweet).exec()
 }
 exports.getTweet = (tweet) =>{
   return Tweet.findOne({ _id:tweet}).exec()
}
 exports.updateTweet = (tweet, content) =>{
   return Tweet.findByIdAndUpdate(tweet, { $set: content }, { runValidators: true}).exec()
}
