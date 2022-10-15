import { Router } from "express"
import { authenticateRoutes } from "./authenticate.routes"
import { categoriesRoutes } from "./category.routes";
import { foodRoutes } from "./food.routes";

import { usersRoutes } from "./users.routers"

const router = Router();

router.use("/user", usersRoutes);
router.use("/category", categoriesRoutes)
router.use("/food", foodRoutes)

router.use(authenticateRoutes);

export { router };