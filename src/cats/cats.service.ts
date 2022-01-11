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

  async createCat(data: Prisma.CatCreateInput): Promise<Cat> {
    try {
      const res = await this.prisma.cat.create({ data });
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async findAll(): Promise<object> {
    return this.cats({});
  }
}
