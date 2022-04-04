let userNum = document.getElementById("getNumber") // code works when you press enter
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        run()
    }
});

function run(){ // click and change
    const y = document.getElementById("paragraph");
    y.style.backgroundColor = "green";
    y.style.color = "#ffffff";
    y.style.padding = "20px" ;
    ran();   
    userNumber()
    CompareNumbers()
}

function ran(){ // generate random number and display
    let ran = Math.floor(Math.random() * 10);
    const x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "#00f";
    x.style.color = "white";
    x.style.padding = "20px";
    x.style.textAlign = "center"
    return ran

}

function userNumber(){ // display user number
    const z = document.getElementById("getNumber").value
    const k = document.getElementById("userNumber")
    k.innerHTML = z   
    k.style.color = "white" 
    k.style.backgroundColor = "pink"
    k.style.padding = "20px"
    k.style.textAlign = "center"
    return z
}

function CompareNumbers() {
    let a = userNumber();
    let b = ran();
    const d = document.getElementById("compare");
    d.style.color = "white" ;
    d.style.backgroundColor = "red";
    d.style.padding = "20px";
    d.style.textAlign = "center";
    if(a != b){
        d.innerHTML = "Numbers are not the same computer got " + b + ", user got " + a; 
    } else if (a == b){
        d.innerHTML = "Numbers are the same computer got " + b + ", user got " + a; 
    }
    
}

