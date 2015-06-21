var fs = require('fs'),
	path = require('path'),
	installDir = './child_modules',
	exec = require('child_process').exec;

console.log('install directory == ', path.join(__dirname, installDir));

exec('npm install', {cwd: path.join(__dirname, installDir)});

console.log(installDir, 'install done');
