let inputBox = document.getElementById("input-box");
let lstContain = document.getElementById("list-container");
  
function addTask(){
    if(inputBox.value ===''){
        alert("you must write something");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        lstContain.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}
lstContain.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data", lstContain.html);
}

function showTask(){
    lstContain.innerHTML = localStorage.getItem("data");
}
// showTask(); 