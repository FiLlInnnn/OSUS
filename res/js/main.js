//      params - parmetry
/*function tomas(item, item2) {
    console.log("Nesu: " + item + ", " + item2)
};
//      args - argumenty
tomas("mys", "pocitac");
tomas("notebook", "monitor");

const ttomas = (item, item2) => {
    console.log(`Nesu: ${item}, ${item2}`);
}

tomas("mys", "pocitac");
tomas("notebook", "monitor");*/
// 9 + shift = ()
/*function play(song, artist) {
    console.log(`Playing: ${song} by ${artist}`);
}
const plaz = (song, artist) => {
    console.log(`Playing: ${song} by ${artist}`);
}
play("Never gonna give you up", "Rick Astley")
plaz("HAFO", "Frank Wild")*/

/*function sum(a, b) {
    return a + b;
}

let resultA = sum(5, 7);
let resultB = sum(7, 8);
let result = sum(resultA, resultA);
console.log(result);

const ssum = (a, b) => a +b;

let rresultA = sum(12, 7);
let rresultB = sum(7, 16);
let rresult = sum(rresultA, rresultA);
console.log(rresult);*/

const point = document.getElementById("point");
const startButton = document.getElementById("startButton");
const showtime = document.getElementById("showtime");

let gameInterval;
let gameIntervalSpeed = 500;
let gamestert;

startButton.onclick = () => {
  startButton.style.display = "none";
  moveElement(point, getRandomnumber(0, window.innerWidth - 55), getRandomnumber(0, window.innerHeight - 55));
  setPointOnClick(point);
  setgameInterval(point);
  gamestert = performance.now();
};

const moveElement = (element, x, y) => {
  element.style.top = y + "px";
  element.style.left = x + "px";
};

const setPointOnClick = (element) => {
  element.onclick = () => {
    let gameEnd = performance.now();
    let time = gameEnd - gamestert;
    showtime.innerText = `Time: ${Math.floor(time)} ms`;
    gamestert = gameEnd;
    element.innerText++;
    if(gameIntervalSpeed > 200){
    gameIntervalSpeed -= 10;
    setgameInterval(element);
    }
    moveElement(element, getRandomnumber(0, window.innerWidth - 55), getRandomnumber(0, window.innerHeight - 55));
  };
};

const setgameInterval = (element) => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    moveElement(element, getRandomnumber(0, window.innerWidth - 55), getRandomnumber(0, window.innerHeight - 55));
  }, gameIntervalSpeed);
};

const getRandomnumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
