const graphql = require('graphql');
const {
    GraphQLNonNull
} = graphql;

const updateEmpresaType = require('../types/inputs/updateEmpresaType').updateEmpresaType;
const putOutputType = require('../types/putOutputType').putOutputType;
const clienteService = require('../services/clienteService');

const updateEmpresa = {
    type: putOutputType,
    args: {
        input: { type: new GraphQLNonNull(updateEmpresaType) }
    },

    resolve: async (source, { input }) => {
        const atualizado = await clienteService.updateEmpresa(input.id, input);

        return {
            success: atualizado
        };
    },

    // async resolve (source, args) {
    //     const clienteResult = await clienteService.getCliente(args.id);

    //     if (!clienteResult || !clienteResult.cliente || clienteResult.cliente.length === 0)
    //         throw new Error('Erro ao encontrar o cliente relacionado a nota de débito por documento');

    //     const cliente = clienteResult.cliente[0];
    //     const clienteObject = cliente;
    //     clienteObject.alias = args.alias;

    //     const atualizado = true; //await clienteService.updateEmpresa(clienteObject);

    //     return {
    //         success: atualizado
    //     };
    // }
};

module.exports = {
    updateEmpresa
};