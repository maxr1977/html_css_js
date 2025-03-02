const items = [
  { name: "Товар A", price: 25 },
  { name: "Товар B", price: 60 }, 
  { name: "Товар C", price: 40 },
]

function hasExpensiveItem(items) {
    return items.some(item => item.price > 50);
}

console.log(hasExpensiveItem(items))