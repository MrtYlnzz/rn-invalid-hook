/**
 * Metro Bundler configuration
 * https://facebook.github.io/metro/docs/en/configuration
 *
 * eslint-env node, es6
 */
const blacklist = require('metro-config/src/defaults/blacklist');
const getWorkspaces = require('get-yarn-workspaces');
const path = require('path');

async function getConfig(appDir, options = {}) {
  const workspaces = getWorkspaces(appDir);
  const sharedPath = path.resolve(appDir, '../', 'shared');

  const watchFolders = [
    path.resolve(appDir, '../..', 'node_modules'),
    ...workspaces.filter((workspaceDir) => workspaceDir === sharedPath),
  ];

  return {
    watchFolders,
    resolver: {
      blacklistRE: blacklist([
        /^((?!mobile).)+[\/\\]node_modules[/\\]react-native[/\\].*/,
      ]),
      extraNodeModules: {
        'react-native': path.resolve(appDir, 'node_modules', 'react-native'),
        'core-js': path.resolve(appDir, 'node_modules', 'core-js'),
      },
    },
  };
}

module.exports = getConfig(__dirname);
