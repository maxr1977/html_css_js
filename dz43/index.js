fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const usersContainer = document.getElementById('users-container')

          users.forEach(user => {
          const userCard = document.createElement('div')
          userCard.className = 'user-card'
          
          userCard.innerHTML = `
            <h3>${user.username}</h3>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
          `
          
          usersContainer.appendChild(userCard); // Добавляем карточку в контейнер
        });
      });