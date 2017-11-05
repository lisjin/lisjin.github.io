var quotes = [];

function changeQuote() {
	if ($(".quote").is(":visible")) {
		var rand_quote = quotes[Math.floor(Math.random() * quotes.length)];
		$(".quote > p").html(rand_quote.quote);
		$(".quote > footer").html(rand_quote.author);
	}
}

$(function() {
	$.getJSON("static/js/quotes.json", function(data) {
		$.each(data.quotes, function(k, v) {
			quotes.push(v);
		});
		changeQuote();
	});
});
