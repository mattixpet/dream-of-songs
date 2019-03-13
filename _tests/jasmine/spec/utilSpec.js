describe("util", function() {
  var util = global.get('util');

  describe("containsDuplicates", function() {
    it("should see if an array has any duplicates", function() {
      var testArrays = [
        [0,1,2,3,4,5],
        [0,1,2,2,3,4,5],
        ['wow', 'hello', 'hi', 3],
        ['wow', 'wow', 'hello', 0, 1]
      ];

      var testResults = [
        false,
        true,
        false,
        true
      ];

      for (var i = 0; i < testArrays.length; i++) {
        expect(util.containsDuplicates(testArrays[i])).toEqual(testResults[i]);
      }
    });
  });

  describe("grid and pixel coordinates", function() {
    global.set('canvas', {width: 800, height: 450});
    var canvas = global.get('canvas');

    var pixelW = canvas.width;
    var pixelH = canvas.height;
    var gridW = 80;
    var gridH = 45;

    // these should go both ways in the pixel/grid transformations
    var pixelCoords = [
      [0, 0],
      [50, 200],
      [790, 440]
    ];
    var gridCoords = [
      [0, 0],
      [5, 20],
      [79, 44]
    ];

    it("with normal grid should correctly transform pixel coords to grid coords", function() {
      for (var i = 0; i < pixelCoords.length; i++) {
        expect(util.pixelToGrid(pixelCoords[i][0], pixelCoords[i][1], gridW, gridH))
          .toEqual(gridCoords[i]);
      }

      // extra tests
      expect(util.pixelToGrid(667, 309, gridW, gridH)).toEqual([66, 30]);
    });

    it("with normal grid should correctly transform grid coords to pixel coords", function() {
      for (var i = 0; i < gridCoords.length; i++) {
        expect(util.gridToPixel(gridCoords[i][0], gridCoords[i][1], gridW, gridH))
          .toEqual(pixelCoords[i]);
      }
    });

    var tinyGridW = 4;
    var tinyGridH = 3;

    // these should go both ways in the pixel/grid transformations
    var tinyPixelCoords = [
      [0, 0],
      [200, 150],
      [600, 300]
    ];
    var tinyGridCoords = [
      [0, 0],
      [1, 1],
      [3, 2]
    ];

    it("with tiny grid should correctly transform pixel coords to grid coords", function() {
      for (var i = 0; i < tinyPixelCoords.length; i++) {
        expect(util.pixelToGrid(tinyPixelCoords[i][0], tinyPixelCoords[i][1], tinyGridW, tinyGridH))
          .toEqual(tinyGridCoords[i]);
      }

      expect(util.pixelToGrid(667, 309, tinyGridW, tinyGridH)).toEqual([3, 2]);
    });

    it("with tiny grid should correctly transform grid coords to pixel coords", function() {
      for (var i = 0; i < tinyGridCoords.length; i++) {
        expect(util.gridToPixel(tinyGridCoords[i][0], tinyGridCoords[i][1], tinyGridW, tinyGridH))
          .toEqual(tinyPixelCoords[i]);
      }
    });
  });
});
