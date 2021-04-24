export class SearchComponent {
	searchBox = <HTMLElement>document.querySelector('.js-search');
	searchInput = <HTMLInputElement>document.querySelector('.js-search-input');
	openSearchBtn = <HTMLButtonElement>document.querySelector('.js-open-search');
	closeSearchBtn = <HTMLButtonElement>document.querySelector('.js-close-search');

	constructor() {
		this.handleSearch();
	}

	handleSearch() {
		this.openSearchBox();
		this.closeSearchBox();
	}

	openSearchBox() {
		this.openSearchBtn.addEventListener('click', () => {
			const timeout = 300;
			this.searchBox.classList.add('is-show');
			setTimeout(() => {
				this.searchInput.focus();
			}, timeout);
		});
	}

	closeSearchBox() {
		this.closeSearchBtn.addEventListener('click', () => {
			this.searchBox.classList.remove('is-show');
		});
	}

	static init() {
		const search = new SearchComponent();
		return search;
	}
}
