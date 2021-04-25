import FooterComponent from '@/components/footer/footer';
import HeaderComponent from '@/components/header/header';

export class IndexComponent {
	constructor() {
		HeaderComponent.init();
		FooterComponent.init();
	}

	static init() {
		const index = new IndexComponent();
		return index;
	}
}
(function () {
	IndexComponent.init();
})();
