(function () {

    function createHtml() {
        const btnSave = document.querySelector('.save');
        const btnDelete = document.querySelector('.delete');

        const arrInput = [];

        btnSave.onclick = function() {

            const container = document.querySelector('.content');
            const res = document.querySelector('.form__input').value;

            if (arrInput.includes(res)) return
            else arrInput.push(res);

            const text = container.appendChild(document.createElement('div'));
            text.classList = 'contant-block';

            for (let item of arrInput) {
                for (let key in arrInput) {
                    text.innerHTML = `<p class="contant-text">№ ${+(key) + 1} ${item}</p>`;
                }
            }

            btnDelete.onclick = function () {
                text.parentNode.textContent = '';
                arrInput.splice(0, arrInput.length);
            }

        }

    }

    createHtml();

})();



