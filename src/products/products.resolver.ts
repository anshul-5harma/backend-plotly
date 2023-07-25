import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.entity';
import { CreateProduct } from './dto/create-product.input';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query((returns) => [Product])
  products(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Mutation((returns) => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProduct,
  ): Promise<Product> {
    return this.productsService.createProduct(createProductInput);
  }
}
