import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field((type) => Float)
  price: number;
}
