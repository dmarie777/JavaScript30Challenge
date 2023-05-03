
 function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key =document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing')   
 }
//transition event: it checks when the transition happen
function removeTransition(e) {
    if(e.propertyName !=="transform") return 
    this.classList.remove('playing')
}
const keys= document.querySelectorAll('.key')


keys.forEach(div => div.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown',playSound )

