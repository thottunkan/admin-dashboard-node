var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/admin/adds-addu', function(req, res, next) {
  res.render("pages/samples/addsaddu.hbs");
});

module.exports = router;
