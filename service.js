var http = require('http')
  , app = require('./app')
	, service = module.exports = http.createServer(app);

service.app = app;
var _listen = service.listen;
service.listen = function (cb) {
	_listen.call(this, app.get('port'), function () {
		console.log('image scale service listening on port ' + app.get('port') + ' in ' + app.get('env') + ' mode '); 
		cb.apply(service, arguments);
	});
};
