import UsersDao from "../dao/users.dao";
import { CRUD } from "../../common/interface.crud";
import { RegisterDto,LoginDto } from "../dto/user.dto";



class UsersService implements CRUD {
    async register(resource: RegisterDto){
        return UsersDao.register(resource);
    }

    async login(resource: LoginDto){
        return UsersDao.login(resource)
    } 

    async list(limit:number, page:number){
        return UsersDao.getUsers(limit,page)
    }

    async readById(id:string){
        return UsersDao.getUserById(id)
    }

    async getUserByEmailWithPassword(email: string){
         return UsersDao.getUserByEmailwithPassword(email)
    }
}



export default new UsersService();