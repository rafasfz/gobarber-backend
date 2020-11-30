import { Router } from 'express';

import AthenticateUserService from '../services/AuthenticateUserService';

interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  created_at: Date;
  updated_at: Date;
}

interface AutheticateResponse {
  user: User;
  token: string;
}

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const autheticateUser = new AthenticateUserService();

  const { user, token }: AutheticateResponse = await autheticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
