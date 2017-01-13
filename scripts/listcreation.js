var data = {
	podcasts: [
		{
			name: 'Full Stack Radio',
			link: 'http://www.fullstackradio.com/'
		},
		{
			name: 'Learn To Code With Me',
			link: 'http://learntocodewith.me/podcast/'
		},
		{
			name: 'Ctrl + Click Podcast',
			link: 'http://ctrlclickcast.com/'
		},
		{
			name: 'Start Here FM',
			link: 'http://starthere.fm/'
		},
		{
			name: 'Hello World Podcast',
			link: 'https://wildermuth.com/hwpod'
		}
	]
};

var linkList;
var navLinks;

document.addEventListener('DOMContentLoaded', function(){
	linkList = document.getElementById('linklist');
	navLinks = document.getElementById('navlinks');

	data.podcasts.forEach(function(podcast) {
		var listItem = document.createElement('li');
		var link = document.createElement('a');
		var text = document.createTextNode(podcast.name);

		link.href = podcast.link;
		link.target = 'frame';
		link.setAttribute('onclick', 'clickLinkList()');

		link.appendChild(text);
		listItem.appendChild(link);

		linkList.appendChild(listItem);
	});
});

var clickLinkList = function() {
	linkList.style.display = 'none';
	addNavbar();

}

var addNavbar = function() {
	data.podcasts.forEach(function(podcast) {
		var listItem = document.createElement('li');
		var link = document.createElement('a');
		var text = document.createTextNode(podcast.name);

		link.href = podcast.link;
		link.target = 'frame';
		link.onclick = 'clickNavbar()';

		link.appendChild(text);
		listItem.appendChild(link);

		navLinks.appendChild(listItem);
	});
}