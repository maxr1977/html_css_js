// Первое задание
async function getTodo() {
  const todo = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()
  console.log(todo)
}

getTodo()

// Второе задание
async function getPosts() {
  const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')).json()
  console.log(posts)
}

getPosts();
