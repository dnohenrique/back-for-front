const createResponseFromError =  (error) =>
{
    console.error(error);
    let result = {};
    if (!error.response) {
        const message = error.message ? error.message : JSON.stringify(error);
        result = { status: 500, messages: [message] };
        return result;
    }
    const messages = error.response.data.result.map(({ message }) => message);
    result = { status: error.response.status, messages };
    return result;
};

const applyEncodeURI = (uri) => {
    let encodedUri = encodeURI(uri);

    encodedUri = encodedUri.replace(/#/g, '%23');

    return encodedUri;
};

module.exports = {
    createResponseFromError,
    applyEncodeURI
};