let alarmSound = new Audio();
    alarmSound.src = 'alarm.mp3';

function setAlarm(){
  let ms = document.getElementById('alarmTime').valueAsNumber;
  if(isNaN(ms)){
    alert("Invalid Date");
    return;
  }
  let alarm = new Date(ms);
  let alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHour(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
  let differenceInMs = alarmTime.getTime() - (new Date()).getTime();

  if(differenceInMs < 0){
    alert("Specified time is already passed!");
    return;
  }

  setTimeOut(initAlarm, differenceInMs);
}

function initAlarm(){
  alarmSound.play();
}
