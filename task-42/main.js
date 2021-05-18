(function () {
    const box = document.querySelector('.conteiner');
    const btnTop = document.querySelector('.arrow-top');
    const btnRight = document.querySelector('.arrow-right');
    const btnBottom = document.querySelector('.arrow-bottom');
    const btnLeft = document.querySelector('.arrow-left');
    const reset = document.querySelector('.reset');

    btnTop.onclick = () => {
        box.classList.remove('right', 'left', 'bottom');
        box.classList.toggle('top');
    }
    
    btnLeft.onclick = () => {
        box.classList.remove('right', 'bottom', 'top');
        box.classList.toggle('left');
    }

    btnRight.onclick = () => {
        box.classList.remove('bottom', 'left', 'top');
        box.classList.toggle('right');
    }

    btnBottom.onclick = () => {
        box.classList.remove('right', 'left', 'top');
        box.classList.toggle('bottom');
    }

    reset.onclick = () => box.classList.remove('right', 'left', 'top', 'bottom');
})();



