"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>PostgresUsersRepository
});
const _crypto = require("crypto");
const _jsonwebtoken = /*#__PURE__*/ _interopRequireDefault(require("jsonwebtoken"));
const _prisma = /*#__PURE__*/ _interopRequireDefault(require("../../config/prisma"));
const _bcrypt = /*#__PURE__*/ _interopRequireDefault(require("../../helpers/Bcrypt"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PostgresUsersRepository {
    async register(registerUserObject) {
        const { email , name  } = registerUserObject;
        const { password  } = registerUserObject;
        const newUserId = (0, _crypto.randomUUID)();
        const jwtToken = _jsonwebtoken.default.sign({
            userId: newUserId
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });
        const queryResponse = await _prisma.default.user.create({
            data: {
                id: newUserId,
                name,
                email,
                password: await _bcrypt.default.hash(password),
                jwt_token: jwtToken
            }
        });
        return {
            userRegistred: queryResponse,
            jwtToken
        };
    }
    async updateById(updateUserParamsObject) {
        const { name , email , password  } = updateUserParamsObject;
        const queryResponse = await _prisma.default.user.update({
            where: {
                id: updateUserParamsObject.id
            },
            data: {
                name,
                email,
                password: await _bcrypt.default.hash(password)
            }
        });
        return queryResponse;
    }
    async login(email, password) {
        const user = await _prisma.default.user.findFirst({
            where: {
                email
            }
        });
        if (user) {
            const passwordIsValid = await _bcrypt.default.compare(password, user.password);
            if (passwordIsValid) return user;
        }
        return null;
    }
    async userExists(userId) {
        try {
            const userExists = await _prisma.default.user.findUnique({
                where: {
                    id: userId
                }
            });
            if (userExists) return true;
            return false;
        } catch (error) {
            throw new Error(error);
        }
    }
    async getAll() {
        return _prisma.default.user.findMany({});
    }
    async getById(userId) {
        const queryResponse = await _prisma.default.user.findUnique({
            where: {
                id: userId
            }
        });
        return queryResponse;
    }
    async deleteAll() {
        await _prisma.default.user.deleteMany({});
        return true;
    }
    async deleteById(userId) {
        const queryResponse = await _prisma.default.user.delete({
            where: {
                id: userId
            }
        });
        if (queryResponse) return true;
        return false;
    }
    async logout(userId) {
        const queryResponse = await _prisma.default.user.update({
            where: {
                id: userId
            },
            data: {
                jwt_token: null
            }
        });
        if (queryResponse) return true;
        return false;
    }
}
