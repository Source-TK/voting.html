

var num;
num = 0;

function increment(){
    num = num+1;
    document.getElementById("num").innerHTML = num ;

};

function decrement(){
    num = num-1;
    document.getElementById("num").innerHTML = num ;

    if (num <0)
        num = 0;
        document.getElementById("num").innerHTML = num ;
};

function reset(){
    num =num = 0;
    document.getElementById("num").innerHTML = num ;
}


