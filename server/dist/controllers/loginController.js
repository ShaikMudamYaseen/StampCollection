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
const jsonwebtoken_1 = require("jsonwebtoken");
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const prisma = new client_1.PrismaClient();
// const jwt= Jwt
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.users.findFirst({
            where: {
                email: req.body.email
            }
        });
        if (user) {
            const pass = yield (0, bcrypt_1.compareSync)(req.body.password, user.password);
            if (pass) {
                const token = yield (0, jsonwebtoken_1.sign)({ id: user.id }, process.env.ACCESS_TOKEN_SECRET);
                res.cookie('jwt', token, { httpOnly: true });
                res.status(200).json({
                    status: "success",
                    user: {
                        userName: user.userName,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    },
                    token: token
                });
            }
        }
        else {
            res.status(400).json({
                status: 'failed',
                message: "user not found"
            });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.default = login;
//# sourceMappingURL=loginController.js.map