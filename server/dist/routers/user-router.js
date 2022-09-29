"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const verify_jwt_1 = __importDefault(require("../middlewares/verify-jwt"));
const router = express_1.default.Router();
router.post("/register", userController_1.default.addUser);
router.get("/user/:id", userController_1.default.getUserById);
router.get("/users", userController_1.default.getUser);
router.put("/updateUser", verify_jwt_1.default, userController_1.default.updateUser);
exports.default = router;
//# sourceMappingURL=user-router.js.map