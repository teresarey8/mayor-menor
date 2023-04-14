let num1 = parseFloat(prompt("Introduzca aquí el primer número:"));
let num2 = parseFloat(prompt("Introduzca aquí el segundo número"));

if (num1>num2) {
    alert(num1 + "Es mayor")
}
else if (num1<num2){
    alert(num2 + "Es mayor")
}
else if(num1==num2){
    alert(num1 && num2 + "Son iguales")
}
if (num2 % 2 == 0){
    alert(num2 + " Es par")
}
else{
    alert(num2 + " Es impar")
}