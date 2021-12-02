// ====== PART 1 ======
// Source: https://adventofcode.com/2021/day/1

import { rawInput } from './day01.data.js';
import { pipe } from '../utils.js';

const convertTextInputToArray = (input) => {
  const newLine = /\s/;
  const res = input.split(newLine);
  return res;
};

const convertStringsToNumbers = (strings) => {
  const res = strings.map((str) => Number(str));
  return res;
};

const countNumberOfIncreasesInDepth = (numbers) => {
  const res = numbers.reduce((count, curr, index, fullArray) => {
    if (index === 0) {
      return count;
    }
    return curr > fullArray[index - 1] ? count + 1 : count;
  }, 0);
  return res;
};

const answerToPart1 = pipe(
  convertTextInputToArray,
  convertStringsToNumbers,
  countNumberOfIncreasesInDepth
)(rawInput);

// answer: 1342

// ====== PART 2 ======
// Source: https://adventofcode.com/2021/day/1#part2

const countIncreasesInDepthByThreeMeasurementSlidingWindow = (numbers) => {
  const res = numbers.reduce((count, curr, index, fullArray) => {
    if (index < 3) {
      return count;
    }

    const currentThreeMeasurementSum =
      curr + fullArray[index - 1] + fullArray[index - 2];
    const previousThreeMeasurementSum =
      fullArray[index - 1] + fullArray[index - 2] + fullArray[index - 3];

    return currentThreeMeasurementSum > previousThreeMeasurementSum
      ? count + 1
      : count;
  }, 0);
  return res;
};

const answerToPart2 = pipe(
  convertTextInputToArray,
  convertStringsToNumbers,
  countIncreasesInDepthByThreeMeasurementSlidingWindow
)(rawInput);

// answer: 1378
