const controller = require('../controllers/usercontroller')
const { GraphQLDate, GraphQLDateTime } = require('graphql-iso-date')
module.exports = {
  User: {
    birthday: {
      type: GraphQLDate,
      resolve: (user) => new Date(user.birthday)
    }
  },
  Query: {
    list: (parent, args, context, info) => {
      return controller.list()
    },
    read: (parent, args, context, info) => {
      return controller.read(args.id)
    }
  },
  Mutation: {
    create: (parent, args, context, info) => {
      return controller.create(args.user)
    },
    update: (parent, args, context, info) => {
      return controller.update(Object
        .assign({ id: args.id }, args.user))
    },
    delete: (parent, args, context, info) => {
      return controller.delete(args.id)
    }
  },
  DateTime: GraphQLDateTime,
  Date: GraphQLDate
}
