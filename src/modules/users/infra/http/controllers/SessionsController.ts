import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AthenticateUserService from '@modules/users/services/AuthenticateUserService';

interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  created_at: Date;
  updated_at: Date;
}

interface IAutheticateResponse {
  user: IUser;
  token: string;
}

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const autheticateUser = container.resolve(AthenticateUserService);

    const { user, token }: IAutheticateResponse = await autheticateUser.execute(
      {
        email,
        password,
      },
    );

    delete user.password;

    return response.json({ user, token });
  }
}
