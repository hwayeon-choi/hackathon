// controller
"use strict";

const User = require("../../model/User");

// page rendering 함수
const output = {
  home : (req, res) => {
    res.render("home/index");
  },
  login : (req, res) => {
    res.render("home/login");
  },
  register : (req, res) => {
    res.render("home/register");
  },
  profile : (req, res) => {
    res.render("home/profile");
  },
  userDelete : (req, res) => {
    res.render("home/userDelete");
  },
  userEdit : (req, res) => {
    res.render("home/userEdit");
  },
  userUpload : (req, res) => {
    res.render("home/userUpload");
  },
  loginCheck : (req, res) => {
    if(req.session.loginData) {
      res.send({ loggedIn : true, loginData : req.session.loginData });
    } else {
      res.send({ loggedIn : false });
    }
  }
};

// frontend 가 전달한 data를 받아와서 기능 처리
const process = {
  // req : frontend에서 전달한 request data (body로 받아온다)
  login : async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register : async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
  userDelete : async (req, res) => {
    const user = new User(req.body);
    const response = await user.userDelete();
    return res.json(response);
  },
  userEdit : async (req, res) => {
    const user = new User(req.body);
    const response = await user.userEdit();
    return res.json(response);
  },
  userUpload : async (req, res) => {
    const user = new User(req.body);
    const response = await user.userUpload();
    return res.json(response);
  },
  getProfile : async (req, res) => {
    const user = new User(req.body);
    const response = await user.getProfile();
    return res.json(response);
  },
  loginCheck : async(req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    req.session.displayName = user.id;
    req.session.save(() => {
      return res.json({
        state : true,
        msg : "로그인 세션 유지"
      })
    })
  }
}

module.exports = {
  output,
  process
};