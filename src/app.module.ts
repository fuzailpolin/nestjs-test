import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { CatModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthenticationModule, CatModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
