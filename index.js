'use strict';

var request = require('request');
var _ = require('lodash');
var config = require('./config');
var request_promise = require('request-promise');
var fs = require('fs');

(function () {
    console.log(config);
})();




var request = require('request');

var options = {
    uri: config.bin_post + '?key=' + config.google_api_key,
    method: 'POST',
    json: true,
    body: {
        request: {
            passengers: {
                'adultCount': config.passengers_amount
            },
            slice: [
                {
                    'origin': 'WAW',
                    'destination': 'DPS',
                    'date': '2017-09-05'
                }
            ],
            'solutions': 50
        }
    }
}

request.post(options, function (error, response, body) {
    console.log(error);

    console.log(response);

    var fileName = new Date().toUTCString().replace(/T/, '-').replace(/\..+/, '') + '-response.json';
    fs.writeFile(fileName, JSON.stringify(response, null, 4), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('The file was saved to: ' + fileName);
    });
});

