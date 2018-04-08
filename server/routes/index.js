var express = require('express');
var router = express.Router();
const todos = require('./todos')
const auth = require('../middlewares/auth')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/todos', auth.check, todos)

module.exports = router;
