import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies')
@ObjectType()
class Movie extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    @Field()
    //@ts-ignore
    id: string

    @Column()
    @Field()
    //@ts-ignore
    title: string

    @Column('int', { default: 60 })
    @Field(() => Int)
    //@ts-ignore
    minutes: number

    @CreateDateColumn()
    @Field(() => String)
    //@ts-ignore
    created_at: Date
}

export default Movie