// controller
"use strict";

// const { rawListeners } = require("../../config/db");
const User = require("../../model/User");

// page rendering 함수
const output = {
  home : (req, res) => {
    res.render("home/index");
  },
  login : (req, res) => {
    res.render("home/login");
    // if(req.session.user_id) {
    //   console.log(req.session.user_id);
    //   return res.json({ status : 201, userInfo : req.session.user_id });
    // }
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
  }
};

// frontend 가 전달한 data를 받아와서 기능 처리
const process = {
  // req : frontend에서 전달한 request data (body로 받아온다)
  login : async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    if(response.success === true) {
      req.session.user_id = user.body.id;
      return res.json(response);
    } else {
      return res
        .clearCookie("connect.sid")
        .json(response);
    }
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
}

module.exports = {
  output,
  process
};