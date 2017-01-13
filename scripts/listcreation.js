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
		},
		{
			name: 'Away from the Keyboard',
			link: 'http://awayfromthekeyboard.com/'
		},
		{
			name: 'Simple Programmer',
			link: 'https://simpleprogrammer.com/podcasts/'
		},
		{
			name: 'Software Engineering Radio',
			link: 'http://www.se-radio.net/'
		},
		{
			name: '.Net Rocks',
			link: 'http://www.dotnetrocks.com/'
		},
		{
			name: 'HanselMinutes',
			link: 'http://hanselminutes.com/'
		},
		{
			name: ' Mixergy',
			link: 'https://mixergy.com/'
		}
	]
};

var linkList;
var navLinks;
var frame;
var toggleBox;

document.addEventListener('DOMContentLoaded', function(){
	linkList = document.getElementById('linklist');
	navLinks = document.getElementById('navlinks');
	frame = document.getElementById('frame');
	toggleBox = document.getElementById('toggle-box');

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
	frame.classList.add('frame');
	addNavbar();

}

var addNavbar = function() {
	toggleBox.style.display = 'block';
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