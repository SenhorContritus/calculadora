var conta = " "
var ultimoNum = " "
function insert(num){
    
    if(ultimoNum == "+" || ultimoNum == "-" || ultimoNum == "*" || ultimoNum == "/" ){
        c()     
   }
   var numero = document.getElementById("resultado").innerHTML
   document.getElementById("resultado").innerHTML = numero+num
   
   if(numero.length > 14){
    document.getElementById("resultado").innerHTML = numero.substring(0, resultado.length = 10)
    }
    ultimoNum = num;
    conta = conta + num;
    console.log(conta)
}
   

function back(){
    var resultado = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1)
}
function c(){
    document.getElementById("resultado").innerHTML = ""
}
function igual(){
    var res = document.getElementById("resultado")
    var resultado = res.innerHTML
    
    if(resultado){
        console.log()
        res.innerHTML = eval(conta)
        if(resultado.length > 14){
        document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length = 10)
        console.log(resultado.length)
        conta = " "
        
    }
    }
    
    
}