var handle = document.querySelector("#handle");
var proxy = document.querySelector("#proxy");

// Points from path d="M150,100..." attribute
var bezierValues = [
  { x: -60, y: 10 },
  { x: 70, y: 70 },
  { x: 1, y: 0 },
  { x: 140, y: 0 },
  { x: 70, y: 70 },
  { x: 1, y: 0 },
  { x: -140, y: 0 },
];

var bezier = {
  values: bezierValues,
  type: "cubic",
  timeResolution: 0,
  autoRotate: true
};

var bounds = {
  minY: bezierValues[0].y,
  maxY: bezierValues[3].y
};

var boundsDelta = bounds.maxY - bounds.minY;

TweenLite.set([handle, proxy], {
  transformOrigin: "center",
  x: bezierValues[0].x,
  y: bezierValues[0].y
});

// Center the polygon
// The proxy and circle handle I used previously are already centered at
// cx="0" cy="0", so this isn't necessary
// If you're using something other than a circle, you might need to do this
TweenLite.set(handle, {
  xPercent: -50,
  yPercent: -50
});

var bezierTween = TweenLite.to(handle, 1, {
  bezier: bezier,
  ease: Linear.easeNone,
  paused: true  
});

// Set the progress to a small value to force the tween to set the
// starting point and rotation
// If you comment this out, you'll notice that it will start out pointing 
// to the right at 3 o'clock
bezierTween
  .progress(0.00001)
  .invalidate();

var draggable = new Draggable(proxy, {
  bounds: bounds,
  onDrag: update,
  onThrowUpdate: update,
  trigger: handle,
  throwProps: true,
  overshootTolerance: 0
});

TweenLite.set("#svg", { autoAlpha: 1 });

function update() {  
  
  var progress = (this.y - this.minY) / boundsDelta;
  bezierTween.progress(progress);
}