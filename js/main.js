//
let tbody = document.querySelector("table tbody");
let tfoot = document.querySelector("table tfoot");
let inputtext = document.querySelector("input[type = 'text']");
let inputnum = document.querySelector("input[type='number']");
let inputdate = document.querySelector("input[type='date']");


//
document.querySelector("form").onsubmit = function(e){

 submitfun(e);
 checker();
};
function submitfun(e){
   e.preventDefault();
   if(inputdate.value == '' || inputnum.value == '' || inputtext.value == ''){
        tfoot.innerHTML = '';
        
        document.querySelector("p").innerHTML = "please do not leave any field empty"
 
        setTimeout(function(){
                document.querySelector("p").innerHTML = '';
        },5000);
        
   }else{
  createelement();
  addexp();
  let bodyi = document.querySelectorAll("tr i");
  bodyi.forEach(ele => {
      
  
ele.onclick = function(){
    let parent = this.parentElement;
  //  console.log(parent.previousSibling.textContent.slice(0,-1));
  let content = parent.previousSibling.textContent.slice(0,-1);
 // console.log(parseInt(content));
  lessexp(content)
    parent.parentElement.remove();
    checker();
}
  });
   }
   
}
checker();
function checker(){
    if(tbody.children.length == 0 && tfoot.children.length == 0){

      let tr = document.createElement("tr");
      let trtext = document.createTextNode("no expanses needed");
      tr.appendChild(trtext);
      tfoot.appendChild(tr);
    }else{
       tfoot.innerHTML = '';
    }
    makeemptyinput();
}
function makeemptyinput(){
    inputtext.value = '';
    inputnum.value = '';
    inputdate.value = '';
}

function createelement(){
    let tr2 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td11 = document.createTextNode(inputtext.value);
    td1.appendChild(td11);
    tr2.appendChild(td1);
    let td2 = document.createElement("td");
    let td21 = document.createTextNode(inputdate.value);
    td2.appendChild(td21);
    tr2.appendChild(td2);
    let td3 = document.createElement("td");
    let td31 = document.createTextNode(inputnum.value);
    let td32 = document.createTextNode("$");
    td3.appendChild(td31);
    td3.appendChild(td32);
    tr2.appendChild(td3);
    let td4 = document.createElement("td");
    let i = document.createElement("i");
    let attr = document.createAttribute("class");
    attr.value = 'fas';
    attr.value += ' fa-times';
    i.setAttributeNode(attr);
    td4.appendChild(i);
    tr2.appendChild(td4);
    tbody.appendChild(tr2);
}
function addexp (){
//document.querySelector("p span").textContent += parseInt(inputnum.value) + parseInt(document.querySelector("p span").textContent);
var x =  parseInt(inputnum.value) + parseInt(document.querySelector("p span").textContent);
document.querySelector("p span").textContent = x;
//console.log(x);
}

function lessexp(joi){
var y1 = parseInt(document.querySelector("p span").textContent) - joi;
document.querySelector("p span").textContent = y1;
console.log(y1);
}
