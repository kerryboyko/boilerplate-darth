export const shank = function (start, delCount, ...concatables) {
  return this.slice(0, start).concat(concatables).concat(this.slice(start + delCount))
}
