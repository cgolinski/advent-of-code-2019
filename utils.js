export const pipe =
  (...fns) =>
  (initialVal) =>
    fns.reduce((acc, fn) => fn(acc), initialVal);
