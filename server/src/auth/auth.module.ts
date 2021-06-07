import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';

@Module({
  imports: [PassportModule, UserService],
  providers: [SessionSerializer, AuthService, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
