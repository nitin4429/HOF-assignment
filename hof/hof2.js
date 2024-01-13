function randomnumber(){
    return Math.floor(Math.random()*100);
}
function remainingTime(){
countdown = 3;
const coundownresult = setInterval(() => {
    console.log(`${countdown} time is remaining..`);
    countdown--;
    if(countdown===0){
        clearInterval(coundownresult);
        const result = randomnumber();
        console.log(`random number is ${result}`);
    }
}, 1000);
}
remainingTime(3);