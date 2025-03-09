// Первое задание
// вывод без ошибки
async function getPosts() {
  try {
    const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')).json()
    console.log(posts)
  } catch (error) {
    console.error('Произошла ошибка при выполнении запроса:', error)
  }
}

getPosts()

// вывод с ошибкой
async function getPostsWithError() {
  try {
    const posts = await (await fetch('https://jsonplaceholder.typhhicode.com/posts?userId=1')).json()
    console.log(posts)
  } catch (error) {
    console.error('Произошла ошибка при выполнении запроса:', error)
  }
}

getPostsWithError()

// Второе задание
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Деление на ноль недопустимо")
    }
    return a / b
  } catch (error) {
    console.log(error.message)
  }
}
console.log(divide(20, 5))
console.log(divide(20, 0))

