type Todo = {
    content: string
}

let data:Todo[] = JSON.parse(localStorage.getItem("toDoList") as string) || []

function renderData(): void{
    let list = document.getElementById("list") as HTMLUListElement
    let str:string = ""
    data.forEach(function(item: Todo, index){
        str += `
        <li class="list-group-item">${item.content}
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true" data-num="${index}">&times;</span>
            </button>
        </li>
        `
    })
    list.innerHTML = str;
    (document.getElementById('toDo') as HTMLInputElement).value = ''
    localStorage.setItem("toDoList",JSON.stringify(data))
}
renderData();

//新增
(document.getElementById("button-addon2") as HTMLButtonElement).addEventListener("click",function(){
    let newToDo:string = (document.getElementById('toDo') as HTMLInputElement).value;
    if(newToDo === ''){
        return
    }
    let item = {
        content: newToDo
    }
    data.unshift(item);
    renderData();
},false);

//刪除
(document.getElementById("list") as HTMLUListElement).addEventListener("click",function(e){
    if((e.target as HTMLElement).nodeName === "SPAN"){
        let targetIndex:number = parseInt(((e.target as HTMLElement).dataset.num as string))
        data.splice(targetIndex, 1)
        renderData()
    } 
},false);