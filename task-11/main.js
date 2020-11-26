var str = 'Hello world';

sum = 0;

function countUnicode() {

for(var char of str) { 
    sum += char.charCodeAt();
}
    return alert(sum);
}

countUnicode(str);
