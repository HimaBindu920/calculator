var s=0;
var d="";
document.getElementById("add").onclick = function(){
    var a=parseInt(document.getElementById("fnum").value);
   s=s+a;
    if(d.length==0){
        d=d+a;
        
    }
    else{
        d=d+("+"+a);
        
        
    }
    document.getElementById("ans").textContent = s;
}
document.getElementById("sub").onclick = function(){
    var a=parseInt(document.getElementById("fnum").value);
    s=s-a;
    if(d.length==0){
        d=d+a;
    }
    else{
        d=d+("-"+a);
    }
    document.getElementById("ans").textContent = s;
   
    
}
document.getElementById("mul").onclick = function(){
    var a=parseInt(document.getElementById("fnum").value);
    s=s*a;
    if(d.length==0){
        d=d+a;
    }
    else{
        d=d+("*"+a);
    }
    document.getElementById("ans").textContent = s;
   
}
document.getElementById("div").onclick = function(){
    var a=parseInt(document.getElementById("fnum").value);
    s=s/a;
    if(d.length==0){
        d=d+a;
    }
    else{
        d=d+("/"+a);
    }
    document.getElementById("ans").textContent = s;
    
}
document.getElementById("equal").onclick=function(){
    document.getElementById("wait").textContent = d;
}
