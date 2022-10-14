import { Router } from "express";
import { AuthenticaceUserController } from "../modules/user/useCases/authenticateUser/AuthenticaceUseController";

const authenticateRoutes = Router();

const authencticationUserController = new AuthenticaceUserController();

authenticateRoutes.post("/session", authencticationUserController.handle);

export { authenticateRoutes };