"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var compression_1 = __importDefault(require("compression"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.set('port', process.env.PORT || 4000);
app.use(cors_1.default());
app.use(compression_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/v1', routes_1.default);
app.listen(app.get('port'), function () {
    console.log("Server running on port " + app.get('port'));
});
