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
    name: 'post',
    description: 'every post',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        attack: {
            type: new GraphQLNonNull(GraphQLString)
        },
        defense: {
            type: new GraphQLNonNull(GraphQLString)
        },
        good: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        bad: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        comment: {
            type: GraphQLString
        }
    }
})