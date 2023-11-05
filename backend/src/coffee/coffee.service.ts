import {
  Injectable,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity';
import { CoffeePostDto } from './dto/coffee-post.dto';
import { coffeeSamples } from 'src/data/sampleData';

@Injectable()
export class CoffeeService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Coffee) private coffeeRepository: Repository<Coffee>,
  ) { }

  async getAll() {
    return this.coffeeRepository.find();
  }

  async create(coffeePostDto: CoffeePostDto) {
    const newCoffee = this.coffeeRepository.create(coffeePostDto);
    return this.coffeeRepository.save(newCoffee);
  }

  // DB population

  async onApplicationBootstrap() {
    await this.seedDatabase();
  }

  private async seedDatabase() {
    await this.coffeeRepository.clear();
    return this.coffeeRepository.save(coffeeSamples);
  }
}
