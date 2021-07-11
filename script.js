function roll() {
    roll10Time('img1');

    roll10Time('img2');

    roll10Time('img3');

}

function rollOneTime(imgId) {
    const images = ['bau', 'cua', 'tom', 'ca', 'nai', 'ga'];
    const randomId = Math.floor(Math.random() * 6);
    document.getElementById(imgId).src = `images/${images[randomId]}.jpg`;
}

function roll10Time(imgId) {
    const T = setInterval(() => {
        rollOneTime(imgId);

    }, 50);

    setTimeout(() => clearInterval(T), 4000);

}