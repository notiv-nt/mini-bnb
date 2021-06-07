import { BadRequestException, Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Post('login')
  async login(@Req() req: Request, @Body() { email, password }: LoginDto) {
    const user = await this.authService.login(email, password);

    if (!user) {
      throw new BadRequestException();
    }

    await new Promise((resolve, reject) => {
      req.login(user, (err) => {
        if (err) {
          return reject(err);
        }

        resolve(1);
      });
    });

    return this.userService.getUserAsMe(user.id);
  }

  @Post('logout')
  logout(@Req() req: Request) {
    req.logout();
    return true;
  }
}
