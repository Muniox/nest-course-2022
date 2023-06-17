import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get(':id')
  getCustomerExpress(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    // console.log(typeof id);
    const customer = this.customersService.findCustomerById(id);
    if (!customer) {
      res.status(400).send({
        statusCode: 400,
        message: 'Customer not found',
      });
    }
    return res.send(customer);
  }

  @Get('/search/:id')
  getCustomerNest(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (!customer) {
      throw new HttpException('Customer Not Found!', HttpStatus.BAD_REQUEST);
      // dzięki HttpException zwracamy własne wyjątki (Errory)
      // lub zwracamy któryś z predefiniowanych np: BadRequestException
    }
    return customer;
  }

  @Get()
  getAllCustomers() {
    return this.customersService.getCustomers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    // console.log(createCustomerDto);
    this.customersService.createCustomer(createCustomerDto);
  }
}
