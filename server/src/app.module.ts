import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ListingModule } from './listing/listing.module';
import { User } from './user/user.entity';
import { Listing } from './listing/listing.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as PostgresConnectionOptions['type'],
      url: process.env.TYPEORM_URL,
      entities: [User, Listing],
    }),

    AuthModule,
    UserModule,
    ListingModule,
  ],
})
export class AppModule {}
