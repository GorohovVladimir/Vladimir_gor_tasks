(function () { 
    function inputFilter () {

    const btns = document.querySelectorAll('.input');
    const inputValue = document.querySelector('.input-text');

    for (let btn of btns) {
        btn.onclick = function () {

            const res = +(this.value);
            
            if (res === 1) inputValue.maxLength = '0';

            if (res === 2) inputValue.readOnly = true;

            if (res === 3) {
                inputValue.removeAttribute('readonly');
                inputValue.type = 'number'
            }

            if (res === 4) {
                inputValue.removeAttribute('readonly');
                inputValue.removeAttribute('maxlength');
                inputValue.type = 'password';
            }

        }
    }
}
inputFilter();
})();



