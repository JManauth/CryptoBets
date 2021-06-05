var newsApi = 'http://api.mediastack.com/v1/news?access_key=126705cb9c518744d6816588b7be6b11&languages=en&keywords=BTC';
var inputArea = $('#input')
var findBtn = $('.findBtn')




fetch(newsApi, {

})
.then (function(response) {
    return response.json()
})
.then (function(data) {
   console.log(data)
   console.log(data.data[0].title)
   console.log(data.data[0].description)
   console.log(data.data[0].url)
   console.log(data.data[5].title)
   console.log(data.data[5].description)
   console.log(data.data[5].url)
  
})

findBtn.on("click", function (event) {
    
    var input = inputArea.val().trim();
    var newsApiUrl = 'http://api.mediastack.com/v1/news?access_key=126705cb9c518744d6816588b7be6b11&languages=en&keywords='+input;
    console.log(newsApiUrl)

    fetch(newsApiUrl, {
    
})
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
       
   
})
})

