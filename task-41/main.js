(function () {

    const arrow = document.querySelector('.arrow');
    const block = document.querySelector('.content-hide');
    
    

    arrow.onclick = function () {
        coupArrow();
        showBlock();
        slideDown();
    }

    function coupArrow() {
        arrow.classList.toggle('transform');
    }
    function showBlock() {
        
        block.classList.toggle('show');

    }

    function slideDown() {
        block.classList.toggle('down');
        arrow.classList.toggle('down');
    }

    
        console.log(block.offsetHeight > 250);
        
        height = 0;
        



})();



