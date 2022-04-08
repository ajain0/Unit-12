let userNum = document.getElementById("getNumber") // code works when you press enter
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        run()
    }
});

userNum.focus();

let counter = 0 

function run(){ // click and change
    // const y = document.getElementById("paragraph");
    // y.style.backgroundColor = "green";
    // y.style.color = "#ffffff";
    // y.style.padding = "20px" ;
    ran();   
    userNumber()
    CompareNumbers()
    document.getElementById("special").style.backgroundColor = "transparent"
}

function ran(){ // generate random number and display
    let ran = Math.floor(Math.random() * 10);
    const x = document.getElementById("random");
    x.innerHTML = "The computer number is " + ran;
    // x.style.backgroundColor = "#00f";
    x.style.color = "black";
    x.style.padding = "20px";
    x.style.textAlign = "center"
    return ran

}

function userNumber(){ // display user number
    const z = document.getElementById("getNumber").value
    const k = document.getElementById("userNumber")
    k.innerHTML = z   
    k.style.color = "black" 
    // k.style.backgroundColor = "pink"
    k.style.padding = "20px"
    k.style.textAlign = "center"
    return z
}

function CompareNumbers() {
    let a = userNumber();
    let b = ran();
    let c = document.getElementById("counter")
    const d = document.getElementById("compare");
    d.style.color = "black" ;
    // d.style.backgroundColor = "red";
    d.style.padding = "20px";
    d.style.textAlign = "center";
    c.style.textAlign = "center"
    if(a != b){
        document.querySelector("body").style.backgroundColor = "#ff7588"
        d.innerHTML = "Numbers are not the same computer got " + b + ", user got " + a; 
        counter++
        c.innerHTML = "You have tried " + counter + " times."
    } else if (a == b){
        document.querySelector("body").style.backgroundColor = "#83ff75"
        d.innerHTML = "Numbers are the same computer got " + b + ", user got " + a; 
        c.innerHTML = "You have tried " + counter + " times to get it right."
        counter = 0
    }
    resetInput();   
}

function resetInput()  {
    document.getElementById("getNumber").value = "";
} 