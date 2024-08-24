const express=require("express");
const{fetched,searched}=require("../../Controllers/userController");
const route=require("../../Routes/userRoutes")


route.get("/fetched",fetched);
route.get("/searched",searched);

module.exports=route;