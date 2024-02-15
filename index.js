class App {
  constructor() {
    this.inventory = new InventoryHardwre()
  }

  addNewItem(item) {
    this.inventory.push(item)
  }

  listInventory() {
    let items = this.inventory.getInventory()
    items.forEach(item => {
      document.getElementById('inventory').innerHTML += `
      <tr>
        <td>${item.getId()}</td>
        <td>${item.getName()}</td>
        <td>${item.getModel()}</td>
        <td>${item.getBrand()}</td>
        <td>${item.getPrice()}</td>
        <td>
          <button href="">Detalles</button>
          <button href="">Editar</button>
          <button href="">Eliminar</button>
        </td>
    </tr>
      `
    })
  }

}

class InventoryHardwre {
  constructor() {
    this.inventory = []
  }

  getInventory() {
    return this.inventory
  }
}

class Item {
  constructor(id, name, model, brand, price, description) {
    this.id = id
    this.name = name
    this.model = model
    this.brand = brand
    this.price = price
    this.description = description
  }

  // Getters
  getId() {
    return this.id
  }
  getName() {
    return this.name
  }
  getModel() {
    return this.model
  }
  getBrand() {
    return this.brand
  }
  getPrice() {
    return this.price
  }
  getDescription() {
    return this.description
  }

  // Setters
  setId(id) {
    this.id = id
  }
  setName(name) {
    this.name = name
  }
  setModel(model) {
    this.model = model
  }
  setBrand(brand) {
    this.brand = brand
  }
  setPrice(price) {
    this.price = price
  }
  setDescription(description) {
    this.description = description
  }
}

