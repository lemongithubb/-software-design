"use strict";





function non_member(){
    alert("멤버 한정 기능입니다. 로그인하세요.");
    location.replace("login.html");
}

function goto_login(){
    location.replace("login.html");
}
function goto_mem_main(){
    location.replace("main.html");
}
function goto_nonmem_main(){
    location.replace("nl_main.html");

}


function test(){
    alert("기능 성공");
}