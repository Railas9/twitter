const { getTweets, saveTweet, tweetDelete, updateTweet,getTweet } = require('../queries/tweet.queries')

exports.findAllTweet = async (req, res, next) => {
    try{
    const tweets = await getTweets()
    console.log(req.cookies)
    res.render('tweet/tweet-list', { tweets })
    }
    catch(err){
        next(err)
    }
}

exports.createTweet = async (req,res)=>{
    try{
        const body = req.body
        await saveTweet(body)
        res.redirect('/')
    }  
    catch(err){
        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
        res.status(400).render('tweet/tweet-form',{errors})
    }
}

exports.tweetNew = (req,res)=>{
    res.render('tweet/tweet-form', {tweet : {}})
}

exports.deleteTweet = async (req,res)=>{
    const tweet = req.params.tweetId;
    await tweetDelete(tweet)
    const tweets = await getTweets()
    res.render('includes/partials/partial.tweet.pug', { tweets })
}

exports.updateTweet = async (req,res)=>{
        const tweetId = req.params.tweetId
    try{
        const body = req.body
        await updateTweet(tweetId,body)
        res.redirect('/')
    }catch(err){
        console.log('hee')
        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
        const tweet = await getTweet(tweetId)
        res.status(400).render('tweet/tweet-form',{errors,tweet})
    }

}

exports.editTweet = async (req,res)=>{
    const tweetId = req.params.tweetId
    const tweet = await getTweet(tweetId)
    res.render('tweet/tweet-form', {tweet})
}