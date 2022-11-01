const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLList
} = graphql;

exports.getEmpresasType = new GraphQLObjectType({
  name: 'empresasType',
  fields: () => ({
    total: {
      type: GraphQLInt
    },
    clientes: {
        type: new GraphQLList(new GraphQLObjectType({
          name: 'listClientes',
          fields: () => ({
            id: {
              type: GraphQLString
            },
            empresaProprietariaId: {
              type: GraphQLString
            },
            nomeFantasia: {
              type: GraphQLString
            },
            razaoSocial: {
              type: GraphQLString
            },
            site: {
              type: GraphQLString
            },
            tipo: {
              type: GraphQLString
            },
            centroCusto: {
              type: GraphQLString
            },
            alias: {
              type: GraphQLString
            },
            statusFinanceiro: {
              type: GraphQLString
            },
            documentos: {
              type: new GraphQLList(new GraphQLObjectType({
                name: 'listDocumentos',
                fields: () => ({
                  tipo: {
                    type: GraphQLString
                  },
                  numero: {
                    type: GraphQLString
                  }
                })
              }))
            },
            responsavel: {
              type: new GraphQLObjectType({
                name: 'responsavelEmpresa',
                fields: () => ({
                  nome: {
                    type: GraphQLString
                  },
                  email: {
                    type: GraphQLString
                  }
                })
              })
            },
            endereco: {
              type: new GraphQLObjectType({
                name: 'enderecoEmpresa',
                fields: () => ({
                  logradouro: {
                    type: GraphQLString
                  },
                  numero: {
                    type: GraphQLString
                  },
                  complemento: {
                    type: GraphQLString
                  },
                  bairro: {
                    type: GraphQLString
                  },
                  cidade: {
                    type: GraphQLString
                  },
                  estado: {
                    type: GraphQLString
                  },
                  cep: {
                    type: GraphQLString
                  },
                  pais: {
                    type: GraphQLString
                  }
                })
              })
            },
            financeiro: {
              type: new GraphQLObjectType({
                name: 'financeiroEmpresa',
                fields: () => ({
                  email: {
                    type: GraphQLString
                  },
                  prazoPagamento: {
                    type: GraphQLInt
                  },
                  formaPagamento: {
                    type: GraphQLString
                  },
                  diaPagamento: {
                    type: GraphQLInt
                  },
                  contato: {
                    type: GraphQLString
                  },
                  telefone: {
                    type: GraphQLString
                  }
                })
              })
            },
            comercial: {
              type: new GraphQLObjectType({
                name: 'comercialEmpresa',
                fields: () => ({
                  email: {
                    type: GraphQLString
                  },
                  contato: {
                    type: GraphQLString
                  },
                  telefone: {
                    type: GraphQLString
                  }
                })
              })
            },
            cobranca: {
              type: new GraphQLObjectType({
                name: 'cobrancaEmpresa',
                fields: () => ({
                  emailAlternativo: {
                    type: GraphQLString
                  },
                  cobrancaAutomatica: {
                    type: GraphQLBoolean
                  },
                  faturarMesFechado: {
                    type: GraphQLBoolean
                  },
                  diaInicial: {
                    type: GraphQLInt
                  },
                  diaFinal: {
                    type: GraphQLInt
                  }
                })
              })
            }
        })
      }))
    }
  })
});