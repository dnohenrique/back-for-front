const graphql = require('graphql');
const {
    GraphQLObjectType,
  } = graphql;

const clienteQuery = require('./clienteQuery');

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      getEmpresas: clienteQuery.getEmpresas,
      getEmpresasByParametros: clienteQuery.getEmpresasByParametros,
      getEmpresaByDocument: clienteQuery.getEmpresaByDocument,
    }
  });

module.exports =  RootQuery;