"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOM = __importStar(require("react-dom/client"));
const react_1 = __importDefault(require("react"));
const highlight_js_1 = __importDefault(require("highlight.js"));
require("./site.css");
require("cssville/cssville.css");
const react_router_dom_1 = require("react-router-dom");
const HomePage_1 = require("./components/pages/HomePage");
const ChipPage_1 = require("./components/pages/ChipPage");
const TypographyPage_1 = require("./components/pages/TypographyPage");
const ButtonPage_1 = require("./components/pages/ButtonPage");
const router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: react_1.default.createElement(HomePage_1.HomePage, null),
    },
    {
        path: "/chip",
        element: react_1.default.createElement(ChipPage_1.ChipPage, null),
    },
    {
        path: "/button",
        element: react_1.default.createElement(ButtonPage_1.ButtonPage, null),
    },
    {
        path: "/typography",
        element: react_1.default.createElement(TypographyPage_1.TypographyPage, null)
    }
]);
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    }
    else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
docReady(function () {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router }));
    highlight_js_1.default.highlightAll();
});
