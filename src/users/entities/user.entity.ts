import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/products.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  email: string;

  @Field((type) => Int)
  age: number;

  @OneToMany(() => Product, (product) => product.user)
  @Field((type) => [Product], { nullable: true })
  products?: Product[];
}
