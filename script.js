let myForm = document.getElementById("myForm")
let myInput = document.getElementById("myInput")
let myList= document.getElementById("myList")

myForm.addEventListener("submit", 
            (data) => {
  data.preventDefault()
  if(myInput.value == 0){
    alert("Please Add The Notes")
  }
  else{
    createItem(myInput.value)
  }
})
createItem = (d) =>{
  let myTemplate = `<li class= "notes"> ${d} <button class="delete" onclick ="deleteItem(this)">Delete</button></li>`
  myList.insertAdjacentHTML("beforeEnd",myTemplate)
  myInput.value =""
  myInput.focus()
  
}

deleteItem = (x) =>{
  x.parentElement.remove()
}