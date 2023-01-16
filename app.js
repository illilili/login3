"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

//웹 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

// 한글, 공백 등 오류 해결
app.use(bodyParser.urlencoded({ extended: true }));
// const home = require("./routes/home");
app.use("/", home); // 미들 웨어

module.export = app;
