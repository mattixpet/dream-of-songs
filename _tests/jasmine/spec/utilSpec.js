(function () {

'use strict';

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

    var gridW = 80;
    var gridH = 45;

    // these should go both ways in the pixel/grid transformations
    var pixelCoords = [
      {'x':0,'y':0},
      {'x':50,'y':200},
      {'x':790,'y':440}
    ];
    var gridCoords = [
      {'gridX':0,'gridY':0},
      {'gridX':5,'gridY':20},
      {'gridX':79,'gridY':44}
    ];

    it("with normal grid should correctly transform pixel coords to grid coords", function() {
      for (var i = 0; i < pixelCoords.length; i++) {
        expect(util.pixelToGrid(pixelCoords[i].x, pixelCoords[i].y, gridW, gridH))
          .toEqual(gridCoords[i]);
      }

      // extra tests
      expect(util.pixelToGrid(667, 309, gridW, gridH)).toEqual({'gridX':66,'gridY':30});
    });

    it("with normal grid should correctly transform grid coords to pixel coords", function() {
      for (var i = 0; i < gridCoords.length; i++) {
        expect(util.gridToPixel(gridCoords[i].gridX, gridCoords[i].gridY, gridW, gridH))
          .toEqual(pixelCoords[i]);
      }
    });

    var tinyGridW = 4;
    var tinyGridH = 3;

    // these should go both ways in the pixel/grid transformations
    var tinyPixelCoords = [
      {'x':0,'y':0},
      {'x':200,'y':150},
      {'x':600,'y':300}
    ];
    var tinyGridCoords = [
      {'gridX':0,'gridY':0},
      {'gridX':1,'gridY':1},
      {'gridX':3,'gridY':2}
    ];

    it("with tiny grid should correctly transform pixel coords to grid coords", function() {
      for (var i = 0; i < tinyPixelCoords.length; i++) {
        expect(util.pixelToGrid(tinyPixelCoords[i].x, tinyPixelCoords[i].y, tinyGridW, tinyGridH))
          .toEqual(tinyGridCoords[i]);
      }

      expect(util.pixelToGrid(667, 309, tinyGridW, tinyGridH)).toEqual({'gridX':3,'gridY':2});
    });

    it("with tiny grid should correctly transform grid coords to pixel coords", function() {
      for (var i = 0; i < tinyGridCoords.length; i++) {
        expect(util.gridToPixel(tinyGridCoords[i].gridX, tinyGridCoords[i].gridY, tinyGridW, tinyGridH))
          .toEqual(tinyPixelCoords[i]);
      }
    });
  });

  describe("circular indices", function() {
    it("should work exactly like in python", function() {
      var len = 6;
      expect(util.circularIdx(3, len)).toEqual(3);
      expect(util.circularIdx(-1, len)).toEqual(len - 1);
      expect(util.circularIdx(len, len)).toEqual(0);
      expect(util.circularIdx(-5, len)).toEqual(1);
      expect(util.circularIdx(-20, len)).toEqual(4);
      expect(util.circularIdx(32, len)).toEqual(2);
    });
  });

  describe("string duration to secs", function() {
    it("should work", function() {
      expect(util.stringDurationToSecs('1:06')).toEqual(66);
      expect(util.stringDurationToSecs('33:50')).toEqual(2030);
      expect(util.stringDurationToSecs('00:01')).toEqual(1);
      expect(util.stringDurationToSecs('0:10')).toEqual(10);
      expect(util.stringDurationToSecs('10:00')).toEqual(600);
      expect(util.stringDurationToSecs('0:2')).toEqual(2);
    });
  });

  describe("deep copy", function() {
    it("should be able to copy arrays with objects", function() {
      var a = [{'x':2, 'y':3}, {'wow':1234}];
      var b = util.deepCopy(a);
      expect(a).not.toBe(b);
      expect(a[0].x).toEqual(b[0].x);
      b[0].x = 567;
      expect(a[0].x).not.toEqual(b[0].x);
    });
  });

  describe("shallow copy", function() {
    it("should be able to copy object with numbers", function() {
      var a = {'x':2, 'y':3};
      var b = util.shallowCopy(a);
      expect(a).not.toBe(b);
      expect(a.x).toEqual(b.x);
      b.x = 567;
      expect(a.x).not.toEqual(b.x);
    });
  });
});

}());