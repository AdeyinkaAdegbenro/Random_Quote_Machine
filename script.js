var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function(data) {
  $(".message").html( '<i class="fa fa-quote-left" aria-hidden="true">' + '</i>'  + '   ' + 
data.quoteText + '<i class="fa fa-quote-right" aria-hidden="true">' + '</i>'  + '   '  );
  
  var quot = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + data.quoteText + ' \nSource:' + data.quoteAuthor ;
  
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  
 $("#quote-source").html('&mdash; ' + data.quoteAuthor);
  
  $(".twitter-share-button").attr("href", quot);
  
};
$(document).ready(function(){
  $('#getquote').on('click', function(){
  $.getJSON(url, getQuote,'jsonp')
    });

});