"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const cssville_1 = require("./cssville");
var path = "build/cssville.css";
var css = cssville_1.Cssville.getCss();
fs.writeFile(path, css, () => { console.log("Done: " + path); });
