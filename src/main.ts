import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log("iniciando processo.")
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);
}
console.log("preparando para estruturar mensagem.")
bootstrap();
