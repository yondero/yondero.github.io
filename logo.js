let logo = new Zdog.Illustration({
  element: '#logo',
  dragRotate: true,
  rotate: { x: -Zdog.TAU/8, y: -Zdog.TAU/8 },
});

const spacing = 65;

const defaults = {
  width: 100,
  height: 100,
  fill: true,
  backface: false,
  color: '#fff',
  stroke: 10,
  cornerRadius: 5,
};

// top
new Zdog.RoundedRect({
  ...defaults,
  addTo: logo,
  translate: { y: -spacing },
  rotate: { x: Zdog.TAU/4 },
});

// front
new Zdog.RoundedRect({
  ...defaults,
  addTo: logo,
  translate: { z: spacing },
});

// back
new Zdog.RoundedRect({
  ...defaults,
  addTo: logo,
  translate: { z: -spacing },
  rotate: { y: Zdog.TAU/2 },
});

// left
new Zdog.RoundedRect({
  ...defaults,
  addTo: logo,
  translate: { x: -spacing },
  rotate: { y: Zdog.TAU/4 },
});

// right
new Zdog.RoundedRect({
  ...defaults,
  addTo: logo,
  translate: { x: spacing },
  rotate: { y: -Zdog.TAU/4 },
});

function animate() {
  logo.rotate.x = -Zdog.TAU/8;
  logo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();