const {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull
} = require("graphql");
const type = require("./type");
// const mutation = require('./mutations')
const Post = require("./post");

// Defines the queries
module.exports = {
  getArmyWin: {
    type: new GraphQLList(type),
    args: {
      rolesId: {
        type: new GraphQLList(GraphQLString)
      },
      fields: {
        type: GraphQLString
      }
    },
    resolve: Post.findTeam.bind(Post)
  },
  getPost: {
    type: new GraphQLList(type),
    resolve: Post.findMatching.bind(Post)
  },
  search: {
    type: new GraphQLList(type),
    args: {
      rolesId: {
        type: new GraphQLNonNull(new GraphQLList(GraphQLString))
      },
      fields: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: Post.findTeam.bind(Post)
  }
};
