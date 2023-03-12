import { LoginDto, RegisterDto } from "../dto/user.dto";
import mongooseServices from "../../common/services/mongoose.services";

import shortid from "shortid";
import debug from "debug";

const log: debug.IDebugger = debug("app: In-memory-dao");

class UsersDao {
  Schema = mongooseServices.getMongoose().Schema;

  userSchema = new this.Schema({
    _id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    state: String,
    account: String,
  },{ id: false });

  User = mongooseServices.getMongoose().model('Users', this.userSchema);

  constructor(){
    log('Created new instance of UsersDao');
  }

  async register(userSignUpAuth: RegisterDto){
    const userId = shortid.generate();
    const user = new this.User({
        _id:userId,
        ...userSignUpAuth
    });
    await user.save();
    return userId;
  }

  async login(userLoginAuth: LoginDto){
    const userId = shortid.generate();
    const user = new this.User({
        _id:userId,
        ...userLoginAuth
    });
    await user.save();
    return userId;
  }

  async getUserById(userId: string){
    return await this.User.findOne({_id: userId}).populate('User').exec();
  }

  async getUsers(limit = 25, page = 0) {
    return this.User.find()
        .limit(limit)
        .skip(limit * page)
        .exec();
}

 async getUserByEmailwithPassword(email:string){
    return this.User.findOne({email:email}).select('_id email +password').exec()
 }
}




export default new UsersDao();
