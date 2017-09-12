class Dot {
  constructor(node) {
    this.node = node;
    [, this.x, this.y] = node.id.split('_');
    this.x = parseInt(this.x);
    this.y = parseInt(this.y);
  }

  getCenterPoint() {
    const { height, width, x, y } = this.node.getBBox();

    return {
      x: x + width / 2,
      y: y + height / 2
    };
  }

  static find(x, y) {
    const dot = document.getElementById(`dot_${x}_${y}`);

    if (dot) {
      return new Dot(dot);
    }

    return null;
  }

  static get random() {
    return new Dot(dots[Math.floor(Math.random() * dots.length)]);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Maximum is the minimum is inclusive
}

function moveDotsFromRandomPos(tl) {
  const dotsGroup = document.getElementById('dots');
  const dots = dotsGroup.getElementsByTagName('path');

  const randomMax = 60;
  const randomMin = -randomMax;

  dotsGroup.style.display = 'block';

  for (const dot of Array.from(dots)) {
    const [, x, y] = dot.id.split('_');

    tl.fromTo(
      dot,
      2,
      {
        x: getRandomInt(randomMin, randomMax),
        y: getRandomInt(randomMin, randomMax)
      },
      {
        x: 0,
        y: 0,
        ease: Power4.easeIn
      },
      0
    );
  }
}
function showLogoText(tl) {
  tl.add('logoScene', '-=.25');
  tl
    .to('#gradientTo', 2, {
      attr: {
        offset: '100%'
      },
      ease: Linear.ease
    })
    .to(
      '#gradientFrom',
      1.25,
      {
        attr: {
          offset: '100%'
        },
        ease: Linear.ease
      },
      '-=.75'
    );
}
function drawLines(tl, startingAt = 'logoScene+=.25', n = 0) {
  const dots = getDots();
  const lines = getLines(dots);
  const dotNodes = dots.map(dot => dot.node);
  tl.add(`lineScene${n}`, startingAt);

  tl.to(
    '#dots-and-lines',
    0,
    { scaleX: Math.random() < 0.5 ? -1 : 1, transformOrigin: 'center center' },
    `lineScene${n}`
  );

  tl.staggerTo(
    dotNodes,
    0.1,
    {
      fill: '#EC008C',
      ease: Linear.ease
    },
    0.2,
    `lineScene${n}`
  );
  tl.staggerFromTo(
    lines,
    0.3,
    {
      drawSVG: '0%'
    },
    {
      drawSVG: '100%',
      ease: Linear.ease
    },
    0.2,
    `lineScene${n}+=0.1`
  );

  tl.add(`lineSceneEnd${n}`, '+=.5');
  tl.to(
    lines,
    0.7,
    {
      opacity: 0,
      ease: Linear.ease
    },
    `lineSceneEnd${n}`
  );
  tl.to(
    dotNodes,
    0.7,
    {
      fill: '#FFFFFF',
      ease: Linear.ease,
      onComplete: () => drawLines(tl, '+=2')
    },
    `lineSceneEnd${n}`
  );
}

function createFullPath(path) {
  const allCoords = [];

  allCoords.push(path.shift());
  for (const coord of path) {
    const from = allCoords[allCoords.length - 1];
    let [fromX, fromY] = from;
    const [toX, toY] = coord;
    const xDiff = fromX - toX;
    const yDiff = fromY - toY;
    let steps = Math.max(Math.abs(xDiff), Math.abs(yDiff)) - 1;

    for (; steps; steps--) {
      if (xDiff) {
        if (xDiff > 0) {
          fromX--;
        } else {
          fromX++;
        }
      }
      if (yDiff) {
        if (yDiff > 0) {
          fromY--;
        } else {
          fromY++;
        }
      }
      allCoords.push([fromX, fromY]);
    }

    allCoords.push(coord);
  }

  return allCoords;
}

let paths = [
  [[0, 0], [0, 2], [-4, 2], [-4, 0], [-3, -1]],
  [[-3, 3], [0, 3], [2, 1], [2, -2], [1, -2]],
  [[3, -2], [3, -3], [0, -3], [-3, 0], [-3, 2]],
  [[0, -5], [-2, -3], [-1, -3], [3, -3], [3, -1]],
  [[5, -5], [3, -5], [-2, 0], [-2, 2]],
  [[0, -4], [-2, -2], [2, -2], [2, 1]],
  [[-4, 3], [-2, 3], [-2, 0], [2, -4]]
].map(createFullPath);

paths = paths.concat(paths.map(path => Array.from(path).reverse()));

function getDots() {
  const path = paths[Math.floor(Math.random() * paths.length)];

  return path.map(dot => Dot.find(...dot));
}
function getLines(dots) {
  const lines = [];
  const lineGroup = document.getElementById('lines');

  lineGroup.innerHTML = '';

  for (let i = 1; i < dots.length; i++) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const from = dots[i - 1].getCenterPoint();
    const to = dots[i].getCenterPoint();
    line.setAttribute('x1', from.x);
    line.setAttribute('y1', from.y);
    line.setAttribute('x2', to.x);
    line.setAttribute('y2', to.y);
    line.setAttribute('stroke', '#EC008C');
    line.setAttribute('stroke-width', '2');
    lineGroup.appendChild(line);
    lines.push(line);
  }

  document.getElementById('lines').style.display = 'block';

  return lines;
}

const tl = new TimelineMax();

moveDotsFromRandomPos(tl);
showLogoText(tl);
drawLines(tl);

// tl.play('lineScene');
// tl.play('logoScene');
