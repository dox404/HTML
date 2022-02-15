// let btnOn =document.querySelector('#switch');
// btnOn.addEventListner('click',()=> btnOn.style.backgroundColor='#337ab7')

function handleSwitch() {
    const stwintBtn = document.getElementById('switch');
    const currentText = stwintBtn.innerHTML
    if(currentText === 'On') {
    stwintBtn.style.backgroundColor = 'red';
    stwintBtn.innerHTML= 'Off'
    } else {
        stwintBtn.style.backgroundColor = 'green';
    stwintBtn.innerHTML= 'On'
    }

}