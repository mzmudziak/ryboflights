'use strict';

var request = require('request');
var _ = require('lodash');
var config = require('./config');
var request_promise = require('request-promise');
var moment = require('moment');
var fs = require('fs');
var inquirer = require('inquirer');
var request = require('request');
var opts = {};
(function () {
    console.log(config);
})();

var prompts = [
    {
        type: 'input',
        message: 'How many people?',
        name: 'amountOfPeople',
        default: 3,
        validate: function (input) {
            return input !== null && input !== undefined && !isNaN(parseFloat(input)) && isFinite(input);
        }
    }
];
(function () {
    var done = false;
    inquirer.prompt(prompts).then(function (answers) {
        opts.amountOfPeople = answers.amountOfPeople;
        console.log(opts.amountOfPeople);
        done = true;
    });
    if (done === true)
    request.post(options, function (error, response, body) {
        console.log(error);
        console.log(response);

    
        fs.writeFile(filename(), JSON.stringify(response, null, 4), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('The file was saved to: ' + fileName);
        });
    }); 
})();

function filename(){
    return moment.unix(new Date()) + - 'response.json';
}

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

