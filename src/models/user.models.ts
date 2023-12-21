import { Column, Entity } from "typeorm";

@Entity()
export class UserModel{
    @Column()
    id: number;

    @Column({length:150})
    name: string;

    @Column({length:3})
    age: number;
}