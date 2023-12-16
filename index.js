class ShoppingList {
  constructor(items, addItemBtn, newItemText, key = "shoppingList") {
    this.key = key;
    this.itemsElement = document.querySelector(items);
    this.addItemElement = document.querySelector(addItemBtn);
    this.newItemTextElement = document.querySelector(newItemText);

    this.items = JSON.parse(localStorage.getItem(key)) || [""];

    this.initialize();
    this.renderItems();
  }

  initialize() {
    this.addItemElement.addEventListener("click", () => {
      const value = this.newItemTextElement.value;
      this.addItems(value);
      this.newItemTextElement.value = "";
      this.renderItems();
      this.storeItems();
    });
  }
  renderItems() {
    this.itemsElement.innerHTML = "";
    if (this.items.length === 0) {
      const itemElement = document.createElement("li");
      itemElement.textContent = "No Items";
      this.itemsElement.appendChild(itemElement);
    } else {
      this.items.forEach((item, index) => {
        const itemElement = document.createElement("li");
        itemElement.textContent = item;
        const removeItem = document.createElement("span");
        removeItem.textContent = "Remove-Item✅";
        removeItem.classList.add("remove-item");
        removeItem.onclick = () => {
          this.removeItems(index);
          this.renderItems();
          this.storeItems();
        };
        itemElement.appendChild(removeItem);
        this.itemsElement.appendChild(itemElement);
      });
    }
  }
  addItems(newItem) {
    this.items.push(newItem);
  }
  removeItems(indexToRemove) {
    this.items = this.items.filter((item, index) => index !== indexToRemove);
  }

  storeItems() {
    localStorage.setItem(this.key, JSON.stringify(this.items));
  }
}

const myShoppingList = new ShoppingList(
  "#shoppingList",
  "#addItem",
  "#newItemText"
);

