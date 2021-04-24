import { SearchComponent } from '../search/search';
import { ToggleThemeComponent } from '../toggle-theme/toggle-theme';

export default class HeaderComponent {
	openNavButton = <HTMLElement>document.querySelector('.js-open-nav');
	closeNavButton = <HTMLElement>document.querySelector('.js-close-nav');
	mainNav = <HTMLElement>document.querySelector('.main-nav');
	constructor() {
		new ToggleThemeComponent();
		SearchComponent.init()
		this.handleMainNavMobile();
	}

	handleMainNavMobile() {
		this.openMainMenu();
		this.closeMainMenu();
	}

	openMainMenu() {
		this.openNavButton.addEventListener('click', () => {
			this.mainNav.classList.add('is-show');
		});
	}

	closeMainMenu() {
		this.closeNavButton.addEventListener('click', () => {
			this.mainNav.classList.remove('is-show');
		});
	}

	static init() {
		const header = new HeaderComponent();
		return header;
	}
}
