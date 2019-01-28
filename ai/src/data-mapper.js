module.exports = { 
  mapPoint: mapPoint,
  mapPoint2: mapPoint2
}

function mapPoint(dataPoint) {
  const GRID_SIZE = 400;
  const snakeTail = {};
  const [head, ...tail] = dataPoint.snake.cells;
  tail.forEach((cell, idx) => {
    snakeTail[`tail_${cell.pos}`] = 1
  })
  const mappedDataPoint = {
    input: {
      [dataPoint.snake.dir]: 1,
      ...snakeTail,
      head: dataPoint.snake.cells[0].pos / GRID_SIZE,
      egg: dataPoint.egg.pos / GRID_SIZE
    },
    output: {
      [dataPoint.keyCode]: 1
    }
  };
  // console.log(JSON.stringify(mappedDataPoint));
  return mappedDataPoint;
}


function mapPoint2(dataPoint) {
  const GRID_LENGTH = 10;
  const snakeTail = {};
  const [head, ...tail] = dataPoint.snake.cells;
  tail.forEach((cell, idx) => {
    snakeTail[`tail_${cell.pos}`] = 1
  })
  const mappedDataPoint = {
    input: {
        headX: (dataPoint.snake.cells[0].pos % GRID_LENGTH) / GRID_LENGTH,
        headY: Math.floor(dataPoint.snake.cells[0].pos / GRID_LENGTH) / GRID_LENGTH
    },
    output: {
      [dataPoint.keyCode]: 1
    }
  };
  return mappedDataPoint;
}




