var service = require('../service');

describe('given we have a server', function () {

	describe('when the server is told to listen', function () {

		it('should start', function (done) {
			
			service.listen(function () {
				done();
			});

		});

	})

});
