const https = require("https");

const agent = new https.Agent({
    rejectUnauthorized: false,
    secureOptions:
        require("constants").SSL_OP_LEGACY_SERVER_CONNECT |
        require("constants").SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION
});

module.exports = { agent }