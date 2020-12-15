import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAutheticated from '../middlewares/ensureAutheticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAutheticated);

profileRouter.put('/', profileController.update);
profileRouter.get('/', profileController.show);

export default profileRouter;
