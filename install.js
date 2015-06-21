var fs = require('fs'),
	path = require('path'),
	installDir = getDirectories('./child_modules'),
	execSync = require('child_process').execSync;

console.log('install directory == ', path.join(__dirname, installDir));

execSync('npm install', {cwd: path.join(__dirname, installDir)});

console.log(installDir, 'install done');
