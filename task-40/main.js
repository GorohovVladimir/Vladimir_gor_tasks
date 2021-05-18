(function () {

    function initBox() {
        const checkbox = document.querySelectorAll('.checkbox');

        for (let box of checkbox) {
            box.onclick = choiceBox;
        }
    }
    initBox();

    function choiceBox() {
        if (this.classList !== 'checked') this.classList.toggle('checked');
        else  this.classList.toggle('checkbox');    
    }
    
})();



