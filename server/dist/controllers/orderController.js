"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const order = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        if (req.body.userId) {
            const newOrder = yield prisma.orders.create({
                data: req.body
            });
            yield prisma.cart_items.delete({
                where: {
                    stampId: req.body.stampId
                }
            });
            yield prisma.collection.update({
                where: {
                    id: req.body.stampId
                },
                data: {
                    userId: req.body.userId,
                    sell: false
                }
            });
            res.status(200).json(newOrder);
        }
        else {
            res.status(401).json({
                status: "failed",
                message: "unauthorized"
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.userId) {
            const myOrders = yield prisma.orders.findMany({
                where: {
                    userId: req.body.userId
                }
            });
            res.status(200).json({
                status: "success",
                orders: myOrders
            });
        }
        else {
            res.status(401).json({
                status: "failed",
                message: "unauthorized"
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
exports.default = {
    order,
    getOrders
};
//# sourceMappingURL=orderController.js.map