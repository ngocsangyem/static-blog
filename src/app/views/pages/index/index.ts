import HeaderComponent from '@/components/header/header';

export class IndexComponent {
	constructor() {
		HeaderComponent.init();
	}

	static init() {
		const index = new IndexComponent();
		return index;
	}
}
(function () {
	IndexComponent.init();
})();
