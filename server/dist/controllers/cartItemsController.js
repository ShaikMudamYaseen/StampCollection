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
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.userId) {
            const match = yield prisma.collection.findFirst({
                where: {
                    id: req.body.stampId,
                    userId: req.body.userId
                }
            });
            if (!match) {
                const sameItem = yield prisma.cart_items.findFirst({
                    where: {
                        stampId: req.body.stampId
                    }
                });
                console.log(sameItem);
                if (!sameItem) {
                    const itemDetails = yield prisma.cart_items.create({
                        data: req.body
                    });
                    res.status(201).json({
                        status: "success",
                        item: itemDetails
                    });
                }
                else {
                    res.status(400).json({
                        status: "failed",
                        message: "already in cart"
                    });
                }
            }
            else {
                res.status(400).json({
                    status: "failed",
                    message: "it is your stamp you cannot add to cart"
                });
            }
        }
        else {
            res.status(401).json({
                status: "failed",
                message: "unauthorized"
            });
        }
    }
    catch (err) {
        res.status(500).json({
            status: "failed",
            err: err
        });
    }
});
const removeFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.userId) {
            const deletedItem = yield prisma.cart_items.delete({
                where: {
                    cartItemId: req.params.id
                }
            });
            res.status(200).json({
                status: "success",
                item: deletedItem
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
        res.status(500).json({
            status: "failed"
        });
    }
});
const getCartItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.userId);
    try {
        if (req.body.userId) {
            const items = yield prisma.cart_items.findMany({
                where: {
                    userId: req.body.userId
                }
            });
            res.status(200).json({
                status: "success",
                item: items
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
        res.status(500).json({
            status: "failed"
        });
    }
});
exports.default = {
    addToCart,
    removeFromCart,
    getCartItems
};
//# sourceMappingURL=cartItemsController.js.map