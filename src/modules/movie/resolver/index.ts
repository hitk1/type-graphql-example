import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import Movie from "../entity";

@Resolver()
export default class MovieResolver {

    @Mutation(() => Movie)
    async createMovie(
        @Arg("title") title: string,
        @Arg("minutes", () => Int) minutes: number
    ){
        const newMovie = await Movie.create({ title, minutes }).save()
        return newMovie
    }

    @Mutation(() => Movie)
    async updateMovie(
        @Arg("id") id: string,
        @Arg("title", () => String, { nullable: true }) title?: string,
        @Arg("minutes", () => Int, { nullable: true }) minutes?: number
    ) {       
        const existentMovie = await Movie.find({ id })

        if(existentMovie)
            await Movie.update({ id }, { 
                title: title || existentMovie[0].title,
                minutes: minutes || existentMovie[0].minutes
             })

        return await Movie.findOne({ id })
    }

    @Mutation(() => Boolean)
    async deleteMovie(
        @Arg("id") id: string
    ) {
        try{
            await Movie.delete({ id })
            return true
        } catch(error){
            console.log(`Erro ao deletar registro: ${error.message}`)
            return false
        }
    }

    @Query(() => [Movie])
    movies(){
        return Movie.find()
    }
}