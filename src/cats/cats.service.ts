import { Injectable } from '@nestjs/common';
import { Prisma, Cat } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CatService {
  constructor(private prisma: PrismaService) {}

  async cat(
    catWhereUniqueInput: Prisma.CatWhereUniqueInput,
  ): Promise<Cat | null> {
    return this.prisma.cat.findUnique({ where: catWhereUniqueInput });
  }

  async cats(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CatWhereUniqueInput;
    where?: Prisma.CatWhereInput;
    orderBy?: Prisma.CatOrderByWithRelationInput;
  }): Promise<Cat[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.cat.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findBlueService(): object {
    return {
      message: 'this object return a blue cat json',
      name: 'not a name',
      value: 12,
    };
  }

  // createCat(): any{

  // }
  async findAll(): Promise<object> {
    return this.cats({});
  }
}
