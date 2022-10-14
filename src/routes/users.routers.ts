import { Router } from "express"
import { ensureAdmin } from "../middlewares/ensureAdmiin";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import  { CreateUserController }  from "../modules/user/useCases/createUser/CreateUserController";
import  deleteUserController  from "../modules/user/useCases/deleteUser";
import  listAllUsersController  from "../modules/user/useCases/readUsers";
import  updateUserController  from "../modules/user/useCases/updateUser";


const usersRoutes = Router()

const createUserController = new CreateUserController()



usersRoutes.post("/", ensureAdmin,createUserController.handle);

usersRoutes.get("/", ensureAuthentication, ensureAdmin,(req, res)=>{
    return listAllUsersController().handle(req, res);
 });

 usersRoutes.patch("/", (req, res)=>{
   return updateUserController().handle(req, res)
 })
 
 
 usersRoutes.delete("/", (req, res)=>{
   return deleteUserController().handle(req, res)
 });

 export { usersRoutes };