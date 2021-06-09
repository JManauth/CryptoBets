var newsApi = 'http://api.mediastack.com/v1/news?access_key=126705cb9c518744d6816588b7be6b11&languages=en&keywords=BTC';
var inputArea = $('#input')
var findBtn = $('.findBtn')
var paragraphBreak = document.createElement('br');

// posts news on to website



fetch(newsApi, {

})
.then (function(response) {
    return response.json()
})
.then (function(data) {
   console.log(data);
   for( var i = 1; i < 6; i++){
    var random = Math.floor(Math.random() * 24);
    var link = document.getElementById('list' + i);
    var paragraph = document.getElementById('par' + i);
    console.log(random);
    $(link).text(data.data[random].title);
    $(paragraph).text(data.data[random].description);
    $(link).attr("href", data.data[random].url);
    $(link).attr("target", data.data[random].url);
   }
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
        for( var i = 0; i < 5; i++){
            var link = document.getElementById('list' + i);
            var paragraph = document.getElementById('par' + i);
            $(link).text(data.data[i].title);
            $(paragraph).text(data.data[i].description);
            $(link).attr("href", data.data[i].url);
            $(link).attr("target", data.data[i].url);
        };
    })
});


