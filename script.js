function range(){
    let num = parseInt(document.getElementById('num').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let txt= "";

    for(let i = 1; i <=num; i++){
        if(i%num2==0){
            txt +=i;
            txt +="<br>";
        }
    }
    document.getElementById('ans').innerHTML = txt;
}