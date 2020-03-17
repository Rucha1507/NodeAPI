const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');

const userModel = require('../../NodeApi/app/api/models/user');

router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);



// router.post('/register', (req,res)=>{
//     console.log('===============================',req.body)
//     userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
//         if (err) {
//            console.log("error",err)           
//         }      
//         else
//          res.json({status: "success", message: "User added successfully!!!", data: null});      
//       });
// });


module.exports = router;