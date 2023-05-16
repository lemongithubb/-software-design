let map=new Map();

export function add_mem(id,pw){
    if(map.has(id)){
        alert("중복되는 id입니다.");
    }else{
        map.set(id,pw);

    }
   
}
export function search_mem(id){
    

}
export function veiw_mem(){
    alert("보기 함수 실행");
    for(var [k, v] of map.entries()) {
        document.getElementById("mapEntries").innerHTML += k + " | " + v + "<br>";
        

    }
    alert(map.entries());
   
}