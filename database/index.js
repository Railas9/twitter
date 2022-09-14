const mongoose = require('mongoose');
const Tweet = require('./model/tweets.model.js')


mongoose.connect('mongodb+srv://riles:1234@cluster0.vu5e7.mongodb.net/twitter?retryWrites=true&w=majority').then(()=>{
    console.log('connexion ok')
})

module.exports = mongoose;