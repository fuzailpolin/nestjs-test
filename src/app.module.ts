import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { CatModule } from './cats/cats.module';

@Module({
  imports: [AuthenticationModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
