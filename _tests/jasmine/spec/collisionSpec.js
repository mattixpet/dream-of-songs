describe("collision", function() {
  var collision = global.get('collision');

  describe("rect collision", function() {
    it("should calculate collision of rect A with rect B", function() {
      var testRects = [
        // no collision
        [
        //aX,   aY,   aW,  aH
          [0,   0,   200, 200],
        //bX,   bY,   bW,  bH 
          [201, 201, 401, 401]
        ],
        // only x collision
        [
          [321, 450,  56,  74],
          [340, 200, 181, 190]
        ],
        // only y collision
        [
          [  5,   3, 140,  76],
          [300,  38, 181, 190]
        ],
        // top left point collides
        [
          [ 50,  50, 100, 100],
          [  5,   5, 100, 100]
        ],
        // top right point collides
        [
          [ 50,  50, 200, 100],
          [150,   0, 100, 100]
        ],
        // bot left point collides
        [
          [ 50,   4, 100, 100],
          [ 25,  25,  50, 120]
        ],
        // bot right point collides
        [
          [ 49,  49, 100, 100],
          [ 50,  50, 100, 100]
        ],
        // all points collide
        [
          [ 50,  50, 100, 100],
          [ 25,  25, 400, 300]
        ],
        // bottom two points collide
        [
          [ 50,  50, 100,  100],
          [ 25, 120, 300, 1800]
        ]
      ];
      var testResults = [
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true
      ];

      expect(testRects.length).toEqual(testResults.length);

      for (var i = 0; i < testRects.length; i++) {
        var a = testRects[i][0];
        var b = testRects[i][1];
        expect(collision.rectCollision(a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3]))
          .toEqual(testResults[i]);
        // and let's not forget the collisions should also work if b is the first rect
        expect(collision.rectCollision(b[0], b[1], b[2], b[3], a[0], a[1], a[2], a[3]))
          .toEqual(testResults[i]);
      }
    });
  });
});
