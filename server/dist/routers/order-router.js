"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const express_1 = __importDefault(require("express"));
const orderController_1 = __importDefault(require("../controllers/orderController"));
const verify_jwt_1 = __importDefault(require("../middlewares/verify-jwt"));
const router = express_1.default.Router();
router.post("/createorder", verify_jwt_1.default, orderController_1.default.order);
router.get("/getorders", verify_jwt_1.default, orderController_1.default.getOrders);
exports.default = router;
//# sourceMappingURL=order-router.js.map