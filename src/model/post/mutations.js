const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLFloat,
    GraphQLID,
    GraphQLInt
} = require('graphql')
const type = require('./type')
const Post = require('./post')

// Defines the mutations
module.exports = {
    addPost: {
        description:"新增文章",
        type,
        args: {
            attack:   { type: new GraphQLNonNull(GraphQLString) },
            defense:  { type: new GraphQLNonNull(GraphQLString) },
            comment:  { type: GraphQLString }
        },
        resolve: Post.createEntry.bind(Post)
    },
    updatePost: {
        description:"更新文章",
        type,
        args: {
            id:     { type: GraphQLID },
            good:   { type: new GraphQLNonNull(GraphQLInt) },
            bad:  { type: new GraphQLNonNull(GraphQLInt) },
        },
        resolve: Post.updateEntry.bind(Post)
    }
}