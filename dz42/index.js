function waitForTime(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ожидание завершено")
    }, ms)
  });
}

waitForTime(5000).then((message) => console.log(message))
