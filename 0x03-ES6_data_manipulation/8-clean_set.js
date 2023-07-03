export default function cleanSet(set, startString) {
  if (
    !(set instanceof Set)
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  const setArr = [...set];
  return setArr
    .filter((element) => element.startsWith(startString))
    .map((value) => value.replace(startString, ''))
    .join('-');
}
