import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateProduct {
  @IsAlpha()
  @Field()
  name: string;

  @Field()
  price: number;

  @Field(() => Int)
  userID: number;
}
