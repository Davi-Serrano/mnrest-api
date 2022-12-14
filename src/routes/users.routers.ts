import { Router } from "express"
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import  { CreateUserController }  from "../modules/user/useCases/createUser/CreateUserController";
import  deleteUserController  from "../modules/user/useCases/deleteUser";
import  listAllUsersController  from "../modules/user/useCases/readUsers";


const usersRoutes = Router()

const createUserController = new CreateUserController()



usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", ensureAuthentication, ensureAdmin,(req, res)=>{
    return listAllUsersController().handle(req, res);
 });

 usersRoutes.delete("/", ensureAuthentication, ensureAdmin,(req, res)=>{
   return deleteUserController().handle(req, res)
 });

 export { usersRoutes };