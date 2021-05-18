(function () {
    const btnCallback = document.querySelector('#callback-button');
    const modal = document.querySelector('#modal');
    const btnClose = document.querySelector('#btn');
    const send = document.querySelector('#send');

    function click() {

        function closeWindow() {
            modal.classList.remove('modal__active');
        }
        closeWindow();

        function clearInput() {
            const inputName = document.querySelector('#inputName');
            const inputAge = document.querySelector('#inputAge');

            inputName.value = "";
            inputAge.value = "";
        }
        clearInput();

    }

    btnCallback.onclick = () => modal.classList.add('modal__active');

    btnClose.onclick = click;

    send.onclick = click;

})();



