"use strict";

import { veiw_mem } from "../datas/server";





function input_check() {

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

function id_check() {
    if (pw.value == pwck.value) { //xccx 비번확인이 맞을 때

    }
}
function input_data() {




}
function readfile() {
  
   
}

function reg() {
    let input_ck = 0;
    var id = document.getElementById('id');
    var pw = document.getElementById('pw');
    var pwck = document.getElementById('pwck');
    if (input_check() == 1) {//모든 칸 입력 완료일 때
        alert("실행");

        id_check();
     

      
        
    }



}