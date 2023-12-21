import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';


@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    "database": "./db.sql",
    "type":"sqlite",
    "synchronize":true,
    "entities":["dist/**/*.model.js"]

})],
})
export class AppModule {}
