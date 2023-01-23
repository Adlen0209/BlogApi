import { Router} from 'express';

const router = Router();

import { createUser } from '../controller/userController.js';

router.post('/api/v1/register', createUser);



export { router }