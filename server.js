const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const routes = require('./src/routes');
const app = express();

app.use('*', cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(routes);

app.use('/health', (req, res) => res.status(200).json({
    status: 'ok'
}));
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.warn(`API running at port ${port}`);
});
