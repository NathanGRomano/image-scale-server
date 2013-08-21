var service = require('../service');

describe('given we have a service', function () {

	describe('when the service is told to listen', function () {

		it('should start', function (done) {
			
			service.listen(function () {
				done();
			});

		});

	})

});
