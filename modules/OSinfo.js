var os = require('os');
var colors = require('colors');

function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
		type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log('System: '.grey, type);
	console.log('Release: '.red, release);
	console.log('CPU model: '.magenta, cpu);
	console.log('Uptime: ~'.green, (uptime / 60).toFixed(0), 'min');
	console.log('User name:'.bgYellow, userInfo.username);
	console.log('Home dir:'.rainbow, userInfo.homedir);
	
}

exports.print = getOSinfo;