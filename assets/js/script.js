var newsApi = 'http://api.mediastack.com/v1/news?access_key=126705cb9c518744d6816588b7be6b11&languages=en&keywords=BTC';
var inputArea = $('#input')
var findBtn = $('.findBtn')
var paragraphBreak = document.createElement('br');
var newRandom = Math.floor(Math.random() * 10)
var randomArray = [];

function makeRandomArray(){
    for ( i = 0; randomArray.length < 5; i++){
        var newNewRandom = Math.floor(Math.random() * 9);
        for ( p = 0; p < randomArray.length; p++){
            if (newNewRandom === randomArray[p]){
                console.log('there is multiple of the number ' + newNewRandom);
                randomArray.splice( p, 1);
            }
        } 
        randomArray.push(newNewRandom);
        console.log(randomArray); 
    }
};
makeRandomArray();


// posts news on to website
var stockApi = "https://api.coincap.io/v2/assets"
fetch(stockApi, {

})
.then(function(response) {
   return response.json()
})
.then(function(data) {
    console.log(data)
    for (var i = 0; i < 5; i++){
        var name = data.data[i].name;
        var ranking = data.data[i].rank;
        var price = data.data[i].priceUsd;
        var symbol = data.data[i].symbol;
        console.log(name, ranking, Math.round(price *1000)/1000, symbol)


    }
<<<<<<< HEAD
    console.log(data.data[newRandom].name)
    var newNewsApi = "https://api.currentsapi.services/v1/search?keywords=" +data.data[newRandom].name+ "&language=en&apiKey=k6P8Em4qB8ukRQLGTafAvMDafmfTEUTmUeYB-tstXbZM_Xfy"
    fetch(newNewsApi, {
=======
    for( x = 0; x < randomArray.length; x++){
        console.log(data.data[randomArray[x]].name);
        var newNewsApi = "https://api.currentsapi.services/v1/search?keywords=" +data.data[randomArray[x]].name+ "&language=en&apiKey=k6P8Em4qB8ukRQLGTafAvMDafmfTEUTmUeYB-tstXbZM_Xfy";
        fetch(newNewsApi, {
>>>>>>> main

        })
        .then(function(response){
        return response.json()
        })
        .then(function(data){
        console.log(data);
        for ( var i = 1; i < 6; i++ ){
            var random = Math.floor(Math.random() * 24);
            var link = document.getElementById('list' + i);
            var paragraph = document.getElementById('par' + i);
            $(link).text(data.data[random].title);
            $(paragraph).text(data.data[random].description);
            $(link).attr("href", data.data[random].url);
            $(link).attr("target", data.data[random].url);
        }
        })
    }
})


// fetch(newsApi, {

// })
// .then (function(response) {
//     return response.json()
// })
// .then (function(data) {
//    console.log(data);
//    for( var i = 1; i < 6; i++){
//     var random = Math.floor(Math.random() * 24);
//     var link = document.getElementById('list' + i);
//     var paragraph = document.getElementById('par' + i);
//     console.log(random);
//     $(link).text(data.data[random].title);
//     $(paragraph).text(data.data[random].description);
//     $(link).attr("href", data.data[random].url);
//     $(link).attr("target", data.data[random].url);
//    }
// })

findBtn.on("click", function (event) {
    
    var input = inputArea.val().trim();
    var newsApiUrl = "https://api.currentsapi.services/v1/search?keywords=" +input+ "&language=en&apiKey=k6P8Em4qB8ukRQLGTafAvMDafmfTEUTmUeYB-tstXbZM_Xfy";
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