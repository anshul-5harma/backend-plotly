import { Injectable } from '@nestjs/common';
import { Product } from './products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProduct } from './dto/create-product.input';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
    private usersService: UsersService,
  ) {}

  createProduct(createProductInput: CreateProduct): Promise<Product> {
    const product = this.productsRepository.create(createProductInput);
    return this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find(); //SELECT * basically
  }

  findOne(id: number) {
    return this.productsRepository.findOneBy({ id });
  }

  getUser(userId: number): Promise<User> {
    return this.usersService.findOne(userId);
  }
}
