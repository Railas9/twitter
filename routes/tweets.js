const router = require('express').Router();
const Tweet = require('../database/model/tweets.model')
const {findAllTweet, createTweet, tweetNew, deleteTweet, updateTweet, editTweet} = require('../controllers/tweet.controller')

router.get('/', findAllTweet)

router.get('/tweet/new', tweetNew)

router.post('/', createTweet)

router.get('/tweet/edit/:tweetId', editTweet)

router.post('/tweet/update/:tweetId', updateTweet)

router.delete('/:tweetId', deleteTweet)

module.exports = router;