let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");


let string = "";
let arr =Array.from(buttons)

arr.forEach(stor=>{
 stor.addEventListener("click",(even)=>{
 if(even.target.innerHTML=="="){
    string = eval(string)
    input.value = string
    
    
}else if(even.target.innerHTML=="AC"){
    string="";
    input.value=string
 }else if(even.target.innerHTML=="DEL"){
     string = string.substring(0,string.length-1)
     input.value=string
 }
 else{
 string+=even.target.innerHTML;
 input.value=string;
 }
 })
})