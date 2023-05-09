const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector(`.hour-hand`);
const allHands = document.querySelectorAll(`.hand`) 
console.log(allHands);
function setDate() {
    let date = new Date()

    const seconds = date.getSeconds();
    console.log(seconds);
    const minutes = date.getMinutes();
    const hours = date.getHours(); 
    if (seconds ===0 || minutes === 0 || hours ===0) {
        allHands.forEach(e => e.style.transition = `none`)
    } else {
        allHands.forEach(e=> e.style.transition = `all 0.05s`)

    }
    const secondsDegres = (((seconds/60)*360)+90)
    secondHand.style.transform = `rotate(${secondsDegres}deg)`; 
        
    const minutesDegrees = (((minutes/60)*360)+90)
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    const hoursDegrees = (((hours/12)*360)+90)
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate,1000)