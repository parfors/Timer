
// ----------------------------------TIMER-------------------------------------------


const milisecondsInSecond = 1000;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;

const refs = {
    span: document.querySelector('#span'),
    startBtn: document.querySelector('#start'),
    stopBtn: document.querySelector('#stop')
}


const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {return}
        const startTime = Date.now();
            this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const subtractionSeconds = Math.floor((currentTime - startTime) / milisecondsInSecond) % secondsInMinute;
            const subtractionMinutes = Math.floor((currentTime - startTime) / (milisecondsInSecond * secondsInMinute)) % minutesInHour;
            const subtractionHours = Math.floor((currentTime - startTime) / (milisecondsInSecond * secondsInMinute * minutesInHour)) % hoursInDay;

            const spanString = `${pad(subtractionHours)}:${pad(subtractionMinutes)}:${pad(subtractionSeconds)}`
            spanMarkup(spanString)
            console.log(spanString);
        }, 1000);
        this.isActive = true;
},
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        spanMarkup('00:00:00')
    }

}
function spanMarkup(string) {
    refs.span.textContent = string;
}

function pad(val) {
    return String(val).padStart(2, '0')
}

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer))

spanMarkup('00:00:00')


// const intervalId = setInterval(()=> console.log('interval'), 2000)
// const shouldCancelTimer = Math.random() < 0.5;
// console.log(shouldCancelTimer);
// console.log(timerId);

// ofTimer()

// function ofTimer() {
//     if (shouldCancelTimer) {
//         clearTimeout(timerId)
//     }
// }

// ofInterval()

// function ofInterval() {
//     if (shouldCancelTimer) {
//         clearInterval(intervalId)
//     }
// }