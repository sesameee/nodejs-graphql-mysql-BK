const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLFloat,
    GraphQLID,
    GraphQLInt
} = require('graphql')
const type = require('./type')
const Role = require('./role')

// Defines the mutations
module.exports = {
    addRole: {
        description:"新增角色",
        type,
        args: {
            name:   { type: new GraphQLNonNull(GraphQLString) },
            position:  { type: new GraphQLNonNull(GraphQLString) },
            index:  { type: new GraphQLNonNull(GraphQLInt) },
        },
        resolve: Role.createEntry.bind(Role)
    },
    updateRole: {
        description:"更新角色",
        type,
        args: {
            id:     { type: GraphQLID },
            name:   { type: new GraphQLNonNull(GraphQLString) },
            position:  { type: new GraphQLNonNull(GraphQLString) },
            index:  { type: new GraphQLNonNull(GraphQLInt) },
        },
        resolve: Role.updateEntry.bind(Role)
    }
}
