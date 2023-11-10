const iconLinkTag = document.querySelector('#icon');

window.matchMedia('(prefers-color-scheme: dark)').matches
	? (iconLinkTag.href = 'images/white-icon.svg')
	: (iconLinkTag.href = 'images/black-icon.svg');
