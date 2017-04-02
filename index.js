const request = require('request');
const _ = require('lodash');
const config = require('./config');

(function () {
    console.log('Full API key: ' + config.api_key);
    console.log('Short API key: ' + config.api_short_key);
})();

request.get(
    {
        url: config.host,
        apiKey: config.api_short_key
    },
    function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
    });

