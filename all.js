var data = JSON.parse(localStorage.getItem("toDoList")) || [];
function renderData() {
    var list = document.getElementById("list");
    var str = "";
    data.forEach(function (item, index) {
        str += "\n        <li class=\"list-group-item\">".concat(item.content, "\n            <button type=\"button\" class=\"close\" aria-label=\"Close\">\n                <span aria-hidden=\"true\" data-num=\"").concat(index, "\">&times;</span>\n            </button>\n        </li>\n        ");
    });
    list.innerHTML = str;
    document.getElementById('toDo').value = '';
    localStorage.setItem("toDoList", JSON.stringify(data));
}
renderData();
//新增
document.getElementById("button-addon2").addEventListener("click", function () {
    var newToDo = document.getElementById('toDo').value;
    if (newToDo === '') {
        return;
    }
    var item = {
        content: newToDo
    };
    data.unshift(item);
    renderData();
}, false);
//刪除
document.getElementById("list").addEventListener("click", function (e) {
    if (e.target.nodeName === "SPAN") {
        var targetIndex = parseInt(e.target.dataset.num);
        data.splice(targetIndex, 1);
        renderData();
    }
}, false);
