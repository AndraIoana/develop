
var operator_pressed=0;
var previous_value=0;

function show_nr(nr){

var display_value=document.getElementById("display").value;


if(display_value==0 || check_nrafterop==0) { 
document.getElementById("display").value=nr;
    } else {
	document.getElementById("display").value=display_value + nr;
       }
       check_nrafterop=1;
}

function delete_nr(){

var display_value=document.getElementById("display").value
var nrtostr=display_value.toString();
document.getElementById("display").value=nrtostr.slice(0, nrtostr.length-1);
}

function reset(){
	document.getElementById("display").value=0;
	operator_pressed=0;
}

function operation(op){
    check_nrafterop=0;
    operator_pressed=op;
	previous_value=document.getElementById("display").value;

}

function equals(){
 var value1=parseInt(previous_value);
 var value2=parseInt(document.getElementById("display").value)

if (previous_value==0){  } //daca previous value ramae la valoarea initiala de 0, adica nu se seteaza cu valoarea din display la apelul functiei operation (cand se apasa pe un operator), atunci sa nu se intample nimic
	else {
switch (operator_pressed){
case '+': document.getElementById("display").value= value1 + value2;
          break;
case '-': document.getElementById("display").value= value1 - value2;
          break;
case '*': document.getElementById("display").value= value1 * value2;
          break;
case '/': document.getElementById("display").value= value1 / value2;
          break;
             }
          }
    operator_pressed=0; //in cazul in care dupa un = mai apas odata pe = sa nu se intample nimic

}