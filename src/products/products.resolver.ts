import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.entity';
import { CreateProduct } from './dto/create-product.input';
import { User } from 'src/users/entities/user.entity';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => Product)
  getProduct(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Query(() => [Product])
  products(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @ResolveField(() => User)
  user(@Parent() product: Product): Promise<User> {
    return this.productsService.getUser(product.userID);
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProduct,
  ): Promise<Product> {
    return this.productsService.createProduct(createProductInput);
  }
}
