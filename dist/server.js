"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
if (!fs_1.default.existsSync(path_1.default.join(__dirname, 'data', 'login.json'))) {
    var obj = {
        username: [],
        password: []
    };
    fs_1.default.appendFile(path_1.default.join(__dirname, 'data', 'login.json'), JSON.stringify(obj), function (error) {
        if (error)
            throw error;
    });
}
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(5021, function () { return 'server running on port 5021'; });
