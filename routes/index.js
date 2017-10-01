var express = require('express');
var router = express.Router();
var User = require('../lib/User');

router.get('/', fuction(req, res, next){
  res.render('index',{title:'Express'});
});

router.post('/login',function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  User.findOne({email: email, password: password}, fuction(err, savedUser){
    if(err){
      console.console.log(err);
      return res.status(500).send();

    }if(!user) {
      return res.status(404).send();
    }
    return res.status(200).send();
  })
})

router.post('/register', fuction (req, res){
  var email = req.body.email;
  var password = req.body.password;
  var fullname = req.body.fullname;

  var newuser= new User();
  newuser.email = email;
  newuser.password = password;
  newuser.fullname = fullname;
  newuser.save(fuction(err, savedUser){
    if(err){
      console.console.log(err);
      return res.status(500).send();

    }else {
      return res.status(200).send();
    }
  })
})

module.exports = router;
