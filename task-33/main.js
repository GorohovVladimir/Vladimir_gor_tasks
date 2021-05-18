(function () {

function changeHtml () {
const elList = document.querySelectorAll('.member');


for(let itemList of elList){

    const itemFamily = itemList.innerText
    const itemName = itemList.getAttribute('data-name')

    itemList.innerText = '';
    itemList.innerText += itemName + " " + itemFamily ;
}
}
changeHtml();
})();