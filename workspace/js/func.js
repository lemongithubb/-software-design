"use strict";

function not_make(){
    alert("아직 구현하지 못한 기능입니다.");

}


//main

function non_member(){
    alert("멤버 한정 기능입니다. 로그인하세요.");
    location.replace("login.html");
}
function login_check(){
    if(window.sessionStorage.getItem('login_id')==null){
        non_member();
        return false;
    }else{
        return true;
    }
}
function goto_login(){
    if(login_check()){
        alert("이미 로그인하였습니다.")
    }else{
        location.replace("login.html");
    }
    
}
function goto_main(){
    location.replace("main.html");
}

function goto_reg(){
    location.replace("reg.html");
}
function goto_upload(){
    if(login_check()){
         location.replace("upload.html");
    }
    
}

//login
function log_input_check(){

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
    log_input_check();
    if(window.localStorage.getItem(id.value)==pw.value){
        window.sessionStorage.setItem('login_id',id.value);
        goto_main();
      
    }else if(window.localStorage.getItem(id.value)==null){
        alert("존재하지 않는 id입니다.");
    }else{
        alert("비밀번호가 틀렸습니다.");
    }

}

//register
function reg_input_check() {
    const id_element = document.getElementById("idError");
    const pw_element = document.getElementById("pwError");
    const pwck_element = document.getElementById("pwckError");

    if (id.value == "") {
        id_element.innerHTML = "아이디를 입력하세요";

    } else {
        id_element.innerHTML = ""
    }
    if (pw.value == "") {
        pw_element.innerHTML = "비밀번호를 입력하세요";

    } else {
        pw_element.innerHTML = ""
    }
    if (pwck.value == "") {
        pwck_element.innerHTML = "비밀번호확인을 입력하세요";

    } else {
        pwck_element.innerHTML = ""
    }
    if ((id.value != "") && (pw.value != "") && (pwck.value != "")) {
        return 1;
    }
}

function reg_pw_check() {
    if (pw.value == pwck.value) { 
        return true;

    } else {
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return false;
    }
}

function add_mem(id,pw){
    if(window.localStorage.getItem(id)!=null){
        alert("중복되는 id입니다.");
    }else{
        window.localStorage.setItem(id,pw); 
        alert("가입 성공");
        //memberlist();   --->가입한 사람들의 id pw 확인 

    }
}
/*확인용 함수
function memberlist(){
    for(let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        const value = window.localStorage.getItem(key);
        alert(`id:${key} pw:${value}`);
      }
}
*/
function reg() {
    
    if (reg_input_check() == 1) {//모든 칸 입력 완료일 때
        
        if (reg_pw_check()) {
            add_mem(id.value, pw.value);
        }

    }

}
//logout
function logout(){
    window.sessionStorage.removeItem('login_id');
    goto_main();
}
// upload

function getImgFile(){

}
function upload(){
    not_make();
}
