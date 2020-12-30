import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    //@ts-ignore
    id: string

    @Column()
    //@ts-ignore
    firstName: string

    @Column()
    //@ts-ignore
    lastName: string

    @Column()
    //@ts-ignore
    age: number
}

export default User