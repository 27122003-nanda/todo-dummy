//let btn=document.querySelector("#btn")
//document.getElementId("btn")
const additem=()=>{
    //step1.Read user input from textbox
    let userinput=document.querySelector("#inp").value
    console.log(userinput);

//step2.create list item
let listitem=document.createElement("li")
listitem.textContent=userinput
//step3.Target the list
let list=document.querySelector("#todo")
//step4.Add item to the list
list.appendChild(listitem)
}
/insert before append appendchild/
let btn=document.querySelector("#btn")
btn.addEventListener("click",additem)
