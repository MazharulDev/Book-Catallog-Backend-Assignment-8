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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.create({
        data,
    });
    return result;
});
const getAllOrders = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const userToken = jsonwebtoken_1.default.decode(token);
    const userId = userToken.userId;
    let result = [];
    if (userToken.role === 'admin') {
        result = yield prisma_1.default.order.findMany({});
        return result;
    }
    else if (userToken.role === 'customer') {
        result = yield prisma_1.default.order.findMany({
            where: {
                userId,
            },
        });
    }
    return result;
});
const getOrderCustomerAndAdmin = (id, token) => __awaiter(void 0, void 0, void 0, function* () {
    const userToken = jsonwebtoken_1.default.decode(token);
    let result = [];
    if (userToken.role === 'admin') {
        result = yield prisma_1.default.order.findUnique({
            where: {
                id,
            },
        });
    }
    else if (userToken.role === 'customer') {
        const output = yield prisma_1.default.order.findUnique({
            where: {
                id,
            },
        });
        if ((output === null || output === void 0 ? void 0 : output.userId) === userToken.userId) {
            result = output;
        }
        else {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Your are not match userId');
        }
        // output?.userId===userToken.userId?result=output:throw new ApiError(httpStatus.BAD_REQUEST,"Your are not match userId")
    }
    return result;
});
exports.orderService = {
    createOrder,
    getAllOrders,
    getOrderCustomerAndAdmin,
};
