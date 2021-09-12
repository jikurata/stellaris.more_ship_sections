'use strict';
require('dotenv').config();
const root = require('@jikurata/root');
const Logger = require('@jikurata/logger');
const Path = require('path');
const FS = require('fs-extra');
require('../lib/promise.allSettled.js');

const { mod } = require('../config/build.config.json');

// src and build paths
const src = Path.join(root, 'src');
const dist = process.env.MOD_PATH;


/**
 * Clear the directory of deprecated files
 * @returns {Promise<Void>}
 */
function clearModDir() {
  const t_0 = Date.now();
  Logger.info(`Cleaning up mod directory ${dist}...`);
  return checkModPath(dist)
  .then(() => Promise.all([
    getFileList(src),
    getFileList(dist)
  ]))
  .then(results => {
    const ps = [];
    const source = results[0];
    const list = results[1];
    while ( list.length ) {
      const p = list.pop();
      if ( source.indexOf(p) > -1 ) {
        ps.push(FS.remove(p));
      }
    }
    return Promise.all(ps);
  })
  .then(results => {
    Logger.info(`Removed ${results.length} ${(results.length === 1) ? 'file' : 'files'} from ${dist}. (${Date.now() - t_0}ms)`);
  })
  .catch(err => Logger.error(err));
}

/**
 * Retrieve a list of files given an absolute directory path
 * @param {Array<Filepath>||Filepath} paths 
 * @returns {Promise<Array<Filepath>}
 */
function getFileList(paths) {
  if ( !Array.isArray(paths) ) {
    paths = [paths]
  }

  return new Promise((resolve, reject) => {
    try {
      const list = [];
      while ( paths.length ) {
        const currpath = paths.pop();
        const stat = FS.statSync(currpath);
        if ( stat.isDirectory() ) {
          FS.readdirSync(currpath)
          .forEach(p => paths.push(Path.join(currpath, p)));
        }
        else {
          list.push(currpath);
        }
      }
      return resolve(list);
    }
    catch(err) {
      return reject(err);
    }
  });
}

function build() {
  const t_0 = Date.now();
  return getFileList(src)
  .then(list => {
    Logger.info(`Building "${mod}" at ${dist}...(${list.length} ${list.length === 1 ? 'file' : 'files'})`);
    return FS.copy(src, dist, {overwrite: true});
  })
  .then(() => clearModDir())
  .then(() => Logger.info(`Finished building "${mod}" (${Date.now() - t_0}ms)`))
  .catch(err => Logger.error(err));
}

function checkModPath(path) {
  return new Promise((resolve, reject) => {
    FS.readdir(Path.normalize(path))
    .then(files => {
      // Throw if no descriptor.mod is present in the directory
      if ( files.includes('descriptor.mod') ) {
        return FS.readFile(Path.join(dist, 'descriptor.mod'));
      }
      throw new InvalidModPath(path);
    })
    .then(data => {
      const match = data.toString().match(/(?<=name).*/gmi);
      // descriptor.mod name property matches the mod name
      if ( match[0].indexOf(mod) > -1 ) {
        return resolve(true);
      }
      throw new InvalidModPath(path);
    })
    .catch(err => reject(err));
  });
}

class InvalidModPath extends Error {
  constructor(path) {
    super();
    this.name = 'Invalid Mod Directory Path';
    this.message = `${path} is not a valid path to the "${mod}" directory.`;
    this.code = "ERR_INVALID_DIR_URL_PATH";
  }
}

build();

module.exports = build;
