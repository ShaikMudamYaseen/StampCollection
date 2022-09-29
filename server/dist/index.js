"use strict";
// @ts-ignore
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./routers/user-router"));
const login_route_1 = __importDefault(require("./routers/login-route"));
const collectoin_router_1 = __importDefault(require("./routers/collectoin-router"));
const cartItems_router_1 = __importDefault(require("./routers/cartItems-router"));
// import {config} from 'dotenv'
const app = (0, express_1.default)();
app.use(express_1.default.json());
// config()
// app.use(express.query())
app.use("/api/v1", user_router_1.default);
app.use("/api/v1/user", login_route_1.default);
app.use("/api/v1/collection", collectoin_router_1.default);
app.use("/api/v1/user/cart", cartItems_router_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map