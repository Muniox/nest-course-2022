import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmptyObject() //tylko jeśli objekt jes wymagany, jesli opcjonalny to bez
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
