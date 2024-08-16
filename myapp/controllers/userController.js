const userSchema = require('../utils/validate.js');
let users = [];
let posts = [];

async function getRegister(req, res) {
  res.render("register");
}
async function register(req, res) {
  const { fName, lName, email, password } = req.body;

  const  error  = userSchema.schemaRegister.validate(req.body); 
  if (error) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const pushUser = {fName, lName, email, password};
  res.status(201).render("profile");
  users.push(pushUser);
  console.log(users);
}

async function getLogin(req, res) {
  res.render("login");
}

async function login(req, res) {
  const { email, password } = req.body;
  const { error }  = userSchema.schemaLogin.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = users.find((u) => u.email === email);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.render("profile");
}

async function getPost(req,res){
    res.render("post");
}

async function getProfile(req,res){
    res.render("profile");
}

async function userPost(req, res){
  const { title, description } = req.body;
  const newPost = {title, description, date: new Date()};
  posts.push(newPost);
  res.status(201).json(newPost);
}

module.exports = { getRegister, register, getLogin, login,getPost,getProfile,userPost};
