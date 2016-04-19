const Utils = {
  map (num, min1, max1, min2, max2) {
    return (num - min1) * (max2 - min2) / (max1 - min1) + min2
  }
}

export default Utils
