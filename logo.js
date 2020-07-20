const isDarkMode = matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
const darkColor = '#fff';
const lightColor = '#000';
const spacing = 100;

const defaults = {
  width: 150,
  height: 150,
  fill: true,
  backface: false,
  color: isDarkMode ? darkColor : lightColor,
  stroke: 10,
  cornerRadius: 5,
};

let logo = new Zdog.Illustration({
  element: '#logo',
  dragRotate: true,
  rotate: { x: -Zdog.TAU/8, y: -Zdog.TAU/8 },
});

let logoTop = new Zdog.RoundedRect({
  ...defaults,
  addTo: logo,
  translate: { y: -spacing },
  rotate: { x: Zdog.TAU/4 },
});

let logoFront = new Zdog.RoundedRect({
  ...defaults,
  addTo: logo,
  translate: { z: spacing },
});

let logoBack = new Zdog.RoundedRect({
  ...defaults,
  addTo: logo,
  translate: { z: -spacing },
  rotate: { y: Zdog.TAU/2 },
});

let logoLeft = new Zdog.RoundedRect({
  ...defaults,
  addTo: logo,
  translate: { x: -spacing },
  rotate: { y: Zdog.TAU/4 },
});

let logoRight = new Zdog.RoundedRect({
  ...defaults,
  addTo: logo,
  translate: { x: spacing },
  rotate: { y: -Zdog.TAU/4 },
});

function onDarkModeChanged(event) {
  logoTop.color = event.matches ? darkColor : lightColor;
  logoFront.color = event.matches ? darkColor : lightColor;
  logoBack.color = event.matches ? darkColor : lightColor;
  logoLeft.color = event.matches ? darkColor : lightColor;
  logoRight.color = event.matches ? darkColor : lightColor;
}

function animate() {
  logo.rotate.x = -Zdog.TAU/12;
  logo.updateRenderGraph();
  requestAnimationFrame(animate);
}

if (matchMedia) matchMedia('(prefers-color-scheme: dark)').addListener(onDarkModeChanged);

animate();