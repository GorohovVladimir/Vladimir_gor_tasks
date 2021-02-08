
(function(){
    function renderUsers(){
        
        var apiKey = 'd6e6810da50cf5860600afb17d27aca9';
        var baseUrl = 'http://learn.api.axenov-it.com/users';
        var url = `${baseUrl}?api_key=${apiKey}`;

        var container = document.querySelector('.user__list');
        

        var request = new XMLHttpRequest();

        request.open('GET', url);
            request.send(); 

            function btnClick(){
                var btnEl = this;
                if(btnEl.innerText === 'Show'){
                    btnEl.innerText = 'Hide'
                }
                else{
                   btnEl.innerText = 'Show' 
                }

                var el = this.parentNode.nextElementSibling;
               if(el.classList.contains('hide')){
                this.parentNode.nextElementSibling.classList.replace('hide','open')
               }
               else{
                this.parentNode.nextElementSibling.classList.replace('open','hide')
               }
            }

        

            request.onload = function () {
            
            var users = JSON.parse(request.response);
        
            var listName = document.querySelector('.user__list');
            
            var html = '';
            var i = 1;
        
            for(var user of users){

                
                    html += `<div id='user__list__name'>${i++}.
                    <span class='user__name'>${user.name}
                    </span> 
                    <button id='user__button'>Show</button>
                            </div> 
                     <div class='user__card hide' data=${user._id}>
                             <div call="user__photo">
                              <img class='photo' src='Img/photo.jpg' alt="image"/>
                             </div>
                             <div class='user__description'>
                             <h3 class='user__header'> ${user.name}</h3>
                              <ul class="user__description">
                              <li><b>age:</b> ${user.age}</li>
                              <li><b>gender:</b> ${user.gender}</li>
                              <li><b>city:</b> ${user.city}</li>
                              <li><b>address:</b> ${user.address}</li>
                              <li><b>email:</b> ${user.email}</li>
                               <li><b>companies:</b> ${user.company}(${user.company})</li>
                              <li><b>phones:</b> ${user.phones}</li>
                              </ul>
                              </div>
                              </div>
                              `            
            }

            listName.innerHTML = html;
        
            var allBtn = document.querySelectorAll('#user__button');
            for(var btn of allBtn){
                btn.onclick = btnClick;
            }             
    } 
}
renderUsers(); 
})();

