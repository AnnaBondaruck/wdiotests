const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');

exports.config = {
    runner: 'local',

    maxInstances: 1,
    capabilities: [
       {
           maxInstances: 1,
           browserName: 'chrome',
        }
    ],

    services: ['devtools'],

    ...base,
    ...hooks
}
