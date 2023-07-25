import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => Float)
  price: number;

  @Column()
  @Field(() => Int)
  userID: number;

  @ManyToOne(() => User, (user) => user.products)
  @Field(() => User)
  user: User;
}
