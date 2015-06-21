var path = require('path'),
	exec = require('child_process').exec;

exec('npm install', {cwd: path.join(__dirname, './some_modules')});
