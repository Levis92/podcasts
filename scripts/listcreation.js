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

	addLinkList(true);
	addLinkList(false);
});

var clickLinkList = function(event) {
	linkList.style.display = 'none';
	frame.classList.add('frame');
	toggleBox.style.display = 'block';
	changeIframe(event);
}

var clickNavbar = function(event) {
	var toggle = document.getElementById('toggle');
	toggle.checked = false;
	var nav = document.getElementsByTagName('nav')[0];
	nav.style.display = 'none !important';
	changeIframe(event);
}

var changeIframe = function(event) {
	frame.src = event.target.attributes.value.textContent;
}

var addLinkList = function(condition) {
	data.podcasts.forEach(function(podcast) {
		var listItem = document.createElement('li');
		var link = document.createElement('button');
		var text = document.createTextNode(podcast.name);

		link.value = podcast.link;
		link.target = 'frame';
		if (condition) {
			link.setAttribute('onclick', 'clickLinkList(event)');
		} else link.setAttribute('onclick', 'clickNavbar(event)');

		link.appendChild(text);
		listItem.appendChild(link);

		if (condition) {
			linkList.appendChild(listItem);
		} else navLinks.appendChild(listItem);
	});
}

