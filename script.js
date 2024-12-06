const userinput=document.getElementById("userinput");
const addbtn=document.getElementById("add-btn");
const todocontainer=document.getElementById("todocontainer");
addbtn.addEventListener("click",()=>{
    let input=userinput.value.trim();
    if(input==='')
    {
        alert("Please enter a todo");
        return;
    }
    const div=document.createElement("div");
    div.classList.add("items");
    const p=document.createElement("p");
    p.innerText=input;
    p.classList.add("text");
    div.appendChild(p);
    todocontainer.appendChild(div);
    userinput.value='';
})