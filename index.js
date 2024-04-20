import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseUrl: "https://playground-2231c-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputField = document.getElementById("input-field")
const addBtn = document.getElementById("add-btn")
const shoppingList = document.getElementById("shopping-list")

addBtn.addEventListener("click", () => {
    let inputValue = inputField.value
    push(shoppingListInDB, inputValue)
    
    clearInput()
    addListItems(inputValue)
})

function clearInput() {
    inputField.value = ""
}

function addListItems(item) {
    shoppingList.innerHTML += `<li>${item}</li>`
}