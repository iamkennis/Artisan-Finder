"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = __importDefault(require("./controller/users.controller"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configuresRoutes() {
        this.app.route('/users')
            .get(users_controller_1.default.getAllUser);
        this.app.route('/login')
            .post((req, res) => {
            res.status(200).send('user sucessfully login!');
        });
        this.app.route('/register')
            .post(users_controller_1.default.register);
        this.app.route('/user/:userId')
            .all((req, res, next) => {
            next();
        })
            .get((req, res) => {
            res.status(200).send(`Get user by ID ${req.params.userId}`);
        })
            .put((req, res) => {
            res.status(200).send(`Get user by ID ${req.params.userId}`);
        })
            .patch((req, res) => {
            res.status(200).send(`Get user by ID ${req.params.userId}`);
        })
            .delete((req, res) => {
            res.status(200).send(`Get user by ID ${req.params.userId}`);
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwaS91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLHlFQUFpRTtBQUNqRSxxRkFBMkQ7QUFHM0QsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQzdDLFlBQVksR0FBd0I7UUFDakMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsZ0JBQWdCO1FBRWQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUcsQ0FBQywwQkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRWhDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2QixJQUFJLENBQUMsQ0FBQyxHQUFtQixFQUFFLEdBQW9CLEVBQUUsRUFBRTtZQUNoRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQ25ELENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQzFCLElBQUksQ0FBQywwQkFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRS9CLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUM5QixHQUFHLENBQUMsQ0FBQyxHQUFtQixFQUFFLEdBQW9CLEVBQUUsSUFBeUIsRUFBRSxFQUFFO1lBQzFFLElBQUksRUFBRSxDQUFBO1FBQ1YsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLENBQUMsR0FBbUIsRUFBQyxHQUFxQixFQUFFLEVBQUU7WUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUMvRCxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsQ0FBQyxHQUFtQixFQUFDLEdBQXFCLEVBQUUsRUFBRTtZQUMvQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQy9ELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEdBQW1CLEVBQUMsR0FBcUIsRUFBRSxFQUFFO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDL0QsQ0FBQyxDQUFDO2FBQ0QsTUFBTSxDQUFDLENBQUMsR0FBbUIsRUFBQyxHQUFxQixFQUFFLEVBQUU7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUMvRCxDQUFDLENBQUMsQ0FBQTtRQUVDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNwQixDQUFDO0NBQ047QUFyQ0Qsa0NBcUNDIn0=