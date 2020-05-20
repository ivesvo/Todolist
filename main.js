
let itemList = []

let addItem = () => {
    //console.log("IS IT FIRED?")
    let todo = {
        contents: document.getElementById("itemInput").value,
        isDone: false
        
        
    }
    itemList.push(todo)
    showList(itemList)
    document.getElementById("itemInput").value = null
    // console.log(todo)

}


let showList = (list) => {
    let message = list.map((item, index) => {
        if (item.isDone) {
           return `<li><input class="box" id="box" type="checkbox" onclick="toggleDone(${index})">
        ${item.contents}<a href="#" class="undonemessage" onclick="toggle(${index})">Undone!</a><button class="x" onclick="remove(${index})">x</button></li>`.strike()
        
    } else { 
        return `<li><input class="box" id="box" type="checkbox" onclick="toggleDone(${index})">
    ${item.contents}<a href="#" class="donemessage" onclick="toggle(${index})">Done!</a><button class="x" onclick="remove(${index})">x</button></li>`}
    
    
    }).join(" ")
    document.getElementById("resultArea").innerHTML = message
}



function remove(index) {
    itemList.splice(index, 1);
    showList(itemList)
}

function toggleDone(index){
    isDone = true
    itemList[index].isDone = true;
    // document.getElementById("finishMessage").innerHTML = resultMessage
}


function toggle(index){
    // itemList[index].isDone = true;
    itemList[index].isDone = ! itemList[index].isDone
    showList (itemList)

}


// function checkMessage(index){
//     if 
// }



// let resultMessage = ''
// document.getElementById("finishmessage").innerHTML = `${resultMessage}`
// if (itemList[index].isDone = true){
//     resultMessage = "Done"
// }


// elems = document.getElementsByClassName('box');
//     Array.from(elems).forEach(v => v.addEventListener('change', function(){
//       this.parentNode.classList.toggle('checked');
//     }));

// // creating x button
// let myList = getElementsByTagName ("LI");
// let i;
// for (i = 0; i < myListlength; i++) {
//     span = document.createElement("SPAN");
//     txt = document.createTextNode("\u00D7");
//     span.classname = "close";
//     span.appendChild(txt);
//     myList[i].appendChild(span);
// }

// // closing x button
// let close = document.getElementsByClassName("close");

// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function(){
//       div = this.parentElement;
//       div.style.display = "none";
//   }

// 
