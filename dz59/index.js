const data = ["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4", "Элемент 5", "Lorem ipsum dolor, sit amet consectetur adipisicing elit."];

const listContainer = document.getElementById("dynamic-list");

function createList(items) {
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";

    deleteButton.addEventListener("click", () => {
      listContainer.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);

    listContainer.appendChild(listItem);
  });
}

createList(data);
