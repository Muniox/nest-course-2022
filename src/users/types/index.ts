import { Exclude } from 'class-transformer';

export interface User {
  id: number;
  username: string;
  password: string;
}

export class SerializedUser {
  username: string;

  //Sposób serializacji zalecany przez Twórców Nestjs
  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
