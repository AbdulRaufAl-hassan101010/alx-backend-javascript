export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const setArr = [...set];
  return setArr
    .filter((element) => element.startsWith(startString))
    .map((value) => value.replace(startString, ''))
    .join('-');
}
