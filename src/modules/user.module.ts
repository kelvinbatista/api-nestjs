import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controllers';

@Module({
    controllers:[UserController],
})

export class UserModule{}
