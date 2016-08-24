$(document).ready(function(){
	$('#search-term').submit(function(event) {
		event.preventDefault();
		var searchTerm = $('#query').val();
		console.log(searchTerm);
		getResults(searchTerm);
	});
});

/*To get results*/
function getResults(searchTerm) {
	var params = {
		part: 'snippet',
		key: 'AIzaSyBA2isVfGr3uYzEiI5uxCNiogM_sN4YuFE',
		q: searchTerm,
		maxResults: 10
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data) {
			showResults(data.items);
			console.log(data);
			console.log(data.items);
		});
}

/*To retrieve results*/
function showResults(items) {
	var html = "";
	$.each(items, function(index, value) {
		html += '<p><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '"target="_blank""><img src=' + value.snippet.thumbnails.default.url + '></a><br>' + value.snippet.title + '<br>' + value.snippet.publishedAt +'</p>';
		console.log(value.snippet.title);
		console.log(value.snippet.publishedAt);
	});
	$('#search-results').html(html);
}