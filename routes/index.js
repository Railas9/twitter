const router = require('express').Router();
const tweets = require('./tweets')


router.use('/tweets', tweets);

router.get('/',(req,res) => {
    res.redirect('/tweets')
})




module.exports = router


//   const promesse1 = new Promise(resolve => {
//       setTimeout(() => resolve('données 1'), 1000);
//     });
//   const promesse2 = new Promise(resolve => {
//         setTimeout(() => resolve('données 2'), 6000);
//       });
  
  
//   async function needDataToDoSomething() {
//     const data = await Promise.all([promesse1,promesse2])
//     console.log(data);
//     return data
//   }
  
//   needDataToDoSomething();
//   console.log('Non bloquant !');