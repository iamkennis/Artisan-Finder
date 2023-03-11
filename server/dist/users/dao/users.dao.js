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
const mongoose_services_1 = __importDefault(require("../../common/services/mongoose.services"));
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)("app: In-memory-dao");
class UsersDao {
    constructor() {
        this.Schema = mongoose_services_1.default.getMongoose().Schema;
        this.userSchema = new this.Schema({
            _id: String,
            firstName: String,
            lastName: String,
            email: String,
            password: String,
            state: String,
            account: String,
        }, { id: false });
        this.User = mongoose_services_1.default.getMongoose().model('Users', this.userSchema);
        log('Created new instance of UsersDao');
    }
    register(userSignUpAuth) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = shortid_1.default.generate();
            const user = new this.User(Object.assign({ _id: userId }, userSignUpAuth));
            yield user.save();
            return userId;
        });
    }
    login(userLoginAuth) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = shortid_1.default.generate();
            const user = new this.User(Object.assign({ _id: userId }, userLoginAuth));
            yield user.save();
            return userId;
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.User.findOne({ _id: userId }).populate('User').exec();
        });
    }
    getUsers(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBpL3VzZXJzL2Rhby91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnR0FBdUU7QUFFdkUsc0RBQThCO0FBQzlCLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUV6RCxNQUFNLFFBQVE7SUFlWjtRQWRBLFdBQU0sR0FBRywyQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFL0MsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQixHQUFHLEVBQUUsTUFBTTtZQUNYLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLE1BQU07WUFDYixPQUFPLEVBQUUsTUFBTTtTQUNoQixFQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFakIsU0FBSSxHQUFHLDJCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBR3BFLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFSyxRQUFRLENBQUMsY0FBMkI7O1lBQ3hDLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxpQkFDdEIsR0FBRyxFQUFDLE1BQU0sSUFDUCxjQUFjLEVBQ25CLENBQUM7WUFDSCxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFFSyxLQUFLLENBQUMsYUFBdUI7O1lBQ2pDLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxpQkFDdEIsR0FBRyxFQUFDLE1BQU0sSUFDUCxhQUFhLEVBQ2xCLENBQUM7WUFDSCxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsTUFBYzs7WUFDOUIsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hFLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxDQUFDOztZQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2lCQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNsQixJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDO0tBQUE7Q0FDQTtBQUtELGtCQUFlLElBQUksUUFBUSxFQUFFLENBQUMifQ==