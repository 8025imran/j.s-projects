let millisecond = 0 ;
let second = 0;
let minutes = 0;

let timer =false;



function Start(){
    timer=true;
    myfun();
}
function Pause(){
    timer=false;
    myfun();
}
function Reset(){
    location.reload();
}



function myfun(){
    if(timer==true){
        millisecond++;
        if(millisecond==100){
            second++
            millisecond=0;
        }
        if(second==60){
            minutes++;
            second=0;
        }
        let getsecond = second ;
        let getminutes = minutes ;

        if(second < 10){
            getsecond = "0" +second;
        }
        if(minutes < 10){
            getminutes = "0" +minutes;
        }


        setTimeout("myfun()",10)
        document.getElementById("millisecond").innerHTML=millisecond;
        document.getElementById("second").innerHTML=getsecond;
        document.getElementById("minutes").innerHTML=getminutes;
    }
}