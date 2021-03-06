(function () {

'use strict';

beforeEach(function () {
  jasmine.addMatchers({
    toContainEntity: function () {
      return {
        compare: function (entityManager, id) {
          var containsId = false;
          for (var key in entityManager.getEntities()) {
            if (key === '' + id) {
              containsId = true;
            }
          }

          return {
            pass: containsId
          };
        }
      };
    }
  });
});

}());