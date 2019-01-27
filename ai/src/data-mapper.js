module.exports = { 
  mapPoint: mapPoint
}

const GRID_SIZE = 400;

function mapPoint(dataPoint) {
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

