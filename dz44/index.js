document.querySelector('#create-form').addEventListener('submit', (e) => {
  e.preventDefault()
  createTodo(e)
})

// Функция для получения задач из localStorage

const getTodos = () => {
  const localStorageTodos = JSON.parse(localStorage.getItem('todosStorage'))
  return localStorageTodos
}

// Функция для отрисовки задач на странице
const renderTodos = () => {
  // Получаем задачи из localStorage
  const localStorageTodos = JSON.parse(localStorage.getItem('todosStorage'))
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    // Получаем контейнер для задач
    const container = document.querySelector('#todo-list')
    container.innerHTML = '' // Очищаем контейнер перед добавлением новых задач

    // Проходим по массиву задач и добавляем их в контейнер
    localStorageTodos.forEach((todo) => {
      // Форматируем дату для отображения
      const startDate = new Date(todo.startDate).toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
      })

      const id = todo.id
      // Создаем HTML-разметку для задачи
      container.insertAdjacentHTML(
        'beforeend',
        `
            <li class="todo-block">
              <label class="checkbox" for="${id}" onclick="toggleTodoDone('${id}')">
                <input type="checkbox" name="${id}" id="${id}" ${
          todo.done ? 'checked' : ''
        }/>
                <span class="material-symbols-rounded checkbox__check-icon">
                  check
                </span>
              </label>
              <div class="todo-block__data">
                <p class="todo-block__date">${startDate}</p>
                <h3 class="todo-block__title">${todo.description}</h3>
              </div>
              <span class="material-symbols-rounded" onclick="deleteTodo('${id}')">
                close
              </span>
            </li>
          `
      )
    })
  }
}

// Функция для создания новой задачи
const createTodo = (e) => {
  e.preventDefault()
  // Получаем значения из формы
  const startDate = document.querySelector('#startDate').value
  const description = document.querySelector('#description').value

  // Получаем текущие задачи из localStorage
  const localStorageTodos = getTodos()

  // Создаем объект новой задачи
  const newTodo = {
    id: 'todo_' + Math.random().toString(16).slice(2), // Генерируем уникальный ID
    createdAt: new Date(), // Дата создания задачи
    startDate, // Дата выполнения задачи
    description: description, // Описание задачи
    done: false, // Статус выполнения задачи
  }

  // Проверяем, есть ли задачи в localStorage
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    // Добавляем новую задачу в массив
    localStorageTodos.push(newTodo)
    localStorage.setItem('todosStorage', JSON.stringify(localStorageTodos))
  } else {
    // Если задач нет, создаем новый массив с одной задачей
    localStorage.setItem('todosStorage', JSON.stringify([newTodo]))
  }

  // Отрисовываем обновленный список задач
  renderTodos()
}

// Функция для переключения статуса задачи (выполнено/не выполнено)

// Функция для удаления задачи
const deleteTodo = (todoId) => {
  const localStorageTodos = getTodos()

  // Фильтруем массив, удаляя задачу с указанным ID
  const newTodos = localStorageTodos.filter((todo) => todo.id !== todoId)
  // Сохраняем изменения в localStorage
  localStorage.setItem('todosStorage', JSON.stringify(newTodos))

  // Отрисовываем обновленный список задач
  renderTodos()
}

document.addEventListener('DOMContentLoaded', renderTodos)

//   Используя fetch, получите данные с публичного API (например, JSONPlaceholder).

// Отобразите полученные данные на странице в виде списка.

// Добавьте минимальное оформление с помощью CSS.
