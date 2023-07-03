export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return new TypeError(
      'Invalid arguments: set must be a Set and startString must be a string',
    );
  }

  if (startString.length === 0) {
    return '';
  }

  const setArr = [...set];
  return setArr
    .filter((element) => element.startsWith(startString))
    .map((value) => value.replace(startString, ''))
    .join('-');
}
