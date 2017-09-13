export default class Thread {
  static sleep = (interval) => {
    return new Promise((resolve) => {
      setTimeout(resolve, interval)
    })
  }
}
