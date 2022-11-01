const graphqlHTTP = require('express-graphql');
const { rootSchema } = require('./schemas/index');
const express = require('express');
const router = express.Router();
const app = express();
const environment = require('../settings/config').environment;

app.set('trust proxy', true);
const showGraphiQl = environment === 'local' || environment === 'development';

const schema = graphqlHTTP({
    schema: rootSchema,
    rootValue: global,
    graphiql: showGraphiQl
});

app.use('/cliente/schema', schema);

app.use(router);

module.exports = app;