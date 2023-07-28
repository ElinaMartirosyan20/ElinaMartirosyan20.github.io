const newYear = "07/29/2023";
const timeLeft = document.getElementById('time-left')
let timerId;


function timeCountDown() {
  const nowDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = (newYearDate - nowDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

 
   timeLeft.innerHTML =    days + '<sub>օր</sub> : ' + hours + '<sub>ժ</sub> : ' + minutes + '<sub>ր</sub> : ' + seconds + '<sub>վ</sub>'

      if (days==-1) {
        mnacel.innerHTML = '&#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825'
        timeLeft.innerHTML = '<span style="text-transform:uppercase;"> Wedding Day!! </span>'
        clearInterval(timerId)
        return
      }
    
}

// function formatTime(time) {
//   return time > 10 ? time : 0${time};
// }

timeCountDown()
timerId = setInterval(timeCountDown, 1000);
