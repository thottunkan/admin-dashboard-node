var express = require('express');
const { v4: uuidv4 } = require('uuid');
const async = require('hbs/lib/async');
const fb = require('../public/javascripts/firebase');
var router = express.Router();

/* GET users listing. */
router.get('/admin/adds-addu', function(req, res, next) {
  res.render("pages/samples/addsaddu.hbs");
});


router.post("/admin/adds-addu/addcust",(req,res,next)=>{
    
    const dbRef =  fb.database.collection("customers").doc(uuidv4());

    var userdoc ={
      name : req.body.name,
      address:  req.body.address,
      phone : req.body.phone
    }
    
    dbRef.set(userdoc).then((result)=>{
      res.send(result)
    });
   

});

var u =[]
//all users
router.get("/admin/adds-addu/allusers",async(req,res,next)=> {
  var userDocIds = []
  const users = await fb.database.collection("customers").listDocuments();
  users.forEach(element => {
      userDocIds.push(element._path.segments[1])
  });
  var allusers = userDocIds;
  var all = await getallusers(userDocIds);
  
  res.json(all)
  //res.render("pages/samples/allusers.hbs",{allusers})
  
});

async function  getallusers(userDocIds) {
  var userdetails = []
  let i = 0
    while(i < userDocIds.length){
      const id = userDocIds[i];
      await getFirebaseUser(id).then((result)=>{
        userdetails.push(result)
        console.log("called")
      });
      i++
    }
  return userdetails
 }

async function getFirebaseUser(id) {
  var user =  await fb.database.collection('customers').doc(id).get();
  return user;
}

module.exports = router;
