let $ = document
let cg = console.log
let container = $.querySelector(".container")
let ulGroup = $.querySelector(".todos")
let listGroupItem = $.querySelector(".list-group-item")
let add = $.querySelector(".add")
let formControl = $.querySelector("input")
let newTodo 
let newTodoValue 
// let trash = $.querySelector("#trash")




function addNewTodo(){
    let newTodoLi = $.createElement("li")
    newTodoLi.className  = "list-group-item d-flex justify-content-between align-items-center" 
    let newTodoSpan = $.createElement("span")
    newTodoSpan.innerHTML = newTodoValue 
    let newTodoI = $.createElement("i")
    newTodoI.className = "fa fa-trash-o delete"

    newTodoLi.append(newTodoSpan,newTodoI)
    ulGroup.append(newTodoLi)


    newTodoI.addEventListener('click',function(){
        newTodoLi.remove()
    })
    
    // cg(ulGroup)
}



add.addEventListener('submit', function(event){
    event.preventDefault()
})

formControl.addEventListener('keydown' , function(event){
    newTodo = event.target.value.trim()
if(event.key === 'Enter'){
    if(newTodo){
    newTodoValue = formControl.value
    formControl.value = ''
    addNewTodo()
    }
}
})

