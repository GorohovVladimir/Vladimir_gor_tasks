(function () {

    const select = document.querySelector('.select');
    const private = document.querySelector('#private');
    const mono = document.querySelector('#mono');
    const sber = document.querySelector('#sber');


    select.onchange = function () {

        const value = select.value;

        if (value === 'Приват') private.className = 'show';
        else private.className = 'hide';

        if (value === 'Моно') mono.className = 'show';
        else mono.className = 'hide';

        if (value === 'Сбербанк') sber.className = 'show';
        else sber.className = 'hide';
    }
})();



