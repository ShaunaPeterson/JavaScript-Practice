(function(){

let secondHand = document.querySelector('.second-hand');
let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.min-hand');

    function setDate() {
        // console.log('Hi');
        let rightNow = new Date();
        let seconds = rightNow.getSeconds();
        let minutes = rightNow.getMinutes();
        let hour = rightNow.getHours();
        let secondsDegrees = ((seconds / 60) * 360) + 90;
        // console.log(seconds);
        let hourDegree = ((hour / 12) * 360) + 90;
        let minutesDegree = ((minutes / 60) * 360) + 90;

        hourHand.style.transform = `rotate(${hourDegree}deg)`;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
        
        

    }
setInterval(setDate, 1000);
})();