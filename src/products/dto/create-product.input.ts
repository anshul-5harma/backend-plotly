import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProduct {
  @Field()
  name: string;

  @Field()
  price: number;
}
