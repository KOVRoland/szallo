function Foglalas(){
    let szemelyek=document.getElementById("szemelyszam").value
    let napok=document.getElementById("napok").value
    let ar
    if(szemelyek==2){
        ar=napok*12000
    }

    else if(szemelyek==4){
        ar=napok*20000
    }
    else{
        ar=napok*24000
    }
    ar+=" Ft öszesen"
    document.getElementById("ar").innerHTML=ar

}