"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verify_jwt_1 = __importDefault(require("../middlewares/verify-jwt"));
const cartItemsController_1 = __importDefault(require("../controllers/cartItemsController"));
const cartrouter = express_1.default.Router();
cartrouter.get("/items", verify_jwt_1.default, cartItemsController_1.default.getCartItems);
cartrouter.post("/addtocart", verify_jwt_1.default, cartItemsController_1.default.addToCart);
cartrouter.delete("/removeitem/:id", verify_jwt_1.default, cartItemsController_1.default.removeFromCart);
exports.default = cartrouter;
//# sourceMappingURL=cartItems-router.js.map