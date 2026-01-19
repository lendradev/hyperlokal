import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
