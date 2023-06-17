import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'danny@gmail.com',
      name: 'Danny Danny',
    },
    {
      id: 2,
      email: 'adam@gmail.com',
      name: 'Adam Adam',
    },
    {
      id: 3,
      email: 'spencer@gmail.com',
      name: 'Spancer Spancer',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers(): Customer[] {
    return this.customers;
  }
}
