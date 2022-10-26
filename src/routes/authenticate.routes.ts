import { Router } from "express";
import { AuthenticaceUserController } from "../modules/user/useCases/authenticateUser/AuthenticaceUseController";
import { RefreshTokenController } from "../modules/user/useCases/refreshToken/RefreshTokenController";

const authenticateRoutes = Router();

const authencticationUserController = new AuthenticaceUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/session", authencticationUserController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);

export { authenticateRoutes };