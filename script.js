let input=document.getElementById('do1');
input.addEventListener("click",function(){
    input.style.border="none"
    
})
let add = document.getElementById('button');
let listcontain = document.getElementById('listcontainer')
// var orgDiv = document.getElementById('work1')
// var cloneDiv= orgDiv.cloneNode(true);
add.addEventListener("click",function(){
       
    if(input.value=== ''){
        alert("You must write something")
    }else{
        let li= document.createElement("li");
        li.innerHTML=input.value;
        listcontain.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value="";
    saveData();
//    document.getElementById('list').appendChild(cloneDiv);

})
listcontain.addEventListener("click",function(e){
     if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
     }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData(); 
    }
    
},false)

// var check = document.getElementById('check');
// check.addEventListener("click",function(){
//     check.src='images/checked.png';
// })


function saveData(){
    localStorage.setItem("data",listcontain.innerHTML)
}

function showlist(){

    listcontain.innerHTML=localStorage.getItem("data");
}
showlist();