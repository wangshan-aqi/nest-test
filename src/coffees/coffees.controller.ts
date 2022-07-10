import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  //   HttpCode,
  //   HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  //   Res,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  findAll(@Query() paginationQuery: any) {
    // console.log(paginationQuery, 'paginationQuery');
    return this.coffeesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }
  @Post()
  create(@Body() createCoffeesDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeesDto);
  }
  @Patch(':id')
  updated(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.updated(id, updateCoffeeDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }

  //   /** 自定义状态码 */
  //   @Post('create')
  //   @HttpCode(HttpStatus.OK)
  //   create(@Body() body) {
  //     return `测试${body}`;
  //   }
}
