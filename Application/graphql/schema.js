const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
const models = require('../models'); // Import your Sequelize models

const UserType = new GraphQLObjectType({
  name: 'customer1s',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customers: {
      type: new GraphQLList(UserType),
      resolve() {
        return models.customer1s.findAll();
      },
    },
    customer: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return models.customer1s.findByPk(args.id);
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return models.Customer1.create({
          name: args.name,
          email: args.email,
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
