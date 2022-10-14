import { Router } from "express"
import { authenticateRoutes } from "./authenticate.routes"

import { usersRoutes } from "./users.routers"

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };