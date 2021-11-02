"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Home_1 = __importDefault(require("./controllers/Home"));
var Data_1 = __importDefault(require("./controllers/Data"));
var LoginAutomate_1 = __importDefault(require("./controllers/LoginAutomate"));
var app = express_1.default.Router();
app.use('/', Home_1.default);
app.use('/data', Data_1.default);
app.use('/loginautomate', LoginAutomate_1.default);
exports.default = app;
