require("dotenv").config();
const { render } = require("express/lib/response");
const UserDetails = require('../models/userDetails');
const getHome = (req, res) => {
  res.render('index', { title: 'Home' });
};

const getLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

const postLogin = (req, res) => {
  console.log(req.user);
}

const getDashboard = (req, res) =>{
  res.render('dashboard', { title: 'Dashboard' })
}

const logOut = (req, res)=>{
  req.logout(()=>{
  console.log("Logging out!")
  });
  res.redirect('/');
}

const register = (req, res)=>{
  console.log("register page")
  res.render('register', {title : 'register'});
}

const registerUser = (req, res) => {
  console.log(req.body.psw)

  try{
  if (req.psw==req.psw2){
    UserDetails.register({username:req.body.username, active: false}, req.body.psw);
    console.log("User is registered.")
    res.redirect("/login")
    }
    else{
      console.log("User info Invalid.")
      res.redirect("/")
    }
  } catch{
    console.log("AN ERROR OCCURRED")
  }
  
};



module.exports = { getHome, getLogin, postLogin, getDashboard, logOut, register, registerUser };
