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
	{
		img: '../images/catalogue-page/tea-img/shui-xian.png',
		teaName: 'Shui Xian',
		teaDescription: 'Fujian province of China',
		price: '25€ ',
		weight: '100 gr',
	},
	{
		img: '../images/catalogue-page/tea-img/dong-ding.png',
		teaName: 'Dong Ding',
		teaDescription: 'Taiwan',
		price: '75€ ',
		weight: '100 gr',
	},
	{
		img: '/images/catalogue-page/tea-img/alishan.png',
		teaName: 'Alishan',
		teaDescription: 'Taiwan',
		price: '25€ ',
		weight: '100 gr',
	},
	{
		img: '/images/catalogue-page/tea-img/lishan.png',
		teaName: 'Lishan',
		teaDescription: 'Taiwan',
		price: '15€ ',
		weight: '100 gr',
	},
	{
		img: '/images/catalogue-page/tea-img/phoenix-dan-cong.png',
		teaName: 'Phoenix Dan Cong',
		teaDescription: 'Guangdong, China',
		price: '50€ ',
		weight: '100 gr',
	},
	{
		img: '/images/catalogue-page/tea-img/bai-hao-oolong.png',
		teaName: 'Bai Hao Oolong',
		teaDescription: 'Taiwan',
		price: '40€ ',
		weight: '100 gr',
	},
	{
		img: '/images/catalogue-page/tea-img/jin-xuan.png',
		teaName: 'Jin Xuan',
		teaDescription: 'Taiwan',
		price: '25€ ',
		weight: '100 gr',
	},
	{
		img: '/images/catalogue-page/tea-img/gui-fei.png',
		teaName: 'Gui Fei',
		teaDescription: 'Taiwan',
		price: '75€ ',
		weight: '100 gr',
	},
	{
		img: '/images/catalogue-page/tea-img/oriental-beauty.png',
		teaName: 'Oriental Beauty',
		teaDescription: 'Taiwan',
		price: '10€ ',
		weight: '100 gr',
	},
	{
		img: '/images/catalogue-page/tea-img/tie-luo-han.png',
		teaName: 'Tie Luo Han',
		teaDescription: 'Wuyi Mountains, Fujian, China',
		price: '25€ ',
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

	catalogueItemImg.classList.add('list__item--img');
	catalogueItemImg.src = pathToImg;

	return catalogueItemImg;
};

const createItemTitle = (title) => {
	const itemTitle = document.createElement('h2');

	itemTitle.classList.add('list__item--title');
	itemTitle.innerHTML = title;

	return itemTitle;
};

const createItemSubtitle = (subtitle) => {
	const itemSubtitle = document.createElement('h3');

	itemSubtitle.classList.add('list__item--subtitle');
	itemSubtitle.innerHTML = subtitle;

	return itemSubtitle;
};

const createItemPrice = (price) => {
	const itemPrice = document.createElement('h4');

	itemPrice.classList.add('list__item--price');
	itemPrice.innerHTML = price;

	return itemPrice;
};

const createItemWeight = (weight) => {
	const itemWeight = document.createElement('p');

	itemWeight.classList.add('list__item--weight');
	itemWeight.innerHTML = weight;

	return itemWeight;
};

const createItemFooter = (item) => {
	const itemFooter = document.createElement('div');

	itemFooter.classList.add('list__item--footer');
	itemFooter.appendChild(createItemPrice(item.price));
	itemFooter.appendChild(createItemWeight(item.weight));

	return itemFooter;
};

function addActionsForFiltersBtn() {
	const filtersButtons = document.getElementsByClassName('filters__btn');

	for (i = 0; i < filtersButtons.length; i++) {
		filtersButtons[i].addEventListener('click', function () {
			this.classList.toggle('active');
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + 'px';
			}
		});
	}
}

createCatalogueItems();
addActionsForFiltersBtn();
