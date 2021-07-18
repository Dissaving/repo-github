const calcDateSwitcher = document.querySelector('.calcDateHeading');
const timerSwitcher = document.querySelector('.timerHeading');

export function switchBlocks(event) {
    if (event.target === calcDateSwitcher) {
        document.querySelector('#timerForm').classList.remove('visible')
        document.querySelector('#timerForm').classList.add('invisible');
        document.querySelector('#datecalc').classList.remove('invisible');
        document.querySelector('#datecalc').classList.add('visible');
    }
    if (event.target === timerSwitcher) {
        document.querySelector('#timerForm').classList.remove('invisible')
        document.querySelector('#timerForm').classList.add('visible');
        document.querySelector('#datecalc').classList.remove('visible');
        document.querySelector('#datecalc').classList.add('invisible');
    }
}