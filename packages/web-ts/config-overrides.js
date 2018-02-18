/* config-overrides.js */

const rewireTypescript = require('react-app-rewire-typescript');
const rewireYarnWorkspaces = require('react-app-rewire-yarn-workspaces');

module.exports = function override(config, env) {
    config = rewireTypescript(config, env);
    config = rewireYarnWorkspaces(config, env);
    return config;
}