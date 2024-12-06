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
    const finishbtn=document.createElement("button");
    finishbtn.innerText="FINISH";
    finishbtn.classList.add("finish-btn");
    finishbtn.addEventListener("click",(e)=>{
        p.classList.toggle('finish')});

        const delbtn=document.createElement("button");
        delbtn.innerText="DELETE";
        delbtn.classList.add("del-btn");
        delbtn.addEventListener("click",(e)=>{
            e.target.parentElement.remove();
        })
    div.appendChild(p);
    div.append(finishbtn);
    div.appendChild(delbtn);
    todocontainer.appendChild(div);
    
    userinput.value='';
})