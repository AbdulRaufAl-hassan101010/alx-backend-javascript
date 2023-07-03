export default function hasValuesFromArray(set, arr) {
  if (!(set instanceof Set) || !(arr instanceof Array)) {
    return new TypeError('');
  }

  return arr.every((element) => set.has(element));
}
