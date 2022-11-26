let myForm = document.getElementById("myForm")
let myInput = document.getElementById("myInput")
let myList= document.getElementById("myList")

myForm.addEventListener("submit", 
            (data) => {
  data.preventDefault()
  createItem(myInput.value) 
})


createItem = (d) =>{
  let myTemplate = `<li> ${d} <button onclick ="deleteItem(this)">Delete</button></li>`
  myList.insertAdjacentHTML("beforeEnd",myTemplate)
  myInput.value =""
  myInput.focus()
  
}

deleteItem = (x) =>{
  x.parentElement.remove()
}