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
const createStamp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.userId) {
            const newStamp = yield prisma.collection.create({
                data: req.body
            });
            res.json({
                status: "success",
                stamp: Object.assign({}, newStamp)
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
        res.json({
            status: "failed",
            message: err.meta.cause
        });
    }
});
const getMyStamps = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.userId) {
            const myStamps = yield prisma.collection.findMany({
                where: {
                    userId: req.body.userId
                }
            });
            // console.log(myStamps);
            res.json({
                status: "success",
                stamp: myStamps
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
        res.json({
            status: "failed",
            message: err.meta.cause
        });
    }
});
const getAllStamps = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stampCollection = yield prisma.collection.findMany({
            where: {
                NOT: {
                    userId: req.body.userId
                },
                sell: true
            }
        });
        // console.log(stampCollection);
        res.json({
            status: "success",
            collection: stampCollection
        });
    }
    catch (err) {
        res.json({
            status: "failed",
            message: err.meta.cause
        });
    }
});
const updateStamp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.userId) {
            console.log(req.body);
            const stamp = yield prisma.collection.update({
                data: Object.assign({}, req.body), where: {
                    id: req.params.id
                }
            });
            console.log(stamp);
            res.status(200).json({
                status: "success",
                stamp: stamp
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
        res.json({
            status: "failed",
            message: err.meta.target[0]
        });
    }
});
const deleteStamp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.userId) {
            const deleted = yield prisma.collection.delete({
                where: {
                    id: req.params.id
                }
            });
            console.log(deleted);
            res.status(200).json({
                status: "success",
                message: "deleted successfully",
                user: deleted
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
        res.json({
            status: "failed",
            message: err.meta.cause
        });
    }
});
const getStampById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.userId) {
            const stamp = yield prisma.collection.findFirst({
                where: {
                    id: req.params.stampId
                }
            });
            res.status(200).json({
                status: "Success",
                stamp: stamp
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
        res.json({
            status: "failed",
            message: err.meta.cause
        });
    }
});
const sellStamp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.userId) {
            const stamp = yield prisma.collection.update({
                where: { id: req.body.stampId },
                data: {
                    sell: true
                }
            });
            res.status(200).json({
                status: "Success",
                message: "sell status is active now",
                stamp: stamp
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
        res.json({
            status: "failed",
            message: err.meta.cause
        });
    }
});
exports.default = {
    createStamp,
    getMyStamps,
    getAllStamps,
    updateStamp,
    deleteStamp,
    getStampById,
    sellStamp
};
//# sourceMappingURL=collectionController.js.map