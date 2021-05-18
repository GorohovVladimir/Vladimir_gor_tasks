function initBtn() {
    let btn = document.querySelector('.go');
    return btn;
}


function run() {
    const vasa = document.querySelector('.vasya');
    let leftOffset = 0;
    let direction = 'right';

    setInterval(() => {
        // if (direction === 'right') {
            leftOffset++;
        // }
        // switch(direction) {
        //     case "right":
        //         leftOffset++;
        //     break;
        // }
        vasa.style.left = leftOffset + '2px';
    }, 20)
}

initBtn().onclick = run;
