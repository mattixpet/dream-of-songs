describe("background-data", function() {
  var background_data = global.get('background-data');

  describe("background collision arrays", function() {
    it("should be 45 by 80 long (the grid size)", function() {
      var gridHeight = 45;
      var gridWidth = 80;
      for (var key in background_data) {
        // disregard the connections object which has connections between scenes
        if (key !== 'Connections') {
          var data = background_data[key];
          expect(data[0].length).toEqual(gridWidth);
          expect(data.length).toEqual(gridHeight);
        }
      }
    });
  });

  describe("Connections object", function() {
    it("should have a left, up, right, down and special key", function() {
      var conns = background_data['Connections'];
      for (var scene in conns) {
        var dirs = ['left', 'up', 'right', 'down', 'special'];
        for (var dir in conns[scene]) {
          for (var i = 0; i < dirs.length; i++) {
            if (dir === dirs[i]) {
              dirs[i] = undefined;
            }
          }
        }
        for (var i = 0; i < dirs.length; i++) {
          expect(dirs[i]).toEqual(undefined);
        }        
      }
    });

    it("should only contain scenes which are in background_data", function() {
      var conns = background_data['Connections'];
      for (var scene in conns) {
        // handle the reusable scenes (sky0 etc. (which would resolve as sky))
        if (Number.isInteger(Number.parseInt(scene.substring(scene.length-2)))) {
          scene = scene.slice(0,scene.length-2);
        }
        if (!background_data[scene]) {
          console.log(scene);
        }
        expect(background_data[scene]).not.toBe(undefined);
      }
    });

    it("should be interconnected, meaning if you can go left, that scene should go right back to the original", function() {
      // object with the opposite directions listed
      var opposites = {
        'left' : 'right',
        'up' : 'down',
        'right' : 'left',
        'down' : 'up'
      };
      var conns = background_data['Connections'];
      var nonChecks = ['water00', 'water01', 'underwater00', 'underwater01', 'youwin'];
      for (var scene in conns) {
        var dirs = conns[scene];
        for (var dir in dirs) {
          // only check, left, right, up, down, no special or secondary-special
          // and don't check any undefineds..
          // also don't check water scenes (because they circle) or the youwin screen
          if (dir.indexOf('special') < 0 && dirs[dir] && nonChecks.indexOf(scene) < 0) {
            var destinationScene = dirs[dir].scene;
            // going in opposite direction from destinationScene should bring us back to our scene
            expect(conns[destinationScene][opposites[dir]].scene).toEqual(scene);
          }
        }
      }
    });
  });
});
