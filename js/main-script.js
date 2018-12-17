$(".geturl").click(function() {
  var i = $(this).attr("data-url");
  window.open(i, "_blank");
}),
  $(document).ready(function() {
    $(".filter-button").click(function() {
      var i = $(this).attr("data-filter");
      $(".filter-button").removeClass("active") && $(this).addClass("active"),
        "all" == i
          ? $(".filter").show()
          : ($(".filter")
              .not("." + i)
              .hide(),
            $(".filter")
              .filter("." + i)
              .show());
    });
  });


var canvas = document.querySelector("canvas");
(canvas.width = window.innerWidth), (canvas.height = window.innerHeight);
var c = canvas.getContext("2d");
function Circle(i, t, a, r, n, e) {
  (this.x = i),
    (this.y = t),
    (this.dx = a),
    (this.dy = r),
    (this.radius = n),
    (this.color = e),
    (this.draw = function() {
      c.beginPath(),
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !0),
        (c.fillStyle = e),
        c.fill();
    }),
    (this.update = function() {
      (this.x + this.radius > innerWidth || this.x - this.radius < 0) &&
        (this.dx = -this.dx),
        (this.y + this.radius > innerHeight || this.y - this.radius < 0) &&
          (this.dy = -this.dy),
        (this.x += this.dx),
        (this.y += this.dy),
        this.draw();
    });
}
for (var particleNum = 110, circleArray = [], i = 0; i < particleNum; i++) {
  var x = Math.random() * innerWidth,
    y = Math.random() * innerHeight,
    dx = 0.8 * (Math.random() - 0.5),
    dy = 0.5 * (Math.random() - 0.5),
    radius = 3 * Math.random(),
    color = "rgba(255,79,184," + Math.random() + ")";
  circleArray.push(new Circle(x, y, dx, dy, radius, color));
}
function animate() {
  requestAnimationFrame(animate), c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) circleArray[i].update();
}
animate();
