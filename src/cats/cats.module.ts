import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CatsController } from './cats.controller';
import { CatService } from './cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatService, PrismaService],
})
export class CatModule {}
