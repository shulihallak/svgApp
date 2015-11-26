window.onload = function (){

  var s = Snap('#svg');
  var g = s.group();
  var circle = s.circle(100, 100, 50);

  circle.attr({
    fill: 'rgb(178, 242, 147)',
    stroke: 'rgb(206, 122, 242)',
    strokeWidth: 1,
    opacity: .6
  });

  var circle2 = s.circle(150, 100, 70);
    circle2.attr({
      opacity: .2
    });

  var circle3 = s.circle(200, 100, 50);

  circle3.attr({
    fill: 'rgb(178, 242, 147)',
    stroke: 'rgb(206, 122, 242)',
    strokeWidth: 1,
    opacity: .6
  });


var r = s.rect(300,300,100,100,20,20)
  .attr({
    stroke: '#123456',
    strokeWidth: 2,
    fill: 'red',
    opacity: .2
  });

  var text = s.text(300,250, 'This is my awesome rectangle');

r.click(function(){
  this.attr('fill', 'steelblue')
});

circle.animate({r: 300}, 1000);

var image = Snap.load('images/laptop2.svg', function(f) {
  g.append(f);
  g.transform('t-150, -150');
  g.attr({
    width: 50,
    height: 50
  });

  g.drag();
});


};
