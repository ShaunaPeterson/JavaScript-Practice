(function(){


window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selects audio element and places it in a variable.
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selects key class and places it into a variable.
    console.log(audio);
    if(!audio) return; //prevents keys from running if there is no audio attached.
    audio.currentTime = 0; //rewinds sound to start so it can repeat after repeated key use. :)
    audio.play();//plays the audio when key event is fired.
    key.classList.toggle('playing'); //Toggles 'playing' class on when key is fired.

});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //When the propertyname does not equal transform, return the function or end.
    this.classList.remove('playing');//remove the class of playing from the event after no transform transition has been identified.
}


const keys = document.querySelectorAll('.key');//select all key classes.
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));//Loop through keys and remove transition.






})();











// const key = document.querySelectorAll('.key');


// document.getElementById('yeah').addEventListener("click", () => {
//     console.log('yeah');
// });
// function logkey(event) {
//     console.log(event);
// }
// document.addEventListener("keydown", logkey(event));
// window.addEventListener('keydown', function (e) {
//     console.log(e);
// });