let sound = new Howl({
    src: ['sound/ahooga_horn.mp3']
});

export function resetTimerResult(){
    targetToDate = NaN;
    timerInterval();
}

let targetToDate;

const timerResultBlock = document.getElementById('timerResult');

export function handleToDate(event) {
    timerResultBlock.innerHTML = "";
    event.preventDefault();
    let {toDate} = event.target.elements;
    toDate = toDate.value;
    targetToDate = toDate;
    timerInterval();
}

function timerInterval(){

    const startTimer = setInterval(calcToDate,1000)

    function calcToDate () {
        let countDownDate = new Date(`${targetToDate}`).getTime();

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timerResult").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (isNaN(countDownDate)){
            clearInterval(startTimer);
            document.getElementById("timerResult").innerHTML = "Введите время для рассчета";
        }

        if (distance < 0 ) {
            clearInterval(startTimer);
            document.getElementById("timerResult").innerHTML = "Время истекло";
            sound.play();
        }
    }
}

