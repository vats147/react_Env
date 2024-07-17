const secureEnv = require('secure-env');
global.env = secureEnv({ secret: 'mySecretPassword' });

const fs = require('fs');
const envVariables = Object.keys(global.env).map(key => `${key}=${global.env[key]}`).join('\n');

fs.writeFileSync('.env', envVariables);