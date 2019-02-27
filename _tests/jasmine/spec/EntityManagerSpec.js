describe("entityManager", function() {
  var entityManager;

  beforeEach(function() {
    entityManager = new EntityManager();
  });

  describe("registration", function() {

    it("should be able to register multiple entities with different ids", function() {
      var ids = [];
      for (var i = 0; i < 7; i++) {
        ids.push(entityManager.register(new Entity()));
      }

      expect(util.containsDuplicates(ids)).toBeFalsy();
    });

    it("should be able to delete entities", function() {
      var ids = [];
      var n = 7;
      for (var i = 0; i < n; i++) {
        ids.push(entityManager.register(new Entity()));
      }

      // delete entity in middle
      var idx = Math.floor(n/2);
      entityManager.delete(ids[idx]);

      // make sure everything is okay after delete
      
      // check if entityManager contains all entities in ids except
      // the ones at indices idxs
      function containsEverythingExcept(ids, idxs) {
        for (var i = 0; i < idxs.length; i++) {
          expect(entityManager).not.toContainEntity(ids[idxs[i]]);
        }
        for (var i = 0; i < ids.length; i++) {
          if (!idxs.includes(i)) {
            expect(entityManager).toContainEntity(ids[i]);
          }
        }
      }
      
      containsEverythingExcept(ids, [idx]);

      // delete first entity
      entityManager.delete(ids[0]);
      containsEverythingExcept(ids, [idx, 0]);

      // delete last entity
      entityManager.delete(ids[ids.length-1]);
      containsEverythingExcept(ids, [idx, 0, ids.length-1]);
    });
  });
});
