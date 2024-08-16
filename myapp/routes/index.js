var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/register", controller.getRegister);
router.post("/register", controller.register);
router.get("/login", controller.getLogin);
router.post("/login", controller.login);
router.get("/post", controller.getPost);
router.get("/profile", controller.getProfile);
router.post("/post", controller.userPost);

module.exports = router;
