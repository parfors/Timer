
// ----------------------------------TIMER-------------------------------------------
// const milisecondsInSecond = 1000;
// const secondsInMinute = 60;
// const minutesInHour = 60;
// const hoursInDay = 24;

// const refs = {
//     span: document.querySelector('#span'),
//     startBtn: document.querySelector('#start'),
//     stopBtn: document.querySelector('#stop')
// }

// const timer = {
//     intervalId: null,
//     isActive: false,
//     start() {
//         if (this.isActive) {return}
//         const startTime = Date.now();
//             this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const subtractionSeconds = Math.floor((currentTime - startTime) / milisecondsInSecond) % secondsInMinute;
//             const subtractionMinutes = Math.floor((currentTime - startTime) / (milisecondsInSecond * secondsInMinute)) % minutesInHour;
//             const subtractionHours = Math.floor((currentTime - startTime) / (milisecondsInSecond * secondsInMinute * minutesInHour)) % hoursInDay;

//             const spanString = `${pad(subtractionHours)}:${pad(subtractionMinutes)}:${pad(subtractionSeconds)}`
//             spanMarkup(spanString)
//             console.log(spanString);
//         }, 1000);
//         this.isActive = true;
// },
//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//         spanMarkup('00:00:00')
//     }

// }
// function spanMarkup(string) {
//     refs.span.textContent = string;
// }

// function pad(val) {
//     return String(val).padStart(2, '0')
// }

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer))

// spanMarkup('00:00:00')


// -----------------------------------PROMISE ------------------------------------

// const horses = [
//   'lightHorse',
//   'braunHorse',
//   'blackHorse',
//   'whiteHorse',
//   'redHorse'];

// function run(horse) {
//   return new Promise((resolve, reject) => {
//     const time = randomeTime(3500, 2000);
//       setTimeout(() => {
//         resolve({horse, time});
        
//       }, time);
//     })
// }
  
// // run('test').then(value => console.log(value))


// const promises = horses.map(run);
// const fastestHorse = Promise.race(promises).then(({horse, time}) => console.log(`The winner is ${horse}, with best time ${time}`));

// const allResults = Promise.all(promises).then((value) => console.log(value));

// function randomeTime(max, min) {
//     return Math.floor(Math.random() * (max - min +1) + min )
// }

// ---------------------------HTTP--------------------------------------



fetchPokemon().then(renderPokemon).catch()

function fetchPokemon () {
  return fetch('https://pokeapi.co/api/v2/version-group/11/').
    then(response => {
      response.json;
      console.log(response);
    })
}

function renderPokemon(response) {
  const markup = pokemonCard(response);
  dom.innerHTML = markup;
  }