class ShoppingList {
  constructor(items, addItemBtn, newItemText, key = "shopping list") {
    this.key = key;
    this.itemsElement = document.querySelector(items);
    this.addItemElement = document.querySelector(addItemBtn);
    this.newItemTextElement = document.querySelector(newItemText);

    this.items = JSON.parse(localStorage.getItem(this.key)) || [];
  }

  addItems() {
    this.itemsElement.innerHTML = "";
    if (this.items.length === 0) {
      const itemElement = document.createElement("li");
      itemElement.textContent = "No Items";
      this.itemsElement.appendChild(itemElement);

    }
  }
}

const myShoppingList = new ShoppingList(
  "#shoppingList",
  "#addItem",
  "newItemText"
);

myShoppingList.addItems();