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
        expect(background_data[scene]).not.toBe(undefined);
      }
    });
  });
});
