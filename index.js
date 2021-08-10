const input = document.getElementById("input");
const button = document.getElementById("add");

let list = document.getElementsByTagName("ul")[0];

button.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";
})

list.addEventListener("click", (e) => {
    const li = e.target;
    const ul = li.parentNode;
    ul.removeChild(li);
})