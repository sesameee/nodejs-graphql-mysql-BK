let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'role',
    description: 'evey role',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        position: {
            type: new GraphQLNonNull(GraphQLString)
        },
        index: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    }
})