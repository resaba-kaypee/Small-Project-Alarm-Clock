let alarmSound = new Audio();
alarmSound.src = 'alarm.mp3';
let alarmTimer;

function setAlarm(button) {
  let ms = document.getElementById('alarmTime').valueAsNumber;
  if (isNaN(ms)) {
    alert("Invalid Date");
    return;
  }
  let alarm = new Date(ms);
  let alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
  let differenceInMs = alarmTime.getTime() - (new Date()).getTime();

  if (differenceInMs < 0) {
    alert("Specified time is already passed!");
    return;
  }

  alarmTimer = setTimeout(initAlarm, differenceInMs);

  button.innerHTML = "Cancel Alarm";
  button.setAttribute('onclick', 'cancelAlarm(this)');
}

function cancelAlarm(button) {
  button.innerHTML = "Set Alarm";
  button.setAttribute('onclick', 'setAlarm(this)');
  clearTimeout(alarmTimer);
}

function initAlarm() {
  alarmSound.play();
  document.getElementById('alarmOptions').style.display = "";
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  document.getElementById('alarmOptions').style.display = 'none';
  cancelAlarm(document.getElementById('alarmButton'));
}

function snooze() {
  stopAlarm();
  setTimeout(initAlarm, 36000);
}
