import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeePostDto } from './dto/coffee-post.dto';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeeController {
  constructor(private coffeeService: CoffeeService) { }
  @Get()
  getCoffees() {
    return this.coffeeService.getAll();
  }

  @Post()
  async postCoffee(@Body() coffeePostDto: CoffeePostDto): Promise<Coffee> {
    return this.coffeeService.create(coffeePostDto);
  }
}
