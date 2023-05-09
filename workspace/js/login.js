"use strict";

function login_check(){
    var id=document.querySelector('#id');
    var pw=document.querySelector('#pw');

    if(id.value==""){
        document.getElementById("idError").innerHTML="아이디를 입력하세요"
        check=false
    }
    else if(pw.value==""){
        document.getElementById("pwError").innerHTML="비밀번호를 입력하세요"
        check=false
    }else{
        document.getElementById("idError").innerHTML=""
        document.getElementById("pwError").innerHTML=""
    }

}
function login(){

}

function register(){

}