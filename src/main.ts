import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { TaskModule } from './tasks/task.module';

async function bootstrap() {
  const app = await NestFactory.create(TaskModule);
  await app.listen(3000);
}
bootstrap();
