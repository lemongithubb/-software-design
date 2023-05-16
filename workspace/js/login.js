"use strict";

function input_check(){
    var id=document.getElementById('id');
    var pw=document.getElementById('pw');

    const id_element=document.getElementById("idError");
    const pw_element= document.getElementById("pwError");

    if(id.value==""){
        id_element.innerHTML="아이디를 입력하세요";
       
    }
    else if(pw.value==""){
        pw_element.innerHTML="비밀번호를 입력하세요";
        
    }else{
       id_element.innerHTML="";
        pw_element.innerHTML="";
    }

}
function login(){
    input_check();


}
