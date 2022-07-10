import { Coffee } from './entities/coffees.entity';
import {
  //   HttpException,
  //   HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: '阿七',
      brand: '测试',
      flavors: ['分组', '分页'],
    },
  ];
  findAll() {
    return this.coffees;
  }
  findOne(id: string) {
    // throw `A random error`;
    const coffee = this.coffees.find((v) => v.id === +id);
    // if (!coffee) {
    //   throw new HttpException(`coffee ${id} not found`, HttpStatus.NOT_FOUND);
    // }
    if (!coffee) {
      throw new NotFoundException(`coffee ${id} not found`);
    }
    return coffee;
  }
  create(createCoffeesDto: any) {
    const data = {
      id: createCoffeesDto.id ? createCoffeesDto.id++ : 1,
      ...createCoffeesDto
    }
    const datas = this.coffees.push(data);
    return datas
  }
  updated(id: string, updtateCoffeeDto: any) {
    const ind = this.coffees.findIndex((v) => v.id === +id);
    this.coffees[ind] = updtateCoffeeDto;
  }
  remove(id: string) {
    const ind = this.coffees.findIndex((v) => v.id === +id);
    if (ind >= 0) {
      this.coffees.splice(ind, 1);
    }
  }
}
