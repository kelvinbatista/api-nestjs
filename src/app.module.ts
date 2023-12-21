import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
console.log("passando pelo modulo.")


@Module({
  imports: [UserModule],
})
export class AppModule {}
