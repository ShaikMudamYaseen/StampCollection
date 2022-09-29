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
const bcrypt_1 = require("bcrypt");
const prisma = new client_1.PrismaClient();
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (Object.keys(req.body).length == 0) {
            res.status(400).json({
                message: "Give the request body"
            });
        }
        else {
            const hasspass = yield (0, bcrypt_1.hashSync)(req.body.password, 12);
            // console.log(Object.keys(req.body));
            const newUser = yield prisma.users.create({
                data: {
                    userName: req.body.userName,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hasspass
                }
            });
            // console.log("hello");
            res.status(201).json(Object.assign({}, newUser));
            // res.send("khfkjds")
        }
    }
    catch (err) {
        console.log(err.meta.target);
        res.status(400).json(`${err.meta.target[0]} already`);
    }
});
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.users.findFirst({
        select: {
            id: true,
            userName: true,
            firstName: true,
            lastName: true,
            email: true
        },
        where: {
            id: req.params.id
        }
    });
    // console.log(users);
    if (users === null) {
        res.status(404).json({
            status: "failed",
            message: "user not found"
        });
    }
    else {
        res.status(200).json(users);
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.users.findMany({
        select: {
            id: true,
            userName: true,
            firstName: true,
            lastName: true,
            email: true
        }
    });
    res.status(200).json(users);
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.users.update({
        select: {
            id: true,
            userName: true,
            firstName: true,
            lastName: true,
            email: true
        },
        where: {
            id: req.body.userId
        },
        data: {
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }
    });
    res.json(user);
});
exports.default = {
    addUser,
    getUser,
    getUserById,
    updateUser
};
//# sourceMappingURL=userController.js.map