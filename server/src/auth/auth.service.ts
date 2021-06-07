import { BadRequestException, Injectable } from '@nestjs/common';
import API_ERRORS from '../constants/api-errors';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  async login(email: string, password: string): Promise<User | never> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException(API_ERRORS.WRONG_CREDENTIALS);
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      throw new BadRequestException(API_ERRORS.WRONG_CREDENTIALS);
    }

    return user;
  }
}
