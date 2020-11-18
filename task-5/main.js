var names = ['Alex', 'Sergei', 'Olga', 'Denis']

var str = '';

for (var name of names) {
    str += `<li>${name}</li>`
}

var nameList = document.getElementById('container__list');

nameList.innerHTML = str;