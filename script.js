(function(){
// const key = document.querySelectorAll('.key');


// document.getElementById('yeah').addEventListener("click", () => {
//     console.log('yeah');
// });
// function logkey(event) {
//     console.log(event);
// }
// document.addEventListener("keydown", logkey(event));

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return; //prevents keys from running if there is no audio attached
    audio.play();

});


window.addEventListener('keydown', function (e) {
    console.log(e);
});




})();