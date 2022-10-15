import { Router } from "express"
import { authenticateRoutes } from "./authenticate.routes"
import { categoriesRoutes } from "./food.user";

import { usersRoutes } from "./users.routers"

const router = Router();

router.use("/user", usersRoutes);
router.use("/category", categoriesRoutes)
router.use(authenticateRoutes);

export { router };