const express=require("express");
const {created,fetched,updated,deleted,searched}=require("../../Controllers/adminController");
const route=require("../adminRoutes")

route.post("/created" ,created)
route.get("/fetched",fetched);
route.put("/updated",updated);
route.delete("/deleted",deleted);
route.get("/searched",searched);
module.exports=route;