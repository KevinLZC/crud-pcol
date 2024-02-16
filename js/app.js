let inventory = new Inventory()
let items = inventory.getInventory
let itemTable = document.getElementById('itemTableBody')
renderItems()

function renderItems() {
  itemTable.innerHTML = ''
  items.forEach(item => {
    addItemTable(item)
  })
}

let btnAddItem = document.getElementById('btnAdd')
btnAddItem.addEventListener('click', () => {
  let itemId = generarId(6)
  let itemName = document.getElementById('itemName').value
  let itemModel = document.getElementById('itemModel').value
  let itemBrand = document.getElementById('itemBrand').value
  let itemPrice = document.getElementById('itemPrice').value

  let newItem = new Item(itemId, itemName, itemModel, itemBrand, itemPrice)
  inventory.addNewItem(newItem)
  addItemTable(newItem)
  cleanInputs()
})

let btnSaveItem = document.getElementById('btnSave')
btnSaveItem.addEventListener('click', () => {
  let itemId = items.find(item => item.getName === document.getElementById('itemName').value).getId
  saveItem(itemId)
  cleanInputs()
  renderItems()
})

function cleanInputs() {
  document.getElementById('itemName').value = ''
  document.getElementById('itemModel').value = ''
  document.getElementById('itemBrand').value = ''
  document.getElementById('itemPrice').value = ''
}

function generarId(longitud) {
  let id = ""
  const abc = "a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9".split(" ")
  for (i = 0; i <= longitud; i++) {
    const random = Math.floor(Math.random() * abc.length)
    id += abc[random]
  }
  return id
}

function addItemTable(item) {
  itemTable.innerHTML +=
    `<tr id=${item.getId}>
      <td>${item.getId}</td>
      <td>${item.getName}</td>
      <td>${item.getModel}</td>
      <td>${item.getBrand}</td>
      <td>${item.getPrice}</td>
      <td>
        <button onclick="setInputItem('${item.getId}')">Editar</button>
        <button onclick="deleteItem('${item.getId}')">Eliminar</button>
      </td>
    </tr>`
}

function setInputItem(id) {
  let itemName = document.getElementById('itemName')
  let itemModel = document.getElementById('itemModel')
  let itemBrand = document.getElementById('itemBrand')
  let itemPrice = document.getElementById('itemPrice')

  items.map(item => {
    if (item.getId === id) {
      itemName.value = item.getName
      itemModel.value = item.getModel
      itemBrand.value = item.getBrand
      itemPrice.value = item.getPrice
    }
  })
}

function saveItem(id) {
  items.map(item => {
    if (item.getId === id) {
      let itemName = document.getElementById('itemName').value
      let itemModel = document.getElementById('itemModel').value
      let itemBrand = document.getElementById('itemBrand').value
      let itemPrice = document.getElementById('itemPrice').value

      item.setName = itemName
      item.setModel = itemModel
      item.setBrand = itemBrand
      item.setPrice = itemPrice
    }
  })
}

function deleteItem(id) {
  inventory.deleteItem(id)
  let itemTable = document.getElementById(id)
  itemTable.remove()
}

