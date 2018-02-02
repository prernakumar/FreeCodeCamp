
var colors=['#00FFFF','#FF7F50','#BDB76B','#FFC0CB','#DDA0DD','#B0E0E6'];
function getQuote(){
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ){
          $(".quote-text").html("<p>"+response.quoteText+"<p>"+"<br>");
          $(".quote-author").html("<p>"+response.quoteAuthor+"<p>");

          backColor();
        }
    });

}

function backColor(){
            var color=Math.floor(Math.random()*colors.length);
            $(".quote-box").css("background-color", colors[color]);

}

function tweetQuote(){
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ){
    //$("#tweet").attr("href","https://twitter.com/home/?status=" + response.quoteText +
      //    ' (' + response.quoteAuthor + ')');
            //openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + response.quoteText + '" ' + response.quoteAuthor));
        window.location="https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')';
        }

    });
}

$(document).ready(function(){
    getQuote();

});
$("#newQuote").on("click",function(){
    getQuote();

});
$("#tweet").on("click",function(){
    tweetQuote();
});

