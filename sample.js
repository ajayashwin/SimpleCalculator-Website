let ansEl = document.getElementById("answerElement");


let NumberEl1 = document.getElementById("NumberEl1"); 
let NumberEl2 = document.getElementById("NumberEl2"); 
let NumberEl3 = document.getElementById("NumberEl3"); 
let NumberEl4 = document.getElementById("NumberEl4"); 
let NumberEl5 = document.getElementById("NumberEl5");
let NumberEl6 = document.getElementById("NumberEl6"); 
let NumberEl7 = document.getElementById("NumberEl7");  
let NumberEl8 = document.getElementById("NumberEl8"); 
let NumberEl9 = document.getElementById("NumberEl9"); 
let NumberEl0 = document.getElementById("NumberEl0"); 
let NumberEldot = document.getElementById("NumberEldot"); 

let clearEl = document.getElementById("clearEl");
let deletebtnEl = document.getElementById("deletebtnEl");
let dividedEl = document.getElementById("dividingEl");

var ans ;
var expression;

ansEl.textContent = "";
function equalel(){
    if(expression=="/"){
        ans = ans/parseInt(ansEl.textContent);
        ansEl.textContent = ans;
    }
    else if(expression=="+"){
        ans = ans+parseInt(ansEl.textContent);
        ansEl.textContent = ans;
    }
    else if(expression=="*"){
        ans = ans*parseInt(ansEl.textContent);
        ansEl.textContent = ans;
    }
    else if(expression=="-"){
        ans = ans-parseInt(ansEl.textContent);
        ansEl.textContent = ans;
    }
    else if(expression=="%"){
        ans = ans/parseInt(ansEl.textContent);
        ans = ans*100;
        ansEl.textContent = ans;
    }
}

function adding(){

    ans = parseInt(ansEl.textContent);
    expression = "+";
    ansEl.textContent = "";
    
}

function subracting(){

    ans = parseInt(ansEl.textContent);
    expression = "-";
    ansEl.textContent = "";
    
}

function multiplication(){

    ans = parseInt(ansEl.textContent);
    expression = "*";
    ansEl.textContent = "";
    
}

function dividing(){

    ans = parseInt(ansEl.textContent);
    expression = "/";
    ansEl.textContent = "";
    
}

function percentage(){

    ans = parseInt(ansEl.textContent);
    expression = "%";
    ansEl.textContent = "";
    
}





function deletebtn(){
    ansEl.textContent=(ansEl.textContent).slice(0,-1);
}
function clearel(){
    ansEl.textContent = "";
}
function dot(){
    ansEl.textContent += NumberEldot.textContent;
}
function zero(){
    ansEl.textContent += NumberEl0.textContent;
}
function one(){
    ansEl.textContent += NumberEl1.textContent;
}

function two(){
    ansEl.textContent += NumberEl2.textContent;
}
function three(){
    ansEl.textContent += NumberEl3.textContent;
}
function four(){
    ansEl.textContent += NumberEl4.textContent;
}
function five(){
    ansEl.textContent += NumberEl5.textContent;
}
function six(){
    ansEl.textContent += NumberEl6.textContent;
}
function seven(){
    ansEl.textContent += NumberEl7.textContent;
}
function eight(){
    ansEl.textContent += NumberEl8.textContent;
}
function nine(){
    ansEl.textContent += NumberEl9.textContent;
}