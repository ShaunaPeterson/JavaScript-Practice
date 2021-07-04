(function(){
// const key = document.querySelectorAll('.key');



// function logkey(event) {
//     console.log(event);
// }
// document.addEventListener("keydown", logkey(event));

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key${e.keyCode}]`);
    console.log(audio);
});







})