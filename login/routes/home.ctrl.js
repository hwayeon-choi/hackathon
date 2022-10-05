"use strict";

function hello (request,response){
    response.render("home/index");
};

function login (request,response){
    response.render("home/login");
};

module.exports = {
    hello,
    login,
};