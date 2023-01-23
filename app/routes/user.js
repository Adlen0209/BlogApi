import { Router} from 'express';
import { login } from '../controller/authController.js';
import { createUser } from '../controller/userController.js';
const router = Router();



router.post('/api/v1/register', createUser);

router.post('/api/v1/login', login)



export { router }