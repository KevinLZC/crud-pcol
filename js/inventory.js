class Inventory {
  constructor() {
    this.inventory = [
      new Item('AmG66f7', 'Laptop', 'Inspiron', 'Dell', 1000),
      new Item('EBcIfIj', 'Smartphone', 'Galaxy', 'Samsung', 800),
      new Item('zttAbsi', 'Tablet', 'iPad', 'Apple', 600),
      new Item('MXdgit8', 'Smartwatch', 'Watch', 'Apple', 400),
      new Item('nzblsBl', 'Headphones', 'Beats', 'Apple', 300)
    ]
  }

  get getInventory() {
    return this.inventory
  }

  addNewItem(item) {
    this.inventory.push(item)
    window.alert(`Se agregó el producto con ID ${item.id} de forma correcta`);
  }

  deleteItem(id) {
    this.inventory = this.inventory.filter(item => item.getId !== id)
    window.alert(`Se eliminó el producto con ID ${id} de forma correcta`);
  }
}