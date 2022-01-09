import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  findBlueService(): object {
    return {
      message: 'this object return a blue cat json',
      name: 'not a name',
      value: 12,
    };
  }

  // createCat(): any{

  // }
}
