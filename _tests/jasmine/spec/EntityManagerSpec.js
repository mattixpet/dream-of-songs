(function () {

'use strict';

describe("entityManager", function() {
  var EntityManager = global.get('class/EntityManager');
  var Entity = global.get('class/Entity');
  var util = global.get('util');
  var config = global.get('config');
  var ImageHandler = global.get('class/ImageHandler');
  var AudioManager = global.get('class/AudioManager');

  var audioManager;
  var imageHandler;
  var entityManager;
  var placeHolderSprite;

  beforeEach(function() {
    audioManager = new AudioManager();
    global.set('audioManager', audioManager);
    imageHandler = new ImageHandler();
    global.set('imageHandler', imageHandler);
    entityManager = new EntityManager();
    global.set('entityManager', entityManager);
    placeHolderSprite = {'getWidth' : function (){}, 'getHeight' : function (){}};
  });

  describe("registration", function() {

    it("should be able to register multiple entities with different ids", function() {
      var ids = [];
      for (var i = 0; i < 7; i++) {
        ids.push(entityManager.register(new Entity(placeHolderSprite,undefined,undefined,undefined),
                                        config.STARTINGSCENE));
      }

      expect(util.containsDuplicates(ids)).toBeFalsy();
    });

    it("should be able to delete entities", function() {
      var ids = [];
      var n = 7;
      for (var i = 0; i < n; i++) {
        ids.push(entityManager.register(new Entity(placeHolderSprite,undefined,undefined,undefined),
                                        config.STARTINGSCENE));
      }

      // delete entity in middle
      var idx = Math.floor(n/2);
      entityManager._delete(ids[idx], config.STARTINGSCENE);

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
      entityManager._delete(ids[0], config.STARTINGSCENE);
      containsEverythingExcept(ids, [idx, 0]);

      // delete last entity
      entityManager._delete(ids[ids.length-1], config.STARTINGSCENE);
      containsEverythingExcept(ids, [idx, 0, ids.length-1]);
    });
  });
});

}());