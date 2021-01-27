
//     (function(){
//         function renderUsers(){
//         var apiKey = 'd6e6810da50cf5860600afb17d27aca9';
//         var baseUrl = 'http://learn.api.axenov-it.com/users';

//         var url = `${baseUrl}?api_key=${apiKey}`;
            
//         var request = new XMLHttpRequest();

//             request.onload = function () {
//                 var users = JSON.parse(request.response);
            
//                 var list = document.querySelector('.conteiner');

//                 var html = '';
//                 var i = 1;

//             for(user of users){
//                 html += `<div id='user__list'>${i++}.<span class='name'>${user.name}</span> <button id='button'>Show</button></div>`

//             }
//             list.innerHTML = html;
//         }
//         request.open('GET', url);

//         request.send();
//     }
//     renderUsers();
// })();

(function(){
    function renderUsers(){
        var apiKey = 'd6e6810da50cf5860600afb17d27aca9';
        var baseUrl = 'http://learn.api.axenov-it.com/users';
        var url = `${baseUrl}?api_key=${apiKey}`;

        var request = new XMLHttpRequest();

        request.onload = function () {
            var users = JSON.parse(request.response);
            var listName = document.querySelector('.conteiner');
            var listCard = document.querySelector('.user__card');
            console.log(listCard);
            var html1 = '';
            var html2 = '';
            var i = 1;

            for(var user of users){
                html1 += `<div id='user__list'>${i++}.
                <span class='name'>${user.name}
                </span> 
                <button id='button'>Show</button>
                        </div>` 
                html2 += `<h3 class='title__card'>${user.name}</h3>
                          <div>age:${user.age}</div>
                          <div>gender:${user.gender}</div>
                          <div>city:${user.city}</div>
                          <div>address:${user.address}</div>
                          <div>email:${user.email}</div>
                          <div>companies:${user.companies}</div>
                          <div>phones:${user.phones}</div>
                          `           
            }
            listName.innerHTML = html1;
            listCard.innerHTML = html2;
        }
        request.open('GET', url);
        request.send();  
    }
  renderUsers();

    
})();
