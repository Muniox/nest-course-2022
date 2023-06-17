import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // setGlobal Prefix ustawia przed wszystkimi ścieżkami http://localhost:PORT/api/
  await app.listen(3000);
}
bootstrap();
