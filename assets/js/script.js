var inputArea = $('#input');
var findBtn = $('.findBtn');
var card1 = $('#card1');
var card2 = $('#card2');
var card3 = $('#card3');
var card4 = $('#card4');
var card5 = $('#card5');
var paragraphBreak = document.createElement('br');
var newRandom = Math.floor(Math.random() * 10);
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
        var marketCap = data.data[i].marketCapUsd;
        var rank = document.getElementById("rank"+i);
        var names = document.getElementById("name"+i);
        var caps = document.getElementById("cap"+i);
        var prices = document.getElementById("price"+i);
        var symbol = document.getElementById("symbol"+i);
        console.log(name, ranking, symbol);
        $(rank).text("Rank: " +ranking);
        $(names).text(name);
        $(caps).text("Market Cap: " +Math.round(marketCap)+"$");
        $(prices).text("Current Price: " +Math.round(price * 1000)/1000+"$");


    }
    for( x = 0; x < randomArray.length; x++){
        console.log(data.data[randomArray[x]].name);
        var newNewsApi = "https://api.currentsapi.services/v1/search?keywords=" +data.data[randomArray[x]].name+ "&language=en&apiKey=k6P8Em4qB8ukRQLGTafAvMDafmfTEUTmUeYB-tstXbZM_Xfy";
        fetch(newNewsApi, {

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
            console.log(data.news[random].title);
            $(link).text(data.news[random].title);
            $(paragraph).text(data.news[random].description);
            $(link).attr("href", data.news[random].url);
            $(link).attr("target", data.news[random].url);
        }
        })
    }
})

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
        console.log(data);
        for( var i = 0; i < 5; i++){
            var link = document.getElementById('list' + i);
            var paragraph = document.getElementById('par' + i);
            $(link).text(data.news[i].title);
            $(paragraph).text(data.news[i].description);
            $(link).attr("href", data.news[i].url);
            $(link).attr("target", data.news[i].url);
        };
    })
});

card1.on('click', function(event){
    var cryptoName = $("#name0").text();
    var newsApiUrl = "https://api.currentsapi.services/v1/search?keywords=" +cryptoName+ "&language=en&apiKey=k6P8Em4qB8ukRQLGTafAvMDafmfTEUTmUeYB-tstXbZM_Xfy";
    console.log(newsApiUrl)

    fetch(newsApiUrl, {
    
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for( var i = 0; i < 5; i++){
            var link = document.getElementById('list' + i);
            var paragraph = document.getElementById('par' + i);
            $(link).text(data.news[i].title);
            $(paragraph).text(data.news[i].description);
            $(link).attr("href", data.news[i].url);
            $(link).attr("target", data.news[i].url);
        };
    })
    
})

card2.on('click', function(event){
    var cryptoName = $("#name1").text();
    var newsApiUrl = "https://api.currentsapi.services/v1/search?keywords=" +cryptoName+ "&language=en&apiKey=k6P8Em4qB8ukRQLGTafAvMDafmfTEUTmUeYB-tstXbZM_Xfy";
    console.log(newsApiUrl)

    fetch(newsApiUrl, {
    
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for( var i = 0; i < 5; i++){
            var link = document.getElementById('list' + i);
            var paragraph = document.getElementById('par' + i);
            $(link).text(data.news[i].title);
            $(paragraph).text(data.news[i].description);
            $(link).attr("href", data.news[i].url);
            $(link).attr("target", data.news[i].url);
        };
    })
    
})

card3.on('click', function(event){
    var cryptoName = $("#name2").text();
    var newsApiUrl = "https://api.currentsapi.services/v1/search?keywords=" +cryptoName+ "&language=en&apiKey=k6P8Em4qB8ukRQLGTafAvMDafmfTEUTmUeYB-tstXbZM_Xfy";
    console.log(newsApiUrl);

    fetch(newsApiUrl, {
    
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for( var i = 0; i < 5; i++){
            var link = document.getElementById('list' + i);
            var paragraph = document.getElementById('par' + i);
            $(link).text(data.news[i].title);
            $(paragraph).text(data.news[i].description);
            $(link).attr("href", data.news[i].url);
            $(link).attr("target", data.news[i].url);
        };
    })
    
})

card4.on('click', function(event){
    var cryptoName = $("#name3").text();
    var newsApiUrl = "https://api.currentsapi.services/v1/search?keywords=" +cryptoName+ "&language=en&apiKey=k6P8Em4qB8ukRQLGTafAvMDafmfTEUTmUeYB-tstXbZM_Xfy";
    console.log(newsApiUrl);
    
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
            $(link).text(data.news[i].title);
            $(paragraph).text(data.news[i].description);
            $(link).attr("href", data.news[i].url);
            $(link).attr("target", data.news[i].url);
        };
    })
    
})

card5.on('click', function(event){
    var cryptoName = $("#name4").text();
    var newsApiUrl = "https://api.currentsapi.services/v1/search?keywords=" +cryptoName+ "&language=en&apiKey=k6P8Em4qB8ukRQLGTafAvMDafmfTEUTmUeYB-tstXbZM_Xfy";
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
            $(link).text(data.news[i].title);
            $(paragraph).text(data.news[i].description);
            $(link).attr("href", data.news[i].url);
            $(link).attr("target", data.news[i].url);
        };
    })
    
})
