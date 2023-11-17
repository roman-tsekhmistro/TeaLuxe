const teaForCatalogue = [
	{
		img: '../images/catalogue-page/tea-img/tie-guan-yi.png',
		teaName: 'Tie Guan Yi',
		teaDescription: 'Fujian province of China',
		price: '50€',
		weight: '100 gr',
	},
	{
		img: '../images/catalogue-page/tea-img/da-hong-pao.png',
		teaName: 'Da Hong Pao',
		teaDescription: 'Wuyi Mountains, Fujian',
		price: '30€ ',
		weight: '100 gr',
	},
];

const catalogueList = document.querySelector('#tea-catalogue');

const createCatalogueItems = () => {
	teaForCatalogue.map((item) =>
		catalogueList.appendChild(createCatalogueItem(item))
	);
};

const createCatalogueItem = (tea) => {
	const catalogueLi = document.createElement('li');
	catalogueLi.classList.add('catalogue__list--item');

	catalogueLi.appendChild(createItemImg(tea.img));
	catalogueLi.appendChild(createItemTitle(tea.teaName));
	catalogueLi.appendChild(createItemSubtitle(tea.teaDescription));
	catalogueLi.appendChild(createItemFooter(tea));

	return catalogueLi;
};

const createItemImg = (pathToImg) => {
	const catalogueItemImg = document.createElement('img');

	catalogueItemImg.src = pathToImg;

	return catalogueItemImg;
};

const createItemTitle = (title) => {
	const itemTitle = document.createElement('h2');

	itemTitle.innerHTML = title;

	return itemTitle;
};

const createItemSubtitle = (subtitle) => {
	const itemSubtitle = document.createElement('h3');

	itemSubtitle.innerHTML = subtitle;

	return itemSubtitle;
};

const createItemPrice = (price) => {
	const itemPrice = document.createElement('h4');

	itemPrice.innerHTML = price;

	return itemPrice;
};

const createItemWeight = (weight) => {
	const itemWeight = document.createElement('p');

	itemWeight.innerHTML = weight;

	return itemWeight;
};

const createItemFooter = (item) => {
	const itemFooter = document.createElement('div');

	itemFooter.appendChild(createItemPrice(item.price));
	itemFooter.appendChild(createItemWeight(item.weight));

	return itemFooter;
};

createCatalogueItems();
