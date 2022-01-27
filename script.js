
let timeBegan =null;
let flag=false;
let timeStopped = null;
let startInterval= null;
let stopDuration = 0;




document.querySelector('.container').addEventListener('click',()=>{

if(!flag){
    startTimer();
    flag = true;

}else{
    stopTimer();
    flag =false;
}

   
});


document.querySelector('.container').addEventListener('dblclick',()=>{
resetTimer();

});





startTimer = () => {

if(timeBegan === null){
    timeBegan = new Date();
}
if(timeStopped != null){
    stopDuration += (new Date() - timeStopped);
}

startInterval=setInterval(timer,10);    

}

stopTimer = () =>{
    timeStopped= new Date ();
    clearInterval(startInterval);


}



timer = () =>{
 let currentTime = new Date();
 let timeElapsed = new Date (currentTime - timeBegan - stopDuration);
let hours = timeElapsed.getUTCHours();
let minutes = timeElapsed.getUTCMinutes();
let seconds = timeElapsed.getUTCSeconds();
let miliseconds = timeElapsed.getUTCMilliseconds();

miliseconds=Math.floor(miliseconds/10);

document.querySelector('.timer-div').textContent=
(hours = hours < 10 ? '0' + hours : hours) + ':' +
(minutes = minutes < 10 ? '0' + minutes :minutes) + ':' +
(seconds = seconds < 10 ? '0' + seconds : seconds) + ':' +
(miliseconds = miliseconds < 10 ? '0' + miliseconds : miliseconds);


}

resetTimer = () =>{
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stopDuration = 0;

    document.querySelector('.timer-div').textContent='00:00:00:00';
    flag = false;

}