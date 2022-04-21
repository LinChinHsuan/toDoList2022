let data = JSON.parse(localStorage.getItem("toDoList")) || [];

function renderData(){
    let list = document.getElementById("list");
    let str = "";
    data.forEach(function(item,index){
        str += `
        <li class="list-group-item">${item.content}
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true" data-num="${index}">&times;</span>
            </button>
        </li>
        `;
    });
    list.innerHTML = str;
    document.getElementById("toDo").value = "";
    localStorage.setItem("toDoList",JSON.stringify(data));
}
renderData();

//新增
document.getElementById("button-addon2").addEventListener("click",function(){
    let newToDo = document.getElementById("toDo").value;
    if(newToDo === ""){
        return
    }
    let item = {
        content: newToDo
    }
    data.unshift(item);
    renderData();
},false);

//刪除
document.getElementById("list").addEventListener("click",function(e){
    if(e.target.nodeName === "SPAN"){
        data.splice(e.target.dataset.num,1);
        renderData();
    } 
},false);