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
const users_dao_1 = __importDefault(require("../dao/users.dao"));
class UsersService {
    register(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.register(resource);
        });
    }
    login(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.login(resource);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUsers(limit, page);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUserById(id);
        });
    }
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwaS91c2Vycy9zZXJ2aWNlcy91c2VyLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQXdDO0FBTXhDLE1BQU0sWUFBWTtJQUNSLFFBQVEsQ0FBQyxRQUFxQjs7WUFDaEMsT0FBTyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQUE7SUFFSyxLQUFLLENBQUMsUUFBa0I7O1lBQzFCLE9BQU8sbUJBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbkMsQ0FBQztLQUFBO0lBRUssSUFBSSxDQUFDLEtBQVksRUFBRSxJQUFXOztZQUNoQyxPQUFPLG1CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUN4QyxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBUzs7WUFDcEIsT0FBTyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNuQyxDQUFDO0tBQUE7Q0FDSjtBQUlELGtCQUFlLElBQUksWUFBWSxFQUFFLENBQUMifQ==