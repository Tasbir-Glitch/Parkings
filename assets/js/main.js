var scale = 1,
panning = false,
pointX = 0,
pointY = 0,
start = { x: 0, y: 0 },
zoom = document.getElementById("zoom");

function setTransform() {
zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
}

zoom.onmousedown = function (e) {
e.preventDefault();
start = { x: e.clientX - pointX, y: e.clientY - pointY };
panning = true;
}

zoom.onmouseup = function (e) {
panning = false;
}

zoom.onmousemove = function (e) {
e.preventDefault();
if (!panning) {
  return;
}
pointX = (e.clientX - start.x);
pointY = (e.clientY - start.y);
setTransform();
}

zoom.onwheel = function (e) {
e.preventDefault();
var xs = (e.clientX - pointX) / scale,
  ys = (e.clientY - pointY) / scale,
  delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
(delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
pointX = e.clientX - xs * scale;
pointY = e.clientY - ys * scale;

setTransform();
}


// scale
var $el = $("#very-specific-design");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $("#scaleable-wrapper");

$wrapper.resizable({
  resize: doResize
});

function doResize(event, ui) {
  
  var scale, origin;
    
  scale = Math.min(
    ui.size.width / elWidth,    
    ui.size.height / elHeight
  );
  
  $el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
  });
  
}

var starterData = { 
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}
doResize(null, starterData);
