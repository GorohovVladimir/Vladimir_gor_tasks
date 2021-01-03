
  
  
  (function(){

  var enterText = prompt('Enter list words and pattern wrapper');

  var textToArrey = enterText.split('*')

  var textNames = textToArrey[0];
  var pattern = textToArrey[1];

  var namesToArrey = textNames.split(',');

  var res = '';

  for(i = 0; i < namesToArrey.length; i++){
    for(var char of pattern){
      if(char === '$'){
        res += `${namesToArrey[i]}`
      }else {
        res += char
      }
    }
  }

  var container = document.querySelector('#container__names');

  container.innerHTML = res;
})();

  

 


      


  

 










