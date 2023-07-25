import { Injectable } from '@nestjs/common';
import { Product } from './products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProduct } from './dto/create-product.input';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  createProduct(createProductInput: CreateProduct): Promise<Product> {
    const product = this.productsRepository.create(createProductInput);
    return this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find(); //SELECT * basically
  }
}
