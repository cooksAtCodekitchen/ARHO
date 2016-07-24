require('core-js/fn/object/assign');
var open = require('open');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var devConfig = require('./webpack-dev-config');
var prodConfig = require('./webpack-prod-config');
var ieConfig = require('./webpack-ie-config');

var args = process.argv.slice(2);
var config;

if (Object.keys(args).length === 0) {
	console.log('Preparing devel build');
	config=devConfig;
} else if(args[0] === 'prod') {
	console.log('Preparing build for production');
	config=prodConfig;
}  else if(args[0] === 'ie') {
	console.log('Preparing build for ie');
	config=ieConfig;
} else {
	console.log('Unsupported Argument.Preparing devel build');
	config=devConfig;
}


new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  open('http://localhost:' + config.port + '/webpack-dev-server/');
});

	
