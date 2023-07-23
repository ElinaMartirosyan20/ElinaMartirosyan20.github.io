const timeLeft = document.getElementById('time-left')
const mnacel = document.getElementById('mnacel')

//month day year
const birthday = new Date('07/24/2023')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId
console.log(second)
console.log(minute+ "minut")
 console.log(hour+"hour")

function countDown() {
  const today = new Date()
  const timeSpan = birthday - today


  if (timeSpan <= -day) {
    mnacel.innerHTML = '&#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825'
    timeLeft.innerHTML = '<span style="text-transform:uppercase;"> Married!! </span>'
    clearInterval(timerId)
    return
  }

  if (timeSpan <= 0) {
    mnacel.innerHTML = '&#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825'
    timeLeft.innerHTML = '<span style="text-transform:uppercase;"> Wedding Day!! </span>'
    clearInterval(timerId)
    return
  }


  const days = Math.floor(timeSpan / day)
  const hours = Math.floor(days*24)
  const minutes = Math.floor((timeSpan % hour) / minute)
  const seconds = Math.floor((timeSpan % minute) / second)
  timeLeft.innerHTML =    days + '<sub>օր</sub> : ' + hours + '<sub>ժ</sub> : ' + minutes + '<sub>ր</sub> : ' + seconds + '<sub>վ</sub>'

}

timerId = setInterval(countDown, second)
