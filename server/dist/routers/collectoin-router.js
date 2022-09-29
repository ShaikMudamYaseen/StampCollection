"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const express_1 = __importDefault(require("express"));
const collectionController_1 = __importDefault(require("../controllers/collectionController"));
const verify_jwt_1 = __importDefault(require("../middlewares/verify-jwt"));
const stamprouter = express_1.default.Router();
stamprouter.post('/createStamp', verify_jwt_1.default, collectionController_1.default.createStamp);
stamprouter.get("/getMyStamps", verify_jwt_1.default, collectionController_1.default.getMyStamps);
stamprouter.get("/stampCollection", collectionController_1.default.getAllStamps);
stamprouter.put('/updateStamp/:id', verify_jwt_1.default, collectionController_1.default.updateStamp);
stamprouter.delete('/deleteStamp/:id', verify_jwt_1.default, collectionController_1.default.deleteStamp);
exports.default = stamprouter;
//# sourceMappingURL=collectoin-router.js.map