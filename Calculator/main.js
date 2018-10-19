
var operator_pressed=0;
var previous_value=0;
var count_nr=0;
var count_op=0;
var arr_nr=[];
var arr_op=[];

function show_nr(nr){

  var display_value=document.getElementById("display").value;

  if(display_value==0 || check_nrafterop==0) { 
    document.getElementById("display").value=nr;
    arr_nr[count_nr]=nr;

  } else {
    document.getElementById("display").value=display_value + nr;
    arr_nr[count_nr]=parseFloat(display_value + nr);


  }
  check_nrafterop=1;
  console.log(arr_nr);
}

function delete_nr(){

  var display_value=document.getElementById("display").value;
  var nrtostr=display_value.toString();
  document.getElementById("display").value=nrtostr.slice(0, nrtostr.length-1);
}

function reset(){
  document.getElementById("display").value=0;
  operator_pressed=0;
  arr_nr=[];
  arr_op=[];
  count_nr=0;
  count_op=0;
}

function operation(op){
  if (check_nrafterop!=0){
    count_nr++;
  }
  if (check_nrafterop==1){
    arr_op[count_op]=op;
    count_op++;
  } else {
    if ((check_nrafterop==0) && (count_op!=0)){
      arr_op[count_op-1]=op;
    }

  }

  check_nrafterop=0;
  operator_pressed=op;
  previous_value=document.getElementById("display").value;
  console.log(arr_op);
}

/*
function equals(){
  var value1=parseFloat(previous_value);
  var value2=parseFloat(document.getElementById("display").value);

if (previous_value==0){  } //daca previous value ramae la valoarea initiala de 0, 
                         //adica nu se seteaza cu valoarea din display la apelul functiei operation (cand se apasa pe un operator), atunci sa nu se intample nimic
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
    operator_pressed=0; //in cazul in care dupa un = mai apas o data pe = sa nu se intample nimic

}
*/

function equals(){

  for (i=0;i< arr_op.length;) {
    var n=0, rez;
    if ((arr_op[i]=='*') || (arr_op[i]=='/')) {

      switch (arr_op[i]){
        case '*': rez= arr_nr[i]*arr_nr[i+1];
        break;
        case '/': rez= arr_nr[i]/arr_nr[i+1];
        break;
      }
      arr_nr[i]=rez;
      var deleteA=arr_nr.splice(i+1,1);
      var deleteB=arr_op.splice(i,1);
    }
    else {
      i++;
    }

  }
  while (arr_op.length>0){
    switch(arr_op[0]){
      case '+': rez=arr_nr[0]+arr_nr[1];
      break;
      case '-': rez=arr_nr[0]-arr_nr[1];
      break;
    }
    arr_nr[0]=rez;
    var deleteA=arr_nr.splice(1,1);
    var deleteB=arr_op.splice(0,1);
  }

  document.getElementById("display").value=rez;
}
