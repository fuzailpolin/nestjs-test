import { Controller, Get, Body, Post } from '@nestjs/common';
import { CatService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  findAll(): object {
    return this.catService.findAll();
  }

  @Get('/blue')
  findBlue(): object {
    return {
      data: this.catService.findBlueService(),
      status: 200,
    };
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): object {
    const { user, ...rest } = createCatDto;
    return this.catService.createCat({
      ...rest,
      user: { connect: { id: user.id } },
    });
  }
}
