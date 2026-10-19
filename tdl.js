const taskinput = document.getElementById("taskinput");
const tasklist = document.getElementById("tasklist");

function addTask() {
    if(taskinput.value === '') {
        alert("Please enter a task.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskinput.value;
        tasklist.appendChild(li);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "X";
        li.appendChild(deleteButton);

        taskinput.value = '';
    }
}

tasklist.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
})