import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'

import resolvers from './src/infra/graphql/resolvers'

(async () => {
    const app = express()

    await createConnection()
    .catch(error => {
        console.log('erro ao criar DB', error.message)
    })

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: <any>resolvers as [string]
        }),
        context: ({ req, res }) => ({ req, res })
    })

    apolloServer.applyMiddleware({app})

    app.listen(4000, () => {
        console.log('Server on at: 4000')
    })
})()