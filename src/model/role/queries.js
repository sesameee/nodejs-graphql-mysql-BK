const { GraphQLList,
        GraphQLID,
        GraphQLInt,
        GraphQLString,
        GraphQLFloat } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Role = require("./role")

// Defines the queries
module.exports = {
    roles: {
        type: new GraphQLList(type),
        args: {
            name: {
                type: GraphQLString
            },
            position: {
                type: GraphQLString
            },
            index: {
                type: GraphQLInt
            }
        },
        resolve: Role.findMatching.bind(Role)
    },
    role: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Role.getByID.bind(Role)
    }
}