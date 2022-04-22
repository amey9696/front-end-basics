let alarmSubmit=document.getElementById("alarmSubmit");
var audio=new Audio("dishoom.mp3"); //alarm ringtone

//function to play the alarm ring tone
function ringBell(){
    audio.play();
}

//function run whenever alarm is set from the ui
alarmSubmit.addEventListener("click",(e)=>{
    e.preventDefault();

    const alarm=document.getElementById("alram");
    let alramDate=new Date(alarm.value);
    console.log(`setting Alarm for ${alramDate}`);
    now=new Date();

    let timeToAlarm=alramDate-now
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }
});